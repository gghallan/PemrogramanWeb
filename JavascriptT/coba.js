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
}
wadah.appendChild(btn);
function prosesLangkah2() {
    var inputs =document.getElementsByClassName("input-teks-pilihan");
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

var wadahOpsi=document.getElementById("wadahOpsi");
wadahOpsi.innerHTML="";
var lblPilihan=document.createElement("p");
lblPilihan.className="label-biru";
lblPilihan.style.fontWeight="bold";
lblPilihan.style.margin="12px 0 6px 0";
lblPilihan.innerText="Pilihan :";
wadahOpsi.appendChild(lblPilihan);

var divRadio=document.createElement("div");
    for (var i=0;i<daftarPilihan.length;i++) {
        var itemRadio=document.createElement("div");
        itemRadio.style.marginBottom="4px";
        var rd=document.createElement("input");
        rd.type="radio";
        rd.name="radioPilihan"; // name harus sama biar cuma bisa pilih satu
        rd.id="radio_" + i;
        rd.value=daftarPilihan[i];
        if(i === 0){
            rd.checked = true; // default pilih opsi ke-1 persis di PDF
        }
//6
  var lbl = document.createElement("label");
        lbl.htmlFor = "radio_" + i;
        lbl.className = "label-biru";
        lbl.innerText = " " + daftarPilihan[i];
        itemRadio.appendChild(rd);
        itemRadio.appendChild(lbl);
        divRadio.appendChild(itemRadio);}
 wadahOpsi.appendChild(divRadio);
var lblDropdown=document.createElement("p");
lblDropdown.className="label-biru";lblDropdown.style.fontWeight="bold";
lblDropdown.style.margin="12px 0 6px 0";
lblDropdown.innerText="or dalam bentuk Drop Down";
wadahOpsi.appendChild(lblDropdown);
