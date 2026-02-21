import React, { useState } from 'react';
import { RingConfig } from '../types';
import { generateRingImage } from '../services/gemini';
import { Loader2, Sparkles, Download } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ImageGeneratorProps {
  config: RingConfig;
}

export function ImageGenerator({ config }: ImageGeneratorProps) {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = async () => {
    setLoading(true);
    setError(null);
    try {
      const url = await generateRingImage(config);
      setImageUrl(url);
    } catch (err: any) {
      setError(err.message || "Failed to generate image");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 relative bg-stone-100 rounded-2xl overflow-hidden border border-stone-200 shadow-inner flex items-center justify-center min-h-[400px]">
        <AnimatePresence mode="wait">
          {imageUrl && !loading ? (
            <motion.div
              key="image"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="relative w-full h-full"
            >
              <img
                src={imageUrl}
                alt="Generated Ring"
                className="w-full h-full object-contain p-4"
              />
              <div className="absolute bottom-4 right-4">
                <a
                  href={imageUrl}
                  download="bespoke-ring.png"
                  className="p-3 bg-white/80 backdrop-blur-md rounded-full shadow-lg hover:bg-white transition-colors flex items-center justify-center text-stone-800"
                  title="Download Image"
                >
                  <Download size={20} />
                </a>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="placeholder"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center p-8"
            >
              {loading ? (
                <div className="flex flex-col items-center gap-4">
                  <Loader2 className="w-12 h-12 animate-spin text-stone-400" />
                  <p className="text-stone-500 font-serif italic">Crafting your design...</p>
                  <p className="text-xs text-stone-400">This may take a moment for high resolution</p>
                </div>
              ) : (
                <div className="flex flex-col items-center gap-4 text-stone-400">
                  <Sparkles className="w-16 h-16 opacity-20" />
                  <p className="font-serif italic text-lg">Your masterpiece awaits</p>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {error && (
          <div className="absolute inset-0 bg-red-50/90 flex items-center justify-center p-6 text-center">
            <div className="text-red-600">
              <p className="font-semibold mb-2">Generation Failed</p>
              <p className="text-sm">{error}</p>
              <button 
                onClick={() => setError(null)}
                className="mt-4 px-4 py-2 bg-white border border-red-200 rounded-full text-sm hover:bg-red-50"
              >
                Dismiss
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="mt-6">
        <motion.button
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
          onClick={handleGenerate}
          disabled={loading}
          className={`w-full py-4 rounded-xl font-serif text-lg tracking-wide transition-all duration-300 flex items-center justify-center gap-3 shadow-lg ${
            loading
              ? 'bg-stone-200 text-stone-400 cursor-not-allowed'
              : 'bg-stone-900 text-white hover:bg-stone-800 shadow-stone-900/20'
          }`}
        >
          {loading ? (
            'Generating...'
          ) : (
            <>
              <Sparkles size={20} />
              Generate Preview
            </>
          )}
        </motion.button>
        <p className="text-center mt-3 text-xs text-stone-400">
          Powered by Gemini 3 Pro Image Preview. Requires a paid API key.
        </p>
      </div>
    </div>
  );
}
