const isUpperCase = value => value === value.toUpperCase();

export const convertFormValue = (value = '') => {
  const idx = [...value].findIndex(isUpperCase);
  if (idx === -1) return value.charAt(0).toUpperCase() + value.slice(1);
  return `${
    value.slice(0, idx).charAt(0).toUpperCase() + value.slice(1, idx)
  } ${value.slice(idx)}`;
};

export const convertSizeValue = (value = '') =>
  value.slice(0, -1) + ' ' + value.slice(-1);
