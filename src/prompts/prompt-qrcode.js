const promptQrcode = [
  {
    name: 'link',
    description: 'Informe o link para gerar o QRCODE',
    required: true,
  },
  {
    name: 'type',
    description: 'Escolha entre (1) Gerar no Terminal ou (2) Normal.',
    pattern: /^[1-2]+$/,
    message: 'Escolha apenas entre 1 e 2',
    required: true,
  },
];
export default promptQrcode;
