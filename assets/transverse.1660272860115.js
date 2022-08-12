import { H as Headers, M as Mains } from "./main.1660272860115.js";
import { a7 as resolveComponent, o as openBlock, S as createBlock, T as withCtx, _ as createVNode } from "./vue.1660272860115.js";
import { _ as _export_sfc } from "./index.1660272860115.js";
import "./logo-mini.1660272860115.js";
import "./parent.1660272860115.js";
const _sfc_main = {
  name: "layoutTransverse",
  components: { Headers, Mains }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Headers = resolveComponent("Headers");
  const _component_Mains = resolveComponent("Mains");
  const _component_el_backtop = resolveComponent("el-backtop");
  const _component_el_container = resolveComponent("el-container");
  return openBlock(), createBlock(_component_el_container, { class: "layout-container flex-center layout-backtop" }, {
    default: withCtx(() => [
      createVNode(_component_Headers),
      createVNode(_component_Mains),
      createVNode(_component_el_backtop, { target: ".layout-backtop .el-main .el-scrollbar__wrap" })
    ]),
    _: 1
  });
}
var transverse = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/demo/admin-template/src/layout/main/transverse.vue"]]);
export { transverse as default };
