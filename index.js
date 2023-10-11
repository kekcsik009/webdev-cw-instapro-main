import { getPosts, addPost, getUserPosts, addLike, addDislike } from "./api.js";
import { renderAddPostPageComponent } from "./components/add-post-page-component.js";
import { renderAuthPageComponent } from "./components/auth-page-component.js";
import {
  ADD_POSTS_PAGE,
  AUTH_PAGE,
  LOADING_PAGE,
  POSTS_PAGE,
  USER_POSTS_PAGE,
} from "./routes.js";
import { renderPostsPageComponent } from "./components/posts-page-component.js";
import { renderLoadingPageComponent } from "./components/loading-page-component.js";
import {
  getUserFromLocalStorage,
  removeUserFromLocalStorage,
  saveUserToLocalStorage,
} from "./helpers.js";

import { renderUserPageComponent } from "./components/user-post-component.js";

export let user = getUserFromLocalStorage();
export let page = null;
export let posts = [];

const getToken = () => {
  const token = user ? `Bearer ${user.token}` : undefined;
  return token;
};

export const logout = () => {
  user = null;
  removeUserFromLocalStorage();
  goToPage(POSTS_PAGE);
};

/**
 * Включает страницу приложения
 */

export const goToPage = (newPage, data) => {
  if (
    [
      POSTS_PAGE,
      AUTH_PAGE,
      ADD_POSTS_PAGE,
      USER_POSTS_PAGE,
      LOADING_PAGE,
    ].includes(newPage)
    // Если пользователь не авторизован, то отправляем его на авторизацию перед добавлением поста
  ) {
    if (newPage === ADD_POSTS_PAGE) {
      page = user ? ADD_POSTS_PAGE : AUTH_PAGE;
      return renderApp();
    }

    if (newPage === POSTS_PAGE) {
      page = LOADING_PAGE;
      renderApp();

      return getPosts({ token: getToken() })
        .then((newPosts) => {
          page = POSTS_PAGE;
          posts = newPosts;
          renderApp();
        })
        .catch((error) => {
          console.error(error);
          goToPage(POSTS_PAGE);
        });
    }

    if (newPage === USER_POSTS_PAGE) {
      // TODO: реализовать получение постов юзера из API
      //      console.log("Открываю страницу пользователя: ", data.userId);
      // Делаем страницу загрузки
      page = LOADING_PAGE;
      renderApp();
      // Загружаем страницу с постом пользователя
      let userId = data.userId;
      return getUserPosts(userId).then((newPosts) => {
        page = USER_POSTS_PAGE;
        posts = newPosts;
        renderApp();
      });
    }

    page = newPage;
    renderApp();

    return;
  }

  likeEventListener();
  throw new Error("страницы не существует");
};

const renderApp = () => {
  const appEl = document.getElementById("app");
  if (page === LOADING_PAGE) {
    return renderLoadingPageComponent({
      appEl,
      user,
      goToPage,
    });
  }

  if (page === AUTH_PAGE) {
    return renderAuthPageComponent({
      appEl,
      setUser: (newUser) => {
        user = newUser;
        saveUserToLocalStorage(user);
        goToPage(POSTS_PAGE);
      },
      user,
      goToPage,
    });
  }

  if (page === ADD_POSTS_PAGE) {
    return renderAddPostPageComponent({
      appEl,
      onAddPostClick({ description, imageUrl }) {
        // TODO: реализовать добавление поста в API
        addPost({
          description,
          imageUrl,
          token: getToken(),
        }).then(() => {
          goToPage(POSTS_PAGE);
        });
      },
    });
  }

  if (page === POSTS_PAGE) {
    return renderPostsPageComponent({
      appEl,
    });
  }

  if (page === USER_POSTS_PAGE) {
    return renderUserPageComponent({
      appEl,
    });
  }
  likeEventListener();
};

// Декларируем вспомогательную функцию задержки
function delay(interval) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, interval);
  });
}

// Делаем обработчик события click на все кнопки "лайк" на странице
export const likeEventListener = () => {
  const likeButtonElements = document.querySelectorAll(".like-button");
  for (const likeButtonElement of likeButtonElements) {
    const index = +likeButtonElement.dataset.index;

    likeButtonElement.addEventListener("click", () => {
      let userId = posts[index].id;
      let idPost = posts[index].idPost;
      // Проверяем, авторизован ли пользователь
      if (!user) {
        alert("Если хотите поставить лайк, авторизуйтесь, пожалуйста!");
        return;
      }

      if (posts[index].isLiked === true) {
        delay(500) // добавляем задержку в 500 миллисекунд
          .then(() => addDislike({ idPost, token: getToken() }))
          .then(() => {
            if (page === POSTS_PAGE) {
              return getPosts({ token: getToken() }).then((newPosts) => {
                page = POSTS_PAGE;
                posts = newPosts;
                renderApp();
              });
            } else {
              return getUserPosts({ userId, token: getToken() }).then(
                (newPosts) => {
                  page = USER_POSTS_PAGE;
                  posts = newPosts;
                  renderApp();
                }
              );
            }
          });
      } else {
        delay(500) // добавляем задержку в 500 миллисекунд
          .then(() => addLike({ idPost, token: getToken() }))
          .then(() => {
            if (page === POSTS_PAGE) {
              return getPosts({ token: getToken() }).then((newPosts) => {
                page = POSTS_PAGE;
                posts = newPosts;
                renderApp();
              });
            } else {
              return getUserPosts({ userId, token: getToken() }).then(
                (newPosts) => {
                  page = USER_POSTS_PAGE;
                  posts = newPosts;
                  renderApp();
                }
              );
            }
          });
      }
    });
  }
};

goToPage(POSTS_PAGE);
likeEventListener();
