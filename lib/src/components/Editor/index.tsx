/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMemo } from 'react';
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import 'froala-editor/js/plugins.pkgd.min.js';
import FroalaEditorComponent from 'react-froala-wysiwyg';
import { TEditor } from './types';

// PRD
import 'froala-editor';
import '@wiris/mathtype-froala';

// DEV
// if (!('FroalaEditor' in window)) {
//   await import('froala-editor').then(async (module) => {
//     (window as any).FroalaEditor = module;

//     if (!('WirisPlugin' in window)) {
//       // @ts-ignore
//       await import('@wiris/mathtype-froala');
//     }
//   });
// }

export const Editor = ({ value = '', licenseKey, onChangeValue = () => {} }: TEditor) => {
  const froalaConfig = useMemo(
    () => ({
      key: licenseKey,
      toolbarButtons: [
        'fontFamily',
        'fontSize',
        '|',
        'bold',
        'italic',
        'underline',
        '|',
        'alignLeft',
        'alignCenter',
        'alignRight',
        'alignJustify',
        '|',
        'formatUL',
        'formatOL',
        '|',
        'lineHeight',
        'indent',
        'outdent',
        '|',
        'undo',
        'redo',
        '|',
        'insertLink',
        'insertImage',
        'wirisEditor',
        'wirisChemistry'
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
        'imageSize'
      ],
      htmlAllowedTags: ['.*'],
      htmlAllowedAttrs: ['.*'],
      htmlAllowedEmptyTags: ['mprescripts', 'none'],
      events: {
        initialized() {
          // Evite chamar o parser antes do DOM estar pronto
          setTimeout(() => {
            (this as any).html.set(
              (window as any).WirisPlugin.Parser.initParse((this as any).html.get())
            );
          }, 0);
        }
      }
    }),
    []
  );

  return (
    <FroalaEditorComponent
      config={froalaConfig}
      model={value}
      onModelChange={onChangeValue}
      onManualControllerReady={(options: any) => {
        options.initialize();
      }}
    />
  );
};
