import React, { useState } from 'react';
import { useLanguage, Language } from '../context/LanguageContext';
import { Globe, Check, ChevronDown } from 'lucide-react';

interface LanguageSwitcherProps {
  variant?: 'navbar' | 'mobile' | 'floating';
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ variant = 'navbar' }) => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'es' as Language, label: 'Español', flag: '🇨🇷', short: 'ES' },
    { code: 'en' as Language, label: 'English', flag: '🇺🇸', short: 'EN' },
  ];

  const currentLang = languages.find(l => l.code === language) || languages[0];

  const handleSelect = (code: Language) => {
    setLanguage(code);
    setIsOpen(false);
  };

  if (variant === 'mobile') {
    return (
      <div className="flex items-center gap-2 p-1.5 bg-stone-100 rounded-2xl border border-stone-200">
        {languages.map((l) => {
          const isActive = l.code === language;
          return (
            <button
              key={l.code}
              onClick={() => handleSelect(l.code)}
              className={`flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-xl text-xs font-black transition-all ${
                isActive
                  ? 'bg-[#00795F] text-white shadow-xs'
                  : 'text-stone-700 hover:text-black hover:bg-stone-200/60'
              }`}
            >
              <span className="text-sm">{l.flag}</span>
              <span>{l.label}</span>
            </button>
          );
        })}
      </div>
    );
  }

  // Desktop Navbar Dropdown / Pill
  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-1.5 bg-stone-50 hover:bg-stone-100 border border-stone-200 hover:border-stone-300 rounded-xl text-xs font-black text-stone-800 transition-all shadow-2xs cursor-pointer group"
        aria-label="Seleccionar idioma / Select language"
        title="Cambiar idioma (Español / English)"
      >
        <Globe className="w-3.5 h-3.5 text-[#00795F]" />
        <span className="text-sm">{currentLang.flag}</span>
        <span className="tracking-wide uppercase">{currentLang.short}</span>
        <ChevronDown className={`w-3 h-3 text-stone-400 group-hover:text-stone-600 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <>
          <div 
            className="fixed inset-0 z-40" 
            onClick={() => setIsOpen(false)} 
          />
          <div className="absolute right-0 mt-2 w-40 bg-white border border-stone-200 rounded-2xl shadow-xl py-1.5 z-50 animate-fade-in">
            <div className="px-3 py-1 text-[10px] font-black uppercase text-stone-400 tracking-wider border-b border-stone-100 mb-1">
              Idioma / Language
            </div>
            {languages.map((l) => {
              const isActive = l.code === language;
              return (
                <button
                  key={l.code}
                  onClick={() => handleSelect(l.code)}
                  className={`w-full flex items-center justify-between px-3 py-2 text-xs font-bold transition-colors text-left ${
                    isActive
                      ? 'bg-emerald-50 text-[#00795F]'
                      : 'text-stone-700 hover:bg-stone-50 hover:text-black'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span className="text-base">{l.flag}</span>
                    <span>{l.label}</span>
                  </div>
                  {isActive && <Check className="w-3.5 h-3.5 text-[#00A550]" />}
                </button>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};
