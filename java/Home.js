function id01(){
    window.location.href='s.html'
}

// Ambil semua elemen dengan class "Dreborn"
const dreborns = document.querySelectorAll(".Dreborn");

// Tentukan elemen tengah
const middleIndex = Math.floor(dreborns.length / 2);

// Tambahkan kelas "zoom" ke elemen tengah
dreborns[middleIndex].classList.add("zoom");
