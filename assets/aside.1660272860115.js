import { L as defineComponent, s as storeToRefs, aE as useRoute, a3 as reactive, m as computed, j as watch, l as onMounted, aJ as onBeforeRouteUpdate, a6 as toRefs, a7 as resolveComponent, o as openBlock, S as createBlock, T as withCtx, a as createElementBlock, aa as renderList, F as Fragment, _ as createVNode, b as createBaseVNode, Z as toDisplayString, ab as createSlots, K as onBeforeMount, k as getCurrentInstance, U as withDirectives, V as vShow, X as createCommentVNode, O as normalizeClass } from "./vue.1660272860115.js";
import { u as useThemeConfig, _ as _export_sfc, d as useRoutesList, b as useTagsViewRoutes, p as pinia } from "./index.1660272860115.js";
import { S as SubItem, L as Logo } from "./main.1660272860115.js";
const _sfc_main$1 = defineComponent({
  name: "navMenuVertical",
  components: { SubItem },
  props: {
    menuList: {
      type: Array,
      default: () => []
    }
  },
  setup(props) {
    const storesThemeConfig = useThemeConfig();
    const { themeConfig } = storeToRefs(storesThemeConfig);
    const route = useRoute();
    const state = reactive({
      defaultActive: route.meta.isDynamic ? route.meta.isDynamicPath : route.path,
      isCollapse: false
    });
    const menuLists = computed(() => {
      return props.menuList;
    });
    const getThemeConfig = computed(() => {
      return themeConfig.value;
    });
    const setParentHighlight = (currentRoute) => {
      const { path, meta } = currentRoute;
      const pathSplit = meta.isDynamic ? meta.isDynamicPath.split("/") : path.split("/");
      if (pathSplit.length >= 4 && meta.isHide)
        return pathSplit.splice(0, 3).join("/");
      else
        return path;
    };
    watch(
      themeConfig.value,
      () => {
        document.body.clientWidth <= 1e3 ? state.isCollapse = false : state.isCollapse = themeConfig.value.isCollapse;
      },
      {
        immediate: true
      }
    );
    onMounted(() => {
      state.defaultActive = setParentHighlight(route);
    });
    onBeforeRouteUpdate((to) => {
      state.defaultActive = setParentHighlight(to);
      const clientWidth = document.body.clientWidth;
      if (clientWidth < 1e3)
        themeConfig.value.isCollapse = false;
    });
    return {
      menuLists,
      getThemeConfig,
      ...toRefs(state)
    };
  }
});
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_SvgIcon = resolveComponent("SvgIcon");
  const _component_SubItem = resolveComponent("SubItem");
  const _component_el_sub_menu = resolveComponent("el-sub-menu");
  const _component_el_menu_item = resolveComponent("el-menu-item");
  const _component_el_menu = resolveComponent("el-menu");
  return openBlock(), createBlock(_component_el_menu, {
    router: "",
    "default-active": _ctx.defaultActive,
    "background-color": "transparent",
    collapse: _ctx.isCollapse,
    "unique-opened": _ctx.getThemeConfig.isUniqueOpened,
    "collapse-transition": false
  }, {
    default: withCtx(() => [
      (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.menuLists, (val) => {
        return openBlock(), createElementBlock(Fragment, null, [
          val.children && val.children.length > 0 ? (openBlock(), createBlock(_component_el_sub_menu, {
            index: val.path,
            key: val.path
          }, {
            title: withCtx(() => [
              createVNode(_component_SvgIcon, {
                name: val.meta.icon
              }, null, 8, ["name"]),
              createBaseVNode("span", null, toDisplayString(val.meta.title), 1)
            ]),
            default: withCtx(() => [
              createVNode(_component_SubItem, {
                chil: val.children
              }, null, 8, ["chil"])
            ]),
            _: 2
          }, 1032, ["index"])) : (openBlock(), createBlock(_component_el_menu_item, {
            index: val.path,
            key: val.path
          }, createSlots({
            default: withCtx(() => [
              createVNode(_component_SvgIcon, {
                name: val.meta.icon
              }, null, 8, ["name"])
            ]),
            _: 2
          }, [
            !val.meta.isLink || val.meta.isLink && val.meta.isIframe ? {
              name: "title",
              fn: withCtx(() => [
                createBaseVNode("span", null, toDisplayString(val.meta.title), 1)
              ])
            } : {
              name: "title",
              fn: withCtx(() => [
                createBaseVNode("a", {
                  href: val.meta.isLink,
                  target: "_blank",
                  rel: "opener",
                  class: "w100"
                }, toDisplayString(val.meta.title), 9, ["href"])
              ])
            }
          ]), 1032, ["index"]))
        ], 64);
      }), 256))
    ]),
    _: 1
  }, 8, ["default-active", "collapse", "unique-opened"]);
}
var Vertical = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "D:/demo/admin-template/src/layout/navMenu/vertical.vue"]]);
const _sfc_main = defineComponent({
  name: "layoutAside",
  components: { Logo, Vertical },
  setup() {
    const { proxy } = getCurrentInstance();
    const stores = useRoutesList();
    const storesThemeConfig = useThemeConfig();
    const storesTagsViewRoutes = useTagsViewRoutes();
    const { routesList } = storeToRefs(stores);
    const { themeConfig } = storeToRefs(storesThemeConfig);
    const { isTagsViewCurrenFull } = storeToRefs(storesTagsViewRoutes);
    const state = reactive({
      menuList: [],
      clientWidth: 0
    });
    const setCollapseStyle = computed(() => {
      const { layout, isCollapse, menuBar } = themeConfig.value;
      const asideBrTheme = ["#FFFFFF", "#FFF", "#fff", "#ffffff"];
      const asideBrColor = asideBrTheme.includes(menuBar) ? "layout-el-aside-br-color" : "";
      if (state.clientWidth <= 1e3) {
        if (isCollapse) {
          document.body.setAttribute("class", "el-popup-parent--hidden");
          const asideEle = document.querySelector(".layout-container");
          const modeDivs = document.createElement("div");
          modeDivs.setAttribute("class", "layout-aside-mobile-mode");
          asideEle.appendChild(modeDivs);
          modeDivs.addEventListener("click", closeLayoutAsideMobileMode);
          return [asideBrColor, "layout-aside-mobile", "layout-aside-mobile-open"];
        } else {
          closeLayoutAsideMobileMode();
          return [asideBrColor, "layout-aside-mobile", "layout-aside-mobile-close"];
        }
      } else {
        if (layout === "columns") {
          if (isCollapse)
            return [asideBrColor, "layout-aside-pc-1"];
          else
            return [asideBrColor, "layout-aside-pc-220"];
        } else {
          if (isCollapse)
            return [asideBrColor, "layout-aside-pc-64"];
          else
            return [asideBrColor, "layout-aside-pc-220"];
        }
      }
    });
    const closeLayoutAsideMobileMode = () => {
      const el = document.querySelector(".layout-aside-mobile-mode");
      el == null ? void 0 : el.setAttribute("style", "animation: error-img-two 0.3s");
      setTimeout(() => {
        var _a;
        (_a = el == null ? void 0 : el.parentNode) == null ? void 0 : _a.removeChild(el);
      }, 300);
      const clientWidth = document.body.clientWidth;
      if (clientWidth < 1e3)
        themeConfig.value.isCollapse = false;
      document.body.setAttribute("class", "");
    };
    const setShowLogo = computed(() => {
      let { layout, isShowLogo } = themeConfig.value;
      return isShowLogo && layout === "defaults" || isShowLogo && layout === "columns";
    });
    const setFilterRoutes = () => {
      if (themeConfig.value.layout === "columns")
        return false;
      state.menuList = filterRoutesFun(routesList.value);
    };
    const filterRoutesFun = (arr) => {
      return arr.filter((item) => !item.meta.isHide).map((item) => {
        item = Object.assign({}, item);
        if (item.children)
          item.children = filterRoutesFun(item.children);
        return item;
      });
    };
    const initMenuFixed = (clientWidth) => {
      state.clientWidth = clientWidth;
    };
    const onAsideEnterLeave = (bool) => {
      let { layout } = themeConfig.value;
      if (layout !== "columns")
        return false;
      if (!bool)
        proxy.mittBus.emit("restoreDefault");
      stores.setColumnsMenuHover(bool);
    };
    watch(themeConfig.value, (val) => {
      if (val.isShowLogoChange !== val.isShowLogo) {
        if (!proxy.$refs.layoutAsideScrollbarRef)
          return false;
        proxy.$refs.layoutAsideScrollbarRef.update();
      }
    });
    watch(
      pinia.state,
      (val) => {
        let { layout, isClassicSplitMenu } = val.themeConfig.themeConfig;
        if (layout === "classic" && isClassicSplitMenu)
          return false;
        setFilterRoutes();
      },
      {
        deep: true
      }
    );
    onBeforeMount(() => {
      initMenuFixed(document.body.clientWidth);
      setFilterRoutes();
      proxy.mittBus.on("setSendColumnsChildren", (res) => {
        state.menuList = res.children;
      });
      proxy.mittBus.on("setSendClassicChildren", (res) => {
        let { layout, isClassicSplitMenu } = themeConfig.value;
        if (layout === "classic" && isClassicSplitMenu) {
          state.menuList = [];
          state.menuList = res.children;
        }
      });
      proxy.mittBus.on("getBreadcrumbIndexSetFilterRoutes", () => {
        setFilterRoutes();
      });
      proxy.mittBus.on("layoutMobileResize", (res) => {
        initMenuFixed(res.clientWidth);
        closeLayoutAsideMobileMode();
      });
    });
    return {
      setCollapseStyle,
      setShowLogo,
      isTagsViewCurrenFull,
      onAsideEnterLeave,
      ...toRefs(state)
    };
  }
});
const _hoisted_1 = { class: "h100" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Logo = resolveComponent("Logo");
  const _component_Vertical = resolveComponent("Vertical");
  const _component_el_scrollbar = resolveComponent("el-scrollbar");
  const _component_el_aside = resolveComponent("el-aside");
  return withDirectives((openBlock(), createElementBlock("div", _hoisted_1, [
    createVNode(_component_el_aside, {
      class: normalizeClass(["layout-aside", _ctx.setCollapseStyle])
    }, {
      default: withCtx(() => [
        _ctx.setShowLogo ? (openBlock(), createBlock(_component_Logo, { key: 0 })) : createCommentVNode("v-if", true),
        createVNode(_component_el_scrollbar, {
          class: "flex-auto",
          ref: "layoutAsideScrollbarRef",
          onMouseenter: _cache[0] || (_cache[0] = ($event) => _ctx.onAsideEnterLeave(true)),
          onMouseleave: _cache[1] || (_cache[1] = ($event) => _ctx.onAsideEnterLeave(false))
        }, {
          default: withCtx(() => [
            createVNode(_component_Vertical, { menuList: _ctx.menuList }, null, 8, ["menuList"])
          ]),
          _: 1
        }, 512)
      ]),
      _: 1
    }, 8, ["class"])
  ], 512)), [
    [vShow, !_ctx.isTagsViewCurrenFull]
  ]);
}
var Asides = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/demo/admin-template/src/layout/component/aside.vue"]]);
export { Asides as A };
