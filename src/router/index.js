import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/home/Home.vue";
import Article from "../views/article/Article.vue";
import Archive from "../views/archive/Archive.vue";
import Category from "../views/category/Category.vue";
import Link from "../views/link/Link.vue";
import About from "../views/about/About.vue";
import Message from "../views/message/Messsage.vue";
import ArticleList from "../components/ArticleList.vue";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Home,
    meta: {
      title: "包子博客"
    }
  },
  {
    path: "/articles/:articleId",
    component: Article
  },
  {
    path: "/archives",
    component: Archive,
    meta: {
      title: "时间链"
    }
  },
  {
    path: "/categories",
    component: Category,
    meta: {
      title: "分类"
    }
  },
  {
    path: "/categories/*",
    component: ArticleList
  },
  {
    path: "/links",
    component: Link,
    meta: {
      title: "友链列表"
    }
  },
  {
    path: "/about",
    component: About,
    meta: {
      title: "关于我"
    }
  },
  {
    path: "/message",
    component: Message,
    meta: {
      title: "留言板"
    }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
