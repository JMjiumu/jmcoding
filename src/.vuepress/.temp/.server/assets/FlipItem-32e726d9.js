import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper-cc2b3d55.js";
const FlipItem_vue_vue_type_style_index_0_scoped_3b629d0d_lang = "";
const _sfc_main = {
  props: {
    total: {
      type: Number,
      default: 9
    },
    current: {
      type: Number,
      default: -1
    }
  },
  data() {
    return {
      before: this.total === this.current ? -1 : this.total,
      isPlay: false
    };
  },
  watch: {
    current(current, preCurrent) {
      this.before = preCurrent;
      if (!this.isPlay) {
        this.isPlay = true;
      }
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: { play: $data.isPlay }
  }, _attrs))} data-v-3b629d0d><ul class="flip" data-v-3b629d0d><!--[-->`);
  ssrRenderList($props.total + 1, (item, key) => {
    _push(`<li class="${ssrRenderClass([{ active: $props.current === key, before: key === $data.before }, "item"])}" data-v-3b629d0d><div class="up" data-v-3b629d0d><div class="shadow" data-v-3b629d0d></div><div class="inn" data-v-3b629d0d>${ssrInterpolate(key)}</div></div><div class="down" data-v-3b629d0d><div class="shadow" data-v-3b629d0d></div><div class="inn" data-v-3b629d0d>${ssrInterpolate(key)}</div></div></li>`);
  });
  _push(`<!--]--></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../components/FlipItem.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const FlipItem = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-3b629d0d"], ["__file", "FlipItem.vue"]]);
export {
  FlipItem as default
};
