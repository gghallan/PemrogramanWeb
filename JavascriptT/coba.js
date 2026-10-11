var namaUser="";
var jumlahPilihan=0;
var daftarPilihan=[];
var pilihanYangDipilih="";

function prosesLangkah1(){
var inputNama=document.getElementById("nama");
var inputJumlah=document.getElementById("jumlah");

var nama=inputNama.value();
var jml =inputJumlah.value();

if (nama==""){
    alert("nama sonde boleh kosong");
    inputNama.focus();
    return;
}
if (jml===""||isNaN(jml)){
alert("jumlah pilihan harus lebih dari 0");
inputJumlah.focus();
}

namaUser=nama;
jumlahPilihan=parseInt(jml);
document.getElementById('btnOK1').disabled=true;


}