function Tampilkan() {

    var nama        = document.getElementById("nama").value;
    var nim         = document.getElementById("nim").value;
    var matakuliah  = document.getElementById("matakuliah").value;
    var nilai       = parseInt(document.getElementById('nilai').value);  
  
    if (nilai >=85) {
      nilaihuruf = "A";
      indeksnilai = '4.00';
    } else if (nilai >=79) {
      nilaihuruf = "A-";
      indeksnilai = '3.67';
    } else if (nilai >=74) {
      nilaihuruf = "B+";
      indeksnilai = '3.33';
    } else if (nilai >=69) {
      nilaihuruf = "B";
      indeksnilai = '3.00';
    } else if (nilai >=64) {
      nilaihuruf = "B-";
      indeksnilai = '2.67';
    } else if (nilai >=59) {
      nilaihuruf = "C+";
      indeksnilai = '2.33';
    } else if (nilai >=54) {
      nilaihuruf = "C";
      indeksnilai = '2.00';
    } else if (nilai >=41) {
      nilaihuruf = "D";
      indeksnilai = '1.00';
    } else {
      nilaihuruf = "E";
      indeksnilai = '0.00';
    }
  
  var output = "<tr>"+
                "<td>"+nama+"</td>"+
                "<td>"+nim+"</td>"+
                "<td>"+matakuliah+"</td>"+
                "<td>"+nilai+"</td>"+
                "<td>"+nilaihuruf+"</td>"+
                "<td>"+indeksnilai+"</td>"+
                "<td><button class='deleteButton' onclick='hapusData(this)'>Hapus</button></td>"+
              "</tr>;";
var outputbody = document.getElementById('Outputbody');
outputbody.innerHTML += output
  
}
  
  function reset() {
    document.getElementById("nama").value = "";
    document.getElementById("nim").value = "";
    document.getElementById("matakuliah").value = "";
    document.getElementById("nilai").value = "";
    document.getElementById("nama-result").innerHTML = "";
    document.getElementById("nim-result").innerHTML = "";
    document.getElementById("matakuliah-result").innerHTML = "";
    document.getElementById("nilai-result").innerHTML = "";
  
  }
  
  window.onload = function() {
    var resetButton = document.querySelector("button[type='reset']");
    resetButton.addEventListener("click", reset);
  };
  function hapusData(button) {
    var row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
  }
  