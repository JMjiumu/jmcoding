import { resolveComponent, mergeProps, withCtx, createVNode, createTextVNode, toDisplayString, createCommentVNode, openBlock, createBlock, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrRenderStyle, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper-cc2b3d55.js";
const NavCard_vue_vue_type_style_index_0_lang = "";
const _sfc_main = {
  name: "NavCard",
  components: {},
  props: {
    arr: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      cardArr: JSON.parse(this.arr),
      type: "success"
    };
  },
  methods: {
    gotoSite(url) {
      window.open(url, "_blank").location;
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_el_row = resolveComponent("el-row");
  const _component_el_col = resolveComponent("el-col");
  const _component_el_card = resolveComponent("el-card");
  const _component_el_tooltip = resolveComponent("el-tooltip");
  const _component_el_button = resolveComponent("el-button");
  _push(ssrRenderComponent(_component_el_row, mergeProps({ gutter: 30 }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<!--[-->`);
        ssrRenderList($data.cardArr, (cardObj, index) => {
          _push2(ssrRenderComponent(_component_el_col, {
            xs: 24,
            sm: 24,
            md: 12,
            lg: 8,
            xl: 8,
            key: index,
            style: { "margin-top": "20px", "height": "100px", "width": "100%", "overflow": "auto" }
          }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`<!-- <el-link class="link-style" :underline="false" target="_blank" :href="cardObj.url" > --><!-- <el-card class="box-card" shadow="always" :body-style="{ padding:'5px' }" > -->`);
                _push3(ssrRenderComponent(_component_el_card, {
                  shadow: "never",
                  "body-style": { padding: "20px" }
                }, {
                  default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      _push4(ssrRenderComponent(_component_el_row, { class: "box-card-header" }, {
                        default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                          if (_push5) {
                            _push5(ssrRenderComponent(_component_el_col, {
                              xs: 12,
                              sm: 12,
                              md: 12,
                              lg: 12,
                              xl: 12,
                              style: { "padding": "0px" }
                            }, {
                              default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                if (_push6) {
                                  _push6(`<img style="${ssrRenderStyle({ "width": "30px", "height": "30px", "text-align": "left" })}"${ssrRenderAttr("src", _ctx.$withBase(cardObj.icon))}${ssrRenderAttr("alt", cardObj.title)}${_scopeId5}>`);
                                } else {
                                  return [
                                    createVNode("img", {
                                      style: { "width": "30px", "height": "30px", "text-align": "left" },
                                      src: _ctx.$withBase(cardObj.icon),
                                      alt: cardObj.title
                                    }, null, 8, ["src", "alt"])
                                  ];
                                }
                              }),
                              _: 2
                              /* DYNAMIC */
                            }, _parent5, _scopeId4));
                            _push5(ssrRenderComponent(_component_el_col, {
                              xs: 12,
                              sm: 12,
                              md: 12,
                              lg: 12,
                              xl: 12,
                              style: { "padding": "0px" }
                            }, {
                              default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                if (_push6) {
                                  _push6(`<div style="${ssrRenderStyle({ "text-align": "right" })}"${_scopeId5}>`);
                                  _push6(ssrRenderComponent(_component_el_tooltip, {
                                    effect: "dark",
                                    content: cardObj.desc,
                                    placement: "bottom"
                                  }, {
                                    default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                      if (_push7) {
                                        _push7(ssrRenderComponent(_component_el_button, {
                                          type: $data.type,
                                          plain: "",
                                          onClick: ($event) => $options.gotoSite(cardObj.url)
                                        }, {
                                          default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                            if (_push8) {
                                              _push8(`${ssrInterpolate(cardObj.title)}`);
                                            } else {
                                              return [
                                                createTextVNode(
                                                  toDisplayString(cardObj.title),
                                                  1
                                                  /* TEXT */
                                                )
                                              ];
                                            }
                                          }),
                                          _: 2
                                          /* DYNAMIC */
                                        }, _parent7, _scopeId6));
                                      } else {
                                        return [
                                          createVNode(_component_el_button, {
                                            type: $data.type,
                                            plain: "",
                                            onClick: ($event) => $options.gotoSite(cardObj.url)
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(
                                                toDisplayString(cardObj.title),
                                                1
                                                /* TEXT */
                                              )
                                            ]),
                                            _: 2
                                            /* DYNAMIC */
                                          }, 1032, ["type", "onClick"])
                                        ];
                                      }
                                    }),
                                    _: 2
                                    /* DYNAMIC */
                                  }, _parent6, _scopeId5));
                                  _push6(`</div>`);
                                } else {
                                  return [
                                    createVNode("div", { style: { "text-align": "right" } }, [
                                      createVNode(_component_el_tooltip, {
                                        effect: "dark",
                                        content: cardObj.desc,
                                        placement: "bottom"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_el_button, {
                                            type: $data.type,
                                            plain: "",
                                            onClick: ($event) => $options.gotoSite(cardObj.url)
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(
                                                toDisplayString(cardObj.title),
                                                1
                                                /* TEXT */
                                              )
                                            ]),
                                            _: 2
                                            /* DYNAMIC */
                                          }, 1032, ["type", "onClick"])
                                        ]),
                                        _: 2
                                        /* DYNAMIC */
                                      }, 1032, ["content"])
                                    ])
                                  ];
                                }
                              }),
                              _: 2
                              /* DYNAMIC */
                            }, _parent5, _scopeId4));
                          } else {
                            return [
                              createVNode(
                                _component_el_col,
                                {
                                  xs: 12,
                                  sm: 12,
                                  md: 12,
                                  lg: 12,
                                  xl: 12,
                                  style: { "padding": "0px" }
                                },
                                {
                                  default: withCtx(() => [
                                    createVNode("img", {
                                      style: { "width": "30px", "height": "30px", "text-align": "left" },
                                      src: _ctx.$withBase(cardObj.icon),
                                      alt: cardObj.title
                                    }, null, 8, ["src", "alt"])
                                  ]),
                                  _: 2
                                  /* DYNAMIC */
                                },
                                1024
                                /* DYNAMIC_SLOTS */
                              ),
                              createVNode(
                                _component_el_col,
                                {
                                  xs: 12,
                                  sm: 12,
                                  md: 12,
                                  lg: 12,
                                  xl: 12,
                                  style: { "padding": "0px" }
                                },
                                {
                                  default: withCtx(() => [
                                    createVNode("div", { style: { "text-align": "right" } }, [
                                      createVNode(_component_el_tooltip, {
                                        effect: "dark",
                                        content: cardObj.desc,
                                        placement: "bottom"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_el_button, {
                                            type: $data.type,
                                            plain: "",
                                            onClick: ($event) => $options.gotoSite(cardObj.url)
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(
                                                toDisplayString(cardObj.title),
                                                1
                                                /* TEXT */
                                              )
                                            ]),
                                            _: 2
                                            /* DYNAMIC */
                                          }, 1032, ["type", "onClick"])
                                        ]),
                                        _: 2
                                        /* DYNAMIC */
                                      }, 1032, ["content"])
                                    ])
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
                      }, _parent4, _scopeId3));
                      _push4(ssrRenderComponent(_component_el_row, { class: "box-card-body" }, {
                        default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                          if (_push5) {
                            _push5(`<div style="${ssrRenderStyle({ "font-size": "10px", "color": "#999999" })}"${_scopeId4}>${ssrInterpolate(cardObj.desc)}</div>`);
                          } else {
                            return [
                              createVNode(
                                "div",
                                { style: { "font-size": "10px", "color": "#999999" } },
                                toDisplayString(cardObj.desc),
                                1
                                /* TEXT */
                              )
                            ];
                          }
                        }),
                        _: 2
                        /* DYNAMIC */
                      }, _parent4, _scopeId3));
                    } else {
                      return [
                        createVNode(
                          _component_el_row,
                          { class: "box-card-header" },
                          {
                            default: withCtx(() => [
                              createVNode(
                                _component_el_col,
                                {
                                  xs: 12,
                                  sm: 12,
                                  md: 12,
                                  lg: 12,
                                  xl: 12,
                                  style: { "padding": "0px" }
                                },
                                {
                                  default: withCtx(() => [
                                    createVNode("img", {
                                      style: { "width": "30px", "height": "30px", "text-align": "left" },
                                      src: _ctx.$withBase(cardObj.icon),
                                      alt: cardObj.title
                                    }, null, 8, ["src", "alt"])
                                  ]),
                                  _: 2
                                  /* DYNAMIC */
                                },
                                1024
                                /* DYNAMIC_SLOTS */
                              ),
                              createVNode(
                                _component_el_col,
                                {
                                  xs: 12,
                                  sm: 12,
                                  md: 12,
                                  lg: 12,
                                  xl: 12,
                                  style: { "padding": "0px" }
                                },
                                {
                                  default: withCtx(() => [
                                    createVNode("div", { style: { "text-align": "right" } }, [
                                      createVNode(_component_el_tooltip, {
                                        effect: "dark",
                                        content: cardObj.desc,
                                        placement: "bottom"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_el_button, {
                                            type: $data.type,
                                            plain: "",
                                            onClick: ($event) => $options.gotoSite(cardObj.url)
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(
                                                toDisplayString(cardObj.title),
                                                1
                                                /* TEXT */
                                              )
                                            ]),
                                            _: 2
                                            /* DYNAMIC */
                                          }, 1032, ["type", "onClick"])
                                        ]),
                                        _: 2
                                        /* DYNAMIC */
                                      }, 1032, ["content"])
                                    ])
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
                          },
                          1024
                          /* DYNAMIC_SLOTS */
                        ),
                        createVNode(
                          _component_el_row,
                          { class: "box-card-body" },
                          {
                            default: withCtx(() => [
                              createVNode(
                                "div",
                                { style: { "font-size": "10px", "color": "#999999" } },
                                toDisplayString(cardObj.desc),
                                1
                                /* TEXT */
                              )
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
                }, _parent3, _scopeId2));
                _push3(`<!-- </el-link> -->`);
              } else {
                return [
                  createCommentVNode(' <el-link class="link-style" :underline="false" target="_blank" :href="cardObj.url" > '),
                  createCommentVNode(` <el-card class="box-card" shadow="always" :body-style="{ padding:'5px' }" > `),
                  createVNode(
                    _component_el_card,
                    {
                      shadow: "never",
                      "body-style": { padding: "20px" }
                    },
                    {
                      default: withCtx(() => [
                        createVNode(
                          _component_el_row,
                          { class: "box-card-header" },
                          {
                            default: withCtx(() => [
                              createVNode(
                                _component_el_col,
                                {
                                  xs: 12,
                                  sm: 12,
                                  md: 12,
                                  lg: 12,
                                  xl: 12,
                                  style: { "padding": "0px" }
                                },
                                {
                                  default: withCtx(() => [
                                    createVNode("img", {
                                      style: { "width": "30px", "height": "30px", "text-align": "left" },
                                      src: _ctx.$withBase(cardObj.icon),
                                      alt: cardObj.title
                                    }, null, 8, ["src", "alt"])
                                  ]),
                                  _: 2
                                  /* DYNAMIC */
                                },
                                1024
                                /* DYNAMIC_SLOTS */
                              ),
                              createVNode(
                                _component_el_col,
                                {
                                  xs: 12,
                                  sm: 12,
                                  md: 12,
                                  lg: 12,
                                  xl: 12,
                                  style: { "padding": "0px" }
                                },
                                {
                                  default: withCtx(() => [
                                    createVNode("div", { style: { "text-align": "right" } }, [
                                      createVNode(_component_el_tooltip, {
                                        effect: "dark",
                                        content: cardObj.desc,
                                        placement: "bottom"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_el_button, {
                                            type: $data.type,
                                            plain: "",
                                            onClick: ($event) => $options.gotoSite(cardObj.url)
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(
                                                toDisplayString(cardObj.title),
                                                1
                                                /* TEXT */
                                              )
                                            ]),
                                            _: 2
                                            /* DYNAMIC */
                                          }, 1032, ["type", "onClick"])
                                        ]),
                                        _: 2
                                        /* DYNAMIC */
                                      }, 1032, ["content"])
                                    ])
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
                          },
                          1024
                          /* DYNAMIC_SLOTS */
                        ),
                        createVNode(
                          _component_el_row,
                          { class: "box-card-body" },
                          {
                            default: withCtx(() => [
                              createVNode(
                                "div",
                                { style: { "font-size": "10px", "color": "#999999" } },
                                toDisplayString(cardObj.desc),
                                1
                                /* TEXT */
                              )
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
                    },
                    1024
                    /* DYNAMIC_SLOTS */
                  ),
                  createCommentVNode(" </el-link> ")
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
          (openBlock(true), createBlock(
            Fragment,
            null,
            renderList($data.cardArr, (cardObj, index) => {
              return openBlock(), createBlock(
                _component_el_col,
                {
                  xs: 24,
                  sm: 24,
                  md: 12,
                  lg: 8,
                  xl: 8,
                  key: index,
                  style: { "margin-top": "20px", "height": "100px", "width": "100%", "overflow": "auto" }
                },
                {
                  default: withCtx(() => [
                    createCommentVNode(' <el-link class="link-style" :underline="false" target="_blank" :href="cardObj.url" > '),
                    createCommentVNode(` <el-card class="box-card" shadow="always" :body-style="{ padding:'5px' }" > `),
                    createVNode(
                      _component_el_card,
                      {
                        shadow: "never",
                        "body-style": { padding: "20px" }
                      },
                      {
                        default: withCtx(() => [
                          createVNode(
                            _component_el_row,
                            { class: "box-card-header" },
                            {
                              default: withCtx(() => [
                                createVNode(
                                  _component_el_col,
                                  {
                                    xs: 12,
                                    sm: 12,
                                    md: 12,
                                    lg: 12,
                                    xl: 12,
                                    style: { "padding": "0px" }
                                  },
                                  {
                                    default: withCtx(() => [
                                      createVNode("img", {
                                        style: { "width": "30px", "height": "30px", "text-align": "left" },
                                        src: _ctx.$withBase(cardObj.icon),
                                        alt: cardObj.title
                                      }, null, 8, ["src", "alt"])
                                    ]),
                                    _: 2
                                    /* DYNAMIC */
                                  },
                                  1024
                                  /* DYNAMIC_SLOTS */
                                ),
                                createVNode(
                                  _component_el_col,
                                  {
                                    xs: 12,
                                    sm: 12,
                                    md: 12,
                                    lg: 12,
                                    xl: 12,
                                    style: { "padding": "0px" }
                                  },
                                  {
                                    default: withCtx(() => [
                                      createVNode("div", { style: { "text-align": "right" } }, [
                                        createVNode(_component_el_tooltip, {
                                          effect: "dark",
                                          content: cardObj.desc,
                                          placement: "bottom"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_el_button, {
                                              type: $data.type,
                                              plain: "",
                                              onClick: ($event) => $options.gotoSite(cardObj.url)
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(
                                                  toDisplayString(cardObj.title),
                                                  1
                                                  /* TEXT */
                                                )
                                              ]),
                                              _: 2
                                              /* DYNAMIC */
                                            }, 1032, ["type", "onClick"])
                                          ]),
                                          _: 2
                                          /* DYNAMIC */
                                        }, 1032, ["content"])
                                      ])
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
                            },
                            1024
                            /* DYNAMIC_SLOTS */
                          ),
                          createVNode(
                            _component_el_row,
                            { class: "box-card-body" },
                            {
                              default: withCtx(() => [
                                createVNode(
                                  "div",
                                  { style: { "font-size": "10px", "color": "#999999" } },
                                  toDisplayString(cardObj.desc),
                                  1
                                  /* TEXT */
                                )
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
                      },
                      1024
                      /* DYNAMIC_SLOTS */
                    ),
                    createCommentVNode(" </el-link> ")
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
    _: 1
    /* STABLE */
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../components/NavCard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const NavCard = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "NavCard.vue"]]);
export {
  NavCard as default
};
