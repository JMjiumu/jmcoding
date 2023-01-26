import { resolveComponent, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper-cc2b3d55.js";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_RouterLink = resolveComponent("RouterLink");
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="java核心" tabindex="-1"><a class="header-anchor" href="#java核心" aria-hidden="true">#</a> Java核心</h2><h2 id="java虚拟机" tabindex="-1"><a class="header-anchor" href="#java虚拟机" aria-hidden="true">#</a> Java虚拟机</h2><h2 id="企业级框架" tabindex="-1"><a class="header-anchor" href="#企业级框架" aria-hidden="true">#</a> 企业级框架</h2><h3 id="netty" tabindex="-1"><a class="header-anchor" href="#netty" aria-hidden="true">#</a> Netty</h3><p>`);
  _push(ssrRenderComponent(_component_RouterLink, { to: "/codenotes/gocore/framework/netty/Netty%E6%A0%B8%E5%BF%83.html" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Netty核心`);
      } else {
        return [
          createTextVNode("Netty核心")
        ];
      }
    }),
    _: 1
    /* STABLE */
  }, _parent));
  _push(`</p><p>`);
  _push(ssrRenderComponent(_component_RouterLink, { to: "/codenotes/gocore/framework/netty/Netty%E9%AB%98%E7%BA%A7.html" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Netty高级`);
      } else {
        return [
          createTextVNode("Netty高级")
        ];
      }
    }),
    _: 1
    /* STABLE */
  }, _parent));
  _push(`</p><h2 id="算法和数据结构" tabindex="-1"><a class="header-anchor" href="#算法和数据结构" aria-hidden="true">#</a> 算法和数据结构</h2><h2 id="数据库" tabindex="-1"><a class="header-anchor" href="#数据库" aria-hidden="true">#</a> 数据库</h2><h2 id="开发必备" tabindex="-1"><a class="header-anchor" href="#开发必备" aria-hidden="true">#</a> 开发必备</h2><h2 id="在线技术文档" tabindex="-1"><a class="header-anchor" href="#在线技术文档" aria-hidden="true">#</a> 在线技术文档</h2></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/codenotes/gocore/index.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "index.html.vue"]]);
export {
  index_html as default
};
