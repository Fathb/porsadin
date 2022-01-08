const scriptURL = 'https://script.google.com/macros/s/AKfycbyZhtmP2IUe5V9Y9VEWC3v4zvGTFvDJO7LibRDrAK9bWXaHz6jsGgtnhoqpK8iqRfkHAw/exec';
const form = document.forms['data-anggota'];
const nik = document.querySelector("#nik");
const namaLengkap = document.querySelector("#namaLengkap");
const tempatlahir = document.querySelector("#tempatlahir");
const tglLahir = document.querySelector("#tglLahir");
const stat = document.querySelector("#stat");
const alamat = document.querySelector("#alamat");
const diklat = document.querySelector("#diklat");
const exp = document.querySelector("#exp");
const kontak = document.querySelector("#kontak");
const keanggotaan = document.querySelector("#keanggotaan");
const jabatan = document.querySelector("#jabatan");

  form.addEventListener('submit', e => {
    e.preventDefault()
    if (nik.value.length < 16) {
      alert("nomor nik harus 16 angka")
      return
    }
    if (namaLengkap.value == "") {
      alert("nama harus di isi")
      return
    }
    if (tempatlahir.value == "") {
      alert("tempat lahir harus di isi")
      return
    }
    if (tglLahir.value == "") {
      alert("tanggal lahir harus di isi")
      return
    }
    if (alamat.value == "") {
      alert("alamat harus di isi")
      return
    }
    if (diklat.value == "") {
      alert("diklat yang pernah di ikuti harus di isi")
      return
    }
    if (exp.value == "") {
      alert("pengalaman organisasi harus di isi")
      return
    }
    if (kontak.value == "") {
      alert("nomor telp/HP harus di isi")
      return
    }
    if (jabatan.value == "") {
      alert("jabatan harus di isi")
      return
    }
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => alert("terima kasih telah meluangkan waktu mengisi form ini"))
      .catch(error => console.error('Error!', error.message))
    nik.value = "";
    namaLengkap.value = "";
    tempatlahir.value = "";
    tglLahir.value = "";
    stat.value = "";
    alamat.value = "";
    diklat.value = "";
    exp.value = "";  
    kontak.value = "";  
    keanggotaan.value = "";  
    jabatan.value = "";  
  })
