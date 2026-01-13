
import React, { useState, useMemo } from 'react';
import { Share2, Info, ChevronLeft, ChevronRight } from 'lucide-react';
import pagecontent from './components/pagecontent';
import flipsheet from './components/flipsheet';
import expandedimage from './components/expandedimage';
import { MenuItem } from './types';
import { MENU_ITEMS } from './constants';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);

  const sheets = useMemo(() => [
    {
      front: <PageContent type="cover" />,
      back: <PageContent 
        type="menu" 
        title="Entrées" 
        items={MENU_ITEMS.filter(i => i.category === 'Entrées')} 
        onItemClick={setSelectedItem} 
      />
    },
    {
      front: <PageContent 
        type="menu" 
        title="Viandes" 
        items={MENU_ITEMS.filter(i => i.category === 'Viandes')} 
        onItemClick={setSelectedItem} 
      />,
      back: <PageContent 
        type="menu" 
        title="Poissons" 
        items={MENU_ITEMS.filter(i => i.category === 'Poissons')} 
        onItemClick={setSelectedItem} 
      />
    },
    {
      front: <PageContent 
        type="menu" 
        title="Pizzas" 
        items={MENU_ITEMS.filter(i => i.category === 'Pizzas')} 
        onItemClick={setSelectedItem} 
      />,
      back: <PageContent 
        type="menu" 
        title="Desserts" 
        items={MENU_ITEMS.filter(i => i.category === 'Desserts')} 
        onItemClick={setSelectedItem} 
      />
    },
    {
      front: <PageContent 
        type="menu" 
        title="Boissons" 
        items={MENU_ITEMS.filter(i => i.category === 'Boissons')} 
        onItemClick={setSelectedItem} 
      />,
      back: <PageContent type="back" />
    }
  ], []);

  const totalSheets = sheets.length;
  const totalLogicalPages = totalSheets * 2;

  const handleNext = () => {
    if (currentPage < totalLogicalPages - 1) {
      setCurrentPage(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage(prev => prev - 1);
    }
  };

  const isBackSide = currentPage % 2 !== 0;
  const canvasTranslation = isBackSide ? 'translateX(50%)' : 'translateX(-50%)';

  return (
    <div className="h-screen w-screen bg-stone-950 flex flex-col items-center justify-between p-4 overflow-hidden safe-area-inset">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-600/5 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-900/5 rounded-full blur-[100px]"></div>
      </div>

      <header className="w-full flex justify-between items-center py-2 z-50">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 border border-amber-600/40 flex items-center justify-center text-amber-500 font-serif text-sm">E</div>
          <h1 className="text-amber-500 font-serif text-xs tracking-widest uppercase">L'Éclat d'Or</h1>
        </div>
        <div className="flex gap-2">
          <button className="p-2 text-stone-600 hover:text-amber-500 transition-colors"><Share2 size={18} /></button>
          <button className="p-2 text-stone-600 hover:text-amber-500 transition-colors"><Info size={18} /></button>
        </div>
      </header>

      <main className="flex-1 w-full flex items-center justify-center relative z-20 overflow-visible">
        <div className="book-viewport">
          <div 
            className="book-canvas"
            style={{ transform: canvasTranslation }}
          >
            {sheets.map((sheet, idx) => {
              const isFlipped = currentPage > (idx * 2);
              const zIndex = isFlipped ? idx : totalSheets - idx;
              const isCurrentlyInView = Math.floor(currentPage / 2) === idx;

              return (
                <FlipSheet 
                  key={idx}
                  isFlipped={isFlipped}
                  isActive={isCurrentlyInView}
                  zIndex={zIndex}
                  frontContent={sheet.front}
                  backContent={sheet.back}
                />
              );
            })}
          </div>
        </div>

        {/* 
          ZONES DE CLIC DE NAVIGATION :
          Réduites à 8% pour libérer le contenu du menu.
        */}
        <div className="absolute inset-0 z-[40] flex pointer-events-none">
          <div className="w-[8%] h-full pointer-events-auto cursor-w-resize" onClick={handlePrev} title="Précédent" />
          <div className="flex-1 h-full pointer-events-none" />
          <div className="w-[8%] h-full pointer-events-auto cursor-e-resize" onClick={handleNext} title="Suivant" />
        </div>
      </main>

      <footer className="w-full flex flex-col items-center gap-6 pb-8 z-50">
        <div className="flex items-center justify-between w-full max-w-xs px-4">
          <button 
            onClick={handlePrev}
            disabled={currentPage === 0}
            className={`flex items-center gap-2 text-[10px] uppercase tracking-widest transition-all ${currentPage === 0 ? 'opacity-0' : 'text-amber-600 active:scale-90'}`}
          >
            <ChevronLeft size={16} /> Précédent
          </button>
          
          <div className="flex gap-1.5">
            {Array.from({ length: totalLogicalPages }).map((_, idx) => (
              <div
                key={idx}
                className={`h-1 rounded-full transition-all duration-300 ${
                  currentPage === idx ? 'w-4 bg-amber-500' : 'w-1.5 bg-stone-800'
                }`}
              />
            ))}
          </div>

          <button 
            onClick={handleNext}
            disabled={currentPage === totalLogicalPages - 1}
            className={`flex items-center gap-2 text-[10px] uppercase tracking-widest transition-all ${currentPage === totalLogicalPages - 1 ? 'opacity-0' : 'text-amber-600 active:scale-90'}`}
          >
            Suivant <ChevronRight size={16} />
          </button>
        </div>
      </footer>

      <ExpandedImage item={selectedItem} onClose={() => setSelectedItem(null)} />
    </div>
  );
};

export default App;
