import { addons } from "@storybook/manager-api";
import { create } from "@storybook/theming/create";

import { logo } from "../src/assets/logo";

const MyTheme = create({
  base: "dark",
  brandUrl: "https://tamentai.p4ed.com",
  brandTitle: "Poliedro Tamentai",
  brandImage: logo,
  brandTarget: "_self",
});

addons.setConfig({
  theme: MyTheme,
});
