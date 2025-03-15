'use client';

import { useState, useEffect } from 'react';
import quotes, { Quote } from '../data/quotes';

export default function Home() {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [showFavorites, setShowFavorites] = useState<boolean>(false);
  const [favorites, setFavorites] = useState<string[]>([]); // Default to empty array
  const [tagFilter, setTagFilter] = useState<string>(''); // New state for tag filter

  // Load favorites from localStorage only on client-side
  useEffect(() => {
    const storedFavorites = localStorage.getItem('favorites');
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []); // Runs once on mount, client-side only

  const allTags = Array.from(new Set(quotes.flatMap((q: Quote) => q.tags))).sort();

  const filteredQuotes: Quote[] = quotes.filter((q: Quote) =>
    (q.text.toLowerCase().includes(searchTerm.toLowerCase()) || q.author.toLowerCase().includes(searchTerm.toLowerCase())) &&
    (tagFilter ? q.tags.includes(tagFilter) : true)
  );
    const displayQuotes: Quote[] = showFavorites
    ? filteredQuotes.filter((q: Quote) => favorites.includes(q.text))
    : filteredQuotes;

  const toggleFavorite = (quoteText: string): void => {
    const newFavorites: string[] = favorites.includes(quoteText)
      ? favorites.filter((f: string) => f !== quoteText)
      : [...favorites, quoteText];
    setFavorites(newFavorites);
    localStorage.setItem('favorites', JSON.stringify(newFavorites));
  };
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8 md bg-desktop bg-mobile"
    style={{
      backgroundSize: 'contain',
      backgroundPosition: 'top center',
      backgroundRepeat: 'no-repeat'
    }}
    >
      <div className="flex justify-center items-center mb-6 bg-black p-4 size-fit rounded mx-auto ">
        <img 
          src="/sq_logo.png" 
          alt="Stoic Quote Logo" 
          className="w-20 h-20 mr-3" 
        />
        <h1 className="text-3xl font-bold text-center">Stoic Quote Library</h1>
      </div>      
      <div className="flex flex-col md:flex-row flex justify-center mb-6 space-x-4 gap-4">
      <input
          type="text"
          placeholder="Search quotes..."
          value={searchTerm}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
          className="w-full md:w-fit p-2  rounded bg-gray-800 border border-gray-700 focus:outline-none"
        />

        <select
          value={tagFilter}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setTagFilter(e.target.value)}
          className="w-full md:w-fit p-2 rounded bg-gray-800 border border-gray-700 focus:outline-none"
        >
          <option value="">All Tags</option>
          {allTags.map((tag: string) => (
            <option key={tag} value={tag}>
              {tag.charAt(0).toUpperCase() + tag.slice(1)}
            </option>
          ))}
        </select>
        <button
          onClick={() => setShowFavorites(!showFavorites)}
          className="px-4 py-2 text-white cursor-pointor text-base font-bold
 text-center outline-none border-none relative  bg-gray-800
 hover:bg-[#004775cc] hover:top-0.5 transition-all duration-300 ease-in-out shadow-inner"
        >
          {showFavorites ? 'Show All' : 'Show Favorites'}
        </button>
      </div>      
      <div className="text-center mb-10">
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
        {displayQuotes.map((quote: Quote, i: number) => (
          <div key={i} className={`p-4 bg-gray-800/90 rounded-bl-[40px] shadow ${favorites.includes(quote.text) ? 'border border-yellow-400' : ''}`}>
            <p className="italic">"{quote.text}"</p>
            <p className="mt-2 text-gray-300">
              — {quote.author}, <em className="text-gray-400">{quote.source}</em>
            </p>
            <button
              onClick={() => toggleFavorite(quote.text)}
              className={`mt-2 text-sm p-2 hover:bg-[#001c2ecc] hover:top-0.5 transition-all duration-300 ease-in-out shadow-inner ${favorites.includes(quote.text) ? 'text-yellow-400' : 'text-gray-400'}`}
            >
              {favorites.includes(quote.text) ? '★ Favorited' : '☆ Favorite'}
            </button>
          </div>
        ))}
      </div>
      <footer className="mt-8 text-center ">
        <div className="bg-gray-800/75 text-gray-200 text-sm size-fit mx-auto p-4 rounded">
          Built by Michael Lawrence | Codemic Solutions | <a
            href="https://x.com/michael_c_law"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 text-gray-300 hover:text-white"
          >
            𝕏
          </a>

        </div>
      </footer>
    </div>
  );  

}
