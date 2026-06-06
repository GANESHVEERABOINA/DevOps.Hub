// frontend/src/components/questions/ShareButton.tsx
/*
 * ShareButton component
 * Why: Allows users to share a question via Web Share API or copy link.
 * How it works: Tries the native share sheet on mobile; falls back to copying the URL to clipboard.
 * Dependencies: None.
 * Common Mistakes: Not checking for navigator.share availability before calling it.
 */

import React, { useState } from 'react';

const ShareButton: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const url = window.location.href;
    const title = document.title;

    // Use Web Share API if available (mostly mobile devices)
    if (navigator.share) {
      try {
        await navigator.share({ title, url });
      } catch (error) {
        // User cancelled or error occurred – silently ignore
        console.error('Share failed:', error);
      }
    } else {
      // Fallback: copy to clipboard
      try {
        await navigator.clipboard.writeText(url);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        // Clipboard write failed – show prompt fallback
        window.prompt('Copy this link to share:', url);
      }
    }
  };

  return (
    <button
      onClick={handleShare}
      className="inline-flex items-center gap-1 px-3 py-1.5 text-sm font-medium text-gray-600 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
      aria-label="Share this question"
    >
      {copied ? (
        <>
          <span className="text-green-500">✓</span> Copied
        </>
      ) : (
        <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
            />
          </svg>
          Share
        </>
      )}
    </button>
  );
};

export default ShareButton;