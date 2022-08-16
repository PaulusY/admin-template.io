import { L as defineComponent, s as storeToRefs, aI as useRouter, m as computed, a7 as resolveComponent, a as createElementBlock, b as createBaseVNode, _ as createVNode, T as withCtx, P as normalizeStyle, o as openBlock, aC as pushScopeId, aD as popScopeId, Y as createTextVNode } from "./vue.1660630113790.js";
import { _ as _export_sfc, u as useThemeConfig, b as useTagsViewRoutes } from "./index.1660630113790.js";
var _imports_0 = "/admin-template.io/assets/404.1660630113790.png";
var _404_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main = defineComponent({
  name: "404",
  setup() {
    const storesThemeConfig = useThemeConfig();
    const storesTagsViewRoutes = useTagsViewRoutes();
    const { themeConfig } = storeToRefs(storesThemeConfig);
    const { isTagsViewCurrenFull } = storeToRefs(storesTagsViewRoutes);
    const router = useRouter();
    const onGoHome = () => {
      router.push("/");
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
      onGoHome,
      initTagViewHeight
    };
  }
});
const _withScopeId = (n) => (pushScopeId("data-v-09c68b87"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "error-flex" };
const _hoisted_2 = { class: "left" };
const _hoisted_3 = { class: "left-item" };
const _hoisted_4 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "left-item-animation left-item-num" }, "404", -1));
const _hoisted_5 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "left-item-animation left-item-title" }, "\u5730\u5740\u8F93\u5165\u9519\u8BEF\uFF0C\u8BF7\u91CD\u65B0\u8F93\u5165\u5730\u5740~", -1));
const _hoisted_6 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "left-item-animation left-item-msg" }, "\u60A8\u53EF\u4EE5\u5148\u68C0\u67E5\u7F51\u5740\uFF0C\u7136\u540E\u91CD\u65B0\u8F93\u5165\u6216\u7ED9\u6211\u4EEC\u53CD\u9988\u95EE\u9898\u3002", -1));
const _hoisted_7 = { class: "left-item-animation left-item-btn" };
const _hoisted_8 = /* @__PURE__ */ createTextVNode("\u8FD4\u56DE\u9996\u9875");
const _hoisted_9 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "right" }, [
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
          _hoisted_6,
          createBaseVNode("div", _hoisted_7, [
            createVNode(_component_el_button, {
              type: "primary",
              round: "",
              onClick: _ctx.onGoHome
            }, {
              default: withCtx(() => [
                _hoisted_8
              ]),
              _: 1
            }, 8, ["onClick"])
          ])
        ])
      ]),
      _hoisted_9
    ])
  ], 4);
}
var _404 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-09c68b87"], ["__file", "D:/demo/admin-template/src/views/error/404.vue"]]);
export { _404 as default };
