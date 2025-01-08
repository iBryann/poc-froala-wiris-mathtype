import type { Preview } from "@storybook/react";

import "../src/styles/reset.css";
import "../src/styles/global.css";
import "../src/styles/docs.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
