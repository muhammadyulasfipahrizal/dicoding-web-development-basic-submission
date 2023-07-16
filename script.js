function submitKebagusan() {
    var kebagusan = document.getElementById("kebagusan").value;
    if (kebagusan !== "") {
      alert("Anda memberi rating: " + kebagusan);
    } else {
      alert("Silakan pilih rating terlebih dahulu.");
    }
  }