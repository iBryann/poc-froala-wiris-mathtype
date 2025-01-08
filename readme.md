Guia de configuração

X. 

Adicione essas diretivas no seu meta Content-Security-Policy.

Permite que fontes no formato base64 sejam carregadas. O Wiris guarda os ícones dele nesse formato.
font-src 'self' data: http: https:;

Garante que conteúdos em base64 sejam carregados. O Wiris usa alguns recursos WASM para funcionar.
connect-src http: https: localhost:* ws://localhost:* data:;

No final deve se parecer com isso

<meta http-equiv="Content-Security-Policy" content="default-src 'self' http: https: localhost:*; script-src 'unsafe-inline' 'unsafe-eval' http: https: localhost:*; style-src 'unsafe-inline' http: https:; object-src 'none'; img-src 'self' http: https: data:; connect-src http: https: localhost:* ws://localhost:* data:; font-src 'self' data: http: https:;">

X. Instale as dependências

pnpm install react-froala-wysiwyg froala-editor @wiris/mathtype-froala @wiris/mathtype-html-integration-devkit

X. Configure o webpack para carregar o FroalaEditor

const webpack = require('webpack');

plugins: [
  ...,
  new webpack.ProvidePlugin({
    FroalaEditor: 'froala-editor',
  }),
],
