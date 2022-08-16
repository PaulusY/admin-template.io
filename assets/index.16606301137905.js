import { L as defineComponent, s as storeToRefs, i as ref, a3 as reactive, m as computed, a6 as toRefs, a7 as resolveComponent, a as createElementBlock, _ as createVNode, T as withCtx, o as openBlock, b as createBaseVNode, Z as toDisplayString, Y as createTextVNode } from "./vue.1660630113790.js";
import { _ as _export_sfc, e as useRoutesList, E as ElMessageBox, d as ElMessage } from "./index.1660630113790.js";
import AddMenu from "./addMenu.1660630113790.js";
import EditMenu from "./editMenu.1660630113790.js";
import "./index.16606301137906.js";
const _sfc_main = defineComponent({
  name: "systemMenu",
  components: { AddMenu, EditMenu },
  setup() {
    const stores = useRoutesList();
    const { routesList } = storeToRefs(stores);
    const addMenuRef = ref();
    const editMenuRef = ref();
    const state = reactive({});
    const menuTableData = computed(() => {
      return routesList.value;
    });
    const onOpenAddMenu = () => {
      addMenuRef.value.openDialog();
    };
    const onOpenEditMenu = (row) => {
      editMenuRef.value.openDialog(row);
    };
    const onTabelRowDel = (row) => {
      ElMessageBox.confirm(`\u6B64\u64CD\u4F5C\u5C06\u6C38\u4E45\u5220\u9664\u8DEF\u7531\uFF1A${row.path}, \u662F\u5426\u7EE7\u7EED?`, "\u63D0\u793A", {
        confirmButtonText: "\u5220\u9664",
        cancelButtonText: "\u53D6\u6D88",
        type: "warning"
      }).then(() => {
        ElMessage.success("\u5220\u9664\u6210\u529F");
      }).catch(() => {
      });
    };
    return {
      addMenuRef,
      editMenuRef,
      onOpenAddMenu,
      onOpenEditMenu,
      menuTableData,
      onTabelRowDel,
      ...toRefs(state)
    };
  }
});
const _hoisted_1 = { class: "system-menu-container" };
const _hoisted_2 = { class: "system-menu-search mb15" };
const _hoisted_3 = /* @__PURE__ */ createTextVNode(" \u67E5\u8BE2 ");
const _hoisted_4 = /* @__PURE__ */ createTextVNode(" \u65B0\u589E\u83DC\u5355 ");
const _hoisted_5 = { class: "ml10" };
const _hoisted_6 = /* @__PURE__ */ createTextVNode("\u65B0\u589E");
const _hoisted_7 = /* @__PURE__ */ createTextVNode("\u4FEE\u6539");
const _hoisted_8 = /* @__PURE__ */ createTextVNode("\u5220\u9664");
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_input = resolveComponent("el-input");
  const _component_ele_Search = resolveComponent("ele-Search");
  const _component_el_icon = resolveComponent("el-icon");
  const _component_el_button = resolveComponent("el-button");
  const _component_ele_FolderAdd = resolveComponent("ele-FolderAdd");
  const _component_SvgIcon = resolveComponent("SvgIcon");
  const _component_el_table_column = resolveComponent("el-table-column");
  const _component_el_tag = resolveComponent("el-tag");
  const _component_el_table = resolveComponent("el-table");
  const _component_el_card = resolveComponent("el-card");
  const _component_AddMenu = resolveComponent("AddMenu");
  const _component_EditMenu = resolveComponent("EditMenu");
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createVNode(_component_el_card, { shadow: "hover" }, {
      default: withCtx(() => [
        createBaseVNode("div", _hoisted_2, [
          createVNode(_component_el_input, {
            size: "default",
            placeholder: "\u8BF7\u8F93\u5165\u83DC\u5355\u540D\u79F0",
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
            onClick: _ctx.onOpenAddMenu
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
          data: _ctx.menuTableData,
          style: { "width": "100%" },
          "row-key": "path",
          "tree-props": { children: "children", hasChildren: "hasChildren" }
        }, {
          default: withCtx(() => [
            createVNode(_component_el_table_column, {
              label: "\u83DC\u5355\u540D\u79F0",
              "show-overflow-tooltip": ""
            }, {
              default: withCtx((scope) => [
                createVNode(_component_SvgIcon, {
                  name: scope.row.meta.icon
                }, null, 8, ["name"]),
                createBaseVNode("span", _hoisted_5, toDisplayString(scope.row.meta.title), 1)
              ]),
              _: 1
            }),
            createVNode(_component_el_table_column, {
              prop: "path",
              label: "\u8DEF\u7531\u8DEF\u5F84",
              "show-overflow-tooltip": ""
            }),
            createVNode(_component_el_table_column, {
              label: "\u7EC4\u4EF6\u8DEF\u5F84",
              "show-overflow-tooltip": ""
            }, {
              default: withCtx((scope) => [
                createBaseVNode("span", null, toDisplayString(scope.row.component), 1)
              ]),
              _: 1
            }),
            createVNode(_component_el_table_column, {
              label: "\u6743\u9650\u6807\u8BC6",
              "show-overflow-tooltip": ""
            }, {
              default: withCtx((scope) => [
                createBaseVNode("span", null, toDisplayString(scope.row.meta.roles), 1)
              ]),
              _: 1
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
              label: "\u7C7B\u578B",
              "show-overflow-tooltip": "",
              width: "80"
            }, {
              default: withCtx((scope) => [
                createVNode(_component_el_tag, {
                  type: "success",
                  size: "small"
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(scope.row.xx) + "\u83DC\u5355", 1)
                  ]),
                  _: 2
                }, 1024)
              ]),
              _: 1
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
                  onClick: _ctx.onOpenAddMenu
                }, {
                  default: withCtx(() => [
                    _hoisted_6
                  ]),
                  _: 1
                }, 8, ["onClick"]),
                createVNode(_component_el_button, {
                  size: "small",
                  text: "",
                  type: "primary",
                  onClick: ($event) => _ctx.onOpenEditMenu(scope.row)
                }, {
                  default: withCtx(() => [
                    _hoisted_7
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
                    _hoisted_8
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
    createVNode(_component_AddMenu, { ref: "addMenuRef" }, null, 512),
    createVNode(_component_EditMenu, { ref: "editMenuRef" }, null, 512)
  ]);
}
var index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/demo/admin-template/src/views/system/menu/index.vue"]]);
export { index as default };
