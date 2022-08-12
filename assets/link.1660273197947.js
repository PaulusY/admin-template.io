import { L as defineComponent, s as storeToRefs, aE as useRoute, a3 as reactive, m as computed, j as watch, a6 as toRefs, a as createElementBlock, b as createBaseVNode, Z as toDisplayString, P as normalizeStyle, o as openBlock } from "./vue.1660273197947.js";
import { _ as _export_sfc, u as useThemeConfig } from "./index.1660273197947.js";
const _sfc_main = defineComponent({
  name: "layoutLinkView",
  setup() {
    const storesThemeConfig = useThemeConfig();
    const { themeConfig } = storeToRefs(storesThemeConfig);
    const route = useRoute();
    const state = reactive({
      currentRouteMeta: {
        isLink: "",
        title: ""
      }
    });
    const setLinkHeight = computed(() => {
      let { isTagsview } = themeConfig.value;
      if (isTagsview)
        return `115px`;
      else
        return `80px`;
    });
    watch(
      () => route.path,
      () => {
        state.currentRouteMeta = route.meta;
      },
      {
        immediate: true
      }
    );
    return {
      setLinkHeight,
      ...toRefs(state)
    };
  }
});
const _hoisted_1 = ["href"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: "layout-view-bg-white flex layout-view-link",
    style: normalizeStyle({ height: `calc(100vh - ${_ctx.setLinkHeight}` })
  }, [
    createBaseVNode("a", {
      href: _ctx.currentRouteMeta.isLink,
      target: "_blank",
      rel: "opener",
      class: "flex-margin"
    }, toDisplayString(_ctx.currentRouteMeta.title) + "\uFF1A" + toDisplayString(_ctx.currentRouteMeta.isLink), 9, _hoisted_1)
  ], 4);
}
var link = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/demo/admin-template/src/layout/routerView/link.vue"]]);
export { link as default };
