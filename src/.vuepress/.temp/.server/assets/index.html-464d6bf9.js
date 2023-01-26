import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper-cc2b3d55.js";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  _push(`<div${ssrRenderAttrs(_attrs)}><table><thead><tr><th>资源名称</th><th>分享链接</th></tr></thead><tbody><tr><td><code>《Labuladong的算法小抄》</code></td><td><a href="https://www.aliyundrive.com/s/8ouAjxFVgUX" target="_blank" rel="noopener noreferrer">https://www.aliyundrive.com/s/8ouAjxFVgUX`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></td></tr><tr><td><code>《小傅哥的IDEA插件开发手册》</code></td><td><a href="https://www.aliyundrive.com/s/Pq7xVp9bXdR" target="_blank" rel="noopener noreferrer">https://www.aliyundrive.com/s/Pq7xVp9bXdR`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></td></tr><tr><td><code>《疯狂Java讲义第四版》</code></td><td><a href="https://www.aliyundrive.com/s/Yd2L8XtGWUa" target="_blank" rel="noopener noreferrer">https://www.aliyundrive.com/s/Yd2L8XtGWUa`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></td></tr><tr><td><code>《Java核心技术-卷1-基础知识》</code></td><td><a href="https://www.aliyundrive.com/s/EvpXjq55LXn" target="_blank" rel="noopener noreferrer">https://www.aliyundrive.com/s/EvpXjq55LXn`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></td></tr><tr><td><code>《Java核心技术-卷2-高级特性》</code></td><td><a href="https://www.aliyundrive.com/s/hT5RQDe6q1k" target="_blank" rel="noopener noreferrer">https://www.aliyundrive.com/s/hT5RQDe6q1k`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></td></tr><tr><td><code>《Linux命令速查手册》</code></td><td><a href="https://www.aliyundrive.com/s/ophXiMFVPrB" target="_blank" rel="noopener noreferrer">https://www.aliyundrive.com/s/ophXiMFVPrB`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></td></tr><tr><td><code>《鸟哥的Linux私房菜-高清》</code></td><td><a href="https://www.aliyundrive.com/s/bd9PeqCf82N" target="_blank" rel="noopener noreferrer">https://www.aliyundrive.com/s/bd9PeqCf82N`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></td></tr><tr><td><code>《鸟哥的Linux私房菜-非高清》</code></td><td><a href="https://www.aliyundrive.com/s/e9ag9zBwTCS" target="_blank" rel="noopener noreferrer">https://www.aliyundrive.com/s/e9ag9zBwTCS`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></td></tr><tr><td><code>《数学建模算法与应用-第二版-司守奎》</code></td><td><a href="https://www.aliyundrive.com/s/uDtSpLzFqz2" target="_blank" rel="noopener noreferrer">https://www.aliyundrive.com/s/uDtSpLzFqz2`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></td></tr><tr><td><code>《统计学习方法-李航》</code></td><td><a href="https://www.aliyundrive.com/s/Gae5A3tJaZn" target="_blank" rel="noopener noreferrer">https://www.aliyundrive.com/s/Gae5A3tJaZn`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></td></tr><tr><td><code>《Matlab神经网络30个案例分析》</code></td><td><a href="https://www.aliyundrive.com/s/EVibkTrcFex" target="_blank" rel="noopener noreferrer">https://www.aliyundrive.com/s/EVibkTrcFex`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></td></tr><tr><td><code>《具有AI功能加持的终端工具warp使用总结》</code></td><td><a href="https://www.aliyundrive.com/s/kXKqP4RqyUD" target="_blank" rel="noopener noreferrer">https://www.aliyundrive.com/s/kXKqP4RqyUD`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></td></tr></tbody></table></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/resources/books/index.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "index.html.vue"]]);
export {
  index_html as default
};
