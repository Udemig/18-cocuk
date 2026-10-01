// Tahmin edilmesi gereken emojileri belirle
var emojiler = ["🎮", "⚽", "🕹️", "🤖", "🎧", "🚀", "📱", "💸"];

// HTML'deki kutuları JS'te kullanmak için çağırıyoruz
var oyunAlani = document.getElementById("oyun-alani");
var hamleSayaci = document.getElementById("hamle-sayaci");
var mesajKutusu = document.getElementById("mesaj-kutusu");
var yenidenButonu = document.getElementById("yeniden-butonu");

// Oyun Değişkenleri
var acikKartlar = []; // açılan kartlar
var kilitli = false; // bulunamayan kartlar
var hamle = 0; // kaç defa 2 kart açtığımızın sayısı
var eslesenCiftler = 0; // doğru bulunan çift sayısı

// Ses Efekti Fonksiyonu
function sesCal(frekans, sure = 0.08) {
  const sesCtx = new (window.AudioContext || window.webkitAudioContext)();
  const osilator = sesCtx.createOscillator();
  osilator.frequency.value = frekans;
  osilator.connect(sesCtx.destination);
  osilator.start();
  osilator.stop(sesCtx.currentTime + sure);
}

// Karıştırma Fonksiyonu
function karistir(dizi) {
  for (var i = dizi.length - 1; i > 0; i--) {
    // rastegele bir sıra seç
    var rastgeleIndex = Math.floor(Math.random() * (i + 1));

    // elemanların biribiryle yerini değiştir
    const gecici = dizi[i];
    dizi[i] = dizi[rastgeleIndex];
    dizi[rastgeleIndex] = gecici;
  }

  return dizi;
}

// Oyunu Başlatma ve Kartları Oluşturma Fonksiyonu
function oyunuBaslat() {
  // Eski oyundan kalan her şeyi sıfırla
  oyunAlani.innerHTML = "";
  mesajKutusu.innerText = "";
  acikKartlar = [];
  kilitli = false;
  hamle = 0;
  eslesenCiftler = 0;
  hamleSayaci.innerText = hamle;

  // 16 tane emoji oluştur
  var kartlar = [...emojiler, ...emojiler];

  // kartları rastgele karıştır
  karistir(kartlar);

  // 16 kart için döngüyle ekrana kutuları bas
  for (var i = 0; i < kartlar.length; i++) {
    var emoji = kartlar[i];

    // yeni bir div oluştur
    const kart = document.createElement("div");
    kart.classList.add("kart");

    // gizli emojiyi kartın üstünde gözükmeycek şekilde ekle
    kart.dataset.emoji = emoji;

    // kartın üstüne ? koy
    kart.innerText = "❓";

    // karta tıklanma olayını izle
    kart.addEventListener("click", function () {
      kartaTiklandi(kart);
    });

    // oluşturulan kartı ekrana yerleştir
    oyunAlani.appendChild(kart);
  }
}

// Karta Tıklandığında Çalışan Fonksiyon
function kartaTiklandi(kart) {
  // ekran kitliyse tıklamaya izin verme
  if (kilitli) return;

  // zaten açık olan veya eşleşmiş karta tıklanırsa izin verme
  if (kart.classList.contains("acik") || kart.classList.contains("eslesti")) return;

  // tıklama bip sesi
  sesCal(350);

  // kartı aç: arkadaki emoji yöster ve acik sınıfı ekle
  kart.innerText = kart.dataset.emoji;
  kart.classList.add("acik");

  // açılan kartı listemize koyuyoruz
  acikKartlar.push(kart);

  // eğer 2 kart açıldıysa 2 eşleşme kontrolü yağ
  if (acikKartlar.length === 2) {
    hamleKontrol();
  }
}

// İki kart açılınca hamleyi kontrol eden fonksiyon
function hamleKontrol() {
  // hamel sayısını 1 arttır
  hamle = hamle + 1;
  hamleSayaci.innerText = hamle;

  // açık kartları ekrandan al
  const kart1 = acikKartlar[0];
  const kart2 = acikKartlar[1];

  // iki kartın emojisi aynı mı
  if (kart1.dataset.emoji === kart2.dataset.emoji) {
    // Eşleşti
    sesCal(750, 0.15);
    // eşleşen kartları yeşil yap
    kart1.classList.add("eslesti");
    kart2.classList.add("eslesti");
    // açık kartları sıfırla
    acikKartlar = [];
    // eşleşen sayısını arttır
    eslesenCiftler = eslesenCiftler + 1;

    // bütün kartlar eşleştiyse oyunu bitir
    if (eslesenCiftler == emojiler.length) {
      sesCal(900, 0.3); // zafer sesi
      mesajKutusu.innerText = "🏆 SİBER ŞAMPİYON! " + hamle + " hamlede aranayı fethettin!";
    }
  } else {
    // Eşleşmedi: yeni kart açılmasın diye kilitle
    kilitli = true;
    // hata sesi
    sesCal(200, 0.12);
    // 0.8 saniye bekle ve kartları kapat
    setTimeout(function () {
      kart1.innerText = "❓";
      kart2.innerText = "❓";
      kart1.classList.remove("acik");
      kart2.classList.remove("acik");

      // verileri sıfırlayıp kilidi aç
      acikKartlar = [];
      kilitli = false;
    }, 800);
  }
}

// yeniden başlata tıklanınca oyunu tekrar başlat
yenidenButonu.addEventListener("click", oyunuBaslat);

oyunuBaslat();
