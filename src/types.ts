export type Metal = 'Yellow Gold' | 'White Gold' | 'Silver' | 'Platinum' | 'Titanium';
export type Gemstone = 'Diamond' | 'Sapphire' | 'Ruby' | 'Emerald' | 'Amethyst' | 'Citrine' | 'Morganite' | 'Moissanite' | 'Opal';
export type Cut = 'Round' | 'Princess' | 'Oval' | 'Emerald' | 'Pear' | 'Marquise' | 'Cushion';
export type Setting = 'Solitaire' | 'Halo' | 'Pave' | 'Three Stone' | 'Vintage' | 'Bezel';
export type BandStyle = 'Plain' | 'Twisted' | 'Engraved' | 'Split Shank' | 'Infinity' | 'Bypass' | 'Roped' | 'Euro-style' | 'Tapered';
export type ImageSize = '1K' | '2K' | '4K';

export interface RingConfig {
  metal: Metal;
  gemstone: Gemstone;
  cut: Cut;
  setting: Setting;
  bandStyle: BandStyle;
  imageSize: ImageSize;
}

export const METALS: Metal[] = ['Yellow Gold', 'White Gold', 'Silver', 'Platinum', 'Titanium'];
export const GEMSTONES: Gemstone[] = ['Diamond', 'Sapphire', 'Ruby', 'Emerald', 'Amethyst', 'Citrine' ,'Morganite', 'Moissanite', 'Opal'];
export const CUTS: Cut[] = ['Round', 'Princess', 'Oval', 'Emerald', 'Pear', 'Marquise', 'Cushion'];
export const SETTINGS: Setting[] = ['Solitaire', 'Halo', 'Pave', 'Three Stone', 'Vintage', 'Bezel'];
export const BAND_STYLES: BandStyle[] = ['Plain', 'Twisted', 'Engraved', 'Split Shank', 'Infinity', 'Bypass', 'Roped', 'Euro-style', 'Tapered'];
export const IMAGE_SIZES: ImageSize[] = ['1K', '2K', '4K'];
