import { L as defineComponent, s as storeToRefs, a7 as resolveComponent, o as openBlock, S as createBlock, T as withCtx, _ as createVNode, b as createBaseVNode, X as createCommentVNode } from "./vue.1660551453016.js";
import { _ as _export_sfc, u as useThemeConfig } from "./index.1660551453016.js";
import { A as Asides } from "./aside.1660551453016.js";
import { H as Headers, M as Mains, T as TagsView } from "./main.1660551453016.js";
import "./logo-mini.1660551453016.js";
import "./parent.1660551453016.js";
const _sfc_main = defineComponent({
  name: "layoutClassic",
  components: { Asides, Headers, Mains, TagsView },
  setup() {
    const storesThemeConfig = useThemeConfig();
    const { themeConfig } = storeToRefs(storesThemeConfig);
    return {
      themeConfig
    };
  }
});
const _hoisted_1 = { class: "flex-center layout-backtop" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Headers = resolveComponent("Headers");
  const _component_Asides = resolveComponent("Asides");
  const _component_TagsView = resolveComponent("TagsView");
  const _component_Mains = resolveComponent("Mains");
  const _component_el_container = resolveComponent("el-container");
  const _component_el_backtop = resolveComponent("el-backtop");
  return openBlock(), createBlock(_component_el_container, { class: "layout-container flex-center" }, {
    default: withCtx(() => [
      createVNode(_component_Headers),
      createVNode(_component_el_container, { class: "layout-mian-height-50 w100" }, {
        default: withCtx(() => [
          createVNode(_component_Asides),
          createBaseVNode("div", _hoisted_1, [
            _ctx.themeConfig.isTagsview ? (openBlock(), createBlock(_component_TagsView, { key: 0 })) : createCommentVNode("v-if", true),
            createVNode(_component_Mains)
          ])
        ]),
        _: 1
      }),
      createVNode(_component_el_backtop, { target: ".layout-backtop .el-main .el-scrollbar__wrap" })
    ]),
    _: 1
  });
}
var classic = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/demo/admin-template/src/layout/main/classic.vue"]]);
export { classic as default };
