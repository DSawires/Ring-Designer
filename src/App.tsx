/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { RingConfigurator } from './components/RingConfigurator';
import { ImageGenerator } from './components/ImageGenerator';
import { RingConfig } from './types';
import { motion } from 'motion/react';
import { Diamond } from 'lucide-react';

const DEFAULT_CONFIG: RingConfig = {
  metal: 'White Gold',
  gemstone: 'Diamond',
  cut: 'Round',
  setting: 'Solitaire',
  bandStyle: 'Plain',
  imageSize: '1K',
};

export default function App() {
  const [config, setConfig] = useState<RingConfig>(DEFAULT_CONFIG);

  return (
    <div className="min-h-screen bg-[#f9f8f6] text-stone-900 font-sans selection:bg-stone-200">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-stone-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-stone-900 rounded-full flex items-center justify-center text-white">
              <Diamond size={20} strokeWidth={1.5} />
            </div>
            <div>
              <h1 className="font-serif text-xl tracking-wide font-medium">BESPOKE</h1>
              <p className="text-[10px] uppercase tracking-[0.2em] text-stone-500">Ring Designer</p>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-stone-500">
            <a href="#" className="hover:text-stone-900 transition-colors">Collection</a>
            <a href="#" className="hover:text-stone-900 transition-colors">About</a>
            <a href="#" className="hover:text-stone-900 transition-colors">Contact</a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-28 pb-12 px-6 max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">
        
        {/* Left Column: Configurator */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full lg:w-5/12"
        >
          <RingConfigurator config={config} onChange={setConfig} />
        </motion.div>

        {/* Right Column: Preview (Sticky on Desktop) */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="w-full lg:w-7/12 lg:sticky lg:top-28 lg:h-[calc(100vh-9rem)]"
        >
          <div className="bg-white p-8 rounded-3xl shadow-2xl border border-white/50 h-full flex flex-col">
            <div className="mb-6">
              <h2 className="font-serif text-3xl text-stone-900 mb-2">Your Creation</h2>
              <p className="text-stone-500 font-light">
                {config.metal} band featuring a {config.cut} {config.gemstone} in a {config.setting} setting.
              </p>
            </div>
            
            <div className="flex-1 min-h-[400px]">
              <ImageGenerator config={config} />
            </div>
          </div>
        </motion.div>

      </main>
    </div>
  );
}

