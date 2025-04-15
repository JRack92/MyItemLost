import crypto from "crypto";

const byteLegnth = 16;

function ConfigHTML() {
  document.getElementById("GenerarQR").addEventListener(`click`, () => {
    GenerarListaQR(2);
  });
}

function generateUniqueHexString() {
  return crypto.randomBytes(byteLegnth).toString("hex");
}

function GenerarListaQR(count) {
  console.log("Funciona");
  console.log(count);
}

function GenerarQR() {
  const uniqueId = generateUniqueHexString();
  new QRCode(document.getElementById("qrcode"), uniqueId);
}

ConfigHTML();
