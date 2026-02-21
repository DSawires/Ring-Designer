export type Metal = 'Yellow Gold' | 'White Gold' | 'Rose Gold' | 'Platinum' | 'Black Titanium';
export type Gemstone = 'Diamond' | 'Sapphire' | 'Ruby' | 'Emerald' | 'Morganite' | 'Moissanite' | 'Opal';
export type Cut = 'Round' | 'Princess' | 'Oval' | 'Emerald' | 'Pear' | 'Marquise' | 'Cushion';
export type Setting = 'Solitaire' | 'Halo' | 'Pave' | 'Three Stone' | 'Vintage' | 'Bezel';
export type BandStyle = 'Plain' | 'Twisted' | 'Engraved' | 'Split Shank' | 'Infinity';
export type ImageSize = '1K' | '2K' | '4K';

export interface RingConfig {
  metal: Metal;
  gemstone: Gemstone;
  cut: Cut;
  setting: Setting;
  bandStyle: BandStyle;
  imageSize: ImageSize;
}

export const METALS: Metal[] = ['Yellow Gold', 'White Gold', 'Rose Gold', 'Platinum', 'Black Titanium'];
export const GEMSTONES: Gemstone[] = ['Diamond', 'Sapphire', 'Ruby', 'Emerald', 'Morganite', 'Moissanite', 'Opal'];
export const CUTS: Cut[] = ['Round', 'Princess', 'Oval', 'Emerald', 'Pear', 'Marquise', 'Cushion'];
export const SETTINGS: Setting[] = ['Solitaire', 'Halo', 'Pave', 'Three Stone', 'Vintage', 'Bezel'];
export const BAND_STYLES: BandStyle[] = ['Plain', 'Twisted', 'Engraved', 'Split Shank', 'Infinity'];
export const IMAGE_SIZES: ImageSize[] = ['1K', '2K', '4K'];
