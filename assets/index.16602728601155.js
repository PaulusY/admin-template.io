import { n as nextTick, L as defineComponent, i as ref, a3 as reactive, m as computed, l as onMounted, j as watch, a6 as toRefs, a7 as resolveComponent, o as openBlock, a as createElementBlock, _ as createVNode, T as withCtx, S as createBlock, O as normalizeClass, b as createBaseVNode, Z as toDisplayString, X as createCommentVNode, F as Fragment, aa as renderList } from "./vue.1660272860115.js";
import { s as svg, _ as _export_sfc } from "./index.1660272860115.js";
const getAlicdnIconfont = () => {
  return new Promise((resolve, reject) => {
    nextTick(() => {
      const styles = document.styleSheets;
      let sheetsList = [];
      let sheetsIconList = [];
      for (let i = 0; i < styles.length; i++) {
        if (styles[i].href && styles[i].href.indexOf("at.alicdn.com") > -1) {
          sheetsList.push(styles[i]);
        }
      }
      for (let i = 0; i < sheetsList.length; i++) {
        for (let j = 0; j < sheetsList[i].cssRules.length; j++) {
          if (sheetsList[i].cssRules[j].selectorText && sheetsList[i].cssRules[j].selectorText.indexOf(".icon-") > -1) {
            sheetsIconList.push(
              `${sheetsList[i].cssRules[j].selectorText.substring(1, sheetsList[i].cssRules[j].selectorText.length).replace(/\:\:before/gi, "")}`
            );
          }
        }
      }
      if (sheetsIconList.length > 0)
        resolve(sheetsIconList);
      else
        reject("\u672A\u83B7\u53D6\u5230\u503C\uFF0C\u8BF7\u5237\u65B0\u91CD\u8BD5");
    });
  });
};
const getElementPlusIconfont = () => {
  return new Promise((resolve, reject) => {
    nextTick(() => {
      const icons = svg;
      const sheetsIconList = [];
      for (const i in icons) {
        sheetsIconList.push(`ele-${icons[i].name}`);
      }
      if (sheetsIconList.length > 0)
        resolve(sheetsIconList);
      else
        reject("\u672A\u83B7\u53D6\u5230\u503C\uFF0C\u8BF7\u5237\u65B0\u91CD\u8BD5");
    });
  });
};
const getAwesomeIconfont = () => {
  return new Promise((resolve, reject) => {
    nextTick(() => {
      const styles = document.styleSheets;
      let sheetsList = [];
      let sheetsIconList = [];
      for (let i = 0; i < styles.length; i++) {
        if (styles[i].href && styles[i].href.indexOf("netdna.bootstrapcdn.com") > -1) {
          sheetsList.push(styles[i]);
        }
      }
      for (let i = 0; i < sheetsList.length; i++) {
        for (let j = 0; j < sheetsList[i].cssRules.length; j++) {
          if (sheetsList[i].cssRules[j].selectorText && sheetsList[i].cssRules[j].selectorText.indexOf(".fa-") === 0 && sheetsList[i].cssRules[j].selectorText.indexOf(",") === -1) {
            if (/::before/.test(sheetsList[i].cssRules[j].selectorText)) {
              sheetsIconList.push(
                `${sheetsList[i].cssRules[j].selectorText.substring(1, sheetsList[i].cssRules[j].selectorText.length).replace(/\:\:before/gi, "")}`
              );
            }
          }
        }
      }
      if (sheetsIconList.length > 0)
        resolve(sheetsIconList.reverse());
      else
        reject("\u672A\u83B7\u53D6\u5230\u503C\uFF0C\u8BF7\u5237\u65B0\u91CD\u8BD5");
    });
  });
};
const initIconfont = {
  ali: () => {
    return getAlicdnIconfont();
  },
  ele: () => {
    return getElementPlusIconfont();
  },
  awe: () => {
    return getAwesomeIconfont();
  }
};
const _sfc_main = defineComponent({
  name: "iconSelector",
  emits: ["update:modelValue", "get", "clear"],
  props: {
    prepend: {
      type: String,
      default: () => "ele-Pointer"
    },
    placeholder: {
      type: String,
      default: () => "\u8BF7\u8F93\u5165\u5185\u5BB9\u641C\u7D22\u56FE\u6807\u6216\u8005\u9009\u62E9\u56FE\u6807"
    },
    size: {
      type: String,
      default: () => "default"
    },
    title: {
      type: String,
      default: () => "\u8BF7\u9009\u62E9\u56FE\u6807"
    },
    type: {
      type: String,
      default: () => "ele"
    },
    disabled: {
      type: Boolean,
      default: () => false
    },
    clearable: {
      type: Boolean,
      default: () => true
    },
    emptyDescription: {
      type: String,
      default: () => "\u65E0\u76F8\u5173\u56FE\u6807"
    },
    modelValue: String
  },
  setup(props, { emit }) {
    const inputWidthRef = ref();
    const selectorScrollbarRef = ref();
    const state = reactive({
      fontIconPrefix: "",
      fontIconWidth: 0,
      fontIconSearch: "",
      fontIconTabsIndex: 0,
      fontIconSheetsList: [],
      fontIconPlaceholder: "",
      fontIconType: "ali",
      fontIconShow: true
    });
    const onIconFocus = () => {
      if (!props.modelValue)
        return false;
      state.fontIconSearch = "";
      state.fontIconPlaceholder = props.modelValue;
    };
    const onIconBlur = () => {
      setTimeout(() => {
        const icon = state.fontIconSheetsList.filter((icon2) => icon2 === state.fontIconSearch);
        if (icon.length <= 0)
          state.fontIconSearch = "";
      }, 300);
    };
    const initModeValueEcho = () => {
      if (props.modelValue === "")
        return state.fontIconPlaceholder = props.placeholder;
      state.fontIconPlaceholder = props.modelValue;
      state.fontIconPrefix = props.modelValue;
    };
    const initFontIconTypeEcho = () => {
      var _a, _b, _c;
      if (((_a = props.modelValue) == null ? void 0 : _a.indexOf("iconfont")) > -1)
        onIconChange("ali");
      else if (((_b = props.modelValue) == null ? void 0 : _b.indexOf("ele-")) > -1)
        onIconChange("ele");
      else if (((_c = props.modelValue) == null ? void 0 : _c.indexOf("fa")) > -1)
        onIconChange("awe");
      else
        onIconChange("ali");
    };
    const fontIconSheetsFilterList = computed(() => {
      if (!state.fontIconSearch)
        return state.fontIconSheetsList;
      let search = state.fontIconSearch.trim().toLowerCase();
      return state.fontIconSheetsList.filter((item) => {
        if (item.toLowerCase().indexOf(search) !== -1)
          return item;
      });
    });
    const getInputWidth = () => {
      nextTick(() => {
        state.fontIconWidth = inputWidthRef.value.$el.offsetWidth;
      });
    };
    const initResize = () => {
      window.addEventListener("resize", () => {
        getInputWidth();
      });
    };
    const initFontIconData = async (type) => {
      state.fontIconSheetsList = [];
      if (type === "ali") {
        await initIconfont.ali().then((res) => {
          state.fontIconSheetsList = res.map((i) => `iconfont ${i}`);
        });
      } else if (type === "ele") {
        await initIconfont.ele().then((res) => {
          state.fontIconSheetsList = res;
        });
      } else if (type === "awe") {
        await initIconfont.awe().then((res) => {
          state.fontIconSheetsList = res.map((i) => `fa ${i}`);
        });
      }
      state.fontIconPlaceholder = props.placeholder;
      initModeValueEcho();
    };
    const onIconChange = (type) => {
      state.fontIconType = type;
      initFontIconData(type);
    };
    const onColClick = (v) => {
      state.fontIconPlaceholder = v;
      state.fontIconPrefix = v;
      emit("get", state.fontIconPrefix);
      emit("update:modelValue", state.fontIconPrefix);
    };
    const onClearFontIcon = () => {
      state.fontIconPrefix = "";
      emit("clear", state.fontIconPrefix);
      emit("update:modelValue", state.fontIconPrefix);
    };
    const onPopoverShow = () => {
      initModeValueEcho();
      initFontIconTypeEcho();
    };
    onMounted(() => {
      initModeValueEcho();
      initResize();
      getInputWidth();
    });
    watch(
      () => props.modelValue,
      () => {
        initModeValueEcho();
      }
    );
    return {
      inputWidthRef,
      selectorScrollbarRef,
      fontIconSheetsFilterList,
      onColClick,
      onIconChange,
      onClearFontIcon,
      onIconFocus,
      onIconBlur,
      onPopoverShow,
      ...toRefs(state)
    };
  }
});
const _hoisted_1 = { class: "icon-selector w100 h100" };
const _hoisted_2 = { class: "icon-selector-warp" };
const _hoisted_3 = { class: "icon-selector-warp-title flex" };
const _hoisted_4 = { class: "flex-auto" };
const _hoisted_5 = {
  key: 0,
  class: "icon-selector-warp-title-tab"
};
const _hoisted_6 = { class: "icon-selector-warp-row" };
const _hoisted_7 = { class: "flex-margin" };
const _hoisted_8 = { class: "icon-selector-warp-item-value" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_SvgIcon = resolveComponent("SvgIcon");
  const _component_el_input = resolveComponent("el-input");
  const _component_el_col = resolveComponent("el-col");
  const _component_el_row = resolveComponent("el-row");
  const _component_el_empty = resolveComponent("el-empty");
  const _component_el_scrollbar = resolveComponent("el-scrollbar");
  const _component_el_popover = resolveComponent("el-popover");
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createVNode(_component_el_popover, {
      placement: "bottom",
      width: _ctx.fontIconWidth,
      trigger: "click",
      transition: "el-zoom-in-top",
      "popper-class": "icon-selector-popper",
      onShow: _ctx.onPopoverShow
    }, {
      reference: withCtx(() => [
        createVNode(_component_el_input, {
          modelValue: _ctx.fontIconSearch,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.fontIconSearch = $event),
          placeholder: _ctx.fontIconPlaceholder,
          clearable: _ctx.clearable,
          disabled: _ctx.disabled,
          size: _ctx.size,
          ref: "inputWidthRef",
          onClear: _ctx.onClearFontIcon,
          onFocus: _ctx.onIconFocus,
          onBlur: _ctx.onIconBlur
        }, {
          prepend: withCtx(() => {
            var _a, _b;
            return [
              (_ctx.fontIconPrefix === "" ? ((_a = _ctx.prepend) == null ? void 0 : _a.indexOf("ele-")) > -1 : ((_b = _ctx.fontIconPrefix) == null ? void 0 : _b.indexOf("ele-")) > -1) ? (openBlock(), createBlock(_component_SvgIcon, {
                key: 0,
                name: _ctx.fontIconPrefix === "" ? _ctx.prepend : _ctx.fontIconPrefix,
                class: "font14"
              }, null, 8, ["name"])) : (openBlock(), createElementBlock("i", {
                key: 1,
                class: normalizeClass([_ctx.fontIconPrefix === "" ? _ctx.prepend : _ctx.fontIconPrefix, "font14"])
              }, null, 2))
            ];
          }),
          _: 1
        }, 8, ["modelValue", "placeholder", "clearable", "disabled", "size", "onClear", "onFocus", "onBlur"])
      ]),
      default: withCtx(() => [
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("div", _hoisted_3, [
            createBaseVNode("div", _hoisted_4, toDisplayString(_ctx.title), 1),
            _ctx.type === "all" ? (openBlock(), createElementBlock("div", _hoisted_5, [
              createBaseVNode("span", {
                class: normalizeClass([{ "span-active": _ctx.fontIconType === "ali" }, "ml10"]),
                onClick: _cache[1] || (_cache[1] = ($event) => _ctx.onIconChange("ali")),
                title: "iconfont \u56FE\u6807"
              }, "ali", 2),
              createBaseVNode("span", {
                class: normalizeClass([{ "span-active": _ctx.fontIconType === "ele" }, "ml10"]),
                onClick: _cache[2] || (_cache[2] = ($event) => _ctx.onIconChange("ele")),
                title: "elementPlus \u56FE\u6807"
              }, "ele", 2),
              createBaseVNode("span", {
                class: normalizeClass([{ "span-active": _ctx.fontIconType === "awe" }, "ml10"]),
                onClick: _cache[3] || (_cache[3] = ($event) => _ctx.onIconChange("awe")),
                title: "fontawesome \u56FE\u6807"
              }, "awe", 2)
            ])) : createCommentVNode("v-if", true)
          ]),
          createBaseVNode("div", _hoisted_6, [
            createVNode(_component_el_scrollbar, { ref: "selectorScrollbarRef" }, {
              default: withCtx(() => [
                _ctx.fontIconSheetsFilterList.length > 0 ? (openBlock(), createBlock(_component_el_row, {
                  key: 0,
                  gutter: 10
                }, {
                  default: withCtx(() => [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.fontIconSheetsFilterList, (v, k) => {
                      return openBlock(), createBlock(_component_el_col, {
                        xs: 6,
                        sm: 4,
                        md: 4,
                        lg: 4,
                        xl: 4,
                        onClick: ($event) => _ctx.onColClick(v),
                        key: k
                      }, {
                        default: withCtx(() => [
                          createBaseVNode("div", {
                            class: normalizeClass(["icon-selector-warp-item", { "icon-selector-active": _ctx.fontIconPrefix === v }])
                          }, [
                            createBaseVNode("div", _hoisted_7, [
                              createBaseVNode("div", _hoisted_8, [
                                createVNode(_component_SvgIcon, { name: v }, null, 8, ["name"])
                              ])
                            ])
                          ], 2)
                        ]),
                        _: 2
                      }, 1032, ["onClick"]);
                    }), 128))
                  ]),
                  _: 1
                })) : createCommentVNode("v-if", true),
                _ctx.fontIconSheetsFilterList.length <= 0 ? (openBlock(), createBlock(_component_el_empty, {
                  key: 1,
                  "image-size": 100,
                  description: _ctx.emptyDescription
                }, null, 8, ["description"])) : createCommentVNode("v-if", true)
              ]),
              _: 1
            }, 512)
          ])
        ])
      ]),
      _: 1
    }, 8, ["width", "onShow"])
  ]);
}
var IconSelector = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/demo/admin-template/src/components/iconSelector/index.vue"]]);
export { IconSelector as I };
