import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';
import terser from '@rollup/plugin-terser';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import inject from '@rollup/plugin-inject';

const packageJson = require('./package.json');

export default [
  {
    input: 'src/index.ts',
    output: {
      file: packageJson.module,
      format: 'esm',
      sourcemap: true
    },
    plugins: [
      peerDepsExternal(),
      resolve({
        resolveOnly: ['crypto'], // Adiciona resolução para o 'crypto' usando o polyfill
        preferBuiltins: false
      }),
      commonjs(),
      typescript({ tsconfig: './tsconfig.json' }),
      terser(),
      postcss(),
      inject({
        FroalaEditor: 'froala-editor'
      })
    ],
    external: ['react', 'react-dom', 'styled-components'] // Exclui apenas essas dependências do bundle
  },
  {
    input: 'src/index.ts',
    output: [{ file: packageJson.types, format: 'es' }],
    plugins: [dts.default()],
    external: [/\.css$/]
  }
];
