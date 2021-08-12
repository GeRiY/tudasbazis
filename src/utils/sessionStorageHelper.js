const Sample = 'sample';

export const getSample = () => window.sessionStorage.getItem(Sample);

export const saveSample = item => {
  if (!item) {
    return;
  }
  window.sessionStorage.setItem(Sample, item);
};

export const destroySample = () => {
  window.sessionStorage.removeItem(Sample);
};

export default {
  getSample,
  saveSample,
  destroySample,
};
