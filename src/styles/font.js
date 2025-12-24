import {scaleFontSize} from '../utils/Scale';

export const getFontFamily = (size, weight = '400', italic = false) => {
  let fontFamily = `Inter ${size}pt Regular`;
  let pt = size;

  if (italic) {
    fontFamily = `Inter ${size}pt Italic`;
  }

  if (size <= 18) {
    pt = 18;
  } else if (size > 18 || size <= 24) {
    pt = 24;
  } else if (size > 24) {
    pt = 28;
  }

  switch (weight) {
    case '300':
      fontFamily = `Inter ${pt}pt Light`;
      break;
    case 'normal':
    case '400':
      fontFamily = `Inter ${pt}pt Regular`;
      break;
    case '500':
      fontFamily = `Inter ${pt}pt Medium`;
      break;
    case '600':
      fontFamily = `Inter ${pt}pt SemiBold`;
      break;
    case 'bold':
    case '700':
      fontFamily = `Inter ${pt}pt Bold`;
      break;
  }
  return {
    fontSize: scaleFontSize(size),
    fontFamily,
    fontWeight: weight,
  };
};
