// frontend/src/pages/SearchResults.tsx
/*
 * Search Results page
 * Why: Displays results from the global search functionality.
 * What it does: Reads the query param 'q' from URL, calls /search endpoint, and shows matches.
 * How to modify later: Add filters by type (questions, roadmaps, projects), pagination.
 * Common Mistakes: Not updating results when query changes; not handling empty results.
 */
import React, { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import api from '../services/api';

interface SearchResult {
  id: string;
  type: 'question' | 'roadmap' | 'project';
  title: string;
  description: string;
  url: string;
}

const SearchResults: React.FC = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const [results, setResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    const fetchResults = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await api.get(`/search?q=${encodeURIComponent(query)}`);
        setResults(res.data);
      } catch (err: any) {
        setError('Search failed. Please try again.');
      } finally {
        setLoading(false);
      }
    };
    fetchResults();
  }, [query]);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-2">Search Results</h1>
      {query && (
        <p className="text-gray-600 mb-8">
          Showing results for "<strong>{query}</strong>"
        </p>
      )}

      {loading && (
        <div className="space-y-4">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="bg-white rounded-xl shadow p-6 animate-pulse">
              <div className="h-5 bg-gray-200 rounded w-1/4 mb-3" />
              <div className="h-4 bg-gray-200 rounded w-3/4 mb-2" />
              <div className="h-4 bg-gray-200 rounded w-1/2" />
            </div>
          ))}
        </div>
      )}

      {error && (
        <div className="bg-red-50 text-red-700 p-4 rounded-lg">{error}</div>
      )}

      {!loading && !error && query && results.length === 0 && (
        <div className="text-center py-16">
          <p className="text-gray-500 text-lg">No results found for "{query}".</p>
          <p className="text-gray-400 mt-2">Try a different term or browse categories.</p>
        </div>
      )}

      {!loading && results.length > 0 && (
        <div className="space-y-4">
          {results.map((item) => (
            <Link
              key={`${item.type}-${item.id}`}
              to={item.url}
              className="block bg-white rounded-xl shadow p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-2 mb-1">
                <span className="inline-block px-2 py-0.5 text-xs font-medium rounded-full bg-gray-100 text-gray-600 capitalize">
                  {item.type}
                </span>
              </div>
              <h2 className="text-lg font-semibold text-gray-800">{item.title}</h2>
              <p className="text-gray-600 mt-1">{item.description}</p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchResults;