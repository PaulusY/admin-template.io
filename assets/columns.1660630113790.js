import { L as defineComponent, i as ref, s as storeToRefs, aE as useRoute, aI as useRouter, a3 as reactive, j as watch, l as onMounted, H as onUnmounted, aJ as onBeforeRouteUpdate, a6 as toRefs, k as getCurrentInstance, n as nextTick, a7 as resolveComponent, o as openBlock, a as createElementBlock, _ as createVNode, T as withCtx, b as createBaseVNode, F as Fragment, aa as renderList, O as normalizeClass, Z as toDisplayString, m as computed, S as createBlock, X as createCommentVNode } from "./vue.1660630113790.js";
import { e as useRoutesList, u as useThemeConfig, p as pinia, _ as _export_sfc } from "./index.1660630113790.js";
import { A as Asides } from "./aside.1660630113790.js";
import { H as Headers, M as Mains } from "./main.1660630113790.js";
import "./logo-mini.1660630113790.js";
import "./parent.1660630113790.js";
var columnsAside_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$1 = defineComponent({
  name: "layoutColumnsAside",
  setup() {
    const columnsAsideOffsetTopRefs = ref([]);
    const columnsAsideActiveRef = ref();
    const { proxy } = getCurrentInstance();
    const stores = useRoutesList();
    const storesThemeConfig = useThemeConfig();
    const { routesList, isColumnsMenuHover, isColumnsNavHover } = storeToRefs(stores);
    const { themeConfig } = storeToRefs(storesThemeConfig);
    const route = useRoute();
    const router = useRouter();
    const state = reactive({
      columnsAsideList: [],
      liIndex: 0,
      liOldIndex: null,
      liHoverIndex: null,
      liOldPath: null,
      difference: 0,
      routeSplit: []
    });
    const setColumnsAsideMove = (k) => {
      state.liIndex = k;
      columnsAsideActiveRef.value.style.top = `${columnsAsideOffsetTopRefs.value[k].offsetTop + state.difference}px`;
    };
    const onColumnsAsideMenuClick = (v, k) => {
      setColumnsAsideMove(k);
      let { path, redirect } = v;
      if (redirect)
        router.push(redirect);
      else
        router.push(path);
    };
    const onColumnsAsideMenuMouseenter = (v, k) => {
      let { path } = v;
      state.liOldPath = path;
      state.liOldIndex = k;
      state.liHoverIndex = k;
      proxy.mittBus.emit("setSendColumnsChildren", setSendChildren(path));
      stores.setColumnsMenuHover(false);
      stores.setColumnsNavHover(true);
    };
    const onColumnsAsideMenuMouseleave = async () => {
      await stores.setColumnsNavHover(false);
      setTimeout(() => {
        if (!isColumnsMenuHover && !isColumnsNavHover)
          proxy.mittBus.emit("restoreDefault");
      }, 100);
    };
    const onColumnsAsideDown = (k) => {
      nextTick(() => {
        setColumnsAsideMove(k);
      });
    };
    const setFilterRoutes = () => {
      state.columnsAsideList = filterRoutesFun(routesList.value);
      const resData = setSendChildren(route.path);
      if (Object.keys(resData).length <= 0)
        return false;
      onColumnsAsideDown(resData.item[0].k);
      proxy.mittBus.emit("setSendColumnsChildren", resData);
    };
    const setSendChildren = (path) => {
      const currentPathSplit = path.split("/");
      let currentData = {};
      state.columnsAsideList.map((v, k) => {
        if (v.path === `/${currentPathSplit[1]}`) {
          v["k"] = k;
          currentData["item"] = [{ ...v }];
          currentData["children"] = [{ ...v }];
          if (v.children)
            currentData["children"] = v.children;
        }
      });
      return currentData;
    };
    const filterRoutesFun = (arr) => {
      return arr.filter((item) => !item.meta.isHide).map((item) => {
        item = Object.assign({}, item);
        if (item.children)
          item.children = filterRoutesFun(item.children);
        return item;
      });
    };
    const setColumnsMenuHighlight = (path) => {
      state.routeSplit = path.split("/");
      state.routeSplit.shift();
      const routeFirst = `/${state.routeSplit[0]}`;
      const currentSplitRoute = state.columnsAsideList.find((v) => v.path === routeFirst);
      if (!currentSplitRoute)
        return false;
      setTimeout(() => {
        onColumnsAsideDown(currentSplitRoute.k);
      }, 0);
    };
    watch(
      pinia.state,
      (val) => {
        val.themeConfig.themeConfig.columnsAsideStyle === "columnsRound" ? state.difference = 3 : state.difference = 0;
        if (!val.routesList.isColumnsMenuHover && !val.routesList.isColumnsNavHover) {
          state.liHoverIndex = null;
          proxy.mittBus.emit("setSendColumnsChildren", setSendChildren(route.path));
        } else {
          state.liHoverIndex = state.liOldIndex;
          if (!state.liOldPath)
            return false;
          proxy.mittBus.emit("setSendColumnsChildren", setSendChildren(state.liOldPath));
        }
      },
      {
        deep: true
      }
    );
    onMounted(() => {
      setFilterRoutes();
      proxy.mittBus.on("restoreDefault", () => {
        state.liOldIndex = null;
        state.liOldPath = null;
      });
    });
    onUnmounted(() => {
      proxy.mittBus.off("restoreDefault", () => {
      });
    });
    onBeforeRouteUpdate((to) => {
      setColumnsMenuHighlight(to.path);
      proxy.mittBus.emit("setSendColumnsChildren", setSendChildren(to.path));
    });
    return {
      themeConfig,
      columnsAsideOffsetTopRefs,
      columnsAsideActiveRef,
      onColumnsAsideDown,
      onColumnsAsideMenuClick,
      onColumnsAsideMenuMouseenter,
      onColumnsAsideMenuMouseleave,
      ...toRefs(state)
    };
  }
});
const _hoisted_1$1 = { class: "layout-columns-aside" };
const _hoisted_2 = ["onClick", "onMouseenter", "title"];
const _hoisted_3 = { class: "columns-vertical-title font12" };
const _hoisted_4 = ["href"];
const _hoisted_5 = { class: "columns-vertical-title font12" };
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_SvgIcon = resolveComponent("SvgIcon");
  const _component_el_scrollbar = resolveComponent("el-scrollbar");
  return openBlock(), createElementBlock("div", _hoisted_1$1, [
    createVNode(_component_el_scrollbar, null, {
      default: withCtx(() => [
        createBaseVNode("ul", {
          onMouseleave: _cache[0] || (_cache[0] = ($event) => _ctx.onColumnsAsideMenuMouseleave())
        }, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.columnsAsideList, (v, k) => {
            return openBlock(), createElementBlock("li", {
              key: k,
              onClick: ($event) => _ctx.onColumnsAsideMenuClick(v, k),
              onMouseenter: ($event) => _ctx.onColumnsAsideMenuMouseenter(v, k),
              ref_for: true,
              ref: (el) => {
                if (el)
                  _ctx.columnsAsideOffsetTopRefs[k] = el;
              },
              class: normalizeClass({ "layout-columns-active": _ctx.liIndex === k, "layout-columns-hover": _ctx.liHoverIndex === k }),
              title: v.meta.title
            }, [
              !v.meta.isLink || v.meta.isLink && v.meta.isIframe ? (openBlock(), createElementBlock("div", {
                key: 0,
                class: normalizeClass(_ctx.themeConfig.columnsAsideLayout)
              }, [
                createVNode(_component_SvgIcon, {
                  name: v.meta.icon
                }, null, 8, ["name"]),
                createBaseVNode("div", _hoisted_3, toDisplayString(v.meta.title && v.meta.title.length >= 4 ? v.meta.title.substr(0, _ctx.themeConfig.columnsAsideLayout === "columns-vertical" ? 4 : 3) : v.meta.title), 1)
              ], 2)) : (openBlock(), createElementBlock("div", {
                key: 1,
                class: normalizeClass(_ctx.themeConfig.columnsAsideLayout)
              }, [
                createBaseVNode("a", {
                  href: v.meta.isLink,
                  target: "_blank"
                }, [
                  createVNode(_component_SvgIcon, {
                    name: v.meta.icon
                  }, null, 8, ["name"]),
                  createBaseVNode("div", _hoisted_5, toDisplayString(v.meta.title && v.meta.title.length >= 4 ? v.meta.title.substr(0, _ctx.themeConfig.columnsAsideLayout === "columns-vertical" ? 4 : 3) : v.meta.title), 1)
                ], 8, _hoisted_4)
              ], 2))
            ], 42, _hoisted_2);
          }), 128)),
          createBaseVNode("div", {
            ref: "columnsAsideActiveRef",
            class: normalizeClass(_ctx.themeConfig.columnsAsideStyle)
          }, null, 2)
        ], 32)
      ]),
      _: 1
    })
  ]);
}
var ColumnsAside = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__scopeId", "data-v-689455a9"], ["__file", "D:/demo/admin-template/src/layout/component/columnsAside.vue"]]);
const _sfc_main = defineComponent({
  name: "layoutColumns",
  components: { Asides, Headers, Mains, ColumnsAside },
  setup() {
    const storesThemeConfig = useThemeConfig();
    const { themeConfig } = storeToRefs(storesThemeConfig);
    const isFixedHeader = computed(() => {
      return themeConfig.value.isFixedHeader;
    });
    return {
      isFixedHeader
    };
  }
});
const _hoisted_1 = { class: "layout-columns-warp" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ColumnsAside = resolveComponent("ColumnsAside");
  const _component_Asides = resolveComponent("Asides");
  const _component_Headers = resolveComponent("Headers");
  const _component_Mains = resolveComponent("Mains");
  const _component_el_scrollbar = resolveComponent("el-scrollbar");
  const _component_el_container = resolveComponent("el-container");
  const _component_el_backtop = resolveComponent("el-backtop");
  return openBlock(), createBlock(_component_el_container, { class: "layout-container" }, {
    default: withCtx(() => [
      createVNode(_component_ColumnsAside),
      createBaseVNode("div", _hoisted_1, [
        createVNode(_component_Asides),
        createVNode(_component_el_container, {
          class: normalizeClass(["flex-center layout-backtop", { "layout-backtop": !_ctx.isFixedHeader }])
        }, {
          default: withCtx(() => [
            _ctx.isFixedHeader ? (openBlock(), createBlock(_component_Headers, { key: 0 })) : createCommentVNode("v-if", true),
            createVNode(_component_el_scrollbar, {
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
        }, 8, ["class"])
      ]),
      createVNode(_component_el_backtop, { target: ".layout-backtop .el-scrollbar__wrap" })
    ]),
    _: 1
  });
}
var columns = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/demo/admin-template/src/layout/main/columns.vue"]]);
export { columns as default };
