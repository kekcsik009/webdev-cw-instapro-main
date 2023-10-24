/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => {
  // webpackBootstrap
  /******/ "use strict";
  /******/ var __webpack_modules__ = {
    /***/ "./api.js":
      /*!****************!*\
  !*** ./api.js ***!
  \****************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addPost: () => (/* binding */ addPost),\n/* harmony export */   getPosts: () => (/* binding */ getPosts),\n/* harmony export */   getUserPosts: () => (/* binding */ getUserPosts),\n/* harmony export */   loginUser: () => (/* binding */ loginUser),\n/* harmony export */   registerUser: () => (/* binding */ registerUser),\n/* harmony export */   removeLike: () => (/* binding */ removeLike),\n/* harmony export */   setLike: () => (/* binding */ setLike),\n/* harmony export */   uploadImage: () => (/* binding */ uploadImage)\n/* harmony export */ });\nconst personalKey = "sautner-denis";\nconst defaultKey = "prod"\nconst baseHost = "https://webdev-hw-api.vercel.app";\nconst postsHost = `${baseHost}/api/v1/${defaultKey}/instapro`;\n\nfunction getPosts({ token }) {\n  return fetch(postsHost, {\n    method: "GET",\n    headers: {\n      Authorization: token,\n    },\n  })\n    .then((response) => {\n      if (response.status === 401) {\n        throw new Error("Нет авторизации");\n      }\n\n      return response.json();\n    })\n    .then((data) => {\n      return data.posts;\n    });\n}\n\nfunction getUserPosts({ token, userId }) {\n  return fetch(postsHost + `/user-posts/${userId}`, {\n    method: "GET",\n    headers: {\n      Authorization: token,\n    },\n  })\n    .then((response) => {\n      if (response.status === 401) {\n        throw new Error("Нет авторизации");\n      }\n\n      return response.json();\n    })\n    .then((data) => {\n      return data.posts;\n    });\n}\n\nconst addPost = ({ token, description, imageUrl }) => {\n  return fetch(postsHost, {\n    method: "POST",\n    body: JSON.stringify({\n      description,\n      imageUrl,\n    }),\n    headers: {\n      Authorization: token,\n    },\n  })\n    .then((response) => {\n      if (response.status === 400) {\n        alert("Выберите фото и добавьте комментарий");\n        throw new Error("Выберите фото и добавьте комментарий");\n      }\n\n      return response.json();\n    })\n}\n\nconst setLike = ({ token, postId }) => {\n  return fetch(postsHost + \'/\' + postId + "/like", {\n    method: "POST",\n    headers: {\n      Authorization: token,\n    },\n  })\n    .then((response) => {\n      if (response.status === 401) {\n        alert(\'Лайкать посты могут только авторизованные пользователи\');\n        throw new Error("Нет авторизации");\n      }\n\n      return response.json();\n    })\n}\n\nconst removeLike = ({ token, postId }) => {\n  return fetch(postsHost + \'/\' + postId + "/dislike", {\n    method: "POST",\n    headers: {\n      Authorization: token,\n    },\n  })\n    .then((response) => {\n      if (response.status === 401) {\n        throw new Error("Нет авторизации");\n      }\n\n      return response.json();\n    })\n}\n\n// https://github.com/GlebkaF/webdev-hw-api/blob/main/pages/api/user/README.md#%D0%B0%D0%B2%D1%82%D0%BE%D1%80%D0%B8%D0%B7%D0%BE%D0%B2%D0%B0%D1%82%D1%8C%D1%81%D1%8F\nfunction registerUser({ login, password, name, imageUrl }) {\n  return fetch(baseHost + "/api/user", {\n    method: "POST",\n    body: JSON.stringify({\n      login,\n      password,\n      name,\n      imageUrl,\n    }),\n  }).then((response) => {\n    if (response.status === 400) {\n      throw new Error("Такой пользователь уже существует");\n    }\n    return response.json();\n  });\n}\n\nfunction loginUser({ login, password }) {\n  return fetch(baseHost + "/api/user/login", {\n    method: "POST",\n    body: JSON.stringify({\n      login,\n      password,\n    }),\n  }).then((response) => {\n    if (response.status === 400) {\n      throw new Error("Неверный логин или пароль");\n    }\n    return response.json();\n  });\n}\n\n// Загружает картинку в облако, возвращает url загруженной картинки\nfunction uploadImage({ file }) {\n  const data = new FormData();\n  data.append("file", file);\n\n  return fetch(baseHost + "/api/upload/image", {\n    method: "POST",\n    body: data,\n  }).then((response) => {\n    return response.json();\n  });\n}\n\n\n//# sourceURL=webpack://instapro/./api.js?'
        );

        /***/
      },

    /***/ "./components/add-post-page-component.js":
      /*!***********************************************!*\
  !*** ./components/add-post-page-component.js ***!
  \***********************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderAddPostPageComponent: () => (/* binding */ renderAddPostPageComponent)\n/* harmony export */ });\n/* harmony import */ var _header_component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header-component.js */ "./components/header-component.js");\n/* harmony import */ var _upload_image_component_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./upload-image-component.js */ "./components/upload-image-component.js");\n\n\n\nfunction renderAddPostPageComponent({ appEl, onAddPostClick }) {\n  let imageUrl = "";\n\n  const render = () => {\n    const appHtml = `\n    <div class="page-container">\n      <div class="header-container"></div>\n      <div class="form">\n        <h3 class="form-title">Новый пост</h3>\n        <div class="form-inputs">\n          <div class="upload-image-container">\n            <div class="upload=image">      \n              <label class="file-upload-label secondary-button">\n                <input type="file" class="file-upload-input"" style="display:none">\n                Выберите фото\n              </label>    \n            </div>\n          </div>\n          <label>\n            Добавьте комментарий:\n            <textarea class="input textarea" rows="2" id="description"></textarea>\n          </label>\n          <button class="button" id="add-button">Добавить</button>\n        </div>\n      </div>\n  `;\n\n    appEl.innerHTML = appHtml;\n\n    (0,_header_component_js__WEBPACK_IMPORTED_MODULE_0__.renderHeaderComponent)({\n      element: document.querySelector(".header-container"),\n    });\n\n    const uploadImageContainer = appEl.querySelector(".upload-image-container");\n\n    if (uploadImageContainer) {\n      (0,_upload_image_component_js__WEBPACK_IMPORTED_MODULE_1__.renderUploadImageComponent)({\n        element: appEl.querySelector(".upload-image-container"),\n        onImageUrlChange(newImageUrl) {\n          imageUrl = newImageUrl;\n        },\n      });\n    }\n\n\n    document.getElementById("add-button").addEventListener("click", () => {\n      const description = document.getElementById("description").value;\n\n      onAddPostClick({\n        description: description,\n        imageUrl: imageUrl,\n      });\n    });\n  };\n\n  render();\n};\n\n\n//# sourceURL=webpack://instapro/./components/add-post-page-component.js?'
        );

        /***/
      },

    /***/ "./components/auth-page-component.js":
      /*!*******************************************!*\
  !*** ./components/auth-page-component.js ***!
  \*******************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderAuthPageComponent: () => (/* binding */ renderAuthPageComponent)\n/* harmony export */ });\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api.js */ "./api.js");\n/* harmony import */ var _header_component_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header-component.js */ "./components/header-component.js");\n/* harmony import */ var _upload_image_component_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./upload-image-component.js */ "./components/upload-image-component.js");\n\n\n\n\nfunction renderAuthPageComponent({ appEl, setUser }) {\n  let isLoginMode = true;\n  let imageUrl = "";\n\n  const renderForm = () => {\n    const appHtml = `\n      <div class="page-container">\n          <div class="header-container"></div>\n          <div class="form">\n              <h3 class="form-title">\n                ${\n                  isLoginMode\n                    ? "Вход в&nbsp;Instapro"\n                    : "Регистрация в&nbsp;Instapro"\n                }\n                </h3>\n              <div class="form-inputs">\n    \n                  ${\n                    !isLoginMode\n                      ? `\n                      <div class="upload-image-container"></div>\n                      <input type="text" id="name-input" class="input" placeholder="Имя" />\n                      `\n                      : ""\n                  }\n                  \n                  <input type="text" id="login-input" class="input" placeholder="Логин" />\n                  <input type="password" id="password-input" class="input" placeholder="Пароль" />\n                  \n                  <div class="form-error"></div>\n                  \n                  <button class="button" id="login-button">${\n                    isLoginMode ? "Войти" : "Зарегистрироваться"\n                  }</button>\n              </div>\n            \n              <div class="form-footer">\n                <p class="form-footer-title">\n                  ${isLoginMode ? "Нет аккаунта?" : "Уже есть аккаунт?"}\n                  <button class="link-button" id="toggle-button">\n                    ${isLoginMode ? "Зарегистрироваться." : "Войти."}\n                  </button>\n                </p> \n               \n              </div>\n          </div>\n      </div>    \n`;\n\n    appEl.innerHTML = appHtml;\n\n    // Не вызываем перерендер, чтобы не сбрасывалась заполненная форма\n    // Точечно обновляем кусочек дом дерева\n    const setError = (message) => {\n      appEl.querySelector(".form-error").textContent = message;\n    };\n\n    (0,_header_component_js__WEBPACK_IMPORTED_MODULE_1__.renderHeaderComponent)({\n      element: document.querySelector(".header-container"),\n    });\n\n    const uploadImageContainer = appEl.querySelector(".upload-image-container");\n\n    if (uploadImageContainer) {\n      (0,_upload_image_component_js__WEBPACK_IMPORTED_MODULE_2__.renderUploadImageComponent)({\n        element: appEl.querySelector(".upload-image-container"),\n        onImageUrlChange(newImageUrl) {\n          imageUrl = newImageUrl;\n        },\n      });\n    }\n\n    document.getElementById("login-button").addEventListener("click", () => {\n      setError("");\n\n      if (isLoginMode) {\n        const login = document.getElementById("login-input").value;\n        const password = document.getElementById("password-input").value;\n\n        if (!login) {\n          alert("Введите логин");\n          return;\n        }\n\n        if (!password) {\n          alert("Введите пароль");\n          return;\n        }\n\n        (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.loginUser)({\n          login: login,\n          password: password,\n        })\n          .then((user) => {\n            setUser(user.user);\n          })\n          .catch((error) => {\n            console.warn(error);\n            setError(error.message);\n          });\n      } else {\n        const login = document.getElementById("login-input").value;\n        const name = document.getElementById("name-input").value;\n        const password = document.getElementById("password-input").value;\n        if (!name) {\n          alert("Введите имя");\n          return;\n        }\n        if (!login) {\n          alert("Введите логин");\n          return;\n        }\n\n        if (!password) {\n          alert("Введите пароль");\n          return;\n        }\n\n        if (!imageUrl) {\n          alert("Не выбрана фотография");\n          return;\n        }\n\n        (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.registerUser)({\n          login: login,\n          password: password,\n          name: name,\n          imageUrl,\n        })\n          .then((user) => {\n            setUser(user.user);\n          })\n          .catch((error) => {\n            console.warn(error);\n            setError(error.message);\n          });\n      }\n    });\n\n    document.getElementById("toggle-button").addEventListener("click", () => {\n      isLoginMode = !isLoginMode;\n      renderForm();\n    });\n  };\n\n  renderForm();\n}\n\n\n//# sourceURL=webpack://instapro/./components/auth-page-component.js?'
        );

        /***/
      },

    /***/ "./components/header-component.js":
      /*!****************************************!*\
  !*** ./components/header-component.js ***!
  \****************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderHeaderComponent: () => (/* binding */ renderHeaderComponent)\n/* harmony export */ });\n/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../main.js */ "./main.js");\n/* harmony import */ var _routes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../routes.js */ "./routes.js");\n\n\n\nfunction renderHeaderComponent({ element }) {\n  element.innerHTML = `\n  <div class="page-header">\n      <h1 class="logo">instapro</h1>\n      <button class="header-button add-or-login-button">\n      ${_main_js__WEBPACK_IMPORTED_MODULE_0__.user\n      ? `<div title="Добавить пост" class="add-post-sign"></div>`\n      : "Войти"\n    }\n      </button>\n      ${_main_js__WEBPACK_IMPORTED_MODULE_0__.user\n      ? `<button title="${_main_js__WEBPACK_IMPORTED_MODULE_0__.user.name}" class="header-button logout-button">Выйти</button>`\n      : ""\n    }  \n  </div>\n  \n`;\n\n  element\n    .querySelector(".add-or-login-button")\n    .addEventListener("click", () => {\n      if (_main_js__WEBPACK_IMPORTED_MODULE_0__.user) {\n        (0,_main_js__WEBPACK_IMPORTED_MODULE_0__.goToPage)(_routes_js__WEBPACK_IMPORTED_MODULE_1__.ADD_POSTS_PAGE);\n      } else {\n        (0,_main_js__WEBPACK_IMPORTED_MODULE_0__.goToPage)(_routes_js__WEBPACK_IMPORTED_MODULE_1__.AUTH_PAGE);\n      }\n    });\n\n  element.querySelector(".logo").addEventListener("click", () => {\n    (0,_main_js__WEBPACK_IMPORTED_MODULE_0__.goToPage)(_routes_js__WEBPACK_IMPORTED_MODULE_1__.POSTS_PAGE);\n  });\n\n  element.querySelector(".logout-button")?.addEventListener("click", _main_js__WEBPACK_IMPORTED_MODULE_0__.logout);\n\n  return element;\n}\n\n\n//# sourceURL=webpack://instapro/./components/header-component.js?'
        );

        /***/
      },

    /***/ "./components/loading-page-component.js":
      /*!**********************************************!*\
  !*** ./components/loading-page-component.js ***!
  \**********************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderLoadingPageComponent: () => (/* binding */ renderLoadingPageComponent)\n/* harmony export */ });\n/* harmony import */ var _header_component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header-component.js */ "./components/header-component.js");\n\n\nfunction renderLoadingPageComponent({ appEl, user, goToPage }) {\n  const appHtml = `\n              <div class="page-container">\n                <div class="header-container"></div>\n                <div class="loading-page">\n                  <div class="loader"><div></div><div></div><div></div></div>\n                </div>\n              </div>`;\n\n  appEl.innerHTML = appHtml;\n\n  (0,_header_component_js__WEBPACK_IMPORTED_MODULE_0__.renderHeaderComponent)({\n    user,\n    element: document.querySelector(".header-container"),\n    goToPage,\n  });\n}\n\n\n//# sourceURL=webpack://instapro/./components/loading-page-component.js?'
        );

        /***/
      },

    /***/ "./components/posts-page-component.js":
      /*!********************************************!*\
  !*** ./components/posts-page-component.js ***!
  \********************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderPostsPageComponent: () => (/* binding */ renderPostsPageComponent)\n/* harmony export */ });\n/* harmony import */ var _routes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../routes.js */ "./routes.js");\n/* harmony import */ var _header_component_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header-component.js */ "./components/header-component.js");\n/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../main.js */ "./main.js");\n/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/formatDistanceToNow/index.js");\n/* harmony import */ var date_fns_locale__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns/locale */ "./node_modules/date-fns/esm/locale/ru/index.js");\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api.js */ "./api.js");\n\n\n\n\n\n\n\nfunction renderPostsPageComponent({ appEl }) {\n\n  const appPosts = _main_js__WEBPACK_IMPORTED_MODULE_2__.posts.map((post) => {\n    return {\n      userImageUrl: post.user.imageUrl,\n      userName: post.user.name,\n      userId: post.user.id,\n      imageUrl: post.imageUrl,\n      description: post.description,\n      userLogin: post.user.login,\n      date: (0,date_fns__WEBPACK_IMPORTED_MODULE_4__["default"])(new Date(post.createdAt), { locale: date_fns_locale__WEBPACK_IMPORTED_MODULE_5__["default"] }),\n      likes: post.likes,\n      isLiked: post.isLiked,\n      id: post.id,\n    }\n  })\n\n  const postsHtml = appPosts.map((element, index) => {\n    return `\n      <div class="page-container">\n        <div class="header-container"></div>\n        <ul class="posts">\n          <li class="post" data-index=${index}>\n            <div class="post-header" data-user-id="${element.userId}">\n                <img src="${element.userImageUrl}" class="post-header__user-image">\n                <p class="post-header__user-name">${element.userName}</p>\n            </div>\n            <div class="post-image-container">\n              <img class="post-image" src="${element.imageUrl}">\n            </div>\n            <div class="post-likes">\n              <button data-post-id="${element.id}" data-like="${element.isLiked ? \'true\' : \'\'}" data-index="${index}" class="like-button">\n                <img src="${element.isLiked ? `./assets/images/like-active.svg` : `./assets/images/like-not-active.svg`}">\n              </button>\n              <p class="post-likes-text">\n              Нравится: <strong>${element.likes.length >= 1 ? element.likes[0].name : \'0\'}</strong> ${(element.likes.length - 1) > 0 ? \'и ещё\' + \' \' + (element.likes.length - 1) : \'\'}\n              </p >\n            </div >\n            <p class="post-text">\n              <span class="user-name">${element.userName}</span>\n              ${element.description}\n            </p>\n            <p class="post-date">\n              ${element.date} назад\n            </p>\n          </li >                  \n        </ul >\n      </div > `\n  });\n\n  appEl.innerHTML = postsHtml;\n\n  (0,_header_component_js__WEBPACK_IMPORTED_MODULE_1__.renderHeaderComponent)({\n    element: document.querySelector(".header-container"),\n  });\n\n  for (let userEl of document.querySelectorAll(".post-header")) {\n    userEl.addEventListener("click", () => {\n      (0,_main_js__WEBPACK_IMPORTED_MODULE_2__.goToPage)(_routes_js__WEBPACK_IMPORTED_MODULE_0__.USER_POSTS_PAGE, {\n        userId: userEl.dataset.userId,\n      });\n    });\n  }\n\n  const likeEventListener = () => {\n    const likeButtons = document.querySelectorAll(".like-button");\n\n    likeButtons.forEach(likeButton => {\n      likeButton.addEventListener("click", (event) => {\n        event.stopPropagation();\n        const postId = likeButton.dataset.postId;\n        const index = likeButton.dataset.index;\n        likeButton.classList.add("shake-bottom");\n\n        if (_main_js__WEBPACK_IMPORTED_MODULE_2__.posts[index].isLiked) {\n          (0,_api_js__WEBPACK_IMPORTED_MODULE_3__.removeLike)({ token: (0,_main_js__WEBPACK_IMPORTED_MODULE_2__.getToken)(), postId })\n            .then(() => {\n              _main_js__WEBPACK_IMPORTED_MODULE_2__.posts[index].isLiked = false;\n            })\n            .then(() => {\n              (0,_api_js__WEBPACK_IMPORTED_MODULE_3__.getPosts)({ token: (0,_main_js__WEBPACK_IMPORTED_MODULE_2__.getToken)() })\n                .then((response) => {\n                  (0,_main_js__WEBPACK_IMPORTED_MODULE_2__.setPosts)(response);\n                  likeButton.classList.remove("shake-bottom");\n                  (0,_main_js__WEBPACK_IMPORTED_MODULE_2__.renderApp)();\n                })\n            })\n        } else {\n          (0,_api_js__WEBPACK_IMPORTED_MODULE_3__.setLike)({ token: (0,_main_js__WEBPACK_IMPORTED_MODULE_2__.getToken)(), postId })\n            .then(() => {\n              _main_js__WEBPACK_IMPORTED_MODULE_2__.posts[index].isLiked = true;\n            })\n            .then(() => {\n              (0,_api_js__WEBPACK_IMPORTED_MODULE_3__.getPosts)({ token: (0,_main_js__WEBPACK_IMPORTED_MODULE_2__.getToken)() })\n                .then((response) => {\n                  (0,_main_js__WEBPACK_IMPORTED_MODULE_2__.setPosts)(response);\n                  likeButton.classList.remove("shake-bottom");\n                  (0,_main_js__WEBPACK_IMPORTED_MODULE_2__.renderApp)();\n                })\n            })\n        }\n      });\n    });\n  };\n\n  likeEventListener();\n}\n\n//# sourceURL=webpack://instapro/./components/posts-page-component.js?'
        );

        /***/
      },

    /***/ "./components/upload-image-component.js":
      /*!**********************************************!*\
  !*** ./components/upload-image-component.js ***!
  \**********************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderUploadImageComponent: () => (/* binding */ renderUploadImageComponent)\n/* harmony export */ });\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api.js */ "./api.js");\n\n\nfunction renderUploadImageComponent({ element, onImageUrlChange }) {\n  let imageUrl = "";\n\n  const render = () => {\n    element.innerHTML = `\n  <div class="upload=image">\n      ${\n        imageUrl\n          ? `\n          <div class="file-upload-image-conrainer">\n            <img class="file-upload-image" src="${imageUrl}">\n            <button class="file-upload-remove-button button">Заменить фото</button>\n          </div>\n          `\n          : `\n            <label class="file-upload-label secondary-button">\n                <input\n                  type="file"\n                  class="file-upload-input"\n                  style="display:none"\n                />\n                Выберите фото\n            </label>\n          \n      `\n      }\n  </div>\n`;\n\n    const fileInputElement = element.querySelector(".file-upload-input");\n\n    fileInputElement?.addEventListener("change", () => {\n      const file = fileInputElement.files[0];\n      if (file) {\n        const lableEl = document.querySelector(".file-upload-label");\n        lableEl.setAttribute("disabled", true);\n        lableEl.textContent = "Загружаю файл...";\n        (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.uploadImage)({ file }).then(({ fileUrl }) => {\n          imageUrl = fileUrl;\n          onImageUrlChange(imageUrl);\n          render();\n        });\n      }\n    });\n\n    element\n      .querySelector(".file-upload-remove-button")\n      ?.addEventListener("click", () => {\n        imageUrl = "";\n        onImageUrlChange(imageUrl);\n        render();\n      });\n  };\n\n  render();\n}\n\n\n//# sourceURL=webpack://instapro/./components/upload-image-component.js?'
        );

        /***/
      },

    /***/ "./components/user-posts-page-component.js":
      /*!*************************************************!*\
  !*** ./components/user-posts-page-component.js ***!
  \*************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderUserPostsPageComponent: () => (/* binding */ renderUserPostsPageComponent)\n/* harmony export */ });\n/* harmony import */ var _routes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../routes.js */ "./routes.js");\n/* harmony import */ var _header_component_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header-component.js */ "./components/header-component.js");\n/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../main.js */ "./main.js");\n/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/formatDistanceToNow/index.js");\n/* harmony import */ var date_fns_locale__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns/locale */ "./node_modules/date-fns/esm/locale/ru/index.js");\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api.js */ "./api.js");\n\n\n\n\n\n\n\nfunction renderUserPostsPageComponent({ appEl }) {\n\n  const appPosts = _main_js__WEBPACK_IMPORTED_MODULE_2__.posts.map((post) => {\n    return {\n      userImageUrl: post.user.imageUrl,\n      userName: post.user.name,\n      userId: post.user.id,\n      imageUrl: post.imageUrl,\n      description: post.description,\n      userLogin: post.user.login,\n      date: (0,date_fns__WEBPACK_IMPORTED_MODULE_4__["default"])(new Date(post.createdAt), { locale: date_fns_locale__WEBPACK_IMPORTED_MODULE_5__["default"] }),\n      likes: post.likes,\n      isLiked: post.isLiked,\n      id: post.id,\n    }\n  })\n\n  const postsHtml = appPosts.map((element, index) => {\n    return `\n        <div class="page-container">\n          <div class="header-container"></div>\n          <ul class="posts">\n            <li class="post" data-index=${index}>\n              <div class="post-header" data-user-id="${element.userId}">\n                  <img src="${element.userImageUrl}" class="post-header__user-image">\n                  <p class="post-header__user-name">${element.userName}</p>\n              </div>\n              <div class="post-image-container">\n                <img class="post-image" src="${element.imageUrl}">\n              </div>\n              <div class="post-likes">\n                <button data-post-id="${element.id}" data-like="${element.isLiked ? \'true\' : \'\'}" data-index="${index}" class="like-button">\n                  <img src="${element.isLiked ? `./assets/images/like-active.svg` : `./assets/images/like-not-active.svg`}">\n                </button>\n                <p class="post-likes-text">\n                Нравится: <strong>${element.likes.length >= 1 ? element.likes[0].name : \'0\'}</strong> ${(element.likes.length - 1) > 0 ? \'и ещё\' + \' \' + (element.likes.length - 1) : \'\'}\n                </p>\n              </div>\n              <p class="post-text">\n                <span class="user-name">${element.userName}</span>\n                ${element.description}\n              </p>\n              <p class="post-date">\n              ${element.date} назад\n              </p>\n            </li>                  \n          </ul>\n        </div>`\n  });\n\n  appEl.innerHTML = postsHtml;\n\n  (0,_header_component_js__WEBPACK_IMPORTED_MODULE_1__.renderHeaderComponent)({\n    element: document.querySelector(".header-container"),\n  });\n\n  for (let userEl of document.querySelectorAll(".post-header")) {\n    userEl.addEventListener("click", () => {\n      (0,_main_js__WEBPACK_IMPORTED_MODULE_2__.goToPage)(_routes_js__WEBPACK_IMPORTED_MODULE_0__.USER_POSTS_PAGE, {\n        userId: userEl.dataset.userId,\n      });\n    });\n  }\n\n  const likeEventListener = () => {\n    const likeButtons = document.querySelectorAll(".like-button");\n\n    likeButtons.forEach(likeButton => {\n      likeButton.addEventListener("click", (event) => {\n        event.stopPropagation();\n        const postId = likeButton.dataset.postId;\n        const index = likeButton.dataset.index;\n        const postHeader = document.querySelector(\'.post-header\');\n        const userId = postHeader.dataset.userId;\n        likeButton.classList.add("shake-bottom");\n\n        if (_main_js__WEBPACK_IMPORTED_MODULE_2__.posts[index].isLiked) {\n          (0,_api_js__WEBPACK_IMPORTED_MODULE_3__.removeLike)({ token: (0,_main_js__WEBPACK_IMPORTED_MODULE_2__.getToken)(), postId })\n            .then(() => {\n              _main_js__WEBPACK_IMPORTED_MODULE_2__.posts[index].isLiked = false;\n            })\n            .then(() => {\n              (0,_api_js__WEBPACK_IMPORTED_MODULE_3__.getUserPosts)({ token: (0,_main_js__WEBPACK_IMPORTED_MODULE_2__.getToken)(), userId })\n                .then((response) => {\n                  (0,_main_js__WEBPACK_IMPORTED_MODULE_2__.setPosts)(response);\n                  likeButton.classList.remove("shake-bottom");\n                  (0,_main_js__WEBPACK_IMPORTED_MODULE_2__.renderApp)();\n                })\n            })\n        } else {\n          (0,_api_js__WEBPACK_IMPORTED_MODULE_3__.setLike)({ token: (0,_main_js__WEBPACK_IMPORTED_MODULE_2__.getToken)(), postId })\n            .then(() => {\n              _main_js__WEBPACK_IMPORTED_MODULE_2__.posts[index].isLiked = true;\n            })\n            .then(() => {\n              (0,_api_js__WEBPACK_IMPORTED_MODULE_3__.getUserPosts)({ token: (0,_main_js__WEBPACK_IMPORTED_MODULE_2__.getToken)(), userId })\n                .then((response) => {\n                  (0,_main_js__WEBPACK_IMPORTED_MODULE_2__.setPosts)(response);\n                  likeButton.classList.remove("shake-bottom");\n                  (0,_main_js__WEBPACK_IMPORTED_MODULE_2__.renderApp)();\n                })\n            })\n        }\n      });\n    });\n  };\n\n  likeEventListener();\n}\n\n//# sourceURL=webpack://instapro/./components/user-posts-page-component.js?'
        );

        /***/
      },

    /***/ "./helpers.js":
      /*!********************!*\
  !*** ./helpers.js ***!
  \********************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getUserFromLocalStorage: () => (/* binding */ getUserFromLocalStorage),\n/* harmony export */   removeUserFromLocalStorage: () => (/* binding */ removeUserFromLocalStorage),\n/* harmony export */   saveUserToLocalStorage: () => (/* binding */ saveUserToLocalStorage)\n/* harmony export */ });\nfunction saveUserToLocalStorage(user) {\n  window.localStorage.setItem("user", JSON.stringify(user));\n}\n\nfunction getUserFromLocalStorage(user) {\n  try {\n    return JSON.parse(window.localStorage.getItem("user"));\n  } catch (error) {\n    return null;\n  }\n}\n\nfunction removeUserFromLocalStorage(user) {\n  window.localStorage.removeItem("user");\n}\n\n\n//# sourceURL=webpack://instapro/./helpers.js?'
        );

        /***/
      },

    /***/ "./main.js":
      /*!*****************!*\
  !*** ./main.js ***!
  \*****************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getToken: () => (/* binding */ getToken),\n/* harmony export */   goToPage: () => (/* binding */ goToPage),\n/* harmony export */   logout: () => (/* binding */ logout),\n/* harmony export */   page: () => (/* binding */ page),\n/* harmony export */   posts: () => (/* binding */ posts),\n/* harmony export */   renderApp: () => (/* binding */ renderApp),\n/* harmony export */   setPosts: () => (/* binding */ setPosts),\n/* harmony export */   user: () => (/* binding */ user)\n/* harmony export */ });\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.js */ "./api.js");\n/* harmony import */ var _components_add_post_page_component_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/add-post-page-component.js */ "./components/add-post-page-component.js");\n/* harmony import */ var _components_auth_page_component_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/auth-page-component.js */ "./components/auth-page-component.js");\n/* harmony import */ var _routes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./routes.js */ "./routes.js");\n/* harmony import */ var _components_posts_page_component_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/posts-page-component.js */ "./components/posts-page-component.js");\n/* harmony import */ var _components_user_posts_page_component_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/user-posts-page-component.js */ "./components/user-posts-page-component.js");\n/* harmony import */ var _components_loading_page_component_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/loading-page-component.js */ "./components/loading-page-component.js");\n/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./helpers.js */ "./helpers.js");\n\n\n\n\n\n\n\n\n\nlet user = (0,_helpers_js__WEBPACK_IMPORTED_MODULE_7__.getUserFromLocalStorage)();\nlet page = null;\nlet posts = [];\nconst setPosts = (newPosts) => {\n  posts = newPosts;\n}\n\nconst getToken = () => {\n  const token = user ? `Bearer ${user.token}` : undefined;\n  return token;\n};\n\nconst logout = () => {\n  user = null;\n  (0,_helpers_js__WEBPACK_IMPORTED_MODULE_7__.removeUserFromLocalStorage)();\n  goToPage(_routes_js__WEBPACK_IMPORTED_MODULE_3__.POSTS_PAGE);\n};\n\nconst goToPage = (newPage, data) => {\n  if (\n    [\n      _routes_js__WEBPACK_IMPORTED_MODULE_3__.POSTS_PAGE,\n      _routes_js__WEBPACK_IMPORTED_MODULE_3__.AUTH_PAGE,\n      _routes_js__WEBPACK_IMPORTED_MODULE_3__.ADD_POSTS_PAGE,\n      _routes_js__WEBPACK_IMPORTED_MODULE_3__.USER_POSTS_PAGE,\n      _routes_js__WEBPACK_IMPORTED_MODULE_3__.LOADING_PAGE,\n    ].includes(newPage)\n  ) {\n    if (newPage === _routes_js__WEBPACK_IMPORTED_MODULE_3__.ADD_POSTS_PAGE) {\n      page = user ? _routes_js__WEBPACK_IMPORTED_MODULE_3__.ADD_POSTS_PAGE : _routes_js__WEBPACK_IMPORTED_MODULE_3__.AUTH_PAGE;\n      return renderApp();\n    }\n\n    if (newPage === _routes_js__WEBPACK_IMPORTED_MODULE_3__.POSTS_PAGE) {\n      page = _routes_js__WEBPACK_IMPORTED_MODULE_3__.LOADING_PAGE;\n      renderApp();\n\n      return (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.getPosts)({ token: getToken() })\n        .then((newPosts) => {\n          page = _routes_js__WEBPACK_IMPORTED_MODULE_3__.POSTS_PAGE;\n          posts = newPosts;\n          renderApp();\n        })\n        .catch((error) => {\n          console.error(error);\n          goToPage(_routes_js__WEBPACK_IMPORTED_MODULE_3__.POSTS_PAGE);\n        });\n    }\n\n    if (newPage === _routes_js__WEBPACK_IMPORTED_MODULE_3__.USER_POSTS_PAGE) {\n      let userId = data.userId;\n\n      return (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.getUserPosts)({ token: getToken(), userId })\n        .then((newUserPosts) => {\n          page = _routes_js__WEBPACK_IMPORTED_MODULE_3__.USER_POSTS_PAGE;\n          posts = newUserPosts;\n          renderApp();\n        })\n        .catch((error) => {\n          console.error(error);\n          goToPage(_routes_js__WEBPACK_IMPORTED_MODULE_3__.USER_POSTS_PAGE);\n        });\n    }\n\n    page = newPage;\n    renderApp();\n\n    return;\n  }\n\n  throw new Error("страницы не существует");\n};\n\nconst renderApp = () => {\n  const appEl = document.getElementById("app");\n  if (page === _routes_js__WEBPACK_IMPORTED_MODULE_3__.LOADING_PAGE) {\n    return (0,_components_loading_page_component_js__WEBPACK_IMPORTED_MODULE_6__.renderLoadingPageComponent)({\n      appEl,\n      user,\n      goToPage,\n    });\n  }\n\n  if (page === _routes_js__WEBPACK_IMPORTED_MODULE_3__.AUTH_PAGE) {\n    return (0,_components_auth_page_component_js__WEBPACK_IMPORTED_MODULE_2__.renderAuthPageComponent)({\n      appEl,\n      setUser: (newUser) => {\n        user = newUser;\n        (0,_helpers_js__WEBPACK_IMPORTED_MODULE_7__.saveUserToLocalStorage)(user);\n        goToPage(_routes_js__WEBPACK_IMPORTED_MODULE_3__.POSTS_PAGE);\n      },\n      user,\n      goToPage,\n    });\n  }\n\n  if (page === _routes_js__WEBPACK_IMPORTED_MODULE_3__.ADD_POSTS_PAGE) {\n    return (0,_components_add_post_page_component_js__WEBPACK_IMPORTED_MODULE_1__.renderAddPostPageComponent)({\n      appEl,\n      onAddPostClick({ description, imageUrl }) {\n        (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.addPost)({\n          token: getToken(),\n          description,\n          imageUrl,\n        })\n          .then((responseData) => {\n            console.log(responseData);\n            (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.getPosts)({ token: getToken() })\n              .then((response) => {\n                posts = response;\n                renderApp();\n              })\n          });\n\n        goToPage(_routes_js__WEBPACK_IMPORTED_MODULE_3__.POSTS_PAGE);\n      },\n    });\n  }\n\n  if (page === _routes_js__WEBPACK_IMPORTED_MODULE_3__.POSTS_PAGE) {\n    return (0,_components_posts_page_component_js__WEBPACK_IMPORTED_MODULE_4__.renderPostsPageComponent)({\n      appEl,\n    });\n  }\n\n  if (page === _routes_js__WEBPACK_IMPORTED_MODULE_3__.USER_POSTS_PAGE) {\n    return (0,_components_user_posts_page_component_js__WEBPACK_IMPORTED_MODULE_5__.renderUserPostsPageComponent)({\n      appEl,\n    });\n  }\n};\n\ngoToPage(_routes_js__WEBPACK_IMPORTED_MODULE_3__.POSTS_PAGE);\n\n\n//# sourceURL=webpack://instapro/./main.js?'
        );

        /***/
      },

    /***/ "./node_modules/date-fns/esm/_lib/assign/index.js":
      /*!********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/assign/index.js ***!
  \********************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ assign)\n/* harmony export */ });\nfunction assign(target, object) {\n  if (target == null) {\n    throw new TypeError('assign requires that input parameter not be null or undefined');\n  }\n  for (var property in object) {\n    if (Object.prototype.hasOwnProperty.call(object, property)) {\n      ;\n      target[property] = object[property];\n    }\n  }\n  return target;\n}\n\n//# sourceURL=webpack://instapro/./node_modules/date-fns/esm/_lib/assign/index.js?"
        );

        /***/
      },

    /***/ "./node_modules/date-fns/esm/_lib/cloneObject/index.js":
      /*!*************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/cloneObject/index.js ***!
  \*************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ cloneObject)\n/* harmony export */ });\n/* harmony import */ var _assign_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assign/index.js */ "./node_modules/date-fns/esm/_lib/assign/index.js");\n\nfunction cloneObject(object) {\n  return (0,_assign_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({}, object);\n}\n\n//# sourceURL=webpack://instapro/./node_modules/date-fns/esm/_lib/cloneObject/index.js?'
        );

        /***/
      },

    /***/ "./node_modules/date-fns/esm/_lib/defaultLocale/index.js":
      /*!***************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/defaultLocale/index.js ***!
  \***************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _locale_en_US_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../locale/en-US/index.js */ "./node_modules/date-fns/esm/locale/en-US/index.js");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_locale_en_US_index_js__WEBPACK_IMPORTED_MODULE_0__["default"]);\n\n//# sourceURL=webpack://instapro/./node_modules/date-fns/esm/_lib/defaultLocale/index.js?'
        );

        /***/
      },

    /***/ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js":
      /*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/defaultOptions/index.js ***!
  \****************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getDefaultOptions: () => (/* binding */ getDefaultOptions),\n/* harmony export */   setDefaultOptions: () => (/* binding */ setDefaultOptions)\n/* harmony export */ });\nvar defaultOptions = {};\nfunction getDefaultOptions() {\n  return defaultOptions;\n}\nfunction setDefaultOptions(newOptions) {\n  defaultOptions = newOptions;\n}\n\n//# sourceURL=webpack://instapro/./node_modules/date-fns/esm/_lib/defaultOptions/index.js?"
        );

        /***/
      },

    /***/ "./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js":
      /*!*********************************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js ***!
  \*********************************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getTimezoneOffsetInMilliseconds)\n/* harmony export */ });\n/**\n * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.\n * They usually appear for dates that denote time before the timezones were introduced\n * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891\n * and GMT+01:00:00 after that date)\n *\n * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,\n * which would lead to incorrect calculations.\n *\n * This function returns the timezone offset in milliseconds that takes seconds in account.\n */\nfunction getTimezoneOffsetInMilliseconds(date) {\n  var utcDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));\n  utcDate.setUTCFullYear(date.getFullYear());\n  return date.getTime() - utcDate.getTime();\n}\n\n//# sourceURL=webpack://instapro/./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js?"
        );

        /***/
      },

    /***/ "./node_modules/date-fns/esm/_lib/isSameUTCWeek/index.js":
      /*!***************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/isSameUTCWeek/index.js ***!
  \***************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ isSameUTCWeek)\n/* harmony export */ });\n/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");\n/* harmony import */ var _startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js");\n\n\nfunction isSameUTCWeek(dirtyDateLeft, dirtyDateRight, options) {\n  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);\n  var dateLeftStartOfWeek = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft, options);\n  var dateRightStartOfWeek = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight, options);\n  return dateLeftStartOfWeek.getTime() === dateRightStartOfWeek.getTime();\n}\n\n//# sourceURL=webpack://instapro/./node_modules/date-fns/esm/_lib/isSameUTCWeek/index.js?'
        );

        /***/
      },

    /***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
      /*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ requiredArgs)\n/* harmony export */ });\nfunction requiredArgs(required, args) {\n  if (args.length < required) {\n    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');\n  }\n}\n\n//# sourceURL=webpack://instapro/./node_modules/date-fns/esm/_lib/requiredArgs/index.js?"
        );

        /***/
      },

    /***/ "./node_modules/date-fns/esm/_lib/roundingMethods/index.js":
      /*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/roundingMethods/index.js ***!
  \*****************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getRoundingMethod: () => (/* binding */ getRoundingMethod)\n/* harmony export */ });\nvar roundingMap = {\n  ceil: Math.ceil,\n  round: Math.round,\n  floor: Math.floor,\n  trunc: function trunc(value) {\n    return value < 0 ? Math.ceil(value) : Math.floor(value);\n  } // Math.trunc is not supported by IE\n};\n\nvar defaultRoundingMethod = 'trunc';\nfunction getRoundingMethod(method) {\n  return method ? roundingMap[method] : roundingMap[defaultRoundingMethod];\n}\n\n//# sourceURL=webpack://instapro/./node_modules/date-fns/esm/_lib/roundingMethods/index.js?"
        );

        /***/
      },

    /***/ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js":
      /*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js ***!
  \****************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ startOfUTCWeek)\n/* harmony export */ });\n/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");\n/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");\n/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");\n/* harmony import */ var _defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js");\n\n\n\n\nfunction startOfUTCWeek(dirtyDate, options) {\n  var _ref, _ref2, _ref3, _options$weekStartsOn, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;\n  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);\n  var defaultOptions = (0,_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();\n  var weekStartsOn = (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])((_ref = (_ref2 = (_ref3 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.weekStartsOn) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.weekStartsOn) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.weekStartsOn) !== null && _ref !== void 0 ? _ref : 0);\n\n  // Test if weekStartsOn is between 0 and 6 _and_ is not NaN\n  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {\n    throw new RangeError(\'weekStartsOn must be between 0 and 6 inclusively\');\n  }\n  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(dirtyDate);\n  var day = date.getUTCDay();\n  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;\n  date.setUTCDate(date.getUTCDate() - diff);\n  date.setUTCHours(0, 0, 0, 0);\n  return date;\n}\n\n//# sourceURL=webpack://instapro/./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js?'
        );

        /***/
      },

    /***/ "./node_modules/date-fns/esm/_lib/toInteger/index.js":
      /*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/toInteger/index.js ***!
  \***********************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ toInteger)\n/* harmony export */ });\nfunction toInteger(dirtyNumber) {\n  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {\n    return NaN;\n  }\n  var number = Number(dirtyNumber);\n  if (isNaN(number)) {\n    return number;\n  }\n  return number < 0 ? Math.ceil(number) : Math.floor(number);\n}\n\n//# sourceURL=webpack://instapro/./node_modules/date-fns/esm/_lib/toInteger/index.js?'
        );

        /***/
      },

    /***/ "./node_modules/date-fns/esm/compareAsc/index.js":
      /*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/compareAsc/index.js ***!
  \*******************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ compareAsc)\n/* harmony export */ });\n/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");\n\n\n/**\n * @name compareAsc\n * @category Common Helpers\n * @summary Compare the two dates and return -1, 0 or 1.\n *\n * @description\n * Compare the two dates and return 1 if the first date is after the second,\n * -1 if the first date is before the second or 0 if dates are equal.\n *\n * @param {Date|Number} dateLeft - the first date to compare\n * @param {Date|Number} dateRight - the second date to compare\n * @returns {Number} the result of the comparison\n * @throws {TypeError} 2 arguments required\n *\n * @example\n * // Compare 11 February 1987 and 10 July 1989:\n * const result = compareAsc(new Date(1987, 1, 11), new Date(1989, 6, 10))\n * //=> -1\n *\n * @example\n * // Sort the array of dates:\n * const result = [\n *   new Date(1995, 6, 2),\n *   new Date(1987, 1, 11),\n *   new Date(1989, 6, 10)\n * ].sort(compareAsc)\n * //=> [\n * //   Wed Feb 11 1987 00:00:00,\n * //   Mon Jul 10 1989 00:00:00,\n * //   Sun Jul 02 1995 00:00:00\n * // ]\n */\nfunction compareAsc(dirtyDateLeft, dirtyDateRight) {\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);\n  var dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);\n  var dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);\n  var diff = dateLeft.getTime() - dateRight.getTime();\n  if (diff < 0) {\n    return -1;\n  } else if (diff > 0) {\n    return 1;\n    // Return 0 if diff is 0; return NaN if diff is NaN\n  } else {\n    return diff;\n  }\n}\n\n//# sourceURL=webpack://instapro/./node_modules/date-fns/esm/compareAsc/index.js?'
        );

        /***/
      },

    /***/ "./node_modules/date-fns/esm/differenceInCalendarMonths/index.js":
      /*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/differenceInCalendarMonths/index.js ***!
  \***********************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ differenceInCalendarMonths)\n/* harmony export */ });\n/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");\n\n\n/**\n * @name differenceInCalendarMonths\n * @category Month Helpers\n * @summary Get the number of calendar months between the given dates.\n *\n * @description\n * Get the number of calendar months between the given dates.\n *\n * @param {Date|Number} dateLeft - the later date\n * @param {Date|Number} dateRight - the earlier date\n * @returns {Number} the number of calendar months\n * @throws {TypeError} 2 arguments required\n *\n * @example\n * // How many calendar months are between 31 January 2014 and 1 September 2014?\n * const result = differenceInCalendarMonths(\n *   new Date(2014, 8, 1),\n *   new Date(2014, 0, 31)\n * )\n * //=> 8\n */\nfunction differenceInCalendarMonths(dirtyDateLeft, dirtyDateRight) {\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);\n  var dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);\n  var dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);\n  var yearDiff = dateLeft.getFullYear() - dateRight.getFullYear();\n  var monthDiff = dateLeft.getMonth() - dateRight.getMonth();\n  return yearDiff * 12 + monthDiff;\n}\n\n//# sourceURL=webpack://instapro/./node_modules/date-fns/esm/differenceInCalendarMonths/index.js?'
        );

        /***/
      },

    /***/ "./node_modules/date-fns/esm/differenceInMilliseconds/index.js":
      /*!*********************************************************************!*\
  !*** ./node_modules/date-fns/esm/differenceInMilliseconds/index.js ***!
  \*********************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ differenceInMilliseconds)\n/* harmony export */ });\n/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");\n\n\n/**\n * @name differenceInMilliseconds\n * @category Millisecond Helpers\n * @summary Get the number of milliseconds between the given dates.\n *\n * @description\n * Get the number of milliseconds between the given dates.\n *\n * @param {Date|Number} dateLeft - the later date\n * @param {Date|Number} dateRight - the earlier date\n * @returns {Number} the number of milliseconds\n * @throws {TypeError} 2 arguments required\n *\n * @example\n * // How many milliseconds are between\n * // 2 July 2014 12:30:20.600 and 2 July 2014 12:30:21.700?\n * const result = differenceInMilliseconds(\n *   new Date(2014, 6, 2, 12, 30, 21, 700),\n *   new Date(2014, 6, 2, 12, 30, 20, 600)\n * )\n * //=> 1100\n */\nfunction differenceInMilliseconds(dateLeft, dateRight) {\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);\n  return (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dateLeft).getTime() - (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dateRight).getTime();\n}\n\n//# sourceURL=webpack://instapro/./node_modules/date-fns/esm/differenceInMilliseconds/index.js?'
        );

        /***/
      },

    /***/ "./node_modules/date-fns/esm/differenceInMonths/index.js":
      /*!***************************************************************!*\
  !*** ./node_modules/date-fns/esm/differenceInMonths/index.js ***!
  \***************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ differenceInMonths)\n/* harmony export */ });\n/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");\n/* harmony import */ var _differenceInCalendarMonths_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../differenceInCalendarMonths/index.js */ "./node_modules/date-fns/esm/differenceInCalendarMonths/index.js");\n/* harmony import */ var _compareAsc_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../compareAsc/index.js */ "./node_modules/date-fns/esm/compareAsc/index.js");\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");\n/* harmony import */ var _isLastDayOfMonth_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../isLastDayOfMonth/index.js */ "./node_modules/date-fns/esm/isLastDayOfMonth/index.js");\n\n\n\n\n\n/**\n * @name differenceInMonths\n * @category Month Helpers\n * @summary Get the number of full months between the given dates.\n *\n * @description\n * Get the number of full months between the given dates using trunc as a default rounding method.\n *\n * @param {Date|Number} dateLeft - the later date\n * @param {Date|Number} dateRight - the earlier date\n * @returns {Number} the number of full months\n * @throws {TypeError} 2 arguments required\n *\n * @example\n * // How many full months are between 31 January 2014 and 1 September 2014?\n * const result = differenceInMonths(new Date(2014, 8, 1), new Date(2014, 0, 31))\n * //=> 7\n */\nfunction differenceInMonths(dirtyDateLeft, dirtyDateRight) {\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);\n  var dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);\n  var dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);\n  var sign = (0,_compareAsc_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dateLeft, dateRight);\n  var difference = Math.abs((0,_differenceInCalendarMonths_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(dateLeft, dateRight));\n  var result;\n\n  // Check for the difference of less than month\n  if (difference < 1) {\n    result = 0;\n  } else {\n    if (dateLeft.getMonth() === 1 && dateLeft.getDate() > 27) {\n      // This will check if the date is end of Feb and assign a higher end of month date\n      // to compare it with Jan\n      dateLeft.setDate(30);\n    }\n    dateLeft.setMonth(dateLeft.getMonth() - sign * difference);\n\n    // Math.abs(diff in full months - diff in calendar months) === 1 if last calendar month is not full\n    // If so, result must be decreased by 1 in absolute value\n    var isLastMonthNotFull = (0,_compareAsc_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dateLeft, dateRight) === -sign;\n\n    // Check for cases of one full calendar month\n    if ((0,_isLastDayOfMonth_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])((0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft)) && difference === 1 && (0,_compareAsc_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDateLeft, dateRight) === 1) {\n      isLastMonthNotFull = false;\n    }\n    result = sign * (difference - Number(isLastMonthNotFull));\n  }\n\n  // Prevent negative zero\n  return result === 0 ? 0 : result;\n}\n\n//# sourceURL=webpack://instapro/./node_modules/date-fns/esm/differenceInMonths/index.js?'
        );

        /***/
      },

    /***/ "./node_modules/date-fns/esm/differenceInSeconds/index.js":
      /*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/differenceInSeconds/index.js ***!
  \****************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ differenceInSeconds)\n/* harmony export */ });\n/* harmony import */ var _differenceInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../differenceInMilliseconds/index.js */ "./node_modules/date-fns/esm/differenceInMilliseconds/index.js");\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");\n/* harmony import */ var _lib_roundingMethods_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/roundingMethods/index.js */ "./node_modules/date-fns/esm/_lib/roundingMethods/index.js");\n\n\n\n/**\n * @name differenceInSeconds\n * @category Second Helpers\n * @summary Get the number of seconds between the given dates.\n *\n * @description\n * Get the number of seconds between the given dates.\n *\n * @param {Date|Number} dateLeft - the later date\n * @param {Date|Number} dateRight - the earlier date\n * @param {Object} [options] - an object with options.\n * @param {String} [options.roundingMethod=\'trunc\'] - a rounding method (`ceil`, `floor`, `round` or `trunc`)\n * @returns {Number} the number of seconds\n * @throws {TypeError} 2 arguments required\n *\n * @example\n * // How many seconds are between\n * // 2 July 2014 12:30:07.999 and 2 July 2014 12:30:20.000?\n * const result = differenceInSeconds(\n *   new Date(2014, 6, 2, 12, 30, 20, 0),\n *   new Date(2014, 6, 2, 12, 30, 7, 999)\n * )\n * //=> 12\n */\nfunction differenceInSeconds(dateLeft, dateRight, options) {\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);\n  var diff = (0,_differenceInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dateLeft, dateRight) / 1000;\n  return (0,_lib_roundingMethods_index_js__WEBPACK_IMPORTED_MODULE_2__.getRoundingMethod)(options === null || options === void 0 ? void 0 : options.roundingMethod)(diff);\n}\n\n//# sourceURL=webpack://instapro/./node_modules/date-fns/esm/differenceInSeconds/index.js?'
        );

        /***/
      },

    /***/ "./node_modules/date-fns/esm/endOfDay/index.js":
      /*!*****************************************************!*\
  !*** ./node_modules/date-fns/esm/endOfDay/index.js ***!
  \*****************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ endOfDay)\n/* harmony export */ });\n/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");\n\n\n/**\n * @name endOfDay\n * @category Day Helpers\n * @summary Return the end of a day for the given date.\n *\n * @description\n * Return the end of a day for the given date.\n * The result will be in the local timezone.\n *\n * @param {Date|Number} date - the original date\n * @returns {Date} the end of a day\n * @throws {TypeError} 1 argument required\n *\n * @example\n * // The end of a day for 2 September 2014 11:55:00:\n * const result = endOfDay(new Date(2014, 8, 2, 11, 55, 0))\n * //=> Tue Sep 02 2014 23:59:59.999\n */\nfunction endOfDay(dirtyDate) {\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);\n  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);\n  date.setHours(23, 59, 59, 999);\n  return date;\n}\n\n//# sourceURL=webpack://instapro/./node_modules/date-fns/esm/endOfDay/index.js?'
        );

        /***/
      },

    /***/ "./node_modules/date-fns/esm/endOfMonth/index.js":
      /*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/endOfMonth/index.js ***!
  \*******************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ endOfMonth)\n/* harmony export */ });\n/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");\n\n\n/**\n * @name endOfMonth\n * @category Month Helpers\n * @summary Return the end of a month for the given date.\n *\n * @description\n * Return the end of a month for the given date.\n * The result will be in the local timezone.\n *\n * @param {Date|Number} date - the original date\n * @returns {Date} the end of a month\n * @throws {TypeError} 1 argument required\n *\n * @example\n * // The end of a month for 2 September 2014 11:55:00:\n * const result = endOfMonth(new Date(2014, 8, 2, 11, 55, 0))\n * //=> Tue Sep 30 2014 23:59:59.999\n */\nfunction endOfMonth(dirtyDate) {\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);\n  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);\n  var month = date.getMonth();\n  date.setFullYear(date.getFullYear(), month + 1, 0);\n  date.setHours(23, 59, 59, 999);\n  return date;\n}\n\n//# sourceURL=webpack://instapro/./node_modules/date-fns/esm/endOfMonth/index.js?'
        );

        /***/
      },

    /***/ "./node_modules/date-fns/esm/formatDistance/index.js":
      /*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/formatDistance/index.js ***!
  \***********************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ formatDistance)\n/* harmony export */ });\n/* harmony import */ var _lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/defaultOptions/index.js */ \"./node_modules/date-fns/esm/_lib/defaultOptions/index.js\");\n/* harmony import */ var _compareAsc_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../compareAsc/index.js */ \"./node_modules/date-fns/esm/compareAsc/index.js\");\n/* harmony import */ var _differenceInMonths_index_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../differenceInMonths/index.js */ \"./node_modules/date-fns/esm/differenceInMonths/index.js\");\n/* harmony import */ var _differenceInSeconds_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../differenceInSeconds/index.js */ \"./node_modules/date-fns/esm/differenceInSeconds/index.js\");\n/* harmony import */ var _lib_defaultLocale_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/defaultLocale/index.js */ \"./node_modules/date-fns/esm/_lib/defaultLocale/index.js\");\n/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../toDate/index.js */ \"./node_modules/date-fns/esm/toDate/index.js\");\n/* harmony import */ var _lib_cloneObject_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_lib/cloneObject/index.js */ \"./node_modules/date-fns/esm/_lib/cloneObject/index.js\");\n/* harmony import */ var _lib_assign_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_lib/assign/index.js */ \"./node_modules/date-fns/esm/_lib/assign/index.js\");\n/* harmony import */ var _lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../_lib/getTimezoneOffsetInMilliseconds/index.js */ \"./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js\");\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/esm/_lib/requiredArgs/index.js\");\n\n\n\n\n\n\n\n\n\n\nvar MINUTES_IN_DAY = 1440;\nvar MINUTES_IN_ALMOST_TWO_DAYS = 2520;\nvar MINUTES_IN_MONTH = 43200;\nvar MINUTES_IN_TWO_MONTHS = 86400;\n\n/**\n * @name formatDistance\n * @category Common Helpers\n * @summary Return the distance between the given dates in words.\n *\n * @description\n * Return the distance between the given dates in words.\n *\n * | Distance between dates                                            | Result              |\n * |-------------------------------------------------------------------|---------------------|\n * | 0 ... 30 secs                                                     | less than a minute  |\n * | 30 secs ... 1 min 30 secs                                         | 1 minute            |\n * | 1 min 30 secs ... 44 mins 30 secs                                 | [2..44] minutes     |\n * | 44 mins ... 30 secs ... 89 mins 30 secs                           | about 1 hour        |\n * | 89 mins 30 secs ... 23 hrs 59 mins 30 secs                        | about [2..24] hours |\n * | 23 hrs 59 mins 30 secs ... 41 hrs 59 mins 30 secs                 | 1 day               |\n * | 41 hrs 59 mins 30 secs ... 29 days 23 hrs 59 mins 30 secs         | [2..30] days        |\n * | 29 days 23 hrs 59 mins 30 secs ... 44 days 23 hrs 59 mins 30 secs | about 1 month       |\n * | 44 days 23 hrs 59 mins 30 secs ... 59 days 23 hrs 59 mins 30 secs | about 2 months      |\n * | 59 days 23 hrs 59 mins 30 secs ... 1 yr                           | [2..12] months      |\n * | 1 yr ... 1 yr 3 months                                            | about 1 year        |\n * | 1 yr 3 months ... 1 yr 9 month s                                  | over 1 year         |\n * | 1 yr 9 months ... 2 yrs                                           | almost 2 years      |\n * | N yrs ... N yrs 3 months                                          | about N years       |\n * | N yrs 3 months ... N yrs 9 months                                 | over N years        |\n * | N yrs 9 months ... N+1 yrs                                        | almost N+1 years    |\n *\n * With `options.includeSeconds == true`:\n * | Distance between dates | Result               |\n * |------------------------|----------------------|\n * | 0 secs ... 5 secs      | less than 5 seconds  |\n * | 5 secs ... 10 secs     | less than 10 seconds |\n * | 10 secs ... 20 secs    | less than 20 seconds |\n * | 20 secs ... 40 secs    | half a minute        |\n * | 40 secs ... 60 secs    | less than a minute   |\n * | 60 secs ... 90 secs    | 1 minute             |\n *\n * @param {Date|Number} date - the date\n * @param {Date|Number} baseDate - the date to compare with\n * @param {Object} [options] - an object with options.\n * @param {Boolean} [options.includeSeconds=false] - distances less than a minute are more detailed\n * @param {Boolean} [options.addSuffix=false] - result indicates if the second date is earlier or later than the first\n * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}\n * @returns {String} the distance in words\n * @throws {TypeError} 2 arguments required\n * @throws {RangeError} `date` must not be Invalid Date\n * @throws {RangeError} `baseDate` must not be Invalid Date\n * @throws {RangeError} `options.locale` must contain `formatDistance` property\n *\n * @example\n * // What is the distance between 2 July 2014 and 1 January 2015?\n * const result = formatDistance(new Date(2014, 6, 2), new Date(2015, 0, 1))\n * //=> '6 months'\n *\n * @example\n * // What is the distance between 1 January 2015 00:00:15\n * // and 1 January 2015 00:00:00, including seconds?\n * const result = formatDistance(\n *   new Date(2015, 0, 1, 0, 0, 15),\n *   new Date(2015, 0, 1, 0, 0, 0),\n *   { includeSeconds: true }\n * )\n * //=> 'less than 20 seconds'\n *\n * @example\n * // What is the distance from 1 January 2016\n * // to 1 January 2015, with a suffix?\n * const result = formatDistance(new Date(2015, 0, 1), new Date(2016, 0, 1), {\n *   addSuffix: true\n * })\n * //=> 'about 1 year ago'\n *\n * @example\n * // What is the distance between 1 August 2016 and 1 January 2015 in Esperanto?\n * import { eoLocale } from 'date-fns/locale/eo'\n * const result = formatDistance(new Date(2016, 7, 1), new Date(2015, 0, 1), {\n *   locale: eoLocale\n * })\n * //=> 'pli ol 1 jaro'\n */\n\nfunction formatDistance(dirtyDate, dirtyBaseDate, options) {\n  var _ref, _options$locale;\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(2, arguments);\n  var defaultOptions = (0,_lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();\n  var locale = (_ref = (_options$locale = options === null || options === void 0 ? void 0 : options.locale) !== null && _options$locale !== void 0 ? _options$locale : defaultOptions.locale) !== null && _ref !== void 0 ? _ref : _lib_defaultLocale_index_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\n  if (!locale.formatDistance) {\n    throw new RangeError('locale must contain formatDistance property');\n  }\n  var comparison = (0,_compareAsc_index_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(dirtyDate, dirtyBaseDate);\n  if (isNaN(comparison)) {\n    throw new RangeError('Invalid time value');\n  }\n  var localizeOptions = (0,_lib_assign_index_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])((0,_lib_cloneObject_index_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(options), {\n    addSuffix: Boolean(options === null || options === void 0 ? void 0 : options.addSuffix),\n    comparison: comparison\n  });\n  var dateLeft;\n  var dateRight;\n  if (comparison > 0) {\n    dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(dirtyBaseDate);\n    dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(dirtyDate);\n  } else {\n    dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(dirtyDate);\n    dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(dirtyBaseDate);\n  }\n  var seconds = (0,_differenceInSeconds_index_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(dateRight, dateLeft);\n  var offsetInSeconds = ((0,_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(dateRight) - (0,_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(dateLeft)) / 1000;\n  var minutes = Math.round((seconds - offsetInSeconds) / 60);\n  var months;\n\n  // 0 up to 2 mins\n  if (minutes < 2) {\n    if (options !== null && options !== void 0 && options.includeSeconds) {\n      if (seconds < 5) {\n        return locale.formatDistance('lessThanXSeconds', 5, localizeOptions);\n      } else if (seconds < 10) {\n        return locale.formatDistance('lessThanXSeconds', 10, localizeOptions);\n      } else if (seconds < 20) {\n        return locale.formatDistance('lessThanXSeconds', 20, localizeOptions);\n      } else if (seconds < 40) {\n        return locale.formatDistance('halfAMinute', 0, localizeOptions);\n      } else if (seconds < 60) {\n        return locale.formatDistance('lessThanXMinutes', 1, localizeOptions);\n      } else {\n        return locale.formatDistance('xMinutes', 1, localizeOptions);\n      }\n    } else {\n      if (minutes === 0) {\n        return locale.formatDistance('lessThanXMinutes', 1, localizeOptions);\n      } else {\n        return locale.formatDistance('xMinutes', minutes, localizeOptions);\n      }\n    }\n\n    // 2 mins up to 0.75 hrs\n  } else if (minutes < 45) {\n    return locale.formatDistance('xMinutes', minutes, localizeOptions);\n\n    // 0.75 hrs up to 1.5 hrs\n  } else if (minutes < 90) {\n    return locale.formatDistance('aboutXHours', 1, localizeOptions);\n\n    // 1.5 hrs up to 24 hrs\n  } else if (minutes < MINUTES_IN_DAY) {\n    var hours = Math.round(minutes / 60);\n    return locale.formatDistance('aboutXHours', hours, localizeOptions);\n\n    // 1 day up to 1.75 days\n  } else if (minutes < MINUTES_IN_ALMOST_TWO_DAYS) {\n    return locale.formatDistance('xDays', 1, localizeOptions);\n\n    // 1.75 days up to 30 days\n  } else if (minutes < MINUTES_IN_MONTH) {\n    var days = Math.round(minutes / MINUTES_IN_DAY);\n    return locale.formatDistance('xDays', days, localizeOptions);\n\n    // 1 month up to 2 months\n  } else if (minutes < MINUTES_IN_TWO_MONTHS) {\n    months = Math.round(minutes / MINUTES_IN_MONTH);\n    return locale.formatDistance('aboutXMonths', months, localizeOptions);\n  }\n  months = (0,_differenceInMonths_index_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(dateRight, dateLeft);\n\n  // 2 months up to 12 months\n  if (months < 12) {\n    var nearestMonth = Math.round(minutes / MINUTES_IN_MONTH);\n    return locale.formatDistance('xMonths', nearestMonth, localizeOptions);\n\n    // 1 year up to max Date\n  } else {\n    var monthsSinceStartOfYear = months % 12;\n    var years = Math.floor(months / 12);\n\n    // N years up to 1 years 3 months\n    if (monthsSinceStartOfYear < 3) {\n      return locale.formatDistance('aboutXYears', years, localizeOptions);\n\n      // N years 3 months up to N years 9 months\n    } else if (monthsSinceStartOfYear < 9) {\n      return locale.formatDistance('overXYears', years, localizeOptions);\n\n      // N years 9 months up to N year 12 months\n    } else {\n      return locale.formatDistance('almostXYears', years + 1, localizeOptions);\n    }\n  }\n}\n\n//# sourceURL=webpack://instapro/./node_modules/date-fns/esm/formatDistance/index.js?"
        );

        /***/
      },

    /***/ "./node_modules/date-fns/esm/formatDistanceToNow/index.js":
      /*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/formatDistanceToNow/index.js ***!
  \****************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ formatDistanceToNow)\n/* harmony export */ });\n/* harmony import */ var _formatDistance_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../formatDistance/index.js */ \"./node_modules/date-fns/esm/formatDistance/index.js\");\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/esm/_lib/requiredArgs/index.js\");\n\n\n/**\n * @name formatDistanceToNow\n * @category Common Helpers\n * @summary Return the distance between the given date and now in words.\n * @pure false\n *\n * @description\n * Return the distance between the given date and now in words.\n *\n * | Distance to now                                                   | Result              |\n * |-------------------------------------------------------------------|---------------------|\n * | 0 ... 30 secs                                                     | less than a minute  |\n * | 30 secs ... 1 min 30 secs                                         | 1 minute            |\n * | 1 min 30 secs ... 44 mins 30 secs                                 | [2..44] minutes     |\n * | 44 mins ... 30 secs ... 89 mins 30 secs                           | about 1 hour        |\n * | 89 mins 30 secs ... 23 hrs 59 mins 30 secs                        | about [2..24] hours |\n * | 23 hrs 59 mins 30 secs ... 41 hrs 59 mins 30 secs                 | 1 day               |\n * | 41 hrs 59 mins 30 secs ... 29 days 23 hrs 59 mins 30 secs         | [2..30] days        |\n * | 29 days 23 hrs 59 mins 30 secs ... 44 days 23 hrs 59 mins 30 secs | about 1 month       |\n * | 44 days 23 hrs 59 mins 30 secs ... 59 days 23 hrs 59 mins 30 secs | about 2 months      |\n * | 59 days 23 hrs 59 mins 30 secs ... 1 yr                           | [2..12] months      |\n * | 1 yr ... 1 yr 3 months                                            | about 1 year        |\n * | 1 yr 3 months ... 1 yr 9 month s                                  | over 1 year         |\n * | 1 yr 9 months ... 2 yrs                                           | almost 2 years      |\n * | N yrs ... N yrs 3 months                                          | about N years       |\n * | N yrs 3 months ... N yrs 9 months                                 | over N years        |\n * | N yrs 9 months ... N+1 yrs                                        | almost N+1 years    |\n *\n * With `options.includeSeconds == true`:\n * | Distance to now     | Result               |\n * |---------------------|----------------------|\n * | 0 secs ... 5 secs   | less than 5 seconds  |\n * | 5 secs ... 10 secs  | less than 10 seconds |\n * | 10 secs ... 20 secs | less than 20 seconds |\n * | 20 secs ... 40 secs | half a minute        |\n * | 40 secs ... 60 secs | less than a minute   |\n * | 60 secs ... 90 secs | 1 minute             |\n *\n * > ⚠️ Please note that this function is not present in the FP submodule as\n * > it uses `Date.now()` internally hence impure and can't be safely curried.\n *\n * @param {Date|Number} date - the given date\n * @param {Object} [options] - the object with options\n * @param {Boolean} [options.includeSeconds=false] - distances less than a minute are more detailed\n * @param {Boolean} [options.addSuffix=false] - result specifies if now is earlier or later than the passed date\n * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}\n * @returns {String} the distance in words\n * @throws {TypeError} 1 argument required\n * @throws {RangeError} `date` must not be Invalid Date\n * @throws {RangeError} `options.locale` must contain `formatDistance` property\n *\n * @example\n * // If today is 1 January 2015, what is the distance to 2 July 2014?\n * const result = formatDistanceToNow(\n *   new Date(2014, 6, 2)\n * )\n * //=> '6 months'\n *\n * @example\n * // If now is 1 January 2015 00:00:00,\n * // what is the distance to 1 January 2015 00:00:15, including seconds?\n * const result = formatDistanceToNow(\n *   new Date(2015, 0, 1, 0, 0, 15),\n *   {includeSeconds: true}\n * )\n * //=> 'less than 20 seconds'\n *\n * @example\n * // If today is 1 January 2015,\n * // what is the distance to 1 January 2016, with a suffix?\n * const result = formatDistanceToNow(\n *   new Date(2016, 0, 1),\n *   {addSuffix: true}\n * )\n * //=> 'in about 1 year'\n *\n * @example\n * // If today is 1 January 2015,\n * // what is the distance to 1 August 2016 in Esperanto?\n * const eoLocale = require('date-fns/locale/eo')\n * const result = formatDistanceToNow(\n *   new Date(2016, 7, 1),\n *   {locale: eoLocale}\n * )\n * //=> 'pli ol 1 jaro'\n */\nfunction formatDistanceToNow(dirtyDate, options) {\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(1, arguments);\n  return (0,_formatDistance_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(dirtyDate, Date.now(), options);\n}\n\n//# sourceURL=webpack://instapro/./node_modules/date-fns/esm/formatDistanceToNow/index.js?"
        );

        /***/
      },

    /***/ "./node_modules/date-fns/esm/isLastDayOfMonth/index.js":
      /*!*************************************************************!*\
  !*** ./node_modules/date-fns/esm/isLastDayOfMonth/index.js ***!
  \*************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ isLastDayOfMonth)\n/* harmony export */ });\n/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");\n/* harmony import */ var _endOfDay_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../endOfDay/index.js */ "./node_modules/date-fns/esm/endOfDay/index.js");\n/* harmony import */ var _endOfMonth_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../endOfMonth/index.js */ "./node_modules/date-fns/esm/endOfMonth/index.js");\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");\n\n\n\n\n/**\n * @name isLastDayOfMonth\n * @category Month Helpers\n * @summary Is the given date the last day of a month?\n *\n * @description\n * Is the given date the last day of a month?\n *\n * @param {Date|Number} date - the date to check\n * @returns {Boolean} the date is the last day of a month\n * @throws {TypeError} 1 argument required\n *\n * @example\n * // Is 28 February 2014 the last day of a month?\n * const result = isLastDayOfMonth(new Date(2014, 1, 28))\n * //=> true\n */\nfunction isLastDayOfMonth(dirtyDate) {\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);\n  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);\n  return (0,_endOfDay_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(date).getTime() === (0,_endOfMonth_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(date).getTime();\n}\n\n//# sourceURL=webpack://instapro/./node_modules/date-fns/esm/isLastDayOfMonth/index.js?'
        );

        /***/
      },

    /***/ "./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js":
      /*!**************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js ***!
  \**************************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ buildFormatLongFn)\n/* harmony export */ });\nfunction buildFormatLongFn(args) {\n  return function () {\n    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n    // TODO: Remove String()\n    var width = options.width ? String(options.width) : args.defaultWidth;\n    var format = args.formats[width] || args.formats[args.defaultWidth];\n    return format;\n  };\n}\n\n//# sourceURL=webpack://instapro/./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js?'
        );

        /***/
      },

    /***/ "./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js":
      /*!************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js ***!
  \************************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ buildLocalizeFn)\n/* harmony export */ });\nfunction buildLocalizeFn(args) {\n  return function (dirtyIndex, options) {\n    var context = options !== null && options !== void 0 && options.context ? String(options.context) : 'standalone';\n    var valuesArray;\n    if (context === 'formatting' && args.formattingValues) {\n      var defaultWidth = args.defaultFormattingWidth || args.defaultWidth;\n      var width = options !== null && options !== void 0 && options.width ? String(options.width) : defaultWidth;\n      valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];\n    } else {\n      var _defaultWidth = args.defaultWidth;\n      var _width = options !== null && options !== void 0 && options.width ? String(options.width) : args.defaultWidth;\n      valuesArray = args.values[_width] || args.values[_defaultWidth];\n    }\n    var index = args.argumentCallback ? args.argumentCallback(dirtyIndex) : dirtyIndex;\n    // @ts-ignore: For some reason TypeScript just don't want to match it, no matter how hard we try. I challenge you to try to remove it!\n    return valuesArray[index];\n  };\n}\n\n//# sourceURL=webpack://instapro/./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js?"
        );

        /***/
      },

    /***/ "./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js":
      /*!*********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js ***!
  \*********************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ buildMatchFn)\n/* harmony export */ });\nfunction buildMatchFn(args) {\n  return function (string) {\n    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n    var width = options.width;\n    var matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];\n    var matchResult = string.match(matchPattern);\n    if (!matchResult) {\n      return null;\n    }\n    var matchedString = matchResult[0];\n    var parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];\n    var key = Array.isArray(parsePatterns) ? findIndex(parsePatterns, function (pattern) {\n      return pattern.test(matchedString);\n    }) : findKey(parsePatterns, function (pattern) {\n      return pattern.test(matchedString);\n    });\n    var value;\n    value = args.valueCallback ? args.valueCallback(key) : key;\n    value = options.valueCallback ? options.valueCallback(value) : value;\n    var rest = string.slice(matchedString.length);\n    return {\n      value: value,\n      rest: rest\n    };\n  };\n}\nfunction findKey(object, predicate) {\n  for (var key in object) {\n    if (object.hasOwnProperty(key) && predicate(object[key])) {\n      return key;\n    }\n  }\n  return undefined;\n}\nfunction findIndex(array, predicate) {\n  for (var key = 0; key < array.length; key++) {\n    if (predicate(array[key])) {\n      return key;\n    }\n  }\n  return undefined;\n}\n\n//# sourceURL=webpack://instapro/./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js?'
        );

        /***/
      },

    /***/ "./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js":
      /*!****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js ***!
  \****************************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ buildMatchPatternFn)\n/* harmony export */ });\nfunction buildMatchPatternFn(args) {\n  return function (string) {\n    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n    var matchResult = string.match(args.matchPattern);\n    if (!matchResult) return null;\n    var matchedString = matchResult[0];\n    var parseResult = string.match(args.parsePattern);\n    if (!parseResult) return null;\n    var value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];\n    value = options.valueCallback ? options.valueCallback(value) : value;\n    var rest = string.slice(matchedString.length);\n    return {\n      value: value,\n      rest: rest\n    };\n  };\n}\n\n//# sourceURL=webpack://instapro/./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js?'
        );

        /***/
      },

    /***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js":
      /*!*****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js ***!
  \*****************************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar formatDistanceLocale = {\n  lessThanXSeconds: {\n    one: 'less than a second',\n    other: 'less than {{count}} seconds'\n  },\n  xSeconds: {\n    one: '1 second',\n    other: '{{count}} seconds'\n  },\n  halfAMinute: 'half a minute',\n  lessThanXMinutes: {\n    one: 'less than a minute',\n    other: 'less than {{count}} minutes'\n  },\n  xMinutes: {\n    one: '1 minute',\n    other: '{{count}} minutes'\n  },\n  aboutXHours: {\n    one: 'about 1 hour',\n    other: 'about {{count}} hours'\n  },\n  xHours: {\n    one: '1 hour',\n    other: '{{count}} hours'\n  },\n  xDays: {\n    one: '1 day',\n    other: '{{count}} days'\n  },\n  aboutXWeeks: {\n    one: 'about 1 week',\n    other: 'about {{count}} weeks'\n  },\n  xWeeks: {\n    one: '1 week',\n    other: '{{count}} weeks'\n  },\n  aboutXMonths: {\n    one: 'about 1 month',\n    other: 'about {{count}} months'\n  },\n  xMonths: {\n    one: '1 month',\n    other: '{{count}} months'\n  },\n  aboutXYears: {\n    one: 'about 1 year',\n    other: 'about {{count}} years'\n  },\n  xYears: {\n    one: '1 year',\n    other: '{{count}} years'\n  },\n  overXYears: {\n    one: 'over 1 year',\n    other: 'over {{count}} years'\n  },\n  almostXYears: {\n    one: 'almost 1 year',\n    other: 'almost {{count}} years'\n  }\n};\nvar formatDistance = function formatDistance(token, count, options) {\n  var result;\n  var tokenValue = formatDistanceLocale[token];\n  if (typeof tokenValue === 'string') {\n    result = tokenValue;\n  } else if (count === 1) {\n    result = tokenValue.one;\n  } else {\n    result = tokenValue.other.replace('{{count}}', count.toString());\n  }\n  if (options !== null && options !== void 0 && options.addSuffix) {\n    if (options.comparison && options.comparison > 0) {\n      return 'in ' + result;\n    } else {\n      return result + ' ago';\n    }\n  }\n  return result;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatDistance);\n\n//# sourceURL=webpack://instapro/./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js?"
        );

        /***/
      },

    /***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js":
      /*!*************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js ***!
  \*************************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildFormatLongFn/index.js */ \"./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js\");\n\nvar dateFormats = {\n  full: 'EEEE, MMMM do, y',\n  long: 'MMMM do, y',\n  medium: 'MMM d, y',\n  short: 'MM/dd/yyyy'\n};\nvar timeFormats = {\n  full: 'h:mm:ss a zzzz',\n  long: 'h:mm:ss a z',\n  medium: 'h:mm:ss a',\n  short: 'h:mm a'\n};\nvar dateTimeFormats = {\n  full: \"{{date}} 'at' {{time}}\",\n  long: \"{{date}} 'at' {{time}}\",\n  medium: '{{date}}, {{time}}',\n  short: '{{date}}, {{time}}'\n};\nvar formatLong = {\n  date: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    formats: dateFormats,\n    defaultWidth: 'full'\n  }),\n  time: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    formats: timeFormats,\n    defaultWidth: 'full'\n  }),\n  dateTime: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    formats: dateTimeFormats,\n    defaultWidth: 'full'\n  })\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatLong);\n\n//# sourceURL=webpack://instapro/./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js?"
        );

        /***/
      },

    /***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js":
      /*!*****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js ***!
  \*****************************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar formatRelativeLocale = {\n  lastWeek: \"'last' eeee 'at' p\",\n  yesterday: \"'yesterday at' p\",\n  today: \"'today at' p\",\n  tomorrow: \"'tomorrow at' p\",\n  nextWeek: \"eeee 'at' p\",\n  other: 'P'\n};\nvar formatRelative = function formatRelative(token, _date, _baseDate, _options) {\n  return formatRelativeLocale[token];\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatRelative);\n\n//# sourceURL=webpack://instapro/./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js?"
        );

        /***/
      },

    /***/ "./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js":
      /*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js ***!
  \***********************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildLocalizeFn/index.js */ \"./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js\");\n\nvar eraValues = {\n  narrow: ['B', 'A'],\n  abbreviated: ['BC', 'AD'],\n  wide: ['Before Christ', 'Anno Domini']\n};\nvar quarterValues = {\n  narrow: ['1', '2', '3', '4'],\n  abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],\n  wide: ['1st quarter', '2nd quarter', '3rd quarter', '4th quarter']\n};\n\n// Note: in English, the names of days of the week and months are capitalized.\n// If you are making a new locale based on this one, check if the same is true for the language you're working on.\n// Generally, formatted dates should look like they are in the middle of a sentence,\n// e.g. in Spanish language the weekdays and months should be in the lowercase.\nvar monthValues = {\n  narrow: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],\n  abbreviated: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],\n  wide: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']\n};\nvar dayValues = {\n  narrow: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],\n  short: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],\n  abbreviated: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],\n  wide: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']\n};\nvar dayPeriodValues = {\n  narrow: {\n    am: 'a',\n    pm: 'p',\n    midnight: 'mi',\n    noon: 'n',\n    morning: 'morning',\n    afternoon: 'afternoon',\n    evening: 'evening',\n    night: 'night'\n  },\n  abbreviated: {\n    am: 'AM',\n    pm: 'PM',\n    midnight: 'midnight',\n    noon: 'noon',\n    morning: 'morning',\n    afternoon: 'afternoon',\n    evening: 'evening',\n    night: 'night'\n  },\n  wide: {\n    am: 'a.m.',\n    pm: 'p.m.',\n    midnight: 'midnight',\n    noon: 'noon',\n    morning: 'morning',\n    afternoon: 'afternoon',\n    evening: 'evening',\n    night: 'night'\n  }\n};\nvar formattingDayPeriodValues = {\n  narrow: {\n    am: 'a',\n    pm: 'p',\n    midnight: 'mi',\n    noon: 'n',\n    morning: 'in the morning',\n    afternoon: 'in the afternoon',\n    evening: 'in the evening',\n    night: 'at night'\n  },\n  abbreviated: {\n    am: 'AM',\n    pm: 'PM',\n    midnight: 'midnight',\n    noon: 'noon',\n    morning: 'in the morning',\n    afternoon: 'in the afternoon',\n    evening: 'in the evening',\n    night: 'at night'\n  },\n  wide: {\n    am: 'a.m.',\n    pm: 'p.m.',\n    midnight: 'midnight',\n    noon: 'noon',\n    morning: 'in the morning',\n    afternoon: 'in the afternoon',\n    evening: 'in the evening',\n    night: 'at night'\n  }\n};\nvar ordinalNumber = function ordinalNumber(dirtyNumber, _options) {\n  var number = Number(dirtyNumber);\n\n  // If ordinal numbers depend on context, for example,\n  // if they are different for different grammatical genders,\n  // use `options.unit`.\n  //\n  // `unit` can be 'year', 'quarter', 'month', 'week', 'date', 'dayOfYear',\n  // 'day', 'hour', 'minute', 'second'.\n\n  var rem100 = number % 100;\n  if (rem100 > 20 || rem100 < 10) {\n    switch (rem100 % 10) {\n      case 1:\n        return number + 'st';\n      case 2:\n        return number + 'nd';\n      case 3:\n        return number + 'rd';\n    }\n  }\n  return number + 'th';\n};\nvar localize = {\n  ordinalNumber: ordinalNumber,\n  era: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    values: eraValues,\n    defaultWidth: 'wide'\n  }),\n  quarter: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    values: quarterValues,\n    defaultWidth: 'wide',\n    argumentCallback: function argumentCallback(quarter) {\n      return quarter - 1;\n    }\n  }),\n  month: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    values: monthValues,\n    defaultWidth: 'wide'\n  }),\n  day: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    values: dayValues,\n    defaultWidth: 'wide'\n  }),\n  dayPeriod: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    values: dayPeriodValues,\n    defaultWidth: 'wide',\n    formattingValues: formattingDayPeriodValues,\n    defaultFormattingWidth: 'wide'\n  })\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (localize);\n\n//# sourceURL=webpack://instapro/./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js?"
        );

        /***/
      },

    /***/ "./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js":
      /*!********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js ***!
  \********************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_lib/buildMatchFn/index.js */ \"./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js\");\n/* harmony import */ var _lib_buildMatchPatternFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildMatchPatternFn/index.js */ \"./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js\");\n\n\nvar matchOrdinalNumberPattern = /^(\\d+)(th|st|nd|rd)?/i;\nvar parseOrdinalNumberPattern = /\\d+/i;\nvar matchEraPatterns = {\n  narrow: /^(b|a)/i,\n  abbreviated: /^(b\\.?\\s?c\\.?|b\\.?\\s?c\\.?\\s?e\\.?|a\\.?\\s?d\\.?|c\\.?\\s?e\\.?)/i,\n  wide: /^(before christ|before common era|anno domini|common era)/i\n};\nvar parseEraPatterns = {\n  any: [/^b/i, /^(a|c)/i]\n};\nvar matchQuarterPatterns = {\n  narrow: /^[1234]/i,\n  abbreviated: /^q[1234]/i,\n  wide: /^[1234](th|st|nd|rd)? quarter/i\n};\nvar parseQuarterPatterns = {\n  any: [/1/i, /2/i, /3/i, /4/i]\n};\nvar matchMonthPatterns = {\n  narrow: /^[jfmasond]/i,\n  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,\n  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i\n};\nvar parseMonthPatterns = {\n  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],\n  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]\n};\nvar matchDayPatterns = {\n  narrow: /^[smtwf]/i,\n  short: /^(su|mo|tu|we|th|fr|sa)/i,\n  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,\n  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i\n};\nvar parseDayPatterns = {\n  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],\n  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]\n};\nvar matchDayPeriodPatterns = {\n  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,\n  any: /^([ap]\\.?\\s?m\\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i\n};\nvar parseDayPeriodPatterns = {\n  any: {\n    am: /^a/i,\n    pm: /^p/i,\n    midnight: /^mi/i,\n    noon: /^no/i,\n    morning: /morning/i,\n    afternoon: /afternoon/i,\n    evening: /evening/i,\n    night: /night/i\n  }\n};\nvar match = {\n  ordinalNumber: (0,_lib_buildMatchPatternFn_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    matchPattern: matchOrdinalNumberPattern,\n    parsePattern: parseOrdinalNumberPattern,\n    valueCallback: function valueCallback(value) {\n      return parseInt(value, 10);\n    }\n  }),\n  era: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n    matchPatterns: matchEraPatterns,\n    defaultMatchWidth: 'wide',\n    parsePatterns: parseEraPatterns,\n    defaultParseWidth: 'any'\n  }),\n  quarter: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n    matchPatterns: matchQuarterPatterns,\n    defaultMatchWidth: 'wide',\n    parsePatterns: parseQuarterPatterns,\n    defaultParseWidth: 'any',\n    valueCallback: function valueCallback(index) {\n      return index + 1;\n    }\n  }),\n  month: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n    matchPatterns: matchMonthPatterns,\n    defaultMatchWidth: 'wide',\n    parsePatterns: parseMonthPatterns,\n    defaultParseWidth: 'any'\n  }),\n  day: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n    matchPatterns: matchDayPatterns,\n    defaultMatchWidth: 'wide',\n    parsePatterns: parseDayPatterns,\n    defaultParseWidth: 'any'\n  }),\n  dayPeriod: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n    matchPatterns: matchDayPeriodPatterns,\n    defaultMatchWidth: 'any',\n    parsePatterns: parseDayPeriodPatterns,\n    defaultParseWidth: 'any'\n  })\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (match);\n\n//# sourceURL=webpack://instapro/./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js?"
        );

        /***/
      },

    /***/ "./node_modules/date-fns/esm/locale/en-US/index.js":
      /*!*********************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/index.js ***!
  \*********************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_formatDistance_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_lib/formatDistance/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js");\n/* harmony import */ var _lib_formatLong_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_lib/formatLong/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js");\n/* harmony import */ var _lib_formatRelative_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_lib/formatRelative/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js");\n/* harmony import */ var _lib_localize_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_lib/localize/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js");\n/* harmony import */ var _lib_match_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_lib/match/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js");\n\n\n\n\n\n/**\n * @type {Locale}\n * @category Locales\n * @summary English locale (United States).\n * @language English\n * @iso-639-2 eng\n * @author Sasha Koss [@kossnocorp]{@link https://github.com/kossnocorp}\n * @author Lesha Koss [@leshakoss]{@link https://github.com/leshakoss}\n */\nvar locale = {\n  code: \'en-US\',\n  formatDistance: _lib_formatDistance_index_js__WEBPACK_IMPORTED_MODULE_0__["default"],\n  formatLong: _lib_formatLong_index_js__WEBPACK_IMPORTED_MODULE_1__["default"],\n  formatRelative: _lib_formatRelative_index_js__WEBPACK_IMPORTED_MODULE_2__["default"],\n  localize: _lib_localize_index_js__WEBPACK_IMPORTED_MODULE_3__["default"],\n  match: _lib_match_index_js__WEBPACK_IMPORTED_MODULE_4__["default"],\n  options: {\n    weekStartsOn: 0 /* Sunday */,\n    firstWeekContainsDate: 1\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (locale);\n\n//# sourceURL=webpack://instapro/./node_modules/date-fns/esm/locale/en-US/index.js?'
        );

        /***/
      },

    /***/ "./node_modules/date-fns/esm/locale/ru/_lib/formatDistance/index.js":
      /*!**************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/ru/_lib/formatDistance/index.js ***!
  \**************************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction declension(scheme, count) {\n  // scheme for count=1 exists\n  if (scheme.one !== undefined && count === 1) {\n    return scheme.one;\n  }\n  var rem10 = count % 10;\n  var rem100 = count % 100;\n\n  // 1, 21, 31, ...\n  if (rem10 === 1 && rem100 !== 11) {\n    return scheme.singularNominative.replace('{{count}}', String(count));\n\n    // 2, 3, 4, 22, 23, 24, 32 ...\n  } else if (rem10 >= 2 && rem10 <= 4 && (rem100 < 10 || rem100 > 20)) {\n    return scheme.singularGenitive.replace('{{count}}', String(count));\n\n    // 5, 6, 7, 8, 9, 10, 11, ...\n  } else {\n    return scheme.pluralGenitive.replace('{{count}}', String(count));\n  }\n}\nfunction buildLocalizeTokenFn(scheme) {\n  return function (count, options) {\n    if (options !== null && options !== void 0 && options.addSuffix) {\n      if (options.comparison && options.comparison > 0) {\n        if (scheme.future) {\n          return declension(scheme.future, count);\n        } else {\n          return 'через ' + declension(scheme.regular, count);\n        }\n      } else {\n        if (scheme.past) {\n          return declension(scheme.past, count);\n        } else {\n          return declension(scheme.regular, count) + ' назад';\n        }\n      }\n    } else {\n      return declension(scheme.regular, count);\n    }\n  };\n}\nvar formatDistanceLocale = {\n  lessThanXSeconds: buildLocalizeTokenFn({\n    regular: {\n      one: 'меньше секунды',\n      singularNominative: 'меньше {{count}} секунды',\n      singularGenitive: 'меньше {{count}} секунд',\n      pluralGenitive: 'меньше {{count}} секунд'\n    },\n    future: {\n      one: 'меньше, чем через секунду',\n      singularNominative: 'меньше, чем через {{count}} секунду',\n      singularGenitive: 'меньше, чем через {{count}} секунды',\n      pluralGenitive: 'меньше, чем через {{count}} секунд'\n    }\n  }),\n  xSeconds: buildLocalizeTokenFn({\n    regular: {\n      singularNominative: '{{count}} секунда',\n      singularGenitive: '{{count}} секунды',\n      pluralGenitive: '{{count}} секунд'\n    },\n    past: {\n      singularNominative: '{{count}} секунду назад',\n      singularGenitive: '{{count}} секунды назад',\n      pluralGenitive: '{{count}} секунд назад'\n    },\n    future: {\n      singularNominative: 'через {{count}} секунду',\n      singularGenitive: 'через {{count}} секунды',\n      pluralGenitive: 'через {{count}} секунд'\n    }\n  }),\n  halfAMinute: function halfAMinute(_count, options) {\n    if (options !== null && options !== void 0 && options.addSuffix) {\n      if (options.comparison && options.comparison > 0) {\n        return 'через полминуты';\n      } else {\n        return 'полминуты назад';\n      }\n    }\n    return 'полминуты';\n  },\n  lessThanXMinutes: buildLocalizeTokenFn({\n    regular: {\n      one: 'меньше минуты',\n      singularNominative: 'меньше {{count}} минуты',\n      singularGenitive: 'меньше {{count}} минут',\n      pluralGenitive: 'меньше {{count}} минут'\n    },\n    future: {\n      one: 'меньше, чем через минуту',\n      singularNominative: 'меньше, чем через {{count}} минуту',\n      singularGenitive: 'меньше, чем через {{count}} минуты',\n      pluralGenitive: 'меньше, чем через {{count}} минут'\n    }\n  }),\n  xMinutes: buildLocalizeTokenFn({\n    regular: {\n      singularNominative: '{{count}} минута',\n      singularGenitive: '{{count}} минуты',\n      pluralGenitive: '{{count}} минут'\n    },\n    past: {\n      singularNominative: '{{count}} минуту назад',\n      singularGenitive: '{{count}} минуты назад',\n      pluralGenitive: '{{count}} минут назад'\n    },\n    future: {\n      singularNominative: 'через {{count}} минуту',\n      singularGenitive: 'через {{count}} минуты',\n      pluralGenitive: 'через {{count}} минут'\n    }\n  }),\n  aboutXHours: buildLocalizeTokenFn({\n    regular: {\n      singularNominative: 'около {{count}} часа',\n      singularGenitive: 'около {{count}} часов',\n      pluralGenitive: 'около {{count}} часов'\n    },\n    future: {\n      singularNominative: 'приблизительно через {{count}} час',\n      singularGenitive: 'приблизительно через {{count}} часа',\n      pluralGenitive: 'приблизительно через {{count}} часов'\n    }\n  }),\n  xHours: buildLocalizeTokenFn({\n    regular: {\n      singularNominative: '{{count}} час',\n      singularGenitive: '{{count}} часа',\n      pluralGenitive: '{{count}} часов'\n    }\n  }),\n  xDays: buildLocalizeTokenFn({\n    regular: {\n      singularNominative: '{{count}} день',\n      singularGenitive: '{{count}} дня',\n      pluralGenitive: '{{count}} дней'\n    }\n  }),\n  aboutXWeeks: buildLocalizeTokenFn({\n    regular: {\n      singularNominative: 'около {{count}} недели',\n      singularGenitive: 'около {{count}} недель',\n      pluralGenitive: 'около {{count}} недель'\n    },\n    future: {\n      singularNominative: 'приблизительно через {{count}} неделю',\n      singularGenitive: 'приблизительно через {{count}} недели',\n      pluralGenitive: 'приблизительно через {{count}} недель'\n    }\n  }),\n  xWeeks: buildLocalizeTokenFn({\n    regular: {\n      singularNominative: '{{count}} неделя',\n      singularGenitive: '{{count}} недели',\n      pluralGenitive: '{{count}} недель'\n    }\n  }),\n  aboutXMonths: buildLocalizeTokenFn({\n    regular: {\n      singularNominative: 'около {{count}} месяца',\n      singularGenitive: 'около {{count}} месяцев',\n      pluralGenitive: 'около {{count}} месяцев'\n    },\n    future: {\n      singularNominative: 'приблизительно через {{count}} месяц',\n      singularGenitive: 'приблизительно через {{count}} месяца',\n      pluralGenitive: 'приблизительно через {{count}} месяцев'\n    }\n  }),\n  xMonths: buildLocalizeTokenFn({\n    regular: {\n      singularNominative: '{{count}} месяц',\n      singularGenitive: '{{count}} месяца',\n      pluralGenitive: '{{count}} месяцев'\n    }\n  }),\n  aboutXYears: buildLocalizeTokenFn({\n    regular: {\n      singularNominative: 'около {{count}} года',\n      singularGenitive: 'около {{count}} лет',\n      pluralGenitive: 'около {{count}} лет'\n    },\n    future: {\n      singularNominative: 'приблизительно через {{count}} год',\n      singularGenitive: 'приблизительно через {{count}} года',\n      pluralGenitive: 'приблизительно через {{count}} лет'\n    }\n  }),\n  xYears: buildLocalizeTokenFn({\n    regular: {\n      singularNominative: '{{count}} год',\n      singularGenitive: '{{count}} года',\n      pluralGenitive: '{{count}} лет'\n    }\n  }),\n  overXYears: buildLocalizeTokenFn({\n    regular: {\n      singularNominative: 'больше {{count}} года',\n      singularGenitive: 'больше {{count}} лет',\n      pluralGenitive: 'больше {{count}} лет'\n    },\n    future: {\n      singularNominative: 'больше, чем через {{count}} год',\n      singularGenitive: 'больше, чем через {{count}} года',\n      pluralGenitive: 'больше, чем через {{count}} лет'\n    }\n  }),\n  almostXYears: buildLocalizeTokenFn({\n    regular: {\n      singularNominative: 'почти {{count}} год',\n      singularGenitive: 'почти {{count}} года',\n      pluralGenitive: 'почти {{count}} лет'\n    },\n    future: {\n      singularNominative: 'почти через {{count}} год',\n      singularGenitive: 'почти через {{count}} года',\n      pluralGenitive: 'почти через {{count}} лет'\n    }\n  })\n};\nvar formatDistance = function formatDistance(token, count, options) {\n  return formatDistanceLocale[token](count, options);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatDistance);\n\n//# sourceURL=webpack://instapro/./node_modules/date-fns/esm/locale/ru/_lib/formatDistance/index.js?"
        );

        /***/
      },

    /***/ "./node_modules/date-fns/esm/locale/ru/_lib/formatLong/index.js":
      /*!**********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/ru/_lib/formatLong/index.js ***!
  \**********************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildFormatLongFn/index.js */ \"./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js\");\n\nvar dateFormats = {\n  full: \"EEEE, d MMMM y 'г.'\",\n  long: \"d MMMM y 'г.'\",\n  medium: \"d MMM y 'г.'\",\n  short: 'dd.MM.y'\n};\nvar timeFormats = {\n  full: 'H:mm:ss zzzz',\n  long: 'H:mm:ss z',\n  medium: 'H:mm:ss',\n  short: 'H:mm'\n};\nvar dateTimeFormats = {\n  any: '{{date}}, {{time}}'\n};\nvar formatLong = {\n  date: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    formats: dateFormats,\n    defaultWidth: 'full'\n  }),\n  time: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    formats: timeFormats,\n    defaultWidth: 'full'\n  }),\n  dateTime: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    formats: dateTimeFormats,\n    defaultWidth: 'any'\n  })\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatLong);\n\n//# sourceURL=webpack://instapro/./node_modules/date-fns/esm/locale/ru/_lib/formatLong/index.js?"
        );

        /***/
      },

    /***/ "./node_modules/date-fns/esm/locale/ru/_lib/formatRelative/index.js":
      /*!**************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/ru/_lib/formatRelative/index.js ***!
  \**************************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_isSameUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../_lib/isSameUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/isSameUTCWeek/index.js");\n\nvar accusativeWeekdays = [\'воскресенье\', \'понедельник\', \'вторник\', \'среду\', \'четверг\', \'пятницу\', \'субботу\'];\nfunction _lastWeek(day) {\n  var weekday = accusativeWeekdays[day];\n  switch (day) {\n    case 0:\n      return "\'в прошлое " + weekday + " в\' p";\n    case 1:\n    case 2:\n    case 4:\n      return "\'в прошлый " + weekday + " в\' p";\n    case 3:\n    case 5:\n    case 6:\n      return "\'в прошлую " + weekday + " в\' p";\n  }\n}\nfunction thisWeek(day) {\n  var weekday = accusativeWeekdays[day];\n  if (day === 2 /* Tue */) {\n    return "\'во " + weekday + " в\' p";\n  } else {\n    return "\'в " + weekday + " в\' p";\n  }\n}\nfunction _nextWeek(day) {\n  var weekday = accusativeWeekdays[day];\n  switch (day) {\n    case 0:\n      return "\'в следующее " + weekday + " в\' p";\n    case 1:\n    case 2:\n    case 4:\n      return "\'в следующий " + weekday + " в\' p";\n    case 3:\n    case 5:\n    case 6:\n      return "\'в следующую " + weekday + " в\' p";\n  }\n}\nvar formatRelativeLocale = {\n  lastWeek: function lastWeek(date, baseDate, options) {\n    var day = date.getUTCDay();\n    if ((0,_lib_isSameUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date, baseDate, options)) {\n      return thisWeek(day);\n    } else {\n      return _lastWeek(day);\n    }\n  },\n  yesterday: "\'вчера в\' p",\n  today: "\'сегодня в\' p",\n  tomorrow: "\'завтра в\' p",\n  nextWeek: function nextWeek(date, baseDate, options) {\n    var day = date.getUTCDay();\n    if ((0,_lib_isSameUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date, baseDate, options)) {\n      return thisWeek(day);\n    } else {\n      return _nextWeek(day);\n    }\n  },\n  other: \'P\'\n};\nvar formatRelative = function formatRelative(token, date, baseDate, options) {\n  var format = formatRelativeLocale[token];\n  if (typeof format === \'function\') {\n    return format(date, baseDate, options);\n  }\n  return format;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatRelative);\n\n//# sourceURL=webpack://instapro/./node_modules/date-fns/esm/locale/ru/_lib/formatRelative/index.js?'
        );

        /***/
      },

    /***/ "./node_modules/date-fns/esm/locale/ru/_lib/localize/index.js":
      /*!********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/ru/_lib/localize/index.js ***!
  \********************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildLocalizeFn/index.js */ \"./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js\");\n\nvar eraValues = {\n  narrow: ['до н.э.', 'н.э.'],\n  abbreviated: ['до н. э.', 'н. э.'],\n  wide: ['до нашей эры', 'нашей эры']\n};\nvar quarterValues = {\n  narrow: ['1', '2', '3', '4'],\n  abbreviated: ['1-й кв.', '2-й кв.', '3-й кв.', '4-й кв.'],\n  wide: ['1-й квартал', '2-й квартал', '3-й квартал', '4-й квартал']\n};\nvar monthValues = {\n  narrow: ['Я', 'Ф', 'М', 'А', 'М', 'И', 'И', 'А', 'С', 'О', 'Н', 'Д'],\n  abbreviated: ['янв.', 'фев.', 'март', 'апр.', 'май', 'июнь', 'июль', 'авг.', 'сент.', 'окт.', 'нояб.', 'дек.'],\n  wide: ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь']\n};\nvar formattingMonthValues = {\n  narrow: ['Я', 'Ф', 'М', 'А', 'М', 'И', 'И', 'А', 'С', 'О', 'Н', 'Д'],\n  abbreviated: ['янв.', 'фев.', 'мар.', 'апр.', 'мая', 'июн.', 'июл.', 'авг.', 'сент.', 'окт.', 'нояб.', 'дек.'],\n  wide: ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря']\n};\nvar dayValues = {\n  narrow: ['В', 'П', 'В', 'С', 'Ч', 'П', 'С'],\n  short: ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'],\n  abbreviated: ['вск', 'пнд', 'втр', 'срд', 'чтв', 'птн', 'суб'],\n  wide: ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота']\n};\nvar dayPeriodValues = {\n  narrow: {\n    am: 'ДП',\n    pm: 'ПП',\n    midnight: 'полн.',\n    noon: 'полд.',\n    morning: 'утро',\n    afternoon: 'день',\n    evening: 'веч.',\n    night: 'ночь'\n  },\n  abbreviated: {\n    am: 'ДП',\n    pm: 'ПП',\n    midnight: 'полн.',\n    noon: 'полд.',\n    morning: 'утро',\n    afternoon: 'день',\n    evening: 'веч.',\n    night: 'ночь'\n  },\n  wide: {\n    am: 'ДП',\n    pm: 'ПП',\n    midnight: 'полночь',\n    noon: 'полдень',\n    morning: 'утро',\n    afternoon: 'день',\n    evening: 'вечер',\n    night: 'ночь'\n  }\n};\nvar formattingDayPeriodValues = {\n  narrow: {\n    am: 'ДП',\n    pm: 'ПП',\n    midnight: 'полн.',\n    noon: 'полд.',\n    morning: 'утра',\n    afternoon: 'дня',\n    evening: 'веч.',\n    night: 'ночи'\n  },\n  abbreviated: {\n    am: 'ДП',\n    pm: 'ПП',\n    midnight: 'полн.',\n    noon: 'полд.',\n    morning: 'утра',\n    afternoon: 'дня',\n    evening: 'веч.',\n    night: 'ночи'\n  },\n  wide: {\n    am: 'ДП',\n    pm: 'ПП',\n    midnight: 'полночь',\n    noon: 'полдень',\n    morning: 'утра',\n    afternoon: 'дня',\n    evening: 'вечера',\n    night: 'ночи'\n  }\n};\nvar ordinalNumber = function ordinalNumber(dirtyNumber, options) {\n  var number = Number(dirtyNumber);\n  var unit = options === null || options === void 0 ? void 0 : options.unit;\n  var suffix;\n  if (unit === 'date') {\n    suffix = '-е';\n  } else if (unit === 'week' || unit === 'minute' || unit === 'second') {\n    suffix = '-я';\n  } else {\n    suffix = '-й';\n  }\n  return number + suffix;\n};\nvar localize = {\n  ordinalNumber: ordinalNumber,\n  era: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    values: eraValues,\n    defaultWidth: 'wide'\n  }),\n  quarter: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    values: quarterValues,\n    defaultWidth: 'wide',\n    argumentCallback: function argumentCallback(quarter) {\n      return quarter - 1;\n    }\n  }),\n  month: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    values: monthValues,\n    defaultWidth: 'wide',\n    formattingValues: formattingMonthValues,\n    defaultFormattingWidth: 'wide'\n  }),\n  day: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    values: dayValues,\n    defaultWidth: 'wide'\n  }),\n  dayPeriod: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    values: dayPeriodValues,\n    defaultWidth: 'any',\n    formattingValues: formattingDayPeriodValues,\n    defaultFormattingWidth: 'wide'\n  })\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (localize);\n\n//# sourceURL=webpack://instapro/./node_modules/date-fns/esm/locale/ru/_lib/localize/index.js?"
        );

        /***/
      },

    /***/ "./node_modules/date-fns/esm/locale/ru/_lib/match/index.js":
      /*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/ru/_lib/match/index.js ***!
  \*****************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_lib/buildMatchFn/index.js */ \"./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js\");\n/* harmony import */ var _lib_buildMatchPatternFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildMatchPatternFn/index.js */ \"./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js\");\n\n\nvar matchOrdinalNumberPattern = /^(\\d+)(-?(е|я|й|ое|ье|ая|ья|ый|ой|ий|ый))?/i;\nvar parseOrdinalNumberPattern = /\\d+/i;\nvar matchEraPatterns = {\n  narrow: /^((до )?н\\.?\\s?э\\.?)/i,\n  abbreviated: /^((до )?н\\.?\\s?э\\.?)/i,\n  wide: /^(до нашей эры|нашей эры|наша эра)/i\n};\nvar parseEraPatterns = {\n  any: [/^д/i, /^н/i]\n};\nvar matchQuarterPatterns = {\n  narrow: /^[1234]/i,\n  abbreviated: /^[1234](-?[ыои]?й?)? кв.?/i,\n  wide: /^[1234](-?[ыои]?й?)? квартал/i\n};\nvar parseQuarterPatterns = {\n  any: [/1/i, /2/i, /3/i, /4/i]\n};\nvar matchMonthPatterns = {\n  narrow: /^[яфмаисонд]/i,\n  abbreviated: /^(янв|фев|март?|апр|ма[йя]|июн[ья]?|июл[ья]?|авг|сент?|окт|нояб?|дек)\\.?/i,\n  wide: /^(январ[ья]|феврал[ья]|марта?|апрел[ья]|ма[йя]|июн[ья]|июл[ья]|августа?|сентябр[ья]|октябр[ья]|октябр[ья]|ноябр[ья]|декабр[ья])/i\n};\nvar parseMonthPatterns = {\n  narrow: [/^я/i, /^ф/i, /^м/i, /^а/i, /^м/i, /^и/i, /^и/i, /^а/i, /^с/i, /^о/i, /^н/i, /^я/i],\n  any: [/^я/i, /^ф/i, /^мар/i, /^ап/i, /^ма[йя]/i, /^июн/i, /^июл/i, /^ав/i, /^с/i, /^о/i, /^н/i, /^д/i]\n};\nvar matchDayPatterns = {\n  narrow: /^[впсч]/i,\n  short: /^(вс|во|пн|по|вт|ср|чт|че|пт|пя|сб|су)\\.?/i,\n  abbreviated: /^(вск|вос|пнд|пон|втр|вто|срд|сре|чтв|чет|птн|пят|суб).?/i,\n  wide: /^(воскресень[ея]|понедельника?|вторника?|сред[аы]|четверга?|пятниц[аы]|суббот[аы])/i\n};\nvar parseDayPatterns = {\n  narrow: [/^в/i, /^п/i, /^в/i, /^с/i, /^ч/i, /^п/i, /^с/i],\n  any: [/^в[ос]/i, /^п[он]/i, /^в/i, /^ср/i, /^ч/i, /^п[ят]/i, /^с[уб]/i]\n};\nvar matchDayPeriodPatterns = {\n  narrow: /^([дп]п|полн\\.?|полд\\.?|утр[оа]|день|дня|веч\\.?|ноч[ьи])/i,\n  abbreviated: /^([дп]п|полн\\.?|полд\\.?|утр[оа]|день|дня|веч\\.?|ноч[ьи])/i,\n  wide: /^([дп]п|полночь|полдень|утр[оа]|день|дня|вечера?|ноч[ьи])/i\n};\nvar parseDayPeriodPatterns = {\n  any: {\n    am: /^дп/i,\n    pm: /^пп/i,\n    midnight: /^полн/i,\n    noon: /^полд/i,\n    morning: /^у/i,\n    afternoon: /^д[ен]/i,\n    evening: /^в/i,\n    night: /^н/i\n  }\n};\nvar match = {\n  ordinalNumber: (0,_lib_buildMatchPatternFn_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    matchPattern: matchOrdinalNumberPattern,\n    parsePattern: parseOrdinalNumberPattern,\n    valueCallback: function valueCallback(value) {\n      return parseInt(value, 10);\n    }\n  }),\n  era: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n    matchPatterns: matchEraPatterns,\n    defaultMatchWidth: 'wide',\n    parsePatterns: parseEraPatterns,\n    defaultParseWidth: 'any'\n  }),\n  quarter: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n    matchPatterns: matchQuarterPatterns,\n    defaultMatchWidth: 'wide',\n    parsePatterns: parseQuarterPatterns,\n    defaultParseWidth: 'any',\n    valueCallback: function valueCallback(index) {\n      return index + 1;\n    }\n  }),\n  month: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n    matchPatterns: matchMonthPatterns,\n    defaultMatchWidth: 'wide',\n    parsePatterns: parseMonthPatterns,\n    defaultParseWidth: 'any'\n  }),\n  day: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n    matchPatterns: matchDayPatterns,\n    defaultMatchWidth: 'wide',\n    parsePatterns: parseDayPatterns,\n    defaultParseWidth: 'any'\n  }),\n  dayPeriod: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n    matchPatterns: matchDayPeriodPatterns,\n    defaultMatchWidth: 'wide',\n    parsePatterns: parseDayPeriodPatterns,\n    defaultParseWidth: 'any'\n  })\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (match);\n\n//# sourceURL=webpack://instapro/./node_modules/date-fns/esm/locale/ru/_lib/match/index.js?"
        );

        /***/
      },

    /***/ "./node_modules/date-fns/esm/locale/ru/index.js":
      /*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/ru/index.js ***!
  \******************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_formatDistance_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_lib/formatDistance/index.js */ "./node_modules/date-fns/esm/locale/ru/_lib/formatDistance/index.js");\n/* harmony import */ var _lib_formatLong_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_lib/formatLong/index.js */ "./node_modules/date-fns/esm/locale/ru/_lib/formatLong/index.js");\n/* harmony import */ var _lib_formatRelative_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_lib/formatRelative/index.js */ "./node_modules/date-fns/esm/locale/ru/_lib/formatRelative/index.js");\n/* harmony import */ var _lib_localize_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_lib/localize/index.js */ "./node_modules/date-fns/esm/locale/ru/_lib/localize/index.js");\n/* harmony import */ var _lib_match_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_lib/match/index.js */ "./node_modules/date-fns/esm/locale/ru/_lib/match/index.js");\n\n\n\n\n\n/**\n * @type {Locale}\n * @category Locales\n * @summary Russian locale.\n * @language Russian\n * @iso-639-2 rus\n * @author Sasha Koss [@kossnocorp]{@link https://github.com/kossnocorp}\n * @author Lesha Koss [@leshakoss]{@link https://github.com/leshakoss}\n */\nvar locale = {\n  code: \'ru\',\n  formatDistance: _lib_formatDistance_index_js__WEBPACK_IMPORTED_MODULE_0__["default"],\n  formatLong: _lib_formatLong_index_js__WEBPACK_IMPORTED_MODULE_1__["default"],\n  formatRelative: _lib_formatRelative_index_js__WEBPACK_IMPORTED_MODULE_2__["default"],\n  localize: _lib_localize_index_js__WEBPACK_IMPORTED_MODULE_3__["default"],\n  match: _lib_match_index_js__WEBPACK_IMPORTED_MODULE_4__["default"],\n  options: {\n    weekStartsOn: 1 /* Monday */,\n    firstWeekContainsDate: 1\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (locale);\n\n//# sourceURL=webpack://instapro/./node_modules/date-fns/esm/locale/ru/index.js?'
        );

        /***/
      },

    /***/ "./node_modules/date-fns/esm/toDate/index.js":
      /*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ toDate)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ \"./node_modules/@babel/runtime/helpers/esm/typeof.js\");\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/esm/_lib/requiredArgs/index.js\");\n\n\n/**\n * @name toDate\n * @category Common Helpers\n * @summary Convert the given argument to an instance of Date.\n *\n * @description\n * Convert the given argument to an instance of Date.\n *\n * If the argument is an instance of Date, the function returns its clone.\n *\n * If the argument is a number, it is treated as a timestamp.\n *\n * If the argument is none of the above, the function returns Invalid Date.\n *\n * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.\n *\n * @param {Date|Number} argument - the value to convert\n * @returns {Date} the parsed date in the local time zone\n * @throws {TypeError} 1 argument required\n *\n * @example\n * // Clone the date:\n * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))\n * //=> Tue Feb 11 2014 11:30:30\n *\n * @example\n * // Convert the timestamp to date:\n * const result = toDate(1392098430000)\n * //=> Tue Feb 11 2014 11:30:30\n */\nfunction toDate(argument) {\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(1, arguments);\n  var argStr = Object.prototype.toString.call(argument);\n\n  // Clone the date\n  if (argument instanceof Date || (0,_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(argument) === 'object' && argStr === '[object Date]') {\n    // Prevent the date to lose the milliseconds when passed to new Date() in IE10\n    return new Date(argument.getTime());\n  } else if (typeof argument === 'number' || argStr === '[object Number]') {\n    return new Date(argument);\n  } else {\n    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {\n      // eslint-disable-next-line no-console\n      console.warn(\"Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments\");\n      // eslint-disable-next-line no-console\n      console.warn(new Error().stack);\n    }\n    return new Date(NaN);\n  }\n}\n\n//# sourceURL=webpack://instapro/./node_modules/date-fns/esm/toDate/index.js?"
        );

        /***/
      },

    /***/ "./routes.js":
      /*!*******************!*\
  !*** ./routes.js ***!
  \*******************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ADD_POSTS_PAGE: () => (/* binding */ ADD_POSTS_PAGE),\n/* harmony export */   AUTH_PAGE: () => (/* binding */ AUTH_PAGE),\n/* harmony export */   LOADING_PAGE: () => (/* binding */ LOADING_PAGE),\n/* harmony export */   POSTS_PAGE: () => (/* binding */ POSTS_PAGE),\n/* harmony export */   USER_POSTS_PAGE: () => (/* binding */ USER_POSTS_PAGE)\n/* harmony export */ });\n// Файл со списком страниц приложения\nconst POSTS_PAGE = "posts";\nconst USER_POSTS_PAGE = "user-posts";\nconst AUTH_PAGE = "auth";\nconst ADD_POSTS_PAGE = "add-post";\nconst LOADING_PAGE = "loading";\n\n\n//# sourceURL=webpack://instapro/./routes.js?'
        );

        /***/
      },

    /***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
      /*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ _typeof)\n/* harmony export */ });\nfunction _typeof(o) {\n  "@babel/helpers - typeof";\n\n  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {\n    return typeof o;\n  } : function (o) {\n    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;\n  }, _typeof(o);\n}\n\n//# sourceURL=webpack://instapro/./node_modules/@babel/runtime/helpers/esm/typeof.js?'
        );

        /***/
      },

    /******/
  };
  /************************************************************************/
  /******/ // The module cache
  /******/ var __webpack_module_cache__ = {};
  /******/
  /******/ // The require function
  /******/ function __webpack_require__(moduleId) {
    /******/ // Check if module is in cache
    /******/ var cachedModule = __webpack_module_cache__[moduleId];
    /******/ if (cachedModule !== undefined) {
      /******/ return cachedModule.exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/ var module = (__webpack_module_cache__[moduleId] = {
      /******/ // no module.id needed
      /******/ // no module.loaded needed
      /******/ exports: {},
      /******/
    });
    /******/
    /******/ // Execute the module function
    /******/ __webpack_modules__[moduleId](
      module,
      module.exports,
      __webpack_require__
    );
    /******/
    /******/ // Return the exports of the module
    /******/ return module.exports;
    /******/
  }
  /******/
  /************************************************************************/
  /******/ /* webpack/runtime/define property getters */
  /******/ (() => {
    /******/ // define getter functions for harmony exports
    /******/ __webpack_require__.d = (exports, definition) => {
      /******/ for (var key in definition) {
        /******/ if (
          __webpack_require__.o(definition, key) &&
          !__webpack_require__.o(exports, key)
        ) {
          /******/ Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key],
          });
          /******/
        }
        /******/
      }
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/hasOwnProperty shorthand */
  /******/ (() => {
    /******/ __webpack_require__.o = (obj, prop) =>
      Object.prototype.hasOwnProperty.call(obj, prop);
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/make namespace object */
  /******/ (() => {
    /******/ // define __esModule on exports
    /******/ __webpack_require__.r = (exports) => {
      /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
        /******/ Object.defineProperty(exports, Symbol.toStringTag, {
          value: "Module",
        });
        /******/
      }
      /******/ Object.defineProperty(exports, "__esModule", { value: true });
      /******/
    };
    /******/
  })();
  /******/
  /************************************************************************/
  /******/
  /******/ // startup
  /******/ // Load entry module and return exports
  /******/ // This entry module is referenced by other modules so it can't be inlined
  /******/ var __webpack_exports__ = __webpack_require__("./main.js");
  /******/
  /******/
})();
