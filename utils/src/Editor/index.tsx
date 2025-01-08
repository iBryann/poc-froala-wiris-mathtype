/* eslint-disable @typescript-eslint/no-explicit-any */

// @ts-ignore
import 'froala-editor/css/froala_style.min.css';
// @ts-ignore
import 'froala-editor/css/froala_editor.pkgd.min.css';
import FroalaEditorComponent from 'react-froala-wysiwyg';
import FroalaEditorView from 'react-froala-wysiwyg/FroalaEditorView';
import 'froala-editor/js/plugins.pkgd.min.js';
import { InputProps } from './types';

import 'froala-editor/js/froala_editor.pkgd.min.js';
import '@wiris/mathtype-froala';

export const Editor = ({ value = '', onChangeValue = () => {} }: InputProps) => {
  const froalaConfig = {
    toolbarButtons: [
      'undo',
      'redo',
      'bold',
      'italic',
      '|',
      'wirisEditor',
      'wirisChemistry',
      'insertImage',
    ],
    imageEditButtons: [
      'wirisEditor',
      'wirisChemistry',
      '|',
      'imageReplace',
      'imageAlign',
      'imageRemove',
      '|',
      'imageLink',
      'linkOpen',
      'linkEdit',
      'linkRemove',
      '-',
      'imageDisplay',
      'imageStyle',
      'imageAlt',
      'imageSize',
    ],
    htmlAllowedTags: ['.*'],
    htmlAllowedAttrs: ['.*'],
    htmlAllowedEmptyTags: ['mprescripts', 'none'],
    events: {
      initialized() {
        // Evite chamar o parser antes do DOM estar pronto
        setTimeout(() => {
          // Processa o conteúdo inicial
          (this as any).html.set(
            (window as any).WirisPlugin.Parser.initParse((this as any).html.get()),
          );
        }, 0);
      },
    },
  };

  return (
    <>
      <FroalaEditorComponent
        config={froalaConfig}
        model={value}
        onModelChange={onChangeValue}
      />

      <FroalaEditorView model={value} />
    </>
  );
};
