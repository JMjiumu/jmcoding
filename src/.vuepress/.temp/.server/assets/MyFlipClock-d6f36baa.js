import FlipClock from "./FlipClock-dd0e2fc8.js";
import { resolveComponent, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper-cc2b3d55.js";
import "./FlipItem-32e726d9.js";
const MyFlipClock_vue_vue_type_style_index_0_lang = "";
const _sfc_main = {
  components: {
    FlipClock
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_flip_clock = resolveComponent("flip-clock");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "test-clock-container" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_flip_clock, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../components/MyFlipClock.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const MyFlipClock = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "MyFlipClock.vue"]]);
export {
  MyFlipClock as default
};
