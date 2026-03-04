export type Metal = 'Yellow Gold' | 'White Gold' | 'Silver' | 'Platinum';
export type Gemstone = 'Diamond' | 'Sapphire' | 'Ruby' | 'Emerald' | 'Amethyst' | 'Citrine' | 'Morganite' | 'Moissanite' | 'Opal';
export type Cut = 'Round' | 'Princess' | 'Oval' | 'Emerald' | 'Pear' | 'Marquise' | 'Cushion';
export type Setting = 'Solitaire' | 'Halo' | 'Pave' | 'Three Stone' | 'Vintage' | 'Bezel';
export type BandStyle = 'Plain' | 'Twisted' | 'Engraved' | 'Split Shank' | 'Infinity' | 'Bypass' | 'Roped' | 'Euro Shank' | 'Tapered' | 'Twister' | 'Coiled' | 'Cupped' | 'Squarey' | 'Checker';
export type ImageSize = '1K' | '2K' | '4K';

export interface RingConfig {
  metal: Metal;
  gemstone: Gemstone;
  cut: Cut;
  setting: Setting;
  bandStyle: BandStyle;
  imageSize: ImageSize;
}

export const METALS: Metal[] = ['Yellow Gold', 'White Gold', 'Silver', 'Platinum'];
export const GEMSTONES: Gemstone[] = ['Diamond', 'Sapphire', 'Ruby', 'Emerald', 'Amethyst', 'Citrine' ,'Morganite', 'Moissanite', 'Opal'];
export const CUTS: Cut[] = ['Round', 'Princess', 'Oval', 'Emerald', 'Pear', 'Marquise', 'Cushion'];
export const SETTINGS: Setting[] = ['Solitaire', 'Halo', 'Pave', 'Three Stone', 'Vintage', 'Bezel'];
export const BAND_STYLES: BandStyle[] = ['Plain', 'Twisted', 'Engraved', 'Split Shank', 'Infinity', 'Bypass', 'Roped', 'Euro Shank', 'Tapered', 'Twister', 'Coiled', 'Cupped', 'Squarey', 'Checker'];

export const BAND_DESCRIPTIONS: Partial<Record<BandStyle, string>> = {
  'Twister': 'Band features a sophisticated, high-definition helical twisted cable texture with a smooth, ergonomic finish',
  'Coiled': 'Band is smooth with an engraving on the side, wire coils around the shoulders, and small spherical knobs at the pivot points near the swiveling bezel',
  'Cupped': 'Band is fabricated from sheet metal with scalloped edges and hammered oval cupped sections',
  'Squarey': 'Band is composed of a continuous, staggered sequence of square settings arranged in an alternating zig-zag pattern, each holding a faceted stone',
  'Checker': 'Band looks like a two-row checkerboard pattern, with polished gold blocks and square clear stones alternating from one row to the other around the band',
};
export const IMAGE_SIZES: ImageSize[] = ['1K', '2K', '4K'];
