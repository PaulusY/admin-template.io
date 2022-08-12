import { L as defineComponent, i as ref, a3 as reactive, l as onMounted, a6 as toRefs, a7 as resolveComponent, a as createElementBlock, _ as createVNode, T as withCtx, o as openBlock, b as createBaseVNode, Y as createTextVNode, Z as toDisplayString, S as createBlock } from "./vue.1660272860115.js";
import AddDept from "./addDept.1660272860115.js";
import EditDept from "./editDept.1660272860115.js";
import { _ as _export_sfc, E as ElMessageBox, e as ElMessage } from "./index.1660272860115.js";
const _sfc_main = defineComponent({
  name: "systemDept",
  components: { AddDept, EditDept },
  setup() {
    const addDeptRef = ref();
    const editDeptRef = ref();
    const state = reactive({
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
      state.tableData.data.push({
        deptName: "\u6570\u667A\u535A",
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
      state.tableData.total = state.tableData.data.length;
    };
    const onOpenAddDept = () => {
      addDeptRef.value.openDialog();
    };
    const onOpenEditDept = (row) => {
      editDeptRef.value.openDialog(row);
    };
    const onTabelRowDel = (row) => {
      ElMessageBox.confirm(`\u6B64\u64CD\u4F5C\u5C06\u6C38\u4E45\u5220\u9664\u90E8\u95E8\uFF1A${row.deptName}, \u662F\u5426\u7EE7\u7EED?`, "\u63D0\u793A", {
        confirmButtonText: "\u5220\u9664",
        cancelButtonText: "\u53D6\u6D88",
        type: "warning"
      }).then(() => {
        ElMessage.success("\u5220\u9664\u6210\u529F");
      }).catch(() => {
      });
    };
    onMounted(() => {
      initTableData();
    });
    return {
      addDeptRef,
      editDeptRef,
      onOpenAddDept,
      onOpenEditDept,
      onTabelRowDel,
      ...toRefs(state)
    };
  }
});
const _hoisted_1 = { class: "system-dept-container" };
const _hoisted_2 = { class: "system-dept-search mb15" };
const _hoisted_3 = /* @__PURE__ */ createTextVNode(" \u67E5\u8BE2 ");
const _hoisted_4 = /* @__PURE__ */ createTextVNode(" \u65B0\u589E\u90E8\u95E8 ");
const _hoisted_5 = /* @__PURE__ */ createTextVNode("\u542F\u7528");
const _hoisted_6 = /* @__PURE__ */ createTextVNode("\u7981\u7528");
const _hoisted_7 = /* @__PURE__ */ createTextVNode("\u65B0\u589E");
const _hoisted_8 = /* @__PURE__ */ createTextVNode("\u4FEE\u6539");
const _hoisted_9 = /* @__PURE__ */ createTextVNode("\u5220\u9664");
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_input = resolveComponent("el-input");
  const _component_ele_Search = resolveComponent("ele-Search");
  const _component_el_icon = resolveComponent("el-icon");
  const _component_el_button = resolveComponent("el-button");
  const _component_ele_FolderAdd = resolveComponent("ele-FolderAdd");
  const _component_el_table_column = resolveComponent("el-table-column");
  const _component_el_tag = resolveComponent("el-tag");
  const _component_el_table = resolveComponent("el-table");
  const _component_el_card = resolveComponent("el-card");
  const _component_AddDept = resolveComponent("AddDept");
  const _component_EditDept = resolveComponent("EditDept");
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createVNode(_component_el_card, { shadow: "hover" }, {
      default: withCtx(() => [
        createBaseVNode("div", _hoisted_2, [
          createVNode(_component_el_input, {
            size: "default",
            placeholder: "\u8BF7\u8F93\u5165\u90E8\u95E8\u540D\u79F0",
            style: { "max-width": "180px" }
          }),
          createVNode(_component_el_button, {
            size: "default",
            type: "primary",
            class: "ml10"
          }, {
            default: withCtx(() => [
              createVNode(_component_el_icon, null, {
                default: withCtx(() => [
                  createVNode(_component_ele_Search)
                ]),
                _: 1
              }),
              _hoisted_3
            ]),
            _: 1
          }),
          createVNode(_component_el_button, {
            size: "default",
            type: "success",
            class: "ml10",
            onClick: _ctx.onOpenAddDept
          }, {
            default: withCtx(() => [
              createVNode(_component_el_icon, null, {
                default: withCtx(() => [
                  createVNode(_component_ele_FolderAdd)
                ]),
                _: 1
              }),
              _hoisted_4
            ]),
            _: 1
          }, 8, ["onClick"])
        ]),
        createVNode(_component_el_table, {
          data: _ctx.tableData.data,
          style: { "width": "100%" },
          "row-key": "id",
          "default-expand-all": "",
          "tree-props": { children: "children", hasChildren: "hasChildren" }
        }, {
          default: withCtx(() => [
            createVNode(_component_el_table_column, {
              prop: "deptName",
              label: "\u90E8\u95E8\u540D\u79F0",
              "show-overflow-tooltip": ""
            }),
            createVNode(_component_el_table_column, {
              label: "\u6392\u5E8F",
              "show-overflow-tooltip": "",
              width: "80"
            }, {
              default: withCtx((scope) => [
                createTextVNode(toDisplayString(scope.$index), 1)
              ]),
              _: 1
            }),
            createVNode(_component_el_table_column, {
              prop: "status",
              label: "\u90E8\u95E8\u72B6\u6001",
              "show-overflow-tooltip": ""
            }, {
              default: withCtx((scope) => [
                scope.row.status ? (openBlock(), createBlock(_component_el_tag, {
                  key: 0,
                  type: "success"
                }, {
                  default: withCtx(() => [
                    _hoisted_5
                  ]),
                  _: 1
                })) : (openBlock(), createBlock(_component_el_tag, {
                  key: 1,
                  type: "info"
                }, {
                  default: withCtx(() => [
                    _hoisted_6
                  ]),
                  _: 1
                }))
              ]),
              _: 1
            }),
            createVNode(_component_el_table_column, {
              prop: "describe",
              label: "\u90E8\u95E8\u63CF\u8FF0",
              "show-overflow-tooltip": ""
            }),
            createVNode(_component_el_table_column, {
              prop: "createTime",
              label: "\u521B\u5EFA\u65F6\u95F4",
              "show-overflow-tooltip": ""
            }),
            createVNode(_component_el_table_column, {
              label: "\u64CD\u4F5C",
              "show-overflow-tooltip": "",
              width: "140"
            }, {
              default: withCtx((scope) => [
                createVNode(_component_el_button, {
                  size: "small",
                  text: "",
                  type: "primary",
                  onClick: _ctx.onOpenAddDept
                }, {
                  default: withCtx(() => [
                    _hoisted_7
                  ]),
                  _: 1
                }, 8, ["onClick"]),
                createVNode(_component_el_button, {
                  size: "small",
                  text: "",
                  type: "primary",
                  onClick: ($event) => _ctx.onOpenEditDept(scope.row)
                }, {
                  default: withCtx(() => [
                    _hoisted_8
                  ]),
                  _: 2
                }, 1032, ["onClick"]),
                createVNode(_component_el_button, {
                  size: "small",
                  text: "",
                  type: "primary",
                  onClick: ($event) => _ctx.onTabelRowDel(scope.row)
                }, {
                  default: withCtx(() => [
                    _hoisted_9
                  ]),
                  _: 2
                }, 1032, ["onClick"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["data"])
      ]),
      _: 1
    }),
    createVNode(_component_AddDept, { ref: "addDeptRef" }, null, 512),
    createVNode(_component_EditDept, { ref: "editDeptRef" }, null, 512)
  ]);
}
var index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/demo/admin-template/src/views/system/dept/index.vue"]]);
export { index as default };
