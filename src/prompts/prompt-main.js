const mainPrompt = [
  {
    name: 'select',
    description: 'Escolha a ferramente (1)-Gerar QRCODE ou (2)-Password',
    pattern: /^[1-2]+$/,
    message: 'Escolha apenas entre 1 e 2',
    required: true,
  },
];

export default mainPrompt;
