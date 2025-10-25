'use client';

import { useTheme } from 'next-themes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="p-2 rounded-full hover:bg-gray-700 transition-colors"
      aria-label="Changer de thème"
    >
      {theme === 'dark' ? (
        <FontAwesomeIcon icon={faSun} className="h-5 w-5 text-yellow-400" />
      ) : (
        <FontAwesomeIcon icon={faMoon} className="h-5 w-5 text-gray-400" />
      )}
    </button>
  );
}
