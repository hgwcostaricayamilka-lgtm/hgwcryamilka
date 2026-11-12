import React from 'react';
import { Phone, Mail, ExternalLink, ShieldCheck, MapPin } from 'lucide-react';
import { Link } from '../router';
import { useLanguage } from '../context/LanguageContext';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-stone-900 text-stone-300 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-12">
          
          {/* Brand info */}
          <div className="lg:col-span-5 space-y-3">
            <Link to="/inicio" className="flex items-center gap-3">
              <img
                src="https://media.academiahgw.online/wp-content/uploads/2026/11/hgw_logo.png"
                alt="HGW Costa Rica - Distribuidor Independiente"
                className="h-12 w-auto object-contain brightness-0 invert"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://media.academiahgw.online/wp-content/uploads/2026/11/hgw_logo.png";
                }}
              />
            </Link>
            <p className="text-stone-300 text-xs sm:text-sm leading-relaxed max-w-sm pt-1">
              {t('footer.brand_text', 'Distribuidores Independientes autorizados de Health Green World en Costa Rica. Bienestar holístico mediante productos formulados con extractos ancestrales de arándano, turmalina, ganoderma y fitonutrientes.')}
            </p>
            <div className="pt-1">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-stone-800 text-emerald-400 text-xs font-bold border border-stone-700">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>{t('hero.badge', 'Distribuidores Independientes Autorizados')}</span>
              </span>
            </div>
          </div>

          {/* Quick Links with friendly URLs */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">
              {t('footer.links_title', 'Navegación del Sitio')}
            </h3>
            <ul className="space-y-2 text-stone-300 text-sm font-medium">
              <li>
                <Link to="/inicio" className="hover:text-emerald-400 transition-colors">
                  {t('nav.home', 'Inicio')}
                </Link>
              </li>
              <li>
                <Link to="/productos" className="hover:text-emerald-400 transition-colors">
                  {t('nav.products', 'Catálogo de Productos')}
                </Link>
              </li>
              <li>
                <Link to="/membresias" className="hover:text-emerald-400 transition-colors">
                  {t('nav.memberships', 'Membresías de Activación')}
                </Link>
              </li>
              <li>
                <Link to="/oportunidad-de-negocio" className="hover:text-emerald-400 transition-colors">
                  {t('nav.business', 'Oportunidad de Negocio')}
                </Link>
              </li>
              <li>
                <Link to="/preregistro" className="hover:text-emerald-400 transition-colors font-bold text-emerald-300">
                  {t('nav.preregister', 'Pre-registro')}
                </Link>
              </li>
              <li>
                <Link to="/oficinas" className="hover:text-emerald-400 transition-colors">
                  {t('nav.offices', 'Directorio Oficinas LATAM')}
                </Link>
              </li>
              <li>
                <Link to="/documentos" className="hover:text-emerald-400 transition-colors">
                  {t('nav.documents', 'Documentos PDF')}
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="hover:text-emerald-400 transition-colors">
                  {t('nav.contact_shipping', 'Contacto y Envíos')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Direct Contact info */}
          <div className="lg:col-span-4 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">
              {t('footer.contact_title', 'Oficinas Principales y Envíos Costa Rica')}
            </h3>
            <div className="space-y-2 text-stone-300 text-xs sm:text-sm">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#00A550] shrink-0 mt-0.5" />
                <span>
                  {t('footer.address', 'San José El Carmen, Avenida 5 Calle 1, San José, Costa Rica.')}
                </span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#00A550] shrink-0" />
                <span>Oficina Principal: <strong className="text-white font-bold">+506 7185-5885</strong> (Atención Corporativa)</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>WhatsApp Distribuidor: <strong className="text-white font-bold">+507 6778-8375</strong></span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#00A550] shrink-0" />
                <span>Email: <strong className="text-white font-bold select-all">hgwcostarica@gmail.com</strong></span>
              </p>
              <div className="p-2.5 bg-stone-800 rounded-xl border border-stone-700/80 text-[11px] text-stone-300 leading-snug">
                <strong className="text-emerald-400 font-bold block mb-0.5">{t('footer.support_title', 'Soporte a Socios Registrados:')}</strong>
                {t('footer.support_text', 'Si ya es socio activo de HGW, debe comunicarse directamente con su patrocinador o con el teléfono corporativo +506 7185-5885. El WhatsApp de este sitio corresponde a distribuidores independientes.')}
              </div>
              <p className="pt-1 text-xs text-stone-400 leading-relaxed">
                {t('footer.hours', 'Horario: Lun - Vie 9:00 am a 5:30 pm | Sáb 10:00 am a 2:00 pm. Envíos por Correos de Costa Rica a todo el país.')}
              </p>
              <div className="pt-2">
                <a
                  href="https://www.healthgreenworld.com/?userName=Yamilka507"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-emerald-400 hover:text-emerald-300 transition-colors font-bold"
                >
                  <span>Portal Oficial Health Green World (Yamilka507)</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Mandatory Independent Distributor Notice & Medical Disclaimer */}
        <div className="pt-8 border-t border-stone-800 text-xs text-stone-400 leading-relaxed space-y-3">
          <p className="bg-stone-800/80 p-4 rounded-xl border border-stone-700/60 text-stone-300">
            {t('footer.legal_notice', 'Aviso Legal y de Independencia: Este sitio web es de carácter informativo y comercial, operado de manera autónoma por Distribuidores Independientes autorizados de Health Green World (HGW) en Costa Rica. No constituye la página web corporativa oficial ni la sede principal de Health Green World Inc. Las marcas registradas, logotipos y nombres comerciales mostrados pertenecen a sus respectivos propietarios y se utilizan únicamente con fines ilustrativos e informativos.')}
          </p>

          <p>
            {t('footer.medical_disclaimer', 'Descargo de Responsabilidad Nutricional y de Salud: Los productos presentados en este sitio corresponden a alimentos funcionales, infusiones, suplementos nutricionales y artículos de cuidado personal. No son medicamentos y no han sido formulados para diagnosticar, mitigar, tratar, curar ni prevenir ninguna enfermedad o padecimiento. Consulte siempre a su médico o especialista de confianza ante cualquier inquietud de salud o antes de iniciar el consumo de cualquier suplemento si se encuentra en estado de embarazo, lactancia o bajo medicación médica.')}
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-stone-400 text-xs">
            <p>© {new Date().getFullYear()} HGW Costa Rica · {t('footer.rights', 'Distribuidores Independientes Autorizados.')}</p>
            <p>{t('footer.country', 'Costa Rica, República de Costa Rica')}</p>
          </div>
        </div>

      </div>
    </footer>
  );
};

