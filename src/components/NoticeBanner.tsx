import React from 'react';
import { ShieldCheck, PhoneCall } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const NoticeBanner: React.FC = () => {
  const { t } = useLanguage();

  return (
    <aside aria-label="Aviso de Distribuidor Independiente y Soporte a Socios" className="bg-[#004d3c] text-white text-xs py-2 px-4 border-b border-[#00795F]/40">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2 text-center md:text-left">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-[#00A550] shrink-0" />
          <p className="text-emerald-50 text-[11px] sm:text-xs leading-tight">
            <strong className="text-white">{t('banner.site', 'Sitio de Distribuidores Independientes:')}</strong> {t('banner.whatsapp_info', 'WhatsApp comercial +507 6778-8375 exclusivo para ventas y nuevas afiliaciones.')}
          </p>
        </div>
        <div className="text-[11px] text-emerald-100 flex items-center gap-1.5 justify-center md:justify-end">
          <PhoneCall className="w-3.5 h-3.5 text-emerald-300 shrink-0" />
          <span>
            {t('banner.partner_question', '¿Ya eres socio registrado?')} {t('banner.partner_action', 'Contacta a tu patrocinador o a oficinas principales:')} <strong className="text-white font-bold">+506 7185-5885</strong>
          </span>
        </div>
      </div>
    </aside>
  );
};
