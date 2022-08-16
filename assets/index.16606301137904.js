import { L as defineComponent, a3 as reactive, i as ref, l as onMounted, a6 as toRefs, a7 as resolveComponent, a as createElementBlock, _ as createVNode, T as withCtx, o as openBlock, b as createBaseVNode, F as Fragment, aa as renderList, X as createCommentVNode, Y as createTextVNode, S as createBlock } from "./vue.1660630113790.js";
import { _ as _export_sfc, E as ElMessageBox, d as ElMessage } from "./index.1660630113790.js";
var index_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main = defineComponent({
  name: "systemRole",
  setup() {
    const state = reactive({
      formData: {
        name: "222",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        resource: "",
        desc: ""
      },
      tableData: {
        data: [],
        total: 0,
        loading: false,
        param: {
          pageNum: 1,
          pageSize: 10
        }
      }
    });
    const initTableData = () => {
      const data = [];
      for (let i = 0; i < 4; i++) {
        data.push({
          roleName: i === 0 ? "01\u6709\u6E90\u624B\u672F\u5668\u68B0" : "02\u65E0\u6E90\u624B\u672F\u5668\u68B0",
          roleSign: i === 0 ? "01\u8D85\u58F0\u624B\u672F\u8BBE\u5907\u53CA\u9644\u4EF6" : "02\u666E\u901A\u624B\u672F\u8BBE\u5907\u53CA\u9644\u4EF6",
          describe: `\u7528\u4E8E\u9AA8\u7EC4\u7EC7\uFF08\u5305\u62EC\u7259\u9F7F\uFF09\u5207\u5272`,
          sort: "\u8D85\u58F0\u624B\u672F\u5200\u662F\u4E00\u79CD\u9AD8\u9891\u7535\u5916\u79D1\u8BBE\u5907\uFF0C\u4E3B\u8981\u7528\u4E8E\u505A\u624B\u672F",
          status: true,
          createTime: "\u2162"
        });
      }
      state.tableData.data = data;
      state.tableData.total = state.tableData.data.length;
    };
    ref("value");
    const onOpenEditRole = (row) => {
    };
    const onRowDel = (row) => {
      ElMessageBox.confirm(`\u6B64\u64CD\u4F5C\u5C06\u6C38\u4E45\u5220\u9664\u89D2\u8272\u540D\u79F0\uFF1A\u201C${row.roleName}\u201D\uFF0C\u662F\u5426\u7EE7\u7EED?`, "\u63D0\u793A", {
        confirmButtonText: "\u786E\u8BA4",
        cancelButtonText: "\u53D6\u6D88",
        type: "warning"
      }).then(() => {
        ElMessage.success("\u5220\u9664\u6210\u529F");
      }).catch(() => {
      });
    };
    const onHandleSizeChange = (val) => {
      state.tableData.param.pageSize = val;
    };
    const onHandleCurrentChange = (val) => {
      state.tableData.param.pageNum = val;
    };
    onMounted(() => {
      initTableData();
    });
    return {
      onOpenEditRole,
      onRowDel,
      onHandleSizeChange,
      onHandleCurrentChange,
      ...toRefs(state)
    };
  }
});
const _hoisted_1 = { class: "system-role-container" };
const _hoisted_2 = { class: "system-user-search" };
const _hoisted_3 = /* @__PURE__ */ createTextVNode("\u4FEE\u6539");
const _hoisted_4 = /* @__PURE__ */ createTextVNode("\u5220\u9664");
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_option = resolveComponent("el-option");
  const _component_el_select = resolveComponent("el-select");
  const _component_el_form_item = resolveComponent("el-form-item");
  const _component_el_checkbox = resolveComponent("el-checkbox");
  const _component_el_form = resolveComponent("el-form");
  const _component_el_card = resolveComponent("el-card");
  const _component_el_table_column = resolveComponent("el-table-column");
  const _component_el_button = resolveComponent("el-button");
  const _component_el_table = resolveComponent("el-table");
  const _component_el_pagination = resolveComponent("el-pagination");
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createVNode(_component_el_card, {
      shadow: "hover",
      class: "mb10"
    }, {
      default: withCtx(() => [
        createBaseVNode("div", _hoisted_2, [
          createVNode(_component_el_form, {
            model: _ctx.formData,
            "label-position": "left",
            "label-width": "100px"
          }, {
            default: withCtx(() => [
              createVNode(_component_el_form_item, { label: "\u9009\u62E9\u76EE\u5F55" }, {
                default: withCtx(() => [
                  createVNode(_component_el_select, {
                    modelValue: _ctx.value,
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.value = $event),
                    class: "m-2",
                    placeholder: "Select"
                  }, {
                    default: withCtx(() => [
                      (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.options, (item) => {
                        return openBlock(), createBlock(_component_el_option, {
                          key: item.value,
                          label: item.label,
                          value: item.value
                        }, null, 8, ["label", "value"]);
                      }), 128))
                    ]),
                    _: 1
                  }, 8, ["modelValue"])
                ]),
                _: 1
              }),
              createVNode(_component_el_form_item, { label: "\u7B5B\u9009\u6761\u4EF6\u4E00" }, {
                default: withCtx(() => [
                  createVNode(_component_el_checkbox, {
                    modelValue: _ctx.checked1,
                    "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => _ctx.checked1 = $event),
                    label: "Option 1"
                  }, null, 8, ["modelValue"]),
                  createVNode(_component_el_checkbox, {
                    modelValue: _ctx.checked2,
                    "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => _ctx.checked2 = $event),
                    label: "Option 2"
                  }, null, 8, ["modelValue"]),
                  createVNode(_component_el_checkbox, {
                    modelValue: _ctx.checked2,
                    "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => _ctx.checked2 = $event),
                    label: "Option 3"
                  }, null, 8, ["modelValue"]),
                  createVNode(_component_el_checkbox, {
                    modelValue: _ctx.checked2,
                    "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => _ctx.checked2 = $event),
                    label: "Option 4"
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              createVNode(_component_el_form_item, { label: "\u7B5B\u9009\u6761\u4EF6\u4E8C" }, {
                default: withCtx(() => [
                  createVNode(_component_el_checkbox, {
                    modelValue: _ctx.checked1,
                    "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => _ctx.checked1 = $event),
                    label: "Option 1"
                  }, null, 8, ["modelValue"]),
                  createVNode(_component_el_checkbox, {
                    modelValue: _ctx.checked2,
                    "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => _ctx.checked2 = $event),
                    label: "Option 2"
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["model"])
        ])
      ]),
      _: 1
    }),
    createVNode(_component_el_card, { shadow: "hover" }, {
      default: withCtx(() => [
        createVNode(_component_el_table, {
          data: _ctx.tableData.data,
          style: { "width": "100%" }
        }, {
          default: withCtx(() => [
            createVNode(_component_el_table_column, {
              prop: "roleName",
              label: "\u5B50\u76EE\u5F55\u540D\u79F0",
              "min-width": 100,
              "show-overflow-tooltip": ""
            }),
            createVNode(_component_el_table_column, {
              prop: "roleName",
              label: "\u4E00\u7EA7\u4EA7\u54C1\u7C7B\u522B\u542B\u5E8F\u53F7",
              "min-width": 120,
              "show-overflow-tooltip": ""
            }),
            createVNode(_component_el_table_column, {
              prop: "roleSign",
              label: "\u4E8C\u7EA7\u4EA7\u54C1\u7C7B\u522B",
              "show-overflow-tooltip": ""
            }),
            createVNode(_component_el_table_column, {
              prop: "sort",
              label: "\u4EA7\u54C1\u63CF\u8FF0",
              "show-overflow-tooltip": ""
            }),
            createCommentVNode(' <el-table-column prop="status" label="\u89D2\u8272\u72B6\u6001" show-overflow-tooltip>\r\n					<template #default="scope">\r\n						<el-tag type="success" v-if="scope.row.status">\u542F\u7528</el-tag>\r\n						<el-tag type="info" v-else>\u7981\u7528</el-tag>\r\n					</template>\r\n				</el-table-column> '),
            createVNode(_component_el_table_column, {
              prop: "describe",
              label: "\u9884\u671F\u7528\u9014",
              "show-overflow-tooltip": ""
            }),
            createVNode(_component_el_table_column, {
              prop: "createTime",
              label: "\u7BA1\u7406\u7C7B\u522B",
              "show-overflow-tooltip": ""
            }),
            createVNode(_component_el_table_column, {
              prop: "createTime",
              label: "\u54C1\u540D\u4E3E\u4F8B",
              "show-overflow-tooltip": ""
            }),
            createVNode(_component_el_table_column, {
              label: "\u64CD\u4F5C",
              width: "100"
            }, {
              default: withCtx((scope) => [
                createVNode(_component_el_button, {
                  disabled: scope.row.roleName === "\u8D85\u7EA7\u7BA1\u7406\u5458",
                  size: "small",
                  text: "",
                  type: "primary",
                  onClick: ($event) => _ctx.onOpenEditRole(scope.row)
                }, {
                  default: withCtx(() => [
                    _hoisted_3
                  ]),
                  _: 2
                }, 1032, ["disabled", "onClick"]),
                createVNode(_component_el_button, {
                  disabled: scope.row.roleName === "\u8D85\u7EA7\u7BA1\u7406\u5458",
                  size: "small",
                  text: "",
                  type: "primary",
                  onClick: ($event) => _ctx.onRowDel(scope.row)
                }, {
                  default: withCtx(() => [
                    _hoisted_4
                  ]),
                  _: 2
                }, 1032, ["disabled", "onClick"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["data"]),
        createVNode(_component_el_pagination, {
          onSizeChange: _ctx.onHandleSizeChange,
          onCurrentChange: _ctx.onHandleCurrentChange,
          class: "mt15",
          "pager-count": 5,
          "page-sizes": [10, 20, 30],
          "current-page": _ctx.tableData.param.pageNum,
          "onUpdate:current-page": _cache[7] || (_cache[7] = ($event) => _ctx.tableData.param.pageNum = $event),
          background: "",
          "page-size": _ctx.tableData.param.pageSize,
          "onUpdate:page-size": _cache[8] || (_cache[8] = ($event) => _ctx.tableData.param.pageSize = $event),
          layout: "total, sizes, prev, pager, next, jumper",
          total: _ctx.tableData.total
        }, null, 8, ["onSizeChange", "onCurrentChange", "current-page", "page-size", "total"])
      ]),
      _: 1
    })
  ]);
}
var index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-5fc99eaf"], ["__file", "D:/demo/admin-template/src/views/system/role/index.vue"]]);
export { index as default };
