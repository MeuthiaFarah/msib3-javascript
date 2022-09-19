function hitung(tombol) {
	//inisiasi variable
	var frm = document.getElementById("calcForm");
	var angka1 = parseFloat(frm.angka1.value);
	var angka2 = parseFloat(frm.angka2.value);

  if (isNaN(angka1) || isNaN(angka2)) {
    alert("Harap masukkan angka!!");
  } else { 
    switch (tombol) {
      case "+": var total = angka1 + angka2; break;
      case "-": var total = angka1 - angka2; break;
      case "*": var total = angka1 * angka2; break;
      case "/": var total = angka1 / angka2; break;
      case "^": var total = angka1 ** angka2; break;
      default: break;
    }   
    frm.hasil.value = total;
   }
}
