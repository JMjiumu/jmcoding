import { k as kt, u as useSiteData } from "../app.2c563adb.mjs";
import { defineComponent, computed, h } from "vue";
import { useRoute, useRouter, RouterLink } from "vue-router";
import "@vuepress/shared";
import "@vueuse/core";
import "ts-debounce";
import "body-scroll-lock";
import "element-plus";
const catalog = "";
var m = defineComponent({ name: "FontIcon", props: { icon: { type: String, default: "" }, color: { type: String, default: "" }, size: { type: [String, Number], default: "" } }, setup(t) {
  const p = computed(() => {
    const c = {};
    return t.color && (c.color = t.color), t.size && (c["font-size"] = Number.isNaN(Number(t.size)) ? t.size : `${t.size}px`), Object.keys(c).length ? c : null;
  });
  return () => t.icon ? h("span", { key: t.icon, class: ["font-icon icon", "", t.icon.includes(" ") ? t.icon : `${"iconfont icon-"}${t.icon}`], style: p.value }) : null;
} }), z = defineComponent({ name: "Catalog", props: { base: { type: String, default: "" }, level: { type: Number, default: 3 }, titleGetter: { type: Function, default: (t) => t.title }, iconGetter: { type: Function, default: (t) => t.icon }, orderGetter: { type: Function, default: (t) => t.order || 0 }, shouldIndex: { type: Function, default: (t) => t.index !== false } }, setup(t) {
  const p = kt({ "/": { "title": "目录" } }), c = useRoute(), $ = useRouter(), y = useSiteData(), C = () => {
    const a = t.base || c.path.replace(/\/[^/]+$/, "/"), u = $.getRoutes(), d = [];
    return u.filter(({ meta: l, path: e }) => {
      if (!e.startsWith(a) || e === a)
        return false;
      if (a === "/") {
        const r = Object.keys(y.value.locales).filter((i) => i !== "/");
        if (e === "/404.html" || r.some((i) => e.startsWith(i)))
          return false;
      }
      return (e.endsWith(".html") && !e.endsWith("/index.html") || e.endsWith("/")) && t.shouldIndex(l);
    }).map(({ path: l, meta: e }) => {
      const r = l.substring(a.length).split("/").length;
      return { title: t.titleGetter(e), icon: t.iconGetter(e), base: l.replace(/\/[^/]+\/?$/, "/"), order: t.orderGetter(e), level: l.endsWith("/") ? r - 1 : r, path: l };
    }).filter(({ title: l, level: e }) => e <= t.level || !l).sort((l, e) => l.level - e.level || (l.path.endsWith("/index.html") ? -1 : e.path.endsWith("/index.html") ? 1 : l.order === null ? e.order === null ? l.title.localeCompare(e.title) : e.order : e.order === null ? l.order : l.order > 0 ? e.order > 0 ? l.order - e.order : -1 : e.order < 0 ? l.order - e.order : 1)).forEach((l) => {
      var e;
      const { base: r, level: i } = l;
      switch (i) {
        case 1:
          d.push(l);
          break;
        case 2: {
          const s = d.find((o) => o.path === r);
          s && (s.children ?? (s.children = [])).push(l);
          break;
        }
        default: {
          const s = d.find((o) => o.path === r.replace(/\/[^/]+\/$/, "/"));
          if (s) {
            const o = (e = s.children) == null ? void 0 : e.find((h2) => h2.path === r);
            o && (o.children ?? (o.children = [])).push(l);
          }
        }
      }
    }), d;
  }, N = computed(() => C());
  return () => h("div", { class: "catalog-wrapper" }, [h("h2", { class: "main-title" }, p.value.title), ...N.value.map(({ children: a = [], icon: u, path: d, title: l }, e) => [h("h3", { id: l, class: ["child-title", { "has-children": a.length }] }, [h("a", { href: `#${l}`, class: "header-anchor" }, "#"), h(RouterLink, { class: "catalog-title", to: d }, () => [u ? h(m, { icon: u }) : null, `${e + 1}. ${l || "Unknown"}`])]), a.length ? h("ul", { class: "child-catalog-wrapper" }, a.map(({ children: r = [], icon: i, path: s, title: o }, h$1) => h("li", { class: "child-catalog-item" }, [h("div", { class: ["sub-title", { "has-children": r.length }] }, [h("a", { href: `#${o}`, class: "header-anchor" }, "#"), h(RouterLink, { class: "catalog-title", to: s }, () => [i ? h(m, { icon: i }) : null, `${e + 1}.${h$1 + 1} ${o || "Unknown"}`])]), r.length ? h("div", { class: "sub-catalog-wrapper" }, r.map(({ icon: g, path: k, title: w }, x) => h(RouterLink, { class: "sub-catalog-item", to: k }, () => [g ? h(m, { icon: g }) : null, `${e + 1}.${h$1 + 1}.${x + 1} ${w || "Unknown"}`]))) : null]))) : null])]);
} });
export {
  z as default
};
