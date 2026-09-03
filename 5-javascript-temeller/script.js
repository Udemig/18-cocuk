// tek yorum satırı

/*
 çok
 satırlı
 yorum
*/

//! Değişkenler - Variables
// Kod içerisinde veri saklamak için kullandığımız yapıdır
var degisken_ismi = "değer";

var kullanici_adi = "toprak";

var kullanici_yasi = 17;

// Daha sonra tanımladığımız değişkenleri kullanabiliriz
document.write("kullanıcı yaşı: " + kullanici_yasi + "<br/>");

// Değişkenin değerini değiştirmek
kullanici_yasi = 18;

document.write("kullanıcı yaşı: " + kullanici_yasi + "<br/>");

// Değişken isimlemlendiriken anlamlı isimler kullanırız ve özel karakterlerden kaçınırız
var ahmetinKilosu = 80; // camel case
var ahmetin_kilosu = 80; // snake case

/*
 ! Veri Tipleri
 * Bir değişken farklı türlerde veri tutabilir
 * string - metin
 * number - sayı
 * boolean - doğru/yanlış
 * undefined - tanımsız
 * null - boş
 * ++++++
*/

var sehir = "İzmir"; // string

var plaka = 35; // number

var buyuksehirMi = true; // doğru - boolean
var baskentMi = false; // yanlış - boolean

var nufus; // undefined

var ilceler = null; // null

//! Matematiksel Operatörler
// Javascript ile matematik işlmeleri yapabiliriz
var a = 10;
var b = 3;

document.write(a + b + "<br/>");
document.write(a - b + "<br/>");
document.write(a * b + "<br/>");
document.write(a / b + "<br/>");
document.write((a % b) + "<br/>");

//! Arttırma Ve Azaltma
// bir sayıyı 1 arttırmak
var yas = 20;
yas++;
yas++;
document.write(yas + "<br />");

// bir sayıyı 1 azaltmak
yas--;
yas--;
document.write(yas + "<br />");

// değeri birden fazla değiştirme
yas += 5;
document.write(yas + "<br />");
yas -= 10;
document.write(yas + "<br />");
yas *= 2;
document.write(yas + "<br />");
yas /= 3;
document.write(yas + "<br />");

/*
 ! Karşılaştırma Operatörleri
 * İki farklı değer üzerinde karşlışatırma yapmaya yarar
 * Bir nevi javascriptte sorular sormamızı sağlar
 * Sorularımızın cevabı herzaman boolean bir değer olur (true/false)
 * Operatörler:
 * >    - büyüktür
 * <    - küçüktür
 * >=   - büyük eşittir
 * <=   - küçük eşittir
 * ==   - eşittir
 * !=   - eşit değildir
 * ===  - eşittir + tip kontrolü
 * !==  - eşit değildir + tip kontrolü
 */

var yas = 18;

// yaş 18'den büyük mü?
document.write("yaş: " + yas + "<br/>");
document.write("yaş 18'den büyük mü?: " + (yas > 18) + "<br/>");
document.write("yaş 18'den büyük veya eşit mi?: " + (yas >= 18) + "<br/>");
document.write("yaş 18'den küçük mü?: " + (yas < 18) + "<br/>");
document.write("yaş 18'den küçük veya eşit mi?: " + (yas <= 18) + "<br/>");
document.write("yaş 20'ye eşit mi?: " + (yas == 20) + "<br/>");
document.write("yaş 20'ye eşit değil mi?: " + (yas != 20) + "<br/>");

//! == ve === arasındaki fark nedir?
// == sadece değerler eşit mi diye bakar
document.write("1. kontrol: " + (35 == 35) + "<br/>");
document.write("2. kontrol: " + (35 == "35") + "<br/>");

// === hem değerler eşit mi hemde tipler aynı mı diye bakar
document.write("3. kontrol: " + (35 === 35) + "<br/>");
document.write("4. kontrol: " + (35 === "35") + "<br/>");

// - != sadece değerler eşit değil mi diye bakar
document.write("5. kontrol: " + (50 != 50) + "<br/>");
document.write("6. kontrol: " + (50 != "50") + "<br/>");

// - !== hem değerler eşit değil mi hemde tipler aynı mı diye bakar
document.write("7. kontrol: " + (50 !== 50) + "<br/>");
document.write("8. kontrol: " + (50 !== "50") + "<br/>");

/*
 ! Mantıksal Operatörler
 * Üç temel mantıksal operatör vardır:
 * && - AND - VE
 * || - OR  - VEYA
 * !  - NOT - DEĞİLİ/TERSİ
*/

/*
  ! && And
  * Ve operetörünün true dönmesi olması için iki koşulunda true olması lazım aksi takdirde false döner
  * true && true   = true
  * true && false  = false
  * false && false = false
*/
var yas = 30;
var biletiVarMi = false;

document.write("<br/> Yaşı 18'den büyükeşit mi ve bileti var mı?: ");
document.write(yas >= 18 && biletiVarMi === true);

/*
  ! || Or
  * Veya operetörünün true dönmesi olması için koşullardan en az bir tanesinin true olması lazım ancak bütün koşullar false ise false döner
  * true || true   = true
  * true || false  = true
  * false || false = false
*/
document.write("<br/> Yaşı 18'den büyükeşit mi veya bileti var mı?: ");
document.write(yas >= 18 || biletiVarMi === true);

/*
 ! Operatörü: Tersi
 * Bir boolean değerin tersini alır
*/

var ogrenciMi = true;

document.write("<br/> Öğrenci Mi?: ");
document.write(ogrenciMi);
document.write("<br/> !Öğrenci Mi?: ");
document.write(!ogrenciMi);

/*
 ! if - eğer
 * Javascript'te karar mekanizmalarında kullanılır
*/

var yas = -5;

if (yas >= 18) {
  document.write("<br /> Konsere katılmaya hak kazandız!");
} else if (yas < 0) {
  document.write("<br /> Gerçekçi bir değer giriniz :)");
} else {
  document.write("<br /> Yaş kısıtlamasına taklıdınız :(");
}

// Todo Fonksiyon
