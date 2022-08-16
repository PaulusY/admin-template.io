import { L as defineComponent, s as storeToRefs, aE as useRoute, a3 as reactive, m as computed, l as onMounted, j as watch, a6 as toRefs, an as resolveDirective, U as withDirectives, a as createElementBlock, b as createBaseVNode, V as vShow, P as normalizeStyle, n as nextTick, o as openBlock } from "./vue.1660630113790.js";
import { _ as _export_sfc, u as useThemeConfig, b as useTagsViewRoutes } from "./index.1660630113790.js";
const _sfc_main = defineComponent({
  name: "layoutIfameView",
  setup() {
    const storesThemeConfig = useThemeConfig();
    const storesTagsViewRoutes = useTagsViewRoutes();
    const { themeConfig } = storeToRefs(storesThemeConfig);
    const { isTagsViewCurrenFull } = storeToRefs(storesTagsViewRoutes);
    const route = useRoute();
    const state = reactive({
      iframeDom: null,
      iframeLoading: true,
      iframeUrl: ""
    });
    const initIframeLoad = () => {
      state.iframeUrl = route.meta.isLink;
      nextTick(() => {
        state.iframeLoading = true;
        const iframe = state.iframeDom;
        if (!iframe)
          return false;
        iframe.onload = () => {
          state.iframeLoading = false;
        };
      });
    };
    const setIframeHeight = computed(() => {
      let { isTagsview } = themeConfig.value;
      if (isTagsViewCurrenFull.value) {
        return `1px`;
      } else {
        if (isTagsview)
          return `86px`;
        else
          return `51px`;
      }
    });
    onMounted(() => {
      initIframeLoad();
    });
    watch(
      () => route.path,
      () => {
        initIframeLoad();
      }
    );
    return {
      setIframeHeight,
      ...toRefs(state)
    };
  }
});
const _hoisted_1 = ["src"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _directive_loading = resolveDirective("loading");
  return withDirectives((openBlock(), createElementBlock("div", {
    class: "layout-view-bg-white flex mt1",
    style: normalizeStyle({ height: `calc(100vh - ${_ctx.setIframeHeight}`, border: "none" })
  }, [
    withDirectives(createBaseVNode("iframe", {
      src: _ctx.iframeUrl,
      frameborder: "0",
      height: "100%",
      width: "100%",
      ref: "iframeDom"
    }, null, 8, _hoisted_1), [
      [vShow, !_ctx.iframeLoading]
    ])
  ], 4)), [
    [_directive_loading, _ctx.iframeLoading]
  ]);
}
var iframes = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/demo/admin-template/src/layout/routerView/iframes.vue"]]);
export { iframes as default };
