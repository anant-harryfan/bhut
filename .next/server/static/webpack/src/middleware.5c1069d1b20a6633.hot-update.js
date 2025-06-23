"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("src/middleware",{

/***/ "(middleware)/./src/middleware.ts":
/*!***************************!*\
  !*** ./src/middleware.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _clerk_nextjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @clerk/nextjs */ \"(middleware)/./node_modules/@clerk/nextjs/dist/esm/index.js\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_clerk_nextjs__WEBPACK_IMPORTED_MODULE_0__.authMiddleware)({\n    // Public routes that don't require authentication\n    publicRoutes: [\n        \"/\",\n        \"/sign-in\",\n        \"/sign-up\",\n        \"/products\",\n        \"/products/:id\",\n        \"/categories\",\n        \"/categories/:id\",\n        // '/api/webhook/clerk',\n        // '/api/webhook/stripe',\n        \"/api/products\",\n        \"/api/products/:id\",\n        \"/api/categories\",\n        \"/api/categories/:id\"\n    ],\n    // Routes that can be accessed without authentication info\n    ignoredRoutes: [\n        \"/api/webhook/clerk\",\n        \"/api/webhook/stripe\"\n    ]\n}));\nconst config = {\n    matcher: [\n        \"/((?!.+\\\\.[\\\\w]+$|_next).*)\",\n        \"/\",\n        \"/(api|trpc)(.*)\"\n    ]\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vc3JjL21pZGRsZXdhcmUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQStDO0FBRS9DLGlFQUFlQSw2REFBY0EsQ0FBQztJQUM1QixrREFBa0Q7SUFDbERDLGNBQWM7UUFDWjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHdCQUF3QjtRQUN4Qix5QkFBeUI7UUFDekI7UUFDQTtRQUNBO1FBQ0E7S0FDRDtJQUNELDBEQUEwRDtJQUMxREMsZUFBZTtRQUNiO1FBQ0E7S0FDRDtBQUNILEVBQUUsRUFBQztBQUVJLE1BQU1DLFNBQVM7SUFDcEJDLFNBQVM7UUFBQztRQUErQjtRQUFLO0tBQWtCO0FBQ2xFLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL21pZGRsZXdhcmUudHM/ZDE5OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhdXRoTWlkZGxld2FyZSB9IGZyb20gJ0BjbGVyay9uZXh0anMnO1xuXG5leHBvcnQgZGVmYXVsdCBhdXRoTWlkZGxld2FyZSh7XG4gIC8vIFB1YmxpYyByb3V0ZXMgdGhhdCBkb24ndCByZXF1aXJlIGF1dGhlbnRpY2F0aW9uXG4gIHB1YmxpY1JvdXRlczogW1xuICAgICcvJyxcbiAgICAnL3NpZ24taW4nLFxuICAgICcvc2lnbi11cCcsXG4gICAgJy9wcm9kdWN0cycsXG4gICAgJy9wcm9kdWN0cy86aWQnLFxuICAgICcvY2F0ZWdvcmllcycsXG4gICAgJy9jYXRlZ29yaWVzLzppZCcsXG4gICAgLy8gJy9hcGkvd2ViaG9vay9jbGVyaycsXG4gICAgLy8gJy9hcGkvd2ViaG9vay9zdHJpcGUnLFxuICAgICcvYXBpL3Byb2R1Y3RzJyxcbiAgICAnL2FwaS9wcm9kdWN0cy86aWQnLFxuICAgICcvYXBpL2NhdGVnb3JpZXMnLFxuICAgICcvYXBpL2NhdGVnb3JpZXMvOmlkJyxcbiAgXSxcbiAgLy8gUm91dGVzIHRoYXQgY2FuIGJlIGFjY2Vzc2VkIHdpdGhvdXQgYXV0aGVudGljYXRpb24gaW5mb1xuICBpZ25vcmVkUm91dGVzOiBbXG4gICAgJy9hcGkvd2ViaG9vay9jbGVyaycsXG4gICAgJy9hcGkvd2ViaG9vay9zdHJpcGUnLFxuICBdLFxufSk7XG5cbmV4cG9ydCBjb25zdCBjb25maWcgPSB7XG4gIG1hdGNoZXI6IFsnLygoPyEuK1xcXFwuW1xcXFx3XSskfF9uZXh0KS4qKScsICcvJywgJy8oYXBpfHRycGMpKC4qKSddLFxufTsiXSwibmFtZXMiOlsiYXV0aE1pZGRsZXdhcmUiLCJwdWJsaWNSb3V0ZXMiLCJpZ25vcmVkUm91dGVzIiwiY29uZmlnIiwibWF0Y2hlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(middleware)/./src/middleware.ts\n");

/***/ })

});