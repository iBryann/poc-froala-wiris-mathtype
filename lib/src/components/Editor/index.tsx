/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMemo } from 'react';
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import 'froala-editor/js/languages/pt_br.js';
import 'froala-editor/js/plugins.pkgd.min.js';
import FroalaEditorComponent from 'react-froala-wysiwyg';
import { TEditor } from './types';
import { Feedback } from '../Feedback';
import { Label } from '../Label';
import { Container } from './styles';
import { COLORS } from '../Feedback/types';

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

export const Editor = ({
  label = '',
  value = '',
  required,
  disabled = false,
  className = '',
  licenseKey,
  feedbackShow,
  feedbackType = 'default',
  feedbackMessage,
  onChangeValue = () => {}
}: TEditor) => {
  const froalaConfig = useMemo(
    () => ({
      key: licenseKey,
      language: 'pt_br',
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
        'indent',
        'outdent',
        '|',
        'lineHeight',
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
    <Container
      className={'t-richtext ' + className}
      aria-disabled={disabled}
      color={COLORS[feedbackType]}
    >
      <Label label={label} required={required} disabled={disabled} />

      <FroalaEditorComponent
        config={froalaConfig}
        model={value}
        onModelChange={onChangeValue}
        onManualControllerReady={(options: any) => {
          options.initialize();
        }}
      />

      <Feedback
        disabled={disabled}
        feedbackShow={feedbackShow}
        feedbackMessage={feedbackMessage}
        feedbackType={feedbackType}
      />
    </Container>
  );
};
