import React, { useEffect, useState } from 'react';
import FroalaEditorView from 'react-froala-wysiwyg/FroalaEditorView';

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

export const EditorView = ({ content }: { content: string }) => {
  const [html, setHtml] = useState('');

  useEffect(() => {
    if ('WirisPlugin' in window) {
      setHtml((window as any)?.WirisPlugin.Parser.initParse(content));
    }
  }, [content]);

  return <FroalaEditorView model={html} />;
};
