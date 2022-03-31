export const penjumlahan = (bilanganSatu, bilanganDua) => {
  return bilanganSatu + bilanganDua;
};

export const pengurangan = (bilanganSatu, bilanganDua) => {
  return bilanganSatu - bilanganDua;
};

export const pembagian = (bilanganSatu, bilanganDua) => {
  return bilanganSatu / bilanganDua;
};

export const perkalian = (bilanganSatu, bilanganDua) => {
  return bilanganSatu * bilanganDua;
};

export const rata_rata = (
  bilanganSatu,
  bilanganDua,
  bilanganTiga,
  bilanganEmpat,
  jumlahData
) => {
  return (
    (bilanganSatu + bilanganDua + bilanganTiga + bilanganEmpat) / jumlahData
  );
};

export const sisa_bagi = (bilanganSatu, bilanganDua) => {
  return bilanganSatu % bilanganDua;
};

export const luas_persegi = (sisi) => {
  return sisi * sisi;
};

export const luas_lingkaran = (jariJari) => {
  return Math.PI * jariJari * jariJari;
};

export const luas_kubus = (sisi) => {
  return 6 * (sisi * sisi);
};

export const volume_kubus = (sisi) => {
  return sisi * sisi * sisi;
};
