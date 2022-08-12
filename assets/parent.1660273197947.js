import { L as defineComponent, aE as useRoute, s as storeToRefs, a3 as reactive, m as computed, K as onBeforeMount, n as nextTick, l as onMounted, H as onUnmounted, j as watch, a6 as toRefs, a7 as resolveComponent, a as createElementBlock, _ as createVNode, T as withCtx, k as getCurrentInstance, o as openBlock, $ as Transition, S as createBlock, W as resolveDynamicComponent, aH as KeepAlive } from "./vue.1660273197947.js";
import { _ as _export_sfc, c as useKeepALiveNames, u as useThemeConfig, S as Session } from "./index.1660273197947.js";
const _sfc_main = defineComponent({
  name: "layoutParentView",
  setup() {
    const { proxy } = getCurrentInstance();
    const route = useRoute();
    const storesKeepAliveNames = useKeepALiveNames();
    const storesThemeConfig = useThemeConfig();
    const { keepAliveNames, cachedViews } = storeToRefs(storesKeepAliveNames);
    const { themeConfig } = storeToRefs(storesThemeConfig);
    const state = reactive({
      refreshRouterViewKey: null,
      keepAliveNameList: []
    });
    const setTransitionName = computed(() => {
      return themeConfig.value.animation;
    });
    const getKeepAliveNames = computed(() => {
      return themeConfig.value.isTagsview ? cachedViews.value : state.keepAliveNameList;
    });
    onBeforeMount(() => {
      state.keepAliveNameList = keepAliveNames.value;
      proxy.mittBus.on("onTagsViewRefreshRouterView", (fullPath) => {
        state.keepAliveNameList = keepAliveNames.value.filter((name) => route.name !== name);
        state.refreshRouterViewKey = null;
        nextTick(() => {
          state.refreshRouterViewKey = fullPath;
          state.keepAliveNameList = keepAliveNames.value;
        });
      });
    });
    onMounted(() => {
      nextTick(() => {
        setTimeout(() => {
          var _a;
          if (themeConfig.value.isCacheTagsView)
            cachedViews.value = (_a = Session.get("tagsViewList")) == null ? void 0 : _a.map((item) => item.name);
        }, 0);
      });
    });
    onUnmounted(() => {
      proxy.mittBus.off("onTagsViewRefreshRouterView", () => {
      });
    });
    watch(
      () => route.fullPath,
      () => {
        state.refreshRouterViewKey = decodeURI(route.fullPath);
      }
    );
    return {
      setTransitionName,
      getKeepAliveNames,
      ...toRefs(state)
    };
  }
});
const _hoisted_1 = { class: "h100" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_router_view = resolveComponent("router-view");
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createVNode(_component_router_view, null, {
      default: withCtx(({ Component }) => [
        createVNode(Transition, {
          name: _ctx.setTransitionName,
          mode: "out-in"
        }, {
          default: withCtx(() => [
            (openBlock(), createBlock(KeepAlive, { include: _ctx.getKeepAliveNames }, [
              (openBlock(), createBlock(resolveDynamicComponent(Component), {
                key: _ctx.refreshRouterViewKey,
                class: "w100"
              }))
            ], 1032, ["include"]))
          ]),
          _: 2
        }, 1032, ["name"])
      ]),
      _: 1
    })
  ]);
}
var LayoutParentView = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/demo/admin-template/src/layout/routerView/parent.vue"]]);
export { LayoutParentView as default };
