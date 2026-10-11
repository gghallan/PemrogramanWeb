var namaUser="";
var jumlahPilihan=0;
var daftarPilihan=[];
var pilihanYangDipilih="";

function prosesLangkah1(){
var inputNama=document.getElementById("nama");
var inputJumlah=document.getElementById("jumlah");

var nama=inputNama.value;
var jml =inputJumlah.value;

if (nama==""){
    alert("nama sonde boleh kosong");
    inputNama.focus();
    return;
}
if (jml===""||isNaN(jml)){
alert("jumlah pilihan harus lebih dari 0");
inputJumlah.focus();
return;
}

namaUser=nama;
jumlahPilihan=parseInt(jml);
document.getElementById('btnOK1').disabled=true;

var wadah=document.getElementById('wadahInputPilihan');
wadah.innerHTML="";
for(var i=1;i<=jumlahPilihan;i++){

    var divBaris=document.createElement("div");
    divBaris.className="baris-input";
    divBaris.innerHTML= '<span class="label-biru">Pilihan ' + i + ' :</span>'+'<input type="text" class="input-teks-pilihan" id="pilihan ke' + i + '" placeholder="<Teks ' + i + '>">';
wadah.appendChild(divBaris)
}
var btn=document.createElement("button");
btn.type="button";
btn.className = "tombol-ok";
btn.id = "btnOk2";
btn.innerText = "OK";
btn.onclick = prosesLangkah2; 

wadah.appendChild(btn);
function prosesLangkah2() {
    var inputs =document.getElementsByClassName("iteks-pilihan");
    daftarPilihan = [];
    for (var i = 0; i < inputs.length; i++) {
        var teks = inputs[i].value.trim();

        if (teks===""){
            alert("Pilihan "+(i + 1)+"jangan kosong2 adix");
            inputs[i].focus();
            return;
        }
        daftarPilihan.push(teks); //masuk array
    }

    document.getElementById("btnOk2").disabled = true;}


}