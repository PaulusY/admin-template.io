import { L as defineComponent, a3 as reactive, l as onMounted, a6 as toRefs, a7 as resolveComponent, a as createElementBlock, _ as createVNode, T as withCtx, o as openBlock, b as createBaseVNode, Z as toDisplayString, X as createCommentVNode, Y as createTextVNode } from "./vue.1660272860115.js";
import { _ as _export_sfc } from "./index.1660272860115.js";
const _sfc_main = defineComponent({
  name: "systemAddDept",
  setup() {
    const state = reactive({
      isShowDialog: false,
      ruleForm: {
        deptLevel: [],
        deptName: "",
        person: "",
        phone: "",
        email: "",
        sort: 0,
        status: true,
        describe: ""
      },
      deptData: []
    });
    const openDialog = () => {
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
    const initTableData = () => {
      state.deptData.push({
        deptName: "vueNextAdmin",
        createTime: new Date().toLocaleString(),
        status: true,
        sort: Math.random(),
        describe: "\u9876\u7EA7\u90E8\u95E8",
        id: Math.random(),
        children: [
          {
            deptName: "IT\u5916\u5305\u670D\u52A1",
            createTime: new Date().toLocaleString(),
            status: true,
            sort: Math.random(),
            describe: "\u603B\u90E8",
            id: Math.random()
          },
          {
            deptName: "\u8D44\u672C\u63A7\u80A1",
            createTime: new Date().toLocaleString(),
            status: true,
            sort: Math.random(),
            describe: "\u5206\u90E8",
            id: Math.random()
          }
        ]
      });
    };
    onMounted(() => {
      initTableData();
    });
    return {
      openDialog,
      closeDialog,
      onCancel,
      onSubmit,
      ...toRefs(state)
    };
  }
});
const _hoisted_1 = { class: "system-add-dept-container" };
const _hoisted_2 = { key: 0 };
const _hoisted_3 = { class: "dialog-footer" };
const _hoisted_4 = /* @__PURE__ */ createTextVNode("\u53D6 \u6D88");
const _hoisted_5 = /* @__PURE__ */ createTextVNode("\u65B0 \u589E");
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_cascader = resolveComponent("el-cascader");
  const _component_el_form_item = resolveComponent("el-form-item");
  const _component_el_col = resolveComponent("el-col");
  const _component_el_input = resolveComponent("el-input");
  const _component_el_input_number = resolveComponent("el-input-number");
  const _component_el_switch = resolveComponent("el-switch");
  const _component_el_row = resolveComponent("el-row");
  const _component_el_form = resolveComponent("el-form");
  const _component_el_button = resolveComponent("el-button");
  const _component_el_dialog = resolveComponent("el-dialog");
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createVNode(_component_el_dialog, {
      title: "\u65B0\u589E\u90E8\u95E8",
      modelValue: _ctx.isShowDialog,
      "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => _ctx.isShowDialog = $event),
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
                  sm: 24,
                  md: 24,
                  lg: 24,
                  xl: 24,
                  class: "mb20"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_el_form_item, { label: "\u4E0A\u7EA7\u90E8\u95E8" }, {
                      default: withCtx(() => [
                        createVNode(_component_el_cascader, {
                          options: _ctx.deptData,
                          props: { checkStrictly: true, value: "deptName", label: "deptName" },
                          placeholder: "\u8BF7\u9009\u62E9\u90E8\u95E8",
                          clearable: "",
                          class: "w100",
                          modelValue: _ctx.ruleForm.deptLevel,
                          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.ruleForm.deptLevel = $event)
                        }, {
                          default: withCtx(({ node, data }) => [
                            createBaseVNode("span", null, toDisplayString(data.deptName), 1),
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
                  sm: 12,
                  md: 12,
                  lg: 12,
                  xl: 12,
                  class: "mb20"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_el_form_item, { label: "\u90E8\u95E8\u540D\u79F0" }, {
                      default: withCtx(() => [
                        createVNode(_component_el_input, {
                          modelValue: _ctx.ruleForm.deptName,
                          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => _ctx.ruleForm.deptName = $event),
                          placeholder: "\u8BF7\u8F93\u5165\u90E8\u95E8\u540D\u79F0",
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
                    createVNode(_component_el_form_item, { label: "\u8D1F\u8D23\u4EBA" }, {
                      default: withCtx(() => [
                        createVNode(_component_el_input, {
                          modelValue: _ctx.ruleForm.person,
                          "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => _ctx.ruleForm.person = $event),
                          placeholder: "\u8BF7\u8F93\u5165\u8D1F\u8D23\u4EBA",
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
                    createVNode(_component_el_form_item, { label: "\u624B\u673A\u53F7" }, {
                      default: withCtx(() => [
                        createVNode(_component_el_input, {
                          modelValue: _ctx.ruleForm.phone,
                          "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => _ctx.ruleForm.phone = $event),
                          placeholder: "\u8BF7\u8F93\u5165\u624B\u673A\u53F7",
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
                    createVNode(_component_el_form_item, { label: "\u90AE\u7BB1" }, {
                      default: withCtx(() => [
                        createVNode(_component_el_input, {
                          modelValue: _ctx.ruleForm.email,
                          "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => _ctx.ruleForm.email = $event),
                          placeholder: "\u8BF7\u8F93\u5165",
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
                          "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => _ctx.ruleForm.sort = $event),
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
                    createVNode(_component_el_form_item, { label: "\u90E8\u95E8\u72B6\u6001" }, {
                      default: withCtx(() => [
                        createVNode(_component_el_switch, {
                          modelValue: _ctx.ruleForm.status,
                          "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => _ctx.ruleForm.status = $event),
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
                    createVNode(_component_el_form_item, { label: "\u90E8\u95E8\u63CF\u8FF0" }, {
                      default: withCtx(() => [
                        createVNode(_component_el_input, {
                          modelValue: _ctx.ruleForm.describe,
                          "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => _ctx.ruleForm.describe = $event),
                          type: "textarea",
                          placeholder: "\u8BF7\u8F93\u5165\u90E8\u95E8\u63CF\u8FF0",
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
var AddDept = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/demo/admin-template/src/views/system/dept/component/addDept.vue"]]);
export { AddDept as default };
