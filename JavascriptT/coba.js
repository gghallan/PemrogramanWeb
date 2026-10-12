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
}
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

    document.getElementById("btnOk2").disabled = true;

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

var selectElement = document.createElement("select");
selectElement.id = "selectPilihan";
selectElement.style.minWidth = "160px";

for (var i = 0; i < daftarPilihan.length; i++) {
        var opt = document.createElement("option");
        opt.value = daftarPilihan[i];
        opt.innerText = daftarPilihan[i];
        selectElement.appendChild(opt);}
 
wadahOpsi.appendChild(selectElement);
    var br = document.createElement("br");
    wadahOpsi.appendChild(br);
    var btn3 = document.createElement("button");
    btn3.type = "button";
    btn3.className = "tombol-ok";
    btn3.id = "btnOk3";
    btn3.innerText = "OK";
    btn3.style.marginTop = "10px";
    btn3.onclick = prosesLangkah3; 
    wadahOpsi.appendChild(btn3);
}

function prosesLangkah3() {
    pilihanYangDipilih = "";
    var radios=document.getElementsByName("radioPilihan");
    for (var i=0;i<radios.length;i++) {
        if (radios[i].checked){
            pilihanYangDipilih=radios[i].value;
            break;
        }
    }
    if (pilihanYangDipilih==="") {
        pilihanYangDipilih=document.getElementById("selectPilihan").value;}}
     
    if (!pilihanYangDipilih) {
        alert("Pilih salah satu opsi dulu");
        return;}
    document.getElementById("btnOk3").disabled = true;
    var wadahEmail=document.getElementById("wadahEmail");
    wadahEmail.innerHTML="";
    var divEmail=document.createElement("div");
    divEmail.className="baris-input";
    divEmail.style.marginTop="10px";
    divEmail.innerHTML='<span class="label-biru">email :</span> ' +
                         '<input type="text" id="inputEmail" placeholder="<email@domain.com>" style="width: 250px;">';
    wadahEmail.appendChild(divEmail);    