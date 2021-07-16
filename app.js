const nik = document.querySelector("#nik");
const nama = document.querySelector("#namaLengkap");
const tempatlahir = document.querySelector("#tempatlahir");
const tglLahir = document.querySelector("#tglLahir");
const stat = document.querySelector("#stat");
const alamat = document.querySelector("#alamat");
const diklat = document.querySelector("#diklat");
const keanggotaan = document.querySelector("#keanggotaan");
const kontak = document.querySelector("#kontak");
const jabatan = document.querySelector("#jabatan");
const btnSubmit = document.querySelector("button");

btnSubmit.addEventListener("click", (e)=> {
 e.preventDefault();
 const el = e.target.offsetParent;
 console.log(el);
 //if (nik.value.length < 16) {
 //alert("nomor nik harus 16 angka");
 //return
 //}
});