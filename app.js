const scriptURL = 'https://script.google.com/macros/s/AKfycbyZhtmP2IUe5V9Y9VEWC3v4zvGTFvDJO7LibRDrAK9bWXaHz6jsGgtnhoqpK8iqRfkHAw/exec';
const form = document.forms['data-peserta'];
const nama = document.querySelector("#nama");
const tempatlahir = document.querySelector("#tpLhr");
const tglLahir = document.querySelector("#tglLhr");
const alamat = document.querySelector("#alamat");
const kontak = document.querySelector("#kontak");
const namaLembaga = document.querySelector("#namaLembaga");
const cabang = document.querySelector("#cabang");

form.addEventListener('submit', e => {
  e.preventDefault()
  console.log(tglLhr);
  if (nama.value == "") {
    alert("nama harus di isi")
    return
  }
  if (namaLembaga.value == "") {
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
  if (kontak.value == "") {
    alert("nomor telp/HP harus di isi")
    return
  }
  if (cabang.value == "CABANG LOMBA") {
    alert("CABANG LOMBA HARUS DIPILIH")
    return
  }
  fetch(scriptURL, {
    method: 'POST', body: new FormData(form)})
  .then(response => alert("terima kasih telah meluangkan waktu mengisi form ini"))
  .catch(error => console.error('Error!', error.message))
  nama.value = "";
  tempatlahir.value = "";
  tglLahir.value = "";
  alamat.value = "";
  kontak.value = "";
  cabang.value = "";
  namaLembaga.value = "";
})