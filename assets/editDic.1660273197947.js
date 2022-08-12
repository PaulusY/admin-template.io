import { L as defineComponent, a3 as reactive, a6 as toRefs, a7 as resolveComponent, a as createElementBlock, _ as createVNode, T as withCtx, o as openBlock, b as createBaseVNode, F as Fragment, aa as renderList, Y as createTextVNode, S as createBlock } from "./vue.1660273197947.js";
import { _ as _export_sfc } from "./index.1660273197947.js";
const _sfc_main = defineComponent({
  name: "systemEditDic",
  setup() {
    const state = reactive({
      isShowDialog: false,
      ruleForm: {
        dicName: "",
        fieldName: "",
        status: true,
        list: [
          {
            id: Math.random(),
            label: "",
            value: ""
          }
        ],
        describe: "",
        fieldNameList: []
      }
    });
    const openDialog = (row) => {
      if (row.fieldName === "SYS_UERINFO") {
        row.list = [
          { id: Math.random(), label: "sex", value: "1" },
          { id: Math.random(), label: "sex", value: "0" }
        ];
      } else {
        row.list = [
          { id: Math.random(), label: "role", value: "admin" },
          { id: Math.random(), label: "role", value: "common" },
          { id: Math.random(), label: "roleName", value: "\u8D85\u7EA7\u7BA1\u7406\u5458" },
          { id: Math.random(), label: "roleName", value: "\u666E\u901A\u7528\u6237" }
        ];
      }
      state.ruleForm = row;
      state.isShowDialog = true;
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
    const onAddRow = () => {
      state.ruleForm.list.push({
        id: Math.random(),
        label: "",
        value: ""
      });
    };
    const onDelRow = (k) => {
      state.ruleForm.list.splice(k, 1);
    };
    return {
      openDialog,
      closeDialog,
      onCancel,
      onSubmit,
      onAddRow,
      onDelRow,
      ...toRefs(state)
    };
  }
});
const _hoisted_1 = { class: "system-edit-dic-container" };
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("span", { class: "ml10" }, "\u5B57\u6BB5", -1);
const _hoisted_3 = { class: "dialog-footer" };
const _hoisted_4 = /* @__PURE__ */ createTextVNode("\u53D6 \u6D88");
const _hoisted_5 = /* @__PURE__ */ createTextVNode("\u4FEE \u6539");
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_alert = resolveComponent("el-alert");
  const _component_el_input = resolveComponent("el-input");
  const _component_el_form_item = resolveComponent("el-form-item");
  const _component_el_col = resolveComponent("el-col");
  const _component_el_switch = resolveComponent("el-switch");
  const _component_ele_Plus = resolveComponent("ele-Plus");
  const _component_el_icon = resolveComponent("el-icon");
  const _component_el_button = resolveComponent("el-button");
  const _component_ele_Delete = resolveComponent("ele-Delete");
  const _component_el_row = resolveComponent("el-row");
  const _component_el_form = resolveComponent("el-form");
  const _component_el_dialog = resolveComponent("el-dialog");
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createVNode(_component_el_dialog, {
      title: "\u4FEE\u6539\u5B57\u5178",
      modelValue: _ctx.isShowDialog,
      "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => _ctx.isShowDialog = $event),
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
        createVNode(_component_el_alert, {
          title: "\u534A\u6210\u54C1\uFF0C\u4EA4\u4E92\u8FC7\u4E8E\u590D\u6742\uFF0C\u8BF7\u81EA\u884C\u6269\u5C55\uFF01",
          type: "warning",
          closable: false,
          class: "mb20"
        }),
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
                    createVNode(_component_el_form_item, { label: "\u5B57\u5178\u540D\u79F0" }, {
                      default: withCtx(() => [
                        createVNode(_component_el_input, {
                          modelValue: _ctx.ruleForm.dicName,
                          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.ruleForm.dicName = $event),
                          placeholder: "\u8BF7\u8F93\u5165\u5B57\u5178\u540D\u79F0",
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
                    createVNode(_component_el_form_item, { label: "\u5B57\u6BB5\u540D" }, {
                      default: withCtx(() => [
                        createVNode(_component_el_input, {
                          modelValue: _ctx.ruleForm.fieldName,
                          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => _ctx.ruleForm.fieldName = $event),
                          placeholder: "\u8BF7\u8F93\u5165\u5B57\u6BB5\u540D\uFF0C\u62FC\u63A5 ruleForm.list",
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
                  sm: 24,
                  md: 24,
                  lg: 24,
                  xl: 24,
                  class: "mb20"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_el_form_item, { label: "\u5B57\u5178\u72B6\u6001" }, {
                      default: withCtx(() => [
                        createVNode(_component_el_switch, {
                          modelValue: _ctx.ruleForm.status,
                          "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => _ctx.ruleForm.status = $event),
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
                    (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.ruleForm.list, (v, k) => {
                      return openBlock(), createBlock(_component_el_row, {
                        gutter: 35,
                        key: k
                      }, {
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
                              createVNode(_component_el_form_item, {
                                prop: `list[${k}].label`
                              }, {
                                label: withCtx(() => [
                                  k === 0 ? (openBlock(), createBlock(_component_el_button, {
                                    key: 0,
                                    type: "primary",
                                    circle: "",
                                    size: "small",
                                    onClick: _ctx.onAddRow
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_el_icon, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_ele_Plus)
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }, 8, ["onClick"])) : (openBlock(), createBlock(_component_el_button, {
                                    key: 1,
                                    type: "danger",
                                    circle: "",
                                    size: "small",
                                    onClick: ($event) => _ctx.onDelRow(k)
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_el_icon, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_ele_Delete)
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 2
                                  }, 1032, ["onClick"])),
                                  _hoisted_2
                                ]),
                                default: withCtx(() => [
                                  createVNode(_component_el_input, {
                                    modelValue: v.label,
                                    "onUpdate:modelValue": ($event) => v.label = $event,
                                    style: { "width": "100%" },
                                    placeholder: "\u8BF7\u8F93\u5165\u5B57\u6BB5\u540D"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 2
                              }, 1032, ["prop"])
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(_component_el_col, {
                            xs: 24,
                            sm: 12,
                            md: 12,
                            lg: 12,
                            xl: 12,
                            class: "mb20"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_el_form_item, {
                                label: "\u5C5E\u6027",
                                prop: `list[${k}].value`
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_el_input, {
                                    modelValue: v.value,
                                    "onUpdate:modelValue": ($event) => v.value = $event,
                                    style: { "width": "100%" },
                                    placeholder: "\u8BF7\u8F93\u5165\u5C5E\u6027\u503C"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 2
                              }, 1032, ["prop"])
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1024);
                    }), 128))
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
                    createVNode(_component_el_form_item, { label: "\u5B57\u5178\u63CF\u8FF0" }, {
                      default: withCtx(() => [
                        createVNode(_component_el_input, {
                          modelValue: _ctx.ruleForm.describe,
                          "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => _ctx.ruleForm.describe = $event),
                          type: "textarea",
                          placeholder: "\u8BF7\u8F93\u5165\u5B57\u5178\u63CF\u8FF0",
                          maxlength: "150"
                        }, null, 8, ["modelValue"])
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
var EditDic = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/demo/admin-template/src/views/system/dic/component/editDic.vue"]]);
export { EditDic as default };
