const loveButton = document.getElementById('love-button');
const initialScreen = document.getElementById('initial-screen');
const videoContainer = document.getElementById('video-container');
const anniversaryVideo = document.getElementById('anniversary-video');
const photoContainer = document.getElementById('photo-container');
const backgroundAudio = document.getElementById('background-audio');
const slides = document.querySelectorAll('.slide');
const messageContainer = document.getElementById('message');
const collageContainer = document.getElementById('collage-container');
const collageImages = document.querySelectorAll('.collage-img');
const collageMessage = document.querySelector('.collage-message');

const messages = [
"Bertemu denganmu adalah anugerah terindah yang pernah aku dapatkan❤️",
"Setiap hari di sisimu adalah hadiah terindah yang tidak akan pernah tergantikan.",
"Satu tahun telah berlalu, dan cintaku padamu semakin dalam di setiap detiknya.",
"Dua belas bulan penuh kebersamaan, tawa, dan cinta yang semakin menguatkan kita.",
"Cinta ini tumbuh seiring waktu, dan aku ingin terus menjaganya bersamamu.",
"Setiap momen denganmu adalah anugerah yang membuat hidupku lebih berarti.",
"Satu tahun ini hanyalah awal dari perjalanan panjang yang ingin kujalani bersamamu.",
"Kenangan yang kita buat di tahun pertama ini akan selalu kuingat selamanya.",
"Terima kasih telah menjadi rumah bagiku, tempat hatiku selalu ingin kembali.",
"Satu tahun berlalu, namun rasanya aku terus jatuh cinta padamu setiap hari.",
"Cintaku padamu tidak hanya bertahan, tapi juga bertumbuh dengan begitu indah.",
"Setahun ini telah membuktikan bahwa bersamamu adalah keputusan terbaik dalam hidupku.",
"Hari-hari bersamamu selalu istimewa, dan aku tidak sabar menjalani tahun-tahun berikutnya.",
"Senyumanmu adalah cahaya yang selalu menerangi hari-hariku.",
"Terima kasih karena selalu ada, mencintaiku dengan tulus, dan menjadikanku bagian dari hidupmu.",
"Aku tidak butuh hal lain dalam hidup ini, karena memilikimu sudah lebih dari cukup.",
"Kisah kita baru saja dimulai, dan aku yakin akan ada lebih banyak keajaiban di depan.",
"Satu tahun penuh cerita, dan aku ingin menulis bab-bab selanjutnya hanya denganmu.",
"Setiap pelukanmu memberiku ketenangan, setiap tatapanmu memberiku keyakinan.",
"Hari ini kita merayakan satu tahun bersama, dan aku berharap akan ada seribu tahun lagi untuk kita."
];

let currentIndex = 0;

loveButton.addEventListener('click', () => {
    initialScreen.classList.add('hidden'); 
    videoContainer.style.display = 'flex'; 
    anniversaryVideo.play(); 
});

anniversaryVideo.addEventListener('ended', () => {
    videoContainer.style.display = 'none'; 
    photoContainer.classList.remove('hidden'); 
    backgroundAudio.play(); 
    startSlideshow();
});

function startSlideshow() {
    showSlide(currentIndex);
    showMessage(currentIndex);

    let slideshowInterval = setInterval(() => {
        currentIndex++;
        if (currentIndex < slides.length) {
            showSlide(currentIndex);
            showMessage(currentIndex);
        } else {
            clearInterval(slideshowInterval);
            setTimeout(showCollage, 2000);
        }
    }, 5000);
}

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[index].classList.add('active');
}

function showMessage(index) {
    messageContainer.innerText = messages[index % messages.length];
}

function showCollage() {
    collageContainer.classList.remove('hidden');
    collageImages.forEach((img, index) => {
        setTimeout(() => {
            img.style.opacity = "1";
            img.style.transform = "scale(1)";
        }, index * 500);
    });
    
    setTimeout(() => {
        collageMessage.style.opacity = "1";
        collageMessage.style.transform = "translateY(0)";
    }, collageImages.length * 500);
}
