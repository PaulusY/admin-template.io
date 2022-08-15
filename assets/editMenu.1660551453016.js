import { L as defineComponent, s as storeToRefs, a3 as reactive, l as onMounted, a6 as toRefs, a7 as resolveComponent, a as createElementBlock, _ as createVNode, T as withCtx, o as openBlock, b as createBaseVNode, Z as toDisplayString, X as createCommentVNode, F as Fragment, S as createBlock, Y as createTextVNode } from "./vue.1660551453016.js";
import { _ as _export_sfc, e as useRoutesList } from "./index.1660551453016.js";
import { I as IconSelector } from "./index.16605514530166.js";
const _sfc_main = defineComponent({
  name: "systemEditMenu",
  components: { IconSelector },
  setup() {
    const stores = useRoutesList();
    const { routesList } = storeToRefs(stores);
    const state = reactive({
      isShowDialog: false,
      ruleForm: {
        menuSuperior: [],
        menuType: "menu",
        name: "",
        component: "",
        isLink: false,
        menuSort: 0,
        path: "",
        redirect: "",
        meta: {
          title: "",
          icon: "",
          isHide: false,
          isKeepAlive: true,
          isAffix: false,
          isLink: "",
          isIframe: false,
          roles: ""
        },
        btnPower: ""
      },
      menuData: []
    });
    const getMenuData = (routes) => {
      const arr = [];
      routes.map((val) => {
        val["title"] = val.meta.title;
        val["id"] = Math.random();
        arr.push({ ...val });
        if (val.children)
          getMenuData(val.children);
      });
      return arr;
    };
    const openDialog = (row) => {
      var _a;
      row.menuType = "menu";
      row.menuSort = Math.random();
      row.component = (_a = `${row.component} `.match(/\'(.+)\'/g)) == null ? void 0 : _a.join("").replace(/\'/g, "");
      state.ruleForm = row;
      state.isShowDialog = true;
    };
    const closeDialog = () => {
      state.isShowDialog = false;
    };
    const onSelectIframeChange = () => {
      if (state.ruleForm.meta.isIframe)
        state.ruleForm.isLink = true;
      else
        state.ruleForm.isLink = false;
    };
    const onCancel = () => {
      closeDialog();
    };
    const onSubmit = () => {
      closeDialog();
    };
    onMounted(() => {
      state.menuData = getMenuData(routesList.value);
    });
    return {
      openDialog,
      closeDialog,
      onSelectIframeChange,
      onCancel,
      onSubmit,
      ...toRefs(state)
    };
  }
});
const _hoisted_1 = { class: "system-edit-menu-container" };
const _hoisted_2 = { key: 0 };
const _hoisted_3 = /* @__PURE__ */ createTextVNode("\u83DC\u5355");
const _hoisted_4 = /* @__PURE__ */ createTextVNode("\u6309\u94AE");
const _hoisted_5 = /* @__PURE__ */ createTextVNode("\u9690\u85CF");
const _hoisted_6 = /* @__PURE__ */ createTextVNode("\u4E0D\u9690\u85CF");
const _hoisted_7 = /* @__PURE__ */ createTextVNode("\u7F13\u5B58");
const _hoisted_8 = /* @__PURE__ */ createTextVNode("\u4E0D\u7F13\u5B58");
const _hoisted_9 = /* @__PURE__ */ createTextVNode("\u56FA\u5B9A");
const _hoisted_10 = /* @__PURE__ */ createTextVNode("\u4E0D\u56FA\u5B9A");
const _hoisted_11 = /* @__PURE__ */ createTextVNode("\u662F");
const _hoisted_12 = /* @__PURE__ */ createTextVNode("\u5426");
const _hoisted_13 = /* @__PURE__ */ createTextVNode("\u662F");
const _hoisted_14 = /* @__PURE__ */ createTextVNode("\u5426");
const _hoisted_15 = { class: "dialog-footer" };
const _hoisted_16 = /* @__PURE__ */ createTextVNode("\u53D6 \u6D88");
const _hoisted_17 = /* @__PURE__ */ createTextVNode("\u4FEE \u6539");
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_cascader = resolveComponent("el-cascader");
  const _component_el_form_item = resolveComponent("el-form-item");
  const _component_el_col = resolveComponent("el-col");
  const _component_el_radio = resolveComponent("el-radio");
  const _component_el_radio_group = resolveComponent("el-radio-group");
  const _component_el_input = resolveComponent("el-input");
  const _component_IconSelector = resolveComponent("IconSelector");
  const _component_el_option = resolveComponent("el-option");
  const _component_el_select = resolveComponent("el-select");
  const _component_el_input_number = resolveComponent("el-input-number");
  const _component_el_row = resolveComponent("el-row");
  const _component_el_form = resolveComponent("el-form");
  const _component_el_button = resolveComponent("el-button");
  const _component_el_dialog = resolveComponent("el-dialog");
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createVNode(_component_el_dialog, {
      title: "\u4FEE\u6539\u83DC\u5355",
      modelValue: _ctx.isShowDialog,
      "onUpdate:modelValue": _cache[17] || (_cache[17] = ($event) => _ctx.isShowDialog = $event),
      width: "769px"
    }, {
      footer: withCtx(() => [
        createBaseVNode("span", _hoisted_15, [
          createVNode(_component_el_button, {
            onClick: _ctx.onCancel,
            size: "default"
          }, {
            default: withCtx(() => [
              _hoisted_16
            ]),
            _: 1
          }, 8, ["onClick"]),
          createVNode(_component_el_button, {
            type: "primary",
            onClick: _ctx.onSubmit,
            size: "default"
          }, {
            default: withCtx(() => [
              _hoisted_17
            ]),
            _: 1
          }, 8, ["onClick"])
        ])
      ]),
      default: withCtx(() => [
        createVNode(_component_el_form, {
          model: _ctx.ruleForm,
          size: "default",
          "label-width": "80px"
        }, {
          default: withCtx(() => [
            createVNode(_component_el_row, { gutter: 35 }, {
              default: withCtx(() => [
                createVNode(_component_el_col, {
                  xs: 24,
                  sm: 24,
                  md: 24,
                  lg: 24,
                  xl: 24,
                  class: "mb20"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_el_form_item, { label: "\u4E0A\u7EA7\u83DC\u5355" }, {
                      default: withCtx(() => [
                        createVNode(_component_el_cascader, {
                          options: _ctx.menuData,
                          props: { checkStrictly: true, value: "path", label: "title" },
                          placeholder: "\u8BF7\u9009\u62E9\u4E0A\u7EA7\u83DC\u5355",
                          clearable: "",
                          class: "w100",
                          modelValue: _ctx.ruleForm.menuSuperior,
                          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.ruleForm.menuSuperior = $event)
                        }, {
                          default: withCtx(({ node, data }) => [
                            createBaseVNode("span", null, toDisplayString(data.title), 1),
                            !node.isLeaf ? (openBlock(), createElementBlock("span", _hoisted_2, " (" + toDisplayString(data.children.length) + ") ", 1)) : createCommentVNode("v-if", true)
                          ]),
                          _: 1
                        }, 8, ["options", "modelValue"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_el_col, {
                  xs: 24,
                  sm: 24,
                  md: 24,
                  lg: 24,
                  xl: 24,
                  class: "mb20"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_el_form_item, { label: "\u83DC\u5355\u7C7B\u578B" }, {
                      default: withCtx(() => [
                        createVNode(_component_el_radio_group, {
                          modelValue: _ctx.ruleForm.menuType,
                          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => _ctx.ruleForm.menuType = $event)
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_el_radio, { label: "menu" }, {
                              default: withCtx(() => [
                                _hoisted_3
                              ]),
                              _: 1
                            }),
                            createVNode(_component_el_radio, { label: "btn" }, {
                              default: withCtx(() => [
                                _hoisted_4
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }, 8, ["modelValue"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_el_col, {
                  xs: 24,
                  sm: 12,
                  md: 12,
                  lg: 12,
                  xl: 12,
                  class: "mb20"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_el_form_item, { label: "\u83DC\u5355\u540D\u79F0" }, {
                      default: withCtx(() => [
                        createVNode(_component_el_input, {
                          modelValue: _ctx.ruleForm.meta.title,
                          "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => _ctx.ruleForm.meta.title = $event),
                          placeholder: "\u683C\u5F0F\uFF1Amessage.router.xxx",
                          clearable: ""
                        }, null, 8, ["modelValue"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                _ctx.ruleForm.menuType === "menu" ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                  createVNode(_component_el_col, {
                    xs: 24,
                    sm: 12,
                    md: 12,
                    lg: 12,
                    xl: 12,
                    class: "mb20"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_el_form_item, { label: "\u8DEF\u7531\u540D\u79F0" }, {
                        default: withCtx(() => [
                          createVNode(_component_el_input, {
                            modelValue: _ctx.ruleForm.name,
                            "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => _ctx.ruleForm.name = $event),
                            placeholder: "\u8DEF\u7531\u4E2D\u7684 name \u503C",
                            clearable: ""
                          }, null, 8, ["modelValue"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_el_col, {
                    xs: 24,
                    sm: 12,
                    md: 12,
                    lg: 12,
                    xl: 12,
                    class: "mb20"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_el_form_item, { label: "\u8DEF\u7531\u8DEF\u5F84" }, {
                        default: withCtx(() => [
                          createVNode(_component_el_input, {
                            modelValue: _ctx.ruleForm.path,
                            "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => _ctx.ruleForm.path = $event),
                            placeholder: "\u8DEF\u7531\u4E2D\u7684 path \u503C",
                            clearable: ""
                          }, null, 8, ["modelValue"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_el_col, {
                    xs: 24,
                    sm: 12,
                    md: 12,
                    lg: 12,
                    xl: 12,
                    class: "mb20"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_el_form_item, { label: "\u91CD\u5B9A\u5411" }, {
                        default: withCtx(() => [
                          createVNode(_component_el_input, {
                            modelValue: _ctx.ruleForm.redirect,
                            "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => _ctx.ruleForm.redirect = $event),
                            placeholder: "\u8BF7\u8F93\u5165\u8DEF\u7531\u91CD\u5B9A\u5411",
                            clearable: ""
                          }, null, 8, ["modelValue"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_el_col, {
                    xs: 24,
                    sm: 12,
                    md: 12,
                    lg: 12,
                    xl: 12,
                    class: "mb20"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_el_form_item, { label: "\u83DC\u5355\u56FE\u6807" }, {
                        default: withCtx(() => [
                          createVNode(_component_IconSelector, {
                            placeholder: "\u8BF7\u8F93\u5165\u83DC\u5355\u56FE\u6807",
                            modelValue: _ctx.ruleForm.meta.icon,
                            "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => _ctx.ruleForm.meta.icon = $event),
                            type: "all"
                          }, null, 8, ["modelValue"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_el_col, {
                    xs: 24,
                    sm: 12,
                    md: 12,
                    lg: 12,
                    xl: 12,
                    class: "mb20"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_el_form_item, { label: "\u7EC4\u4EF6\u8DEF\u5F84" }, {
                        default: withCtx(() => [
                          createVNode(_component_el_input, {
                            modelValue: _ctx.ruleForm.component,
                            "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => _ctx.ruleForm.component = $event),
                            placeholder: "\u7EC4\u4EF6\u8DEF\u5F84",
                            clearable: ""
                          }, null, 8, ["modelValue"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_el_col, {
                    xs: 24,
                    sm: 12,
                    md: 12,
                    lg: 12,
                    xl: 12,
                    class: "mb20"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_el_form_item, { label: "\u94FE\u63A5\u5730\u5740" }, {
                        default: withCtx(() => [
                          createVNode(_component_el_input, {
                            modelValue: _ctx.ruleForm.meta.isLink,
                            "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => _ctx.ruleForm.meta.isLink = $event),
                            placeholder: "\u5916\u94FE/\u5185\u5D4C\u65F6\u94FE\u63A5\u5730\u5740\uFF08http:xxx.com\uFF09",
                            clearable: "",
                            disabled: !_ctx.ruleForm.isLink
                          }, null, 8, ["modelValue", "disabled"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_el_col, {
                    xs: 24,
                    sm: 12,
                    md: 12,
                    lg: 12,
                    xl: 12,
                    class: "mb20"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_el_form_item, { label: "\u6743\u9650\u6807\u8BC6" }, {
                        default: withCtx(() => [
                          createVNode(_component_el_select, {
                            modelValue: _ctx.ruleForm.meta.roles,
                            "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => _ctx.ruleForm.meta.roles = $event),
                            multiple: "",
                            placeholder: "\u53D6\u89D2\u8272\u7BA1\u7406",
                            clearable: "",
                            class: "w100"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_el_option, {
                                label: "admin",
                                value: "admin"
                              }),
                              createVNode(_component_el_option, {
                                label: "common",
                                value: "common"
                              })
                            ]),
                            _: 1
                          }, 8, ["modelValue"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ], 64)) : createCommentVNode("v-if", true),
                _ctx.ruleForm.menuType === "btn" ? (openBlock(), createBlock(_component_el_col, {
                  key: 1,
                  xs: 24,
                  sm: 12,
                  md: 12,
                  lg: 12,
                  xl: 12,
                  class: "mb20"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_el_form_item, { label: "\u6743\u9650\u6807\u8BC6" }, {
                      default: withCtx(() => [
                        createVNode(_component_el_input, {
                          modelValue: _ctx.ruleForm.btnPower,
                          "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => _ctx.ruleForm.btnPower = $event),
                          placeholder: "\u8BF7\u8F93\u5165\u6743\u9650\u6807\u8BC6",
                          clearable: ""
                        }, null, 8, ["modelValue"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })) : createCommentVNode("v-if", true),
                createVNode(_component_el_col, {
                  xs: 24,
                  sm: 12,
                  md: 12,
                  lg: 12,
                  xl: 12,
                  class: "mb20"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_el_form_item, { label: "\u83DC\u5355\u6392\u5E8F" }, {
                      default: withCtx(() => [
                        createVNode(_component_el_input_number, {
                          modelValue: _ctx.ruleForm.menuSort,
                          "onUpdate:modelValue": _cache[11] || (_cache[11] = ($event) => _ctx.ruleForm.menuSort = $event),
                          "controls-position": "right",
                          placeholder: "\u8BF7\u8F93\u5165\u6392\u5E8F",
                          class: "w100"
                        }, null, 8, ["modelValue"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                _ctx.ruleForm.menuType === "menu" ? (openBlock(), createElementBlock(Fragment, { key: 2 }, [
                  createVNode(_component_el_col, {
                    xs: 24,
                    sm: 12,
                    md: 12,
                    lg: 12,
                    xl: 12,
                    class: "mb20"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_el_form_item, { label: "\u662F\u5426\u9690\u85CF" }, {
                        default: withCtx(() => [
                          createVNode(_component_el_radio_group, {
                            modelValue: _ctx.ruleForm.meta.isHide,
                            "onUpdate:modelValue": _cache[12] || (_cache[12] = ($event) => _ctx.ruleForm.meta.isHide = $event)
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_el_radio, { label: true }, {
                                default: withCtx(() => [
                                  _hoisted_5
                                ]),
                                _: 1
                              }),
                              createVNode(_component_el_radio, { label: false }, {
                                default: withCtx(() => [
                                  _hoisted_6
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 8, ["modelValue"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_el_col, {
                    xs: 24,
                    sm: 12,
                    md: 12,
                    lg: 12,
                    xl: 12,
                    class: "mb20"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_el_form_item, { label: "\u9875\u9762\u7F13\u5B58" }, {
                        default: withCtx(() => [
                          createVNode(_component_el_radio_group, {
                            modelValue: _ctx.ruleForm.meta.isKeepAlive,
                            "onUpdate:modelValue": _cache[13] || (_cache[13] = ($event) => _ctx.ruleForm.meta.isKeepAlive = $event)
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_el_radio, { label: true }, {
                                default: withCtx(() => [
                                  _hoisted_7
                                ]),
                                _: 1
                              }),
                              createVNode(_component_el_radio, { label: false }, {
                                default: withCtx(() => [
                                  _hoisted_8
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 8, ["modelValue"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_el_col, {
                    xs: 24,
                    sm: 12,
                    md: 12,
                    lg: 12,
                    xl: 12,
                    class: "mb20"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_el_form_item, { label: "\u662F\u5426\u56FA\u5B9A" }, {
                        default: withCtx(() => [
                          createVNode(_component_el_radio_group, {
                            modelValue: _ctx.ruleForm.meta.isAffix,
                            "onUpdate:modelValue": _cache[14] || (_cache[14] = ($event) => _ctx.ruleForm.meta.isAffix = $event)
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_el_radio, { label: true }, {
                                default: withCtx(() => [
                                  _hoisted_9
                                ]),
                                _: 1
                              }),
                              createVNode(_component_el_radio, { label: false }, {
                                default: withCtx(() => [
                                  _hoisted_10
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 8, ["modelValue"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_el_col, {
                    xs: 24,
                    sm: 12,
                    md: 12,
                    lg: 12,
                    xl: 12,
                    class: "mb20"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_el_form_item, { label: "\u662F\u5426\u5916\u94FE" }, {
                        default: withCtx(() => [
                          createVNode(_component_el_radio_group, {
                            modelValue: _ctx.ruleForm.isLink,
                            "onUpdate:modelValue": _cache[15] || (_cache[15] = ($event) => _ctx.ruleForm.isLink = $event),
                            disabled: _ctx.ruleForm.meta.isIframe
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_el_radio, { label: true }, {
                                default: withCtx(() => [
                                  _hoisted_11
                                ]),
                                _: 1
                              }),
                              createVNode(_component_el_radio, { label: false }, {
                                default: withCtx(() => [
                                  _hoisted_12
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 8, ["modelValue", "disabled"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_el_col, {
                    xs: 24,
                    sm: 12,
                    md: 12,
                    lg: 12,
                    xl: 12,
                    class: "mb20"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_el_form_item, { label: "\u662F\u5426\u5185\u5D4C" }, {
                        default: withCtx(() => [
                          createVNode(_component_el_radio_group, {
                            modelValue: _ctx.ruleForm.meta.isIframe,
                            "onUpdate:modelValue": _cache[16] || (_cache[16] = ($event) => _ctx.ruleForm.meta.isIframe = $event),
                            onChange: _ctx.onSelectIframeChange
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_el_radio, { label: true }, {
                                default: withCtx(() => [
                                  _hoisted_13
                                ]),
                                _: 1
                              }),
                              createVNode(_component_el_radio, { label: false }, {
                                default: withCtx(() => [
                                  _hoisted_14
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onChange"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ], 64)) : createCommentVNode("v-if", true)
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["model"])
      ]),
      _: 1
    }, 8, ["modelValue"])
  ]);
}
var EditMenu = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/demo/admin-template/src/views/system/menu/component/editMenu.vue"]]);
export { EditMenu as default };
