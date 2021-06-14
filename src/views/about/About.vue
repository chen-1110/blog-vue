<template xmlns:white-space="http://www.w3.org/1999/xhtml">
  <div>
    <!-- banner -->
    <div class="about-banner banner">
      <h1 class="banner-title">关于我</h1>
    </div>
    <!-- 关于我内容 -->
    <v-card class="blog-container">
      <div class="my-wrapper">
        <v-avatar size="110">
          <img
            class="author-avatar"
            src="https://tse3-mm.cn.bing.net/th/id/OIP.N9gKzFp25pPG7h7sIVznSwHaHa?pid=ImgDet&rs=1"
          />

        </v-avatar>
      </div>
      <div class="about-content markdown-body" v-html="aboutContent" />

    </v-card>
  </div>
</template>

<script>
export default {
  created() {
    this.getAboutContent();
  },
  data: function() {
    return {
      aboutContent: ""
    };
  },
  methods: {
    getAboutContent() {
      this.axios.get("/api/about").then(({ data }) => {
        const MarkdownIt = require("markdown-it");
        const md = new MarkdownIt();
        this.aboutContent = md.render(data.data);
      });
    }
  }
};
</script>

<style scoped>
.about-banner {
  background: url(https://w.wallhaven.cc/full/1k/wallhaven-1kq2mv.jpg) center center / cover
    no-repeat;
  background-color: #49b1f5;
}
.about-content {
  word-break: break-word;
  line-height: 1.8;
  font-size: 14px;
}
.my-wrapper {
  text-align: center;
}
.author-avatar {
  transition: all 0.5s;
}
.author-avatar:hover {
  transform: rotate(360deg);
}
</style>
