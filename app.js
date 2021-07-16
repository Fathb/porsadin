const scriptURL = 'https://script.google.com/macros/s/AKfycbxdiaP6QMkek4HYaCRlai_0uKtAql3LnHUqTDiwlPZwdNhQEWypt2Hz8JOkW6eq1qsR/exec';
const form = document.forms['data-anggota'];

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => alert("terima kasih telah meluangkan waktu mengisi form ini"))
      .catch(error => console.error('Error!', error.message))
  })
