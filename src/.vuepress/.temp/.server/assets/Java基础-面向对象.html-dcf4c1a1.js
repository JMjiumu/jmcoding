import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper-cc2b3d55.js";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="三大特性" tabindex="-1"><a class="header-anchor" href="#三大特性" aria-hidden="true">#</a> 三大特性</h2></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/codenotes/javacore/Java基础-面向对象.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Java________html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "Java基础-面向对象.html.vue"]]);
export {
  Java________html as default
};
