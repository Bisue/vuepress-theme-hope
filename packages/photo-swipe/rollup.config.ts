import { bundle } from "../../scripts/rollup.js";

export default [
  ...bundle("node/index", {
    external: ["vuepress-plugin-sass-palette"],
    dtsExternal: ["vuepress-shared"],
  }),
  ...bundle("client/config", {
    external: ["photoswipe"],
  }),
];
