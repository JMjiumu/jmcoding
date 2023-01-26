import { defineClientConfig } from "@vuepress/client";
import { hasGlobalComponent } from "D:/Download/Project/jmcoding/my-docs/node_modules/vuepress-plugin-components/lib/client/shared.js";
import { h } from "vue";

import { useStyleTag } from "D:/Download/Project/jmcoding/my-docs/node_modules/vuepress-plugin-components/lib/client/vueuse.js";
import FontIcon from "D:/Download/Project/jmcoding/my-docs/node_modules/vuepress-plugin-components/lib/client/components/FontIcon.js";
import Badge from "D:/Download/Project/jmcoding/my-docs/node_modules/vuepress-plugin-components/lib/client/components/Badge.js";
import BiliBili from "D:/Download/Project/jmcoding/my-docs/node_modules/vuepress-plugin-components/lib/client/components/BiliBili.js";
import PDF from "D:/Download/Project/jmcoding/my-docs/node_modules/vuepress-plugin-components/lib/client/components/PDF.js";
import BackToTop from "D:/Download/Project/jmcoding/my-docs/node_modules/vuepress-plugin-components/lib/client/components/BackToTop.js";


import "D:/Download/Project/jmcoding/my-docs/node_modules/vuepress-plugin-components/lib/client/styles/sr-only.scss";

export default defineClientConfig({
  enhance: ({ app }) => {
    if(!hasGlobalComponent("FontIcon")) app.component("FontIcon", FontIcon);
    if(!hasGlobalComponent("Badge")) app.component("Badge", Badge);
    if(!hasGlobalComponent("BiliBili")) app.component("BiliBili", BiliBili);
    if(!hasGlobalComponent("PDF")) app.component("PDF", PDF);
    
  },
  setup: () => {
      useStyleTag(`\
      @import url("//at.alicdn.com/t/c/font_2410206_5vb9zlyghj.css");
      `);
  },
  rootComponents: [
    () => h(BackToTop, { threshold: 300 }),
    
  ],
});
