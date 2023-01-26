import FlipItem from "./FlipItem-32e726d9.js";
import { resolveComponent, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper-cc2b3d55.js";
function getTimeArr(now = new Date()) {
  const h = now.getHours();
  const m = now.getMinutes();
  const s = now.getSeconds();
  return [
    // ...toArr(Y),
    // ...toArr(M),
    // ...toArr(D),
    ...toArr(h),
    ...toArr(m),
    ...toArr(s)
  ];
}
function toArr(n) {
  return n >= 10 ? ("" + n).split("").map((item) => Number(item)) : [0, n];
}
const FlipClock_vue_vue_type_style_index_0_scoped_60a1cdff_lang = "";
const _sfc_main = {
  components: {
    FlipItem
  },
  data() {
    return {
      timeArr: getTimeArr()
    };
  },
  mounted() {
    this.startTimer();
  },
  beforeDestroy() {
    this.stopTimer();
  },
  methods: {
    startTimer() {
      this.stopTimer();
      this.timer = setTimeout(() => {
        this.timeArr = getTimeArr();
        this.startTimer();
      }, 1e3);
    },
    stopTimer() {
      clearTimeout(this.timer);
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_flip_item = resolveComponent("flip-item");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "clock-container" }, _attrs))} data-v-60a1cdff>`);
  _push(ssrRenderComponent(_component_flip_item, {
    total: 2,
    current: $data.timeArr[0]
  }, null, _parent));
  _push(ssrRenderComponent(_component_flip_item, {
    total: 9,
    current: $data.timeArr[1]
  }, null, _parent));
  _push(`<div class="colon" data-v-60a1cdff></div>`);
  _push(ssrRenderComponent(_component_flip_item, {
    total: 5,
    current: $data.timeArr[2]
  }, null, _parent));
  _push(ssrRenderComponent(_component_flip_item, {
    total: 9,
    current: $data.timeArr[3]
  }, null, _parent));
  _push(`<div class="colon" data-v-60a1cdff></div>`);
  _push(ssrRenderComponent(_component_flip_item, {
    total: 5,
    current: $data.timeArr[4]
  }, null, _parent));
  _push(ssrRenderComponent(_component_flip_item, {
    total: 9,
    current: $data.timeArr[5]
  }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../components/FlipClock.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const FlipClock = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-60a1cdff"], ["__file", "FlipClock.vue"]]);
export {
  FlipClock as default
};
