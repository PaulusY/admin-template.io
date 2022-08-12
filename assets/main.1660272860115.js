import { L as defineComponent, s as storeToRefs, m as computed, o as openBlock, a as createElementBlock, b as createBaseVNode, Z as toDisplayString, a7 as resolveComponent, aa as renderList, F as Fragment, S as createBlock, T as withCtx, _ as createVNode, Y as createTextVNode, aE as useRoute, aI as useRouter, a3 as reactive, l as onMounted, aJ as onBeforeRouteUpdate, a6 as toRefs, av as TransitionGroup, X as createCommentVNode, a2 as withModifiers, aC as pushScopeId, aD as popScopeId, i as ref, n as nextTick, O as normalizeClass, P as normalizeStyle, k as getCurrentInstance, K as onBeforeMount, ab as createSlots, H as onUnmounted, j as watch, U as withDirectives, V as vShow, $ as Transition, al as onBeforeUpdate } from "./vue.1660272860115.js";
import { u as useThemeConfig, _ as _export_sfc, d as useRoutesList, o as other, L as Local, b as useTagsViewRoutes, k as useUserInfo, e as ElMessage, E as ElMessageBox, S as Session, c as useKeepALiveNames, p as pinia, l as isObjectValueEqual, N as NextLoading } from "./index.1660272860115.js";
import { l as logoMini } from "./logo-mini.1660272860115.js";
import LayoutParentView from "./parent.1660272860115.js";
var index_vue_vue_type_style_index_0_scoped_true_lang$3 = "";
const _sfc_main$d = defineComponent({
  name: "layoutLogo",
  setup() {
    const storesThemeConfig = useThemeConfig();
    const { themeConfig } = storeToRefs(storesThemeConfig);
    const setShowLogo = computed(() => {
      let { isCollapse, layout } = themeConfig.value;
      return !isCollapse || layout === "classic" || document.body.clientWidth < 1e3;
    });
    const onThemeConfigChange = () => {
      if (themeConfig.value.layout === "transverse")
        return false;
      themeConfig.value.isCollapse = !themeConfig.value.isCollapse;
    };
    return {
      logoMini,
      setShowLogo,
      themeConfig,
      onThemeConfigChange
    };
  }
});
const _hoisted_1$b = ["src"];
const _hoisted_2$6 = ["src"];
function _sfc_render$d(_ctx, _cache, $props, $setup, $data, $options) {
  return _ctx.setShowLogo ? (openBlock(), createElementBlock("div", {
    key: 0,
    class: "layout-logo",
    onClick: _cache[0] || (_cache[0] = (...args) => _ctx.onThemeConfigChange && _ctx.onThemeConfigChange(...args))
  }, [
    createBaseVNode("img", {
      src: _ctx.logoMini,
      class: "layout-logo-medium-img"
    }, null, 8, _hoisted_1$b),
    createBaseVNode("span", null, toDisplayString(_ctx.themeConfig.globalTitle), 1)
  ])) : (openBlock(), createElementBlock("div", {
    key: 1,
    class: "layout-logo-size",
    onClick: _cache[1] || (_cache[1] = (...args) => _ctx.onThemeConfigChange && _ctx.onThemeConfigChange(...args))
  }, [
    createBaseVNode("img", {
      src: _ctx.logoMini,
      class: "layout-logo-size-img"
    }, null, 8, _hoisted_2$6)
  ]));
}
var Logo = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["render", _sfc_render$d], ["__scopeId", "data-v-6e24d36a"], ["__file", "D:/demo/admin-template/src/layout/logo/index.vue"]]);
const _sfc_main$c = defineComponent({
  name: "navMenuSubItem",
  props: {
    chil: {
      type: Array,
      default: () => []
    }
  },
  setup(props) {
    const chils = computed(() => {
      return props.chil;
    });
    return {
      chils
    };
  }
});
const _hoisted_1$a = ["href"];
function _sfc_render$c(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_SvgIcon = resolveComponent("SvgIcon");
  const _component_sub_item = resolveComponent("sub-item", true);
  const _component_el_sub_menu = resolveComponent("el-sub-menu");
  const _component_el_menu_item = resolveComponent("el-menu-item");
  return openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.chils, (val) => {
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
          createVNode(_component_sub_item, {
            chil: val.children
          }, null, 8, ["chil"])
        ]),
        _: 2
      }, 1032, ["index"])) : (openBlock(), createBlock(_component_el_menu_item, {
        index: val.path,
        key: val.path
      }, {
        default: withCtx(() => [
          !val.meta.isLink || val.meta.isLink && val.meta.isIframe ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
            createVNode(_component_SvgIcon, {
              name: val.meta.icon
            }, null, 8, ["name"]),
            createBaseVNode("span", null, toDisplayString(val.meta.title), 1)
          ], 64)) : (openBlock(), createElementBlock("a", {
            key: 1,
            href: val.meta.isLink,
            target: "_blank",
            rel: "opener",
            class: "w100"
          }, [
            createVNode(_component_SvgIcon, {
              name: val.meta.icon
            }, null, 8, ["name"]),
            createTextVNode(" " + toDisplayString(val.meta.title), 1)
          ], 8, _hoisted_1$a))
        ]),
        _: 2
      }, 1032, ["index"]))
    ], 64);
  }), 256);
}
var SubItem = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["render", _sfc_render$c], ["__file", "D:/demo/admin-template/src/layout/navMenu/subItem.vue"]]);
var breadcrumb_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$b = defineComponent({
  name: "layoutBreadcrumb",
  setup() {
    const stores = useRoutesList();
    const storesThemeConfig = useThemeConfig();
    const { themeConfig } = storeToRefs(storesThemeConfig);
    const { routesList } = storeToRefs(stores);
    const route = useRoute();
    const router = useRouter();
    const state = reactive({
      breadcrumbList: [],
      routeSplit: [],
      routeSplitFirst: "",
      routeSplitIndex: 1
    });
    const isShowBreadcrumb = computed(() => {
      initRouteSplit(route.path);
      const { layout, isBreadcrumb } = themeConfig.value;
      if (layout === "classic" || layout === "transverse")
        return false;
      else
        return isBreadcrumb ? true : false;
    });
    const onBreadcrumbClick = (v) => {
      const { redirect, path } = v;
      if (redirect)
        router.push(redirect);
      else
        router.push(path);
    };
    const onThemeConfigChange = () => {
      themeConfig.value.isCollapse = !themeConfig.value.isCollapse;
      setLocalThemeConfig();
    };
    const setLocalThemeConfig = () => {
      Local.remove("themeConfig");
      Local.set("themeConfig", themeConfig.value);
    };
    const getBreadcrumbList = (arr) => {
      arr.forEach((item) => {
        state.routeSplit.forEach((v, k, arrs) => {
          if (state.routeSplitFirst === item.path) {
            state.routeSplitFirst += `/${arrs[state.routeSplitIndex]}`;
            state.breadcrumbList.push(item);
            state.routeSplitIndex++;
            if (item.children)
              getBreadcrumbList(item.children);
          }
        });
      });
    };
    const initRouteSplit = (path) => {
      if (!themeConfig.value.isBreadcrumb)
        return false;
      state.breadcrumbList = [routesList.value[0]];
      state.routeSplit = path.split("/");
      state.routeSplit.shift();
      state.routeSplitFirst = `/${state.routeSplit[0]}`;
      state.routeSplitIndex = 1;
      getBreadcrumbList(routesList.value);
      if (route.name === "home" || route.name === "notFound" && state.breadcrumbList.length > 1)
        state.breadcrumbList.shift();
      if (state.breadcrumbList.length > 0)
        state.breadcrumbList[state.breadcrumbList.length - 1].meta.tagsViewName = other.setTagsViewNameI18n(route);
    };
    onMounted(() => {
      initRouteSplit(route.path);
    });
    onBeforeRouteUpdate((to) => {
      initRouteSplit(to.path);
    });
    return {
      onThemeConfigChange,
      isShowBreadcrumb,
      themeConfig,
      onBreadcrumbClick,
      ...toRefs(state)
    };
  }
});
const _hoisted_1$9 = {
  key: 0,
  class: "layout-navbars-breadcrumb"
};
const _hoisted_2$5 = {
  key: 0,
  class: "layout-navbars-breadcrumb-span"
};
const _hoisted_3$3 = { key: 1 };
const _hoisted_4$2 = { key: 2 };
const _hoisted_5$2 = ["onClick"];
function _sfc_render$b(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_SvgIcon = resolveComponent("SvgIcon");
  const _component_el_breadcrumb_item = resolveComponent("el-breadcrumb-item");
  const _component_el_breadcrumb = resolveComponent("el-breadcrumb");
  return _ctx.isShowBreadcrumb ? (openBlock(), createElementBlock("div", _hoisted_1$9, [
    createVNode(_component_SvgIcon, {
      class: "layout-navbars-breadcrumb-icon",
      name: _ctx.themeConfig.isCollapse ? "ele-Expand" : "ele-Fold",
      size: 16,
      onClick: _ctx.onThemeConfigChange
    }, null, 8, ["name", "onClick"]),
    createVNode(_component_el_breadcrumb, { class: "layout-navbars-breadcrumb-hide" }, {
      default: withCtx(() => [
        createVNode(TransitionGroup, { name: "breadcrumb" }, {
          default: withCtx(() => [
            (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.breadcrumbList, (v, k) => {
              return openBlock(), createBlock(_component_el_breadcrumb_item, {
                key: !v.meta.tagsViewName ? v.meta.title : v.meta.tagsViewName
              }, {
                default: withCtx(() => [
                  k === _ctx.breadcrumbList.length - 1 ? (openBlock(), createElementBlock("span", _hoisted_2$5, [
                    _ctx.themeConfig.isBreadcrumbIcon ? (openBlock(), createBlock(_component_SvgIcon, {
                      key: 0,
                      name: v.meta.icon,
                      class: "layout-navbars-breadcrumb-iconfont"
                    }, null, 8, ["name"])) : createCommentVNode("v-if", true),
                    !v.meta.tagsViewName ? (openBlock(), createElementBlock("div", _hoisted_3$3, toDisplayString(v.meta.title), 1)) : (openBlock(), createElementBlock("div", _hoisted_4$2, toDisplayString(v.meta.tagsViewName), 1))
                  ])) : (openBlock(), createElementBlock("a", {
                    key: 1,
                    onClick: withModifiers(($event) => _ctx.onBreadcrumbClick(v), ["prevent"])
                  }, [
                    _ctx.themeConfig.isBreadcrumbIcon ? (openBlock(), createBlock(_component_SvgIcon, {
                      key: 0,
                      name: v.meta.icon,
                      class: "layout-navbars-breadcrumb-iconfont"
                    }, null, 8, ["name"])) : createCommentVNode("v-if", true),
                    createTextVNode(toDisplayString(v.meta.title), 1)
                  ], 8, _hoisted_5$2))
                ]),
                _: 2
              }, 1024);
            }), 128))
          ]),
          _: 1
        })
      ]),
      _: 1
    })
  ])) : createCommentVNode("v-if", true);
}
var Breadcrumb = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["render", _sfc_render$b], ["__scopeId", "data-v-a68ffd92"], ["__file", "D:/demo/admin-template/src/layout/navBars/breadcrumb/breadcrumb.vue"]]);
const methodMap = [
  [
    "requestFullscreen",
    "exitFullscreen",
    "fullscreenElement",
    "fullscreenEnabled",
    "fullscreenchange",
    "fullscreenerror"
  ],
  [
    "webkitRequestFullscreen",
    "webkitExitFullscreen",
    "webkitFullscreenElement",
    "webkitFullscreenEnabled",
    "webkitfullscreenchange",
    "webkitfullscreenerror"
  ],
  [
    "webkitRequestFullScreen",
    "webkitCancelFullScreen",
    "webkitCurrentFullScreenElement",
    "webkitCancelFullScreen",
    "webkitfullscreenchange",
    "webkitfullscreenerror"
  ],
  [
    "mozRequestFullScreen",
    "mozCancelFullScreen",
    "mozFullScreenElement",
    "mozFullScreenEnabled",
    "mozfullscreenchange",
    "mozfullscreenerror"
  ],
  [
    "msRequestFullscreen",
    "msExitFullscreen",
    "msFullscreenElement",
    "msFullscreenEnabled",
    "MSFullscreenChange",
    "MSFullscreenError"
  ]
];
const nativeAPI = (() => {
  if (typeof document === "undefined") {
    return false;
  }
  const unprefixedMethods = methodMap[0];
  const returnValue = {};
  for (const methodList of methodMap) {
    const exitFullscreenMethod = methodList == null ? void 0 : methodList[1];
    if (exitFullscreenMethod in document) {
      for (const [index2, method] of methodList.entries()) {
        returnValue[unprefixedMethods[index2]] = method;
      }
      return returnValue;
    }
  }
  return false;
})();
const eventNameMap = {
  change: nativeAPI.fullscreenchange,
  error: nativeAPI.fullscreenerror
};
let screenfull = {
  request(element = document.documentElement, options) {
    return new Promise((resolve, reject) => {
      const onFullScreenEntered = () => {
        screenfull.off("change", onFullScreenEntered);
        resolve();
      };
      screenfull.on("change", onFullScreenEntered);
      const returnPromise = element[nativeAPI.requestFullscreen](options);
      if (returnPromise instanceof Promise) {
        returnPromise.then(onFullScreenEntered).catch(reject);
      }
    });
  },
  exit() {
    return new Promise((resolve, reject) => {
      if (!screenfull.isFullscreen) {
        resolve();
        return;
      }
      const onFullScreenExit = () => {
        screenfull.off("change", onFullScreenExit);
        resolve();
      };
      screenfull.on("change", onFullScreenExit);
      const returnPromise = document[nativeAPI.exitFullscreen]();
      if (returnPromise instanceof Promise) {
        returnPromise.then(onFullScreenExit).catch(reject);
      }
    });
  },
  toggle(element, options) {
    return screenfull.isFullscreen ? screenfull.exit() : screenfull.request(element, options);
  },
  onchange(callback) {
    screenfull.on("change", callback);
  },
  onerror(callback) {
    screenfull.on("error", callback);
  },
  on(event, callback) {
    const eventName = eventNameMap[event];
    if (eventName) {
      document.addEventListener(eventName, callback, false);
    }
  },
  off(event, callback) {
    const eventName = eventNameMap[event];
    if (eventName) {
      document.removeEventListener(eventName, callback, false);
    }
  },
  raw: nativeAPI
};
Object.defineProperties(screenfull, {
  isFullscreen: {
    get: () => Boolean(document[nativeAPI.fullscreenElement])
  },
  element: {
    enumerable: true,
    get: () => {
      var _a;
      return (_a = document[nativeAPI.fullscreenElement]) != null ? _a : void 0;
    }
  },
  isEnabled: {
    enumerable: true,
    get: () => Boolean(document[nativeAPI.fullscreenEnabled])
  }
});
if (!nativeAPI) {
  screenfull = { isEnabled: false };
}
var screenfull$1 = screenfull;
var userNews_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$a = defineComponent({
  name: "layoutBreadcrumbUserNews",
  setup() {
    const state = reactive({
      newsList: [
        {
          label: "\u7CFB\u7EDF\u901A\u77E5",
          value: "\u533B\u7597\u5668\u68B0\u4EA7\u4E1A\u7EFC\u5408\u6570\u636E\u7CFB\u7EDF\uFF0C\u5C06\u4E8E2022\u5E7412\u6708\u6B63\u5F0F\u53D1\u5E03",
          time: "\u65F6\u95F4\uFF1A2022-08-08"
        }
      ]
    });
    const onAllReadClick = () => {
      state.newsList = [];
    };
    const onGoToGiteeClick = () => {
    };
    return {
      onAllReadClick,
      onGoToGiteeClick,
      ...toRefs(state)
    };
  }
});
const _withScopeId$2 = (n) => (pushScopeId("data-v-6817c01c"), n = n(), popScopeId(), n);
const _hoisted_1$8 = { class: "layout-navbars-breadcrumb-user-news" };
const _hoisted_2$4 = { class: "head-box" };
const _hoisted_3$2 = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ createBaseVNode("div", { class: "head-box-title" }, "\u901A\u77E5", -1));
const _hoisted_4$1 = { class: "content-box" };
const _hoisted_5$1 = { class: "content-box-msg" };
const _hoisted_6$1 = { class: "content-box-time" };
function _sfc_render$a(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_empty = resolveComponent("el-empty");
  return openBlock(), createElementBlock("div", _hoisted_1$8, [
    createBaseVNode("div", _hoisted_2$4, [
      _hoisted_3$2,
      _ctx.newsList.length > 0 ? (openBlock(), createElementBlock("div", {
        key: 0,
        class: "head-box-btn",
        onClick: _cache[0] || (_cache[0] = (...args) => _ctx.onAllReadClick && _ctx.onAllReadClick(...args))
      }, "\u5168\u90E8\u5DF2\u8BFB")) : createCommentVNode("v-if", true)
    ]),
    createBaseVNode("div", _hoisted_4$1, [
      _ctx.newsList.length > 0 ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(_ctx.newsList, (v, k) => {
        return openBlock(), createElementBlock("div", {
          class: "content-box-item",
          key: k
        }, [
          createBaseVNode("div", null, toDisplayString(v.label), 1),
          createBaseVNode("div", _hoisted_5$1, toDisplayString(v.value), 1),
          createBaseVNode("div", _hoisted_6$1, toDisplayString(v.time), 1)
        ]);
      }), 128)) : (openBlock(), createBlock(_component_el_empty, {
        key: 1,
        description: "\u6682\u65E0\u901A\u77E5"
      }))
    ]),
    _ctx.newsList.length > 0 ? (openBlock(), createElementBlock("div", {
      key: 0,
      class: "foot-box",
      onClick: _cache[1] || (_cache[1] = (...args) => _ctx.onGoToGiteeClick && _ctx.onGoToGiteeClick(...args))
    }, "\u524D\u5F80\u901A\u77E5\u4E2D\u5FC3")) : createCommentVNode("v-if", true)
  ]);
}
var UserNews = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["render", _sfc_render$a], ["__scopeId", "data-v-6817c01c"], ["__file", "D:/demo/admin-template/src/layout/navBars/breadcrumb/userNews.vue"]]);
var search_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$9 = defineComponent({
  name: "layoutBreadcrumbSearch",
  setup() {
    const storesTagsViewRoutes = useTagsViewRoutes();
    const { tagsViewRoutes } = storeToRefs(storesTagsViewRoutes);
    const layoutMenuAutocompleteRef = ref();
    const router = useRouter();
    const state = reactive({
      isShowSearch: false,
      menuQuery: "",
      tagsViewList: []
    });
    const openSearch = () => {
      state.menuQuery = "";
      state.isShowSearch = true;
      initTageView();
      nextTick(() => {
        setTimeout(() => {
          layoutMenuAutocompleteRef.value.focus();
        });
      });
    };
    const closeSearch = () => {
      state.isShowSearch = false;
    };
    const menuSearch = (queryString, cb) => {
      let results = queryString ? state.tagsViewList.filter(createFilter(queryString)) : state.tagsViewList;
      cb(results);
    };
    const createFilter = (queryString) => {
      return (restaurant) => {
        return restaurant.path.toLowerCase().indexOf(queryString.toLowerCase()) > -1 || restaurant.meta.title.toLowerCase().indexOf(queryString.toLowerCase()) > -1 || restaurant.meta.title.indexOf(queryString.toLowerCase()) > -1;
      };
    };
    const initTageView = () => {
      if (state.tagsViewList.length > 0)
        return false;
      tagsViewRoutes.value.map((v) => {
        if (!v.meta.isHide)
          state.tagsViewList.push({ ...v });
      });
    };
    const onHandleSelect = (item) => {
      let { path, redirect } = item;
      if (item.meta.isLink && !item.meta.isIframe)
        window.open(item.meta.isLink);
      else if (redirect)
        router.push(redirect);
      else
        router.push(path);
      closeSearch();
    };
    const onSearchBlur = () => {
      closeSearch();
    };
    return {
      layoutMenuAutocompleteRef,
      openSearch,
      closeSearch,
      menuSearch,
      onHandleSelect,
      onSearchBlur,
      ...toRefs(state)
    };
  }
});
const _hoisted_1$7 = { class: "layout-search-dialog" };
function _sfc_render$9(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ele_Search = resolveComponent("ele-Search");
  const _component_el_icon = resolveComponent("el-icon");
  const _component_SvgIcon = resolveComponent("SvgIcon");
  const _component_el_autocomplete = resolveComponent("el-autocomplete");
  const _component_el_dialog = resolveComponent("el-dialog");
  return openBlock(), createElementBlock("div", _hoisted_1$7, [
    createVNode(_component_el_dialog, {
      modelValue: _ctx.isShowSearch,
      "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => _ctx.isShowSearch = $event),
      width: "300px",
      "destroy-on-close": "",
      modal: false,
      fullscreen: "",
      "show-close": false
    }, {
      default: withCtx(() => [
        createVNode(_component_el_autocomplete, {
          modelValue: _ctx.menuQuery,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.menuQuery = $event),
          "fetch-suggestions": _ctx.menuSearch,
          placeholder: "\u83DC\u5355\u641C\u7D22\uFF1A\u652F\u6301\u4E2D\u6587\u3001\u8DEF\u7531\u8DEF\u5F84",
          ref: "layoutMenuAutocompleteRef",
          onSelect: _ctx.onHandleSelect,
          onBlur: _ctx.onSearchBlur
        }, {
          prefix: withCtx(() => [
            createVNode(_component_el_icon, { class: "el-input__icon" }, {
              default: withCtx(() => [
                createVNode(_component_ele_Search)
              ]),
              _: 1
            })
          ]),
          default: withCtx(({ item }) => [
            createBaseVNode("div", null, [
              createVNode(_component_SvgIcon, {
                name: item.meta.icon,
                class: "mr5"
              }, null, 8, ["name"]),
              createTextVNode(" " + toDisplayString(item.meta.title), 1)
            ])
          ]),
          _: 1
        }, 8, ["modelValue", "fetch-suggestions", "onSelect", "onBlur"])
      ]),
      _: 1
    }, 8, ["modelValue"])
  ]);
}
var Search = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render$9], ["__scopeId", "data-v-63364a5c"], ["__file", "D:/demo/admin-template/src/layout/navBars/breadcrumb/search.vue"]]);
var user_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$8 = defineComponent({
  name: "layoutBreadcrumbUser",
  components: { UserNews, Search },
  setup() {
    const { proxy } = getCurrentInstance();
    const router = useRouter();
    const stores = useUserInfo();
    const storesThemeConfig = useThemeConfig();
    const { userInfos } = storeToRefs(stores);
    const { themeConfig } = storeToRefs(storesThemeConfig);
    const searchRef = ref();
    const state = reactive({
      isScreenfull: false,
      disabledI18n: "zh-cn",
      disabledSize: "large"
    });
    const layoutUserFlexNum = computed(() => {
      let num = "";
      const { layout, isClassicSplitMenu } = themeConfig.value;
      const layoutArr = ["defaults", "columns"];
      if (layoutArr.includes(layout) || layout === "classic" && !isClassicSplitMenu)
        num = "1";
      else
        num = "";
      return num;
    });
    const onScreenfullClick = () => {
      if (!screenfull$1.isEnabled) {
        ElMessage.warning("\u6682\u4E0D\u4E0D\u652F\u6301\u5168\u5C4F");
        return false;
      }
      screenfull$1.toggle();
      screenfull$1.on("change", () => {
        if (screenfull$1.isFullscreen)
          state.isScreenfull = true;
        else
          state.isScreenfull = false;
      });
    };
    const onLayoutSetingClick = () => {
      proxy.mittBus.emit("openSetingsDrawer");
    };
    const onHandleCommandClick = (path) => {
      if (path === "logOut") {
        ElMessageBox({
          closeOnClickModal: false,
          closeOnPressEscape: false,
          title: "\u63D0\u793A",
          message: "\u6B64\u64CD\u4F5C\u5C06\u9000\u51FA\u767B\u5F55, \u662F\u5426\u7EE7\u7EED?",
          showCancelButton: true,
          confirmButtonText: "\u786E\u5B9A",
          cancelButtonText: "\u53D6\u6D88",
          buttonSize: "default",
          beforeClose: (action, instance, done) => {
            if (action === "confirm") {
              instance.confirmButtonLoading = true;
              instance.confirmButtonText = "\u9000\u51FA\u4E2D";
              setTimeout(() => {
                done();
                setTimeout(() => {
                  instance.confirmButtonLoading = false;
                }, 300);
              }, 700);
            } else {
              done();
            }
          }
        }).then(async () => {
          Session.clear();
          window.location.reload();
        }).catch(() => {
        });
      } else {
        router.push(path);
      }
    };
    const onSearchClick = () => {
      searchRef.value.openSearch();
    };
    const onComponentSizeChange = (size) => {
      Local.remove("themeConfig");
      themeConfig.value.globalComponentSize = size;
      Local.set("themeConfig", themeConfig.value);
      initComponentSize();
      window.location.reload();
    };
    const initComponentSize = () => {
      switch (Local.get("themeConfig").globalComponentSize) {
        case "large":
          state.disabledSize = "large";
          break;
        case "default":
          state.disabledSize = "default";
          break;
        case "small":
          state.disabledSize = "small";
          break;
      }
    };
    onMounted(() => {
      if (Local.get("themeConfig")) {
        initComponentSize();
      }
    });
    return {
      userInfos,
      onLayoutSetingClick,
      onHandleCommandClick,
      onScreenfullClick,
      onSearchClick,
      onComponentSizeChange,
      searchRef,
      layoutUserFlexNum,
      ...toRefs(state)
    };
  }
});
const _withScopeId$1 = (n) => (pushScopeId("data-v-2dffddff"), n = n(), popScopeId(), n);
const _hoisted_1$6 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("div", { class: "layout-navbars-breadcrumb-user-icon" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    class: "iconfont icon-ziti",
    title: "\u7EC4\u4EF6\u5927\u5C0F"
  })
], -1));
const _hoisted_2$3 = /* @__PURE__ */ createTextVNode("\u5927\u578B");
const _hoisted_3$1 = /* @__PURE__ */ createTextVNode("\u9ED8\u8BA4");
const _hoisted_4 = /* @__PURE__ */ createTextVNode("\u5C0F\u578B");
const _hoisted_5 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("i", {
  class: "icon-skin iconfont",
  title: "\u5E03\u5C40\u914D\u7F6E"
}, null, -1));
const _hoisted_6 = [
  _hoisted_5
];
const _hoisted_7 = { class: "layout-navbars-breadcrumb-user-icon" };
const _hoisted_8 = ["title"];
const _hoisted_9 = { class: "layout-navbars-breadcrumb-user-link" };
const _hoisted_10 = ["src"];
const _hoisted_11 = /* @__PURE__ */ createTextVNode("\u9996\u9875");
const _hoisted_12 = /* @__PURE__ */ createTextVNode("404");
const _hoisted_13 = /* @__PURE__ */ createTextVNode("401");
const _hoisted_14 = /* @__PURE__ */ createTextVNode("\u9000\u51FA\u767B\u5F55");
function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_dropdown_item = resolveComponent("el-dropdown-item");
  const _component_el_dropdown_menu = resolveComponent("el-dropdown-menu");
  const _component_el_dropdown = resolveComponent("el-dropdown");
  const _component_ele_Search = resolveComponent("ele-Search");
  const _component_el_icon = resolveComponent("el-icon");
  const _component_ele_Bell = resolveComponent("ele-Bell");
  const _component_el_badge = resolveComponent("el-badge");
  const _component_UserNews = resolveComponent("UserNews");
  const _component_el_popover = resolveComponent("el-popover");
  const _component_ele_ArrowDown = resolveComponent("ele-ArrowDown");
  const _component_Search = resolveComponent("Search");
  return openBlock(), createElementBlock("div", {
    class: "layout-navbars-breadcrumb-user pr15",
    style: normalizeStyle({ flex: _ctx.layoutUserFlexNum })
  }, [
    createVNode(_component_el_dropdown, {
      "show-timeout": 70,
      "hide-timeout": 50,
      trigger: "click",
      onCommand: _ctx.onComponentSizeChange
    }, {
      dropdown: withCtx(() => [
        createVNode(_component_el_dropdown_menu, null, {
          default: withCtx(() => [
            createVNode(_component_el_dropdown_item, {
              command: "large",
              disabled: _ctx.disabledSize === "large"
            }, {
              default: withCtx(() => [
                _hoisted_2$3
              ]),
              _: 1
            }, 8, ["disabled"]),
            createVNode(_component_el_dropdown_item, {
              command: "default",
              disabled: _ctx.disabledSize === "default"
            }, {
              default: withCtx(() => [
                _hoisted_3$1
              ]),
              _: 1
            }, 8, ["disabled"]),
            createVNode(_component_el_dropdown_item, {
              command: "small",
              disabled: _ctx.disabledSize === "small"
            }, {
              default: withCtx(() => [
                _hoisted_4
              ]),
              _: 1
            }, 8, ["disabled"])
          ]),
          _: 1
        })
      ]),
      default: withCtx(() => [
        _hoisted_1$6
      ]),
      _: 1
    }, 8, ["onCommand"]),
    createBaseVNode("div", {
      class: "layout-navbars-breadcrumb-user-icon",
      onClick: _cache[0] || (_cache[0] = (...args) => _ctx.onSearchClick && _ctx.onSearchClick(...args))
    }, [
      createVNode(_component_el_icon, { title: "\u83DC\u5355\u641C\u7D22" }, {
        default: withCtx(() => [
          createVNode(_component_ele_Search)
        ]),
        _: 1
      })
    ]),
    createBaseVNode("div", {
      class: "layout-navbars-breadcrumb-user-icon",
      onClick: _cache[1] || (_cache[1] = (...args) => _ctx.onLayoutSetingClick && _ctx.onLayoutSetingClick(...args))
    }, _hoisted_6),
    createBaseVNode("div", _hoisted_7, [
      createVNode(_component_el_popover, {
        placement: "bottom",
        trigger: "click",
        transition: "el-zoom-in-top",
        width: 300,
        persistent: false
      }, {
        reference: withCtx(() => [
          createVNode(_component_el_badge, { "is-dot": true }, {
            default: withCtx(() => [
              createVNode(_component_el_icon, { title: "\u6D88\u606F" }, {
                default: withCtx(() => [
                  createVNode(_component_ele_Bell)
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        default: withCtx(() => [
          createVNode(_component_UserNews)
        ]),
        _: 1
      })
    ]),
    createBaseVNode("div", {
      class: "layout-navbars-breadcrumb-user-icon mr10",
      onClick: _cache[2] || (_cache[2] = (...args) => _ctx.onScreenfullClick && _ctx.onScreenfullClick(...args))
    }, [
      createBaseVNode("i", {
        class: normalizeClass(["iconfont", !_ctx.isScreenfull ? "icon-fullscreen" : "icon-tuichuquanping"]),
        title: _ctx.isScreenfull ? "\u5173\u5168\u5C4F" : "\u5F00\u5168\u5C4F"
      }, null, 10, _hoisted_8)
    ]),
    createVNode(_component_el_dropdown, {
      "show-timeout": 70,
      "hide-timeout": 50,
      onCommand: _ctx.onHandleCommandClick
    }, {
      dropdown: withCtx(() => [
        createVNode(_component_el_dropdown_menu, null, {
          default: withCtx(() => [
            createVNode(_component_el_dropdown_item, { command: "/home" }, {
              default: withCtx(() => [
                _hoisted_11
              ]),
              _: 1
            }),
            createVNode(_component_el_dropdown_item, { command: "/404" }, {
              default: withCtx(() => [
                _hoisted_12
              ]),
              _: 1
            }),
            createVNode(_component_el_dropdown_item, { command: "/401" }, {
              default: withCtx(() => [
                _hoisted_13
              ]),
              _: 1
            }),
            createVNode(_component_el_dropdown_item, {
              divided: "",
              command: "logOut"
            }, {
              default: withCtx(() => [
                _hoisted_14
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      default: withCtx(() => [
        createBaseVNode("span", _hoisted_9, [
          createBaseVNode("img", {
            src: _ctx.userInfos.photo,
            class: "layout-navbars-breadcrumb-user-link-photo mr5"
          }, null, 8, _hoisted_10),
          createTextVNode(" " + toDisplayString(_ctx.userInfos.userName === "" ? "common" : _ctx.userInfos.userName) + " ", 1),
          createVNode(_component_el_icon, { class: "el-icon--right" }, {
            default: withCtx(() => [
              createVNode(_component_ele_ArrowDown)
            ]),
            _: 1
          })
        ])
      ]),
      _: 1
    }, 8, ["onCommand"]),
    createVNode(_component_Search, { ref: "searchRef" }, null, 512)
  ], 4);
}
var User = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$8], ["__scopeId", "data-v-2dffddff"], ["__file", "D:/demo/admin-template/src/layout/navBars/breadcrumb/user.vue"]]);
var horizontal_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$7 = defineComponent({
  name: "navMenuHorizontal",
  components: { SubItem },
  props: {
    menuList: {
      type: Array,
      default: () => []
    }
  },
  setup(props) {
    const { proxy } = getCurrentInstance();
    const stores = useRoutesList();
    const storesThemeConfig = useThemeConfig();
    const { routesList } = storeToRefs(stores);
    const { themeConfig } = storeToRefs(storesThemeConfig);
    const route = useRoute();
    const state = reactive({
      defaultActive: null
    });
    const menuLists = computed(() => {
      return props.menuList;
    });
    const onElMenuHorizontalScroll = (e) => {
      const eventDelta = e.wheelDelta || -e.deltaY * 40;
      proxy.$refs.elMenuHorizontalScrollRef.$refs.wrap$.scrollLeft = proxy.$refs.elMenuHorizontalScrollRef.$refs.wrap$.scrollLeft + eventDelta / 4;
    };
    const initElMenuOffsetLeft = () => {
      nextTick(() => {
        let els = document.querySelector(".el-menu.el-menu--horizontal li.is-active");
        if (!els)
          return false;
        proxy.$refs.elMenuHorizontalScrollRef.$refs.wrap$.scrollLeft = els.offsetLeft;
      });
    };
    const filterRoutesFun = (arr) => {
      return arr.filter((item) => !item.meta.isHide).map((item) => {
        item = Object.assign({}, item);
        if (item.children)
          item.children = filterRoutesFun(item.children);
        return item;
      });
    };
    const setSendClassicChildren = (path) => {
      const currentPathSplit = path.split("/");
      let currentData = {};
      filterRoutesFun(routesList.value).map((v, k) => {
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
    const setCurrentRouterHighlight = (currentRoute) => {
      const { path, meta } = currentRoute;
      if (themeConfig.value.layout === "classic") {
        state.defaultActive = `/${path.split("/")[1]}`;
      } else {
        const pathSplit = meta.isDynamic ? meta.isDynamicPath.split("/") : path.split("/");
        if (pathSplit.length >= 4 && meta.isHide)
          state.defaultActive = pathSplit.splice(0, 3).join("/");
        else
          state.defaultActive = path;
      }
    };
    onBeforeMount(() => {
      setCurrentRouterHighlight(route);
    });
    onMounted(() => {
      initElMenuOffsetLeft();
    });
    onBeforeRouteUpdate((to) => {
      setCurrentRouterHighlight(to);
      let { layout, isClassicSplitMenu } = themeConfig.value;
      if (layout === "classic" && isClassicSplitMenu) {
        proxy.mittBus.emit("setSendClassicChildren", setSendClassicChildren(to.path));
      }
    });
    return {
      menuLists,
      onElMenuHorizontalScroll,
      ...toRefs(state)
    };
  }
});
const _hoisted_1$5 = { class: "el-menu-horizontal-warp" };
function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_SvgIcon = resolveComponent("SvgIcon");
  const _component_SubItem = resolveComponent("SubItem");
  const _component_el_sub_menu = resolveComponent("el-sub-menu");
  const _component_el_menu_item = resolveComponent("el-menu-item");
  const _component_el_menu = resolveComponent("el-menu");
  const _component_el_scrollbar = resolveComponent("el-scrollbar");
  return openBlock(), createElementBlock("div", _hoisted_1$5, [
    createVNode(_component_el_scrollbar, {
      onWheel: withModifiers(_ctx.onElMenuHorizontalScroll, ["prevent"]),
      ref: "elMenuHorizontalScrollRef"
    }, {
      default: withCtx(() => [
        createVNode(_component_el_menu, {
          router: "",
          "default-active": _ctx.defaultActive,
          ellipsis: false,
          "background-color": "transparent",
          mode: "horizontal"
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
                }, createSlots({ _: 2 }, [
                  !val.meta.isLink || val.meta.isLink && val.meta.isIframe ? {
                    name: "title",
                    fn: withCtx(() => [
                      createVNode(_component_SvgIcon, {
                        name: val.meta.icon
                      }, null, 8, ["name"]),
                      createTextVNode(" " + toDisplayString(val.meta.title), 1)
                    ])
                  } : {
                    name: "title",
                    fn: withCtx(() => [
                      createBaseVNode("a", {
                        href: val.meta.isLink,
                        target: "_blank",
                        rel: "opener",
                        class: "w100"
                      }, [
                        createVNode(_component_SvgIcon, {
                          name: val.meta.icon
                        }, null, 8, ["name"]),
                        createTextVNode(" " + toDisplayString(val.meta.title), 1)
                      ], 8, ["href"])
                    ])
                  }
                ]), 1032, ["index"]))
              ], 64);
            }), 256))
          ]),
          _: 1
        }, 8, ["default-active"])
      ]),
      _: 1
    }, 8, ["onWheel"])
  ]);
}
var Horizontal = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$7], ["__scopeId", "data-v-b7124ca6"], ["__file", "D:/demo/admin-template/src/layout/navMenu/horizontal.vue"]]);
var index_vue_vue_type_style_index_0_scoped_true_lang$2 = "";
const _sfc_main$6 = defineComponent({
  name: "layoutBreadcrumbIndex",
  components: { Breadcrumb, User, Logo, Horizontal },
  setup() {
    const { proxy } = getCurrentInstance();
    const stores = useRoutesList();
    const storesThemeConfig = useThemeConfig();
    const { themeConfig } = storeToRefs(storesThemeConfig);
    const { routesList } = storeToRefs(stores);
    const route = useRoute();
    const state = reactive({
      menuList: []
    });
    const setIsShowLogo = computed(() => {
      let { isShowLogo, layout } = themeConfig.value;
      return isShowLogo && layout === "classic" || isShowLogo && layout === "transverse";
    });
    const isLayoutTransverse = computed(() => {
      let { layout, isClassicSplitMenu } = themeConfig.value;
      return layout === "transverse" || isClassicSplitMenu && layout === "classic";
    });
    const setFilterRoutes = () => {
      let { layout, isClassicSplitMenu } = themeConfig.value;
      if (layout === "classic" && isClassicSplitMenu) {
        state.menuList = delClassicChildren(filterRoutesFun(routesList.value));
        const resData = setSendClassicChildren(route.path);
        proxy.mittBus.emit("setSendClassicChildren", resData);
      } else {
        state.menuList = filterRoutesFun(routesList.value);
      }
    };
    const delClassicChildren = (arr) => {
      arr.map((v) => {
        if (v.children)
          delete v.children;
      });
      return arr;
    };
    const filterRoutesFun = (arr) => {
      return arr.filter((item) => !item.meta.isHide).map((item) => {
        item = Object.assign({}, item);
        if (item.children)
          item.children = filterRoutesFun(item.children);
        return item;
      });
    };
    const setSendClassicChildren = (path) => {
      const currentPathSplit = path.split("/");
      let currentData = {};
      filterRoutesFun(routesList.value).map((v, k) => {
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
    onMounted(() => {
      setFilterRoutes();
      proxy.mittBus.on("getBreadcrumbIndexSetFilterRoutes", () => {
        setFilterRoutes();
      });
    });
    onUnmounted(() => {
      proxy.mittBus.off("getBreadcrumbIndexSetFilterRoutes", () => {
      });
    });
    return {
      setIsShowLogo,
      isLayoutTransverse,
      ...toRefs(state)
    };
  }
});
const _hoisted_1$4 = { class: "layout-navbars-breadcrumb-index" };
function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Logo = resolveComponent("Logo");
  const _component_Breadcrumb = resolveComponent("Breadcrumb");
  const _component_Horizontal = resolveComponent("Horizontal");
  const _component_User = resolveComponent("User");
  return openBlock(), createElementBlock("div", _hoisted_1$4, [
    _ctx.setIsShowLogo ? (openBlock(), createBlock(_component_Logo, { key: 0 })) : createCommentVNode("v-if", true),
    createVNode(_component_Breadcrumb),
    _ctx.isLayoutTransverse ? (openBlock(), createBlock(_component_Horizontal, {
      key: 1,
      menuList: _ctx.menuList
    }, null, 8, ["menuList"])) : createCommentVNode("v-if", true),
    createVNode(_component_User)
  ]);
}
var BreadcrumbIndex = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$6], ["__scopeId", "data-v-503da8ce"], ["__file", "D:/demo/admin-template/src/layout/navBars/breadcrumb/index.vue"]]);
/**!
* Sortable 1.15.0
* @author	RubaXa   <trash@rubaxa.org>
* @author	owenm    <owen23355@gmail.com>
* @license MIT
*/
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) {
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys(Object(source), true).forEach(function(key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
function _typeof(obj) {
  "@babel/helpers - typeof";
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function(obj2) {
      return typeof obj2;
    };
  } else {
    _typeof = function(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
  }
  return _typeof(obj);
}
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _extends() {
  _extends = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
function _objectWithoutProperties(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
var version = "1.15.0";
function userAgent(pattern) {
  if (typeof window !== "undefined" && window.navigator) {
    return !!/* @__PURE__ */ navigator.userAgent.match(pattern);
  }
}
var IE11OrLess = userAgent(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i);
var Edge = userAgent(/Edge/i);
var FireFox = userAgent(/firefox/i);
var Safari = userAgent(/safari/i) && !userAgent(/chrome/i) && !userAgent(/android/i);
var IOS = userAgent(/iP(ad|od|hone)/i);
var ChromeForAndroid = userAgent(/chrome/i) && userAgent(/android/i);
var captureMode = {
  capture: false,
  passive: false
};
function on(el, event, fn) {
  el.addEventListener(event, fn, !IE11OrLess && captureMode);
}
function off(el, event, fn) {
  el.removeEventListener(event, fn, !IE11OrLess && captureMode);
}
function matches(el, selector) {
  if (!selector)
    return;
  selector[0] === ">" && (selector = selector.substring(1));
  if (el) {
    try {
      if (el.matches) {
        return el.matches(selector);
      } else if (el.msMatchesSelector) {
        return el.msMatchesSelector(selector);
      } else if (el.webkitMatchesSelector) {
        return el.webkitMatchesSelector(selector);
      }
    } catch (_) {
      return false;
    }
  }
  return false;
}
function getParentOrHost(el) {
  return el.host && el !== document && el.host.nodeType ? el.host : el.parentNode;
}
function closest(el, selector, ctx, includeCTX) {
  if (el) {
    ctx = ctx || document;
    do {
      if (selector != null && (selector[0] === ">" ? el.parentNode === ctx && matches(el, selector) : matches(el, selector)) || includeCTX && el === ctx) {
        return el;
      }
      if (el === ctx)
        break;
    } while (el = getParentOrHost(el));
  }
  return null;
}
var R_SPACE = /\s+/g;
function toggleClass(el, name, state) {
  if (el && name) {
    if (el.classList) {
      el.classList[state ? "add" : "remove"](name);
    } else {
      var className = (" " + el.className + " ").replace(R_SPACE, " ").replace(" " + name + " ", " ");
      el.className = (className + (state ? " " + name : "")).replace(R_SPACE, " ");
    }
  }
}
function css(el, prop, val) {
  var style = el && el.style;
  if (style) {
    if (val === void 0) {
      if (document.defaultView && document.defaultView.getComputedStyle) {
        val = document.defaultView.getComputedStyle(el, "");
      } else if (el.currentStyle) {
        val = el.currentStyle;
      }
      return prop === void 0 ? val : val[prop];
    } else {
      if (!(prop in style) && prop.indexOf("webkit") === -1) {
        prop = "-webkit-" + prop;
      }
      style[prop] = val + (typeof val === "string" ? "" : "px");
    }
  }
}
function matrix(el, selfOnly) {
  var appliedTransforms = "";
  if (typeof el === "string") {
    appliedTransforms = el;
  } else {
    do {
      var transform = css(el, "transform");
      if (transform && transform !== "none") {
        appliedTransforms = transform + " " + appliedTransforms;
      }
    } while (!selfOnly && (el = el.parentNode));
  }
  var matrixFn = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
  return matrixFn && new matrixFn(appliedTransforms);
}
function find(ctx, tagName, iterator) {
  if (ctx) {
    var list = ctx.getElementsByTagName(tagName), i = 0, n = list.length;
    if (iterator) {
      for (; i < n; i++) {
        iterator(list[i], i);
      }
    }
    return list;
  }
  return [];
}
function getWindowScrollingElement() {
  var scrollingElement = document.scrollingElement;
  if (scrollingElement) {
    return scrollingElement;
  } else {
    return document.documentElement;
  }
}
function getRect(el, relativeToContainingBlock, relativeToNonStaticParent, undoScale, container) {
  if (!el.getBoundingClientRect && el !== window)
    return;
  var elRect, top, left, bottom, right, height, width;
  if (el !== window && el.parentNode && el !== getWindowScrollingElement()) {
    elRect = el.getBoundingClientRect();
    top = elRect.top;
    left = elRect.left;
    bottom = elRect.bottom;
    right = elRect.right;
    height = elRect.height;
    width = elRect.width;
  } else {
    top = 0;
    left = 0;
    bottom = window.innerHeight;
    right = window.innerWidth;
    height = window.innerHeight;
    width = window.innerWidth;
  }
  if ((relativeToContainingBlock || relativeToNonStaticParent) && el !== window) {
    container = container || el.parentNode;
    if (!IE11OrLess) {
      do {
        if (container && container.getBoundingClientRect && (css(container, "transform") !== "none" || relativeToNonStaticParent && css(container, "position") !== "static")) {
          var containerRect = container.getBoundingClientRect();
          top -= containerRect.top + parseInt(css(container, "border-top-width"));
          left -= containerRect.left + parseInt(css(container, "border-left-width"));
          bottom = top + elRect.height;
          right = left + elRect.width;
          break;
        }
      } while (container = container.parentNode);
    }
  }
  if (undoScale && el !== window) {
    var elMatrix = matrix(container || el), scaleX = elMatrix && elMatrix.a, scaleY = elMatrix && elMatrix.d;
    if (elMatrix) {
      top /= scaleY;
      left /= scaleX;
      width /= scaleX;
      height /= scaleY;
      bottom = top + height;
      right = left + width;
    }
  }
  return {
    top,
    left,
    bottom,
    right,
    width,
    height
  };
}
function isScrolledPast(el, elSide, parentSide) {
  var parent = getParentAutoScrollElement(el, true), elSideVal = getRect(el)[elSide];
  while (parent) {
    var parentSideVal = getRect(parent)[parentSide], visible = void 0;
    if (parentSide === "top" || parentSide === "left") {
      visible = elSideVal >= parentSideVal;
    } else {
      visible = elSideVal <= parentSideVal;
    }
    if (!visible)
      return parent;
    if (parent === getWindowScrollingElement())
      break;
    parent = getParentAutoScrollElement(parent, false);
  }
  return false;
}
function getChild(el, childNum, options, includeDragEl) {
  var currentChild = 0, i = 0, children = el.children;
  while (i < children.length) {
    if (children[i].style.display !== "none" && children[i] !== Sortable.ghost && (includeDragEl || children[i] !== Sortable.dragged) && closest(children[i], options.draggable, el, false)) {
      if (currentChild === childNum) {
        return children[i];
      }
      currentChild++;
    }
    i++;
  }
  return null;
}
function lastChild(el, selector) {
  var last = el.lastElementChild;
  while (last && (last === Sortable.ghost || css(last, "display") === "none" || selector && !matches(last, selector))) {
    last = last.previousElementSibling;
  }
  return last || null;
}
function index(el, selector) {
  var index2 = 0;
  if (!el || !el.parentNode) {
    return -1;
  }
  while (el = el.previousElementSibling) {
    if (el.nodeName.toUpperCase() !== "TEMPLATE" && el !== Sortable.clone && (!selector || matches(el, selector))) {
      index2++;
    }
  }
  return index2;
}
function getRelativeScrollOffset(el) {
  var offsetLeft = 0, offsetTop = 0, winScroller = getWindowScrollingElement();
  if (el) {
    do {
      var elMatrix = matrix(el), scaleX = elMatrix.a, scaleY = elMatrix.d;
      offsetLeft += el.scrollLeft * scaleX;
      offsetTop += el.scrollTop * scaleY;
    } while (el !== winScroller && (el = el.parentNode));
  }
  return [offsetLeft, offsetTop];
}
function indexOfObject(arr, obj) {
  for (var i in arr) {
    if (!arr.hasOwnProperty(i))
      continue;
    for (var key in obj) {
      if (obj.hasOwnProperty(key) && obj[key] === arr[i][key])
        return Number(i);
    }
  }
  return -1;
}
function getParentAutoScrollElement(el, includeSelf) {
  if (!el || !el.getBoundingClientRect)
    return getWindowScrollingElement();
  var elem = el;
  var gotSelf = false;
  do {
    if (elem.clientWidth < elem.scrollWidth || elem.clientHeight < elem.scrollHeight) {
      var elemCSS = css(elem);
      if (elem.clientWidth < elem.scrollWidth && (elemCSS.overflowX == "auto" || elemCSS.overflowX == "scroll") || elem.clientHeight < elem.scrollHeight && (elemCSS.overflowY == "auto" || elemCSS.overflowY == "scroll")) {
        if (!elem.getBoundingClientRect || elem === document.body)
          return getWindowScrollingElement();
        if (gotSelf || includeSelf)
          return elem;
        gotSelf = true;
      }
    }
  } while (elem = elem.parentNode);
  return getWindowScrollingElement();
}
function extend(dst, src) {
  if (dst && src) {
    for (var key in src) {
      if (src.hasOwnProperty(key)) {
        dst[key] = src[key];
      }
    }
  }
  return dst;
}
function isRectEqual(rect1, rect2) {
  return Math.round(rect1.top) === Math.round(rect2.top) && Math.round(rect1.left) === Math.round(rect2.left) && Math.round(rect1.height) === Math.round(rect2.height) && Math.round(rect1.width) === Math.round(rect2.width);
}
var _throttleTimeout;
function throttle(callback, ms) {
  return function() {
    if (!_throttleTimeout) {
      var args = arguments, _this = this;
      if (args.length === 1) {
        callback.call(_this, args[0]);
      } else {
        callback.apply(_this, args);
      }
      _throttleTimeout = setTimeout(function() {
        _throttleTimeout = void 0;
      }, ms);
    }
  };
}
function cancelThrottle() {
  clearTimeout(_throttleTimeout);
  _throttleTimeout = void 0;
}
function scrollBy(el, x, y) {
  el.scrollLeft += x;
  el.scrollTop += y;
}
function clone(el) {
  var Polymer = window.Polymer;
  var $ = window.jQuery || window.Zepto;
  if (Polymer && Polymer.dom) {
    return Polymer.dom(el).cloneNode(true);
  } else if ($) {
    return $(el).clone(true)[0];
  } else {
    return el.cloneNode(true);
  }
}
var expando = "Sortable" + new Date().getTime();
function AnimationStateManager() {
  var animationStates = [], animationCallbackId;
  return {
    captureAnimationState: function captureAnimationState() {
      animationStates = [];
      if (!this.options.animation)
        return;
      var children = [].slice.call(this.el.children);
      children.forEach(function(child) {
        if (css(child, "display") === "none" || child === Sortable.ghost)
          return;
        animationStates.push({
          target: child,
          rect: getRect(child)
        });
        var fromRect = _objectSpread2({}, animationStates[animationStates.length - 1].rect);
        if (child.thisAnimationDuration) {
          var childMatrix = matrix(child, true);
          if (childMatrix) {
            fromRect.top -= childMatrix.f;
            fromRect.left -= childMatrix.e;
          }
        }
        child.fromRect = fromRect;
      });
    },
    addAnimationState: function addAnimationState(state) {
      animationStates.push(state);
    },
    removeAnimationState: function removeAnimationState(target) {
      animationStates.splice(indexOfObject(animationStates, {
        target
      }), 1);
    },
    animateAll: function animateAll(callback) {
      var _this = this;
      if (!this.options.animation) {
        clearTimeout(animationCallbackId);
        if (typeof callback === "function")
          callback();
        return;
      }
      var animating = false, animationTime = 0;
      animationStates.forEach(function(state) {
        var time = 0, target = state.target, fromRect = target.fromRect, toRect = getRect(target), prevFromRect = target.prevFromRect, prevToRect = target.prevToRect, animatingRect = state.rect, targetMatrix = matrix(target, true);
        if (targetMatrix) {
          toRect.top -= targetMatrix.f;
          toRect.left -= targetMatrix.e;
        }
        target.toRect = toRect;
        if (target.thisAnimationDuration) {
          if (isRectEqual(prevFromRect, toRect) && !isRectEqual(fromRect, toRect) && (animatingRect.top - toRect.top) / (animatingRect.left - toRect.left) === (fromRect.top - toRect.top) / (fromRect.left - toRect.left)) {
            time = calculateRealTime(animatingRect, prevFromRect, prevToRect, _this.options);
          }
        }
        if (!isRectEqual(toRect, fromRect)) {
          target.prevFromRect = fromRect;
          target.prevToRect = toRect;
          if (!time) {
            time = _this.options.animation;
          }
          _this.animate(target, animatingRect, toRect, time);
        }
        if (time) {
          animating = true;
          animationTime = Math.max(animationTime, time);
          clearTimeout(target.animationResetTimer);
          target.animationResetTimer = setTimeout(function() {
            target.animationTime = 0;
            target.prevFromRect = null;
            target.fromRect = null;
            target.prevToRect = null;
            target.thisAnimationDuration = null;
          }, time);
          target.thisAnimationDuration = time;
        }
      });
      clearTimeout(animationCallbackId);
      if (!animating) {
        if (typeof callback === "function")
          callback();
      } else {
        animationCallbackId = setTimeout(function() {
          if (typeof callback === "function")
            callback();
        }, animationTime);
      }
      animationStates = [];
    },
    animate: function animate(target, currentRect, toRect, duration) {
      if (duration) {
        css(target, "transition", "");
        css(target, "transform", "");
        var elMatrix = matrix(this.el), scaleX = elMatrix && elMatrix.a, scaleY = elMatrix && elMatrix.d, translateX = (currentRect.left - toRect.left) / (scaleX || 1), translateY = (currentRect.top - toRect.top) / (scaleY || 1);
        target.animatingX = !!translateX;
        target.animatingY = !!translateY;
        css(target, "transform", "translate3d(" + translateX + "px," + translateY + "px,0)");
        this.forRepaintDummy = repaint(target);
        css(target, "transition", "transform " + duration + "ms" + (this.options.easing ? " " + this.options.easing : ""));
        css(target, "transform", "translate3d(0,0,0)");
        typeof target.animated === "number" && clearTimeout(target.animated);
        target.animated = setTimeout(function() {
          css(target, "transition", "");
          css(target, "transform", "");
          target.animated = false;
          target.animatingX = false;
          target.animatingY = false;
        }, duration);
      }
    }
  };
}
function repaint(target) {
  return target.offsetWidth;
}
function calculateRealTime(animatingRect, fromRect, toRect, options) {
  return Math.sqrt(Math.pow(fromRect.top - animatingRect.top, 2) + Math.pow(fromRect.left - animatingRect.left, 2)) / Math.sqrt(Math.pow(fromRect.top - toRect.top, 2) + Math.pow(fromRect.left - toRect.left, 2)) * options.animation;
}
var plugins = [];
var defaults = {
  initializeByDefault: true
};
var PluginManager = {
  mount: function mount(plugin) {
    for (var option2 in defaults) {
      if (defaults.hasOwnProperty(option2) && !(option2 in plugin)) {
        plugin[option2] = defaults[option2];
      }
    }
    plugins.forEach(function(p) {
      if (p.pluginName === plugin.pluginName) {
        throw "Sortable: Cannot mount plugin ".concat(plugin.pluginName, " more than once");
      }
    });
    plugins.push(plugin);
  },
  pluginEvent: function pluginEvent(eventName, sortable, evt) {
    var _this = this;
    this.eventCanceled = false;
    evt.cancel = function() {
      _this.eventCanceled = true;
    };
    var eventNameGlobal = eventName + "Global";
    plugins.forEach(function(plugin) {
      if (!sortable[plugin.pluginName])
        return;
      if (sortable[plugin.pluginName][eventNameGlobal]) {
        sortable[plugin.pluginName][eventNameGlobal](_objectSpread2({
          sortable
        }, evt));
      }
      if (sortable.options[plugin.pluginName] && sortable[plugin.pluginName][eventName]) {
        sortable[plugin.pluginName][eventName](_objectSpread2({
          sortable
        }, evt));
      }
    });
  },
  initializePlugins: function initializePlugins(sortable, el, defaults2, options) {
    plugins.forEach(function(plugin) {
      var pluginName = plugin.pluginName;
      if (!sortable.options[pluginName] && !plugin.initializeByDefault)
        return;
      var initialized = new plugin(sortable, el, sortable.options);
      initialized.sortable = sortable;
      initialized.options = sortable.options;
      sortable[pluginName] = initialized;
      _extends(defaults2, initialized.defaults);
    });
    for (var option2 in sortable.options) {
      if (!sortable.options.hasOwnProperty(option2))
        continue;
      var modified = this.modifyOption(sortable, option2, sortable.options[option2]);
      if (typeof modified !== "undefined") {
        sortable.options[option2] = modified;
      }
    }
  },
  getEventProperties: function getEventProperties(name, sortable) {
    var eventProperties = {};
    plugins.forEach(function(plugin) {
      if (typeof plugin.eventProperties !== "function")
        return;
      _extends(eventProperties, plugin.eventProperties.call(sortable[plugin.pluginName], name));
    });
    return eventProperties;
  },
  modifyOption: function modifyOption(sortable, name, value) {
    var modifiedValue;
    plugins.forEach(function(plugin) {
      if (!sortable[plugin.pluginName])
        return;
      if (plugin.optionListeners && typeof plugin.optionListeners[name] === "function") {
        modifiedValue = plugin.optionListeners[name].call(sortable[plugin.pluginName], value);
      }
    });
    return modifiedValue;
  }
};
function dispatchEvent(_ref) {
  var sortable = _ref.sortable, rootEl2 = _ref.rootEl, name = _ref.name, targetEl = _ref.targetEl, cloneEl2 = _ref.cloneEl, toEl = _ref.toEl, fromEl = _ref.fromEl, oldIndex2 = _ref.oldIndex, newIndex2 = _ref.newIndex, oldDraggableIndex2 = _ref.oldDraggableIndex, newDraggableIndex2 = _ref.newDraggableIndex, originalEvent = _ref.originalEvent, putSortable2 = _ref.putSortable, extraEventProperties = _ref.extraEventProperties;
  sortable = sortable || rootEl2 && rootEl2[expando];
  if (!sortable)
    return;
  var evt, options = sortable.options, onName = "on" + name.charAt(0).toUpperCase() + name.substr(1);
  if (window.CustomEvent && !IE11OrLess && !Edge) {
    evt = new CustomEvent(name, {
      bubbles: true,
      cancelable: true
    });
  } else {
    evt = document.createEvent("Event");
    evt.initEvent(name, true, true);
  }
  evt.to = toEl || rootEl2;
  evt.from = fromEl || rootEl2;
  evt.item = targetEl || rootEl2;
  evt.clone = cloneEl2;
  evt.oldIndex = oldIndex2;
  evt.newIndex = newIndex2;
  evt.oldDraggableIndex = oldDraggableIndex2;
  evt.newDraggableIndex = newDraggableIndex2;
  evt.originalEvent = originalEvent;
  evt.pullMode = putSortable2 ? putSortable2.lastPutMode : void 0;
  var allEventProperties = _objectSpread2(_objectSpread2({}, extraEventProperties), PluginManager.getEventProperties(name, sortable));
  for (var option2 in allEventProperties) {
    evt[option2] = allEventProperties[option2];
  }
  if (rootEl2) {
    rootEl2.dispatchEvent(evt);
  }
  if (options[onName]) {
    options[onName].call(sortable, evt);
  }
}
var _excluded = ["evt"];
var pluginEvent2 = function pluginEvent3(eventName, sortable) {
  var _ref = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, originalEvent = _ref.evt, data = _objectWithoutProperties(_ref, _excluded);
  PluginManager.pluginEvent.bind(Sortable)(eventName, sortable, _objectSpread2({
    dragEl,
    parentEl,
    ghostEl,
    rootEl,
    nextEl,
    lastDownEl,
    cloneEl,
    cloneHidden,
    dragStarted: moved,
    putSortable,
    activeSortable: Sortable.active,
    originalEvent,
    oldIndex,
    oldDraggableIndex,
    newIndex,
    newDraggableIndex,
    hideGhostForTarget: _hideGhostForTarget,
    unhideGhostForTarget: _unhideGhostForTarget,
    cloneNowHidden: function cloneNowHidden() {
      cloneHidden = true;
    },
    cloneNowShown: function cloneNowShown() {
      cloneHidden = false;
    },
    dispatchSortableEvent: function dispatchSortableEvent(name) {
      _dispatchEvent({
        sortable,
        name,
        originalEvent
      });
    }
  }, data));
};
function _dispatchEvent(info) {
  dispatchEvent(_objectSpread2({
    putSortable,
    cloneEl,
    targetEl: dragEl,
    rootEl,
    oldIndex,
    oldDraggableIndex,
    newIndex,
    newDraggableIndex
  }, info));
}
var dragEl, parentEl, ghostEl, rootEl, nextEl, lastDownEl, cloneEl, cloneHidden, oldIndex, newIndex, oldDraggableIndex, newDraggableIndex, activeGroup, putSortable, awaitingDragStarted = false, ignoreNextClick = false, sortables = [], tapEvt, touchEvt, lastDx, lastDy, tapDistanceLeft, tapDistanceTop, moved, lastTarget, lastDirection, pastFirstInvertThresh = false, isCircumstantialInvert = false, targetMoveDistance, ghostRelativeParent, ghostRelativeParentInitialScroll = [], _silent = false, savedInputChecked = [];
var documentExists = typeof document !== "undefined", PositionGhostAbsolutely = IOS, CSSFloatProperty = Edge || IE11OrLess ? "cssFloat" : "float", supportDraggable = documentExists && !ChromeForAndroid && !IOS && "draggable" in document.createElement("div"), supportCssPointerEvents = function() {
  if (!documentExists)
    return;
  if (IE11OrLess) {
    return false;
  }
  var el = document.createElement("x");
  el.style.cssText = "pointer-events:auto";
  return el.style.pointerEvents === "auto";
}(), _detectDirection = function _detectDirection2(el, options) {
  var elCSS = css(el), elWidth = parseInt(elCSS.width) - parseInt(elCSS.paddingLeft) - parseInt(elCSS.paddingRight) - parseInt(elCSS.borderLeftWidth) - parseInt(elCSS.borderRightWidth), child1 = getChild(el, 0, options), child2 = getChild(el, 1, options), firstChildCSS = child1 && css(child1), secondChildCSS = child2 && css(child2), firstChildWidth = firstChildCSS && parseInt(firstChildCSS.marginLeft) + parseInt(firstChildCSS.marginRight) + getRect(child1).width, secondChildWidth = secondChildCSS && parseInt(secondChildCSS.marginLeft) + parseInt(secondChildCSS.marginRight) + getRect(child2).width;
  if (elCSS.display === "flex") {
    return elCSS.flexDirection === "column" || elCSS.flexDirection === "column-reverse" ? "vertical" : "horizontal";
  }
  if (elCSS.display === "grid") {
    return elCSS.gridTemplateColumns.split(" ").length <= 1 ? "vertical" : "horizontal";
  }
  if (child1 && firstChildCSS["float"] && firstChildCSS["float"] !== "none") {
    var touchingSideChild2 = firstChildCSS["float"] === "left" ? "left" : "right";
    return child2 && (secondChildCSS.clear === "both" || secondChildCSS.clear === touchingSideChild2) ? "vertical" : "horizontal";
  }
  return child1 && (firstChildCSS.display === "block" || firstChildCSS.display === "flex" || firstChildCSS.display === "table" || firstChildCSS.display === "grid" || firstChildWidth >= elWidth && elCSS[CSSFloatProperty] === "none" || child2 && elCSS[CSSFloatProperty] === "none" && firstChildWidth + secondChildWidth > elWidth) ? "vertical" : "horizontal";
}, _dragElInRowColumn = function _dragElInRowColumn2(dragRect, targetRect, vertical) {
  var dragElS1Opp = vertical ? dragRect.left : dragRect.top, dragElS2Opp = vertical ? dragRect.right : dragRect.bottom, dragElOppLength = vertical ? dragRect.width : dragRect.height, targetS1Opp = vertical ? targetRect.left : targetRect.top, targetS2Opp = vertical ? targetRect.right : targetRect.bottom, targetOppLength = vertical ? targetRect.width : targetRect.height;
  return dragElS1Opp === targetS1Opp || dragElS2Opp === targetS2Opp || dragElS1Opp + dragElOppLength / 2 === targetS1Opp + targetOppLength / 2;
}, _detectNearestEmptySortable = function _detectNearestEmptySortable2(x, y) {
  var ret;
  sortables.some(function(sortable) {
    var threshold = sortable[expando].options.emptyInsertThreshold;
    if (!threshold || lastChild(sortable))
      return;
    var rect = getRect(sortable), insideHorizontally = x >= rect.left - threshold && x <= rect.right + threshold, insideVertically = y >= rect.top - threshold && y <= rect.bottom + threshold;
    if (insideHorizontally && insideVertically) {
      return ret = sortable;
    }
  });
  return ret;
}, _prepareGroup = function _prepareGroup2(options) {
  function toFn(value, pull) {
    return function(to, from, dragEl2, evt) {
      var sameGroup = to.options.group.name && from.options.group.name && to.options.group.name === from.options.group.name;
      if (value == null && (pull || sameGroup)) {
        return true;
      } else if (value == null || value === false) {
        return false;
      } else if (pull && value === "clone") {
        return value;
      } else if (typeof value === "function") {
        return toFn(value(to, from, dragEl2, evt), pull)(to, from, dragEl2, evt);
      } else {
        var otherGroup = (pull ? to : from).options.group.name;
        return value === true || typeof value === "string" && value === otherGroup || value.join && value.indexOf(otherGroup) > -1;
      }
    };
  }
  var group = {};
  var originalGroup = options.group;
  if (!originalGroup || _typeof(originalGroup) != "object") {
    originalGroup = {
      name: originalGroup
    };
  }
  group.name = originalGroup.name;
  group.checkPull = toFn(originalGroup.pull, true);
  group.checkPut = toFn(originalGroup.put);
  group.revertClone = originalGroup.revertClone;
  options.group = group;
}, _hideGhostForTarget = function _hideGhostForTarget2() {
  if (!supportCssPointerEvents && ghostEl) {
    css(ghostEl, "display", "none");
  }
}, _unhideGhostForTarget = function _unhideGhostForTarget2() {
  if (!supportCssPointerEvents && ghostEl) {
    css(ghostEl, "display", "");
  }
};
if (documentExists && !ChromeForAndroid) {
  document.addEventListener("click", function(evt) {
    if (ignoreNextClick) {
      evt.preventDefault();
      evt.stopPropagation && evt.stopPropagation();
      evt.stopImmediatePropagation && evt.stopImmediatePropagation();
      ignoreNextClick = false;
      return false;
    }
  }, true);
}
var nearestEmptyInsertDetectEvent = function nearestEmptyInsertDetectEvent2(evt) {
  if (dragEl) {
    evt = evt.touches ? evt.touches[0] : evt;
    var nearest = _detectNearestEmptySortable(evt.clientX, evt.clientY);
    if (nearest) {
      var event = {};
      for (var i in evt) {
        if (evt.hasOwnProperty(i)) {
          event[i] = evt[i];
        }
      }
      event.target = event.rootEl = nearest;
      event.preventDefault = void 0;
      event.stopPropagation = void 0;
      nearest[expando]._onDragOver(event);
    }
  }
};
var _checkOutsideTargetEl = function _checkOutsideTargetEl2(evt) {
  if (dragEl) {
    dragEl.parentNode[expando]._isOutsideThisEl(evt.target);
  }
};
function Sortable(el, options) {
  if (!(el && el.nodeType && el.nodeType === 1)) {
    throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(el));
  }
  this.el = el;
  this.options = options = _extends({}, options);
  el[expando] = this;
  var defaults2 = {
    group: null,
    sort: true,
    disabled: false,
    store: null,
    handle: null,
    draggable: /^[uo]l$/i.test(el.nodeName) ? ">li" : ">*",
    swapThreshold: 1,
    invertSwap: false,
    invertedSwapThreshold: null,
    removeCloneOnHide: true,
    direction: function direction() {
      return _detectDirection(el, this.options);
    },
    ghostClass: "sortable-ghost",
    chosenClass: "sortable-chosen",
    dragClass: "sortable-drag",
    ignore: "a, img",
    filter: null,
    preventOnFilter: true,
    animation: 0,
    easing: null,
    setData: function setData(dataTransfer, dragEl2) {
      dataTransfer.setData("Text", dragEl2.textContent);
    },
    dropBubble: false,
    dragoverBubble: false,
    dataIdAttr: "data-id",
    delay: 0,
    delayOnTouchOnly: false,
    touchStartThreshold: (Number.parseInt ? Number : window).parseInt(window.devicePixelRatio, 10) || 1,
    forceFallback: false,
    fallbackClass: "sortable-fallback",
    fallbackOnBody: false,
    fallbackTolerance: 0,
    fallbackOffset: {
      x: 0,
      y: 0
    },
    supportPointer: Sortable.supportPointer !== false && "PointerEvent" in window && !Safari,
    emptyInsertThreshold: 5
  };
  PluginManager.initializePlugins(this, el, defaults2);
  for (var name in defaults2) {
    !(name in options) && (options[name] = defaults2[name]);
  }
  _prepareGroup(options);
  for (var fn in this) {
    if (fn.charAt(0) === "_" && typeof this[fn] === "function") {
      this[fn] = this[fn].bind(this);
    }
  }
  this.nativeDraggable = options.forceFallback ? false : supportDraggable;
  if (this.nativeDraggable) {
    this.options.touchStartThreshold = 1;
  }
  if (options.supportPointer) {
    on(el, "pointerdown", this._onTapStart);
  } else {
    on(el, "mousedown", this._onTapStart);
    on(el, "touchstart", this._onTapStart);
  }
  if (this.nativeDraggable) {
    on(el, "dragover", this);
    on(el, "dragenter", this);
  }
  sortables.push(this.el);
  options.store && options.store.get && this.sort(options.store.get(this) || []);
  _extends(this, AnimationStateManager());
}
Sortable.prototype = {
  constructor: Sortable,
  _isOutsideThisEl: function _isOutsideThisEl(target) {
    if (!this.el.contains(target) && target !== this.el) {
      lastTarget = null;
    }
  },
  _getDirection: function _getDirection(evt, target) {
    return typeof this.options.direction === "function" ? this.options.direction.call(this, evt, target, dragEl) : this.options.direction;
  },
  _onTapStart: function _onTapStart(evt) {
    if (!evt.cancelable)
      return;
    var _this = this, el = this.el, options = this.options, preventOnFilter = options.preventOnFilter, type = evt.type, touch = evt.touches && evt.touches[0] || evt.pointerType && evt.pointerType === "touch" && evt, target = (touch || evt).target, originalTarget = evt.target.shadowRoot && (evt.path && evt.path[0] || evt.composedPath && evt.composedPath()[0]) || target, filter = options.filter;
    _saveInputCheckedState(el);
    if (dragEl) {
      return;
    }
    if (/mousedown|pointerdown/.test(type) && evt.button !== 0 || options.disabled) {
      return;
    }
    if (originalTarget.isContentEditable) {
      return;
    }
    if (!this.nativeDraggable && Safari && target && target.tagName.toUpperCase() === "SELECT") {
      return;
    }
    target = closest(target, options.draggable, el, false);
    if (target && target.animated) {
      return;
    }
    if (lastDownEl === target) {
      return;
    }
    oldIndex = index(target);
    oldDraggableIndex = index(target, options.draggable);
    if (typeof filter === "function") {
      if (filter.call(this, evt, target, this)) {
        _dispatchEvent({
          sortable: _this,
          rootEl: originalTarget,
          name: "filter",
          targetEl: target,
          toEl: el,
          fromEl: el
        });
        pluginEvent2("filter", _this, {
          evt
        });
        preventOnFilter && evt.cancelable && evt.preventDefault();
        return;
      }
    } else if (filter) {
      filter = filter.split(",").some(function(criteria) {
        criteria = closest(originalTarget, criteria.trim(), el, false);
        if (criteria) {
          _dispatchEvent({
            sortable: _this,
            rootEl: criteria,
            name: "filter",
            targetEl: target,
            fromEl: el,
            toEl: el
          });
          pluginEvent2("filter", _this, {
            evt
          });
          return true;
        }
      });
      if (filter) {
        preventOnFilter && evt.cancelable && evt.preventDefault();
        return;
      }
    }
    if (options.handle && !closest(originalTarget, options.handle, el, false)) {
      return;
    }
    this._prepareDragStart(evt, touch, target);
  },
  _prepareDragStart: function _prepareDragStart(evt, touch, target) {
    var _this = this, el = _this.el, options = _this.options, ownerDocument = el.ownerDocument, dragStartFn;
    if (target && !dragEl && target.parentNode === el) {
      var dragRect = getRect(target);
      rootEl = el;
      dragEl = target;
      parentEl = dragEl.parentNode;
      nextEl = dragEl.nextSibling;
      lastDownEl = target;
      activeGroup = options.group;
      Sortable.dragged = dragEl;
      tapEvt = {
        target: dragEl,
        clientX: (touch || evt).clientX,
        clientY: (touch || evt).clientY
      };
      tapDistanceLeft = tapEvt.clientX - dragRect.left;
      tapDistanceTop = tapEvt.clientY - dragRect.top;
      this._lastX = (touch || evt).clientX;
      this._lastY = (touch || evt).clientY;
      dragEl.style["will-change"] = "all";
      dragStartFn = function dragStartFn2() {
        pluginEvent2("delayEnded", _this, {
          evt
        });
        if (Sortable.eventCanceled) {
          _this._onDrop();
          return;
        }
        _this._disableDelayedDragEvents();
        if (!FireFox && _this.nativeDraggable) {
          dragEl.draggable = true;
        }
        _this._triggerDragStart(evt, touch);
        _dispatchEvent({
          sortable: _this,
          name: "choose",
          originalEvent: evt
        });
        toggleClass(dragEl, options.chosenClass, true);
      };
      options.ignore.split(",").forEach(function(criteria) {
        find(dragEl, criteria.trim(), _disableDraggable);
      });
      on(ownerDocument, "dragover", nearestEmptyInsertDetectEvent);
      on(ownerDocument, "mousemove", nearestEmptyInsertDetectEvent);
      on(ownerDocument, "touchmove", nearestEmptyInsertDetectEvent);
      on(ownerDocument, "mouseup", _this._onDrop);
      on(ownerDocument, "touchend", _this._onDrop);
      on(ownerDocument, "touchcancel", _this._onDrop);
      if (FireFox && this.nativeDraggable) {
        this.options.touchStartThreshold = 4;
        dragEl.draggable = true;
      }
      pluginEvent2("delayStart", this, {
        evt
      });
      if (options.delay && (!options.delayOnTouchOnly || touch) && (!this.nativeDraggable || !(Edge || IE11OrLess))) {
        if (Sortable.eventCanceled) {
          this._onDrop();
          return;
        }
        on(ownerDocument, "mouseup", _this._disableDelayedDrag);
        on(ownerDocument, "touchend", _this._disableDelayedDrag);
        on(ownerDocument, "touchcancel", _this._disableDelayedDrag);
        on(ownerDocument, "mousemove", _this._delayedDragTouchMoveHandler);
        on(ownerDocument, "touchmove", _this._delayedDragTouchMoveHandler);
        options.supportPointer && on(ownerDocument, "pointermove", _this._delayedDragTouchMoveHandler);
        _this._dragStartTimer = setTimeout(dragStartFn, options.delay);
      } else {
        dragStartFn();
      }
    }
  },
  _delayedDragTouchMoveHandler: function _delayedDragTouchMoveHandler(e) {
    var touch = e.touches ? e.touches[0] : e;
    if (Math.max(Math.abs(touch.clientX - this._lastX), Math.abs(touch.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1))) {
      this._disableDelayedDrag();
    }
  },
  _disableDelayedDrag: function _disableDelayedDrag() {
    dragEl && _disableDraggable(dragEl);
    clearTimeout(this._dragStartTimer);
    this._disableDelayedDragEvents();
  },
  _disableDelayedDragEvents: function _disableDelayedDragEvents() {
    var ownerDocument = this.el.ownerDocument;
    off(ownerDocument, "mouseup", this._disableDelayedDrag);
    off(ownerDocument, "touchend", this._disableDelayedDrag);
    off(ownerDocument, "touchcancel", this._disableDelayedDrag);
    off(ownerDocument, "mousemove", this._delayedDragTouchMoveHandler);
    off(ownerDocument, "touchmove", this._delayedDragTouchMoveHandler);
    off(ownerDocument, "pointermove", this._delayedDragTouchMoveHandler);
  },
  _triggerDragStart: function _triggerDragStart(evt, touch) {
    touch = touch || evt.pointerType == "touch" && evt;
    if (!this.nativeDraggable || touch) {
      if (this.options.supportPointer) {
        on(document, "pointermove", this._onTouchMove);
      } else if (touch) {
        on(document, "touchmove", this._onTouchMove);
      } else {
        on(document, "mousemove", this._onTouchMove);
      }
    } else {
      on(dragEl, "dragend", this);
      on(rootEl, "dragstart", this._onDragStart);
    }
    try {
      if (document.selection) {
        _nextTick(function() {
          document.selection.empty();
        });
      } else {
        window.getSelection().removeAllRanges();
      }
    } catch (err) {
    }
  },
  _dragStarted: function _dragStarted(fallback, evt) {
    awaitingDragStarted = false;
    if (rootEl && dragEl) {
      pluginEvent2("dragStarted", this, {
        evt
      });
      if (this.nativeDraggable) {
        on(document, "dragover", _checkOutsideTargetEl);
      }
      var options = this.options;
      !fallback && toggleClass(dragEl, options.dragClass, false);
      toggleClass(dragEl, options.ghostClass, true);
      Sortable.active = this;
      fallback && this._appendGhost();
      _dispatchEvent({
        sortable: this,
        name: "start",
        originalEvent: evt
      });
    } else {
      this._nulling();
    }
  },
  _emulateDragOver: function _emulateDragOver() {
    if (touchEvt) {
      this._lastX = touchEvt.clientX;
      this._lastY = touchEvt.clientY;
      _hideGhostForTarget();
      var target = document.elementFromPoint(touchEvt.clientX, touchEvt.clientY);
      var parent = target;
      while (target && target.shadowRoot) {
        target = target.shadowRoot.elementFromPoint(touchEvt.clientX, touchEvt.clientY);
        if (target === parent)
          break;
        parent = target;
      }
      dragEl.parentNode[expando]._isOutsideThisEl(target);
      if (parent) {
        do {
          if (parent[expando]) {
            var inserted = void 0;
            inserted = parent[expando]._onDragOver({
              clientX: touchEvt.clientX,
              clientY: touchEvt.clientY,
              target,
              rootEl: parent
            });
            if (inserted && !this.options.dragoverBubble) {
              break;
            }
          }
          target = parent;
        } while (parent = parent.parentNode);
      }
      _unhideGhostForTarget();
    }
  },
  _onTouchMove: function _onTouchMove(evt) {
    if (tapEvt) {
      var options = this.options, fallbackTolerance = options.fallbackTolerance, fallbackOffset = options.fallbackOffset, touch = evt.touches ? evt.touches[0] : evt, ghostMatrix = ghostEl && matrix(ghostEl, true), scaleX = ghostEl && ghostMatrix && ghostMatrix.a, scaleY = ghostEl && ghostMatrix && ghostMatrix.d, relativeScrollOffset = PositionGhostAbsolutely && ghostRelativeParent && getRelativeScrollOffset(ghostRelativeParent), dx = (touch.clientX - tapEvt.clientX + fallbackOffset.x) / (scaleX || 1) + (relativeScrollOffset ? relativeScrollOffset[0] - ghostRelativeParentInitialScroll[0] : 0) / (scaleX || 1), dy = (touch.clientY - tapEvt.clientY + fallbackOffset.y) / (scaleY || 1) + (relativeScrollOffset ? relativeScrollOffset[1] - ghostRelativeParentInitialScroll[1] : 0) / (scaleY || 1);
      if (!Sortable.active && !awaitingDragStarted) {
        if (fallbackTolerance && Math.max(Math.abs(touch.clientX - this._lastX), Math.abs(touch.clientY - this._lastY)) < fallbackTolerance) {
          return;
        }
        this._onDragStart(evt, true);
      }
      if (ghostEl) {
        if (ghostMatrix) {
          ghostMatrix.e += dx - (lastDx || 0);
          ghostMatrix.f += dy - (lastDy || 0);
        } else {
          ghostMatrix = {
            a: 1,
            b: 0,
            c: 0,
            d: 1,
            e: dx,
            f: dy
          };
        }
        var cssMatrix = "matrix(".concat(ghostMatrix.a, ",").concat(ghostMatrix.b, ",").concat(ghostMatrix.c, ",").concat(ghostMatrix.d, ",").concat(ghostMatrix.e, ",").concat(ghostMatrix.f, ")");
        css(ghostEl, "webkitTransform", cssMatrix);
        css(ghostEl, "mozTransform", cssMatrix);
        css(ghostEl, "msTransform", cssMatrix);
        css(ghostEl, "transform", cssMatrix);
        lastDx = dx;
        lastDy = dy;
        touchEvt = touch;
      }
      evt.cancelable && evt.preventDefault();
    }
  },
  _appendGhost: function _appendGhost() {
    if (!ghostEl) {
      var container = this.options.fallbackOnBody ? document.body : rootEl, rect = getRect(dragEl, true, PositionGhostAbsolutely, true, container), options = this.options;
      if (PositionGhostAbsolutely) {
        ghostRelativeParent = container;
        while (css(ghostRelativeParent, "position") === "static" && css(ghostRelativeParent, "transform") === "none" && ghostRelativeParent !== document) {
          ghostRelativeParent = ghostRelativeParent.parentNode;
        }
        if (ghostRelativeParent !== document.body && ghostRelativeParent !== document.documentElement) {
          if (ghostRelativeParent === document)
            ghostRelativeParent = getWindowScrollingElement();
          rect.top += ghostRelativeParent.scrollTop;
          rect.left += ghostRelativeParent.scrollLeft;
        } else {
          ghostRelativeParent = getWindowScrollingElement();
        }
        ghostRelativeParentInitialScroll = getRelativeScrollOffset(ghostRelativeParent);
      }
      ghostEl = dragEl.cloneNode(true);
      toggleClass(ghostEl, options.ghostClass, false);
      toggleClass(ghostEl, options.fallbackClass, true);
      toggleClass(ghostEl, options.dragClass, true);
      css(ghostEl, "transition", "");
      css(ghostEl, "transform", "");
      css(ghostEl, "box-sizing", "border-box");
      css(ghostEl, "margin", 0);
      css(ghostEl, "top", rect.top);
      css(ghostEl, "left", rect.left);
      css(ghostEl, "width", rect.width);
      css(ghostEl, "height", rect.height);
      css(ghostEl, "opacity", "0.8");
      css(ghostEl, "position", PositionGhostAbsolutely ? "absolute" : "fixed");
      css(ghostEl, "zIndex", "100000");
      css(ghostEl, "pointerEvents", "none");
      Sortable.ghost = ghostEl;
      container.appendChild(ghostEl);
      css(ghostEl, "transform-origin", tapDistanceLeft / parseInt(ghostEl.style.width) * 100 + "% " + tapDistanceTop / parseInt(ghostEl.style.height) * 100 + "%");
    }
  },
  _onDragStart: function _onDragStart(evt, fallback) {
    var _this = this;
    var dataTransfer = evt.dataTransfer;
    var options = _this.options;
    pluginEvent2("dragStart", this, {
      evt
    });
    if (Sortable.eventCanceled) {
      this._onDrop();
      return;
    }
    pluginEvent2("setupClone", this);
    if (!Sortable.eventCanceled) {
      cloneEl = clone(dragEl);
      cloneEl.removeAttribute("id");
      cloneEl.draggable = false;
      cloneEl.style["will-change"] = "";
      this._hideClone();
      toggleClass(cloneEl, this.options.chosenClass, false);
      Sortable.clone = cloneEl;
    }
    _this.cloneId = _nextTick(function() {
      pluginEvent2("clone", _this);
      if (Sortable.eventCanceled)
        return;
      if (!_this.options.removeCloneOnHide) {
        rootEl.insertBefore(cloneEl, dragEl);
      }
      _this._hideClone();
      _dispatchEvent({
        sortable: _this,
        name: "clone"
      });
    });
    !fallback && toggleClass(dragEl, options.dragClass, true);
    if (fallback) {
      ignoreNextClick = true;
      _this._loopId = setInterval(_this._emulateDragOver, 50);
    } else {
      off(document, "mouseup", _this._onDrop);
      off(document, "touchend", _this._onDrop);
      off(document, "touchcancel", _this._onDrop);
      if (dataTransfer) {
        dataTransfer.effectAllowed = "move";
        options.setData && options.setData.call(_this, dataTransfer, dragEl);
      }
      on(document, "drop", _this);
      css(dragEl, "transform", "translateZ(0)");
    }
    awaitingDragStarted = true;
    _this._dragStartId = _nextTick(_this._dragStarted.bind(_this, fallback, evt));
    on(document, "selectstart", _this);
    moved = true;
    if (Safari) {
      css(document.body, "user-select", "none");
    }
  },
  _onDragOver: function _onDragOver(evt) {
    var el = this.el, target = evt.target, dragRect, targetRect, revert, options = this.options, group = options.group, activeSortable = Sortable.active, isOwner = activeGroup === group, canSort = options.sort, fromSortable = putSortable || activeSortable, vertical, _this = this, completedFired = false;
    if (_silent)
      return;
    function dragOverEvent(name, extra) {
      pluginEvent2(name, _this, _objectSpread2({
        evt,
        isOwner,
        axis: vertical ? "vertical" : "horizontal",
        revert,
        dragRect,
        targetRect,
        canSort,
        fromSortable,
        target,
        completed,
        onMove: function onMove(target2, after2) {
          return _onMove(rootEl, el, dragEl, dragRect, target2, getRect(target2), evt, after2);
        },
        changed
      }, extra));
    }
    function capture() {
      dragOverEvent("dragOverAnimationCapture");
      _this.captureAnimationState();
      if (_this !== fromSortable) {
        fromSortable.captureAnimationState();
      }
    }
    function completed(insertion) {
      dragOverEvent("dragOverCompleted", {
        insertion
      });
      if (insertion) {
        if (isOwner) {
          activeSortable._hideClone();
        } else {
          activeSortable._showClone(_this);
        }
        if (_this !== fromSortable) {
          toggleClass(dragEl, putSortable ? putSortable.options.ghostClass : activeSortable.options.ghostClass, false);
          toggleClass(dragEl, options.ghostClass, true);
        }
        if (putSortable !== _this && _this !== Sortable.active) {
          putSortable = _this;
        } else if (_this === Sortable.active && putSortable) {
          putSortable = null;
        }
        if (fromSortable === _this) {
          _this._ignoreWhileAnimating = target;
        }
        _this.animateAll(function() {
          dragOverEvent("dragOverAnimationComplete");
          _this._ignoreWhileAnimating = null;
        });
        if (_this !== fromSortable) {
          fromSortable.animateAll();
          fromSortable._ignoreWhileAnimating = null;
        }
      }
      if (target === dragEl && !dragEl.animated || target === el && !target.animated) {
        lastTarget = null;
      }
      if (!options.dragoverBubble && !evt.rootEl && target !== document) {
        dragEl.parentNode[expando]._isOutsideThisEl(evt.target);
        !insertion && nearestEmptyInsertDetectEvent(evt);
      }
      !options.dragoverBubble && evt.stopPropagation && evt.stopPropagation();
      return completedFired = true;
    }
    function changed() {
      newIndex = index(dragEl);
      newDraggableIndex = index(dragEl, options.draggable);
      _dispatchEvent({
        sortable: _this,
        name: "change",
        toEl: el,
        newIndex,
        newDraggableIndex,
        originalEvent: evt
      });
    }
    if (evt.preventDefault !== void 0) {
      evt.cancelable && evt.preventDefault();
    }
    target = closest(target, options.draggable, el, true);
    dragOverEvent("dragOver");
    if (Sortable.eventCanceled)
      return completedFired;
    if (dragEl.contains(evt.target) || target.animated && target.animatingX && target.animatingY || _this._ignoreWhileAnimating === target) {
      return completed(false);
    }
    ignoreNextClick = false;
    if (activeSortable && !options.disabled && (isOwner ? canSort || (revert = parentEl !== rootEl) : putSortable === this || (this.lastPutMode = activeGroup.checkPull(this, activeSortable, dragEl, evt)) && group.checkPut(this, activeSortable, dragEl, evt))) {
      vertical = this._getDirection(evt, target) === "vertical";
      dragRect = getRect(dragEl);
      dragOverEvent("dragOverValid");
      if (Sortable.eventCanceled)
        return completedFired;
      if (revert) {
        parentEl = rootEl;
        capture();
        this._hideClone();
        dragOverEvent("revert");
        if (!Sortable.eventCanceled) {
          if (nextEl) {
            rootEl.insertBefore(dragEl, nextEl);
          } else {
            rootEl.appendChild(dragEl);
          }
        }
        return completed(true);
      }
      var elLastChild = lastChild(el, options.draggable);
      if (!elLastChild || _ghostIsLast(evt, vertical, this) && !elLastChild.animated) {
        if (elLastChild === dragEl) {
          return completed(false);
        }
        if (elLastChild && el === evt.target) {
          target = elLastChild;
        }
        if (target) {
          targetRect = getRect(target);
        }
        if (_onMove(rootEl, el, dragEl, dragRect, target, targetRect, evt, !!target) !== false) {
          capture();
          if (elLastChild && elLastChild.nextSibling) {
            el.insertBefore(dragEl, elLastChild.nextSibling);
          } else {
            el.appendChild(dragEl);
          }
          parentEl = el;
          changed();
          return completed(true);
        }
      } else if (elLastChild && _ghostIsFirst(evt, vertical, this)) {
        var firstChild = getChild(el, 0, options, true);
        if (firstChild === dragEl) {
          return completed(false);
        }
        target = firstChild;
        targetRect = getRect(target);
        if (_onMove(rootEl, el, dragEl, dragRect, target, targetRect, evt, false) !== false) {
          capture();
          el.insertBefore(dragEl, firstChild);
          parentEl = el;
          changed();
          return completed(true);
        }
      } else if (target.parentNode === el) {
        targetRect = getRect(target);
        var direction = 0, targetBeforeFirstSwap, differentLevel = dragEl.parentNode !== el, differentRowCol = !_dragElInRowColumn(dragEl.animated && dragEl.toRect || dragRect, target.animated && target.toRect || targetRect, vertical), side1 = vertical ? "top" : "left", scrolledPastTop = isScrolledPast(target, "top", "top") || isScrolledPast(dragEl, "top", "top"), scrollBefore = scrolledPastTop ? scrolledPastTop.scrollTop : void 0;
        if (lastTarget !== target) {
          targetBeforeFirstSwap = targetRect[side1];
          pastFirstInvertThresh = false;
          isCircumstantialInvert = !differentRowCol && options.invertSwap || differentLevel;
        }
        direction = _getSwapDirection(evt, target, targetRect, vertical, differentRowCol ? 1 : options.swapThreshold, options.invertedSwapThreshold == null ? options.swapThreshold : options.invertedSwapThreshold, isCircumstantialInvert, lastTarget === target);
        var sibling;
        if (direction !== 0) {
          var dragIndex = index(dragEl);
          do {
            dragIndex -= direction;
            sibling = parentEl.children[dragIndex];
          } while (sibling && (css(sibling, "display") === "none" || sibling === ghostEl));
        }
        if (direction === 0 || sibling === target) {
          return completed(false);
        }
        lastTarget = target;
        lastDirection = direction;
        var nextSibling = target.nextElementSibling, after = false;
        after = direction === 1;
        var moveVector = _onMove(rootEl, el, dragEl, dragRect, target, targetRect, evt, after);
        if (moveVector !== false) {
          if (moveVector === 1 || moveVector === -1) {
            after = moveVector === 1;
          }
          _silent = true;
          setTimeout(_unsilent, 30);
          capture();
          if (after && !nextSibling) {
            el.appendChild(dragEl);
          } else {
            target.parentNode.insertBefore(dragEl, after ? nextSibling : target);
          }
          if (scrolledPastTop) {
            scrollBy(scrolledPastTop, 0, scrollBefore - scrolledPastTop.scrollTop);
          }
          parentEl = dragEl.parentNode;
          if (targetBeforeFirstSwap !== void 0 && !isCircumstantialInvert) {
            targetMoveDistance = Math.abs(targetBeforeFirstSwap - getRect(target)[side1]);
          }
          changed();
          return completed(true);
        }
      }
      if (el.contains(dragEl)) {
        return completed(false);
      }
    }
    return false;
  },
  _ignoreWhileAnimating: null,
  _offMoveEvents: function _offMoveEvents() {
    off(document, "mousemove", this._onTouchMove);
    off(document, "touchmove", this._onTouchMove);
    off(document, "pointermove", this._onTouchMove);
    off(document, "dragover", nearestEmptyInsertDetectEvent);
    off(document, "mousemove", nearestEmptyInsertDetectEvent);
    off(document, "touchmove", nearestEmptyInsertDetectEvent);
  },
  _offUpEvents: function _offUpEvents() {
    var ownerDocument = this.el.ownerDocument;
    off(ownerDocument, "mouseup", this._onDrop);
    off(ownerDocument, "touchend", this._onDrop);
    off(ownerDocument, "pointerup", this._onDrop);
    off(ownerDocument, "touchcancel", this._onDrop);
    off(document, "selectstart", this);
  },
  _onDrop: function _onDrop(evt) {
    var el = this.el, options = this.options;
    newIndex = index(dragEl);
    newDraggableIndex = index(dragEl, options.draggable);
    pluginEvent2("drop", this, {
      evt
    });
    parentEl = dragEl && dragEl.parentNode;
    newIndex = index(dragEl);
    newDraggableIndex = index(dragEl, options.draggable);
    if (Sortable.eventCanceled) {
      this._nulling();
      return;
    }
    awaitingDragStarted = false;
    isCircumstantialInvert = false;
    pastFirstInvertThresh = false;
    clearInterval(this._loopId);
    clearTimeout(this._dragStartTimer);
    _cancelNextTick(this.cloneId);
    _cancelNextTick(this._dragStartId);
    if (this.nativeDraggable) {
      off(document, "drop", this);
      off(el, "dragstart", this._onDragStart);
    }
    this._offMoveEvents();
    this._offUpEvents();
    if (Safari) {
      css(document.body, "user-select", "");
    }
    css(dragEl, "transform", "");
    if (evt) {
      if (moved) {
        evt.cancelable && evt.preventDefault();
        !options.dropBubble && evt.stopPropagation();
      }
      ghostEl && ghostEl.parentNode && ghostEl.parentNode.removeChild(ghostEl);
      if (rootEl === parentEl || putSortable && putSortable.lastPutMode !== "clone") {
        cloneEl && cloneEl.parentNode && cloneEl.parentNode.removeChild(cloneEl);
      }
      if (dragEl) {
        if (this.nativeDraggable) {
          off(dragEl, "dragend", this);
        }
        _disableDraggable(dragEl);
        dragEl.style["will-change"] = "";
        if (moved && !awaitingDragStarted) {
          toggleClass(dragEl, putSortable ? putSortable.options.ghostClass : this.options.ghostClass, false);
        }
        toggleClass(dragEl, this.options.chosenClass, false);
        _dispatchEvent({
          sortable: this,
          name: "unchoose",
          toEl: parentEl,
          newIndex: null,
          newDraggableIndex: null,
          originalEvent: evt
        });
        if (rootEl !== parentEl) {
          if (newIndex >= 0) {
            _dispatchEvent({
              rootEl: parentEl,
              name: "add",
              toEl: parentEl,
              fromEl: rootEl,
              originalEvent: evt
            });
            _dispatchEvent({
              sortable: this,
              name: "remove",
              toEl: parentEl,
              originalEvent: evt
            });
            _dispatchEvent({
              rootEl: parentEl,
              name: "sort",
              toEl: parentEl,
              fromEl: rootEl,
              originalEvent: evt
            });
            _dispatchEvent({
              sortable: this,
              name: "sort",
              toEl: parentEl,
              originalEvent: evt
            });
          }
          putSortable && putSortable.save();
        } else {
          if (newIndex !== oldIndex) {
            if (newIndex >= 0) {
              _dispatchEvent({
                sortable: this,
                name: "update",
                toEl: parentEl,
                originalEvent: evt
              });
              _dispatchEvent({
                sortable: this,
                name: "sort",
                toEl: parentEl,
                originalEvent: evt
              });
            }
          }
        }
        if (Sortable.active) {
          if (newIndex == null || newIndex === -1) {
            newIndex = oldIndex;
            newDraggableIndex = oldDraggableIndex;
          }
          _dispatchEvent({
            sortable: this,
            name: "end",
            toEl: parentEl,
            originalEvent: evt
          });
          this.save();
        }
      }
    }
    this._nulling();
  },
  _nulling: function _nulling() {
    pluginEvent2("nulling", this);
    rootEl = dragEl = parentEl = ghostEl = nextEl = cloneEl = lastDownEl = cloneHidden = tapEvt = touchEvt = moved = newIndex = newDraggableIndex = oldIndex = oldDraggableIndex = lastTarget = lastDirection = putSortable = activeGroup = Sortable.dragged = Sortable.ghost = Sortable.clone = Sortable.active = null;
    savedInputChecked.forEach(function(el) {
      el.checked = true;
    });
    savedInputChecked.length = lastDx = lastDy = 0;
  },
  handleEvent: function handleEvent(evt) {
    switch (evt.type) {
      case "drop":
      case "dragend":
        this._onDrop(evt);
        break;
      case "dragenter":
      case "dragover":
        if (dragEl) {
          this._onDragOver(evt);
          _globalDragOver(evt);
        }
        break;
      case "selectstart":
        evt.preventDefault();
        break;
    }
  },
  toArray: function toArray() {
    var order = [], el, children = this.el.children, i = 0, n = children.length, options = this.options;
    for (; i < n; i++) {
      el = children[i];
      if (closest(el, options.draggable, this.el, false)) {
        order.push(el.getAttribute(options.dataIdAttr) || _generateId(el));
      }
    }
    return order;
  },
  sort: function sort(order, useAnimation) {
    var items = {}, rootEl2 = this.el;
    this.toArray().forEach(function(id, i) {
      var el = rootEl2.children[i];
      if (closest(el, this.options.draggable, rootEl2, false)) {
        items[id] = el;
      }
    }, this);
    useAnimation && this.captureAnimationState();
    order.forEach(function(id) {
      if (items[id]) {
        rootEl2.removeChild(items[id]);
        rootEl2.appendChild(items[id]);
      }
    });
    useAnimation && this.animateAll();
  },
  save: function save() {
    var store = this.options.store;
    store && store.set && store.set(this);
  },
  closest: function closest$1(el, selector) {
    return closest(el, selector || this.options.draggable, this.el, false);
  },
  option: function option(name, value) {
    var options = this.options;
    if (value === void 0) {
      return options[name];
    } else {
      var modifiedValue = PluginManager.modifyOption(this, name, value);
      if (typeof modifiedValue !== "undefined") {
        options[name] = modifiedValue;
      } else {
        options[name] = value;
      }
      if (name === "group") {
        _prepareGroup(options);
      }
    }
  },
  destroy: function destroy() {
    pluginEvent2("destroy", this);
    var el = this.el;
    el[expando] = null;
    off(el, "mousedown", this._onTapStart);
    off(el, "touchstart", this._onTapStart);
    off(el, "pointerdown", this._onTapStart);
    if (this.nativeDraggable) {
      off(el, "dragover", this);
      off(el, "dragenter", this);
    }
    Array.prototype.forEach.call(el.querySelectorAll("[draggable]"), function(el2) {
      el2.removeAttribute("draggable");
    });
    this._onDrop();
    this._disableDelayedDragEvents();
    sortables.splice(sortables.indexOf(this.el), 1);
    this.el = el = null;
  },
  _hideClone: function _hideClone() {
    if (!cloneHidden) {
      pluginEvent2("hideClone", this);
      if (Sortable.eventCanceled)
        return;
      css(cloneEl, "display", "none");
      if (this.options.removeCloneOnHide && cloneEl.parentNode) {
        cloneEl.parentNode.removeChild(cloneEl);
      }
      cloneHidden = true;
    }
  },
  _showClone: function _showClone(putSortable2) {
    if (putSortable2.lastPutMode !== "clone") {
      this._hideClone();
      return;
    }
    if (cloneHidden) {
      pluginEvent2("showClone", this);
      if (Sortable.eventCanceled)
        return;
      if (dragEl.parentNode == rootEl && !this.options.group.revertClone) {
        rootEl.insertBefore(cloneEl, dragEl);
      } else if (nextEl) {
        rootEl.insertBefore(cloneEl, nextEl);
      } else {
        rootEl.appendChild(cloneEl);
      }
      if (this.options.group.revertClone) {
        this.animate(dragEl, cloneEl);
      }
      css(cloneEl, "display", "");
      cloneHidden = false;
    }
  }
};
function _globalDragOver(evt) {
  if (evt.dataTransfer) {
    evt.dataTransfer.dropEffect = "move";
  }
  evt.cancelable && evt.preventDefault();
}
function _onMove(fromEl, toEl, dragEl2, dragRect, targetEl, targetRect, originalEvent, willInsertAfter) {
  var evt, sortable = fromEl[expando], onMoveFn = sortable.options.onMove, retVal;
  if (window.CustomEvent && !IE11OrLess && !Edge) {
    evt = new CustomEvent("move", {
      bubbles: true,
      cancelable: true
    });
  } else {
    evt = document.createEvent("Event");
    evt.initEvent("move", true, true);
  }
  evt.to = toEl;
  evt.from = fromEl;
  evt.dragged = dragEl2;
  evt.draggedRect = dragRect;
  evt.related = targetEl || toEl;
  evt.relatedRect = targetRect || getRect(toEl);
  evt.willInsertAfter = willInsertAfter;
  evt.originalEvent = originalEvent;
  fromEl.dispatchEvent(evt);
  if (onMoveFn) {
    retVal = onMoveFn.call(sortable, evt, originalEvent);
  }
  return retVal;
}
function _disableDraggable(el) {
  el.draggable = false;
}
function _unsilent() {
  _silent = false;
}
function _ghostIsFirst(evt, vertical, sortable) {
  var rect = getRect(getChild(sortable.el, 0, sortable.options, true));
  var spacer = 10;
  return vertical ? evt.clientX < rect.left - spacer || evt.clientY < rect.top && evt.clientX < rect.right : evt.clientY < rect.top - spacer || evt.clientY < rect.bottom && evt.clientX < rect.left;
}
function _ghostIsLast(evt, vertical, sortable) {
  var rect = getRect(lastChild(sortable.el, sortable.options.draggable));
  var spacer = 10;
  return vertical ? evt.clientX > rect.right + spacer || evt.clientX <= rect.right && evt.clientY > rect.bottom && evt.clientX >= rect.left : evt.clientX > rect.right && evt.clientY > rect.top || evt.clientX <= rect.right && evt.clientY > rect.bottom + spacer;
}
function _getSwapDirection(evt, target, targetRect, vertical, swapThreshold, invertedSwapThreshold, invertSwap, isLastTarget) {
  var mouseOnAxis = vertical ? evt.clientY : evt.clientX, targetLength = vertical ? targetRect.height : targetRect.width, targetS1 = vertical ? targetRect.top : targetRect.left, targetS2 = vertical ? targetRect.bottom : targetRect.right, invert = false;
  if (!invertSwap) {
    if (isLastTarget && targetMoveDistance < targetLength * swapThreshold) {
      if (!pastFirstInvertThresh && (lastDirection === 1 ? mouseOnAxis > targetS1 + targetLength * invertedSwapThreshold / 2 : mouseOnAxis < targetS2 - targetLength * invertedSwapThreshold / 2)) {
        pastFirstInvertThresh = true;
      }
      if (!pastFirstInvertThresh) {
        if (lastDirection === 1 ? mouseOnAxis < targetS1 + targetMoveDistance : mouseOnAxis > targetS2 - targetMoveDistance) {
          return -lastDirection;
        }
      } else {
        invert = true;
      }
    } else {
      if (mouseOnAxis > targetS1 + targetLength * (1 - swapThreshold) / 2 && mouseOnAxis < targetS2 - targetLength * (1 - swapThreshold) / 2) {
        return _getInsertDirection(target);
      }
    }
  }
  invert = invert || invertSwap;
  if (invert) {
    if (mouseOnAxis < targetS1 + targetLength * invertedSwapThreshold / 2 || mouseOnAxis > targetS2 - targetLength * invertedSwapThreshold / 2) {
      return mouseOnAxis > targetS1 + targetLength / 2 ? 1 : -1;
    }
  }
  return 0;
}
function _getInsertDirection(target) {
  if (index(dragEl) < index(target)) {
    return 1;
  } else {
    return -1;
  }
}
function _generateId(el) {
  var str = el.tagName + el.className + el.src + el.href + el.textContent, i = str.length, sum = 0;
  while (i--) {
    sum += str.charCodeAt(i);
  }
  return sum.toString(36);
}
function _saveInputCheckedState(root) {
  savedInputChecked.length = 0;
  var inputs = root.getElementsByTagName("input");
  var idx = inputs.length;
  while (idx--) {
    var el = inputs[idx];
    el.checked && savedInputChecked.push(el);
  }
}
function _nextTick(fn) {
  return setTimeout(fn, 0);
}
function _cancelNextTick(id) {
  return clearTimeout(id);
}
if (documentExists) {
  on(document, "touchmove", function(evt) {
    if ((Sortable.active || awaitingDragStarted) && evt.cancelable) {
      evt.preventDefault();
    }
  });
}
Sortable.utils = {
  on,
  off,
  css,
  find,
  is: function is(el, selector) {
    return !!closest(el, selector, el, false);
  },
  extend,
  throttle,
  closest,
  toggleClass,
  clone,
  index,
  nextTick: _nextTick,
  cancelNextTick: _cancelNextTick,
  detectDirection: _detectDirection,
  getChild
};
Sortable.get = function(element) {
  return element[expando];
};
Sortable.mount = function() {
  for (var _len = arguments.length, plugins2 = new Array(_len), _key = 0; _key < _len; _key++) {
    plugins2[_key] = arguments[_key];
  }
  if (plugins2[0].constructor === Array)
    plugins2 = plugins2[0];
  plugins2.forEach(function(plugin) {
    if (!plugin.prototype || !plugin.prototype.constructor) {
      throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(plugin));
    }
    if (plugin.utils)
      Sortable.utils = _objectSpread2(_objectSpread2({}, Sortable.utils), plugin.utils);
    PluginManager.mount(plugin);
  });
};
Sortable.create = function(el, options) {
  return new Sortable(el, options);
};
Sortable.version = version;
var autoScrolls = [], scrollEl, scrollRootEl, scrolling = false, lastAutoScrollX, lastAutoScrollY, touchEvt$1, pointerElemChangedInterval;
function AutoScrollPlugin() {
  function AutoScroll() {
    this.defaults = {
      scroll: true,
      forceAutoScrollFallback: false,
      scrollSensitivity: 30,
      scrollSpeed: 10,
      bubbleScroll: true
    };
    for (var fn in this) {
      if (fn.charAt(0) === "_" && typeof this[fn] === "function") {
        this[fn] = this[fn].bind(this);
      }
    }
  }
  AutoScroll.prototype = {
    dragStarted: function dragStarted(_ref) {
      var originalEvent = _ref.originalEvent;
      if (this.sortable.nativeDraggable) {
        on(document, "dragover", this._handleAutoScroll);
      } else {
        if (this.options.supportPointer) {
          on(document, "pointermove", this._handleFallbackAutoScroll);
        } else if (originalEvent.touches) {
          on(document, "touchmove", this._handleFallbackAutoScroll);
        } else {
          on(document, "mousemove", this._handleFallbackAutoScroll);
        }
      }
    },
    dragOverCompleted: function dragOverCompleted(_ref2) {
      var originalEvent = _ref2.originalEvent;
      if (!this.options.dragOverBubble && !originalEvent.rootEl) {
        this._handleAutoScroll(originalEvent);
      }
    },
    drop: function drop3() {
      if (this.sortable.nativeDraggable) {
        off(document, "dragover", this._handleAutoScroll);
      } else {
        off(document, "pointermove", this._handleFallbackAutoScroll);
        off(document, "touchmove", this._handleFallbackAutoScroll);
        off(document, "mousemove", this._handleFallbackAutoScroll);
      }
      clearPointerElemChangedInterval();
      clearAutoScrolls();
      cancelThrottle();
    },
    nulling: function nulling() {
      touchEvt$1 = scrollRootEl = scrollEl = scrolling = pointerElemChangedInterval = lastAutoScrollX = lastAutoScrollY = null;
      autoScrolls.length = 0;
    },
    _handleFallbackAutoScroll: function _handleFallbackAutoScroll(evt) {
      this._handleAutoScroll(evt, true);
    },
    _handleAutoScroll: function _handleAutoScroll(evt, fallback) {
      var _this = this;
      var x = (evt.touches ? evt.touches[0] : evt).clientX, y = (evt.touches ? evt.touches[0] : evt).clientY, elem = document.elementFromPoint(x, y);
      touchEvt$1 = evt;
      if (fallback || this.options.forceAutoScrollFallback || Edge || IE11OrLess || Safari) {
        autoScroll(evt, this.options, elem, fallback);
        var ogElemScroller = getParentAutoScrollElement(elem, true);
        if (scrolling && (!pointerElemChangedInterval || x !== lastAutoScrollX || y !== lastAutoScrollY)) {
          pointerElemChangedInterval && clearPointerElemChangedInterval();
          pointerElemChangedInterval = setInterval(function() {
            var newElem = getParentAutoScrollElement(document.elementFromPoint(x, y), true);
            if (newElem !== ogElemScroller) {
              ogElemScroller = newElem;
              clearAutoScrolls();
            }
            autoScroll(evt, _this.options, newElem, fallback);
          }, 10);
          lastAutoScrollX = x;
          lastAutoScrollY = y;
        }
      } else {
        if (!this.options.bubbleScroll || getParentAutoScrollElement(elem, true) === getWindowScrollingElement()) {
          clearAutoScrolls();
          return;
        }
        autoScroll(evt, this.options, getParentAutoScrollElement(elem, false), false);
      }
    }
  };
  return _extends(AutoScroll, {
    pluginName: "scroll",
    initializeByDefault: true
  });
}
function clearAutoScrolls() {
  autoScrolls.forEach(function(autoScroll2) {
    clearInterval(autoScroll2.pid);
  });
  autoScrolls = [];
}
function clearPointerElemChangedInterval() {
  clearInterval(pointerElemChangedInterval);
}
var autoScroll = throttle(function(evt, options, rootEl2, isFallback) {
  if (!options.scroll)
    return;
  var x = (evt.touches ? evt.touches[0] : evt).clientX, y = (evt.touches ? evt.touches[0] : evt).clientY, sens = options.scrollSensitivity, speed = options.scrollSpeed, winScroller = getWindowScrollingElement();
  var scrollThisInstance = false, scrollCustomFn;
  if (scrollRootEl !== rootEl2) {
    scrollRootEl = rootEl2;
    clearAutoScrolls();
    scrollEl = options.scroll;
    scrollCustomFn = options.scrollFn;
    if (scrollEl === true) {
      scrollEl = getParentAutoScrollElement(rootEl2, true);
    }
  }
  var layersOut = 0;
  var currentParent = scrollEl;
  do {
    var el = currentParent, rect = getRect(el), top = rect.top, bottom = rect.bottom, left = rect.left, right = rect.right, width = rect.width, height = rect.height, canScrollX = void 0, canScrollY = void 0, scrollWidth = el.scrollWidth, scrollHeight = el.scrollHeight, elCSS = css(el), scrollPosX = el.scrollLeft, scrollPosY = el.scrollTop;
    if (el === winScroller) {
      canScrollX = width < scrollWidth && (elCSS.overflowX === "auto" || elCSS.overflowX === "scroll" || elCSS.overflowX === "visible");
      canScrollY = height < scrollHeight && (elCSS.overflowY === "auto" || elCSS.overflowY === "scroll" || elCSS.overflowY === "visible");
    } else {
      canScrollX = width < scrollWidth && (elCSS.overflowX === "auto" || elCSS.overflowX === "scroll");
      canScrollY = height < scrollHeight && (elCSS.overflowY === "auto" || elCSS.overflowY === "scroll");
    }
    var vx = canScrollX && (Math.abs(right - x) <= sens && scrollPosX + width < scrollWidth) - (Math.abs(left - x) <= sens && !!scrollPosX);
    var vy = canScrollY && (Math.abs(bottom - y) <= sens && scrollPosY + height < scrollHeight) - (Math.abs(top - y) <= sens && !!scrollPosY);
    if (!autoScrolls[layersOut]) {
      for (var i = 0; i <= layersOut; i++) {
        if (!autoScrolls[i]) {
          autoScrolls[i] = {};
        }
      }
    }
    if (autoScrolls[layersOut].vx != vx || autoScrolls[layersOut].vy != vy || autoScrolls[layersOut].el !== el) {
      autoScrolls[layersOut].el = el;
      autoScrolls[layersOut].vx = vx;
      autoScrolls[layersOut].vy = vy;
      clearInterval(autoScrolls[layersOut].pid);
      if (vx != 0 || vy != 0) {
        scrollThisInstance = true;
        autoScrolls[layersOut].pid = setInterval(function() {
          if (isFallback && this.layer === 0) {
            Sortable.active._onTouchMove(touchEvt$1);
          }
          var scrollOffsetY = autoScrolls[this.layer].vy ? autoScrolls[this.layer].vy * speed : 0;
          var scrollOffsetX = autoScrolls[this.layer].vx ? autoScrolls[this.layer].vx * speed : 0;
          if (typeof scrollCustomFn === "function") {
            if (scrollCustomFn.call(Sortable.dragged.parentNode[expando], scrollOffsetX, scrollOffsetY, evt, touchEvt$1, autoScrolls[this.layer].el) !== "continue") {
              return;
            }
          }
          scrollBy(autoScrolls[this.layer].el, scrollOffsetX, scrollOffsetY);
        }.bind({
          layer: layersOut
        }), 24);
      }
    }
    layersOut++;
  } while (options.bubbleScroll && currentParent !== winScroller && (currentParent = getParentAutoScrollElement(currentParent, false)));
  scrolling = scrollThisInstance;
}, 30);
var drop = function drop2(_ref) {
  var originalEvent = _ref.originalEvent, putSortable2 = _ref.putSortable, dragEl2 = _ref.dragEl, activeSortable = _ref.activeSortable, dispatchSortableEvent = _ref.dispatchSortableEvent, hideGhostForTarget = _ref.hideGhostForTarget, unhideGhostForTarget = _ref.unhideGhostForTarget;
  if (!originalEvent)
    return;
  var toSortable = putSortable2 || activeSortable;
  hideGhostForTarget();
  var touch = originalEvent.changedTouches && originalEvent.changedTouches.length ? originalEvent.changedTouches[0] : originalEvent;
  var target = document.elementFromPoint(touch.clientX, touch.clientY);
  unhideGhostForTarget();
  if (toSortable && !toSortable.el.contains(target)) {
    dispatchSortableEvent("spill");
    this.onSpill({
      dragEl: dragEl2,
      putSortable: putSortable2
    });
  }
};
function Revert() {
}
Revert.prototype = {
  startIndex: null,
  dragStart: function dragStart(_ref2) {
    var oldDraggableIndex2 = _ref2.oldDraggableIndex;
    this.startIndex = oldDraggableIndex2;
  },
  onSpill: function onSpill(_ref3) {
    var dragEl2 = _ref3.dragEl, putSortable2 = _ref3.putSortable;
    this.sortable.captureAnimationState();
    if (putSortable2) {
      putSortable2.captureAnimationState();
    }
    var nextSibling = getChild(this.sortable.el, this.startIndex, this.options);
    if (nextSibling) {
      this.sortable.el.insertBefore(dragEl2, nextSibling);
    } else {
      this.sortable.el.appendChild(dragEl2);
    }
    this.sortable.animateAll();
    if (putSortable2) {
      putSortable2.animateAll();
    }
  },
  drop
};
_extends(Revert, {
  pluginName: "revertOnSpill"
});
function Remove() {
}
Remove.prototype = {
  onSpill: function onSpill2(_ref4) {
    var dragEl2 = _ref4.dragEl, putSortable2 = _ref4.putSortable;
    var parentSortable = putSortable2 || this.sortable;
    parentSortable.captureAnimationState();
    dragEl2.parentNode && dragEl2.parentNode.removeChild(dragEl2);
    parentSortable.animateAll();
  },
  drop
};
_extends(Remove, {
  pluginName: "removeOnSpill"
});
Sortable.mount(new AutoScrollPlugin());
Sortable.mount(Remove, Revert);
var contextmenu_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$5 = defineComponent({
  name: "layoutTagsViewContextmenu",
  props: {
    dropdown: {
      type: Object,
      default: () => {
        return {
          x: 0,
          y: 0
        };
      }
    }
  },
  setup(props, { emit }) {
    const state = reactive({
      isShow: false,
      dropdownList: [
        { contextMenuClickId: 0, txt: "\u5237\u65B0", affix: false, icon: "ele-RefreshRight" },
        { contextMenuClickId: 1, txt: "\u5173\u95ED", affix: false, icon: "ele-Close" },
        { contextMenuClickId: 2, txt: "\u5173\u95ED\u5176\u5B83", affix: false, icon: "ele-CircleClose" },
        { contextMenuClickId: 3, txt: "\u5168\u90E8\u5173\u95ED", affix: false, icon: "ele-FolderDelete" },
        { contextMenuClickId: 4, txt: "\u5F53\u524D\u9875\u5168\u5C4F", affix: false, icon: "iconfont icon-fullscreen" }
      ],
      item: {},
      arrowLeft: 10
    });
    const dropdowns = computed(() => {
      if (props.dropdown.x + 117 > document.documentElement.clientWidth) {
        return {
          x: document.documentElement.clientWidth - 117 - 5,
          y: props.dropdown.y
        };
      } else {
        return props.dropdown;
      }
    });
    const onCurrentContextmenuClick = (contextMenuClickId) => {
      emit("currentContextmenuClick", Object.assign({}, { contextMenuClickId }, state.item));
    };
    const openContextmenu = (item) => {
      state.item = item;
      item.meta.isAffix ? state.dropdownList[1].affix = true : state.dropdownList[1].affix = false;
      closeContextmenu();
      setTimeout(() => {
        state.isShow = true;
      }, 10);
    };
    const closeContextmenu = () => {
      state.isShow = false;
    };
    onMounted(() => {
      document.body.addEventListener("click", closeContextmenu);
    });
    onUnmounted(() => {
      document.body.removeEventListener("click", closeContextmenu);
    });
    watch(
      () => props.dropdown,
      ({ x }) => {
        if (x + 117 > document.documentElement.clientWidth)
          state.arrowLeft = 117 - (document.documentElement.clientWidth - x);
        else
          state.arrowLeft = 10;
      },
      {
        deep: true
      }
    );
    return {
      dropdowns,
      openContextmenu,
      closeContextmenu,
      onCurrentContextmenuClick,
      ...toRefs(state)
    };
  }
});
const _hoisted_1$3 = { class: "el-dropdown-menu" };
const _hoisted_2$2 = ["onClick"];
function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_SvgIcon = resolveComponent("SvgIcon");
  return openBlock(), createBlock(Transition, {
    name: "el-zoom-in-center",
    persisted: ""
  }, {
    default: withCtx(() => [
      withDirectives((openBlock(), createElementBlock("div", {
        "aria-hidden": "true",
        class: "el-dropdown__popper el-popper is-light is-pure custom-contextmenu",
        role: "tooltip",
        "data-popper-placement": "bottom",
        style: normalizeStyle(`top: ${_ctx.dropdowns.y + 5}px;left: ${_ctx.dropdowns.x}px;`),
        key: Math.random()
      }, [
        createBaseVNode("ul", _hoisted_1$3, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.dropdownList, (v, k) => {
            return openBlock(), createElementBlock(Fragment, null, [
              !v.affix ? (openBlock(), createElementBlock("li", {
                class: "el-dropdown-menu__item",
                "aria-disabled": "false",
                tabindex: "-1",
                key: k,
                onClick: ($event) => _ctx.onCurrentContextmenuClick(v.contextMenuClickId)
              }, [
                createVNode(_component_SvgIcon, {
                  name: v.icon
                }, null, 8, ["name"]),
                createBaseVNode("span", null, toDisplayString(v.txt), 1)
              ], 8, _hoisted_2$2)) : createCommentVNode("v-if", true)
            ], 64);
          }), 256))
        ]),
        createBaseVNode("div", {
          class: "el-popper__arrow",
          style: normalizeStyle({ left: `${_ctx.arrowLeft}px` })
        }, null, 4)
      ], 4)), [
        [vShow, _ctx.isShow]
      ])
    ]),
    _: 1
  });
}
var Contextmenu = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$5], ["__scopeId", "data-v-2a4dc6e5"], ["__file", "D:/demo/admin-template/src/layout/navBars/tagsView/contextmenu.vue"]]);
var tagsView_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$4 = defineComponent({
  name: "layoutTagsView",
  components: { Contextmenu },
  setup() {
    const { proxy } = getCurrentInstance();
    const tagsRefs = ref([]);
    const scrollbarRef = ref();
    const contextmenuRef = ref();
    const tagsUlRef = ref();
    const stores = useTagsViewRoutes();
    const storesThemeConfig = useThemeConfig();
    const storesTagsViewRoutes = useTagsViewRoutes();
    const { themeConfig } = storeToRefs(storesThemeConfig);
    const { tagsViewRoutes } = storeToRefs(storesTagsViewRoutes);
    const storesKeepALiveNames = useKeepALiveNames();
    const route = useRoute();
    const router = useRouter();
    const state = reactive({
      routeActive: "",
      routePath: route.path,
      dropdown: { x: "", y: "" },
      sortable: "",
      tagsRefsIndex: 0,
      tagsViewList: [],
      tagsViewRoutesList: []
    });
    const setTagsStyle = computed(() => {
      return themeConfig.value.tagsStyle;
    });
    const getThemeConfig = computed(() => {
      return themeConfig.value;
    });
    const setTagsViewNameI18n = computed(() => {
      return (v) => {
        return other.setTagsViewNameI18n(v);
      };
    });
    const isActive = (v) => {
      if (getThemeConfig.value.isShareTagsView) {
        return v.path === state.routePath;
      } else {
        if (v.query && Object.keys(v.query).length || v.params && Object.keys(v.params).length) {
          return v.url ? v.url === state.routeActive : v.path === state.routeActive;
        } else {
          return v.path === state.routePath;
        }
      }
    };
    const addBrowserSetSession = (tagsViewList) => {
      Session.set("tagsViewList", tagsViewList);
    };
    const getTagsViewRoutes = async () => {
      state.routeActive = await setTagsViewHighlight(route);
      state.routePath = await route.meta.isDynamic ? route.meta.isDynamicPath : route.path;
      state.tagsViewList = [];
      state.tagsViewRoutesList = tagsViewRoutes.value;
      initTagsView();
    };
    const initTagsView = async () => {
      if (Session.get("tagsViewList") && getThemeConfig.value.isCacheTagsView) {
        state.tagsViewList = await Session.get("tagsViewList");
      } else {
        await state.tagsViewRoutesList.map((v) => {
          if (v.meta.isAffix && !v.meta.isHide) {
            v.url = setTagsViewHighlight(v);
            state.tagsViewList.push({ ...v });
            storesKeepALiveNames.addCachedView(v);
          }
        });
        await addTagsView(route.path, route);
      }
      getTagsRefsIndex(getThemeConfig.value.isShareTagsView ? state.routePath : state.routeActive);
    };
    const solveAddTagsView = async (path, to) => {
      let isDynamicPath = to.meta.isDynamic ? to.meta.isDynamicPath : path;
      let current = state.tagsViewList.filter(
        (v) => v.path === isDynamicPath && isObjectValueEqual(
          to.meta.isDynamic ? v.params ? v.params : null : v.query ? v.query : null,
          to.meta.isDynamic ? (to == null ? void 0 : to.params) ? to == null ? void 0 : to.params : null : (to == null ? void 0 : to.query) ? to == null ? void 0 : to.query : null
        )
      );
      if (current.length <= 0) {
        let findItem = state.tagsViewRoutesList.find((v) => v.path === isDynamicPath);
        if (!findItem)
          return false;
        if (findItem.meta.isAffix)
          return false;
        if (findItem.meta.isLink && !findItem.meta.isIframe)
          return false;
        to.meta.isDynamic ? findItem.params = to.params : findItem.query = to.query;
        findItem.url = setTagsViewHighlight(findItem);
        state.tagsViewList.push({ ...findItem });
        await storesKeepALiveNames.addCachedView(findItem);
        addBrowserSetSession(state.tagsViewList);
      }
    };
    const singleAddTagsView = (path, to) => {
      let isDynamicPath = to.meta.isDynamic ? to.meta.isDynamicPath : path;
      state.tagsViewList.forEach((v) => {
        if (v.path === isDynamicPath && !isObjectValueEqual(
          to.meta.isDynamic ? v.params ? v.params : null : v.query ? v.query : null,
          to.meta.isDynamic ? (to == null ? void 0 : to.params) ? to == null ? void 0 : to.params : null : (to == null ? void 0 : to.query) ? to == null ? void 0 : to.query : null
        )) {
          to.meta.isDynamic ? v.params = to.params : v.query = to.query;
          v.url = setTagsViewHighlight(v);
          addBrowserSetSession(state.tagsViewList);
        }
      });
    };
    const addTagsView = (path, to) => {
      nextTick(async () => {
        let item = "";
        if (to && to.meta.isDynamic) {
          if (!getThemeConfig.value.isShareTagsView)
            await solveAddTagsView(path, to);
          else
            await singleAddTagsView(path, to);
          if (state.tagsViewList.some((v) => v.path === to.meta.isDynamicPath))
            return false;
          item = state.tagsViewRoutesList.find((v) => v.path === to.meta.isDynamicPath);
        } else {
          if (!getThemeConfig.value.isShareTagsView)
            await solveAddTagsView(path, to);
          else
            await singleAddTagsView(path, to);
          if (state.tagsViewList.some((v) => v.path === path))
            return false;
          item = state.tagsViewRoutesList.find((v) => v.path === path);
        }
        if (!item)
          return false;
        if (item.meta.isLink && !item.meta.isIframe)
          return false;
        if (to && to.meta.isDynamic)
          item.params = (to == null ? void 0 : to.params) ? to == null ? void 0 : to.params : route.params;
        else
          item.query = (to == null ? void 0 : to.query) ? to == null ? void 0 : to.query : route.query;
        item.url = setTagsViewHighlight(item);
        await storesKeepALiveNames.addCachedView(item);
        await state.tagsViewList.push({ ...item });
        await addBrowserSetSession(state.tagsViewList);
      });
    };
    const refreshCurrentTagsView = async (fullPath) => {
      const item = state.tagsViewList.find((v) => getThemeConfig.value.isShareTagsView ? v.path === fullPath : v.url === fullPath);
      if (item != null) {
        await storesKeepALiveNames.delCachedView(item);
        proxy.mittBus.emit("onTagsViewRefreshRouterView", fullPath);
        if (item.meta.isKeepAlive)
          storesKeepALiveNames.addCachedView(item);
      }
    };
    const closeCurrentTagsView = (path) => {
      state.tagsViewList.map((v, k, arr) => {
        if (!v.meta.isAffix) {
          if (getThemeConfig.value.isShareTagsView ? v.path === path : v.url === path) {
            storesKeepALiveNames.delCachedView(v);
            state.tagsViewList.splice(k, 1);
            setTimeout(() => {
              if (state.tagsViewList.length === k && getThemeConfig.value.isShareTagsView ? state.routePath === path : state.routeActive === path) {
                if (arr[arr.length - 1].meta.isDynamic) {
                  if (k !== arr.length)
                    router.push({ name: arr[k].name, params: arr[k].params });
                  else
                    router.push({ name: arr[arr.length - 1].name, params: arr[arr.length - 1].params });
                } else {
                  if (k !== arr.length)
                    router.push({ path: arr[k].path, query: arr[k].query });
                  else
                    router.push({ path: arr[arr.length - 1].path, query: arr[arr.length - 1].query });
                }
              } else {
                if (state.tagsViewList.length !== k && getThemeConfig.value.isShareTagsView ? state.routePath === path : state.routeActive === path) {
                  if (arr[k].meta.isDynamic) {
                    router.push({ name: arr[k].name, params: arr[k].params });
                  } else {
                    router.push({ path: arr[k].path, query: arr[k].query });
                  }
                }
              }
            }, 0);
          }
        }
      });
      addBrowserSetSession(state.tagsViewList);
    };
    const closeOtherTagsView = (path) => {
      if (Session.get("tagsViewList")) {
        state.tagsViewList = [];
        Session.get("tagsViewList").map((v) => {
          if (v.meta.isAffix && !v.meta.isHide) {
            v.url = setTagsViewHighlight(v);
            storesKeepALiveNames.delOthersCachedViews(v);
            state.tagsViewList.push({ ...v });
          }
        });
        addTagsView(path, route);
        addBrowserSetSession(state.tagsViewList);
      }
    };
    const closeAllTagsView = () => {
      if (Session.get("tagsViewList")) {
        storesKeepALiveNames.delAllCachedViews();
        state.tagsViewList = [];
        Session.get("tagsViewList").map((v) => {
          if (v.meta.isAffix && !v.meta.isHide) {
            v.url = setTagsViewHighlight(v);
            state.tagsViewList.push({ ...v });
            router.push({ path: state.tagsViewList[state.tagsViewList.length - 1].path });
          }
        });
        addBrowserSetSession(state.tagsViewList);
      }
    };
    const openCurrenFullscreen = async (path) => {
      const item = state.tagsViewList.find((v) => getThemeConfig.value.isShareTagsView ? v.path === path : v.url === path);
      if (item.meta.isDynamic)
        await router.push({ name: item.name, params: item.params });
      else
        await router.push({ name: item.name, query: item.query });
      stores.setCurrenFullscreen(true);
    };
    const getCurrentRouteItem = (path, cParams) => {
      const itemRoute = Session.get("tagsViewList") ? Session.get("tagsViewList") : state.tagsViewList;
      return itemRoute.find((v) => {
        if (v.path === path && isObjectValueEqual(
          v.meta.isDynamic ? v.params ? v.params : null : v.query ? v.query : null,
          cParams && Object.keys(cParams ? cParams : {}).length > 0 ? cParams : null
        )) {
          return v;
        } else if (v.path === path && Object.keys(cParams ? cParams : {}).length <= 0) {
          return v;
        }
      });
    };
    const onCurrentContextmenuClick = async (item) => {
      const cParams = item.meta.isDynamic ? item.params : item.query;
      if (!getCurrentRouteItem(item.path, cParams))
        return ElMessage({ type: "warning", message: "\u8BF7\u6B63\u786E\u8F93\u5165\u8DEF\u5F84\u53CA\u5B8C\u6574\u53C2\u6570\uFF08query\u3001params\uFF09" });
      const { path, name, params, query, meta, url } = getCurrentRouteItem(item.path, cParams);
      switch (item.contextMenuClickId) {
        case 0:
          if (meta.isDynamic)
            await router.push({ name, params });
          else
            await router.push({ path, query });
          refreshCurrentTagsView(route.fullPath);
          break;
        case 1:
          closeCurrentTagsView(getThemeConfig.value.isShareTagsView ? path : url);
          break;
        case 2:
          if (meta.isDynamic)
            await router.push({ name, params });
          else
            await router.push({ path, query });
          closeOtherTagsView(path);
          break;
        case 3:
          closeAllTagsView();
          break;
        case 4:
          openCurrenFullscreen(getThemeConfig.value.isShareTagsView ? path : url);
          break;
      }
    };
    const onContextmenu = (v, e) => {
      const { clientX, clientY } = e;
      state.dropdown.x = clientX;
      state.dropdown.y = clientY;
      contextmenuRef.value.openContextmenu(v);
    };
    const onTagsClick = (v, k) => {
      state.tagsRefsIndex = k;
      router.push(v);
    };
    const setTagsViewHighlight = (v) => {
      let params = v.query && Object.keys(v.query).length > 0 ? v.query : v.params;
      if (!params || Object.keys(params).length <= 0)
        return v.path;
      let path = "";
      for (let i in params) {
        path += params[i];
      }
      return `${v.meta.isDynamic ? v.meta.isDynamicPath : v.path}-${path}`;
    };
    const updateScrollbar = () => {
      proxy.$refs.scrollbarRef.update();
    };
    const onHandleScroll = (e) => {
      proxy.$refs.scrollbarRef.$refs.wrap$.scrollLeft += e.wheelDelta / 4;
    };
    const tagsViewmoveToCurrentTag = () => {
      nextTick(() => {
        if (tagsRefs.value.length <= 0)
          return false;
        let liDom = tagsRefs.value[state.tagsRefsIndex];
        let liIndex = state.tagsRefsIndex;
        let liLength = tagsRefs.value.length;
        let liFirst = tagsRefs.value[0];
        let liLast = tagsRefs.value[tagsRefs.value.length - 1];
        let scrollRefs = proxy.$refs.scrollbarRef.$refs.wrap$;
        let scrollS = scrollRefs.scrollWidth;
        let offsetW = scrollRefs.offsetWidth;
        let scrollL = scrollRefs.scrollLeft;
        let liPrevTag = tagsRefs.value[state.tagsRefsIndex - 1];
        let liNextTag = tagsRefs.value[state.tagsRefsIndex + 1];
        let beforePrevL = "";
        let afterNextL = "";
        if (liDom === liFirst) {
          scrollRefs.scrollLeft = 0;
        } else if (liDom === liLast) {
          scrollRefs.scrollLeft = scrollS - offsetW;
        } else {
          if (liIndex === 0)
            beforePrevL = liFirst.offsetLeft - 5;
          else
            beforePrevL = (liPrevTag == null ? void 0 : liPrevTag.offsetLeft) - 5;
          if (liIndex === liLength)
            afterNextL = liLast.offsetLeft + liLast.offsetWidth + 5;
          else
            afterNextL = liNextTag.offsetLeft + liNextTag.offsetWidth + 5;
          if (afterNextL > scrollL + offsetW) {
            scrollRefs.scrollLeft = afterNextL - offsetW;
          } else if (beforePrevL < scrollL) {
            scrollRefs.scrollLeft = beforePrevL;
          }
        }
        updateScrollbar();
      });
    };
    const getTagsRefsIndex = (path) => {
      nextTick(async () => {
        let tagsViewList = await state.tagsViewList;
        state.tagsRefsIndex = tagsViewList.findIndex((v) => {
          if (getThemeConfig.value.isShareTagsView) {
            return v.path === path;
          } else {
            return v.url === path;
          }
        });
        tagsViewmoveToCurrentTag();
      });
    };
    const initSortable = async () => {
      const el = document.querySelector(".layout-navbars-tagsview-ul");
      if (!el)
        return false;
      state.sortable.el && state.sortable.destroy();
      state.sortable = Sortable.create(el, {
        animation: 300,
        dataIdAttr: "data-url",
        disabled: getThemeConfig.value.isSortableTagsView ? false : true,
        onEnd: () => {
          const sortEndList = [];
          state.sortable.toArray().map((val) => {
            state.tagsViewList.map((v) => {
              if (v.url === val)
                sortEndList.push({ ...v });
            });
          });
          addBrowserSetSession(sortEndList);
        }
      });
    };
    const onSortableResize = async () => {
      await initSortable();
      if (other.isMobile())
        state.sortable.el && state.sortable.destroy();
    };
    onBeforeMount(() => {
      onSortableResize();
      window.addEventListener("resize", onSortableResize);
      proxy.mittBus.on("onCurrentContextmenuClick", (data) => {
        onCurrentContextmenuClick(data);
      });
      proxy.mittBus.on("openOrCloseSortable", () => {
        initSortable();
      });
      proxy.mittBus.on("openShareTagsView", () => {
        if (getThemeConfig.value.isShareTagsView) {
          router.push("/home");
          state.tagsViewList = [];
          state.tagsViewRoutesList.map((v) => {
            if (v.meta.isAffix && !v.meta.isHide) {
              v.url = setTagsViewHighlight(v);
              state.tagsViewList.push({ ...v });
            }
          });
        }
      });
    });
    onUnmounted(() => {
      proxy.mittBus.off("onCurrentContextmenuClick", () => {
      });
      proxy.mittBus.off("openOrCloseSortable", () => {
      });
      proxy.mittBus.off("openShareTagsView", () => {
      });
      window.removeEventListener("resize", onSortableResize);
    });
    onBeforeUpdate(() => {
      tagsRefs.value = [];
    });
    onMounted(() => {
      getTagsViewRoutes();
      initSortable();
    });
    onBeforeRouteUpdate(async (to) => {
      state.routeActive = setTagsViewHighlight(to);
      state.routePath = to.meta.isDynamic ? to.meta.isDynamicPath : to.path;
      await addTagsView(to.path, to);
      getTagsRefsIndex(getThemeConfig.value.isShareTagsView ? state.routePath : state.routeActive);
    });
    watch(
      pinia.state,
      (val) => {
        if (val.tagsViewRoutes.tagsViewRoutes.length === state.tagsViewRoutesList.length)
          return false;
        getTagsViewRoutes();
      },
      {
        deep: true
      }
    );
    return {
      isActive,
      onContextmenu,
      onTagsClick,
      tagsRefs,
      contextmenuRef,
      scrollbarRef,
      tagsUlRef,
      onHandleScroll,
      getThemeConfig,
      setTagsStyle,
      setTagsViewNameI18n,
      refreshCurrentTagsView,
      closeCurrentTagsView,
      onCurrentContextmenuClick,
      ...toRefs(state)
    };
  }
});
const _hoisted_1$2 = ["data-url", "onContextmenu", "onClick"];
const _hoisted_2$1 = {
  key: 0,
  class: "iconfont icon-webicon318 layout-navbars-tagsview-ul-li-iconfont"
};
function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_SvgIcon = resolveComponent("SvgIcon");
  const _component_el_scrollbar = resolveComponent("el-scrollbar");
  const _component_Contextmenu = resolveComponent("Contextmenu");
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(["layout-navbars-tagsview w100", { "layout-navbars-tagsview-shadow": _ctx.getThemeConfig.layout === "classic" }])
  }, [
    createVNode(_component_el_scrollbar, {
      ref: "scrollbarRef",
      onWheel: withModifiers(_ctx.onHandleScroll, ["prevent"])
    }, {
      default: withCtx(() => [
        createBaseVNode("ul", {
          class: normalizeClass(["layout-navbars-tagsview-ul", _ctx.setTagsStyle]),
          ref: "tagsUlRef"
        }, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.tagsViewList, (v, k) => {
            return openBlock(), createElementBlock("li", {
              key: k,
              class: normalizeClass(["layout-navbars-tagsview-ul-li", { "is-active": _ctx.isActive(v) }]),
              "data-url": v.url,
              onContextmenu: withModifiers(($event) => _ctx.onContextmenu(v, $event), ["prevent"]),
              onClick: ($event) => _ctx.onTagsClick(v, k),
              ref_for: true,
              ref: (el) => {
                if (el)
                  _ctx.tagsRefs[k] = el;
              }
            }, [
              _ctx.isActive(v) ? (openBlock(), createElementBlock("i", _hoisted_2$1)) : createCommentVNode("v-if", true),
              !_ctx.isActive(v) && _ctx.getThemeConfig.isTagsviewIcon ? (openBlock(), createBlock(_component_SvgIcon, {
                key: 1,
                name: v.meta.icon,
                class: "pr5"
              }, null, 8, ["name"])) : createCommentVNode("v-if", true),
              createBaseVNode("span", null, toDisplayString(_ctx.setTagsViewNameI18n(v)), 1),
              _ctx.isActive(v) ? (openBlock(), createElementBlock(Fragment, { key: 2 }, [
                createVNode(_component_SvgIcon, {
                  name: "ele-RefreshRight",
                  class: "ml5 layout-navbars-tagsview-ul-li-refresh",
                  onClick: _cache[0] || (_cache[0] = withModifiers(($event) => _ctx.refreshCurrentTagsView(_ctx.$route.fullPath), ["stop"]))
                }),
                !v.meta.isAffix ? (openBlock(), createBlock(_component_SvgIcon, {
                  key: 0,
                  name: "ele-Close",
                  class: "layout-navbars-tagsview-ul-li-icon layout-icon-active",
                  onClick: withModifiers(($event) => _ctx.closeCurrentTagsView(_ctx.getThemeConfig.isShareTagsView ? v.path : v.url), ["stop"])
                }, null, 8, ["onClick"])) : createCommentVNode("v-if", true)
              ], 64)) : createCommentVNode("v-if", true),
              !v.meta.isAffix ? (openBlock(), createBlock(_component_SvgIcon, {
                key: 3,
                name: "ele-Close",
                class: "layout-navbars-tagsview-ul-li-icon layout-icon-three",
                onClick: withModifiers(($event) => _ctx.closeCurrentTagsView(_ctx.getThemeConfig.isShareTagsView ? v.path : v.url), ["stop"])
              }, null, 8, ["onClick"])) : createCommentVNode("v-if", true)
            ], 42, _hoisted_1$2);
          }), 128))
        ], 2)
      ]),
      _: 1
    }, 8, ["onWheel"]),
    createVNode(_component_Contextmenu, {
      dropdown: _ctx.dropdown,
      ref: "contextmenuRef",
      onCurrentContextmenuClick: _ctx.onCurrentContextmenuClick
    }, null, 8, ["dropdown", "onCurrentContextmenuClick"])
  ], 2);
}
var TagsView = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$4], ["__scopeId", "data-v-ca8dfad2"], ["__file", "D:/demo/admin-template/src/layout/navBars/tagsView/tagsView.vue"]]);
var index_vue_vue_type_style_index_0_scoped_true_lang$1 = "";
const _sfc_main$3 = defineComponent({
  name: "layoutNavBars",
  components: { BreadcrumbIndex, TagsView },
  setup() {
    const storesThemeConfig = useThemeConfig();
    const { themeConfig } = storeToRefs(storesThemeConfig);
    const setShowTagsView = computed(() => {
      let { layout, isTagsview } = themeConfig.value;
      return layout !== "classic" && isTagsview;
    });
    return {
      setShowTagsView
    };
  }
});
const _hoisted_1$1 = { class: "layout-navbars-container" };
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_BreadcrumbIndex = resolveComponent("BreadcrumbIndex");
  const _component_TagsView = resolveComponent("TagsView");
  return openBlock(), createElementBlock("div", _hoisted_1$1, [
    createVNode(_component_BreadcrumbIndex),
    _ctx.setShowTagsView ? (openBlock(), createBlock(_component_TagsView, { key: 0 })) : createCommentVNode("v-if", true)
  ]);
}
var NavBarsIndex = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$3], ["__scopeId", "data-v-2ea1a20c"], ["__file", "D:/demo/admin-template/src/layout/navBars/index.vue"]]);
const _sfc_main$2 = defineComponent({
  name: "layoutHeader",
  components: { NavBarsIndex },
  setup() {
    const storesTagsViewRoutes = useTagsViewRoutes();
    const storesThemeConfig = useThemeConfig();
    const { themeConfig } = storeToRefs(storesThemeConfig);
    const { isTagsViewCurrenFull } = storeToRefs(storesTagsViewRoutes);
    const setHeaderHeight = computed(() => {
      let { isTagsview, layout } = themeConfig.value;
      if (isTagsview && layout !== "classic")
        return "84px";
      else
        return "50px";
    });
    return {
      setHeaderHeight,
      isTagsViewCurrenFull
    };
  }
});
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_NavBarsIndex = resolveComponent("NavBarsIndex");
  const _component_el_header = resolveComponent("el-header");
  return withDirectives((openBlock(), createBlock(_component_el_header, {
    class: "layout-header w100",
    height: _ctx.setHeaderHeight
  }, {
    default: withCtx(() => [
      createVNode(_component_NavBarsIndex)
    ]),
    _: 1
  }, 8, ["height"])), [
    [vShow, !_ctx.isTagsViewCurrenFull]
  ]);
}
var Headers = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["__file", "D:/demo/admin-template/src/layout/component/header.vue"]]);
var index_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$1 = defineComponent({
  name: "layoutFooter",
  setup() {
    const state = reactive({
      isDelayFooter: true
    });
    onBeforeRouteUpdate(() => {
      setTimeout(() => {
        state.isDelayFooter = false;
        setTimeout(() => {
          state.isDelayFooter = true;
        }, 800);
      }, 0);
    });
    return {
      ...toRefs(state)
    };
  }
});
const _withScopeId = (n) => (pushScopeId("data-v-6bdb0e5a"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "layout-footer mt15" };
const _hoisted_2 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "layout-footer-warp" }, [
  /* @__PURE__ */ createBaseVNode("div", null, "\u533B\u7597\u5668\u68B0\u4EA7\u4E1A\u7EFC\u5408\u6570\u636E\u7CFB\u7EDF"),
  /* @__PURE__ */ createBaseVNode("div", { class: "mt5" }, "\u4E0A\u6D77\u6570\u667A\u535A\u533B\u7597\u5668\u68B0\u79D1\u6280\u6709\u9650\u516C\u53F8-\u7248\u6743\u6240\u6709")
], -1));
const _hoisted_3 = [
  _hoisted_2
];
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return withDirectives((openBlock(), createElementBlock("div", _hoisted_1, _hoisted_3, 512)), [
    [vShow, _ctx.isDelayFooter]
  ]);
}
var Footers = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__scopeId", "data-v-6bdb0e5a"], ["__file", "D:/demo/admin-template/src/layout/footer/index.vue"]]);
const _sfc_main = defineComponent({
  name: "layoutMain",
  components: { LayoutParentView, Footers },
  setup() {
    const { proxy } = getCurrentInstance();
    const storesThemeConfig = useThemeConfig();
    const { themeConfig } = storeToRefs(storesThemeConfig);
    const route = useRoute();
    const state = reactive({
      headerHeight: "",
      currentRouteMeta: {}
    });
    const isClassicOrTransverse = computed(() => {
      const { layout } = themeConfig.value;
      return layout === "classic" || layout === "transverse";
    });
    const initHeaderHeight = () => {
      const bool = state.currentRouteMeta.isLink && state.currentRouteMeta.isIframe;
      let { isTagsview } = themeConfig.value;
      if (isTagsview)
        return state.headerHeight = bool ? `86px` : `115px`;
      else
        return state.headerHeight = `80px`;
    };
    const initGetMeta = () => {
      state.currentRouteMeta = route.meta;
    };
    onMounted(async () => {
      await initGetMeta();
      initHeaderHeight();
      NextLoading.done();
    });
    watch(
      () => route.path,
      () => {
        state.currentRouteMeta = route.meta;
        const bool = state.currentRouteMeta.isLink && state.currentRouteMeta.isIframe;
        state.headerHeight = bool ? `86px` : `115px`;
        proxy.$refs.layoutScrollbarRef.update();
      }
    );
    watch(
      themeConfig,
      (val) => {
        var _a, _b;
        state.currentRouteMeta = route.meta;
        const bool = state.currentRouteMeta.isLink && state.currentRouteMeta.isIframe;
        state.headerHeight = val.isTagsview ? bool ? `86px` : `115px` : "51px";
        (_b = (_a = proxy.$refs) == null ? void 0 : _a.layoutScrollbarRef) == null ? void 0 : _b.update();
      },
      {
        deep: true
      }
    );
    return {
      themeConfig,
      isClassicOrTransverse,
      ...toRefs(state)
    };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_LayoutParentView = resolveComponent("LayoutParentView");
  const _component_Footers = resolveComponent("Footers");
  const _component_el_scrollbar = resolveComponent("el-scrollbar");
  const _component_el_main = resolveComponent("el-main");
  return openBlock(), createBlock(_component_el_main, { class: "layout-main" }, {
    default: withCtx(() => [
      createVNode(_component_el_scrollbar, {
        ref: "layoutScrollbarRef",
        class: normalizeClass({
          "layout-scrollbar": !_ctx.isClassicOrTransverse && !_ctx.currentRouteMeta.isLink && !_ctx.currentRouteMeta.isIframe || !_ctx.isClassicOrTransverse && _ctx.currentRouteMeta.isLink && !_ctx.currentRouteMeta.isIframe
        })
      }, {
        default: withCtx(() => [
          createVNode(_component_LayoutParentView, {
            style: normalizeStyle({
              padding: !_ctx.isClassicOrTransverse || _ctx.currentRouteMeta.isLink && _ctx.currentRouteMeta.isIframe ? "0" : "15px",
              transition: "padding 0.3s ease-in-out"
            })
          }, null, 8, ["style"]),
          _ctx.themeConfig.isFooter ? (openBlock(), createBlock(_component_Footers, { key: 0 })) : createCommentVNode("v-if", true)
        ]),
        _: 1
      }, 8, ["class"])
    ]),
    _: 1
  });
}
var Mains = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/demo/admin-template/src/layout/component/main.vue"]]);
export { Headers as H, Logo as L, Mains as M, SubItem as S, TagsView as T };
