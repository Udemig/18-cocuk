//! FOR Döngüsü
// Aynı işlemi istediğimiz sayıda tekrar çalışmamazı sağlar
for (var i = 1; i <= 5; i++) {
  document.write("<br> Bir satır yazı yazıldı");
}

// var i = 1; sayacımızın 1'den başlıyor
// i <= 50; sayacın 50 olana kadar devam ediceğini belirtir
// i++; {} döngü her çalıştığında döngü sayısının 1 artır demek

//! For Of Döngüsü
// Bir diziyi dönmek istiyorsak kullanırız

var ogrenciler = ["Ali", "Ayşe", "Fatma", "Burak", "Can", "Kadir"];

for (var ogrenci of ogrenciler) {
  document.write("<br> Öğrenci: " + ogrenci);
}

//! While Döngüsü
// For döngüsüne benzer bir mantıkla çalışır. Kural bozulana kadar devam eder

var can = 10;

while (can > 0) {
  document.write("<br> Hala hayattayım! Kalan canım: " + can);
  can--; // her adımda canı 1 azaltıyoruz
}

document.write("<br> Oyun Bitti! Karakterin canı kalmadı :(");

//! Break: Acil Çıkış
// Döngülerde, örneğin arama algoritmaları yazarken aradığımızı bulduktan sonra artık döngüyü devam ettirmenin bir anlamı kalmyacağı için döngü bitirilir.
var kutuSayisi = 10;
var hazineKutusu = 5;

for (var i = 1; i <= kutuSayisi; i++) {
  document.write("<br> Kutu açılıyor...");

  if (i == hazineKutusu) {
    document.write("<br> Hazineyi Bulduk!");
    break; // Döngüyü parçala ve dışarı çık
  }
}

//! Continue: Devam Et
// Döngüde bazı adımlarda döngüyü adımı çalıştırmak yerine döngüyü atlayabiliyoruz

for (var i = 1; i <= 5; i++) {
  // 2 ve 4 sayılarında bu döngü adımı atlanıp sıradakine geçilir
  if (i === 2 || i === 4) continue;

  document.write("<br> Harika sayı: " + i);
}

//! DOM: Document Object Model
// HTML kodlarının javascript tarafından erişilebilen bir ağaç modelidir
// HTML DOM'a erişmek için document nesnesini kullanırız

//! Sayfadaki Elemanları Seçme
//? document.getElementById
// bir html elementini id değerine göre js'e çağırır
const h1 = document.getElementById("başlık");
console.log(h1);

//? element.innerHTML
// elementin html içeriğini değiştirebilirsiniz
h1.innerHTML = "Document Object Modal - DOM";

//? element.style
// elementin stillerini değiştirmemize olanak sağlar
h1.style.background = "red";
h1.style.color = "white";

//? element.classList
// elementin sınıflarına ekleme/çıkarma yapmaya yarar
h1.classList.add("kucuk");
h1.classList.remove("kucuk");
h1.classList.toggle("buyuk");
h1.classList.toggle("buyuk");

//? document.createElement()
// yeni bir html elementi oluşturmamızı sağlar
const button = document.createElement("button");
button.innerHTML = "Javascript Butonu";
button.style.background = "gold";

//? element.appendChild()
// bu elementi sayfaya gönderir
document.body.appendChild(button);

//? alternatif seçiler
const p = document.getElementsByTagName("p");
const kucukler = document.getElementsByClassName("kucuk");
const x = document.querySelector("#baslik");

//! EVENT LİSTENER: OLAY DİNLEYİCİLERİ
// Javascript ile dinamik yapılar oluşturmak için kullanıcnın etkileşimlerini izleyebilitoruz.
// Olay izleyicileri sayesinde bu olayları izleyip etkileşim anında fonksiyon çalıştırabiliyoruz
// İlk olarak hangi element üzerinde olaylar dinlenicekse o elementin js ortamına çağrılması gerekir

var btn = document.getElementById("btn");

function elementiGoster() {
  var yazi = document.getElementById("sihirli");

  yazi.classList.toggle("gorunmez");
}

btn.addEventListener("click", elementiGoster);

//! Formu Yönetme
// event: gerçekleşen olay ile alakalı bilgileri içeren nesne
// addEventListener içerisinde yazdığımız fonksiyonlarda erişebiliriz

var form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  // formların sayfayı yenilemesine engeller
  event.preventDefault();

  // input elementine yazılan yazıya eriş
  var isim = event.target[0].value;

  // listeye eklemek için bir element oluştur
  const li = document.createElement("li");

  // li elementinin içinde yazıcak yazıyı belirle
  li.innerText = isim;

  // li elementi ul listeesine ekle
  const ul = document.querySelector("ul");
  ul.appendChild(li);

  // formu sıfırla
  event.target.reset();
});
