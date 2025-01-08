import { useState } from 'react';

import { Editor, EditorView } from 'bryann-library-template';
// import { Editor as EditorUtils } from '@poliedro/lib-test-utils';

const content =
  // eslint-disable-next-line max-len
  '<p class="text"> Double click on the following formula to edit it.</p><p style="text-align:left;"><math><mi>x</mi><mo>=</mo><mfrac><mrow><mo>-</mo><mi>b</mi><mo>&PlusMinus;</mo><msqrt><msup><mi>b</mi><mn>2</mn></msup><mo>-</mo><mn>4</mn><mi>a</mi><mi>c</mi></msqrt></mrow><mrow><mn>2</mn><mi>a</mi></mrow></mfrac></math></p>';

export const App = () => {
  const [model, setModel] = useState(content);
  // const [model2, setModel2] = useState(content);

  return (
    <>
      <Editor value={model} onChangeValue={setModel} />
      <EditorView content={model} />
      {/* --------------
      <Editor value={model2} onChangeValue={setModel2} />
      <EditorView content={model2} /> */}
    </>
  );
};
