
import React from 'react';
import { MenuItem } from '../types';

interface PageContentProps {
  type: 'cover' | 'menu' | 'back';
  title?: string;
  items?: MenuItem[];
  onItemClick?: (item: MenuItem) => void;
}

const PageContent: React.FC<PageContentProps> = ({ type, title, items, onItemClick }) => {
  if (type === 'cover') {
    return (
      <div className="h-full w-full flex flex-col items-center justify-center p-6 text-center bg-stone-900 relative overflow-hidden">
        <div className="absolute inset-4 border border-amber-600/20 pointer-events-none"></div>
        <div className="relative z-10 flex flex-col items-center">
          <div className="w-16 h-16 mb-6 border border-amber-500/50 flex items-center justify-center rotate-45 bg-stone-900/50">
            <span className="text-3xl font-serif text-amber-500 -rotate-45">E</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-serif text-amber-500 tracking-[0.2em] mb-3 uppercase leading-tight">
            L'Éclat<br/><span className="text-2xl md:text-4xl">d'Or</span>
          </h1>
          <div className="w-12 h-[1px] bg-amber-600/50 mb-4"></div>
          <p className="text-amber-600/70 uppercase tracking-[0.4em] text-[10px] font-light mb-8">Gastronomie Fine</p>
          <div className="italic text-stone-500 text-xs font-light max-w-[180px] leading-relaxed">
            "Une poésie culinaire à chaque tour de page"
          </div>
        </div>
        <div className="absolute bottom-10 text-[9px] text-amber-700/50 uppercase tracking-[0.3em] font-medium animate-pulse">
          Défiler pour ouvrir
        </div>
      </div>
    );
  }

  if (type === 'menu') {
    return (
      <div className="h-full w-full flex flex-col p-6 md:p-10 bg-stone-900 relative overflow-hidden">
        <div className="mb-8">
          <h2 className="text-2xl font-serif text-amber-500 tracking-[0.15em] text-center uppercase">
            {title}
          </h2>
          <div className="flex items-center justify-center gap-3 mt-3">
            <div className="h-[1px] w-8 bg-amber-900/50"></div>
            <div className="w-1.5 h-1.5 border border-amber-800 rotate-45"></div>
            <div className="h-[1px] w-8 bg-amber-900/50"></div>
          </div>
        </div>
        
        <div className="flex-1 space-y-8 overflow-y-auto no-scrollbar py-2 relative z-[60]">
          {items?.map((item) => (
            <div 
              key={item.id} 
              className="group cursor-pointer active:scale-[0.98] transition-all relative"
              style={{ pointerEvents: 'auto' }}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                if (onItemClick) {
                  onItemClick(item);
                }
              }}
            >
              <div className="flex justify-between items-baseline gap-2 mb-1">
                <h3 className="text-lg font-serif text-amber-200 group-hover:text-amber-500 transition-colors leading-tight uppercase tracking-wide">
                  {item.name}
                </h3>
                <div className="flex-grow border-b border-dotted border-amber-900/40 mb-1.5 mx-1"></div>
                <span className="text-amber-500 font-serif text-lg whitespace-nowrap">{item.price}</span>
              </div>
              <p className="text-stone-500 text-xs leading-relaxed italic font-light pr-8">
                {item.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-8 pt-4 flex justify-center border-t border-amber-900/10 opacity-20">
           <div className="text-[10px] tracking-[0.4em] text-amber-700 font-serif uppercase">L'Éclat d'Or</div>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full w-full flex flex-col items-center justify-center p-8 text-center bg-stone-950 border border-amber-900/20">
      <h2 className="text-lg font-serif text-amber-600 mb-8 uppercase tracking-widest">Informations</h2>
      <div className="space-y-6 text-stone-500 text-[10px] font-light tracking-widest">
        <div>
          <p className="text-amber-800 uppercase text-[8px] mb-2 tracking-[0.2em]">Localisation</p>
          <p>12 Avenue de la Toison d'Or<br/>75008 Paris</p>
        </div>
        <div className="w-8 h-[1px] bg-amber-900/50 mx-auto"></div>
        <div>
          <p className="text-amber-800 uppercase text-[8px] mb-2 tracking-[0.2em]">Service</p>
          <p>Dîner : 19h00 — 00h00</p>
        </div>
      </div>
    </div>
  );
};

export default PageContent;
