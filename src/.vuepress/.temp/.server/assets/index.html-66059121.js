import { resolveComponent, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper-cc2b3d55.js";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_RouterLink = resolveComponent("RouterLink");
  _push(`<div${ssrRenderAttrs(_attrs)}><p>`);
  _push(ssrRenderComponent(_component_RouterLink, { to: "/floatinglife/cooker/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`小镇美食家`);
      } else {
        return [
          createTextVNode("小镇美食家")
        ];
      }
    }),
    _: 1
    /* STABLE */
  }, _parent));
  _push(`</p><p>`);
  _push(ssrRenderComponent(_component_RouterLink, { to: "/floatinglife/iter/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`小镇技术宅`);
      } else {
        return [
          createTextVNode("小镇技术宅")
        ];
      }
    }),
    _: 1
    /* STABLE */
  }, _parent));
  _push(`</p><p>`);
  _push(ssrRenderComponent(_component_RouterLink, { to: "/floatinglife/sporter/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`小镇运动狂`);
      } else {
        return [
          createTextVNode("小镇运动狂")
        ];
      }
    }),
    _: 1
    /* STABLE */
  }, _parent));
  _push(`</p><p>`);
  _push(ssrRenderComponent(_component_RouterLink, { to: "/floatinglife/thinker/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`小镇思考者`);
      } else {
        return [
          createTextVNode("小镇思考者")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/floatinglife/index.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "index.html.vue"]]);
export {
  index_html as default
};
