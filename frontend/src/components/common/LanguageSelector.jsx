import { useState } from 'react';

const LANGUAGES = [
  { code: 'EN', label: 'English' },
  { code: 'HI', label: 'Hindi' },
  { code: 'MR', label: 'Marathi' },
];

const LanguageSelector = ({ selectedLanguage, onLanguageChange, theme = 'glass', className = '' }) => {
  const [internalSelected, setInternalSelected] = useState('EN');

  const selected = selectedLanguage !== undefined ? selectedLanguage : internalSelected;

  const handleSelect = (code) => {
    setInternalSelected(code);
    if (onLanguageChange) {
      onLanguageChange(code);
    }
  };

  const getThemeStyles = (code) => {
    const isSelected = selected === code;
    if (theme === 'dark') {
      return isSelected
        ? 'bg-primary-600 text-white font-semibold shadow-md'
        : 'text-gray-400 hover:text-white hover:bg-slate-800';
    }
    return isSelected
      ? 'bg-primary-600/80 text-white font-semibold shadow-md shadow-primary-900/40 border border-primary-500/50'
      : 'text-gray-300 hover:text-white hover:bg-white/10';
  };

  return (
    <div
      role="group"
      aria-label="Language selection"
      className={`inline-flex items-center p-1 rounded-xl bg-surface-800/60 border border-white/10 backdrop-blur-md ${className}`}
    >
      {LANGUAGES.map(({ code, label }) => (
        <button
          key={code}
          type="button"
          onClick={() => handleSelect(code)}
          aria-pressed={selected === code}
          title={label}
          className={`px-2.5 py-1 text-xs rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 ${getThemeStyles(
            code
          )}`}
        >
          {code}
        </button>
      ))}
    </div>
  );
};

export default LanguageSelector;
