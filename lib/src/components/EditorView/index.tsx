import { useEffect, useState } from 'react';
import FroalaEditorView from 'react-froala-wysiwyg/FroalaEditorView';

import { TEditorView } from './types';

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

export const EditorView = ({ content, mode = 'image' }: TEditorView) => {
  const [parsedHTML, setParsedHTML] = useState('');

  useEffect(() => {
    if (mode === 'image' && 'WirisPlugin' in window) {
      setParsedHTML((window as any)?.WirisPlugin.Parser.initParse(content));
    } else {
      setParsedHTML(content);
    }
  }, [content]);

  return <FroalaEditorView model={parsedHTML} />;
};
