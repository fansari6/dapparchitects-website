// The ONE place product image imports live. Keyed by product slug so the data
// files can stay pure (just `image: 'pharmachain'`) and editable without touching
// import paths. To add a product image: import it and add it to the map.

import pharmachain from '@/assets/pharmachain.png';
import equityblock from '@/assets/equityblock.png';
import implantchain from '@/assets/implantchain.png';
import dentalchain from '@/assets/dentalchain.png';
import fdaintelligence from '@/assets/fdaintelligence.png';

export const productImages = {
  pharmachain,
  equityblock,
  implantchain,
  dentalchain,
  fdaintelligence,
};
