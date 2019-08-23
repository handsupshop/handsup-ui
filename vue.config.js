module.exports = {
  publicPath: './',
  outputDir: process.env.outputDir,

  // 全域CSS
  css: {
    loaderOptions: {
      sass: {
        // @/ 是 src/ 的别名
        data: `
          @import "@/sass/mixins/_variables.scss";
          @import '@/sass/mixins/_common.scss';
          @import '@/sass/mixins/_text.scss';
          @import '@/sass/mixins/_rwd.scss';
          @import '@/sass/mixins/_accordion.scss';
          @import '@/sass/mixins/_card.scss';
          @import '@/sass/mixins/_checkbox.scss';
                  `
      }
    }
  }
}
