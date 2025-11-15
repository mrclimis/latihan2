document.getElementById("hitung").addEventListener("click", function () {
    // Barang pertama
    let harga1 = parseFloat(document.getElementById("harga1").value) || 0;
    let jumlah1 = parseFloat(document.getElementById("jumlah1").value) || 0;
    let total1 = harga1 * jumlah1;
    document.getElementById("total1").value = total1;

    // Barang kedua
    let harga2 = parseFloat(document.getElementById("harga2").value) || 0;
    let jumlah2 = parseFloat(document.getElementById("jumlah2").value) || 0;
    let total2 = harga2 * jumlah2;
    document.getElementById("total2").value = total2;

    // Total Bayar
    let totalBayar = total1 + total2;
    document.getElementById("totalBayar").value = totalBayar;
});

// Tombol Bersihkan Data
document.getElementById("bersihkan").addEventListener("click", function () {

    document.getElementById("nama1").value = "";
    document.getElementById("harga1").value = "";
    document.getElementById("jumlah1").value = "";
    document.getElementById("total1").value = "";

    document.getElementById("nama2").value = "";
    document.getElementById("harga2").value = "";
    document.getElementById("jumlah2").value = "";
    document.getElementById("total2").value = "";

    document.getElementById("totalBayar").value = "";
});
