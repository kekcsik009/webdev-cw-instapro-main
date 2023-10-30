"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdateinstapro"]("main",{

/***/ "./api.js":
/*!****************!*\
  !*** ./api.js ***!
  \****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addLike: () => (/* binding */ addLike),\n/* harmony export */   createPost: () => (/* binding */ createPost),\n/* harmony export */   disLike: () => (/* binding */ disLike),\n/* harmony export */   getPosts: () => (/* binding */ getPosts),\n/* harmony export */   getPostsByUser: () => (/* binding */ getPostsByUser),\n/* harmony export */   loginUser: () => (/* binding */ loginUser),\n/* harmony export */   registerUser: () => (/* binding */ registerUser),\n/* harmony export */   uploadImage: () => (/* binding */ uploadImage)\n/* harmony export */ });\nconst personalKey = \"kekc\"; //prod - боевая версия instapro\nconst baseHost = \"https://webdev-hw-api.vercel.app\";\nconst postsHost = `${baseHost}/api/v1/${personalKey}/instapro`;\nfunction createPost({\n  token,\n  description,\n  imageUrl\n}) {\n  return fetch(postsHost, {\n    method: \"POST\",\n    headers: {\n      Authorization: token\n    },\n    body: JSON.stringify({\n      description,\n      imageUrl\n    })\n  }).then(response => {\n    if (response.status === 401) {\n      throw new Error(\"Нет авторизации\");\n    }\n    return response.json();\n  });\n}\nfunction getPosts({\n  token\n}) {\n  return fetch(postsHost, {\n    method: \"GET\",\n    headers: {\n      Authorization: token\n    }\n  }).then(response => {\n    if (response.status === 401) {\n      throw new Error(\"Нет авторизации\");\n    }\n    return response.json();\n  }).then(data => {\n    return data.posts;\n  });\n}\nconst getPostsByUser = ({\n  token,\n  id\n}) => {\n  return fetch(`${postsHost}/user-posts/${id}`, {\n    method: \"GET\",\n    headers: {\n      Authorization: token\n    }\n  }).then(response => response.json());\n};\nfunction registerUser({\n  login,\n  password,\n  name,\n  imageUrl\n}) {\n  // https://github.com/GlebkaF/webdev-hw-api/blob/main/pages/api/user/README.md#%D0%B0%D0%B2%D1%82%D0%BE%D1%80%D0%B8%D0%B7%D0%BE%D0%B2%D0%B0%D1%82%D1%8C%D1%81%D1%8F\n  return fetch(baseHost + \"/api/user\", {\n    method: \"POST\",\n    body: JSON.stringify({\n      login,\n      password,\n      name,\n      imageUrl\n    })\n  }).then(response => {\n    if (response.status === 400) {\n      throw new Error(\"Такой пользователь уже существует\");\n    }\n    return response.json();\n  });\n}\nfunction loginUser({\n  login,\n  password\n}) {\n  return fetch(baseHost + \"/api/user/login\", {\n    method: \"POST\",\n    body: JSON.stringify({\n      login,\n      password\n    })\n  }).then(response => {\n    if (response.status === 400) {\n      throw new Error(\"Неверный логин или пароль\");\n    }\n    return response.json();\n  });\n}\nfunction uploadImage({\n  file\n}) {\n  // Загружает картинку в облако, возвращает url загруженной картинки\n  const data = new FormData();\n  data.append(\"file\", file);\n  return fetch(baseHost + \"/api/upload/image\", {\n    method: \"POST\",\n    body: data\n  }).then(response => {\n    return response.json();\n  });\n}\nfunction addLike({\n  token,\n  id\n}) {\n  return fetch(postsHost + `/${id}/like`, {\n    method: \"POST\",\n    headers: {\n      Authorization: token\n    }\n  }).then(response => {\n    if (response.status === 401) {\n      throw new Error(\"Нет авторизации\");\n    }\n    return response.json();\n  });\n}\nfunction disLike({\n  token,\n  id\n}) {\n  return fetch(postsHost + `/${id}/dislike`, {\n    method: \"POST\",\n    headers: {\n      Authorization: token\n    }\n  }).then(response => {\n    if (response.status === 401) {\n      throw new Error(\"Нет авторизации\");\n    }\n    return response.json();\n  });\n}\n\n//# sourceURL=webpack://instapro/./api.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("463902b9a5b994a83a43")
/******/ })();
/******/ 
/******/ }
);