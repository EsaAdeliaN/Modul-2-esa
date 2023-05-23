document.getElementById('formMahasiswa').addEventListener('submit', function(e) {
    e.preventDefault();
    var nama = document.getElementById('namaInput').value;
    var tahunlahir = document.getElementById('tahunlahirInput').value;
    var nohandphone = document.getElementById('nohandphoneInput').value;
    
    var table = document.getElementById('mahasiswaTable');
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    
    cell1.innerHTML = nama;
    cell2.innerHTML = tahunlahir;
    cell3.innerHTML = nohandphone;
    cell4.innerHTML = '<button onclick="deleteRow(this)">Hapus</button>';
    
    document.getElementById('namaInput').value = '';
    document.getElementById('tahunlahirInput').value = '';
    document.getElementById('nohandphoneInput').value = '';
  });
  
  function deleteRow(btn) {
    var row = btn.parentNode.parentNode;
    row.parentNode.removeChild(row);
  }