//! 1) Javascript Kod Çalışma Sırası

// Senkron
document.write("<br> 1. İşlem Gerçekleşti");

document.write("<br> 2. İşlem Gerçekleşti");

document.write("<br> 3. İşlem Gerçekleşti");

document.write("<br> -------------------------");

// Asenkron
// console.log("1. Deneme");

setTimeout(function () {
  //   console.log("2. Deneme");
}, 1000);

// console.log("3. Deneme");

//! 2) API Nedir?
// Uygulamamız için ihtiyacımız olan veriyi bize getiren bir yazılımdır
// fetch = internetten bir şey istemek

fetch("https://dummyjson.com/users")
  .then((cevap) => cevap.json())
  .then((veri) => console.log(veri.users))
  .catch((hata) => console.log(hata));

//! 3) Asnyc Await
// API isteği atan fonksiyon yazdığımız zaman api isteğini senkron hale getirir

//! 4) Try Catch
// try: bu işlemi yapmayı dene
// catch: işlemi yapmayı denerken hata olursa, hatayı yakla

async function urunleriGetir() {
  try {
    var cevap = await fetch("https://dummyjson.com/products");

    var veri = await cevap.json();

    console.log("Veri Geldi: ", veri);
  } catch (hata) {
    console.log("Hata meydana geldi!", hata);
  }
}

urunleriGetir();
document.write("<br> ---------------- <br>");

//! 5) Date Sınıfı
// Javascript'te tarih işleri yapmak istersek kullandığımız bir yapıdır
var tarih = new Date();
console.log(tarih);

document.write(tarih);
document.write("<br> ---------------- <br>");

// toLocaleString: tarihi daha okunabilir formata çevir
document.write(tarih.toLocaleString());
document.write("<br> ---------------- <br>");

// tarihi sitediğimiz dile çevirme
var ayar = {
  day: "2-digit",
  month: "long",
  year: "2-digit",
};

document.write(tarih.toLocaleString("tr", ayar));

//! Modüller
// Başka js dosylarındaki değişken/fonksiyonları kullanabiliriz

//! import
// Başka js dosyasında export edilmiş içeriği bu dosyaya çağırır
import { aciklama } from "./degiskenler.js";

console.log(aciklama);

import baslik from "./degiskenler.js";

console.log(baslik);
