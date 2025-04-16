const ByteLegnth = 16;
const CountListQR = 10;

let _listContainer;
let _listQRImgContainer;

function ConfigHTML() {
  document.getElementById("GenerarQR").addEventListener(`click`, () => {
    GenerarListaQR(CountListQR);
  });

  _listContainer = document.getElementById("QrList_Container");
  _listQRImgContainer = document.getElementById("QrLIstImag_Container");

  new QRCode(document.getElementById("qrcode"), "uniqueId");
}

function generateUniqueHexString() {
  const id = crypto.randomUUID();
  console.log(id); // Ejemplo: '3f9f1b6e-8f4c-4a2f-9c3e-1d2b3a4c5d6e'
  return id;
}

function GenerarListaQR(count) {
  for (let i = 0; i < count; i++) {
    GenerarQR();
  }
}

function GenerarQR() {
  const uniqueId = generateUniqueHexString();
  const liElement = document.createElement("li");
  const imgElement = document.createElement("div");

  imgElement.setAttribute("id", uniqueId);

  liElement.innerText = uniqueId;
  _listContainer.appendChild(liElement);
  _listQRImgContainer.appendChild(imgElement);

  new QRCode(imgElement, uniqueId);
}

ConfigHTML();
