// Add JS here

function hitungLuas() {
    let alas = document.getElementById('alas').value;
    let tinggi = document.getElementById('tinggi').value;
    let hasil = document.getElementById('hasil');

    let luas = (0.5 * parseFloat(alas) * parseFloat(tinggi));
    if (alas === '' || tinggi === '')
    {outputDiv.innerHTML = "";}
    if (alas === '0' || tinggi === '0'){
        outputDiv.innerHTML = "";}
      
    
    hasil.style.display = 'block';
    hasil.innerHTML = `
        <strong>Hasil Perhitungan:</strong><br><br>
        Alas = ${alas} cm<br>
        Tinggi = ${tinggi} cm<br> <br>
        Luas Segitiga = ${luas} cm²
    `;
}
