import { L as defineComponent, a3 as reactive, a6 as toRefs, a7 as resolveComponent, a as createElementBlock, _ as createVNode, T as withCtx, o as openBlock, b as createBaseVNode, Y as createTextVNode, aC as pushScopeId, aD as popScopeId } from "./vue.1660551453016.js";
import { _ as _export_sfc } from "./index.1660551453016.js";
var editRole_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main = defineComponent({
  name: "systemEditRole",
  setup() {
    const state = reactive({
      isShowDialog: false,
      ruleForm: {
        roleName: "",
        roleSign: "",
        sort: 0,
        status: true,
        describe: ""
      },
      menuData: [],
      menuProps: {
        children: "children",
        label: "label"
      }
    });
    const openDialog = (row) => {
      state.ruleForm = row;
      state.isShowDialog = true;
      getMenuData();
    };
    const closeDialog = () => {
      state.isShowDialog = false;
    };
    const onCancel = () => {
      closeDialog();
    };
    const onSubmit = () => {
      closeDialog();
    };
    const getMenuData = () => {
      state.menuData = [
        {
          id: 1,
          label: "\u7CFB\u7EDF\u7BA1\u7406",
          children: [
            {
              id: 11,
              label: "\u83DC\u5355\u7BA1\u7406",
              children: [
                {
                  id: 111,
                  label: "\u83DC\u5355\u65B0\u589E"
                },
                {
                  id: 112,
                  label: "\u83DC\u5355\u4FEE\u6539"
                },
                {
                  id: 113,
                  label: "\u83DC\u5355\u5220\u9664"
                },
                {
                  id: 114,
                  label: "\u83DC\u5355\u67E5\u8BE2"
                }
              ]
            },
            {
              id: 12,
              label: "\u89D2\u8272\u7BA1\u7406",
              children: [
                {
                  id: 121,
                  label: "\u89D2\u8272\u65B0\u589E"
                },
                {
                  id: 122,
                  label: "\u89D2\u8272\u4FEE\u6539"
                },
                {
                  id: 123,
                  label: "\u89D2\u8272\u5220\u9664"
                },
                {
                  id: 124,
                  label: "\u89D2\u8272\u67E5\u8BE2"
                }
              ]
            },
            {
              id: 13,
              label: "\u7528\u6237\u7BA1\u7406",
              children: [
                {
                  id: 131,
                  label: "\u7528\u6237\u65B0\u589E"
                },
                {
                  id: 132,
                  label: "\u7528\u6237\u4FEE\u6539"
                },
                {
                  id: 133,
                  label: "\u7528\u6237\u5220\u9664"
                },
                {
                  id: 134,
                  label: "\u7528\u6237\u67E5\u8BE2"
                }
              ]
            }
          ]
        },
        {
          id: 2,
          label: "\u6743\u9650\u7BA1\u7406",
          children: [
            {
              id: 21,
              label: "\u524D\u7AEF\u63A7\u5236",
              children: [
                {
                  id: 211,
                  label: "\u9875\u9762\u6743\u9650"
                },
                {
                  id: 212,
                  label: "\u9875\u9762\u6743\u9650"
                }
              ]
            },
            {
              id: 22,
              label: "\u540E\u7AEF\u63A7\u5236",
              children: [
                {
                  id: 221,
                  label: "\u9875\u9762\u6743\u9650"
                }
              ]
            }
          ]
        }
      ];
    };
    return {
      openDialog,
      closeDialog,
      onCancel,
      onSubmit,
      ...toRefs(state)
    };
  }
});
const _withScopeId = (n) => (pushScopeId("data-v-50f73836"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "system-edit-role-container" };
const _hoisted_2 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", null, "\u89D2\u8272\u6807\u8BC6", -1));
const _hoisted_3 = { class: "dialog-footer" };
const _hoisted_4 = /* @__PURE__ */ createTextVNode("\u53D6 \u6D88");
const _hoisted_5 = /* @__PURE__ */ createTextVNode("\u4FEE \u6539");
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_input = resolveComponent("el-input");
  const _component_el_form_item = resolveComponent("el-form-item");
  const _component_el_col = resolveComponent("el-col");
  const _component_el_tooltip = resolveComponent("el-tooltip");
  const _component_el_input_number = resolveComponent("el-input-number");
  const _component_el_switch = resolveComponent("el-switch");
  const _component_el_tree = resolveComponent("el-tree");
  const _component_el_row = resolveComponent("el-row");
  const _component_el_form = resolveComponent("el-form");
  const _component_el_button = resolveComponent("el-button");
  const _component_el_dialog = resolveComponent("el-dialog");
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createVNode(_component_el_dialog, {
      title: "\u4FEE\u6539\u89D2\u8272",
      modelValue: _ctx.isShowDialog,
      "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => _ctx.isShowDialog = $event),
      width: "769px"
    }, {
      footer: withCtx(() => [
        createBaseVNode("span", _hoisted_3, [
          createVNode(_component_el_button, {
            onClick: _ctx.onCancel,
            size: "default"
          }, {
            default: withCtx(() => [
              _hoisted_4
            ]),
            _: 1
          }, 8, ["onClick"]),
          createVNode(_component_el_button, {
            type: "primary",
            onClick: _ctx.onSubmit,
            size: "default"
          }, {
            default: withCtx(() => [
              _hoisted_5
            ]),
            _: 1
          }, 8, ["onClick"])
        ])
      ]),
      default: withCtx(() => [
        createVNode(_component_el_form, {
          model: _ctx.ruleForm,
          size: "default",
          "label-width": "90px"
        }, {
          default: withCtx(() => [
            createVNode(_component_el_row, { gutter: 35 }, {
              default: withCtx(() => [
                createVNode(_component_el_col, {
                  xs: 24,
                  sm: 12,
                  md: 12,
                  lg: 12,
                  xl: 12,
                  class: "mb20"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_el_form_item, { label: "\u89D2\u8272\u540D\u79F0" }, {
                      default: withCtx(() => [
                        createVNode(_component_el_input, {
                          modelValue: _ctx.ruleForm.roleName,
                          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.ruleForm.roleName = $event),
                          placeholder: "\u8BF7\u8F93\u5165\u89D2\u8272\u540D\u79F0",
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
                    createVNode(_component_el_form_item, { label: "\u89D2\u8272\u6807\u8BC6" }, {
                      label: withCtx(() => [
                        createVNode(_component_el_tooltip, {
                          effect: "dark",
                          content: "\u7528\u4E8E `router/route.ts` meta.roles",
                          placement: "top-start"
                        }, {
                          default: withCtx(() => [
                            _hoisted_2
                          ]),
                          _: 1
                        })
                      ]),
                      default: withCtx(() => [
                        createVNode(_component_el_input, {
                          modelValue: _ctx.ruleForm.roleSign,
                          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => _ctx.ruleForm.roleSign = $event),
                          placeholder: "\u8BF7\u8F93\u5165\u89D2\u8272\u6807\u8BC6",
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
                    createVNode(_component_el_form_item, { label: "\u6392\u5E8F" }, {
                      default: withCtx(() => [
                        createVNode(_component_el_input_number, {
                          modelValue: _ctx.ruleForm.sort,
                          "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => _ctx.ruleForm.sort = $event),
                          min: 0,
                          max: 999,
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
                createVNode(_component_el_col, {
                  xs: 24,
                  sm: 12,
                  md: 12,
                  lg: 12,
                  xl: 12,
                  class: "mb20"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_el_form_item, { label: "\u89D2\u8272\u72B6\u6001" }, {
                      default: withCtx(() => [
                        createVNode(_component_el_switch, {
                          modelValue: _ctx.ruleForm.status,
                          "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => _ctx.ruleForm.status = $event),
                          "inline-prompt": "",
                          "active-text": "\u542F",
                          "inactive-text": "\u7981"
                        }, null, 8, ["modelValue"])
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
                    createVNode(_component_el_form_item, { label: "\u89D2\u8272\u63CF\u8FF0" }, {
                      default: withCtx(() => [
                        createVNode(_component_el_input, {
                          modelValue: _ctx.ruleForm.describe,
                          "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => _ctx.ruleForm.describe = $event),
                          type: "textarea",
                          placeholder: "\u8BF7\u8F93\u5165\u89D2\u8272\u63CF\u8FF0",
                          maxlength: "150"
                        }, null, 8, ["modelValue"])
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
                    createVNode(_component_el_form_item, { label: "\u83DC\u5355\u6743\u9650" }, {
                      default: withCtx(() => [
                        createVNode(_component_el_tree, {
                          data: _ctx.menuData,
                          props: _ctx.menuProps,
                          "default-checked-keys": [112, 113],
                          "node-key": "id",
                          "show-checkbox": "",
                          class: "menu-data-tree"
                        }, null, 8, ["data", "props"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
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
var EditRole = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-50f73836"], ["__file", "D:/demo/admin-template/src/views/system/role/component/editRole.vue"]]);
export { EditRole as default };
