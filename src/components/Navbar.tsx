import React, { useState, useRef, useEffect } from 'react';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import { Link, useRouter } from '../router';
import { getAffiliationWhatsAppUrl } from '../utils/whatsapp';

interface NavbarProps {}

export const Navbar: React.FC<NavbarProps> = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [contactDropdownOpen, setContactDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { currentPath } = useRouter();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setContactDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const mainLinks = [
    { label: 'Inicio', href: '/' },
    { label: 'Productos', href: '/productos' },
    { label: 'Membresías', href: '/membresias' },
    { label: 'Oportunidad de Negocio', href: '/oportunidad-de-negocio' },
    { label: 'Pre-registro', href: '/preregistro' },
    { label: 'Documentos PDF', href: '/documentos' },
  ];

  const contactLinks = [
    { label: 'Contacto y Envíos', href: '/contacto' },
    { label: 'Oficinas HGW LATAM', href: '/oficinas' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/98 backdrop-blur-md border-b border-stone-300 transition-all shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-6 h-20 sm:h-22">
          
          {/* Zone 1: Official Logo */}
          <Link to="/" className="flex items-center gap-3 shrink-0 group">
            <img
              src="https://media.academiahgw.online/wp-content/uploads/2026/11/hgw_logo.png"
              alt="HGW Costa Rica - Distribuidor Independiente"
              className="h-12 sm:h-14 w-auto object-contain group-hover:scale-102 transition-transform"
              referrerPolicy="no-referrer"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "https://media.academiahgw.online/wp-content/uploads/2026/11/hgw_logo.png";
              }}
            />
          </Link>

          {/* Zone 2: Navigation links with Contact Dropdown */}
          <nav className="hidden lg:flex items-center gap-7 text-base font-bold text-black">
            {mainLinks.map((link) => {
              const isActive = currentPath === link.href || (link.href !== '/' && currentPath.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`whitespace-nowrap shrink-0 transition-colors py-1 relative ${
                    isActive
                      ? 'text-[#00795F] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#00795F]'
                      : 'text-stone-900 hover:text-[#00795F]'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            {/* Contact Submenu */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setContactDropdownOpen(!contactDropdownOpen)}
                className={`flex items-center gap-1.5 whitespace-nowrap shrink-0 transition-colors py-1 cursor-pointer outline-none ${
                  contactLinks.some(l => currentPath === l.href)
                    ? 'text-[#00795F]'
                    : 'text-stone-900 hover:text-[#00795F]'
                }`}
              >
                <span>Contacto</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${contactDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {contactDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white border border-stone-200 rounded-2xl shadow-xl py-3 animate-fade-in slide-in-top">
                  {contactLinks.map((sublink) => (
                    <Link
                      key={sublink.href}
                      to={sublink.href}
                      onClick={() => setContactDropdownOpen(false)}
                      className={`block px-5 py-2.5 text-sm font-semibold transition-colors ${
                        currentPath === sublink.href
                          ? 'bg-emerald-50 text-[#00795F]'
                          : 'text-stone-700 hover:bg-stone-50 hover:text-[#00795F]'
                      }`}
                    >
                      {sublink.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* Zone 3: Menu Trigger */}
          <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-black hover:text-[#00795F] rounded-lg hover:bg-stone-100 transition-colors"
              aria-label="Menú principal"
            >
              {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile navigation dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-stone-200 bg-white px-4 pt-4 pb-6 shadow-xl animate-fade-in overflow-y-auto max-h-[85vh]">
          <div className="flex flex-col gap-1">
            {mainLinks.map((link) => {
              const isActive = currentPath === link.href || (link.href !== '/' && currentPath.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2.5 text-base font-bold rounded-xl transition-colors ${
                    isActive ? 'bg-emerald-50 text-[#00795F]' : 'text-stone-900 hover:text-[#00795F]'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            
            {/* Mobile Contact Group */}
            <div className="mt-2 pt-2 border-t border-stone-100">
              <span className="px-3 text-xs font-black text-stone-500 uppercase tracking-widest block mb-2">Contacto</span>
              {contactLinks.map((link) => {
                const isActive = currentPath === link.href;
                return (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-3 py-2.5 text-base font-bold rounded-xl transition-colors block ${
                      isActive ? 'bg-emerald-50 text-[#00795F]' : 'text-stone-900 hover:text-[#00795F]'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
