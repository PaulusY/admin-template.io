import { L as defineComponent, s as storeToRefs, aE as useRoute, aI as useRouter, a3 as reactive, m as computed, a6 as toRefs, a7 as resolveComponent, S as createBlock, T as withCtx, o as openBlock, _ as createVNode, b as createBaseVNode, O as normalizeClass, Y as createTextVNode, aC as pushScopeId, aD as popScopeId } from "./vue.1660273197947.js";
import { _ as _export_sfc, u as useThemeConfig, S as Session, f as api, i as initFrontEndControlRoutes, g as initBackEndControlRoutes, e as ElMessage, N as NextLoading, h as formatAxis } from "./index.1660273197947.js";
var account_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main = defineComponent({
  name: "loginAccount",
  setup() {
    const storesThemeConfig = useThemeConfig();
    const { themeConfig } = storeToRefs(storesThemeConfig);
    const route = useRoute();
    const router = useRouter();
    const state = reactive({
      isShowPassword: false,
      ruleForm: {
        userName: "admin",
        password: "123456",
        code: "1234"
      },
      loading: {
        signIn: false
      }
    });
    const currentTime = computed(() => {
      return formatAxis(new Date());
    });
    const onSignIn = async () => {
      state.loading.signIn = true;
      Session.set("token", Math.random().toString(36).substr(0));
      api.set("userName", state.ruleForm.userName);
      if (!themeConfig.value.isRequestRoutes) {
        await initFrontEndControlRoutes();
        signInSuccess();
      } else {
        await initBackEndControlRoutes();
        signInSuccess();
      }
    };
    const signInSuccess = () => {
      var _a, _b, _c, _d;
      let currentTimeInfo = currentTime.value;
      if ((_a = route.query) == null ? void 0 : _a.redirect) {
        router.push({
          path: (_b = route.query) == null ? void 0 : _b.redirect,
          query: Object.keys((_c = route.query) == null ? void 0 : _c.params).length > 0 ? JSON.parse((_d = route.query) == null ? void 0 : _d.params) : ""
        });
      } else {
        router.push("/");
      }
      state.loading.signIn = true;
      const signInText = "\u6B22\u8FCE\u56DE\u6765\uFF01";
      ElMessage.success(`${currentTimeInfo}\uFF0C${signInText}`);
      NextLoading.start();
    };
    return {
      onSignIn,
      ...toRefs(state)
    };
  }
});
const _withScopeId = (n) => (pushScopeId("data-v-1dc05b6a"), n = n(), popScopeId(), n);
const _hoisted_1 = /* @__PURE__ */ createTextVNode("1234");
const _hoisted_2 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", null, "\u767B \u5F55", -1));
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ele_User = resolveComponent("ele-User");
  const _component_el_icon = resolveComponent("el-icon");
  const _component_el_input = resolveComponent("el-input");
  const _component_el_form_item = resolveComponent("el-form-item");
  const _component_ele_Unlock = resolveComponent("ele-Unlock");
  const _component_ele_Position = resolveComponent("ele-Position");
  const _component_el_col = resolveComponent("el-col");
  const _component_el_button = resolveComponent("el-button");
  const _component_el_form = resolveComponent("el-form");
  return openBlock(), createBlock(_component_el_form, {
    size: "large",
    class: "login-content-form"
  }, {
    default: withCtx(() => [
      createVNode(_component_el_form_item, { class: "login-animation1" }, {
        default: withCtx(() => [
          createVNode(_component_el_input, {
            type: "text",
            placeholder: "\u7528\u6237\u540D admin \u6216\u4E0D\u8F93\u5747\u4E3A common",
            modelValue: _ctx.ruleForm.userName,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.ruleForm.userName = $event),
            clearable: "",
            autocomplete: "off"
          }, {
            prefix: withCtx(() => [
              createVNode(_component_el_icon, { class: "el-input__icon" }, {
                default: withCtx(() => [
                  createVNode(_component_ele_User)
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["modelValue"])
        ]),
        _: 1
      }),
      createVNode(_component_el_form_item, { class: "login-animation2" }, {
        default: withCtx(() => [
          createVNode(_component_el_input, {
            type: _ctx.isShowPassword ? "text" : "password",
            placeholder: "\u5BC6\u7801\uFF1A123456",
            modelValue: _ctx.ruleForm.password,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => _ctx.ruleForm.password = $event),
            autocomplete: "off"
          }, {
            prefix: withCtx(() => [
              createVNode(_component_el_icon, { class: "el-input__icon" }, {
                default: withCtx(() => [
                  createVNode(_component_ele_Unlock)
                ]),
                _: 1
              })
            ]),
            suffix: withCtx(() => [
              createBaseVNode("i", {
                class: normalizeClass(["iconfont el-input__icon login-content-password", _ctx.isShowPassword ? "icon-yincangmima" : "icon-xianshimima"]),
                onClick: _cache[1] || (_cache[1] = ($event) => _ctx.isShowPassword = !_ctx.isShowPassword)
              }, null, 2)
            ]),
            _: 1
          }, 8, ["type", "modelValue"])
        ]),
        _: 1
      }),
      createVNode(_component_el_form_item, { class: "login-animation3" }, {
        default: withCtx(() => [
          createVNode(_component_el_col, { span: 15 }, {
            default: withCtx(() => [
              createVNode(_component_el_input, {
                type: "text",
                maxlength: "4",
                placeholder: "\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801",
                modelValue: _ctx.ruleForm.code,
                "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => _ctx.ruleForm.code = $event),
                clearable: "",
                autocomplete: "off"
              }, {
                prefix: withCtx(() => [
                  createVNode(_component_el_icon, { class: "el-input__icon" }, {
                    default: withCtx(() => [
                      createVNode(_component_ele_Position)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["modelValue"])
            ]),
            _: 1
          }),
          createVNode(_component_el_col, { span: 1 }),
          createVNode(_component_el_col, { span: 8 }, {
            default: withCtx(() => [
              createVNode(_component_el_button, { class: "login-content-code" }, {
                default: withCtx(() => [
                  _hoisted_1
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      }),
      createVNode(_component_el_form_item, { class: "login-animation4" }, {
        default: withCtx(() => [
          createVNode(_component_el_button, {
            type: "primary",
            class: "login-content-submit",
            round: "",
            onClick: _ctx.onSignIn,
            loading: _ctx.loading.signIn
          }, {
            default: withCtx(() => [
              _hoisted_2
            ]),
            _: 1
          }, 8, ["onClick", "loading"])
        ]),
        _: 1
      })
    ]),
    _: 1
  });
}
var Account = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-1dc05b6a"], ["__file", "D:/demo/admin-template/src/views/login/component/account.vue"]]);
export { Account as default };
