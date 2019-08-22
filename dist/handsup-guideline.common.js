module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "2af9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return install; });
/* harmony import */ var _BaseButton_src_index_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("fd6d");
 // Vue 安裝 Plugin 時 ( Vue.use ) 會叫用 install 函式，在此時註冊元件

function install(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.component('BaseButton', _BaseButton_src_index_vue__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);
} // 建立 Plugin 物件

var plugin = {
  install: install // 如果使用全域 Vue 物件 (例如 <script> 載入) 時直接使用 Plugin

};
var GlobalVue = null;

if (typeof window !== 'undefined') {
  GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue;
}

if (GlobalVue) {
  GlobalVue.use(plugin);
} // 在 Local 引入時要直接使用元件


/* harmony default export */ __webpack_exports__["a"] = (_BaseButton_src_index_vue__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "49f7":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "a0a9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_style_scss_vue_type_style_index_0_id_2a4237b9_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("49f7");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_style_scss_vue_type_style_index_0_id_2a4237b9_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_style_scss_vue_type_style_index_0_id_2a4237b9_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_style_scss_vue_type_style_index_0_id_2a4237b9_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "c8ba":
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "f6fd":
/***/ (function(module, exports) {

// document.currentScript polyfill by Adam Miller

// MIT license

(function(document){
  var currentScript = "currentScript",
      scripts = document.getElementsByTagName('script'); // Live NodeList collection

  // If browser needs currentScript polyfill, add get currentScript() to the document object
  if (!(currentScript in document)) {
    Object.defineProperty(document, currentScript, {
      get: function(){

        // IE 6-10 supports script readyState
        // IE 10+ support stack trace
        try { throw new Error(); }
        catch (err) {

          // Find the second match for the "at" string to get file src url from stack.
          // Specifically works with the format of stack traces in IE.
          var i, res = ((/.*at [^\(]*\((.*):.+:.+\)$/ig).exec(err.stack) || [false])[1];

          // For all scripts on the page, if src matches or if ready state is interactive, return the script tag
          for(i in scripts){
            if(scripts[i].src == res || scripts[i].readyState == "interactive"){
              return scripts[i];
            }
          }

          // If no match, return null
          return null;
        }
      }
    });
  }
})(document);


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  if (true) {
    __webpack_require__("f6fd")
  }

  var i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: ./src/components/index.js
var components = __webpack_require__("2af9");

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js
/* concated harmony reexport install */__webpack_require__.d(__webpack_exports__, "install", function() { return components["b" /* install */]; });


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (components["a" /* default */]);



/***/ }),

/***/ "fd6d":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"45c3de12-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader!./src/components/BaseButton/src/template.pug?vue&type=template&id=2a4237b9&scoped=true&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('button',_vm._g({staticClass:"align-center rounded border leading-tight focus:outline-none",class:[_vm.exportDisplay, _vm.exportClass, _vm.exportSize, _vm.exportHover],attrs:{"disabled":_vm.disabled || _vm.loading}},_vm.$listeners),[(_vm.loading)?_c('div',{staticClass:"inline-block pr-2"},[_c('i',{staticClass:"far fa-spinner ani-rotation"})]):_vm._e(),_vm._t("icon"),_vm._t("default")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/BaseButton/src/template.pug?vue&type=template&id=2a4237b9&scoped=true&lang=pug&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/@vue/cli-plugin-babel/node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/BaseButton/src/index.vue?vue&type=script&lang=js&
/* harmony default export */ var srcvue_type_script_lang_js_ = ({
  name: 'BaseButton',
  props: {
    color: {
      type: String,
      default: 'basic'
    },
    size: {
      type: String,
      default: 'md'
    },
    block: {
      type: Boolean,
      default: false
    },
    // 純底色     >> fill
    // 純框線     >> outline
    // 有線＋底色  >> flat
    // 純文字     >> text
    pattern: {
      type: String,
      default: 'fill'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  components: {},
  data: function data() {
    return {};
  },
  computed: {
    exportClass: function exportClass() {
      switch (this.pattern) {
        // 有線＋底色
        case 'flat':
          if (this.color === 'basic') {
            return ['text-gray-900', 'bg-gray-400', 'border-gray-600'];
          } else {
            return ["text-".concat(this.color, "-dark"), "bg-".concat(this.color, "-vr-light"), "border-".concat(this.color, "-light")];
          }

        // 純框線

        case 'outline':
          if (this.color === 'basic') {
            return ['text-black', 'bg-white', 'border-gray-600'];
          } else {
            return ['text-black', 'bg-white', "border-".concat(this.color)];
          }

        // 純文字

        case 'text':
          if (this.color === 'basic') {
            return ['text-black', 'border-transparent'];
          } else {
            return ["text-".concat(this.color, "-dark"), 'border-transparent'];
          }

        // 純底色

        default:
          if (this.color === 'basic') {
            return ['text-gray-900', 'bg-gray-400', 'border-gray-400'];
          } else {
            return ['text-white', "bg-".concat(this.color), "border-".concat(this.color)];
          }

      }
    },
    exportSize: function exportSize() {
      // 純文字不加 padding、min-width
      if (this.pattern === 'text') {
        switch (this.size) {
          case 'sm':
            return ['text-xs'];

          case 'lg':
            return ['text-base'];

          default:
            return ['text-sm'];
        }
      } else {
        switch (this.size) {
          case 'sm':
            return ['py-2', 'px-4', 'text-xs', 'min-w-sm'];

          case 'lg':
            return ['py-3', 'px-4', 'text-base', 'min-w-lg'];

          default:
            return ['py-2', 'px-4', 'text-sm', 'min-w-md'];
        }
      }
    },
    exportDisplay: function exportDisplay() {
      // 純文字不加 margin
      if (this.pattern === 'text') {
        return this.block ? ['block', 'w-full'] : ['inline-block'];
      } else {
        return this.block ? ['block', 'w-full'] : ['inline-block', 'my-1', 'mr-1'];
      }
    },
    exportHover: function exportHover() {
      var arry = [];

      if (this.disabled || this.loading) {
        // disabled 樣式
        arry.push('disabled:opacity-50', 'disabled:cursor-not-allowed');
      } else {
        // 非 disabled 的才要加上 hover 樣式
        switch (this.pattern) {
          // 有線＋底色
          case 'flat':
            if (this.color === 'basic') {
              arry.push('hover:text-gray-900', 'hover:bg-primary-vr-light', 'hover:border-primary-light');
            } else {
              arry.push('hover:text-white', "hover:bg-".concat(this.color), "hover:border-".concat(this.color));
            }

            break;
          // 純框線

          case 'outline':
            if (this.color === 'basic') {
              arry.push('hover:text-primary-dark', 'hover:bg-primary-vr-light', 'hover:border-primary-light');
            } else {
              arry.push("hover:text-".concat(this.color, "-dark"), "hover:bg-".concat(this.color, "-vr-light"), "hover:border-".concat(this.color, "-light"));
            }

            break;
          // 純文字

          case 'text':
            if (this.color === 'basic') {
              arry.push('hover:text-gray-900');
            } else {
              arry.push("hover:text-".concat(this.color, "-light"));
            }

            break;
          // 純底色

          default:
            if (this.color === 'basic') {
              arry.push('hover:text-white', 'hover:bg-primary', 'hover:border-primary');
            } else {
              arry.push('hover:text-white', "hover:bg-".concat(this.color, "-dark"), "hover:border-".concat(this.color, "-dark"));
            }

            break;
        }
      }

      return arry;
    }
  }
});
// CONCATENATED MODULE: ./src/components/BaseButton/src/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var BaseButton_srcvue_type_script_lang_js_ = (srcvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/BaseButton/src/style.scss?vue&type=style&index=0&id=2a4237b9&lang=scss&scoped=true&
var stylevue_type_style_index_0_id_2a4237b9_lang_scss_scoped_true_ = __webpack_require__("a0a9");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/components/BaseButton/src/index.vue






/* normalize component */

var component = normalizeComponent(
  BaseButton_srcvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "2a4237b9",
  null
  
)

/* harmony default export */ var src = __webpack_exports__["a"] = (component.exports);

/***/ })

/******/ });
//# sourceMappingURL=handsup-guideline.common.js.map