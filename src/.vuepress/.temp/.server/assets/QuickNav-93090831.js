import { resolveComponent, mergeProps, withCtx, createTextVNode, toDisplayString, createVNode, createCommentVNode, openBlock, createBlock, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper-cc2b3d55.js";
const QuickNav_vue_vue_type_style_index_0_scoped_5e891ad8_lang = "";
const _sfc_main = {
  data() {
    return {
      quickNav: [
        {
          "category": "搜索引擎",
          "items": [
            {
              "title": "百度",
              "src": "https://www.baidu.com/",
              "isPerfect": false
            },
            {
              "title": "必应",
              "src": "https://cn.bing.com/",
              "isPerfect": true
            }
          ]
        },
        {
          "category": "开源社区",
          "items": [
            {
              "title": "Dromara",
              "src": "https://gitee.com/dromara",
              "isPerfect": true
            },
            {
              "title": "OSRC-开源运行时社区",
              "src": "https://www.osrc.com/",
              "isPerfect": true
            },
            {
              "title": "Doocs开源社区",
              "src": "https://doocs.gitee.io/#/README_CN",
              "isPerfect": true
            }
          ]
        },
        {
          "category": "优质博客",
          "items": [
            {
              "title": "Road2Coding",
              "src": "https://r2coding.com/#/",
              "isPerfect": true
            },
            {
              "title": "大都督的技术博客",
              "src": "https://www.yuque.com/renyong-jmovm/dadudu",
              "isPerfect": true
            },
            {
              "title": "Gitstar Ranking",
              "src": "https://gitstar-ranking.com/",
              "isPerfect": true
            },
            {
              "title": "JeeWeiXin",
              "src": "https://jeeweixin.com/",
              "isPerfect": true
            },
            {
              "title": "徐靖峰的博客",
              "src": "https://www.cnkirito.moe/",
              "isPerfect": true
            },
            {
              "title": "芋道源码",
              "src": "https://www.iocoder.cn/",
              "isPerfect": true
            },
            {
              "title": "虫洞栈",
              "src": "https://bugstack.cn/",
              "isPerfect": false
            },
            {
              "title": "全栈知识体系",
              "src": "https://www.pdai.tech/",
              "isPerfect": true
            },
            {
              "title": "程序猿DD",
              "src": "https://blog.didispace.com/",
              "isPerfect": true
            },
            {
              "title": "LABULADONG",
              "src": "https://labuladong.gitee.io/algo/",
              "isPerfect": true
            }
          ]
        },
        {
          "category": "其他导航",
          "items": [
            {
              "title": "MyOctoCat",
              "src": "https://myoctocat.com/",
              "isPerfect": true
            },
            {
              "title": "LeetCode",
              "src": "https://leetcode.cn/",
              "isPerfect": true
            },
            {
              "title": "Jar包下载",
              "src": "https://search.maven.org/",
              "isPerfect": true
            },
            {
              "title": "ghelper",
              "src": "http://ghelper.net/",
              "isPerfect": true
            },
            {
              "title": "Maven仓库",
              "src": "https://mvnrepository.com/",
              "isPerfect": true
            }
          ]
        }
      ]
    };
  },
  methods: {
    gotoSite(url) {
      window.open(url, "_blank").location;
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_el_tabs = resolveComponent("el-tabs");
  const _component_el_tab_pane = resolveComponent("el-tab-pane");
  const _component_el_scrollbar = resolveComponent("el-scrollbar");
  const _component_el_row = resolveComponent("el-row");
  const _component_el_col = resolveComponent("el-col");
  const _component_el_card = resolveComponent("el-card");
  _push(ssrRenderComponent(_component_el_tabs, mergeProps({
    "tab-position": "left",
    style: { "height": "600px" }
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<!-- 标签页 --><!--[-->`);
        ssrRenderList($data.quickNav, (i, index) => {
          _push2(ssrRenderComponent(_component_el_tab_pane, {
            label: i.category,
            key: index
          }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`<!-- 使用珊格操作 -->`);
                _push3(ssrRenderComponent(_component_el_scrollbar, { height: "600px" }, {
                  default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      _push4(`<!--[-->`);
                      ssrRenderList(Math.ceil(i.items.length / 2), (j, index2) => {
                        _push4(ssrRenderComponent(_component_el_row, {
                          gutter: 10,
                          key: index2,
                          style: { "margin-bottom": "10px" }
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<!-- 
                    0-（0、1）-（i*2,i*2+1）
                    1-（2、3）-（i*2,i*2+1）
                    2-（4、5）-（i*2,i*2+1）
                 -->`);
                              if (i.items[index2 * 2] != null) {
                                _push5(ssrRenderComponent(_component_el_col, { span: 12 }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_el_card, {
                                        shadow: "hover",
                                        style: { "border-radius": "10px" },
                                        onClick: ($event) => $options.gotoSite(i.items[index2 * 2].src)
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(i.items[index2 * 2].isPerfect ? i.items[index2 * 2].title + "⚡️" : i.items[index2 * 2].title)}`);
                                          } else {
                                            return [
                                              createTextVNode(
                                                toDisplayString(i.items[index2 * 2].isPerfect ? i.items[index2 * 2].title + "⚡️" : i.items[index2 * 2].title),
                                                1
                                                /* TEXT */
                                              )
                                            ];
                                          }
                                        }),
                                        _: 2
                                        /* DYNAMIC */
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(_component_el_card, {
                                          shadow: "hover",
                                          style: { "border-radius": "10px" },
                                          onClick: ($event) => $options.gotoSite(i.items[index2 * 2].src)
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(
                                              toDisplayString(i.items[index2 * 2].isPerfect ? i.items[index2 * 2].title + "⚡️" : i.items[index2 * 2].title),
                                              1
                                              /* TEXT */
                                            )
                                          ]),
                                          _: 2
                                          /* DYNAMIC */
                                        }, 1032, ["onClick"])
                                      ];
                                    }
                                  }),
                                  _: 2
                                  /* DYNAMIC */
                                }, _parent5, _scopeId4));
                              } else {
                                _push5(`<!---->`);
                              }
                              if (i.items[index2 * 2 + 1] != null) {
                                _push5(ssrRenderComponent(_component_el_col, { span: 12 }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_el_card, {
                                        shadow: "hover",
                                        style: { "border-radius": "10px" },
                                        onClick: ($event) => $options.gotoSite(i.items[index2 * 2 + 1].src)
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(i.items[index2 * 2 + 1].isPerfect ? i.items[index2 * 2 + 1].title + "⚡️" : i.items[index2 * 2 + 1].title)}`);
                                          } else {
                                            return [
                                              createTextVNode(
                                                toDisplayString(i.items[index2 * 2 + 1].isPerfect ? i.items[index2 * 2 + 1].title + "⚡️" : i.items[index2 * 2 + 1].title),
                                                1
                                                /* TEXT */
                                              )
                                            ];
                                          }
                                        }),
                                        _: 2
                                        /* DYNAMIC */
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(_component_el_card, {
                                          shadow: "hover",
                                          style: { "border-radius": "10px" },
                                          onClick: ($event) => $options.gotoSite(i.items[index2 * 2 + 1].src)
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(
                                              toDisplayString(i.items[index2 * 2 + 1].isPerfect ? i.items[index2 * 2 + 1].title + "⚡️" : i.items[index2 * 2 + 1].title),
                                              1
                                              /* TEXT */
                                            )
                                          ]),
                                          _: 2
                                          /* DYNAMIC */
                                        }, 1032, ["onClick"])
                                      ];
                                    }
                                  }),
                                  _: 2
                                  /* DYNAMIC */
                                }, _parent5, _scopeId4));
                              } else {
                                _push5(`<!---->`);
                              }
                            } else {
                              return [
                                createCommentVNode(" \n                    0-（0、1）-（i*2,i*2+1）\n                    1-（2、3）-（i*2,i*2+1）\n                    2-（4、5）-（i*2,i*2+1）\n                 "),
                                i.items[index2 * 2] != null ? (openBlock(), createBlock(
                                  _component_el_col,
                                  {
                                    key: 0,
                                    span: 12
                                  },
                                  {
                                    default: withCtx(() => [
                                      createVNode(_component_el_card, {
                                        shadow: "hover",
                                        style: { "border-radius": "10px" },
                                        onClick: ($event) => $options.gotoSite(i.items[index2 * 2].src)
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(
                                            toDisplayString(i.items[index2 * 2].isPerfect ? i.items[index2 * 2].title + "⚡️" : i.items[index2 * 2].title),
                                            1
                                            /* TEXT */
                                          )
                                        ]),
                                        _: 2
                                        /* DYNAMIC */
                                      }, 1032, ["onClick"])
                                    ]),
                                    _: 2
                                    /* DYNAMIC */
                                  },
                                  1024
                                  /* DYNAMIC_SLOTS */
                                )) : createCommentVNode("v-if", true),
                                i.items[index2 * 2 + 1] != null ? (openBlock(), createBlock(
                                  _component_el_col,
                                  {
                                    key: 1,
                                    span: 12
                                  },
                                  {
                                    default: withCtx(() => [
                                      createVNode(_component_el_card, {
                                        shadow: "hover",
                                        style: { "border-radius": "10px" },
                                        onClick: ($event) => $options.gotoSite(i.items[index2 * 2 + 1].src)
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(
                                            toDisplayString(i.items[index2 * 2 + 1].isPerfect ? i.items[index2 * 2 + 1].title + "⚡️" : i.items[index2 * 2 + 1].title),
                                            1
                                            /* TEXT */
                                          )
                                        ]),
                                        _: 2
                                        /* DYNAMIC */
                                      }, 1032, ["onClick"])
                                    ]),
                                    _: 2
                                    /* DYNAMIC */
                                  },
                                  1024
                                  /* DYNAMIC_SLOTS */
                                )) : createCommentVNode("v-if", true)
                              ];
                            }
                          }),
                          _: 2
                          /* DYNAMIC */
                        }, _parent4, _scopeId3));
                      });
                      _push4(`<!--]-->`);
                    } else {
                      return [
                        (openBlock(true), createBlock(
                          Fragment,
                          null,
                          renderList(Math.ceil(i.items.length / 2), (j, index2) => {
                            return openBlock(), createBlock(
                              _component_el_row,
                              {
                                gutter: 10,
                                key: index2,
                                style: { "margin-bottom": "10px" }
                              },
                              {
                                default: withCtx(() => [
                                  createCommentVNode(" \n                    0-（0、1）-（i*2,i*2+1）\n                    1-（2、3）-（i*2,i*2+1）\n                    2-（4、5）-（i*2,i*2+1）\n                 "),
                                  i.items[index2 * 2] != null ? (openBlock(), createBlock(
                                    _component_el_col,
                                    {
                                      key: 0,
                                      span: 12
                                    },
                                    {
                                      default: withCtx(() => [
                                        createVNode(_component_el_card, {
                                          shadow: "hover",
                                          style: { "border-radius": "10px" },
                                          onClick: ($event) => $options.gotoSite(i.items[index2 * 2].src)
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(
                                              toDisplayString(i.items[index2 * 2].isPerfect ? i.items[index2 * 2].title + "⚡️" : i.items[index2 * 2].title),
                                              1
                                              /* TEXT */
                                            )
                                          ]),
                                          _: 2
                                          /* DYNAMIC */
                                        }, 1032, ["onClick"])
                                      ]),
                                      _: 2
                                      /* DYNAMIC */
                                    },
                                    1024
                                    /* DYNAMIC_SLOTS */
                                  )) : createCommentVNode("v-if", true),
                                  i.items[index2 * 2 + 1] != null ? (openBlock(), createBlock(
                                    _component_el_col,
                                    {
                                      key: 1,
                                      span: 12
                                    },
                                    {
                                      default: withCtx(() => [
                                        createVNode(_component_el_card, {
                                          shadow: "hover",
                                          style: { "border-radius": "10px" },
                                          onClick: ($event) => $options.gotoSite(i.items[index2 * 2 + 1].src)
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(
                                              toDisplayString(i.items[index2 * 2 + 1].isPerfect ? i.items[index2 * 2 + 1].title + "⚡️" : i.items[index2 * 2 + 1].title),
                                              1
                                              /* TEXT */
                                            )
                                          ]),
                                          _: 2
                                          /* DYNAMIC */
                                        }, 1032, ["onClick"])
                                      ]),
                                      _: 2
                                      /* DYNAMIC */
                                    },
                                    1024
                                    /* DYNAMIC_SLOTS */
                                  )) : createCommentVNode("v-if", true)
                                ]),
                                _: 2
                                /* DYNAMIC */
                              },
                              1024
                              /* DYNAMIC_SLOTS */
                            );
                          }),
                          128
                          /* KEYED_FRAGMENT */
                        ))
                      ];
                    }
                  }),
                  _: 2
                  /* DYNAMIC */
                }, _parent3, _scopeId2));
              } else {
                return [
                  createCommentVNode(" 使用珊格操作 "),
                  createVNode(
                    _component_el_scrollbar,
                    { height: "600px" },
                    {
                      default: withCtx(() => [
                        (openBlock(true), createBlock(
                          Fragment,
                          null,
                          renderList(Math.ceil(i.items.length / 2), (j, index2) => {
                            return openBlock(), createBlock(
                              _component_el_row,
                              {
                                gutter: 10,
                                key: index2,
                                style: { "margin-bottom": "10px" }
                              },
                              {
                                default: withCtx(() => [
                                  createCommentVNode(" \n                    0-（0、1）-（i*2,i*2+1）\n                    1-（2、3）-（i*2,i*2+1）\n                    2-（4、5）-（i*2,i*2+1）\n                 "),
                                  i.items[index2 * 2] != null ? (openBlock(), createBlock(
                                    _component_el_col,
                                    {
                                      key: 0,
                                      span: 12
                                    },
                                    {
                                      default: withCtx(() => [
                                        createVNode(_component_el_card, {
                                          shadow: "hover",
                                          style: { "border-radius": "10px" },
                                          onClick: ($event) => $options.gotoSite(i.items[index2 * 2].src)
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(
                                              toDisplayString(i.items[index2 * 2].isPerfect ? i.items[index2 * 2].title + "⚡️" : i.items[index2 * 2].title),
                                              1
                                              /* TEXT */
                                            )
                                          ]),
                                          _: 2
                                          /* DYNAMIC */
                                        }, 1032, ["onClick"])
                                      ]),
                                      _: 2
                                      /* DYNAMIC */
                                    },
                                    1024
                                    /* DYNAMIC_SLOTS */
                                  )) : createCommentVNode("v-if", true),
                                  i.items[index2 * 2 + 1] != null ? (openBlock(), createBlock(
                                    _component_el_col,
                                    {
                                      key: 1,
                                      span: 12
                                    },
                                    {
                                      default: withCtx(() => [
                                        createVNode(_component_el_card, {
                                          shadow: "hover",
                                          style: { "border-radius": "10px" },
                                          onClick: ($event) => $options.gotoSite(i.items[index2 * 2 + 1].src)
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(
                                              toDisplayString(i.items[index2 * 2 + 1].isPerfect ? i.items[index2 * 2 + 1].title + "⚡️" : i.items[index2 * 2 + 1].title),
                                              1
                                              /* TEXT */
                                            )
                                          ]),
                                          _: 2
                                          /* DYNAMIC */
                                        }, 1032, ["onClick"])
                                      ]),
                                      _: 2
                                      /* DYNAMIC */
                                    },
                                    1024
                                    /* DYNAMIC_SLOTS */
                                  )) : createCommentVNode("v-if", true)
                                ]),
                                _: 2
                                /* DYNAMIC */
                              },
                              1024
                              /* DYNAMIC_SLOTS */
                            );
                          }),
                          128
                          /* KEYED_FRAGMENT */
                        ))
                      ]),
                      _: 2
                      /* DYNAMIC */
                    },
                    1024
                    /* DYNAMIC_SLOTS */
                  )
                ];
              }
            }),
            _: 2
            /* DYNAMIC */
          }, _parent2, _scopeId));
        });
        _push2(`<!--]-->`);
      } else {
        return [
          createCommentVNode(" 标签页 "),
          (openBlock(true), createBlock(
            Fragment,
            null,
            renderList($data.quickNav, (i, index) => {
              return openBlock(), createBlock(_component_el_tab_pane, {
                label: i.category,
                key: index
              }, {
                default: withCtx(() => [
                  createCommentVNode(" 使用珊格操作 "),
                  createVNode(
                    _component_el_scrollbar,
                    { height: "600px" },
                    {
                      default: withCtx(() => [
                        (openBlock(true), createBlock(
                          Fragment,
                          null,
                          renderList(Math.ceil(i.items.length / 2), (j, index2) => {
                            return openBlock(), createBlock(
                              _component_el_row,
                              {
                                gutter: 10,
                                key: index2,
                                style: { "margin-bottom": "10px" }
                              },
                              {
                                default: withCtx(() => [
                                  createCommentVNode(" \n                    0-（0、1）-（i*2,i*2+1）\n                    1-（2、3）-（i*2,i*2+1）\n                    2-（4、5）-（i*2,i*2+1）\n                 "),
                                  i.items[index2 * 2] != null ? (openBlock(), createBlock(
                                    _component_el_col,
                                    {
                                      key: 0,
                                      span: 12
                                    },
                                    {
                                      default: withCtx(() => [
                                        createVNode(_component_el_card, {
                                          shadow: "hover",
                                          style: { "border-radius": "10px" },
                                          onClick: ($event) => $options.gotoSite(i.items[index2 * 2].src)
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(
                                              toDisplayString(i.items[index2 * 2].isPerfect ? i.items[index2 * 2].title + "⚡️" : i.items[index2 * 2].title),
                                              1
                                              /* TEXT */
                                            )
                                          ]),
                                          _: 2
                                          /* DYNAMIC */
                                        }, 1032, ["onClick"])
                                      ]),
                                      _: 2
                                      /* DYNAMIC */
                                    },
                                    1024
                                    /* DYNAMIC_SLOTS */
                                  )) : createCommentVNode("v-if", true),
                                  i.items[index2 * 2 + 1] != null ? (openBlock(), createBlock(
                                    _component_el_col,
                                    {
                                      key: 1,
                                      span: 12
                                    },
                                    {
                                      default: withCtx(() => [
                                        createVNode(_component_el_card, {
                                          shadow: "hover",
                                          style: { "border-radius": "10px" },
                                          onClick: ($event) => $options.gotoSite(i.items[index2 * 2 + 1].src)
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(
                                              toDisplayString(i.items[index2 * 2 + 1].isPerfect ? i.items[index2 * 2 + 1].title + "⚡️" : i.items[index2 * 2 + 1].title),
                                              1
                                              /* TEXT */
                                            )
                                          ]),
                                          _: 2
                                          /* DYNAMIC */
                                        }, 1032, ["onClick"])
                                      ]),
                                      _: 2
                                      /* DYNAMIC */
                                    },
                                    1024
                                    /* DYNAMIC_SLOTS */
                                  )) : createCommentVNode("v-if", true)
                                ]),
                                _: 2
                                /* DYNAMIC */
                              },
                              1024
                              /* DYNAMIC_SLOTS */
                            );
                          }),
                          128
                          /* KEYED_FRAGMENT */
                        ))
                      ]),
                      _: 2
                      /* DYNAMIC */
                    },
                    1024
                    /* DYNAMIC_SLOTS */
                  )
                ]),
                _: 2
                /* DYNAMIC */
              }, 1032, ["label"]);
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ];
      }
    }),
    _: 1
    /* STABLE */
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../components/QuickNav.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const QuickNav = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-5e891ad8"], ["__file", "QuickNav.vue"]]);
export {
  QuickNav as default
};
