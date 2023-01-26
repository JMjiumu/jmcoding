import { resolveComponent, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper-cc2b3d55.js";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_RouterLink = resolveComponent("RouterLink");
  _push(`<div${ssrRenderAttrs(_attrs)}><p>`);
  _push(ssrRenderComponent(_component_RouterLink, { to: "/projects/techguide/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`技术教程`);
      } else {
        return [
          createTextVNode("技术教程")
        ];
      }
    }),
    _: 1
    /* STABLE */
  }, _parent));
  _push(`</p><p>`);
  _push(ssrRenderComponent(_component_RouterLink, { to: "/projects/pracprojects/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`实战项目`);
      } else {
        return [
          createTextVNode("实战项目")
        ];
      }
    }),
    _: 1
    /* STABLE */
  }, _parent));
  _push(`</p><p>`);
  _push(ssrRenderComponent(_component_RouterLink, { to: "/projects/systemdesign/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`系统设计`);
      } else {
        return [
          createTextVNode("系统设计")
        ];
      }
    }),
    _: 1
    /* STABLE */
  }, _parent));
  _push(`</p><p>`);
  _push(ssrRenderComponent(_component_RouterLink, { to: "/projects/toollibrary/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`工具类库`);
      } else {
        return [
          createTextVNode("工具类库")
        ];
      }
    }),
    _: 1
    /* STABLE */
  }, _parent));
  _push(`</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/projects/index.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "index.html.vue"]]);
export {
  index_html as default
};
