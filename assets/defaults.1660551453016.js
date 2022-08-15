import { L as defineComponent, aE as useRoute, s as storeToRefs, m as computed, j as watch, a7 as resolveComponent, o as openBlock, S as createBlock, T as withCtx, _ as createVNode, X as createCommentVNode, O as normalizeClass, k as getCurrentInstance } from "./vue.1660551453016.js";
import { _ as _export_sfc, u as useThemeConfig } from "./index.1660551453016.js";
import { A as Asides } from "./aside.1660551453016.js";
import { H as Headers, M as Mains } from "./main.1660551453016.js";
import "./logo-mini.1660551453016.js";
import "./parent.1660551453016.js";
const _sfc_main = defineComponent({
  name: "layoutDefaults",
  components: { Asides, Headers, Mains },
  setup() {
    const { proxy } = getCurrentInstance();
    const route = useRoute();
    const storesThemeConfig = useThemeConfig();
    const { themeConfig } = storeToRefs(storesThemeConfig);
    const isFixedHeader = computed(() => {
      return themeConfig.value.isFixedHeader;
    });
    watch(
      () => route.path,
      () => {
        proxy.$refs.layoutDefaultsScrollbarRef.wrap$.scrollTop = 0;
      }
    );
    return {
      isFixedHeader
    };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Asides = resolveComponent("Asides");
  const _component_Headers = resolveComponent("Headers");
  const _component_Mains = resolveComponent("Mains");
  const _component_el_scrollbar = resolveComponent("el-scrollbar");
  const _component_el_container = resolveComponent("el-container");
  const _component_el_backtop = resolveComponent("el-backtop");
  return openBlock(), createBlock(_component_el_container, { class: "layout-container" }, {
    default: withCtx(() => [
      createVNode(_component_Asides),
      createVNode(_component_el_container, {
        class: normalizeClass(["flex-center", { "layout-backtop": !_ctx.isFixedHeader }])
      }, {
        default: withCtx(() => [
          _ctx.isFixedHeader ? (openBlock(), createBlock(_component_Headers, { key: 0 })) : createCommentVNode("v-if", true),
          createVNode(_component_el_scrollbar, {
            ref: "layoutDefaultsScrollbarRef",
            class: normalizeClass({ "layout-backtop": _ctx.isFixedHeader })
          }, {
            default: withCtx(() => [
              !_ctx.isFixedHeader ? (openBlock(), createBlock(_component_Headers, { key: 0 })) : createCommentVNode("v-if", true),
              createVNode(_component_Mains)
            ]),
            _: 1
          }, 8, ["class"])
        ]),
        _: 1
      }, 8, ["class"]),
      createVNode(_component_el_backtop, { target: ".layout-backtop .el-scrollbar__wrap" })
    ]),
    _: 1
  });
}
var defaults = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/demo/admin-template/src/layout/main/defaults.vue"]]);
export { defaults as default };
