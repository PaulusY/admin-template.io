import { L as defineComponent, i as ref, a3 as reactive, l as onMounted, a6 as toRefs, a7 as resolveComponent, a as createElementBlock, _ as createVNode, T as withCtx, o as openBlock, b as createBaseVNode, S as createBlock, Y as createTextVNode } from "./vue.1660273197947.js";
import AddRole from "./addRole.1660273197947.js";
import EditRole from "./editRole.1660273197947.js";
import { _ as _export_sfc, E as ElMessageBox, e as ElMessage } from "./index.1660273197947.js";
const _sfc_main = defineComponent({
  name: "systemRole",
  components: { AddRole, EditRole },
  setup() {
    const addRoleRef = ref();
    const editRoleRef = ref();
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
      const data = [];
      for (let i = 0; i < 2; i++) {
        data.push({
          roleName: i === 0 ? "\u8D85\u7EA7\u7BA1\u7406\u5458" : "\u666E\u901A\u7528\u6237",
          roleSign: i === 0 ? "admin" : "common",
          describe: `\u6D4B\u8BD5\u89D2\u8272${i + 1}`,
          sort: i,
          status: true,
          createTime: new Date().toLocaleString()
        });
      }
      state.tableData.data = data;
      state.tableData.total = state.tableData.data.length;
    };
    const onOpenAddRole = () => {
      addRoleRef.value.openDialog();
    };
    const onOpenEditRole = (row) => {
      editRoleRef.value.openDialog(row);
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
      addRoleRef,
      editRoleRef,
      onOpenAddRole,
      onOpenEditRole,
      onRowDel,
      onHandleSizeChange,
      onHandleCurrentChange,
      ...toRefs(state)
    };
  }
});
const _hoisted_1 = { class: "system-role-container" };
const _hoisted_2 = { class: "system-user-search mb15" };
const _hoisted_3 = /* @__PURE__ */ createTextVNode(" \u67E5\u8BE2 ");
const _hoisted_4 = /* @__PURE__ */ createTextVNode(" \u65B0\u589E\u89D2\u8272 ");
const _hoisted_5 = /* @__PURE__ */ createTextVNode("\u542F\u7528");
const _hoisted_6 = /* @__PURE__ */ createTextVNode("\u7981\u7528");
const _hoisted_7 = /* @__PURE__ */ createTextVNode("\u4FEE\u6539");
const _hoisted_8 = /* @__PURE__ */ createTextVNode("\u5220\u9664");
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_input = resolveComponent("el-input");
  const _component_ele_Search = resolveComponent("ele-Search");
  const _component_el_icon = resolveComponent("el-icon");
  const _component_el_button = resolveComponent("el-button");
  const _component_ele_FolderAdd = resolveComponent("ele-FolderAdd");
  const _component_el_table_column = resolveComponent("el-table-column");
  const _component_el_tag = resolveComponent("el-tag");
  const _component_el_table = resolveComponent("el-table");
  const _component_el_pagination = resolveComponent("el-pagination");
  const _component_el_card = resolveComponent("el-card");
  const _component_AddRole = resolveComponent("AddRole");
  const _component_EditRole = resolveComponent("EditRole");
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createVNode(_component_el_card, { shadow: "hover" }, {
      default: withCtx(() => [
        createBaseVNode("div", _hoisted_2, [
          createVNode(_component_el_input, {
            size: "default",
            placeholder: "\u8BF7\u8F93\u5165\u89D2\u8272\u540D\u79F0",
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
            onClick: _ctx.onOpenAddRole
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
          style: { "width": "100%" }
        }, {
          default: withCtx(() => [
            createVNode(_component_el_table_column, {
              type: "index",
              label: "\u5E8F\u53F7",
              width: "60"
            }),
            createVNode(_component_el_table_column, {
              prop: "roleName",
              label: "\u89D2\u8272\u540D\u79F0",
              "show-overflow-tooltip": ""
            }),
            createVNode(_component_el_table_column, {
              prop: "roleSign",
              label: "\u89D2\u8272\u6807\u8BC6",
              "show-overflow-tooltip": ""
            }),
            createVNode(_component_el_table_column, {
              prop: "sort",
              label: "\u6392\u5E8F",
              "show-overflow-tooltip": ""
            }),
            createVNode(_component_el_table_column, {
              prop: "status",
              label: "\u89D2\u8272\u72B6\u6001",
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
              label: "\u89D2\u8272\u63CF\u8FF0",
              "show-overflow-tooltip": ""
            }),
            createVNode(_component_el_table_column, {
              prop: "createTime",
              label: "\u521B\u5EFA\u65F6\u95F4",
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
                    _hoisted_7
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
                    _hoisted_8
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
          "onUpdate:current-page": _cache[0] || (_cache[0] = ($event) => _ctx.tableData.param.pageNum = $event),
          background: "",
          "page-size": _ctx.tableData.param.pageSize,
          "onUpdate:page-size": _cache[1] || (_cache[1] = ($event) => _ctx.tableData.param.pageSize = $event),
          layout: "total, sizes, prev, pager, next, jumper",
          total: _ctx.tableData.total
        }, null, 8, ["onSizeChange", "onCurrentChange", "current-page", "page-size", "total"])
      ]),
      _: 1
    }),
    createVNode(_component_AddRole, { ref: "addRoleRef" }, null, 512),
    createVNode(_component_EditRole, { ref: "editRoleRef" }, null, 512)
  ]);
}
var index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/demo/admin-template/src/views/system/role/index.vue"]]);
export { index as default };
