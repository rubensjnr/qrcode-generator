import qr from 'qrcode-terminal';
async function handle(err, result) {
  if (err) {
    console.log('error on aplication');
    return;
  }
  const isSmall = result.type == 1;
  qr.generate(result.link, { small: isSmall }, (qrcode) => {
    console.log('QRCode gerado com sucesso:\n');
    console.log(qrcode);
  });
}
export default handle;
