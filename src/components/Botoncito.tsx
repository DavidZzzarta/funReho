import { MessageCircleQuestionMark as Iconcito } from "lucide-react";
import {Button} from "@heroui/react";
import { useState } from "react";

export function Botoncito() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-10">
      <div 
        className="relative"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        <Button 
          className='p-4 bg-gray-600 rounded-full w-12 h-12' 
          aria-label="Menu" 
          variant="secondary"
        >
          <Iconcito color="white" className='h-6 w-6'/>
        </Button>
        
        {isOpen && (
          <div className="absolute bottom-full right-0 mb-2 bg-content1 rounded-lg shadow-xl p-1 min-w-48 border border-divider">
            <div className="space-y-0.5">
              <button 
                className="w-full text-left px-3 py-2 hover:bg-default-100 rounded text-foreground text-sm"
                onClick={() => console.log('opcion1')}
              >
                opcion1
              </button>
              <button 
                className="w-full text-left px-3 py-2 hover:bg-default-100 rounded text-foreground text-sm"
                onClick={() => console.log('opcion2')}
              >
                opcion2
              </button>
              <button 
                className="w-full text-left px-3 py-2 hover:bg-default-100 rounded text-foreground text-sm"
                onClick={() => console.log('opcion3')}
              >
                opcion3
              </button>
              <button 
                className="w-full text-left px-3 py-2 hover:bg-danger-100 rounded text-danger text-sm"
                onClick={() => console.log('opcion4')}
              >
                opcion4
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
