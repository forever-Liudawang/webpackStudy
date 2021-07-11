 (() => { 
var __webpack_modules__ = ({

"./src/a.js":((module) => {
                    eval("module.exports.a =10;\n\n//# sourceURL=webpack://webpackStudey/./src/a.js?");
}),
"./src/index.js":
     ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
        eval("__webpack_require__(/*! ./a */ \"./src/a.js\")\n\n//# sourceURL=webpack://webpackStudey/./src/index.js?");
})
	});
var __webpack_module_cache__ = {};
function __webpack_require__(moduleId) {
    var cachedModule = __webpack_module_cache__[moduleId];
    if (cachedModule !== undefined) {
        return cachedModule.exports;
    }
    var module = __webpack_module_cache__[moduleId] = {
        exports: {}
    };

    __webpack_modules__[moduleId](module, module.exports, __webpack_require__);

    return module.exports;
}
var __webpack_exports__ = __webpack_require__("./src/index.js");
	
})()
;