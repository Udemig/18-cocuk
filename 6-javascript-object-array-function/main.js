//! Object
// Bir şeye ait bütün özelliklerin bir arada tutulduğu bir veri tipidir.
// Nesneler anahtar:değer formatında yazılır
var futbolcu = {
  isim: "Osimhen",
  yaş: 27,
  mevki: "Forvet",
  sakatMi: false,
};

var karakter = {
  isim: "Steve",
  seviye: 25,
  meslek: "Maden",
};

// Nesne formatında tanımlanan değerlere erişme: nesne.anahtar
document.write("<br>" + futbolcu.isim);
document.write("<br>" + futbolcu.yaş);
document.write("<br>" + futbolcu.mevki);
document.write("<br>" + karakter.isim);
document.write("<br>" + karakter.meslek);

//! Array (Dizi)
// Nesne tek bir veriyi tanımlarken diziler ise birden fazla veri içeren listelerdir

var ilk11 = ["Osimhen", "Barış", "Yunus", "Torreira"];

var envanter = ["Kılıç", "Bal", "Meşale"];

//! Array of Objects
var urunler = [
  { id: 1, isim: "iPhone15", fiyat: 5000 },
  { id: 2, isim: "Airpods", fiyat: 2400 },
  { id: 3, isim: "Macbook", fiyat: 78000 },
];

//! Dizi Methodları
// .filter(): Diziyi filtrelemeye yarar
const filtrelenmiş = urunler.filter((urun) => urun.fiyat < 7000);
console.log(filtrelenmiş);

// .map(): Dizideki elemanları dönüştürürü / kalıba sokar
const zamliFiyatlar = urunler.map((urun) => urun.fiyat * 1.25);
console.log(zamliFiyatlar);

// .find(): Bir dizi elemanını nokta atışı bul
const arananUrun = urunler.find((urun) => urun.id === 2);
console.log(arananUrun);

// .forEach(): Görevi dizideki her bir eleman için tekrarla
urunler.forEach((urun) => {
  document.write("<br>" + urun.isim);
});

// index: dizideki elemanın sırasıdır, 0'dan başlar
// .length: dizideki eleman sayısını verir
document.write("<br>" + ilk11);
document.write("<br>" + ilk11[3]);
document.write("<br>" + ilk11.length);

// .indexOf(): dizideki elemanın sırasını bulmaya yarar
document.write("<br>" + ilk11.indexOf("Torreira") + "<br>");

var notlar = [65, 80, 90, 100, 75, 43];
document.write(notlar);

// some: dizideki elemanlardan en az biri koşula uyuyormu diye kontrol eder koşulan uyan varsa true döner yoksa false döner
var zayifVarMi = notlar.some(function (not) {
  return not < 50;
});
document.write("<br>" + zayifVarMi);

// every: dizideki bütün elemanların yazdığımız koşula uyarsa true döndürür uymazsa false döndürür
var buyukMu = notlar.every(function (not) {
  return not > 50;
});
document.write("<br>" + buyukMu);

// reduce: dizideki bütün elemanları tek bir değere dönüştürür
var notToplami = notlar.reduce(function (toplam, not) {
  return toplam + not;
}, 0); // başlangıç değeri

document.write("<br>" + notToplami / notlar.length);

//! Fonksiyonlar
//Kod yazarken bazı işlemleri tekrar tekrar yapmamız gerekir

// fonksiyon tanımı
function karsilamaYap() {
  document.write("<br> Sitemize hoş geldin!");
  document.write("<br> Bugün senin için harika fırsatlarımız var.");
}

// fonksiyonu çağırma
karsilamaYap();

//! Parametre Nedir
// Bir önceki fonksiyonumuz her çağrıldığında aynı çıktıyı veriyodu ama biz kişiye özel mesaj vermek istiyoruz
// Fonksiyonun dışarıdan veri almasını parametreler sağlar
function ismeOzelKarsilama(isim) {
  document.write("<br> Hoş geldin, " + isim);
}

ismeOzelKarsilama("Ali");
ismeOzelKarsilama("Veli");
ismeOzelKarsilama("Toprak");

//! Return Nedir?
// Fonksiyonun yaptığı hesaplama sonucunda elde edilen veriyi fonksiyonun çağrıldığı yere döndürmek için kullanırız
function kdvEkle(fiyat) {
  var sonFiyat = fiyat + 20;
  return sonFiyat;
}

var sonuc = kdvEkle(100);
document.write("<br>" + sonuc);

// Örnek
function yasHesapla(dogumYili) {
  var mevcutYil = 2026;
  var hesaplananYas = mevcutYil - dogumYili;
  // hesapladığımız yaş sonucunu fonksiyonun çağrıldığı yere gönder
  return hesaplananYas;
}

document.write("<br>" + yasHesapla(1970));
document.write("<br>" + yasHesapla(2001));
document.write("<br>" + yasHesapla(2008));

document.write("<br>");

//! Switch-Case
// Çoklu koşul yapaılarında if-else'e göre daha düzgün bir formatta ve daha okunabilir olduğu için tercih ederiz
var gun = "çarşambaersiti";

switch (gun) {
  case "pazartesi":
    document.write("Bugün günlerden " + gun + " ve Haftaiçi");
    break;

  case "salı":
    document.write("Bugün günlerden " + gun + " ve Haftaiçi");
    break;

  case "çarşamba":
    document.write("Bugün günlerden " + gun + " ve Haftaiçi");
    break;

  case "perşembe":
    document.write("Bugün günlerden " + gun + " ve Haftaiçi");
    break;

  case "cuma":
    document.write("Bugün günlerden " + gun + " ve Haftaiçi");
    break;

  case "cumartesi":
    document.write("Bugün günlerden " + gun + " ve Haftasonu");
    break;

  case "pazar":
    document.write("Bugün günlerden " + gun + " ve Haftasonu");
    break;

  default: // yukarıdaki hiç bir koşula uymazsa
    document.write("Yanlış bir gün değeri girdiniz");
    break;
}
