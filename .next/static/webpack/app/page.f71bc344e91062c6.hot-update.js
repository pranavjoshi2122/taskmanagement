"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./components/taskList.tsx":
/*!*********************************!*\
  !*** ./components/taskList.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_Divider_Grid_Stack_Typography_mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=Divider,Grid,Stack,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Grid/Grid.js\");\n/* harmony import */ var _barrel_optimize_names_Divider_Grid_Stack_Typography_mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=Divider,Grid,Stack,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Divider/Divider.js\");\n/* harmony import */ var _barrel_optimize_names_Divider_Grid_Stack_Typography_mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! __barrel_optimize__?names=Divider,Grid,Stack,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Stack/Stack.js\");\n/* harmony import */ var _barrel_optimize_names_Divider_Grid_Stack_Typography_mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! __barrel_optimize__?names=Divider,Grid,Stack,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Typography/Typography.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils */ \"(app-pages-browser)/./utils/index.ts\");\n/* harmony import */ var _taskForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./taskForm */ \"(app-pages-browser)/./components/taskForm.tsx\");\n/* harmony import */ var _taskItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./taskItem */ \"(app-pages-browser)/./components/taskItem.tsx\");\n/* harmony import */ var _ui_Select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ui/Select */ \"(app-pages-browser)/./components/ui/Select.tsx\");\n/* harmony import */ var _noTaskItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./noTaskItem */ \"(app-pages-browser)/./components/noTaskItem.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst filterOptions = [\n    {\n        value: \"all\",\n        label: \"All\"\n    },\n    {\n        value: \"active\",\n        label: \"Active\"\n    },\n    {\n        value: \"completed\",\n        label: \"Completed\"\n    }\n];\nconst TaskList = ()=>{\n    _s();\n    const storedTasks = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.getTasksFromLocal)();\n    const [tasks, setTasks] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        ...storedTasks\n    ]);\n    const [filter, setFilter] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"all\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        (0,_utils__WEBPACK_IMPORTED_MODULE_2__.setTasksToLocal)(tasks);\n    }, [\n        tasks\n    ]);\n    const addTask = (data)=>{\n        setTasks([\n            ...tasks,\n            data\n        ]);\n    };\n    const toggleComplete = (id)=>{\n        console.log(id);\n        const updatedTasks = tasks.map((task)=>task.id === id ? {\n                ...task,\n                completed: !task.completed\n            } : task);\n        console.log(\"updatedTasks\", updatedTasks, id);\n        setTasks([\n            ...updatedTasks\n        ]);\n    };\n    const deleteTask = (id)=>{\n        const updatedTasks = tasks.filter((task)=>task.id !== id);\n        setTasks([\n            ...updatedTasks\n        ]);\n    };\n    const handleChangeFilter = (event)=>{\n        setFilter(event.target.value);\n    };\n    const filteredTasks = tasks.filter((task)=>{\n        if (filter === \"all\") return true;\n        if (filter === \"active\") return !task.completed;\n        if (filter === \"completed\") return task.completed;\n    });\n    console.log(\"tasks\", tasks);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Divider_Grid_Stack_Typography_mui_material__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n            container: true,\n            spacing: 2,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Divider_Grid_Stack_Typography_mui_material__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                    item: true,\n                    md: 12,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_taskForm__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            addTask: addTask\n                        }, void 0, false, {\n                            fileName: \"D:\\\\task-management-test\\\\components\\\\taskList.tsx\",\n                            lineNumber: 71,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Divider_Grid_Stack_Typography_mui_material__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                            sx: {\n                                my: 2\n                            }\n                        }, void 0, false, {\n                            fileName: \"D:\\\\task-management-test\\\\components\\\\taskList.tsx\",\n                            lineNumber: 72,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\task-management-test\\\\components\\\\taskList.tsx\",\n                    lineNumber: 70,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Divider_Grid_Stack_Typography_mui_material__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                    item: true,\n                    md: 12,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Divider_Grid_Stack_Typography_mui_material__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                        flexDirection: \"row\",\n                        justifyContent: \"space-between\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Divider_Grid_Stack_Typography_mui_material__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                                variant: \"h5\",\n                                component: \"h5\",\n                                sx: {\n                                    mb: 1,\n                                    color: \"#000\"\n                                },\n                                children: \"Tasks List\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\task-management-test\\\\components\\\\taskList.tsx\",\n                                lineNumber: 77,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_Select__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                options: filterOptions,\n                                config: {\n                                    sx: {\n                                        minWidth: \"200px\"\n                                    },\n                                    size: \"small\",\n                                    value: filter,\n                                    displayEmpty: true,\n                                    onChange: handleChangeFilter\n                                }\n                            }, void 0, false, {\n                                fileName: \"D:\\\\task-management-test\\\\components\\\\taskList.tsx\",\n                                lineNumber: 78,\n                                columnNumber: 25\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\task-management-test\\\\components\\\\taskList.tsx\",\n                        lineNumber: 76,\n                        columnNumber: 21\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"D:\\\\task-management-test\\\\components\\\\taskList.tsx\",\n                    lineNumber: 75,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Divider_Grid_Stack_Typography_mui_material__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                    item: true,\n                    md: 12,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Divider_Grid_Stack_Typography_mui_material__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                        gap: 2,\n                        children: [\n                            filteredTasks.length === 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_noTaskItem__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                                fileName: \"D:\\\\task-management-test\\\\components\\\\taskList.tsx\",\n                                lineNumber: 94,\n                                columnNumber: 29\n                            }, undefined),\n                            filteredTasks.length > 0 && filteredTasks.map((task)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_taskItem__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                    task: task,\n                                    toggleComplete: toggleComplete,\n                                    deleteTask: deleteTask\n                                }, task.id, false, {\n                                    fileName: \"D:\\\\task-management-test\\\\components\\\\taskList.tsx\",\n                                    lineNumber: 99,\n                                    columnNumber: 33\n                                }, undefined))\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\task-management-test\\\\components\\\\taskList.tsx\",\n                        lineNumber: 92,\n                        columnNumber: 21\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"D:\\\\task-management-test\\\\components\\\\taskList.tsx\",\n                    lineNumber: 91,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\task-management-test\\\\components\\\\taskList.tsx\",\n            lineNumber: 69,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\task-management-test\\\\components\\\\taskList.tsx\",\n        lineNumber: 68,\n        columnNumber: 9\n    }, undefined);\n};\n_s(TaskList, \"BV5OMdJ8MAYvnaKj98tZyh9woNk=\");\n_c = TaskList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TaskList);\nvar _c;\n$RefreshReg$(_c, \"TaskList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvdGFza0xpc3QudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUVtRDtBQUNpQztBQUV2QjtBQUMzQjtBQUNBO0FBQ0U7QUFDRTtBQVd0QyxNQUFNYSxnQkFBZ0I7SUFDbEI7UUFBRUMsT0FBTztRQUFPQyxPQUFPO0lBQU07SUFDN0I7UUFBRUQsT0FBTztRQUFVQyxPQUFPO0lBQVM7SUFDbkM7UUFBRUQsT0FBTztRQUFhQyxPQUFPO0lBQVk7Q0FDNUM7QUFFRCxNQUFNQyxXQUFXOztJQUNiLE1BQU1DLGNBQXVCVix5REFBaUJBO0lBQzlDLE1BQU0sQ0FBQ1csT0FBT0MsU0FBUyxHQUFHbEIsK0NBQVFBLENBQVU7V0FBSWdCO0tBQVk7SUFDNUQsTUFBTSxDQUFDRyxRQUFRQyxVQUFVLEdBQUdwQiwrQ0FBUUEsQ0FBUztJQUU3Q0MsZ0RBQVNBLENBQUM7UUFDTk0sdURBQWVBLENBQUNVO0lBQ3BCLEdBQUc7UUFBQ0E7S0FBTTtJQUVWLE1BQU1JLFVBQVUsQ0FBQ0M7UUFDYkosU0FBUztlQUFJRDtZQUFPSztTQUFLO0lBQzdCO0lBRUEsTUFBTUMsaUJBQWlCLENBQUNDO1FBQ3BCQyxRQUFRQyxHQUFHLENBQUNGO1FBQ1osTUFBTUcsZUFBZVYsTUFBTVcsR0FBRyxDQUFDLENBQUNDLE9BQzVCQSxLQUFLTCxFQUFFLEtBQUtBLEtBQUs7Z0JBQUUsR0FBR0ssSUFBSTtnQkFBRUMsV0FBVyxDQUFDRCxLQUFLQyxTQUFTO1lBQUMsSUFBSUQ7UUFFL0RKLFFBQVFDLEdBQUcsQ0FBQyxnQkFBZ0JDLGNBQWNIO1FBRTFDTixTQUFTO2VBQUlTO1NBQWE7SUFDOUI7SUFFQSxNQUFNSSxhQUFhLENBQUNQO1FBQ2hCLE1BQU1HLGVBQWVWLE1BQU1FLE1BQU0sQ0FBQyxDQUFDVSxPQUFTQSxLQUFLTCxFQUFFLEtBQUtBO1FBQ3hETixTQUFTO2VBQUlTO1NBQWE7SUFDOUI7SUFFQSxNQUFNSyxxQkFBcUIsQ0FBQ0M7UUFDeEJiLFVBQVVhLE1BQU1DLE1BQU0sQ0FBQ3JCLEtBQUs7SUFDaEM7SUFFQSxNQUFNc0IsZ0JBQWdCbEIsTUFBTUUsTUFBTSxDQUFDLENBQUNVO1FBQ2hDLElBQUlWLFdBQVcsT0FBTyxPQUFPO1FBQzdCLElBQUlBLFdBQVcsVUFBVSxPQUFPLENBQUNVLEtBQUtDLFNBQVM7UUFDL0MsSUFBSVgsV0FBVyxhQUFhLE9BQU9VLEtBQUtDLFNBQVM7SUFDckQ7SUFFQUwsUUFBUUMsR0FBRyxDQUFDLFNBQVNUO0lBRXJCLHFCQUNJLDhEQUFDbUI7a0JBQ0csNEVBQUNqQyx5R0FBSUE7WUFBQ2tDLFNBQVM7WUFBQ0MsU0FBUzs7OEJBQ3JCLDhEQUFDbkMseUdBQUlBO29CQUFDb0MsSUFBSTtvQkFBQ0MsSUFBSTs7c0NBQ1gsOERBQUNoQyxpREFBUUE7NEJBQUNhLFNBQVNBOzs7Ozs7c0NBQ25CLDhEQUFDbkIseUdBQU9BOzRCQUFDdUMsSUFBSTtnQ0FBRUMsSUFBSTs0QkFBRTs7Ozs7Ozs7Ozs7OzhCQUd6Qiw4REFBQ3ZDLHlHQUFJQTtvQkFBQ29DLElBQUk7b0JBQUNDLElBQUk7OEJBQ1gsNEVBQUNwQyx5R0FBS0E7d0JBQUN1QyxlQUFjO3dCQUFNQyxnQkFBZTs7MENBQ3RDLDhEQUFDdkMsMEdBQVVBO2dDQUFDd0MsU0FBUTtnQ0FBS0MsV0FBVTtnQ0FBS0wsSUFBSTtvQ0FBRU0sSUFBSTtvQ0FBR0MsT0FBTztnQ0FBTzswQ0FBSTs7Ozs7OzBDQUN2RSw4REFBQ3RDLGtEQUFTQTtnQ0FDTnVDLFNBQVNyQztnQ0FDVHNDLFFBQVE7b0NBQ0pULElBQUk7d0NBQUVVLFVBQVU7b0NBQVE7b0NBQ3hCQyxNQUFNO29DQUNOdkMsT0FBT007b0NBQ1BrQyxjQUFjO29DQUNkQyxVQUFVdEI7Z0NBQ2Q7Ozs7Ozs7Ozs7Ozs7Ozs7OzhCQUtaLDhEQUFDN0IseUdBQUlBO29CQUFDb0MsSUFBSTtvQkFBQ0MsSUFBSTs4QkFDWCw0RUFBQ3BDLHlHQUFLQTt3QkFBQ21ELEtBQUs7OzRCQUNQcEIsY0FBY3FCLE1BQU0sS0FBSyxtQkFDdEIsOERBQUM3QyxtREFBVUE7Ozs7OzRCQUdkd0IsY0FBY3FCLE1BQU0sR0FBRyxLQUNwQnJCLGNBQWNQLEdBQUcsQ0FBQyxDQUFDQyxxQkFDZiw4REFBQ3BCLGlEQUFRQTtvQ0FFTG9CLE1BQU1BO29DQUNOTixnQkFBZ0JBO29DQUNoQlEsWUFBWUE7bUNBSFBGLEtBQUtMLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVloRDtHQXJGTVQ7S0FBQUE7QUF1Rk4sK0RBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90YXNrTGlzdC50c3g/ZTk0NiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBEaXZpZGVyLCBHcmlkLCBTZWxlY3RDaGFuZ2VFdmVudCwgU3RhY2ssIFR5cG9ncmFwaHkgfSBmcm9tICdAbXVpL21hdGVyaWFsJztcclxuXHJcbmltcG9ydCB7IGdldFRhc2tzRnJvbUxvY2FsLCBzZXRUYXNrc1RvTG9jYWwgfSBmcm9tICdAL3V0aWxzJztcclxuaW1wb3J0IFRhc2tGb3JtIGZyb20gJy4vdGFza0Zvcm0nO1xyXG5pbXBvcnQgVGFza0l0ZW0gZnJvbSAnLi90YXNrSXRlbSc7XHJcbmltcG9ydCBNdWlTZWxlY3QgZnJvbSAnLi91aS9TZWxlY3QnO1xyXG5pbXBvcnQgTm9UYXNrSXRlbSBmcm9tICcuL25vVGFza0l0ZW0nO1xyXG5pbXBvcnQgeyBEYXlqcyB9IGZyb20gJ2RheWpzJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVRhc2sge1xyXG4gICAgaWQ6IG51bWJlcjtcclxuICAgIHRhc2s6IHN0cmluZztcclxuICAgIHN0YXJ0RGF0ZTogRGF5anMgfCBudWxsLFxyXG4gICAgZHVlRGF0ZTogRGF5anMgfCBudWxsLFxyXG4gICAgY29tcGxldGVkOiBib29sZWFuO1xyXG59XHJcblxyXG5jb25zdCBmaWx0ZXJPcHRpb25zID0gW1xyXG4gICAgeyB2YWx1ZTogJ2FsbCcsIGxhYmVsOiAnQWxsJyB9LFxyXG4gICAgeyB2YWx1ZTogJ2FjdGl2ZScsIGxhYmVsOiAnQWN0aXZlJyB9LFxyXG4gICAgeyB2YWx1ZTogJ2NvbXBsZXRlZCcsIGxhYmVsOiAnQ29tcGxldGVkJyB9XHJcbl1cclxuXHJcbmNvbnN0IFRhc2tMaXN0ID0gKCkgPT4ge1xyXG4gICAgY29uc3Qgc3RvcmVkVGFza3M6IElUYXNrW10gPSBnZXRUYXNrc0Zyb21Mb2NhbCgpO1xyXG4gICAgY29uc3QgW3Rhc2tzLCBzZXRUYXNrc10gPSB1c2VTdGF0ZTxJVGFza1tdPihbLi4uc3RvcmVkVGFza3NdKTtcclxuICAgIGNvbnN0IFtmaWx0ZXIsIHNldEZpbHRlcl0gPSB1c2VTdGF0ZTxzdHJpbmc+KCdhbGwnKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHNldFRhc2tzVG9Mb2NhbCh0YXNrcylcclxuICAgIH0sIFt0YXNrc10pO1xyXG5cclxuICAgIGNvbnN0IGFkZFRhc2sgPSAoZGF0YTogSVRhc2spID0+IHtcclxuICAgICAgICBzZXRUYXNrcyhbLi4udGFza3MsIGRhdGFdKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgdG9nZ2xlQ29tcGxldGUgPSAoaWQ6IG51bWJlcikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGlkKTtcclxuICAgICAgICBjb25zdCB1cGRhdGVkVGFza3MgPSB0YXNrcy5tYXAoKHRhc2spID0+XHJcbiAgICAgICAgICAgIHRhc2suaWQgPT09IGlkID8geyAuLi50YXNrLCBjb21wbGV0ZWQ6ICF0YXNrLmNvbXBsZXRlZCB9IDogdGFza1xyXG4gICAgICAgICk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3VwZGF0ZWRUYXNrcycsIHVwZGF0ZWRUYXNrcywgaWQpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHNldFRhc2tzKFsuLi51cGRhdGVkVGFza3NdKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgZGVsZXRlVGFzayA9IChpZDogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdXBkYXRlZFRhc2tzID0gdGFza3MuZmlsdGVyKCh0YXNrKSA9PiB0YXNrLmlkICE9PSBpZCk7XHJcbiAgICAgICAgc2V0VGFza3MoWy4uLnVwZGF0ZWRUYXNrc10pO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2VGaWx0ZXIgPSAoZXZlbnQ6IFNlbGVjdENoYW5nZUV2ZW50PHVua25vd24+KSA9PiB7XHJcbiAgICAgICAgc2V0RmlsdGVyKGV2ZW50LnRhcmdldC52YWx1ZSBhcyBzdHJpbmcpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZmlsdGVyZWRUYXNrcyA9IHRhc2tzLmZpbHRlcigodGFzaykgPT4ge1xyXG4gICAgICAgIGlmIChmaWx0ZXIgPT09ICdhbGwnKSByZXR1cm4gdHJ1ZTtcclxuICAgICAgICBpZiAoZmlsdGVyID09PSAnYWN0aXZlJykgcmV0dXJuICF0YXNrLmNvbXBsZXRlZDtcclxuICAgICAgICBpZiAoZmlsdGVyID09PSAnY29tcGxldGVkJykgcmV0dXJuIHRhc2suY29tcGxldGVkO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc29sZS5sb2coJ3Rhc2tzJywgdGFza3MpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezJ9PlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSBtZD17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUYXNrRm9ybSBhZGRUYXNrPXthZGRUYXNrfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxEaXZpZGVyIHN4PXt7IG15OiAyIH19IC8+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSBtZD17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxTdGFjayBmbGV4RGlyZWN0aW9uPVwicm93XCIganVzdGlmeUNvbnRlbnQ9XCJzcGFjZS1iZXR3ZWVuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2g1JyBjb21wb25lbnQ9XCJoNVwiIHN4PXt7IG1iOiAxLCBjb2xvcjogXCIjMDAwXCIgfX0gPlRhc2tzIExpc3Q8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxNdWlTZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e2ZpbHRlck9wdGlvbnN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maWc9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeDogeyBtaW5XaWR0aDogJzIwMHB4JyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU6IFwic21hbGxcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogZmlsdGVyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlFbXB0eTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZTogaGFuZGxlQ2hhbmdlRmlsdGVyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L1N0YWNrPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0gbWQ9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICA8U3RhY2sgZ2FwPXsyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2ZpbHRlcmVkVGFza3MubGVuZ3RoID09PSAwICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Tm9UYXNrSXRlbSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7ZmlsdGVyZWRUYXNrcy5sZW5ndGggPiAwICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJlZFRhc2tzLm1hcCgodGFzaykgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYXNrSXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3Rhc2suaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhc2s9e3Rhc2t9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZ2dsZUNvbXBsZXRlPXt0b2dnbGVDb21wbGV0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlVGFzaz17ZGVsZXRlVGFza31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvU3RhY2s+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUYXNrTGlzdDtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJEaXZpZGVyIiwiR3JpZCIsIlN0YWNrIiwiVHlwb2dyYXBoeSIsImdldFRhc2tzRnJvbUxvY2FsIiwic2V0VGFza3NUb0xvY2FsIiwiVGFza0Zvcm0iLCJUYXNrSXRlbSIsIk11aVNlbGVjdCIsIk5vVGFza0l0ZW0iLCJmaWx0ZXJPcHRpb25zIiwidmFsdWUiLCJsYWJlbCIsIlRhc2tMaXN0Iiwic3RvcmVkVGFza3MiLCJ0YXNrcyIsInNldFRhc2tzIiwiZmlsdGVyIiwic2V0RmlsdGVyIiwiYWRkVGFzayIsImRhdGEiLCJ0b2dnbGVDb21wbGV0ZSIsImlkIiwiY29uc29sZSIsImxvZyIsInVwZGF0ZWRUYXNrcyIsIm1hcCIsInRhc2siLCJjb21wbGV0ZWQiLCJkZWxldGVUYXNrIiwiaGFuZGxlQ2hhbmdlRmlsdGVyIiwiZXZlbnQiLCJ0YXJnZXQiLCJmaWx0ZXJlZFRhc2tzIiwiZGl2IiwiY29udGFpbmVyIiwic3BhY2luZyIsIml0ZW0iLCJtZCIsInN4IiwibXkiLCJmbGV4RGlyZWN0aW9uIiwianVzdGlmeUNvbnRlbnQiLCJ2YXJpYW50IiwiY29tcG9uZW50IiwibWIiLCJjb2xvciIsIm9wdGlvbnMiLCJjb25maWciLCJtaW5XaWR0aCIsInNpemUiLCJkaXNwbGF5RW1wdHkiLCJvbkNoYW5nZSIsImdhcCIsImxlbmd0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/taskList.tsx\n"));

/***/ })

});