import {
  penjumlahan,
  pengurangan,
  pembagian,
  perkalian,
  rata_rata,
  sisa_bagi,
  luas_persegi,
  luas_lingkaran,
  luas_kubus,
  volume_kubus,
} from "@/utils/aritmatika.js";

describe("Melakukan Penjumlahan", () => {
  test("Penjumlahan bilangan positif", () => {
    expect(penjumlahan(2, 4)).toBe(6);
  });
  test("Penjumlahan bilangan negatif", () => {
    expect(penjumlahan(-2, -4)).toBe(-6);
  });
  test("Penjumlahan bilangan non numerik", () => {
    expect(penjumlahan("2", "10")).toBe("210");
  });
});

describe("Melakukan Pengurangan", () => {
  test("Pengurangan bilangan positif", () => {
    expect(pengurangan(3, 7)).toBe(-4);
  });
  test("Pengurangan bilangan negatif", () => {
    expect(pengurangan(-3, -7)).toBe(4);
  });
  test("Pengurangan bilangan non numerik", () => {
    expect(pengurangan("3", "1")).toBe(2);
  });
});

describe("Melakukan Pembagian", () => {
  test("Pembagian bilangan positif", () => {
    expect(pembagian(20, 5)).toBe(4);
  });
  test("Pembagian bilangan negatif", () => {
    expect(pembagian(-20, -5)).toBe(4);
  });
  test("Pembagian bilangan non numerik", () => {
    expect(pembagian("4", "1")).toBe(4);
  });
});

describe("Melakukan Perkalian", () => {
  test("Perkalian bilangan positif", () => {
    expect(perkalian(20, 5)).toBe(100);
  });
  test("Perkalian bilangan negatif", () => {
    expect(perkalian(-20, -5)).toBe(100);
  });
  test("Perkalian bilangan non numerik", () => {
    expect(perkalian("4", "2")).toBe(8);
  });
});

describe("Melakukan Pencarian rata - rata", () => {
  test("Rata - rata bilangan positif", () => {
    expect(rata_rata(10, 5, 4, 2, 4)).toBe(5.25);
  });
  test("Rata - rata bilangan negatif", () => {
    expect(rata_rata(-20, -5, -3, -1, 4)).toBe(-7.25);
  });
  test("Rata - rata bilangan non numerik", () => {
    expect(rata_rata("4", "1", "4", "3", "4")).toBe(1035.75);
  });
});

describe("Melakukan Pencarian Sisa Bagi", () => {
  test("Sisa Bagi bilangan positif", () => {
    expect(sisa_bagi(10, 2)).toBe(0);
  });
  test("Sisa Bagi bilangan negatif", () => {
    expect(sisa_bagi(-15, -4)).toBe(-3);
  });
  test("Sisa Bagi bilangan non numerik", () => {
    expect(sisa_bagi("5", "4")).toBe(1);
  });
});
describe("Melakukan Pencarian Luas Persegi", () => {
  test("Luas persegi bilangan positif", () => {
    expect(luas_persegi(2)).toBe(4);
  });
  test("Luas persegi bilangan negatif", () => {
    expect(luas_persegi(-4)).toBe(16);
  });
  test("Luas persegi bilangan non numerik", () => {
    expect(luas_persegi("5")).toBe(25);
  });
});
describe("Melakukan Pencarian Luas Lingkaran", () => {
  test("Luas lingkaran bilangan positif", () => {
    expect(luas_lingkaran(7)).toBe(153.93804002589985);
  });
  test("Luas lingkaran bilangan negatif", () => {
    expect(luas_lingkaran(-3)).toBe(28.274333882308138);
  });
  test("Luas lingkaran bilangan non numerik", () => {
    expect(luas_lingkaran("5")).toBe(78.53981633974483);
  });
});
describe("Melakukan Pencarian Luas Kubus", () => {
  test("Luas kubus bilangan positif", () => {
    expect(luas_kubus(3)).toBe(54);
  });
  test("Luas kubus bilangan negatif", () => {
    expect(luas_kubus(-9)).toBe(486);
  });
  test("Luas kubus bilangan non numerik", () => {
    expect(luas_kubus("20")).toBe(2400);
  });
});
describe("Melakukan Pencarian Volume Kubus", () => {
  test("Volume kubus bilangan positif", () => {
    expect(volume_kubus(3)).toBe(27);
  });
  test("Volume kubus bilangan negatif", () => {
    expect(volume_kubus(-5)).toBe(-125);
  });
  test("Volume kubus bilangan non numerik", () => {
    expect(volume_kubus("2")).toBe(8);
  });
});
