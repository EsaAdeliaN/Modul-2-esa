function absenMahasiswa() {
    // mengambil nilai dengan masukkan input
    const nama = document.getElementById('nama').value;
    const nim = document.getElementById('nim').value;
    const kelas = document.getElementById('kelas').value;
  
    // li untuk data absensi
    const listItem = document.createElement('li');
    listItem.textContent = `Nama: ${nama}, NIM: ${nim}, Kelas: ${kelas}`;
  
    // mengambil list
    const list = document.getElementById('absenList');
  
    // menambahkan li ke list
    list.appendChild(listItem);
  
    // untuk reset
    document.getElementById('absensiForm').reset();
  }