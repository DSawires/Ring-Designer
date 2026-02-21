import React from 'react';
import { RingConfig, METALS, GEMSTONES, CUTS, SETTINGS, BAND_STYLES, IMAGE_SIZES } from '../types';
import { motion } from 'motion/react';

interface RingConfiguratorProps {
  config: RingConfig;
  onChange: (config: RingConfig) => void;
}

const Section = ({ title, children }: { title: string, children: React.ReactNode }) => (
  <div className="mb-8">
    <h3 className="text-sm font-serif italic text-stone-500 mb-3 uppercase tracking-widest">{title}</h3>
    <div className="flex flex-wrap gap-2">
      {children}
    </div>
  </div>
);

const Option: React.FC<{ label: string, selected: boolean, onClick: () => void }> = ({ label, selected, onClick }) => (
  <motion.button
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    onClick={onClick}
    className={`px-4 py-2 rounded-full text-sm transition-all duration-300 border ${
      selected
        ? 'bg-stone-900 text-white border-stone-900 shadow-md'
        : 'bg-white text-stone-600 border-stone-200 hover:border-stone-400'
    }`}
  >
    {label}
  </motion.button>
);

export function RingConfigurator({ config, onChange }: RingConfiguratorProps) {
  const updateConfig = (key: keyof RingConfig, value: any) => {
    onChange({ ...config, [key]: value });
  };

  return (
    <div className="p-6 md:p-8 bg-white/50 backdrop-blur-sm rounded-2xl border border-white/20 shadow-xl">
      <h2 className="text-3xl font-serif font-light text-stone-900 mb-8">Design Your Ring</h2>

      <Section title="Metal">
        {METALS.map((metal) => (
          <Option
            key={metal}
            label={metal}
            selected={config.metal === metal}
            onClick={() => updateConfig('metal', metal)}
          />
        ))}
      </Section>

      <Section title="Center Stone">
        {GEMSTONES.map((gem) => (
          <Option
            key={gem}
            label={gem}
            selected={config.gemstone === gem}
            onClick={() => updateConfig('gemstone', gem)}
          />
        ))}
      </Section>

      <Section title="Cut">
        {CUTS.map((cut) => (
          <Option
            key={cut}
            label={cut}
            selected={config.cut === cut}
            onClick={() => updateConfig('cut', cut)}
          />
        ))}
      </Section>

      <Section title="Setting Style">
        {SETTINGS.map((setting) => (
          <Option
            key={setting}
            label={setting}
            selected={config.setting === setting}
            onClick={() => updateConfig('setting', setting)}
          />
        ))}
      </Section>

      <Section title="Band Style">
        {BAND_STYLES.map((style) => (
          <Option
            key={style}
            label={style}
            selected={config.bandStyle === style}
            onClick={() => updateConfig('bandStyle', style)}
          />
        ))}
      </Section>

      <Section title="Image Resolution">
        {IMAGE_SIZES.map((size) => (
          <Option
            key={size}
            label={size}
            selected={config.imageSize === size}
            onClick={() => updateConfig('imageSize', size)}
          />
        ))}
      </Section>
    </div>
  );
}
