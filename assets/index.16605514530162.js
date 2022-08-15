import { _ as _export_sfc, u as useThemeConfig, L as Local, a as __vitePreload } from "./index.1660551453016.js";
import { L as defineComponent, aF as defineAsyncComponent, s as storeToRefs, K as onBeforeMount, H as onUnmounted, o as openBlock, S as createBlock, W as resolveDynamicComponent, k as getCurrentInstance } from "./vue.1660551453016.js";
const _sfc_main = defineComponent({
  name: "layout",
  components: {
    defaults: defineAsyncComponent(() => __vitePreload(() => import("./defaults.1660551453016.js"), true ? ["assets/defaults.1660551453016.js","assets/vue.1660551453016.js","assets/index.1660551453016.js","assets/index.16605514530163.css","assets/aside.1660551453016.js","assets/main.1660551453016.js","assets/main.1660551453016.css","assets/logo-mini.1660551453016.js","assets/parent.1660551453016.js"] : void 0)),
    classic: defineAsyncComponent(() => __vitePreload(() => import("./classic.1660551453016.js"), true ? ["assets/classic.1660551453016.js","assets/vue.1660551453016.js","assets/index.1660551453016.js","assets/index.16605514530163.css","assets/aside.1660551453016.js","assets/main.1660551453016.js","assets/main.1660551453016.css","assets/logo-mini.1660551453016.js","assets/parent.1660551453016.js"] : void 0)),
    transverse: defineAsyncComponent(() => __vitePreload(() => import("./transverse.1660551453016.js"), true ? ["assets/transverse.1660551453016.js","assets/main.1660551453016.js","assets/main.1660551453016.css","assets/vue.1660551453016.js","assets/index.1660551453016.js","assets/index.16605514530163.css","assets/logo-mini.1660551453016.js","assets/parent.1660551453016.js"] : void 0)),
    columns: defineAsyncComponent(() => __vitePreload(() => import("./columns.1660551453016.js"), true ? ["assets/columns.1660551453016.js","assets/columns.1660551453016.css","assets/vue.1660551453016.js","assets/index.1660551453016.js","assets/index.16605514530163.css","assets/aside.1660551453016.js","assets/main.1660551453016.js","assets/main.1660551453016.css","assets/logo-mini.1660551453016.js","assets/parent.1660551453016.js"] : void 0))
  },
  setup() {
    const { proxy } = getCurrentInstance();
    const storesThemeConfig = useThemeConfig();
    const { themeConfig } = storeToRefs(storesThemeConfig);
    const onLayoutResize = () => {
      if (!Local.get("oldLayout"))
        Local.set("oldLayout", themeConfig.value.layout);
      const clientWidth = document.body.clientWidth;
      if (clientWidth < 1e3) {
        themeConfig.value.isCollapse = false;
        proxy.mittBus.emit("layoutMobileResize", {
          layout: "defaults",
          clientWidth
        });
      } else {
        proxy.mittBus.emit("layoutMobileResize", {
          layout: Local.get("oldLayout") ? Local.get("oldLayout") : themeConfig.value.layout,
          clientWidth
        });
      }
    };
    onBeforeMount(() => {
      onLayoutResize();
      window.addEventListener("resize", onLayoutResize);
    });
    onUnmounted(() => {
      window.removeEventListener("resize", onLayoutResize);
    });
    return {
      themeConfig
    };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(resolveDynamicComponent(_ctx.themeConfig.layout));
}
var index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/demo/admin-template/src/layout/index.vue"]]);
export { index as default };
