import { defineAsyncComponent } from 'vue'

export default {
  enhance: ({ app }) => {    
      app.component("FlipClock", defineAsyncComponent(() => import("D:/Download/Project/jmcoding/my-docs/src/.vuepress/components/FlipClock.vue"))),
      app.component("FlipItem", defineAsyncComponent(() => import("D:/Download/Project/jmcoding/my-docs/src/.vuepress/components/FlipItem.vue"))),
      app.component("MyFlipClock", defineAsyncComponent(() => import("D:/Download/Project/jmcoding/my-docs/src/.vuepress/components/MyFlipClock.vue"))),
      app.component("NavCard", defineAsyncComponent(() => import("D:/Download/Project/jmcoding/my-docs/src/.vuepress/components/NavCard.vue"))),
      app.component("QuickNav", defineAsyncComponent(() => import("D:/Download/Project/jmcoding/my-docs/src/.vuepress/components/QuickNav.vue")))
  },
}
