import { L as defineComponent, s as storeToRefs, m as computed, a7 as resolveComponent, a as createElementBlock, b as createBaseVNode, _ as createVNode, T as withCtx, P as normalizeStyle, o as openBlock, aC as pushScopeId, aD as popScopeId, Y as createTextVNode } from "./vue.1660272860115.js";
import { _ as _export_sfc, u as useThemeConfig, b as useTagsViewRoutes, S as Session } from "./index.1660272860115.js";
var _imports_0 = "assets/401.1660272860115.png";
var _401_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main = defineComponent({
  name: "401",
  setup() {
    const storesThemeConfig = useThemeConfig();
    const storesTagsViewRoutes = useTagsViewRoutes();
    const { themeConfig } = storeToRefs(storesThemeConfig);
    const { isTagsViewCurrenFull } = storeToRefs(storesTagsViewRoutes);
    const onSetAuth = () => {
      Session.clear();
      window.location.reload();
    };
    const initTagViewHeight = computed(() => {
      let { isTagsview } = themeConfig.value;
      if (isTagsViewCurrenFull.value) {
        return `30px`;
      } else {
        if (isTagsview)
          return `114px`;
        else
          return `80px`;
      }
    });
    return {
      onSetAuth,
      initTagViewHeight
    };
  }
});
const _withScopeId = (n) => (pushScopeId("data-v-099c4504"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "error-flex" };
const _hoisted_2 = { class: "left" };
const _hoisted_3 = { class: "left-item" };
const _hoisted_4 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "left-item-animation left-item-num" }, "401", -1));
const _hoisted_5 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "left-item-animation left-item-title" }, "\u60A8\u672A\u88AB\u6388\u6743\uFF0C\u6CA1\u6709\u64CD\u4F5C\u6743\u9650~", -1));
const _hoisted_6 = { class: "left-item-animation left-item-btn" };
const _hoisted_7 = /* @__PURE__ */ createTextVNode("\u91CD\u65B0\u6388\u6743");
const _hoisted_8 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "right" }, [
  /* @__PURE__ */ createBaseVNode("img", { src: _imports_0 })
], -1));
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_button = resolveComponent("el-button");
  return openBlock(), createElementBlock("div", {
    class: "error layout-view-bg-white",
    style: normalizeStyle({ height: `calc(100vh - ${_ctx.initTagViewHeight}` })
  }, [
    createBaseVNode("div", _hoisted_1, [
      createBaseVNode("div", _hoisted_2, [
        createBaseVNode("div", _hoisted_3, [
          _hoisted_4,
          _hoisted_5,
          createBaseVNode("div", _hoisted_6, [
            createVNode(_component_el_button, {
              type: "primary",
              round: "",
              onClick: _ctx.onSetAuth
            }, {
              default: withCtx(() => [
                _hoisted_7
              ]),
              _: 1
            }, 8, ["onClick"])
          ])
        ])
      ]),
      _hoisted_8
    ])
  ], 4);
}
var _401 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-099c4504"], ["__file", "D:/demo/admin-template/src/views/error/401.vue"]]);
export { _401 as default };
