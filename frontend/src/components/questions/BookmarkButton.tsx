export default function ShareButton() {
  const share = () => {
    if (navigator.share) navigator.share({ title: document.title, url: window.location.href });
    else alert('Copy link: ' + window.location.href);
  };
  return <button onClick={share} className="p-2 text-gray-500 hover:text-primary">↗ Share</button>;
}