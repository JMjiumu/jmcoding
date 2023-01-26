import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper-cc2b3d55.js";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_PDF = resolveComponent("PDF");
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="引入电子书" tabindex="-1"><a class="header-anchor" href="#引入电子书" aria-hidden="true">#</a> 引入电子书</h2>`);
  _push(ssrRenderComponent(_component_PDF, {
    url: "/books/Git与Github.pdf",
    zoom: 70
  }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/floatinglife/iter/引入电子书.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ______html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "引入电子书.html.vue"]]);
export {
  ______html as default
};
