import { defineAsyncComponent, ref, readonly, reactive, defineComponent, onMounted, computed, h as h$4, inject, getCurrentInstance, camelize, capitalize, unref, isRef, watch, Transition, onBeforeUnmount, nextTick, resolveComponent, toRef, provide, TransitionGroup, toRefs, useSSRContext, createSSRApp } from "vue";
import { isString, isArray, dedupeHead, resolveLocalePath, isLinkHttp, removeLeadingSlash, isPlainObject, isFunction, ensureEndingSlash, isLinkMailto, isLinkTel, isLinkExternal, removeEndingSlash } from "@vuepress/shared";
import { useEventListener, useDebounceFn, useStyleTag, useStorage, useFullscreen, usePreferredDark, useThrottleFn, onClickOutside } from "@vueuse/core";
import "ts-debounce";
import { useRouter, useRoute, RouterLink, useLink, RouterView, createRouter, START_LOCATION, createMemoryHistory } from "vue-router";
import { clearAllBodyScrollLocks, disableBodyScroll } from "body-scroll-lock";
import ElementPlus from "element-plus";
const pagesData$1 = {
  // path: /
  "v-8daa1a0e": () => import(
    /* webpackChunkName: "v-8daa1a0e" */
    "./assets/index.html-021839f0.js"
  ).then(({ data }) => data),
  // path: /slides.html
  "v-2e3eac9e": () => import(
    /* webpackChunkName: "v-2e3eac9e" */
    "./assets/slides.html-5841c24c.js"
  ).then(({ data }) => data),
  // path: /blog/
  "v-145ac574": () => import(
    /* webpackChunkName: "v-145ac574" */
    "./assets/index.html-64edab77.js"
  ).then(({ data }) => data),
  // path: /codenotes/
  "v-7208bd18": () => import(
    /* webpackChunkName: "v-7208bd18" */
    "./assets/index.html-7fbaf703.js"
  ).then(({ data }) => data),
  // path: /floatinglife/
  "v-1486b3d8": () => import(
    /* webpackChunkName: "v-1486b3d8" */
    "./assets/index.html-7ba88b76.js"
  ).then(({ data }) => data),
  // path: /quicknav/
  "v-4c083800": () => import(
    /* webpackChunkName: "v-4c083800" */
    "./assets/index.html-f4c36a21.js"
  ).then(({ data }) => data),
  // path: /projects/
  "v-6dc367c8": () => import(
    /* webpackChunkName: "v-6dc367c8" */
    "./assets/index.html-1ef38870.js"
  ).then(({ data }) => data),
  // path: /resources/
  "v-7fe15663": () => import(
    /* webpackChunkName: "v-7fe15663" */
    "./assets/index.html-0ede6a5d.js"
  ).then(({ data }) => data),
  // path: /codenotes/algdata/
  "v-37b21b1d": () => import(
    /* webpackChunkName: "v-37b21b1d" */
    "./assets/index.html-17b8692e.js"
  ).then(({ data }) => data),
  // path: /codenotes/cookbook/
  "v-5c24fdac": () => import(
    /* webpackChunkName: "v-5c24fdac" */
    "./assets/index.html-60bb2312.js"
  ).then(({ data }) => data),
  // path: /codenotes/database/
  "v-a16c41c0": () => import(
    /* webpackChunkName: "v-a16c41c0" */
    "./assets/index.html-40f89e17.js"
  ).then(({ data }) => data),
  // path: /codenotes/database/%E6%95%B0%E6%8D%AE%E5%BA%93%E7%AC%94%E8%AE%B0.html
  "v-6de835c6": () => import(
    /* webpackChunkName: "v-6de835c6" */
    "./assets/数据库笔记.html-c0b25c64.js"
  ).then(({ data }) => data),
  // path: /codenotes/devtool/
  "v-178a7816": () => import(
    /* webpackChunkName: "v-178a7816" */
    "./assets/index.html-8d50532f.js"
  ).then(({ data }) => data),
  // path: /codenotes/framework/
  "v-7310a336": () => import(
    /* webpackChunkName: "v-7310a336" */
    "./assets/index.html-44ffc6bf.js"
  ).then(({ data }) => data),
  // path: /codenotes/gocore/go.html
  "v-5fb2d9dd": () => import(
    /* webpackChunkName: "v-5fb2d9dd" */
    "./assets/go.html-258e3069.js"
  ).then(({ data }) => data),
  // path: /codenotes/gocore/
  "v-33989c94": () => import(
    /* webpackChunkName: "v-33989c94" */
    "./assets/index.html-87e75714.js"
  ).then(({ data }) => data),
  // path: /codenotes/javacore/Java8%E6%96%B0%E7%89%B9%E6%80%A7.html
  "v-2b78c687": () => import(
    /* webpackChunkName: "v-2b78c687" */
    "./assets/Java8新特性.html-98a468f1.js"
  ).then(({ data }) => data),
  // path: /codenotes/javacore/Java%E4%B8%AD%E7%9A%84SPI%E6%9C%BA%E5%88%B6.html
  "v-8d1bb016": () => import(
    /* webpackChunkName: "v-8d1bb016" */
    "./assets/Java中的SPI机制.html-660d1833.js"
  ).then(({ data }) => data),
  // path: /codenotes/javacore/Java%E5%9F%BA%E7%A1%80-%E5%8F%8D%E5%B0%84%E6%9C%BA%E5%88%B6.html
  "v-34cb6992": () => import(
    /* webpackChunkName: "v-34cb6992" */
    "./assets/Java基础-反射机制.html-b0bb4443.js"
  ).then(({ data }) => data),
  // path: /codenotes/javacore/Java%E5%9F%BA%E7%A1%80-%E5%BC%82%E5%B8%B8%E6%9C%BA%E5%88%B6.html
  "v-b03ae20a": () => import(
    /* webpackChunkName: "v-b03ae20a" */
    "./assets/Java基础-异常机制.html-a4ea50a5.js"
  ).then(({ data }) => data),
  // path: /codenotes/javacore/Java%E5%9F%BA%E7%A1%80-%E6%B3%9B%E5%9E%8B%E6%9C%BA%E5%88%B6.html
  "v-677cae9d": () => import(
    /* webpackChunkName: "v-677cae9d" */
    "./assets/Java基础-泛型机制.html-a00fc7af.js"
  ).then(({ data }) => data),
  // path: /codenotes/javacore/Java%E5%9F%BA%E7%A1%80-%E6%B3%A8%E8%A7%A3%E6%9C%BA%E5%88%B6.html
  "v-a46fbe6c": () => import(
    /* webpackChunkName: "v-a46fbe6c" */
    "./assets/Java基础-注解机制.html-1616a865.js"
  ).then(({ data }) => data),
  // path: /codenotes/javacore/Java%E5%9F%BA%E7%A1%80-%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1.html
  "v-1ff7fd37": () => import(
    /* webpackChunkName: "v-1ff7fd37" */
    "./assets/Java基础-面向对象.html-f0cfcb30.js"
  ).then(({ data }) => data),
  // path: /codenotes/javacore/Java%E9%9B%86%E5%90%88-ArrayList.html
  "v-056f4c7a": () => import(
    /* webpackChunkName: "v-056f4c7a" */
    "./assets/Java集合-ArrayList.html-bcb74ec5.js"
  ).then(({ data }) => data),
  // path: /codenotes/javacore/Java%E9%9B%86%E5%90%88-%E7%B1%BB%E5%85%B3%E7%B3%BB%E5%9B%BE.html
  "v-5661c88e": () => import(
    /* webpackChunkName: "v-5661c88e" */
    "./assets/Java集合-类关系图.html-b205e477.js"
  ).then(({ data }) => data),
  // path: /codenotes/javacore/
  "v-da753ecc": () => import(
    /* webpackChunkName: "v-da753ecc" */
    "./assets/index.html-2fda0801.js"
  ).then(({ data }) => data),
  // path: /codenotes/jvm/
  "v-965081bc": () => import(
    /* webpackChunkName: "v-965081bc" */
    "./assets/index.html-534774c5.js"
  ).then(({ data }) => data),
  // path: /floatinglife/cooker/
  "v-8f955f74": () => import(
    /* webpackChunkName: "v-8f955f74" */
    "./assets/index.html-609e958b.js"
  ).then(({ data }) => data),
  // path: /floatinglife/iter/
  "v-a74c22fa": () => import(
    /* webpackChunkName: "v-a74c22fa" */
    "./assets/index.html-fdc741f0.js"
  ).then(({ data }) => data),
  // path: /floatinglife/iter/%E5%BC%95%E5%85%A5%E7%94%B5%E5%AD%90%E4%B9%A6.html
  "v-4185ad80": () => import(
    /* webpackChunkName: "v-4185ad80" */
    "./assets/引入电子书.html-8d42c087.js"
  ).then(({ data }) => data),
  // path: /floatinglife/sporter/
  "v-01d70f42": () => import(
    /* webpackChunkName: "v-01d70f42" */
    "./assets/index.html-74bd5e00.js"
  ).then(({ data }) => data),
  // path: /floatinglife/thinker/
  "v-8fe64df8": () => import(
    /* webpackChunkName: "v-8fe64df8" */
    "./assets/index.html-005d4311.js"
  ).then(({ data }) => data),
  // path: /projects/pracprojects/
  "v-77e62f35": () => import(
    /* webpackChunkName: "v-77e62f35" */
    "./assets/index.html-e7f0708c.js"
  ).then(({ data }) => data),
  // path: /projects/systemdesign/
  "v-76444286": () => import(
    /* webpackChunkName: "v-76444286" */
    "./assets/index.html-98e56925.js"
  ).then(({ data }) => data),
  // path: /projects/techguide/
  "v-39fb77e5": () => import(
    /* webpackChunkName: "v-39fb77e5" */
    "./assets/index.html-99909c10.js"
  ).then(({ data }) => data),
  // path: /projects/toollibrary/
  "v-804672f0": () => import(
    /* webpackChunkName: "v-804672f0" */
    "./assets/index.html-9700866e.js"
  ).then(({ data }) => data),
  // path: /resources/books/
  "v-64c61a30": () => import(
    /* webpackChunkName: "v-64c61a30" */
    "./assets/index.html-3aafc4e3.js"
  ).then(({ data }) => data),
  // path: /resources/videos/
  "v-05b997d8": () => import(
    /* webpackChunkName: "v-05b997d8" */
    "./assets/index.html-e1c4d1d6.js"
  ).then(({ data }) => data),
  // path: /codenotes/algdata/lbld/
  "v-12036784": () => import(
    /* webpackChunkName: "v-12036784" */
    "./assets/index.html-63ae0935.js"
  ).then(({ data }) => data),
  // path: /codenotes/algdata/lbld/%E7%AE%97%E6%B3%95%E5%B0%8F%E6%8A%84%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92.html
  "v-1665eced": () => import(
    /* webpackChunkName: "v-1665eced" */
    "./assets/算法小抄动态规划.html-cdbc1dfb.js"
  ).then(({ data }) => data),
  // path: /codenotes/algdata/lbld/%E7%AE%97%E6%B3%95%E5%B0%8F%E6%8A%84%E6%95%B0%E5%AD%A6%E8%BF%90%E7%AE%97.html
  "v-538b55ec": () => import(
    /* webpackChunkName: "v-538b55ec" */
    "./assets/算法小抄数学运算.html-9915fa71.js"
  ).then(({ data }) => data),
  // path: /codenotes/algdata/lbld/%E7%AE%97%E6%B3%95%E5%B0%8F%E6%8A%84%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84.html
  "v-a8b428d4": () => import(
    /* webpackChunkName: "v-a8b428d4" */
    "./assets/算法小抄数据结构.html-b60927d2.js"
  ).then(({ data }) => data),
  // path: /codenotes/algdata/lbld/%E7%AE%97%E6%B3%95%E5%B0%8F%E6%8A%84%E6%A0%B8%E5%BF%83%E5%A5%97%E8%B7%AF.html
  "v-78e9b099": () => import(
    /* webpackChunkName: "v-78e9b099" */
    "./assets/算法小抄核心套路.html-adafdc87.js"
  ).then(({ data }) => data),
  // path: /codenotes/algdata/lbld/%E7%AE%97%E6%B3%95%E5%B0%8F%E6%8A%84%E7%AE%97%E6%B3%95%E6%80%9D%E7%BB%B4.html
  "v-5b551ec1": () => import(
    /* webpackChunkName: "v-5b551ec1" */
    "./assets/算法小抄算法思维.html-f5ac3ed4.js"
  ).then(({ data }) => data),
  // path: /codenotes/algdata/lbld/%E7%AE%97%E6%B3%95%E5%B0%8F%E6%8A%84%E9%AB%98%E9%A2%91%E9%9D%A2%E8%AF%95.html
  "v-eb3c33d0": () => import(
    /* webpackChunkName: "v-eb3c33d0" */
    "./assets/算法小抄高频面试.html-46fd22ad.js"
  ).then(({ data }) => data),
  // path: /codenotes/algdata/LeetCode/HOT100.html
  "v-75632350": () => import(
    /* webpackChunkName: "v-75632350" */
    "./assets/HOT100.html-37ddf852.js"
  ).then(({ data }) => data),
  // path: /codenotes/algdata/LeetCode/
  "v-64a1663d": () => import(
    /* webpackChunkName: "v-64a1663d" */
    "./assets/index.html-95f9d53e.js"
  ).then(({ data }) => data),
  // path: /codenotes/framework/MicroServices/
  "v-ba95c21c": () => import(
    /* webpackChunkName: "v-ba95c21c" */
    "./assets/index.html-fe05e06d.js"
  ).then(({ data }) => data),
  // path: /codenotes/framework/MicroServices/SpringCloud01.html
  "v-521eece2": () => import(
    /* webpackChunkName: "v-521eece2" */
    "./assets/SpringCloud01.html-6d2d073c.js"
  ).then(({ data }) => data),
  // path: /codenotes/framework/MicroServices/SpringCloud02.html
  "v-53d3c581": () => import(
    /* webpackChunkName: "v-53d3c581" */
    "./assets/SpringCloud02.html-cfca9634.js"
  ).then(({ data }) => data),
  // path: /codenotes/framework/MicroServices/%E8%AE%A4%E8%AF%86%E5%BE%AE%E6%9C%8D%E5%8A%A1.html
  "v-b2a73dca": () => import(
    /* webpackChunkName: "v-b2a73dca" */
    "./assets/认识微服务.html-95307627.js"
  ).then(({ data }) => data),
  // path: /codenotes/framework/netty/Netty%E6%A0%B8%E5%BF%83.html
  "v-4edd469a": () => import(
    /* webpackChunkName: "v-4edd469a" */
    "./assets/Netty核心.html-40baf7e6.js"
  ).then(({ data }) => data),
  // path: /codenotes/framework/netty/Netty%E9%AB%98%E7%BA%A7.html
  "v-65c1d7f2": () => import(
    /* webpackChunkName: "v-65c1d7f2" */
    "./assets/Netty高级.html-9cc86f85.js"
  ).then(({ data }) => data),
  // path: /codenotes/framework/netty/
  "v-2465339c": () => import(
    /* webpackChunkName: "v-2465339c" */
    "./assets/index.html-daa31fab.js"
  ).then(({ data }) => data),
  // path: /codenotes/framework/Spring_SpringBoot/Spring.html
  "v-6fbc3189": () => import(
    /* webpackChunkName: "v-6fbc3189" */
    "./assets/Spring.html-83856447.js"
  ).then(({ data }) => data),
  // path: /404.html
  "v-3706649a": () => import(
    /* webpackChunkName: "v-3706649a" */
    "./assets/404.html-61d4c65a.js"
  ).then(({ data }) => data),
  // path: /codenotes/framework/Spring_SpringBoot/
  "v-12854963": () => import(
    /* webpackChunkName: "v-12854963" */
    "./assets/index.html-5f4eaf34.js"
  ).then(({ data }) => data),
  // path: /category/
  "v-5bc93818": () => import(
    /* webpackChunkName: "v-5bc93818" */
    "./assets/index.html-91680f18.js"
  ).then(({ data }) => data),
  // path: /tag/
  "v-744d024e": () => import(
    /* webpackChunkName: "v-744d024e" */
    "./assets/index.html-85a0146f.js"
  ).then(({ data }) => data),
  // path: /article/
  "v-e52c881c": () => import(
    /* webpackChunkName: "v-e52c881c" */
    "./assets/index.html-05ca9df3.js"
  ).then(({ data }) => data),
  // path: /star/
  "v-154dc4c4": () => import(
    /* webpackChunkName: "v-154dc4c4" */
    "./assets/index.html-99c5e081.js"
  ).then(({ data }) => data),
  // path: /timeline/
  "v-01560935": () => import(
    /* webpackChunkName: "v-01560935" */
    "./assets/index.html-60c88c18.js"
  ).then(({ data }) => data),
  // path: /category/%E5%BF%AB%E9%80%9F%E5%AF%BC%E8%88%AA/
  "v-1eaeb558": () => import(
    /* webpackChunkName: "v-1eaeb558" */
    "./assets/index.html-aca04cd5.js"
  ).then(({ data }) => data),
  // path: /tag/%E4%BC%98%E8%B4%A8%E5%8D%9A%E5%AE%A2/
  "v-48f9b645": () => import(
    /* webpackChunkName: "v-48f9b645" */
    "./assets/index.html-37fe2ef2.js"
  ).then(({ data }) => data),
  // path: /category/sql/
  "v-65f56839": () => import(
    /* webpackChunkName: "v-65f56839" */
    "./assets/index.html-b33c4651.js"
  ).then(({ data }) => data),
  // path: /tag/%E6%90%9C%E7%B4%A2%E5%BC%95%E6%93%8E/
  "v-36f81cca": () => import(
    /* webpackChunkName: "v-36f81cca" */
    "./assets/index.html-2f4dcee1.js"
  ).then(({ data }) => data),
  // path: /category/go/
  "v-3d18412f": () => import(
    /* webpackChunkName: "v-3d18412f" */
    "./assets/index.html-3a4e5099.js"
  ).then(({ data }) => data),
  // path: /tag/sql/
  "v-b305b122": () => import(
    /* webpackChunkName: "v-b305b122" */
    "./assets/index.html-d26d581a.js"
  ).then(({ data }) => data),
  // path: /category/java/
  "v-5831b135": () => import(
    /* webpackChunkName: "v-5831b135" */
    "./assets/index.html-f368fae4.js"
  ).then(({ data }) => data),
  // path: /tag/go/
  "v-0da0c339": () => import(
    /* webpackChunkName: "v-0da0c339" */
    "./assets/index.html-3c62860f.js"
  ).then(({ data }) => data),
  // path: /category/%E7%94%B5%E5%AD%90%E4%B9%A6/
  "v-d170eb22": () => import(
    /* webpackChunkName: "v-d170eb22" */
    "./assets/index.html-b06c7ad4.js"
  ).then(({ data }) => data),
  // path: /tag/java/
  "v-28a1d8bf": () => import(
    /* webpackChunkName: "v-28a1d8bf" */
    "./assets/index.html-c97902a0.js"
  ).then(({ data }) => data),
  // path: /category/%E5%AE%9E%E6%88%98%E9%A1%B9%E7%9B%AE/
  "v-f18cc9a6": () => import(
    /* webpackChunkName: "v-f18cc9a6" */
    "./assets/index.html-adcb0e18.js"
  ).then(({ data }) => data),
  // path: /tag/%E7%94%B5%E5%AD%90%E4%B9%A6/
  "v-5e7287a5": () => import(
    /* webpackChunkName: "v-5e7287a5" */
    "./assets/index.html-156c2863.js"
  ).then(({ data }) => data),
  // path: /category/%E7%B3%BB%E7%BB%9F%E8%AE%BE%E8%AE%A1/
  "v-0d7069e8": () => import(
    /* webpackChunkName: "v-0d7069e8" */
    "./assets/index.html-8d9165a9.js"
  ).then(({ data }) => data),
  // path: /tag/%E5%AE%9E%E6%88%98%E9%A1%B9%E7%9B%AE/
  "v-4b991ab7": () => import(
    /* webpackChunkName: "v-4b991ab7" */
    "./assets/index.html-2e2b4bb1.js"
  ).then(({ data }) => data),
  // path: /category/%E6%8A%80%E6%9C%AF%E6%95%99%E7%A8%8B/
  "v-7281fe0a": () => import(
    /* webpackChunkName: "v-7281fe0a" */
    "./assets/index.html-ba46410b.js"
  ).then(({ data }) => data),
  // path: /tag/%E7%B3%BB%E7%BB%9F%E8%AE%BE%E8%AE%A1/
  "v-84b16ad4": () => import(
    /* webpackChunkName: "v-84b16ad4" */
    "./assets/index.html-d62cf4cb.js"
  ).then(({ data }) => data),
  // path: /category/%E5%B7%A5%E5%85%B7%E7%B1%BB%E5%BA%93/
  "v-3f7ac554": () => import(
    /* webpackChunkName: "v-3f7ac554" */
    "./assets/index.html-b319230b.js"
  ).then(({ data }) => data),
  // path: /tag/%E6%8A%80%E6%9C%AF%E6%95%99%E7%A8%8B/
  "v-e9c2fef6": () => import(
    /* webpackChunkName: "v-e9c2fef6" */
    "./assets/index.html-ebaf4afa.js"
  ).then(({ data }) => data),
  // path: /category/%E4%B9%A6%E7%B1%8D/
  "v-42f2f156": () => import(
    /* webpackChunkName: "v-42f2f156" */
    "./assets/index.html-70ac6c34.js"
  ).then(({ data }) => data),
  // path: /tag/%E5%B7%A5%E5%85%B7%E7%B1%BB%E5%BA%93/
  "v-b6bbc640": () => import(
    /* webpackChunkName: "v-b6bbc640" */
    "./assets/index.html-2f4eab88.js"
  ).then(({ data }) => data),
  // path: /category/%E5%BD%B1%E8%A7%86/
  "v-69731659": () => import(
    /* webpackChunkName: "v-69731659" */
    "./assets/index.html-03056f1d.js"
  ).then(({ data }) => data),
  // path: /tag/%E4%B9%A6%E7%B1%8D/
  "v-086db55f": () => import(
    /* webpackChunkName: "v-086db55f" */
    "./assets/index.html-73c0d3cc.js"
  ).then(({ data }) => data),
  // path: /category/%E9%9F%B3%E4%B9%90/
  "v-5995bc00": () => import(
    /* webpackChunkName: "v-5995bc00" */
    "./assets/index.html-ba79ff26.js"
  ).then(({ data }) => data),
  // path: /tag/%E5%BD%B1%E8%A7%86/
  "v-d94b773a": () => import(
    /* webpackChunkName: "v-d94b773a" */
    "./assets/index.html-230a1c51.js"
  ).then(({ data }) => data),
  // path: /category/%E7%AE%97%E6%B3%95/
  "v-06be9332": () => import(
    /* webpackChunkName: "v-06be9332" */
    "./assets/index.html-ee3ad670.js"
  ).then(({ data }) => data),
  // path: /tag/%E9%9F%B3%E4%B9%90/
  "v-05c75fec": () => import(
    /* webpackChunkName: "v-05c75fec" */
    "./assets/index.html-fc4b2883.js"
  ).then(({ data }) => data),
  // path: /category/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84/
  "v-4f178b9c": () => import(
    /* webpackChunkName: "v-4f178b9c" */
    "./assets/index.html-2a68cad8.js"
  ).then(({ data }) => data),
  // path: /tag/%E7%AE%97%E6%B3%95/
  "v-2687e471": () => import(
    /* webpackChunkName: "v-2687e471" */
    "./assets/index.html-e55a377b.js"
  ).then(({ data }) => data),
  // path: /category/springcloud/
  "v-6fcf7e02": () => import(
    /* webpackChunkName: "v-6fcf7e02" */
    "./assets/index.html-0d86d2a5.js"
  ).then(({ data }) => data),
  // path: /tag/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84/
  "v-13770b26": () => import(
    /* webpackChunkName: "v-13770b26" */
    "./assets/index.html-0e5c5012.js"
  ).then(({ data }) => data),
  // path: /category/%E5%BE%AE%E6%9C%8D%E5%8A%A1/
  "v-5bd10ded": () => import(
    /* webpackChunkName: "v-5bd10ded" */
    "./assets/index.html-2b744814.js"
  ).then(({ data }) => data),
  // path: /tag/%E5%BA%8F%E5%88%97%E5%8C%96/
  "v-eccae7f6": () => import(
    /* webpackChunkName: "v-eccae7f6" */
    "./assets/index.html-fae6ac93.js"
  ).then(({ data }) => data),
  // path: /category/netty/
  "v-95e0c4b6": () => import(
    /* webpackChunkName: "v-95e0c4b6" */
    "./assets/index.html-27059351.js"
  ).then(({ data }) => data),
  // path: /tag/%E5%8F%82%E6%95%B0%E8%B0%83%E4%BC%98/
  "v-47b60b66": () => import(
    /* webpackChunkName: "v-47b60b66" */
    "./assets/index.html-b3c6db13.js"
  ).then(({ data }) => data),
  // path: /category/%E7%BD%91%E7%BB%9C%E7%BC%96%E7%A8%8B/
  "v-676e81cc": () => import(
    /* webpackChunkName: "v-676e81cc" */
    "./assets/index.html-39807af3.js"
  ).then(({ data }) => data),
  // path: /tag/rpc%E6%A1%86%E6%9E%B6/
  "v-9e1cafc4": () => import(
    /* webpackChunkName: "v-9e1cafc4" */
    "./assets/index.html-c36572d2.js"
  ).then(({ data }) => data),
  // path: /tag/%E6%9C%8D%E5%8A%A1%E5%99%A8/
  "v-26aa7bf5": () => import(
    /* webpackChunkName: "v-26aa7bf5" */
    "./assets/index.html-dd0048a4.js"
  ).then(({ data }) => data),
  // path: /tag/%E5%AE%A2%E6%88%B7%E7%AB%AF/
  "v-f7d81b2a": () => import(
    /* webpackChunkName: "v-f7d81b2a" */
    "./assets/index.html-59fdd4cc.js"
  ).then(({ data }) => data),
  // path: /tag/%E7%BB%84%E4%BB%B6/
  "v-457b5cec": () => import(
    /* webpackChunkName: "v-457b5cec" */
    "./assets/index.html-f3b1ce8e.js"
  ).then(({ data }) => data),
  // path: /tag/%E5%8D%8F%E8%AE%AE%E8%AE%BE%E8%AE%A1/
  "v-10cff453": () => import(
    /* webpackChunkName: "v-10cff453" */
    "./assets/index.html-7284dc91.js"
  ).then(({ data }) => data),
  // path: /tag/%E7%B2%98%E5%8C%85%E5%8D%8A%E5%8C%85/
  "v-a3a7272a": () => import(
    /* webpackChunkName: "v-a3a7272a" */
    "./assets/index.html-c293a6a9.js"
  ).then(({ data }) => data)
};
const siteData$1 = JSON.parse('{"base":"/jmcoding/","lang":"en-US","title":"","description":"","head":[],"locales":{"/":{"lang":"zh-CN","title":"九牧の学习笔记","description":"九牧の学习笔记","head":[["link",{"rel":"icon","href":"/favicon.svg"}]]}}}');
const pagesComponents = {
  // path: /
  "v-8daa1a0e": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-8daa1a0e" */
    "./assets/index.html-cd97d14b.js"
  )),
  // path: /slides.html
  "v-2e3eac9e": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-2e3eac9e" */
    "./assets/slides.html-f4db5408.js"
  )),
  // path: /blog/
  "v-145ac574": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-145ac574" */
    "./assets/index.html-57a21a61.js"
  )),
  // path: /codenotes/
  "v-7208bd18": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-7208bd18" */
    "./assets/index.html-91c62776.js"
  )),
  // path: /floatinglife/
  "v-1486b3d8": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-1486b3d8" */
    "./assets/index.html-66059121.js"
  )),
  // path: /quicknav/
  "v-4c083800": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-4c083800" */
    "./assets/index.html-efe3c8ec.js"
  )),
  // path: /projects/
  "v-6dc367c8": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-6dc367c8" */
    "./assets/index.html-469ea799.js"
  )),
  // path: /resources/
  "v-7fe15663": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-7fe15663" */
    "./assets/index.html-52046ae5.js"
  )),
  // path: /codenotes/algdata/
  "v-37b21b1d": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-37b21b1d" */
    "./assets/index.html-5fddfd31.js"
  )),
  // path: /codenotes/cookbook/
  "v-5c24fdac": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-5c24fdac" */
    "./assets/index.html-f0cc1a75.js"
  )),
  // path: /codenotes/database/
  "v-a16c41c0": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-a16c41c0" */
    "./assets/index.html-4131106b.js"
  )),
  // path: /codenotes/database/%E6%95%B0%E6%8D%AE%E5%BA%93%E7%AC%94%E8%AE%B0.html
  "v-6de835c6": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-6de835c6" */
    "./assets/数据库笔记.html-d2da6121.js"
  )),
  // path: /codenotes/devtool/
  "v-178a7816": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-178a7816" */
    "./assets/index.html-7d2df9c9.js"
  )),
  // path: /codenotes/framework/
  "v-7310a336": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-7310a336" */
    "./assets/index.html-5b85923a.js"
  )),
  // path: /codenotes/gocore/go.html
  "v-5fb2d9dd": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-5fb2d9dd" */
    "./assets/go.html-79bef5af.js"
  )),
  // path: /codenotes/gocore/
  "v-33989c94": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-33989c94" */
    "./assets/index.html-f54f0895.js"
  )),
  // path: /codenotes/javacore/Java8%E6%96%B0%E7%89%B9%E6%80%A7.html
  "v-2b78c687": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-2b78c687" */
    "./assets/Java8新特性.html-c25c4d4e.js"
  )),
  // path: /codenotes/javacore/Java%E4%B8%AD%E7%9A%84SPI%E6%9C%BA%E5%88%B6.html
  "v-8d1bb016": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-8d1bb016" */
    "./assets/Java中的SPI机制.html-ff737d61.js"
  )),
  // path: /codenotes/javacore/Java%E5%9F%BA%E7%A1%80-%E5%8F%8D%E5%B0%84%E6%9C%BA%E5%88%B6.html
  "v-34cb6992": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-34cb6992" */
    "./assets/Java基础-反射机制.html-6ad8184f.js"
  )),
  // path: /codenotes/javacore/Java%E5%9F%BA%E7%A1%80-%E5%BC%82%E5%B8%B8%E6%9C%BA%E5%88%B6.html
  "v-b03ae20a": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-b03ae20a" */
    "./assets/Java基础-异常机制.html-44fbf2cb.js"
  )),
  // path: /codenotes/javacore/Java%E5%9F%BA%E7%A1%80-%E6%B3%9B%E5%9E%8B%E6%9C%BA%E5%88%B6.html
  "v-677cae9d": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-677cae9d" */
    "./assets/Java基础-泛型机制.html-6048cc9c.js"
  )),
  // path: /codenotes/javacore/Java%E5%9F%BA%E7%A1%80-%E6%B3%A8%E8%A7%A3%E6%9C%BA%E5%88%B6.html
  "v-a46fbe6c": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-a46fbe6c" */
    "./assets/Java基础-注解机制.html-0bf5be11.js"
  )),
  // path: /codenotes/javacore/Java%E5%9F%BA%E7%A1%80-%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1.html
  "v-1ff7fd37": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-1ff7fd37" */
    "./assets/Java基础-面向对象.html-dcf4c1a1.js"
  )),
  // path: /codenotes/javacore/Java%E9%9B%86%E5%90%88-ArrayList.html
  "v-056f4c7a": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-056f4c7a" */
    "./assets/Java集合-ArrayList.html-934e8a8d.js"
  )),
  // path: /codenotes/javacore/Java%E9%9B%86%E5%90%88-%E7%B1%BB%E5%85%B3%E7%B3%BB%E5%9B%BE.html
  "v-5661c88e": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-5661c88e" */
    "./assets/Java集合-类关系图.html-e01509b4.js"
  )),
  // path: /codenotes/javacore/
  "v-da753ecc": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-da753ecc" */
    "./assets/index.html-6a66f857.js"
  )),
  // path: /codenotes/jvm/
  "v-965081bc": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-965081bc" */
    "./assets/index.html-f01f072b.js"
  )),
  // path: /floatinglife/cooker/
  "v-8f955f74": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-8f955f74" */
    "./assets/index.html-82efe2f6.js"
  )),
  // path: /floatinglife/iter/
  "v-a74c22fa": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-a74c22fa" */
    "./assets/index.html-487f351b.js"
  )),
  // path: /floatinglife/iter/%E5%BC%95%E5%85%A5%E7%94%B5%E5%AD%90%E4%B9%A6.html
  "v-4185ad80": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-4185ad80" */
    "./assets/引入电子书.html-6871d03e.js"
  )),
  // path: /floatinglife/sporter/
  "v-01d70f42": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-01d70f42" */
    "./assets/index.html-7ca7d98d.js"
  )),
  // path: /floatinglife/thinker/
  "v-8fe64df8": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-8fe64df8" */
    "./assets/index.html-3f272a96.js"
  )),
  // path: /projects/pracprojects/
  "v-77e62f35": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-77e62f35" */
    "./assets/index.html-f4678ae7.js"
  )),
  // path: /projects/systemdesign/
  "v-76444286": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-76444286" */
    "./assets/index.html-238a89e5.js"
  )),
  // path: /projects/techguide/
  "v-39fb77e5": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-39fb77e5" */
    "./assets/index.html-9878d5e0.js"
  )),
  // path: /projects/toollibrary/
  "v-804672f0": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-804672f0" */
    "./assets/index.html-55e406fe.js"
  )),
  // path: /resources/books/
  "v-64c61a30": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-64c61a30" */
    "./assets/index.html-464d6bf9.js"
  )),
  // path: /resources/videos/
  "v-05b997d8": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-05b997d8" */
    "./assets/index.html-228e2172.js"
  )),
  // path: /codenotes/algdata/lbld/
  "v-12036784": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-12036784" */
    "./assets/index.html-3bab747a.js"
  )),
  // path: /codenotes/algdata/lbld/%E7%AE%97%E6%B3%95%E5%B0%8F%E6%8A%84%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92.html
  "v-1665eced": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-1665eced" */
    "./assets/算法小抄动态规划.html-3512c104.js"
  )),
  // path: /codenotes/algdata/lbld/%E7%AE%97%E6%B3%95%E5%B0%8F%E6%8A%84%E6%95%B0%E5%AD%A6%E8%BF%90%E7%AE%97.html
  "v-538b55ec": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-538b55ec" */
    "./assets/算法小抄数学运算.html-dbb714eb.js"
  )),
  // path: /codenotes/algdata/lbld/%E7%AE%97%E6%B3%95%E5%B0%8F%E6%8A%84%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84.html
  "v-a8b428d4": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-a8b428d4" */
    "./assets/算法小抄数据结构.html-07d7426e.js"
  )),
  // path: /codenotes/algdata/lbld/%E7%AE%97%E6%B3%95%E5%B0%8F%E6%8A%84%E6%A0%B8%E5%BF%83%E5%A5%97%E8%B7%AF.html
  "v-78e9b099": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-78e9b099" */
    "./assets/算法小抄核心套路.html-2c6eb109.js"
  )),
  // path: /codenotes/algdata/lbld/%E7%AE%97%E6%B3%95%E5%B0%8F%E6%8A%84%E7%AE%97%E6%B3%95%E6%80%9D%E7%BB%B4.html
  "v-5b551ec1": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-5b551ec1" */
    "./assets/算法小抄算法思维.html-f68bf5ed.js"
  )),
  // path: /codenotes/algdata/lbld/%E7%AE%97%E6%B3%95%E5%B0%8F%E6%8A%84%E9%AB%98%E9%A2%91%E9%9D%A2%E8%AF%95.html
  "v-eb3c33d0": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-eb3c33d0" */
    "./assets/算法小抄高频面试.html-29b2a526.js"
  )),
  // path: /codenotes/algdata/LeetCode/HOT100.html
  "v-75632350": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-75632350" */
    "./assets/HOT100.html-467a2235.js"
  )),
  // path: /codenotes/algdata/LeetCode/
  "v-64a1663d": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-64a1663d" */
    "./assets/index.html-3c86755d.js"
  )),
  // path: /codenotes/framework/MicroServices/
  "v-ba95c21c": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-ba95c21c" */
    "./assets/index.html-404bddc9.js"
  )),
  // path: /codenotes/framework/MicroServices/SpringCloud01.html
  "v-521eece2": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-521eece2" */
    "./assets/SpringCloud01.html-b4b2531d.js"
  )),
  // path: /codenotes/framework/MicroServices/SpringCloud02.html
  "v-53d3c581": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-53d3c581" */
    "./assets/SpringCloud02.html-50903c59.js"
  )),
  // path: /codenotes/framework/MicroServices/%E8%AE%A4%E8%AF%86%E5%BE%AE%E6%9C%8D%E5%8A%A1.html
  "v-b2a73dca": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-b2a73dca" */
    "./assets/认识微服务.html-87a7794c.js"
  )),
  // path: /codenotes/framework/netty/Netty%E6%A0%B8%E5%BF%83.html
  "v-4edd469a": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-4edd469a" */
    "./assets/Netty核心.html-5fbc3f1d.js"
  )),
  // path: /codenotes/framework/netty/Netty%E9%AB%98%E7%BA%A7.html
  "v-65c1d7f2": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-65c1d7f2" */
    "./assets/Netty高级.html-08b83867.js"
  )),
  // path: /codenotes/framework/netty/
  "v-2465339c": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-2465339c" */
    "./assets/index.html-2d3d2403.js"
  )),
  // path: /codenotes/framework/Spring_SpringBoot/Spring.html
  "v-6fbc3189": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-6fbc3189" */
    "./assets/Spring.html-170c1177.js"
  )),
  // path: /404.html
  "v-3706649a": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-3706649a" */
    "./assets/404.html-037f8eb2.js"
  )),
  // path: /codenotes/framework/Spring_SpringBoot/
  "v-12854963": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-12854963" */
    "./assets/index.html-883054f2.js"
  )),
  // path: /category/
  "v-5bc93818": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-5bc93818" */
    "./assets/index.html-d8e9a019.js"
  )),
  // path: /tag/
  "v-744d024e": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-744d024e" */
    "./assets/index.html-dbcf72de.js"
  )),
  // path: /article/
  "v-e52c881c": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-e52c881c" */
    "./assets/index.html-6fe96b5b.js"
  )),
  // path: /star/
  "v-154dc4c4": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-154dc4c4" */
    "./assets/index.html-e9483f18.js"
  )),
  // path: /timeline/
  "v-01560935": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-01560935" */
    "./assets/index.html-0e2d15e2.js"
  )),
  // path: /category/%E5%BF%AB%E9%80%9F%E5%AF%BC%E8%88%AA/
  "v-1eaeb558": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-1eaeb558" */
    "./assets/index.html-589d31b0.js"
  )),
  // path: /tag/%E4%BC%98%E8%B4%A8%E5%8D%9A%E5%AE%A2/
  "v-48f9b645": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-48f9b645" */
    "./assets/index.html-7d9c1ad3.js"
  )),
  // path: /category/sql/
  "v-65f56839": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-65f56839" */
    "./assets/index.html-d213f6ec.js"
  )),
  // path: /tag/%E6%90%9C%E7%B4%A2%E5%BC%95%E6%93%8E/
  "v-36f81cca": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-36f81cca" */
    "./assets/index.html-a46d7fc3.js"
  )),
  // path: /category/go/
  "v-3d18412f": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-3d18412f" */
    "./assets/index.html-01a1a25c.js"
  )),
  // path: /tag/sql/
  "v-b305b122": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-b305b122" */
    "./assets/index.html-ac27e19a.js"
  )),
  // path: /category/java/
  "v-5831b135": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-5831b135" */
    "./assets/index.html-a4b289db.js"
  )),
  // path: /tag/go/
  "v-0da0c339": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-0da0c339" */
    "./assets/index.html-10af45ed.js"
  )),
  // path: /category/%E7%94%B5%E5%AD%90%E4%B9%A6/
  "v-d170eb22": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-d170eb22" */
    "./assets/index.html-36a5527d.js"
  )),
  // path: /tag/java/
  "v-28a1d8bf": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-28a1d8bf" */
    "./assets/index.html-610ae9d3.js"
  )),
  // path: /category/%E5%AE%9E%E6%88%98%E9%A1%B9%E7%9B%AE/
  "v-f18cc9a6": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-f18cc9a6" */
    "./assets/index.html-08b62676.js"
  )),
  // path: /tag/%E7%94%B5%E5%AD%90%E4%B9%A6/
  "v-5e7287a5": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-5e7287a5" */
    "./assets/index.html-af2c2e45.js"
  )),
  // path: /category/%E7%B3%BB%E7%BB%9F%E8%AE%BE%E8%AE%A1/
  "v-0d7069e8": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-0d7069e8" */
    "./assets/index.html-01e96a5d.js"
  )),
  // path: /tag/%E5%AE%9E%E6%88%98%E9%A1%B9%E7%9B%AE/
  "v-4b991ab7": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-4b991ab7" */
    "./assets/index.html-1d9a35cf.js"
  )),
  // path: /category/%E6%8A%80%E6%9C%AF%E6%95%99%E7%A8%8B/
  "v-7281fe0a": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-7281fe0a" */
    "./assets/index.html-088365ad.js"
  )),
  // path: /tag/%E7%B3%BB%E7%BB%9F%E8%AE%BE%E8%AE%A1/
  "v-84b16ad4": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-84b16ad4" */
    "./assets/index.html-8c55f73c.js"
  )),
  // path: /category/%E5%B7%A5%E5%85%B7%E7%B1%BB%E5%BA%93/
  "v-3f7ac554": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-3f7ac554" */
    "./assets/index.html-24cff7df.js"
  )),
  // path: /tag/%E6%8A%80%E6%9C%AF%E6%95%99%E7%A8%8B/
  "v-e9c2fef6": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-e9c2fef6" */
    "./assets/index.html-96483694.js"
  )),
  // path: /category/%E4%B9%A6%E7%B1%8D/
  "v-42f2f156": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-42f2f156" */
    "./assets/index.html-e988e951.js"
  )),
  // path: /tag/%E5%B7%A5%E5%85%B7%E7%B1%BB%E5%BA%93/
  "v-b6bbc640": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-b6bbc640" */
    "./assets/index.html-9a2a6a45.js"
  )),
  // path: /category/%E5%BD%B1%E8%A7%86/
  "v-69731659": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-69731659" */
    "./assets/index.html-539cbbd2.js"
  )),
  // path: /tag/%E4%B9%A6%E7%B1%8D/
  "v-086db55f": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-086db55f" */
    "./assets/index.html-ee613aa8.js"
  )),
  // path: /category/%E9%9F%B3%E4%B9%90/
  "v-5995bc00": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-5995bc00" */
    "./assets/index.html-784dd954.js"
  )),
  // path: /tag/%E5%BD%B1%E8%A7%86/
  "v-d94b773a": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-d94b773a" */
    "./assets/index.html-a731f312.js"
  )),
  // path: /category/%E7%AE%97%E6%B3%95/
  "v-06be9332": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-06be9332" */
    "./assets/index.html-7f495ca9.js"
  )),
  // path: /tag/%E9%9F%B3%E4%B9%90/
  "v-05c75fec": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-05c75fec" */
    "./assets/index.html-89d6fb4d.js"
  )),
  // path: /category/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84/
  "v-4f178b9c": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-4f178b9c" */
    "./assets/index.html-c9e56e4a.js"
  )),
  // path: /tag/%E7%AE%97%E6%B3%95/
  "v-2687e471": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-2687e471" */
    "./assets/index.html-1ff4dbfa.js"
  )),
  // path: /category/springcloud/
  "v-6fcf7e02": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-6fcf7e02" */
    "./assets/index.html-7f764be3.js"
  )),
  // path: /tag/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84/
  "v-13770b26": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-13770b26" */
    "./assets/index.html-0047e12c.js"
  )),
  // path: /category/%E5%BE%AE%E6%9C%8D%E5%8A%A1/
  "v-5bd10ded": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-5bd10ded" */
    "./assets/index.html-ebc7762e.js"
  )),
  // path: /tag/%E5%BA%8F%E5%88%97%E5%8C%96/
  "v-eccae7f6": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-eccae7f6" */
    "./assets/index.html-1aeb6feb.js"
  )),
  // path: /category/netty/
  "v-95e0c4b6": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-95e0c4b6" */
    "./assets/index.html-28c021c1.js"
  )),
  // path: /tag/%E5%8F%82%E6%95%B0%E8%B0%83%E4%BC%98/
  "v-47b60b66": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-47b60b66" */
    "./assets/index.html-f5225b00.js"
  )),
  // path: /category/%E7%BD%91%E7%BB%9C%E7%BC%96%E7%A8%8B/
  "v-676e81cc": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-676e81cc" */
    "./assets/index.html-5a4db509.js"
  )),
  // path: /tag/rpc%E6%A1%86%E6%9E%B6/
  "v-9e1cafc4": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-9e1cafc4" */
    "./assets/index.html-478f6d7d.js"
  )),
  // path: /tag/%E6%9C%8D%E5%8A%A1%E5%99%A8/
  "v-26aa7bf5": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-26aa7bf5" */
    "./assets/index.html-1198c7ac.js"
  )),
  // path: /tag/%E5%AE%A2%E6%88%B7%E7%AB%AF/
  "v-f7d81b2a": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-f7d81b2a" */
    "./assets/index.html-fa4ab462.js"
  )),
  // path: /tag/%E7%BB%84%E4%BB%B6/
  "v-457b5cec": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-457b5cec" */
    "./assets/index.html-220435ef.js"
  )),
  // path: /tag/%E5%8D%8F%E8%AE%AE%E8%AE%BE%E8%AE%A1/
  "v-10cff453": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-10cff453" */
    "./assets/index.html-d2c2f905.js"
  )),
  // path: /tag/%E7%B2%98%E5%8C%85%E5%8D%8A%E5%8C%85/
  "v-a3a7272a": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-a3a7272a" */
    "./assets/index.html-c2cc6639.js"
  ))
};
var layoutsSymbol = Symbol(
  ""
);
var pagesData = ref(pagesData$1);
var pageDataEmpty = readonly({
  key: "",
  path: "",
  title: "",
  lang: "",
  frontmatter: {},
  headers: []
});
var pageData = ref(pageDataEmpty);
var usePageData = () => pageData;
var pageFrontmatterSymbol = Symbol(
  ""
);
var usePageFrontmatter = () => {
  const pageFrontmatter = inject(pageFrontmatterSymbol);
  if (!pageFrontmatter) {
    throw new Error("usePageFrontmatter() is called without provider.");
  }
  return pageFrontmatter;
};
var pageHeadSymbol = Symbol(
  ""
);
var usePageHead = () => {
  const pageHead = inject(pageHeadSymbol);
  if (!pageHead) {
    throw new Error("usePageHead() is called without provider.");
  }
  return pageHead;
};
var pageHeadTitleSymbol = Symbol(
  ""
);
var usePageHeadTitle = () => {
  const pageHeadTitle = inject(pageHeadTitleSymbol);
  if (!pageHeadTitle) {
    throw new Error("usePageHeadTitle() is called without provider.");
  }
  return pageHeadTitle;
};
var pageLangSymbol = Symbol(
  ""
);
var usePageLang = () => {
  const pageLang = inject(pageLangSymbol);
  if (!pageLang) {
    throw new Error("usePageLang() is called without provider.");
  }
  return pageLang;
};
var pageLayoutSymbol = Symbol(
  ""
);
var usePageLayout = () => {
  const pageLayout = inject(pageLayoutSymbol);
  if (!pageLayout) {
    throw new Error("usePageLayout() is called without provider.");
  }
  return pageLayout;
};
var routeLocaleSymbol = Symbol(
  ""
);
var useRouteLocale = () => {
  const routeLocale = inject(routeLocaleSymbol);
  if (!routeLocale) {
    throw new Error("useRouteLocale() is called without provider.");
  }
  return routeLocale;
};
var siteData = ref(siteData$1);
var useSiteData = () => siteData;
var siteLocaleDataSymbol = Symbol(
  ""
);
var useSiteLocaleData = () => {
  const siteLocaleData = inject(siteLocaleDataSymbol);
  if (!siteLocaleData) {
    throw new Error("useSiteLocaleData() is called without provider.");
  }
  return siteLocaleData;
};
var LAYOUT_NAME_DEFAULT = "Layout";
var LAYOUT_NAME_NOT_FOUND = "NotFound";
var resolvers = reactive({
  resolveLayouts: (clientConfigs2) => clientConfigs2.reduce(
    (prev, item) => ({
      ...prev,
      ...item.layouts
    }),
    {}
  ),
  resolvePageData: async (pageKey) => {
    const pageDataResolver = pagesData.value[pageKey];
    const pageData2 = await (pageDataResolver == null ? void 0 : pageDataResolver());
    return pageData2 ?? pageDataEmpty;
  },
  resolvePageFrontmatter: (pageData2) => pageData2.frontmatter,
  resolvePageHead: (headTitle, frontmatter, siteLocale) => {
    const description = isString(frontmatter.description) ? frontmatter.description : siteLocale.description;
    const head = [
      ...isArray(frontmatter.head) ? frontmatter.head : [],
      ...siteLocale.head,
      ["title", {}, headTitle],
      ["meta", { name: "description", content: description }]
    ];
    return dedupeHead(head);
  },
  resolvePageHeadTitle: (page2, siteLocale) => [page2.title, siteLocale.title].filter((item) => !!item).join(" | "),
  resolvePageLang: (page2) => page2.lang || "en",
  resolvePageLayout: (page2, layouts) => {
    let layoutName;
    if (page2.path) {
      const frontmatterLayout = page2.frontmatter.layout;
      if (isString(frontmatterLayout)) {
        layoutName = frontmatterLayout;
      } else {
        layoutName = LAYOUT_NAME_DEFAULT;
      }
    } else {
      layoutName = LAYOUT_NAME_NOT_FOUND;
    }
    return layouts[layoutName];
  },
  resolveRouteLocale: (locales2, routePath) => resolveLocalePath(locales2, routePath),
  resolveSiteLocaleData: (site, routeLocale) => ({
    ...site,
    ...site.locales[routeLocale]
  })
});
var ClientOnly = defineComponent({
  name: "ClientOnly",
  setup(_2, ctx) {
    const isMounted = ref(false);
    onMounted(() => {
      isMounted.value = true;
    });
    return () => {
      var _a2, _b2;
      return isMounted.value ? (_b2 = (_a2 = ctx.slots).default) == null ? void 0 : _b2.call(_a2) : null;
    };
  }
});
var Content = defineComponent({
  name: "Content",
  props: {
    pageKey: {
      type: String,
      required: false,
      default: ""
    }
  },
  setup(props) {
    const page2 = usePageData();
    const pageComponent = computed(
      () => pagesComponents[props.pageKey || page2.value.key]
    );
    return () => pageComponent.value ? h$4(pageComponent.value) : h$4(
      "div",
      "404 Not Found"
    );
  }
});
var defineClientConfig = (clientConfig = {}) => clientConfig;
var withBase = (url) => {
  if (isLinkHttp(url))
    return url;
  return `${"/jmcoding/"}${removeLeadingSlash(url)}`;
};
const hopeInject = "";
const clientConfig0 = {};
var u8 = Uint8Array, u16 = Uint16Array, u32 = Uint32Array;
var fleb = new u8([
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  1,
  1,
  1,
  1,
  2,
  2,
  2,
  2,
  3,
  3,
  3,
  3,
  4,
  4,
  4,
  4,
  5,
  5,
  5,
  5,
  0,
  /* unused */
  0,
  0,
  /* impossible */
  0
]);
var fdeb = new u8([
  0,
  0,
  0,
  0,
  1,
  1,
  2,
  2,
  3,
  3,
  4,
  4,
  5,
  5,
  6,
  6,
  7,
  7,
  8,
  8,
  9,
  9,
  10,
  10,
  11,
  11,
  12,
  12,
  13,
  13,
  /* unused */
  0,
  0
]);
var clim = new u8([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
var freb = function(eb, start) {
  var b = new u16(31);
  for (var i2 = 0; i2 < 31; ++i2) {
    b[i2] = start += 1 << eb[i2 - 1];
  }
  var r2 = new u32(b[30]);
  for (var i2 = 1; i2 < 30; ++i2) {
    for (var j2 = b[i2]; j2 < b[i2 + 1]; ++j2) {
      r2[j2] = j2 - b[i2] << 5 | i2;
    }
  }
  return [b, r2];
};
var _a = freb(fleb, 2), fl = _a[0], revfl = _a[1];
fl[28] = 258, revfl[258] = 28;
var _b = freb(fdeb, 0), fd = _b[0];
var rev = new u16(32768);
for (var i$1 = 0; i$1 < 32768; ++i$1) {
  var x$1 = (i$1 & 43690) >>> 1 | (i$1 & 21845) << 1;
  x$1 = (x$1 & 52428) >>> 2 | (x$1 & 13107) << 2;
  x$1 = (x$1 & 61680) >>> 4 | (x$1 & 3855) << 4;
  rev[i$1] = ((x$1 & 65280) >>> 8 | (x$1 & 255) << 8) >>> 1;
}
var hMap = function(cd, mb, r2) {
  var s = cd.length;
  var i2 = 0;
  var l2 = new u16(mb);
  for (; i2 < s; ++i2) {
    if (cd[i2])
      ++l2[cd[i2] - 1];
  }
  var le = new u16(mb);
  for (i2 = 0; i2 < mb; ++i2) {
    le[i2] = le[i2 - 1] + l2[i2 - 1] << 1;
  }
  var co;
  if (r2) {
    co = new u16(1 << mb);
    var rvb = 15 - mb;
    for (i2 = 0; i2 < s; ++i2) {
      if (cd[i2]) {
        var sv = i2 << 4 | cd[i2];
        var r_1 = mb - cd[i2];
        var v2 = le[cd[i2] - 1]++ << r_1;
        for (var m = v2 | (1 << r_1) - 1; v2 <= m; ++v2) {
          co[rev[v2] >>> rvb] = sv;
        }
      }
    }
  } else {
    co = new u16(s);
    for (i2 = 0; i2 < s; ++i2) {
      if (cd[i2]) {
        co[i2] = rev[le[cd[i2] - 1]++] >>> 15 - cd[i2];
      }
    }
  }
  return co;
};
var flt = new u8(288);
for (var i$1 = 0; i$1 < 144; ++i$1)
  flt[i$1] = 8;
for (var i$1 = 144; i$1 < 256; ++i$1)
  flt[i$1] = 9;
for (var i$1 = 256; i$1 < 280; ++i$1)
  flt[i$1] = 7;
for (var i$1 = 280; i$1 < 288; ++i$1)
  flt[i$1] = 8;
var fdt = new u8(32);
for (var i$1 = 0; i$1 < 32; ++i$1)
  fdt[i$1] = 5;
var flrm = /* @__PURE__ */ hMap(flt, 9, 1);
var fdrm = /* @__PURE__ */ hMap(fdt, 5, 1);
var max = function(a2) {
  var m = a2[0];
  for (var i2 = 1; i2 < a2.length; ++i2) {
    if (a2[i2] > m)
      m = a2[i2];
  }
  return m;
};
var bits = function(d2, p2, m) {
  var o2 = p2 / 8 | 0;
  return (d2[o2] | d2[o2 + 1] << 8) >> (p2 & 7) & m;
};
var bits16 = function(d2, p2) {
  var o2 = p2 / 8 | 0;
  return (d2[o2] | d2[o2 + 1] << 8 | d2[o2 + 2] << 16) >> (p2 & 7);
};
var shft = function(p2) {
  return (p2 + 7) / 8 | 0;
};
var slc = function(v2, s, e2) {
  if (s == null || s < 0)
    s = 0;
  if (e2 == null || e2 > v2.length)
    e2 = v2.length;
  var n2 = new (v2.BYTES_PER_ELEMENT == 2 ? u16 : v2.BYTES_PER_ELEMENT == 4 ? u32 : u8)(e2 - s);
  n2.set(v2.subarray(s, e2));
  return n2;
};
var ec = [
  "unexpected EOF",
  "invalid block type",
  "invalid length/literal",
  "invalid distance",
  "stream finished",
  "no stream handler",
  ,
  "no callback",
  "invalid UTF-8 data",
  "extra field too long",
  "date not in range 1980-2099",
  "filename too long",
  "stream finishing",
  "invalid zip data"
  // determined by unknown compression method
];
var err = function(ind, msg, nt2) {
  var e2 = new Error(msg || ec[ind]);
  e2.code = ind;
  if (Error.captureStackTrace)
    Error.captureStackTrace(e2, err);
  if (!nt2)
    throw e2;
  return e2;
};
var inflt = function(dat, buf, st2) {
  var sl = dat.length;
  if (!sl || st2 && st2.f && !st2.l)
    return buf || new u8(0);
  var noBuf = !buf || st2;
  var noSt = !st2 || st2.i;
  if (!st2)
    st2 = {};
  if (!buf)
    buf = new u8(sl * 3);
  var cbuf = function(l3) {
    var bl = buf.length;
    if (l3 > bl) {
      var nbuf = new u8(Math.max(bl * 2, l3));
      nbuf.set(buf);
      buf = nbuf;
    }
  };
  var final = st2.f || 0, pos = st2.p || 0, bt2 = st2.b || 0, lm = st2.l, dm = st2.d, lbt = st2.m, dbt = st2.n;
  var tbts = sl * 8;
  do {
    if (!lm) {
      final = bits(dat, pos, 1);
      var type2 = bits(dat, pos + 1, 3);
      pos += 3;
      if (!type2) {
        var s = shft(pos) + 4, l2 = dat[s - 4] | dat[s - 3] << 8, t2 = s + l2;
        if (t2 > sl) {
          if (noSt)
            err(0);
          break;
        }
        if (noBuf)
          cbuf(bt2 + l2);
        buf.set(dat.subarray(s, t2), bt2);
        st2.b = bt2 += l2, st2.p = pos = t2 * 8, st2.f = final;
        continue;
      } else if (type2 == 1)
        lm = flrm, dm = fdrm, lbt = 9, dbt = 5;
      else if (type2 == 2) {
        var hLit = bits(dat, pos, 31) + 257, hcLen = bits(dat, pos + 10, 15) + 4;
        var tl = hLit + bits(dat, pos + 5, 31) + 1;
        pos += 14;
        var ldt = new u8(tl);
        var clt = new u8(19);
        for (var i2 = 0; i2 < hcLen; ++i2) {
          clt[clim[i2]] = bits(dat, pos + i2 * 3, 7);
        }
        pos += hcLen * 3;
        var clb = max(clt), clbmsk = (1 << clb) - 1;
        var clm = hMap(clt, clb, 1);
        for (var i2 = 0; i2 < tl; ) {
          var r2 = clm[bits(dat, pos, clbmsk)];
          pos += r2 & 15;
          var s = r2 >>> 4;
          if (s < 16) {
            ldt[i2++] = s;
          } else {
            var c2 = 0, n2 = 0;
            if (s == 16)
              n2 = 3 + bits(dat, pos, 3), pos += 2, c2 = ldt[i2 - 1];
            else if (s == 17)
              n2 = 3 + bits(dat, pos, 7), pos += 3;
            else if (s == 18)
              n2 = 11 + bits(dat, pos, 127), pos += 7;
            while (n2--)
              ldt[i2++] = c2;
          }
        }
        var lt = ldt.subarray(0, hLit), dt = ldt.subarray(hLit);
        lbt = max(lt);
        dbt = max(dt);
        lm = hMap(lt, lbt, 1);
        dm = hMap(dt, dbt, 1);
      } else
        err(1);
      if (pos > tbts) {
        if (noSt)
          err(0);
        break;
      }
    }
    if (noBuf)
      cbuf(bt2 + 131072);
    var lms = (1 << lbt) - 1, dms = (1 << dbt) - 1;
    var lpos = pos;
    for (; ; lpos = pos) {
      var c2 = lm[bits16(dat, pos) & lms], sym = c2 >>> 4;
      pos += c2 & 15;
      if (pos > tbts) {
        if (noSt)
          err(0);
        break;
      }
      if (!c2)
        err(2);
      if (sym < 256)
        buf[bt2++] = sym;
      else if (sym == 256) {
        lpos = pos, lm = null;
        break;
      } else {
        var add = sym - 254;
        if (sym > 264) {
          var i2 = sym - 257, b = fleb[i2];
          add = bits(dat, pos, (1 << b) - 1) + fl[i2];
          pos += b;
        }
        var d2 = dm[bits16(dat, pos) & dms], dsym = d2 >>> 4;
        if (!d2)
          err(3);
        pos += d2 & 15;
        var dt = fd[dsym];
        if (dsym > 3) {
          var b = fdeb[dsym];
          dt += bits16(dat, pos) & (1 << b) - 1, pos += b;
        }
        if (pos > tbts) {
          if (noSt)
            err(0);
          break;
        }
        if (noBuf)
          cbuf(bt2 + 131072);
        var end = bt2 + add;
        for (; bt2 < end; bt2 += 4) {
          buf[bt2] = buf[bt2 - dt];
          buf[bt2 + 1] = buf[bt2 + 1 - dt];
          buf[bt2 + 2] = buf[bt2 + 2 - dt];
          buf[bt2 + 3] = buf[bt2 + 3 - dt];
        }
        bt2 = end;
      }
    }
    st2.l = lm, st2.p = lpos, st2.b = bt2, st2.f = final;
    if (lm)
      final = 1, st2.m = lbt, st2.d = dm, st2.n = dbt;
  } while (!final);
  return bt2 == buf.length ? buf : slc(buf, 0, bt2);
};
var et$1 = /* @__PURE__ */ new u8(0);
var zlv = function(d2) {
  if ((d2[0] & 15) != 8 || d2[0] >>> 4 > 7 || (d2[0] << 8 | d2[1]) % 31)
    err(6, "invalid zlib data");
  if (d2[1] & 32)
    err(6, "invalid zlib data: preset dictionaries not supported");
};
function unzlibSync(data, out) {
  return inflt((zlv(data), data.subarray(2, -4)), out);
}
var te$1 = typeof TextEncoder != "undefined" && /* @__PURE__ */ new TextEncoder();
var td = typeof TextDecoder != "undefined" && /* @__PURE__ */ new TextDecoder();
var tds = 0;
try {
  td.decode(et$1, { stream: true });
  tds = 1;
} catch (e2) {
}
var dutf8 = function(d2) {
  for (var r2 = "", i2 = 0; ; ) {
    var c2 = d2[i2++];
    var eb = (c2 > 127) + (c2 > 223) + (c2 > 239);
    if (i2 + eb > d2.length)
      return [r2, slc(d2, i2 - 1)];
    if (!eb)
      r2 += String.fromCharCode(c2);
    else if (eb == 3) {
      c2 = ((c2 & 15) << 18 | (d2[i2++] & 63) << 12 | (d2[i2++] & 63) << 6 | d2[i2++] & 63) - 65536, r2 += String.fromCharCode(55296 | c2 >> 10, 56320 | c2 & 1023);
    } else if (eb & 1)
      r2 += String.fromCharCode((c2 & 31) << 6 | d2[i2++] & 63);
    else
      r2 += String.fromCharCode((c2 & 15) << 12 | (d2[i2++] & 63) << 6 | d2[i2++] & 63);
  }
};
function strToU8(str, latin1) {
  if (latin1) {
    var ar_1 = new u8(str.length);
    for (var i2 = 0; i2 < str.length; ++i2)
      ar_1[i2] = str.charCodeAt(i2);
    return ar_1;
  }
  if (te$1)
    return te$1.encode(str);
  var l2 = str.length;
  var ar = new u8(str.length + (str.length >> 1));
  var ai = 0;
  var w2 = function(v2) {
    ar[ai++] = v2;
  };
  for (var i2 = 0; i2 < l2; ++i2) {
    if (ai + 5 > ar.length) {
      var n2 = new u8(ai + 8 + (l2 - i2 << 1));
      n2.set(ar);
      ar = n2;
    }
    var c2 = str.charCodeAt(i2);
    if (c2 < 128 || latin1)
      w2(c2);
    else if (c2 < 2048)
      w2(192 | c2 >> 6), w2(128 | c2 & 63);
    else if (c2 > 55295 && c2 < 57344)
      c2 = 65536 + (c2 & 1023 << 10) | str.charCodeAt(++i2) & 1023, w2(240 | c2 >> 18), w2(128 | c2 >> 12 & 63), w2(128 | c2 >> 6 & 63), w2(128 | c2 & 63);
    else
      w2(224 | c2 >> 12), w2(128 | c2 >> 6 & 63), w2(128 | c2 & 63);
  }
  return slc(ar, 0, ai);
}
function strFromU8(dat, latin1) {
  if (latin1) {
    var r2 = "";
    for (var i2 = 0; i2 < dat.length; i2 += 16384)
      r2 += String.fromCharCode.apply(null, dat.subarray(i2, i2 + 16384));
    return r2;
  } else if (td)
    return td.decode(dat);
  else {
    var _a2 = dutf8(dat), out = _a2[0], ext = _a2[1];
    if (ext.length)
      err(8);
    return out;
  }
}
const P$2 = ({ name: t2 = "", color: a2 = "currentColor" }, { slots: e2 }) => {
  var s;
  return h$4("svg", { xmlns: "http://www.w3.org/2000/svg", class: ["icon", `${t2}-icon`], viewBox: "0 0 1024 1024", fill: a2, "aria-label": `${t2} icon` }, (s = e2.default) == null ? void 0 : s.call(e2));
};
P$2.displayName = "IconBase";
const Ct = (t2, { slots: a2 }) => {
  var e2;
  return ((e2 = a2.default) == null ? void 0 : e2.call(a2)) || null;
}, vt = () => h$4(P$2, { name: "github" }, () => h$4("path", { d: "M511.957 21.333C241.024 21.333 21.333 240.981 21.333 512c0 216.832 140.544 400.725 335.574 465.664 24.49 4.395 32.256-10.07 32.256-23.083 0-11.69.256-44.245 0-85.205-136.448 29.61-164.736-64.64-164.736-64.64-22.315-56.704-54.4-71.765-54.4-71.765-44.587-30.464 3.285-29.824 3.285-29.824 49.195 3.413 75.179 50.517 75.179 50.517 43.776 75.008 114.816 53.333 142.762 40.79 4.523-31.66 17.152-53.377 31.19-65.537-108.971-12.458-223.488-54.485-223.488-242.602 0-53.547 19.114-97.323 50.517-131.67-5.035-12.33-21.93-62.293 4.779-129.834 0 0 41.258-13.184 134.912 50.346a469.803 469.803 0 0 1 122.88-16.554c41.642.213 83.626 5.632 122.88 16.554 93.653-63.488 134.784-50.346 134.784-50.346 26.752 67.541 9.898 117.504 4.864 129.834 31.402 34.347 50.474 78.123 50.474 131.67 0 188.586-114.73 230.016-224.042 242.09 17.578 15.232 33.578 44.672 33.578 90.454v135.85c0 13.142 7.936 27.606 32.854 22.87C862.25 912.597 1002.667 728.747 1002.667 512c0-271.019-219.648-490.667-490.71-490.667z" }));
vt.displayName = "GitHubIcon";
const pt = () => h$4(P$2, { name: "gitlab" }, () => h$4("path", { d: "M229.333 78.688C223.52 62 199.895 62 193.895 78.688L87.958 406.438h247.5c-.188 0-106.125-327.75-106.125-327.75zM33.77 571.438c-4.875 15 .563 31.687 13.313 41.25l464.812 345L87.77 406.438zm301.5-165 176.813 551.25 176.812-551.25zm655.125 165-54-165-424.312 551.25 464.812-345c12.938-9.563 18.188-26.25 13.5-41.25zM830.27 78.688c-5.812-16.688-29.437-16.688-35.437 0l-106.125 327.75h247.5z" }));
pt.displayName = "GitlabIcon";
const $t = () => h$4(P$2, { name: "gitee" }, () => h$4("path", { d: "M512 992C246.92 992 32 777.08 32 512S246.92 32 512 32s480 214.92 480 480-214.92 480-480 480zm242.97-533.34H482.39a23.7 23.7 0 0 0-23.7 23.7l-.03 59.28c0 13.08 10.59 23.7 23.7 23.7h165.96a23.7 23.7 0 0 1 23.7 23.7v11.85a71.1 71.1 0 0 1-71.1 71.1H375.71a23.7 23.7 0 0 1-23.7-23.7V423.11a71.1 71.1 0 0 1 71.1-71.1h331.8a23.7 23.7 0 0 0 23.7-23.7l.06-59.25a23.73 23.73 0 0 0-23.7-23.73H423.11a177.78 177.78 0 0 0-177.78 177.75v331.83c0 13.08 10.62 23.7 23.7 23.7h349.62a159.99 159.99 0 0 0 159.99-159.99V482.33a23.7 23.7 0 0 0-23.7-23.7z" }));
$t.displayName = "GiteeIcon";
const gt = () => h$4(P$2, { name: "bitbucket" }, () => h$4("path", { d: "M575.256 490.862c6.29 47.981-52.005 85.723-92.563 61.147-45.714-20.004-45.714-92.562-1.133-113.152 38.29-23.442 93.696 7.424 93.696 52.005zm63.451-11.996c-10.276-81.152-102.29-134.839-177.152-101.156-47.433 21.138-79.433 71.424-77.129 124.562 2.853 69.705 69.157 126.866 138.862 120.576S647.3 548.571 638.708 478.83zm136.558-309.723c-25.161-33.134-67.986-38.839-105.728-45.13-106.862-17.151-216.576-17.7-323.438 1.134-35.438 5.706-75.447 11.996-97.719 43.996 36.572 34.304 88.576 39.424 135.424 45.129 84.553 10.862 171.447 11.447 256 .585 47.433-5.705 99.987-10.276 135.424-45.714zm32.585 591.433c-16.018 55.99-6.839 131.438-66.304 163.986-102.29 56.576-226.304 62.867-338.87 42.862-59.43-10.862-129.135-29.696-161.72-85.723-14.3-54.858-23.442-110.848-32.585-166.84l3.438-9.142 10.276-5.157c170.277 112.567 408.576 112.567 579.438 0 26.844 8.01 6.84 40.558 6.29 60.014zm103.424-549.157c-19.42 125.148-41.728 249.71-63.415 374.272-6.29 36.572-41.728 57.162-71.424 72.558-106.862 53.724-231.424 62.866-348.562 50.286-79.433-8.558-160.585-29.696-225.134-79.433-30.28-23.443-30.28-63.415-35.986-97.134-20.005-117.138-42.862-234.277-57.161-352.585 6.839-51.42 64.585-73.728 107.447-89.71 57.16-21.138 118.272-30.866 178.87-36.571 129.134-12.58 261.157-8.01 386.304 28.562 44.581 13.13 92.563 31.415 122.844 69.705 13.714 17.7 9.143 40.01 6.29 60.014z" }));
gt.displayName = "BitbucketIcon";
const yt = () => h$4(P$2, { name: "source" }, () => h$4("path", { d: "M601.92 475.2c0 76.428-8.91 83.754-28.512 99.594-14.652 11.88-43.956 14.058-78.012 16.434-18.81 1.386-40.392 2.97-62.172 6.534-18.612 2.97-36.432 9.306-53.064 17.424V299.772c37.818-21.978 63.36-62.766 63.36-109.692 0-69.894-56.826-126.72-126.72-126.72S190.08 120.186 190.08 190.08c0 46.926 25.542 87.714 63.36 109.692v414.216c-37.818 21.978-63.36 62.766-63.36 109.692 0 69.894 56.826 126.72 126.72 126.72s126.72-56.826 126.72-126.72c0-31.086-11.286-59.598-29.7-81.576 13.266-9.504 27.522-17.226 39.996-19.206 16.038-2.574 32.868-3.762 50.688-5.148 48.312-3.366 103.158-7.326 148.896-44.55 61.182-49.698 74.25-103.158 75.24-187.902V475.2h-126.72zM316.8 126.72c34.848 0 63.36 28.512 63.36 63.36s-28.512 63.36-63.36 63.36-63.36-28.512-63.36-63.36 28.512-63.36 63.36-63.36zm0 760.32c-34.848 0-63.36-28.512-63.36-63.36s28.512-63.36 63.36-63.36 63.36 28.512 63.36 63.36-28.512 63.36-63.36 63.36zM823.68 158.4h-95.04V63.36h-126.72v95.04h-95.04v126.72h95.04v95.04h126.72v-95.04h95.04z" }));
yt.displayName = "SourceIcon";
const _t = (t2, a2) => {
  const e2 = a2 ? a2._instance : getCurrentInstance();
  return isPlainObject(e2 == null ? void 0 : e2.appContext.components) && (t2 in e2.appContext.components || camelize(t2) in e2.appContext.components || capitalize(camelize(t2)) in e2.appContext.components);
}, kt = (t2) => {
  const a2 = useRouteLocale();
  return computed(() => t2[a2.value]);
}, Ht = (t2) => /\b(?:Android|iPhone)/i.test(t2), Lt = (t2) => /version\/([\w.]+) .*(mobile ?safari|safari)/i.test(t2), Gt = (t2, a2) => {
  let e2 = 1;
  for (let s = 0; s < t2.length; s++)
    e2 += t2.charCodeAt(s), e2 += e2 << 10, e2 ^= e2 >> 6;
  return e2 += e2 << 3, e2 ^= e2 >> 11, e2 % a2;
};
class Pt {
  constructor() {
    this.messageElements = {};
    const a2 = "message-container", e2 = document.getElementById(a2);
    e2 ? this.containerElement = e2 : (this.containerElement = document.createElement("div"), this.containerElement.id = a2, document.body.appendChild(this.containerElement));
  }
  pop(a2, e2 = 2e3) {
    const s = document.createElement("div"), g2 = Date.now();
    return s.className = "message move-in", s.innerHTML = a2, this.containerElement.appendChild(s), this.messageElements[g2] = s, e2 > 0 && setTimeout(() => {
      this.close(g2);
    }, e2), g2;
  }
  close(a2) {
    if (a2) {
      const e2 = this.messageElements[a2];
      e2.className = e2.className.replace("move-in", ""), e2.className += "move-out", e2.addEventListener("animationend", () => {
        e2.remove(), delete this.messageElements[a2];
      });
    } else
      Object.keys(this.messageElements).forEach((e2) => this.close(Number(e2)));
  }
  destroy() {
    document.body.removeChild(this.containerElement);
  }
}
const bt = /#.*$/u, St = (t2) => {
  const a2 = bt.exec(t2);
  return a2 ? a2[0] : "";
}, et = (t2) => decodeURI(t2).replace(bt, "").replace(/(index)?\.(md|html)$/, ""), Rt = (t2, a2) => {
  if (a2 === void 0)
    return false;
  const e2 = et(t2.path), s = et(a2), g2 = St(a2);
  return g2 ? g2 === t2.hash && (!s || e2 === s) : e2 === s;
}, Bt = (t2) => {
  const a2 = Buffer.from(t2, "base64").toString("binary");
  return strFromU8(unzlibSync(strToU8(a2, true)));
}, Ft = (t2) => isLinkHttp(t2) ? t2 : `https://github.com/${t2}`, Jt = (t2) => !isLinkHttp(t2) || /github\.com/.test(t2) ? "GitHub" : /bitbucket\.org/.test(t2) ? "Bitbucket" : /gitlab\.com/.test(t2) ? "GitLab" : /gitee\.com/.test(t2) ? "Gitee" : null, Dt = (t2, ...a2) => {
  const e2 = t2.resolve(...a2), s = e2.matched[e2.matched.length - 1];
  if (!(s != null && s.redirect))
    return e2;
  const { redirect: g2 } = s, w2 = isFunction(g2) ? g2(e2) : g2, y2 = isString(w2) ? { path: w2 } : w2;
  return Dt(t2, { hash: e2.hash, query: e2.query, params: e2.params, ...y2 });
};
var K = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, nt = {}, qt = { get exports() {
  return nt;
}, set exports(t2) {
  nt = t2;
} };
(function(t2, a2) {
  (function(e2, s) {
    t2.exports = s();
  })(K, function() {
    var e2 = 1e3, s = 6e4, g2 = 36e5, w2 = "millisecond", y2 = "second", x2 = "minute", v2 = "hour", S2 = "day", E2 = "week", O2 = "month", u = "quarter", h2 = "year", p2 = "date", n2 = "Invalid Date", c2 = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, z2 = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, D2 = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(f2) {
      var o2 = ["th", "st", "nd", "rd"], i2 = f2 % 100;
      return "[" + f2 + (o2[(i2 - 20) % 10] || o2[i2] || o2[0]) + "]";
    } }, T = function(f2, o2, i2) {
      var l2 = String(f2);
      return !l2 || l2.length >= o2 ? f2 : "" + Array(o2 + 1 - l2.length).join(i2) + f2;
    }, U2 = { s: T, z: function(f2) {
      var o2 = -f2.utcOffset(), i2 = Math.abs(o2), l2 = Math.floor(i2 / 60), r2 = i2 % 60;
      return (o2 <= 0 ? "+" : "-") + T(l2, 2, "0") + ":" + T(r2, 2, "0");
    }, m: function f2(o2, i2) {
      if (o2.date() < i2.date())
        return -f2(i2, o2);
      var l2 = 12 * (i2.year() - o2.year()) + (i2.month() - o2.month()), r2 = o2.clone().add(l2, O2), m = i2 - r2 < 0, d2 = o2.clone().add(l2 + (m ? -1 : 1), O2);
      return +(-(l2 + (i2 - r2) / (m ? r2 - d2 : d2 - r2)) || 0);
    }, a: function(f2) {
      return f2 < 0 ? Math.ceil(f2) || 0 : Math.floor(f2);
    }, p: function(f2) {
      return { M: O2, y: h2, w: E2, d: S2, D: p2, h: v2, m: x2, s: y2, ms: w2, Q: u }[f2] || String(f2 || "").toLowerCase().replace(/s$/, "");
    }, u: function(f2) {
      return f2 === void 0;
    } }, I2 = "en", k2 = {};
    k2[I2] = D2;
    var H2 = function(f2) {
      return f2 instanceof j2;
    }, L2 = function f2(o2, i2, l2) {
      var r2;
      if (!o2)
        return I2;
      if (typeof o2 == "string") {
        var m = o2.toLowerCase();
        k2[m] && (r2 = m), i2 && (k2[m] = i2, r2 = m);
        var d2 = o2.split("-");
        if (!r2 && d2.length > 1)
          return f2(d2[0]);
      } else {
        var M2 = o2.name;
        k2[M2] = o2, r2 = M2;
      }
      return !l2 && r2 && (I2 = r2), r2 || !l2 && I2;
    }, b = function(f2, o2) {
      if (H2(f2))
        return f2.clone();
      var i2 = typeof o2 == "object" ? o2 : {};
      return i2.date = f2, i2.args = arguments, new j2(i2);
    }, $ = U2;
    $.l = L2, $.i = H2, $.w = function(f2, o2) {
      return b(f2, { locale: o2.$L, utc: o2.$u, x: o2.$x, $offset: o2.$offset });
    };
    var j2 = function() {
      function f2(i2) {
        this.$L = L2(i2.locale, null, true), this.parse(i2);
      }
      var o2 = f2.prototype;
      return o2.parse = function(i2) {
        this.$d = function(l2) {
          var r2 = l2.date, m = l2.utc;
          if (r2 === null)
            return new Date(NaN);
          if ($.u(r2))
            return new Date();
          if (r2 instanceof Date)
            return new Date(r2);
          if (typeof r2 == "string" && !/Z$/i.test(r2)) {
            var d2 = r2.match(c2);
            if (d2) {
              var M2 = d2[2] - 1 || 0, _2 = (d2[7] || "0").substring(0, 3);
              return m ? new Date(Date.UTC(d2[1], M2, d2[3] || 1, d2[4] || 0, d2[5] || 0, d2[6] || 0, _2)) : new Date(d2[1], M2, d2[3] || 1, d2[4] || 0, d2[5] || 0, d2[6] || 0, _2);
            }
          }
          return new Date(r2);
        }(i2), this.$x = i2.x || {}, this.init();
      }, o2.init = function() {
        var i2 = this.$d;
        this.$y = i2.getFullYear(), this.$M = i2.getMonth(), this.$D = i2.getDate(), this.$W = i2.getDay(), this.$H = i2.getHours(), this.$m = i2.getMinutes(), this.$s = i2.getSeconds(), this.$ms = i2.getMilliseconds();
      }, o2.$utils = function() {
        return $;
      }, o2.isValid = function() {
        return this.$d.toString() !== n2;
      }, o2.isSame = function(i2, l2) {
        var r2 = b(i2);
        return this.startOf(l2) <= r2 && r2 <= this.endOf(l2);
      }, o2.isAfter = function(i2, l2) {
        return b(i2) < this.startOf(l2);
      }, o2.isBefore = function(i2, l2) {
        return this.endOf(l2) < b(i2);
      }, o2.$g = function(i2, l2, r2) {
        return $.u(i2) ? this[l2] : this.set(r2, i2);
      }, o2.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, o2.valueOf = function() {
        return this.$d.getTime();
      }, o2.startOf = function(i2, l2) {
        var r2 = this, m = !!$.u(l2) || l2, d2 = $.p(i2), M2 = function(Z, N2) {
          var G = $.w(r2.$u ? Date.UTC(r2.$y, N2, Z) : new Date(r2.$y, N2, Z), r2);
          return m ? G : G.endOf(S2);
        }, _2 = function(Z, N2) {
          return $.w(r2.toDate()[Z].apply(r2.toDate("s"), (m ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(N2)), r2);
        }, C2 = this.$W, Y = this.$M, V2 = this.$D, W = "set" + (this.$u ? "UTC" : "");
        switch (d2) {
          case h2:
            return m ? M2(1, 0) : M2(31, 11);
          case O2:
            return m ? M2(1, Y) : M2(0, Y + 1);
          case E2:
            var F2 = this.$locale().weekStart || 0, J2 = (C2 < F2 ? C2 + 7 : C2) - F2;
            return M2(m ? V2 - J2 : V2 + (6 - J2), Y);
          case S2:
          case p2:
            return _2(W + "Hours", 0);
          case v2:
            return _2(W + "Minutes", 1);
          case x2:
            return _2(W + "Seconds", 2);
          case y2:
            return _2(W + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, o2.endOf = function(i2) {
        return this.startOf(i2, false);
      }, o2.$set = function(i2, l2) {
        var r2, m = $.p(i2), d2 = "set" + (this.$u ? "UTC" : ""), M2 = (r2 = {}, r2[S2] = d2 + "Date", r2[p2] = d2 + "Date", r2[O2] = d2 + "Month", r2[h2] = d2 + "FullYear", r2[v2] = d2 + "Hours", r2[x2] = d2 + "Minutes", r2[y2] = d2 + "Seconds", r2[w2] = d2 + "Milliseconds", r2)[m], _2 = m === S2 ? this.$D + (l2 - this.$W) : l2;
        if (m === O2 || m === h2) {
          var C2 = this.clone().set(p2, 1);
          C2.$d[M2](_2), C2.init(), this.$d = C2.set(p2, Math.min(this.$D, C2.daysInMonth())).$d;
        } else
          M2 && this.$d[M2](_2);
        return this.init(), this;
      }, o2.set = function(i2, l2) {
        return this.clone().$set(i2, l2);
      }, o2.get = function(i2) {
        return this[$.p(i2)]();
      }, o2.add = function(i2, l2) {
        var r2, m = this;
        i2 = Number(i2);
        var d2 = $.p(l2), M2 = function(Y) {
          var V2 = b(m);
          return $.w(V2.date(V2.date() + Math.round(Y * i2)), m);
        };
        if (d2 === O2)
          return this.set(O2, this.$M + i2);
        if (d2 === h2)
          return this.set(h2, this.$y + i2);
        if (d2 === S2)
          return M2(1);
        if (d2 === E2)
          return M2(7);
        var _2 = (r2 = {}, r2[x2] = s, r2[v2] = g2, r2[y2] = e2, r2)[d2] || 1, C2 = this.$d.getTime() + i2 * _2;
        return $.w(C2, this);
      }, o2.subtract = function(i2, l2) {
        return this.add(-1 * i2, l2);
      }, o2.format = function(i2) {
        var l2 = this, r2 = this.$locale();
        if (!this.isValid())
          return r2.invalidDate || n2;
        var m = i2 || "YYYY-MM-DDTHH:mm:ssZ", d2 = $.z(this), M2 = this.$H, _2 = this.$m, C2 = this.$M, Y = r2.weekdays, V2 = r2.months, W = function(N2, G, X, Q2) {
          return N2 && (N2[G] || N2(l2, m)) || X[G].slice(0, Q2);
        }, F2 = function(N2) {
          return $.s(M2 % 12 || 12, N2, "0");
        }, J2 = r2.meridiem || function(N2, G, X) {
          var Q2 = N2 < 12 ? "AM" : "PM";
          return X ? Q2.toLowerCase() : Q2;
        }, Z = { YY: String(this.$y).slice(-2), YYYY: this.$y, M: C2 + 1, MM: $.s(C2 + 1, 2, "0"), MMM: W(r2.monthsShort, C2, V2, 3), MMMM: W(V2, C2), D: this.$D, DD: $.s(this.$D, 2, "0"), d: String(this.$W), dd: W(r2.weekdaysMin, this.$W, Y, 2), ddd: W(r2.weekdaysShort, this.$W, Y, 3), dddd: Y[this.$W], H: String(M2), HH: $.s(M2, 2, "0"), h: F2(1), hh: F2(2), a: J2(M2, _2, true), A: J2(M2, _2, false), m: String(_2), mm: $.s(_2, 2, "0"), s: String(this.$s), ss: $.s(this.$s, 2, "0"), SSS: $.s(this.$ms, 3, "0"), Z: d2 };
        return m.replace(z2, function(N2, G) {
          return G || Z[N2] || d2.replace(":", "");
        });
      }, o2.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, o2.diff = function(i2, l2, r2) {
        var m, d2 = $.p(l2), M2 = b(i2), _2 = (M2.utcOffset() - this.utcOffset()) * s, C2 = this - M2, Y = $.m(this, M2);
        return Y = (m = {}, m[h2] = Y / 12, m[O2] = Y, m[u] = Y / 3, m[E2] = (C2 - _2) / 6048e5, m[S2] = (C2 - _2) / 864e5, m[v2] = C2 / g2, m[x2] = C2 / s, m[y2] = C2 / e2, m)[d2] || C2, r2 ? Y : $.a(Y);
      }, o2.daysInMonth = function() {
        return this.endOf(O2).$D;
      }, o2.$locale = function() {
        return k2[this.$L];
      }, o2.locale = function(i2, l2) {
        if (!i2)
          return this.$L;
        var r2 = this.clone(), m = L2(i2, l2, true);
        return m && (r2.$L = m), r2;
      }, o2.clone = function() {
        return $.w(this.$d, this);
      }, o2.toDate = function() {
        return new Date(this.valueOf());
      }, o2.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, o2.toISOString = function() {
        return this.$d.toISOString();
      }, o2.toString = function() {
        return this.$d.toUTCString();
      }, f2;
    }(), ct = j2.prototype;
    return b.prototype = ct, [["$ms", w2], ["$s", y2], ["$m", x2], ["$H", v2], ["$W", S2], ["$M", O2], ["$y", h2], ["$D", p2]].forEach(function(f2) {
      ct[f2[1]] = function(o2) {
        return this.$g(o2, f2[0], f2[1]);
      };
    }), b.extend = function(f2, o2) {
      return f2.$i || (f2(o2, j2, b), f2.$i = true), b;
    }, b.locale = L2, b.isDayjs = H2, b.unix = function(f2) {
      return b(1e3 * f2);
    }, b.en = k2[I2], b.Ls = k2, b.p = {}, b;
  });
})(qt);
var R$2 = nt, it = {}, Qt = { get exports() {
  return it;
}, set exports(t2) {
  it = t2;
} };
(function(t2, a2) {
  (function(e2, s) {
    t2.exports = s();
  })(K, function() {
    return function(e2, s, g2) {
      var w2 = s.prototype, y2 = function(u) {
        var h2, p2 = u.date, n2 = u.utc, c2 = {};
        if (!((h2 = p2) instanceof Date || h2 instanceof Array || w2.$utils().u(h2) || h2.constructor.name !== "Object")) {
          if (!Object.keys(p2).length)
            return new Date();
          var z2 = n2 ? g2.utc() : g2();
          Object.keys(p2).forEach(function(b) {
            var $, j2;
            c2[$ = b, j2 = w2.$utils().p($), j2 === "date" ? "day" : j2] = p2[b];
          });
          var D2 = c2.day || (c2.year || c2.month >= 0 ? 1 : z2.date()), T = c2.year || z2.year(), U2 = c2.month >= 0 ? c2.month : c2.year || c2.day ? 0 : z2.month(), I2 = c2.hour || 0, k2 = c2.minute || 0, H2 = c2.second || 0, L2 = c2.millisecond || 0;
          return n2 ? new Date(Date.UTC(T, U2, D2, I2, k2, H2, L2)) : new Date(T, U2, D2, I2, k2, H2, L2);
        }
        return p2;
      }, x2 = w2.parse;
      w2.parse = function(u) {
        u.date = y2.bind(this)(u), x2.bind(this)(u);
      };
      var v2 = w2.set, S2 = w2.add, E2 = w2.subtract, O2 = function(u, h2, p2, n2) {
        n2 === void 0 && (n2 = 1);
        var c2 = Object.keys(h2), z2 = this;
        return c2.forEach(function(D2) {
          z2 = u.bind(z2)(h2[D2] * n2, D2);
        }), z2;
      };
      w2.set = function(u, h2) {
        return h2 = h2 === void 0 ? u : h2, u.constructor.name === "Object" ? O2.bind(this)(function(p2, n2) {
          return v2.bind(this)(n2, p2);
        }, h2, u) : v2.bind(this)(u, h2);
      }, w2.add = function(u, h2) {
        return u.constructor.name === "Object" ? O2.bind(this)(S2, u, h2) : S2.bind(this)(u, h2);
      }, w2.subtract = function(u, h2) {
        return u.constructor.name === "Object" ? O2.bind(this)(S2, u, h2, -1) : E2.bind(this)(u, h2);
      };
    };
  });
})(Qt);
var Kt = it, rt = {}, Xt = { get exports() {
  return rt;
}, set exports(t2) {
  rt = t2;
} };
(function(t2, a2) {
  (function(e2, s) {
    t2.exports = s();
  })(K, function() {
    var e2 = { year: 0, month: 1, day: 2, hour: 3, minute: 4, second: 5 }, s = {};
    return function(g2, w2, y2) {
      var x2, v2 = function(u, h2, p2) {
        p2 === void 0 && (p2 = {});
        var n2 = new Date(u), c2 = function(z2, D2) {
          D2 === void 0 && (D2 = {});
          var T = D2.timeZoneName || "short", U2 = z2 + "|" + T, I2 = s[U2];
          return I2 || (I2 = new Intl.DateTimeFormat("en-US", { hour12: false, timeZone: z2, year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", second: "2-digit", timeZoneName: T }), s[U2] = I2), I2;
        }(h2, p2);
        return c2.formatToParts(n2);
      }, S2 = function(u, h2) {
        for (var p2 = v2(u, h2), n2 = [], c2 = 0; c2 < p2.length; c2 += 1) {
          var z2 = p2[c2], D2 = z2.type, T = z2.value, U2 = e2[D2];
          U2 >= 0 && (n2[U2] = parseInt(T, 10));
        }
        var I2 = n2[3], k2 = I2 === 24 ? 0 : I2, H2 = n2[0] + "-" + n2[1] + "-" + n2[2] + " " + k2 + ":" + n2[4] + ":" + n2[5] + ":000", L2 = +u;
        return (y2.utc(H2).valueOf() - (L2 -= L2 % 1e3)) / 6e4;
      }, E2 = w2.prototype;
      E2.tz = function(u, h2) {
        u === void 0 && (u = x2);
        var p2 = this.utcOffset(), n2 = this.toDate(), c2 = n2.toLocaleString("en-US", { timeZone: u }), z2 = Math.round((n2 - new Date(c2)) / 1e3 / 60), D2 = y2(c2).$set("millisecond", this.$ms).utcOffset(15 * -Math.round(n2.getTimezoneOffset() / 15) - z2, true);
        if (h2) {
          var T = D2.utcOffset();
          D2 = D2.add(p2 - T, "minute");
        }
        return D2.$x.$timezone = u, D2;
      }, E2.offsetName = function(u) {
        var h2 = this.$x.$timezone || y2.tz.guess(), p2 = v2(this.valueOf(), h2, { timeZoneName: u }).find(function(n2) {
          return n2.type.toLowerCase() === "timezonename";
        });
        return p2 && p2.value;
      };
      var O2 = E2.startOf;
      E2.startOf = function(u, h2) {
        if (!this.$x || !this.$x.$timezone)
          return O2.call(this, u, h2);
        var p2 = y2(this.format("YYYY-MM-DD HH:mm:ss:SSS"));
        return O2.call(p2, u, h2).tz(this.$x.$timezone, true);
      }, y2.tz = function(u, h2, p2) {
        var n2 = p2 && h2, c2 = p2 || h2 || x2, z2 = S2(+y2(), c2);
        if (typeof u != "string")
          return y2(u).tz(c2);
        var D2 = function(k2, H2, L2) {
          var b = k2 - 60 * H2 * 1e3, $ = S2(b, L2);
          if (H2 === $)
            return [b, H2];
          var j2 = S2(b -= 60 * ($ - H2) * 1e3, L2);
          return $ === j2 ? [b, $] : [k2 - 60 * Math.min($, j2) * 1e3, Math.max($, j2)];
        }(y2.utc(u, n2).valueOf(), z2, c2), T = D2[0], U2 = D2[1], I2 = y2(T).utcOffset(U2);
        return I2.$x.$timezone = c2, I2;
      }, y2.tz.guess = function() {
        return Intl.DateTimeFormat().resolvedOptions().timeZone;
      }, y2.tz.setDefault = function(u) {
        x2 = u;
      };
    };
  });
})(Xt);
var te = rt, st = {}, ee = { get exports() {
  return st;
}, set exports(t2) {
  st = t2;
} };
(function(t2, a2) {
  (function(e2, s) {
    t2.exports = s();
  })(K, function() {
    var e2 = "minute", s = /[+-]\d\d(?::?\d\d)?/g, g2 = /([+-]|\d\d)/g;
    return function(w2, y2, x2) {
      var v2 = y2.prototype;
      x2.utc = function(n2) {
        var c2 = { date: n2, utc: true, args: arguments };
        return new y2(c2);
      }, v2.utc = function(n2) {
        var c2 = x2(this.toDate(), { locale: this.$L, utc: true });
        return n2 ? c2.add(this.utcOffset(), e2) : c2;
      }, v2.local = function() {
        return x2(this.toDate(), { locale: this.$L, utc: false });
      };
      var S2 = v2.parse;
      v2.parse = function(n2) {
        n2.utc && (this.$u = true), this.$utils().u(n2.$offset) || (this.$offset = n2.$offset), S2.call(this, n2);
      };
      var E2 = v2.init;
      v2.init = function() {
        if (this.$u) {
          var n2 = this.$d;
          this.$y = n2.getUTCFullYear(), this.$M = n2.getUTCMonth(), this.$D = n2.getUTCDate(), this.$W = n2.getUTCDay(), this.$H = n2.getUTCHours(), this.$m = n2.getUTCMinutes(), this.$s = n2.getUTCSeconds(), this.$ms = n2.getUTCMilliseconds();
        } else
          E2.call(this);
      };
      var O2 = v2.utcOffset;
      v2.utcOffset = function(n2, c2) {
        var z2 = this.$utils().u;
        if (z2(n2))
          return this.$u ? 0 : z2(this.$offset) ? O2.call(this) : this.$offset;
        if (typeof n2 == "string" && (n2 = function(I2) {
          I2 === void 0 && (I2 = "");
          var k2 = I2.match(s);
          if (!k2)
            return null;
          var H2 = ("" + k2[0]).match(g2) || ["-", 0, 0], L2 = H2[0], b = 60 * +H2[1] + +H2[2];
          return b === 0 ? 0 : L2 === "+" ? b : -b;
        }(n2), n2 === null))
          return this;
        var D2 = Math.abs(n2) <= 16 ? 60 * n2 : n2, T = this;
        if (c2)
          return T.$offset = D2, T.$u = n2 === 0, T;
        if (n2 !== 0) {
          var U2 = this.$u ? this.toDate().getTimezoneOffset() : -1 * this.utcOffset();
          (T = this.local().add(D2 + U2, e2)).$offset = D2, T.$x.$localOffset = U2;
        } else
          T = this.utc();
        return T;
      };
      var u = v2.format;
      v2.format = function(n2) {
        var c2 = n2 || (this.$u ? "YYYY-MM-DDTHH:mm:ss[Z]" : "");
        return u.call(this, c2);
      }, v2.valueOf = function() {
        var n2 = this.$utils().u(this.$offset) ? 0 : this.$offset + (this.$x.$localOffset || this.$d.getTimezoneOffset());
        return this.$d.valueOf() - 6e4 * n2;
      }, v2.isUTC = function() {
        return !!this.$u;
      }, v2.toISOString = function() {
        return this.toDate().toISOString();
      }, v2.toString = function() {
        return this.toDate().toUTCString();
      };
      var h2 = v2.toDate;
      v2.toDate = function(n2) {
        return n2 === "s" && this.$offset ? x2(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate() : h2.call(this);
      };
      var p2 = v2.diff;
      v2.diff = function(n2, c2, z2) {
        if (n2 && this.$u === n2.$u)
          return p2.call(this, n2, c2, z2);
        var D2 = this.local(), T = x2(n2).local();
        return p2.call(D2, T, c2, z2);
      };
    };
  });
})(ee);
var ne = st;
R$2.extend(Kt), R$2.extend(ne), R$2.extend(te);
const ot = (t2, a2) => {
  if (t2) {
    if (R$2(t2 instanceof Date ? t2 : t2.trim()).isValid()) {
      const s = a2 ? R$2(t2).tz(a2) : R$2(t2), g2 = s.year(), w2 = s.month() + 1, y2 = s.date(), x2 = s.hour(), v2 = s.minute(), S2 = s.second(), E2 = s.millisecond(), O2 = x2 === 0 && v2 === 0 && S2 === 0 && E2 === 0;
      return { value: s.toDate(), info: { year: g2, month: w2, day: y2, ...O2 ? {} : { hour: x2, minute: v2, second: S2 } }, type: O2 ? "date" : "full" };
    }
    const e2 = /(?:(\d{2,4})[/-](\d{1,2})[/-](\d{1,2}))?\s*(?:(\d{1,2}):(\d{1,2})(?::(\d{1,2}))?)?/u.exec(t2.trim());
    if (e2) {
      const [, s, g2, w2, y2, x2, v2] = e2, S2 = (c2) => typeof c2 > "u" ? void 0 : Number(c2), E2 = (c2) => c2 && c2 < 100 ? c2 + 2e3 : c2, O2 = (c2) => y2 && x2 && !v2 ? 0 : c2, u = { year: E2(S2(s)), month: S2(g2), day: S2(w2), hour: S2(y2), minute: S2(x2), second: O2(S2(v2)) }, h2 = s === void 0 && g2 === void 0 && w2 === void 0, p2 = y2 === void 0 && x2 === void 0 && v2 === void 0, n2 = R$2({ ...u, month: u.month - 1 }).toDate();
      return { value: h2 ? void 0 : n2, info: p2 ? { year: u.year, month: u.month, day: u.day } : h2 ? { hour: u.hour, minute: u.minute, second: u.second } : u, type: h2 ? "time" : p2 ? "date" : "full" };
    }
  }
  return null;
}, at = (t2, ...a2) => {
  if (a2.length === 0)
    return t2;
  const e2 = a2.shift() || null;
  return e2 && Object.entries(e2).forEach(([s, g2]) => {
    s === "__proto__" || s === "constructor" || (isPlainObject(t2[s]) && isPlainObject(g2) ? at(t2[s], g2) : isArray(g2) ? t2[s] = [...g2] : isPlainObject(g2) ? t2[s] = { ...g2 } : t2[s] = e2[s]);
  }), at(t2, ...a2);
}, re = (t2, a2 = false) => t2 ? isArray(t2) ? t2.map((e2) => isString(e2) ? { name: e2 } : e2) : isString(t2) ? [{ name: t2 }] : isPlainObject(t2) && t2.name ? [t2] : (console.error(`Expect "author" to be \`AuthorInfo[] | AuthorInfo | string[] | string ${a2 ? "" : "| false"} | undefined\`, but got`, t2), []) : [], ut = (t2, a2) => {
  if (t2) {
    if (isArray(t2))
      return t2;
    if (isString(t2))
      return [t2];
    console.error(`Expect ${a2 || "value"} to be \`string[] | string | undefined\`, but got`, t2);
  }
  return [];
}, se = (t2) => ut(t2, "category"), oe = (t2) => ut(t2, "tag"), ue = (t2) => isString(t2) && t2.startsWith("/");
const fontIcon = "";
var r$2 = defineComponent({ name: "FontIcon", props: { icon: { type: String, default: "" }, color: { type: String, default: "" }, size: { type: [String, Number], default: "" } }, setup(o2) {
  const t2 = computed(() => {
    const n2 = {};
    return o2.color && (n2.color = o2.color), o2.size && (n2["font-size"] = Number.isNaN(Number(o2.size)) ? o2.size : `${o2.size}px`), Object.keys(n2).length ? n2 : null;
  });
  return () => o2.icon ? h$4("span", { key: o2.icon, class: ["font-icon icon", "", o2.icon.includes(" ") ? o2.icon : `${"iconfont icon-"}${o2.icon}`], style: t2.value }) : null;
} });
const badge = "";
const t$1 = ({ type: r2 = "info", text: e2 = "", vertical: i2 = "top", color: a2 }, { slots: l2 }) => {
  var o2;
  return h$4("span", { class: ["badge", r2, { diy: a2 }], style: { verticalAlign: i2, ...a2 ? { backgroundColor: a2 } : {} } }, e2 || ((o2 = l2.default) == null ? void 0 : o2.call(l2)));
};
t$1.displayName = "Badge";
const biliBili = "";
const v$2 = (i2) => isString(i2) ? i2 : `${i2}px`, B$1 = (i2, e2 = 0) => {
  const a2 = ref(), l2 = computed(() => v$2(unref(i2.width) || "100%")), u = ref("auto"), p2 = (r2) => {
    if (isString(r2)) {
      const [n2, d2] = r2.split(":"), b = Number(n2) / Number(d2);
      if (!Number.isNaN(b))
        return b;
    }
    return typeof r2 == "number" ? r2 : 16 / 9;
  }, s = (r2) => {
    const n2 = unref(i2.height), d2 = p2(unref(i2.ratio));
    return n2 ? v$2(n2) : `${Number(r2) / d2 + unref(e2)}px`;
  }, t2 = () => {
    a2.value && (u.value = s(a2.value.clientWidth));
  };
  return onMounted(() => {
    t2(), isRef(e2) && watch(e2, () => t2()), useEventListener("orientationchange", () => t2()), useEventListener("resize", () => t2());
  }), { el: a2, width: l2, height: u };
};
var k$6 = defineComponent({ name: "BiliBili", props: { bvid: { type: String, required: true }, title: { type: String, default: "A BiliBili video" }, page: { type: [String, Number], default: 1 }, width: { type: [String, Number], default: "100%" }, height: { type: [String, Number], default: void 0 }, ratio: { type: [String, Number], default: 16 / 9 }, time: { type: [String, Number], default: 0 }, lowQuality: Boolean, noDanmaku: Boolean }, setup(i2) {
  const e2 = ref(false), a2 = computed(() => e2.value ? 0 : 68), l2 = () => {
    e2.value = Ht(navigator.userAgent) || u.value.clientWidth < 640;
  }, { el: u, width: p2, height: s } = B$1(i2, a2), t2 = computed(() => `https://player.bilibili.com/player.html?bvid=${i2.bvid}&t=${i2.time}&high_quality=${i2.lowQuality ? 0 : 1}&page=${i2.page}&danmaku=${i2.noDanmaku ? 0 : 1}`);
  return onMounted(() => {
    l2(), useEventListener("orientationchange", () => l2()), useEventListener("resize", () => l2());
  }), () => [h$4("div", { class: "bili-desc" }, h$4("a", { class: "sr-only", href: t2.value }, i2.title)), h$4("iframe", { ref: u, src: `https://player.bilibili.com/player.html?bvid=${i2.bvid}&t=${i2.time}&high_quality=${i2.lowQuality ? 0 : 1}&page=${i2.page}&danmaku=${i2.noDanmaku ? 0 : 1}`, title: i2.title, class: "bili-iframe", allow: "accelerometer; autoplay; clipboard-write; encrypted-media; fullscreen; gyroscope; picture-in-picture", style: { width: p2.value, height: s.value } })];
} });
const pdf = "";
const S$3 = (e2) => isString(e2) ? e2 : `${e2}px`, R$1 = (e2, t2 = 0) => {
  const n2 = ref(), o2 = computed(() => S$3(unref(e2.width) || "100%")), r2 = ref("auto"), d2 = (s) => {
    if (isString(s)) {
      const [l2, u] = s.split(":"), m = Number(l2) / Number(u);
      if (!Number.isNaN(m))
        return m;
    }
    return typeof s == "number" ? s : 16 / 9;
  }, a2 = (s) => {
    const l2 = unref(e2.height), u = d2(unref(e2.ratio));
    return l2 ? S$3(l2) : `${Number(s) / u + unref(t2)}px`;
  }, i2 = () => {
    n2.value && (r2.value = a2(n2.value.clientWidth));
  };
  return onMounted(() => {
    i2(), isRef(t2) && watch(t2, () => i2()), useEventListener("orientationchange", () => i2()), useEventListener("resize", () => i2());
  }), { el: n2, width: o2, height: r2 };
}, U = (e2) => isLinkHttp(e2) ? e2 : withBase(e2), h$3 = (e2) => {
  console.error("[PDF]: " + e2);
}, j = (e2) => {
  for (; e2.firstChild; )
    e2.removeChild(e2.firstChild);
}, z$1 = (e2) => e2 === "string" ? document.querySelector(e2) : e2 instanceof HTMLElement ? e2 : document.body, k$5 = (e2) => {
  let t2 = "";
  return e2 && (t2 += Object.entries(e2).map(([n2, o2]) => n2 === "noToolbar" ? `toolbar=${o2 ? 0 : 1}` : `${encodeURIComponent(n2)}=${encodeURIComponent(o2)}`).join("&"), t2 && (t2 = "#" + t2, t2 = t2.slice(0, t2.length - 1))), t2;
}, L$2 = (e2, t2, n2, o2, r2) => {
  j(t2);
  let d2 = n2;
  e2 === "pdfjs" && (d2 = `${`${ensureEndingSlash(withBase(null))}web/viewer.html`}?file=${encodeURIComponent(n2)}${k$5(o2)}`);
  const a2 = e2 === "pdfjs" || e2 === "iframe" ? "iframe" : "embed", i2 = document.createElement(a2);
  return i2.className = "pdf-viewer", i2.type = "application/pdf", i2.title = r2, i2.src = d2, i2 instanceof HTMLIFrameElement && (i2.allow = "fullscreen"), t2.classList.add("pdf-viewer-container"), t2.appendChild(i2), t2.getElementsByTagName(a2)[0];
}, H$2 = (e2, t2 = null, { title: n2, hint: o2, options: r2 = {} }) => {
  var d2;
  if (typeof window > "u" || window.navigator === void 0 || window.navigator.userAgent === void 0 || window.navigator.mimeTypes === void 0)
    return null;
  const a2 = window.navigator, i2 = window.navigator.userAgent, s = window.Promise !== void 0, l2 = a2.platform !== void 0 && a2.platform === "MacIntel" && a2.maxTouchPoints !== void 0 && a2.maxTouchPoints > 1 || Ht(i2), u = !l2 && Lt(i2), m = !l2 && /irefox/.test(i2) && i2.split("rv:").length > 1 ? parseInt(i2.split("rv:")[1].split(".")[0], 10) > 18 : false, N2 = !l2 && (s || m);
  if (!isString(e2))
    return h$3("URL is not valid"), null;
  const p2 = z$1(t2);
  if (!p2)
    return h$3("Target element cannot be determined"), null;
  const g2 = n2 || ((d2 = /\/([^/]+).pdf/.exec(e2)) == null ? void 0 : d2[1]) || "PDF Viewer";
  return N2 || !l2 ? L$2(u ? "iframe" : "embed", p2, e2, r2, g2) : (p2.innerHTML = o2.replace(/\[url\]/g, e2), h$3("This browser does not support embedded PDFs"), null);
};
var A$2 = defineComponent({ name: "PDF", props: { url: { type: String, required: true }, title: { type: String, default: "" }, width: { type: [String, Number], default: "100%" }, height: { type: [String, Number], default: void 0 }, ratio: { type: [String, Number], default: 16 / 9 }, page: { type: [String, Number], default: 1 }, noToolbar: Boolean, zoom: { type: [String, Number], default: 100 } }, setup(e2) {
  const { el: t2, width: n2, height: o2 } = R$1(e2), r2 = kt({ "/": { "hint": "<p>此浏览器不支持嵌入式 PDF。请下载 PDF 查看：<a href='[url]' target='_blank'>下载 PDF</a></p>" } });
  return onMounted(() => {
    H$2(U(e2.url), t2.value, { title: e2.title, hint: r2.value.hint, options: { page: e2.page, noToolbar: e2.noToolbar, zoom: e2.zoom } });
  }), () => h$4("div", { class: "pdf-preview", ref: t2, style: { width: n2.value, height: o2.value } });
} });
const backToTop = "";
const a$3 = () => h$4(P$2, { name: "back-to-top" }, () => [h$4("path", { d: "M512 843.2c-36.2 0-66.4-13.6-85.8-21.8-10.8-4.6-22.6 3.6-21.8 15.2l7 102c.4 6.2 7.6 9.4 12.6 5.6l29-22c3.6-2.8 9-1.8 11.4 2l41 64.2c3 4.8 10.2 4.8 13.2 0l41-64.2c2.4-3.8 7.8-4.8 11.4-2l29 22c5 3.8 12.2.6 12.6-5.6l7-102c.8-11.6-11-20-21.8-15.2-19.6 8.2-49.6 21.8-85.8 21.8z" }), h$4("path", { d: "m795.4 586.2-96-98.2C699.4 172 513 32 513 32S324.8 172 324.8 488l-96 98.2c-3.6 3.6-5.2 9-4.4 14.2L261.2 824c1.8 11.4 14.2 17 23.6 10.8L419 744s41.4 40 94.2 40c52.8 0 92.2-40 92.2-40l134.2 90.8c9.2 6.2 21.6.6 23.6-10.8l37-223.8c.4-5.2-1.2-10.4-4.8-14zM513 384c-34 0-61.4-28.6-61.4-64s27.6-64 61.4-64c34 0 61.4 28.6 61.4 64S547 384 513 384z" })]);
a$3.displayName = "BackToTopIcon";
var h$2 = defineComponent({ name: "BackToTop", props: { threshold: { type: Number, default: 300 } }, setup(l2) {
  const c2 = usePageFrontmatter(), n2 = kt({ "/": { "backToTop": "返回顶部" } }), e2 = ref(0), r2 = computed(() => c2.value.backToTop !== false && e2.value > l2.threshold), t2 = () => window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  return onMounted(() => {
    e2.value = t2();
  }), useEventListener("scroll", useDebounceFn(() => {
    e2.value = t2();
  }, 100)), () => h$4(Transition, { name: "fade" }, () => r2.value ? h$4("button", { class: "back-to-top", "aria-label": n2.value.backToTop, "data-balloon-pos": "left", onClick: () => {
    window.scrollTo({ top: 0, behavior: "smooth" }), e2.value = 0;
  } }, h$4(a$3)) : null);
} });
const srOnly = "";
const clientConfig1 = defineClientConfig({
  enhance: ({ app }) => {
    if (!_t("FontIcon"))
      app.component("FontIcon", r$2);
    if (!_t("Badge"))
      app.component("Badge", t$1);
    if (!_t("BiliBili"))
      app.component("BiliBili", k$6);
    if (!_t("PDF"))
      app.component("PDF", A$2);
  },
  setup: () => {
    useStyleTag(`      @import url("//at.alicdn.com/t/c/font_2410206_5vb9zlyghj.css");
      `);
  },
  rootComponents: [
    () => h$4(h$2, { threshold: 300 })
  ]
});
const clientConfig2 = defineClientConfig({
  setup() {
    return;
  }
});
var a$2 = defineClientConfig({ enhance: ({ app: o2 }) => {
  !_t("AutoCatalog", o2) && o2.component("AutoCatalog", defineAsyncComponent(() => import("./assets/Catalog-0f436091.js")));
} });
const vars$2 = "";
const externalLinkIcon = "";
const svg = h$4("svg", {
  "class": "external-link-icon",
  "xmlns": "http://www.w3.org/2000/svg",
  "aria-hidden": "true",
  "focusable": "false",
  "x": "0px",
  "y": "0px",
  "viewBox": "0 0 100 100",
  "width": "15",
  "height": "15"
}, [
  h$4("path", {
    fill: "currentColor",
    d: "M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"
  }),
  h$4("polygon", {
    fill: "currentColor",
    points: "45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"
  })
]);
const ExternalLinkIcon = defineComponent({
  name: "ExternalLinkIcon",
  props: {
    locales: {
      type: Object,
      required: false,
      default: () => ({})
    }
  },
  setup(props) {
    const routeLocale = useRouteLocale();
    const locale = computed(() => props.locales[routeLocale.value] ?? {
      openInNewWindow: "open in new window"
    });
    return () => h$4("span", [
      svg,
      h$4("span", {
        class: "external-link-icon-sr-only"
      }, locale.value.openInNewWindow)
    ]);
  }
});
const locales$1 = {};
const clientConfig4 = defineClientConfig({
  enhance({ app }) {
    app.component("ExternalLinkIcon", h$4(ExternalLinkIcon, { locales: locales$1 }));
  }
});
/**
 * NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT
 */
const nprogress$1 = {
  settings: {
    minimum: 0.08,
    easing: "ease",
    speed: 200,
    trickle: true,
    trickleRate: 0.02,
    trickleSpeed: 800,
    barSelector: '[role="bar"]',
    parent: "body",
    template: '<div class="bar" role="bar"></div>'
  },
  status: null,
  set: (n2) => {
    const started = nprogress$1.isStarted();
    n2 = clamp(n2, nprogress$1.settings.minimum, 1);
    nprogress$1.status = n2 === 1 ? null : n2;
    const progress = nprogress$1.render(!started);
    const bar = progress.querySelector(nprogress$1.settings.barSelector);
    const speed = nprogress$1.settings.speed;
    const ease = nprogress$1.settings.easing;
    progress.offsetWidth;
    queue((next) => {
      css(bar, {
        transform: "translate3d(" + toBarPerc(n2) + "%,0,0)",
        transition: "all " + speed + "ms " + ease
      });
      if (n2 === 1) {
        css(progress, {
          transition: "none",
          opacity: "1"
        });
        progress.offsetWidth;
        setTimeout(function() {
          css(progress, {
            transition: "all " + speed + "ms linear",
            opacity: "0"
          });
          setTimeout(function() {
            nprogress$1.remove();
            next();
          }, speed);
        }, speed);
      } else {
        setTimeout(() => next(), speed);
      }
    });
    return nprogress$1;
  },
  isStarted: () => typeof nprogress$1.status === "number",
  start: () => {
    if (!nprogress$1.status)
      nprogress$1.set(0);
    const work = () => {
      setTimeout(() => {
        if (!nprogress$1.status)
          return;
        nprogress$1.trickle();
        work();
      }, nprogress$1.settings.trickleSpeed);
    };
    if (nprogress$1.settings.trickle)
      work();
    return nprogress$1;
  },
  done: (force) => {
    if (!force && !nprogress$1.status)
      return nprogress$1;
    return nprogress$1.inc(0.3 + 0.5 * Math.random()).set(1);
  },
  inc: (amount) => {
    let n2 = nprogress$1.status;
    if (!n2) {
      return nprogress$1.start();
    }
    if (typeof amount !== "number") {
      amount = (1 - n2) * clamp(Math.random() * n2, 0.1, 0.95);
    }
    n2 = clamp(n2 + amount, 0, 0.994);
    return nprogress$1.set(n2);
  },
  trickle: () => nprogress$1.inc(Math.random() * nprogress$1.settings.trickleRate),
  render: (fromStart) => {
    if (nprogress$1.isRendered()) {
      return document.getElementById("nprogress");
    }
    addClass(document.documentElement, "nprogress-busy");
    const progress = document.createElement("div");
    progress.id = "nprogress";
    progress.innerHTML = nprogress$1.settings.template;
    const bar = progress.querySelector(nprogress$1.settings.barSelector);
    const perc = fromStart ? "-100" : toBarPerc(nprogress$1.status || 0);
    const parent = document.querySelector(nprogress$1.settings.parent);
    css(bar, {
      transition: "all 0 linear",
      transform: "translate3d(" + perc + "%,0,0)"
    });
    if (parent !== document.body) {
      addClass(parent, "nprogress-custom-parent");
    }
    parent == null ? void 0 : parent.appendChild(progress);
    return progress;
  },
  remove: () => {
    removeClass(document.documentElement, "nprogress-busy");
    removeClass(document.querySelector(nprogress$1.settings.parent), "nprogress-custom-parent");
    const progress = document.getElementById("nprogress");
    progress && removeElement(progress);
  },
  isRendered: () => !!document.getElementById("nprogress")
};
const clamp = (n2, min, max2) => {
  if (n2 < min)
    return min;
  if (n2 > max2)
    return max2;
  return n2;
};
const toBarPerc = (n2) => (-1 + n2) * 100;
const queue = function() {
  const pending = [];
  function next() {
    const fn = pending.shift();
    if (fn) {
      fn(next);
    }
  }
  return function(fn) {
    pending.push(fn);
    if (pending.length === 1)
      next();
  };
}();
const css = function() {
  const cssPrefixes = ["Webkit", "O", "Moz", "ms"];
  const cssProps = {};
  function camelCase(string) {
    return string.replace(/^-ms-/, "ms-").replace(/-([\da-z])/gi, function(match, letter) {
      return letter.toUpperCase();
    });
  }
  function getVendorProp(name) {
    const style = document.body.style;
    if (name in style)
      return name;
    let i2 = cssPrefixes.length;
    const capName = name.charAt(0).toUpperCase() + name.slice(1);
    let vendorName;
    while (i2--) {
      vendorName = cssPrefixes[i2] + capName;
      if (vendorName in style)
        return vendorName;
    }
    return name;
  }
  function getStyleProp(name) {
    name = camelCase(name);
    return cssProps[name] || (cssProps[name] = getVendorProp(name));
  }
  function applyCss(element, prop, value) {
    prop = getStyleProp(prop);
    element.style[prop] = value;
  }
  return function(element, properties) {
    for (const prop in properties) {
      const value = properties[prop];
      if (value !== void 0 && Object.prototype.hasOwnProperty.call(properties, prop))
        applyCss(element, prop, value);
    }
  };
}();
const hasClass = (element, name) => {
  const list = typeof element === "string" ? element : classList(element);
  return list.indexOf(" " + name + " ") >= 0;
};
const addClass = (element, name) => {
  const oldList = classList(element);
  const newList = oldList + name;
  if (hasClass(oldList, name))
    return;
  element.className = newList.substring(1);
};
const removeClass = (element, name) => {
  const oldList = classList(element);
  if (!hasClass(element, name))
    return;
  const newList = oldList.replace(" " + name + " ", " ");
  element.className = newList.substring(1, newList.length - 1);
};
const classList = (element) => {
  return (" " + (element.className || "") + " ").replace(/\s+/gi, " ");
};
const removeElement = (element) => {
  element && element.parentNode && element.parentNode.removeChild(element);
};
const vars$1 = "";
const nprogress = "";
const useNprogress = () => {
  onMounted(() => {
    const router = useRouter();
    const loadedPages = /* @__PURE__ */ new Set();
    loadedPages.add(router.currentRoute.value.path);
    router.beforeEach((to) => {
      if (!loadedPages.has(to.path)) {
        nprogress$1.start();
      }
    });
    router.afterEach((to) => {
      loadedPages.add(to.path);
      nprogress$1.done();
    });
  });
};
const clientConfig5 = defineClientConfig({
  setup() {
    useNprogress();
  }
});
const themeData$1 = JSON.parse('{"encrypt":{},"themeColor":{"yellow":"#FEC201","pink":"#EF699F","purple":"#684CCE","orange":"#FF8C3D"},"darkmode":"toggle","fullscreen":true,"pure":false,"blog":{"avatar":"/avatar.png","name":"九牧","roundAvatar":true,"description":"你是无意穿堂风 偏偏孤倨引山洪","medias":{"Gitee":"http://localhost:8080/jmcoding/"},"sidebarDisplay":"mobile","articlePerPage":7,"timeline":"九牧の时光轴🍃"},"locales":{"/":{"lang":"zh-CN","navbarLocales":{"langName":"简体中文","selectLangAriaLabel":"选择语言"},"metaLocales":{"author":"作者","date":"写作日期","origin":"原创","views":"访问量","category":"分类","tag":"标签","readingTime":"阅读时间","words":"字数","toc":"此页内容","prev":"上一页","next":"下一页","lastUpdated":"上次编辑于","contributors":"贡献者","editLink":"在【Gitee】上编辑此页"},"blogLocales":{"article":"文章","articleList":"文章列表","category":"分类","tag":"标签","timeline":"时间轴","timelineTitle":"昨日不在","all":"全部","intro":"个人介绍","star":"收藏"},"paginationLocales":{"prev":"上一页","next":"下一页","navigate":"跳转到","action":"前往","errorText":"请输入 1 到 $page 之前的页码！"},"outlookLocales":{"themeColor":"主题色","darkmode":"外观","fullscreen":"全屏"},"encryptLocales":{"iconLabel":"文章已加密","placeholder":"输入密码","remember":"记住密码","errorHint":"请输入正确的密码"},"routeLocales":{"skipToContent":"跳至主要內容","notFoundTitle":"页面不存在","notFoundMsg":["这里什么也没有","我们是怎么来到这儿的？","这 是 四 零 四 !","看起来你访问了一个失效的链接"],"back":"返回上一页","home":"带我回家","openInNewWindow":"Open in new window"},"author":{"name":"九牧","url":"http://localhost:8080/jmcoding/"},"logo":"/avatar.png","repo":"http://localhost:8080/jmcoding/","repoLabel":"Gitee","repoDisplay":true,"navbarLayout":{"left":["Brand"],"center":["Links"],"right":["Language","Repo","Outlook","Search"],"start":["Brand"],"end":["Language","Repo","Outlook","Search"]},"pageInfo":["Category","Tag","ReadingTime"],"breadcrumb":true,"breadcrumbIcon":true,"lastUpdated":true,"contributors":false,"docsRepo":"https://gitee.com/oucystong/notes.git","docsBranch":"master","docsDir":"src","navbar":[{"text":"快速导航","icon":"navigation","link":"/quicknav/"},{"text":"博客主页","icon":"blog","link":"/blog/"},{"text":"代码笔记","icon":"code","link":"/codenotes/"},{"text":"浮生杂记","icon":"note","link":"/floatinglife/"},{"text":"开源项目","icon":"free","link":"/projects/"},{"text":"资源宝库","icon":"advance","prefix":"/resources/","children":[{"text":"书籍资源","icon":"animation","link":"books/"},{"text":"影音资源","icon":"play","link":"videos/"}]}],"sidebar":{"/codenotes/":[{"text":"Java核心","icon":"java","collapsible":true,"prefix":"/codenotes/javacore/","children":[{"text":"Java基础-面向对象","icon":"write","link":"Java基础-面向对象.md"},{"text":"Java基础-泛型机制","icon":"write","link":"Java基础-泛型机制.md"},{"text":"Java基础-注解机制","icon":"write","link":"Java基础-注解机制.md"},{"text":"Java基础-异常机制","icon":"write","link":"Java基础-异常机制.md"},{"text":"Java基础-反射机制","icon":"write","link":"Java基础-反射机制.md"},{"text":"Java集合-类关系图","icon":"write","link":"Java集合-类关系图.md"},{"text":"Java集合-ArrayList","icon":"write","link":"Java集合-ArrayList.md"},{"text":"Java8新特性","icon":"write","link":"Java8新特性.md"},{"text":"Java中的SPI机制","icon":"write","link":"Java中的SPI机制.md"}]},{"text":"Java虚拟机","icon":"engine","collapsible":true,"prefix":"/codenotes/jvm/","children":[""]},{"text":"Go核心","icon":"engine","collapsible":true,"prefix":"/codenotes/gocore/","children":["go.md"]},{"text":"企业级框架","icon":"frame","collapsible":true,"prefix":"/codenotes/framework/","children":[{"text":"Netty","icon":"network","collapsible":true,"prefix":"netty/","children":["Netty核心.md","Netty高级.md"]},{"text":"Electron核心","icon":"write","link":"Electron核心.md"},{"text":"微服务","icon":"network","collapsible":true,"prefix":"MicroServices/","children":["认识微服务.md","SpringCloud01.md","SpringCloud02.md"]}]},{"text":"算法和数据结构","icon":"ability","collapsible":true,"prefix":"/codenotes/algdata/","children":[{"text":"算法小抄","icon":"like","collapsible":true,"prefix":"lbld/","children":["算法小抄核心套路.md","算法小抄数学运算.md","算法小抄动态规划.md","算法小抄数据结构.md","算法小抄算法思维.md","算法小抄高频面试.md"]},{"text":"LeetCode","icon":"like","collapsible":true,"prefix":"LeetCode/","children":["HOT100.md"]}]},{"text":"数据库","icon":"mysql","collapsible":true,"prefix":"/codenotes/database/","children":["数据库笔记.md"]},{"text":"开发必备","icon":"tool","collapsible":true,"prefix":"/codenotes/devtool/","children":[""]},{"text":"在线技术文档","icon":"read","collapsible":true,"prefix":"/codenotes/cookbook/","children":[""]}],"/floatinglife/":[{"text":"小镇美食家","icon":"linter","collapsible":true,"link":"/floatinglife/cooker/"},{"text":"小镇技术宅","icon":"computer","collapsible":true,"link":"/floatinglife/iter/"},{"text":"小镇运动狂","icon":"strong","collapsible":true,"link":"/floatinglife/sporter/"},{"text":"小镇思考者","icon":"style","collapsible":true,"link":"/floatinglife/thinker/"}],"/projects/":[{"text":"技术教程","icon":"guide","collapsible":true,"link":"/projects/techguide/"},{"text":"实战项目","icon":"workingDirectory","collapsible":true,"link":"/projects/pracprojects/"},{"text":"系统设计","icon":"shell","collapsible":true,"link":"/projects/systemdesign/"},{"text":"工具类库","icon":"module","collapsible":true,"link":"/projects/toollibrary/"}]},"footer":"九牧の学习笔记","displayFooter":false}}}');
const themeData = ref(themeData$1);
const useThemeData$1 = () => themeData;
const themeLocaleDataSymbol = Symbol("");
const useThemeLocaleData$1 = () => {
  const themeLocaleData = inject(themeLocaleDataSymbol);
  if (!themeLocaleData) {
    throw new Error("useThemeLocaleData() is called without provider.");
  }
  return themeLocaleData;
};
const resolveThemeLocaleData = (theme, routeLocale) => {
  var _a2;
  return {
    ...theme,
    ...(_a2 = theme.locales) == null ? void 0 : _a2[routeLocale]
  };
};
const clientConfig6 = defineClientConfig({
  enhance({ app }) {
    const themeData2 = useThemeData$1();
    const routeLocale = app._context.provides[routeLocaleSymbol];
    const themeLocaleData = computed(() => resolveThemeLocaleData(themeData2.value, routeLocale.value));
    app.provide(themeLocaleDataSymbol, themeLocaleData);
    Object.defineProperties(app.config.globalProperties, {
      $theme: {
        get() {
          return themeData2.value;
        }
      },
      $themeLocale: {
        get() {
          return themeLocaleData.value;
        }
      }
    });
  }
});
const message = "";
const balloon = "";
const button = "";
const L$1 = 800, _$2 = { "/": { "copy": "复制代码", "copied": "已复制", "hint": "复制成功" } }, d$2 = '.theme-hope-content div[class*="language-"] pre', g$1 = true, w$2 = async (i2) => {
  try {
    return navigator.clipboard.writeText(i2);
  } catch {
    const t2 = document.createElement("textarea"), s = document.activeElement;
    t2.value = i2, t2.setAttribute("readonly", ""), t2.style.contain = "strict", t2.style.position = "absolute", t2.style.left = "-9999px", t2.style.fontSize = "12pt";
    const c2 = document.getSelection(), l2 = c2 ? c2.rangeCount > 0 && c2.getRangeAt(0) : null;
    document.body.appendChild(t2), t2.select(), t2.selectionStart = 0, t2.selectionEnd = i2.length, document.execCommand("copy"), document.body.removeChild(t2), l2 && (c2.removeAllRanges(), c2.addRange(l2)), s && s.focus();
  }
}, C$3 = () => navigator ? /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/iu.test(navigator.userAgent) : false, p$1 = /* @__PURE__ */ new Map(), D$1 = () => {
  const i2 = useRoute(), t2 = kt(_$2);
  const c2 = (n2) => {
    if (!n2.hasAttribute("copy-code-registered")) {
      const e2 = document.createElement("button");
      e2.classList.add("copy-code-button"), e2.innerHTML = '<div class="copy-icon" />', e2.setAttribute("aria-label", t2.value.copy), e2.setAttribute("data-copied", t2.value.copied), n2.parentElement && n2.parentElement.insertBefore(e2, n2), n2.setAttribute("copy-code-registered", "");
    }
  }, l2 = () => {
    setTimeout(() => {
      isString(d$2) ? document.querySelectorAll(d$2).forEach(c2) : isArray(d$2) && d$2.forEach((n2) => {
        document.querySelectorAll(n2).forEach(c2);
      });
    }, L$1);
  }, u = (n2, e2, o2) => {
    let { innerText: a2 = "" } = e2;
    /language-(shellscript|shell|bash|sh|zsh)/.test(n2.classList.toString()) && (a2 = a2.replace(/^ *(\$|>) /gm, "")), w$2(a2).then(() => {
      o2.classList.add("copied"), clearTimeout(p$1.get(o2));
      const r2 = setTimeout(() => {
        o2.classList.remove("copied"), o2.blur(), p$1.delete(o2);
      }, 2e3);
      p$1.set(o2, r2);
    });
  };
  onMounted(() => {
    new Pt(), (!C$3() || g$1) && l2(), window.addEventListener("click", (n2) => {
      const e2 = n2.target;
      if (e2.matches('div[class*="language-"] > button.copy')) {
        const o2 = e2.parentElement, a2 = e2.nextElementSibling;
        a2 && u(o2, a2, e2);
      } else if (e2.matches('div[class*="language-"] div.copy-icon')) {
        const o2 = e2.parentElement, a2 = o2.parentElement, r2 = o2.nextElementSibling;
        r2 && u(a2, r2, o2);
      }
    }), watch(() => i2.path, () => {
      (!C$3() || g$1) && l2();
    });
  });
};
var M$2 = defineClientConfig({ setup: () => {
  D$1();
} });
const chart = "";
const LoadingIcon$1 = () => h$4(P$2, { name: "loading" }, () => ["0s", "-0.333s", "-0.667s"].map((e2) => h$4("circle", { cx: 512, cy: 512, r: 0, fill: "none", stroke: "currentColor", "stroke-width": "20" }, [h$4("animate", { attributeName: "r", repeatCount: "indefinite", dur: "1s", values: "0;400", keyTimes: "0;1", keySplines: "0 0.2 0.8 1", calcMode: "spline", begin: e2 }), h$4("animate", { attributeName: "opacity", repeatCount: "indefinite", dur: "1s", values: "1;0", keyTimes: "0;1", keySplines: "0.2 0 0.8 1", calcMode: "spline", begin: e2 })]))), parseChartConfig = (config, type) => {
  if (type === "json")
    return JSON.parse(config);
  const exports = {}, module = { exports };
  return eval(config), module.exports;
};
var ChartJS = defineComponent({ name: "ChartJS", props: { config: { type: String, required: true }, id: { type: String, required: true }, title: { type: String, default: "" }, type: { type: String, default: "json" } }, setup(e2) {
  const o2 = ref(), i2 = ref(), n2 = ref(true);
  return onMounted(() => {
    Promise.all([import("chart.js/auto"), new Promise((t2) => setTimeout(t2, 800))]).then(([{ default: t2 }]) => {
      t2.defaults.maintainAspectRatio = false;
      const r2 = parseChartConfig(Bt(e2.config), e2.type), a2 = i2.value.getContext("2d");
      new t2(a2, r2), n2.value = false;
    });
  }), () => [e2.title ? h$4("div", { class: "chart-title" }, decodeURIComponent(e2.title)) : null, n2.value ? h$4("div", { class: "chart-loading-wrapper" }, h$4(LoadingIcon$1)) : null, h$4("div", { ref: o2, class: "chart-wrapper", id: e2.id, style: { display: n2.value ? "none" : "block" } }, h$4("canvas", { ref: i2, height: 400 }))];
} });
const codeTabs = "";
const o$1 = useStorage("VUEPRESS_CODE_TAB_STORE", {});
var S$2 = defineComponent({ name: "CodeTabs", props: { active: { type: Number, default: 0 }, data: { type: Array, required: true }, id: { type: String, required: true }, tabId: { type: String, default: "" } }, setup(t2, { slots: v2 }) {
  const l2 = ref(t2.active), r2 = ref([]), c2 = () => {
    if (t2.tabId) {
      const { title: e2, id: a2 = e2 } = t2.data[l2.value];
      o$1.value[t2.tabId] = a2;
    }
  }, b = (e2 = l2.value) => {
    l2.value = e2 < r2.value.length - 1 ? e2 + 1 : 0, r2.value[l2.value].focus();
  }, f2 = (e2 = l2.value) => {
    l2.value = e2 > 0 ? e2 - 1 : r2.value.length - 1, r2.value[l2.value].focus();
  }, p2 = (e2, a2) => {
    if (e2.key === " " || e2.key === "Enter" ? (e2.preventDefault(), l2.value = a2) : e2.key === "ArrowRight" ? (e2.preventDefault(), b()) : e2.key === "ArrowLeft" && (e2.preventDefault(), f2()), t2.tabId) {
      const { title: d2, id: i2 = d2 } = t2.data[l2.value];
      o$1.value[t2.tabId] = i2;
    }
  }, m = () => {
    if (t2.tabId) {
      const e2 = t2.data.findIndex(({ title: a2, id: d2 = a2 }) => o$1.value[t2.tabId] === d2);
      if (e2 !== -1)
        return e2;
    }
    return t2.active;
  };
  return onMounted(() => {
    l2.value = m(), watch(() => o$1.value[t2.tabId], (e2, a2) => {
      if (t2.tabId && e2 !== a2) {
        const d2 = t2.data.findIndex(({ title: i2, id: u = i2 }) => u === e2);
        d2 !== -1 && (l2.value = d2);
      }
    });
  }), () => t2.data.length ? h$4("div", { class: "code-tabs" }, [h$4("div", { class: "code-tabs-nav", role: "tablist" }, t2.data.map(({ title: e2 }, a2) => {
    const d2 = a2 === l2.value;
    return h$4("button", { ref: (i2) => {
      i2 && (r2.value[a2] = i2);
    }, class: ["code-tabs-nav-tab", { active: d2 }], role: "tab", "aria-controls": `codetab-${t2.id}-${a2}`, "aria-selected": d2, onClick: () => {
      l2.value = a2, c2();
    }, onKeydown: (i2) => p2(i2, a2) }, e2);
  })), t2.data.map(({ title: e2, id: a2 = e2 }, d2) => {
    var i2;
    const u = d2 === l2.value;
    return h$4("div", { class: ["code-tab", { active: u }], id: `codetab-${t2.id}-${d2}`, role: "tabpanel", "aria-expanded": u }, (i2 = v2[`tab${d2}`]) == null ? void 0 : i2.call(v2, { title: e2, value: a2, isActive: u }));
  })]) : null;
} });
const codeGroup = "";
const c$1 = ({ active: p2 = false }, { slots: u }) => {
  var e2;
  return h$4("div", { class: ["code-group-item", { active: p2 }], "aria-selected": p2 }, (e2 = u.default) == null ? void 0 : e2.call(u));
};
c$1.displayName = "CodeGroupItem";
const y$2 = defineComponent({ name: "CodeGroup", setup(p2, { slots: u }) {
  const e2 = ref(-1), t2 = ref([]);
  const i2 = (a2 = e2.value) => {
    e2.value = a2 < t2.value.length - 1 ? a2 + 1 : 0, t2.value[e2.value].focus();
  }, f2 = (a2 = e2.value) => {
    e2.value = a2 > 0 ? a2 - 1 : t2.value.length - 1, t2.value[e2.value].focus();
  }, m = (a2, o2) => {
    a2.key === " " || a2.key === "Enter" ? (a2.preventDefault(), e2.value = o2) : a2.key === "ArrowRight" ? (a2.preventDefault(), i2(o2)) : a2.key === "ArrowLeft" && (a2.preventDefault(), f2(o2));
  };
  return () => {
    var a2;
    const o2 = (((a2 = u.default) == null ? void 0 : a2.call(u)) || []).filter((l2) => l2.type.name === "CodeGroupItem").map((l2) => (l2.props === null && (l2.props = {}), l2));
    return o2.length === 0 ? null : (e2.value < 0 || e2.value > o2.length - 1 ? (e2.value = o2.findIndex((l2) => "active" in l2.props), e2.value === -1 && (e2.value = 0)) : o2.forEach((l2, r2) => {
      l2.props.active = r2 === e2.value;
    }), h$4("div", { class: "code-group" }, [h$4("div", { class: "code-group-nav" }, o2.map((l2, r2) => {
      const s = r2 === e2.value;
      return h$4("button", { ref: (v2) => {
        v2 && (t2.value[r2] = v2);
      }, class: ["code-group-nav-tab", { active: s }], "aria-pressed": s, "aria-expanded": s, onClick: () => {
        e2.value = r2;
      }, onKeydown: (v2) => m(v2, r2) }, l2.props.title);
    })), o2]));
  };
} });
const index$3 = "";
const codeDemo = "";
const M$1 = () => h$4(P$2, { name: "loading" }, () => ["0s", "-0.333s", "-0.667s"].map((e2) => h$4("circle", { cx: 512, cy: 512, r: 0, fill: "none", stroke: "currentColor", "stroke-width": "20" }, [h$4("animate", { attributeName: "r", repeatCount: "indefinite", dur: "1s", values: "0;400", keyTimes: "0;1", keySplines: "0 0.2 0.8 1", calcMode: "spline", begin: e2 }), h$4("animate", { attributeName: "opacity", repeatCount: "indefinite", dur: "1s", values: "1;0", keyTimes: "0;1", keySplines: "0.2 0 0.8 1", calcMode: "spline", begin: e2 })]))), O$1 = '<svg class="codepen-icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="200" height="200"><path d="M123.429 668L468 897.714V692.571L277.143 565.143zM88 585.714L198.286 512 88 438.286v147.428zm468 312L900.571 668 746.857 565.143 556 692.57v205.143zM512 616l155.429-104L512 408 356.571 512zM277.143 458.857L468 331.43V126.286L123.429 356zM825.714 512L936 585.714V438.286zm-78.857-53.143L900.571 356 556 126.286v205.143zM1024 356v312q0 23.429-19.429 36.571l-468 312Q524.571 1024 512 1024t-24.571-7.429l-468-312Q0 691.43 0 668V356q0-23.429 19.429-36.571l468-312Q499.429 0 512 0t24.571 7.429l468 312Q1024 332.57 1024 356z"/></svg>', N = '<svg class="jsfiddle-icon" viewBox="0 0 1170 1024" xmlns="http://www.w3.org/2000/svg" width="228.516" height="200"><path d="M1028.571 441.143q63.429 26.286 102.572 83.143t39.143 126.571q0 93.714-67.429 160.286T940 877.714q-2.286 0-6.571-.285t-6-.286H232q-97.143-5.714-164.571-71.714T0 645.143q0-62.857 31.429-116t84-84q-6.858-22.286-6.858-46.857 0-65.715 46.858-112T269.143 240q54.286 0 98.286 33.143 42.857-88 127.142-141.714t186.572-53.715q94.857 0 174.857 46t126.571 124.857 46.572 172q0 3.429-.286 10.286t-.286 10.286zm-761.142 152q0 69.714 48 110.286T434.286 744q78.285 0 137.143-56.571-9.143-11.429-27.143-32.286t-24.857-28.857q-38.286 37.143-82.286 37.143-31.429 0-53.429-19.143t-22-50q0-30.286 22-49.715T436 525.143q25.143 0 48.286 12T526 568.57t37.143 42.858 39.428 46.857 44 42.857T702 732.57t69.429 12q69.142 0 116.857-40.857T936 594.857q0-69.143-48-109.714T769.714 444.57Q688 444.571 632 500l53.143 61.714q37.714-36.571 81.143-36.571 29.714 0 52.571 18.857t22.857 48q0 32.571-21.143 52.286T766.857 664q-24.571 0-47.143-12t-41.143-31.429-37.428-42.857-39.714-46.857T557.143 488 502 456.571t-67.714-12q-69.715 0-118.286 40.286t-48.571 108.286z"/></svg>', L = { "useBabel": false, "jsLib": [], "cssLib": [], "codepenLayout": "left", "codepenEditors": "101", "babel": "https://unpkg.com/@babel/standalone/babel.min.js", "vue": "https://unpkg.com/vue/dist/vue.global.prod.js", "react": "https://unpkg.com/react/umd/react.production.min.js", "reactDOM": "https://unpkg.com/react-dom/umd/react-dom.production.min.js" }, C$2 = { html: { types: ["html", "slim", "haml", "md", "markdown", "vue"], map: { html: "none", vue: "none", md: "markdown" } }, js: { types: ["js", "javascript", "coffee", "coffeescript", "ts", "typescript", "ls", "livescript"], map: { js: "none", javascript: "none", coffee: "coffeescript", ls: "livescript", ts: "typescript" } }, css: { types: ["css", "less", "sass", "scss", "stylus", "styl"], map: { css: "none", styl: "stylus" } } }, A$1 = (e2, s, t2) => {
  const a2 = document.createElement(e2);
  return s && Object.keys(s).forEach((l2) => {
    if (l2.indexOf("data"))
      a2[l2] = s[l2];
    else {
      const r2 = l2.replace("data", "");
      a2.dataset[r2] = s[l2];
    }
  }), t2 && t2.forEach((l2) => {
    a2.appendChild(l2);
  }), a2;
}, w$1 = (e2) => ({ ...L, ...e2, jsLib: Array.from(/* @__PURE__ */ new Set([...L.jsLib || [], ...e2.jsLib || []])), cssLib: Array.from(/* @__PURE__ */ new Set([...L.cssLib || [], ...e2.cssLib || []])) }), v$1 = (e2, s) => {
  if (e2[s] !== void 0)
    return e2[s];
  const t2 = new Promise((a2) => {
    var l2;
    const r2 = document.createElement("script");
    r2.src = s, (l2 = document.querySelector("body")) == null || l2.appendChild(r2), r2.onload = () => {
      a2();
    };
  });
  return e2[s] = t2, t2;
}, k$4 = (e2, s) => {
  if (s.css && Array.from(e2.childNodes).every((t2) => t2.nodeName !== "STYLE")) {
    const t2 = A$1("style", { innerHTML: s.css });
    e2.appendChild(t2);
  }
}, D = (e2, s, t2) => {
  const a2 = t2.getScript();
  if (a2 && Array.from(s.childNodes).every((l2) => l2.nodeName !== "SCRIPT")) {
    const l2 = document.createElement("script");
    l2.appendChild(document.createTextNode(`{const document=window.document.querySelector('#${e2} .code-demo-container').shadowRoot;
${a2}}`)), s.appendChild(l2);
  }
}, R = (e2) => {
  const s = Object.keys(e2), t2 = { html: [], js: [], css: [], isLegal: false };
  return ["html", "js", "css"].forEach((a2) => {
    const l2 = s.filter((r2) => C$2[a2].types.includes(r2));
    if (l2.length) {
      const r2 = l2[0];
      t2[a2] = [e2[r2].replace(/^\n|\n$/g, ""), C$2[a2].map[r2] || r2];
    }
  }), t2.isLegal = (!t2.html.length || t2.html[1] === "none") && (!t2.js.length || t2.js[1] === "none") && (!t2.css.length || t2.css[1] === "none"), t2;
}, x = (e2) => e2.replace(/<br \/>/g, "<br>").replace(/<((\S+)[^<]*?)\s+\/>/g, "<$1></$2>"), _$1 = (e2) => `<div id="app">
${x(e2)}
</div>`, B = (e2) => `${e2.replace("export default ", "const $reactApp = ").replace(/App\.__style__(\s*)=(\s*)`([\s\S]*)?`/, "")};
ReactDOM.createRoot(document.getElementById("app")).render(React.createElement($reactApp))`, V = (e2) => e2.replace(/export\s+default\s*\{(\n*[\s\S]*)\n*\}\s*;?$/u, "Vue.createApp({$1}).mount('#app')").replace(/export\s+default\s*define(Async)?Component\s*\(\s*\{(\n*[\s\S]*)\n*\}\s*\)\s*;?$/u, "Vue.createApp({$1}).mount('#app')").trim(), q = (e2) => `(function(exports){var module={};module.exports=exports;${e2};return module.exports.__esModule?module.exports.default:module.exports;})({})`, z = (e2, s) => {
  const t2 = w$1(s), a2 = e2.js[0] || "";
  return { ...t2, html: x(e2.html[0] || ""), js: a2, css: e2.css[0] || "", isLegal: e2.isLegal, getScript: () => {
    var l2;
    return t2.useBabel ? ((l2 = window.Babel.transform(a2, { presets: ["es2015"] })) == null ? void 0 : l2.code) || "" : a2;
  } };
}, P$1 = (e2, s) => {
  const t2 = w$1(s), a2 = e2.html[0] || "", l2 = /<template>([\s\S]+)<\/template>/u.exec(a2), r2 = /<script(\s*lang=(['"])(.*?)\2)?>([\s\S]+)<\/script>/u.exec(a2), d2 = /<style(\s*lang=(['"])(.*?)\2)?\s*(?:scoped)?>([\s\S]+)<\/style>/u.exec(a2), p2 = l2 ? l2[1].replace(/^\n|\n$/g, "") : "", [c2 = "", n2 = ""] = r2 ? [r2[4].replace(/^\n|\n$/g, ""), r2[3]] : [], [y2 = "", u = ""] = d2 ? [d2[4].replace(/^\n|\n$/g, ""), d2[3]] : [], j2 = n2 === "" && (u === "" || u === "css");
  return { ...t2, html: _$1(p2), js: V(c2), css: y2, isLegal: j2, jsLib: [t2.vue, ...t2.jsLib], getScript: () => {
    var i2, m;
    const g2 = s.useBabel ? ((m = (i2 = window.Babel) == null ? void 0 : i2.transform(c2, { presets: ["es2015"] })) == null ? void 0 : m.code) || "" : c2.replace(/export\s+default/u, "return");
    return `const app=window.document.createElement('div');document.firstElementChild.appendChild(app);const appOptions=${q(g2)};appOptions.template=\`${p2.replace("`", '\\`"')}\`;window.Vue.createApp(appOptions).mount(app);`;
  } };
}, H$1 = (e2, s) => {
  const t2 = w$1(s);
  return { ...t2, html: _$1(""), js: B(e2.js[0] || ""), css: e2.css[0] || (e2.js[0] ? e2.js[0].replace(/App\.__style__(?:\s*)=(?:\s*)`([\s\S]*)?`/, "$1").trim() : ""), isLegal: e2.isLegal, jsLib: [t2.react, t2.reactDOM, ...t2.jsLib], jsx: true, getScript: () => {
    var a2, l2;
    const r2 = ((l2 = (a2 = window.Babel) == null ? void 0 : a2.transform(e2.js[0] || "", { presets: ["es2015", "react"] })) == null ? void 0 : l2.code) || "";
    return `window.ReactDOM.createRoot(document.firstElementChild).render(window.React.createElement(${q(r2)}))`;
  } };
}, h$1 = {}, I$1 = (e2) => Promise.all([v$1(h$1, e2.babel), v$1(h$1, e2.react), v$1(h$1, e2.reactDOM)]), J = (e2) => {
  const s = [v$1(h$1, e2.vue)];
  return e2.useBabel && s.push(v$1(h$1, e2.babel)), Promise.all(s);
}, Q = (e2) => e2.useBabel ? v$1(h$1, e2.babel) : Promise.resolve();
var F$1 = defineComponent({ name: "CodeDemo", props: { id: { type: String, required: true }, type: { type: String, default: "normal" }, title: { type: String, default: "" }, config: { type: String, default: "" }, code: { type: String, required: true } }, setup(e2, { slots: s }) {
  const t2 = ref(false), a2 = ref(), l2 = ref(), r2 = ref("0"), d2 = ref(false), p2 = computed(() => JSON.parse(e2.config ? Bt(e2.config) : "{}")), c2 = computed(() => {
    const i2 = JSON.parse(Bt(e2.code));
    return R(i2);
  }), n2 = computed(() => e2.type === "react" ? H$1(c2.value, p2.value) : e2.type === "vue" ? P$1(c2.value, p2.value) : z(c2.value, p2.value)), y2 = computed(() => n2.value.isLegal), u = (i2 = false) => {
    const m = a2.value.attachShadow({ mode: "open" }), g2 = document.createElement("div");
    g2.classList.add("code-demo-app"), m.appendChild(g2), y2.value ? (i2 && (g2.innerHTML = n2.value.html), k$4(m, n2.value), D(e2.id, m, n2.value), r2.value = "0") : r2.value = "auto", d2.value = true;
  }, j2 = () => {
    switch (e2.type) {
      case "react":
        return I$1(n2.value).then(() => u());
      case "vue":
        return J(n2.value).then(() => u());
      default:
        return Q(n2.value).then(() => u(true));
    }
  };
  return onMounted(() => {
    setTimeout(() => {
      j2();
    }, 800);
  }), () => {
    var i2;
    return h$4("div", { class: "code-demo-wrapper", id: e2.id }, [d2.value ? null : h$4("div", { class: "loading" }, h$4(M$1)), h$4("div", { class: "code-demo-header" }, [n2.value.isLegal ? h$4("button", { class: ["toggle-button", t2.value ? "down" : "end"], onClick: () => {
      r2.value = t2.value ? "0" : `${l2.value.clientHeight + 13.8}px`, t2.value = !t2.value;
    } }) : null, e2.title ? h$4("span", { class: "title" }, decodeURIComponent(e2.title)) : null, n2.value.isLegal && n2.value.jsfiddle !== false ? h$4("form", { class: "code-demo-jsfiddle", target: "_blank", action: "https://jsfiddle.net/api/post/library/pure/", method: "post" }, [h$4("input", { type: "hidden", name: "html", value: n2.value.html }), h$4("input", { type: "hidden", name: "js", value: n2.value.js }), h$4("input", { type: "hidden", name: "css", value: n2.value.css }), h$4("input", { type: "hidden", name: "wrap", value: "1" }), h$4("input", { type: "hidden", name: "panel_js", value: "3" }), h$4("input", { type: "hidden", name: "resources", value: [...n2.value.cssLib, ...n2.value.jsLib].join(",") }), h$4("button", { type: "submit", class: "jsfiddle-button", innerHTML: N, "aria-label": "JSFiddle", "data-balloon-pos": "up" })]) : null, !n2.value.isLegal || n2.value.codepen !== false ? h$4("form", { class: "code-demo-codepen", target: "_blank", action: "https://codepen.io/pen/define", method: "post" }, [h$4("input", { type: "hidden", name: "data", value: JSON.stringify({ html: n2.value.html, js: n2.value.js, css: n2.value.css, js_external: n2.value.jsLib.join(";"), css_external: n2.value.cssLib.join(";"), layout: n2.value.codepenLayout, html_pre_processor: c2.value ? c2.value.html[1] : "none", js_pre_processor: c2.value ? c2.value.js[1] : n2.value.jsx ? "babel" : "none", css_pre_processor: c2.value ? c2.value.css[1] : "none", editors: n2.value.codepenEditors }) }), h$4("button", { type: "submit", innerHTML: O$1, class: "codepen-button", "aria-label": "Codepen", "data-balloon-pos": "up" })]) : null]), h$4("div", { ref: a2, class: "code-demo-container", style: { display: y2.value && d2.value ? "block" : "none" } }), h$4("div", { class: "code-demo-code-wrapper", style: { height: r2.value } }, h$4("div", { ref: l2, class: "code-demo-codes" }, (i2 = s.default) == null ? void 0 : i2.call(s)))]);
  };
} });
const echarts = "";
const LoadingIcon = () => h$4(P$2, { name: "loading" }, () => ["0s", "-0.333s", "-0.667s"].map((e2) => h$4("circle", { cx: 512, cy: 512, r: 0, fill: "none", stroke: "currentColor", "stroke-width": "20" }, [h$4("animate", { attributeName: "r", repeatCount: "indefinite", dur: "1s", values: "0;400", keyTimes: "0;1", keySplines: "0 0.2 0.8 1", calcMode: "spline", begin: e2 }), h$4("animate", { attributeName: "opacity", repeatCount: "indefinite", dur: "1s", values: "1;0", keyTimes: "0;1", keySplines: "0.2 0 0.8 1", calcMode: "spline", begin: e2 })]))), parseEChartsConfig = (config, type) => {
  if (type === "js") {
    const exports = {}, module = { exports };
    return eval(config), module.exports;
  }
  return JSON.parse(config);
};
var ECharts = defineComponent({ name: "ECharts", props: { config: { type: String, required: true }, id: { type: String, required: true }, title: { type: String, default: "" }, type: { type: String, default: "json" } }, setup(e2) {
  const o2 = ref();
  let n2;
  const i2 = ref(true);
  return onMounted(() => {
    Promise.all([import("echarts"), new Promise((t2) => setTimeout(t2, 800))]).then(([t2]) => {
      const r2 = parseEChartsConfig(Bt(e2.config), e2.type);
      n2 = t2.init(o2.value), n2.showLoading(), n2.setOption(r2), n2.hideLoading(), i2.value = false;
    }), useEventListener("resize", useDebounceFn(() => n2 == null ? void 0 : n2.resize(), 100));
  }), onBeforeUnmount(() => {
    n2 == null || n2.dispose();
  }), () => [e2.title ? h$4("div", { class: "echarts-title" }, decodeURIComponent(e2.title)) : null, i2.value ? h$4("div", { class: "echarts-loading-wrapper" }, h$4(LoadingIcon)) : null, h$4("div", { ref: o2, class: "echarts-wrapper", id: e2.id })];
} });
const figure = "";
const flowchart = "";
const y$1 = () => h$4(P$2, { name: "loading" }, () => ["0s", "-0.333s", "-0.667s"].map((e2) => h$4("circle", { cx: 512, cy: 512, r: 0, fill: "none", stroke: "currentColor", "stroke-width": "20" }, [h$4("animate", { attributeName: "r", repeatCount: "indefinite", dur: "1s", values: "0;400", keyTimes: "0;1", keySplines: "0 0.2 0.8 1", calcMode: "spline", begin: e2 }), h$4("animate", { attributeName: "opacity", repeatCount: "indefinite", dur: "1s", values: "1;0", keyTimes: "0;1", keySplines: "0.2 0 0.8 1", calcMode: "spline", begin: e2 })])));
var a$1 = { x: 0, y: 0, "line-width": 2, "line-length": 40, "text-margin": 8, "font-size": 14, "font-color": "#8DA1AC", "line-color": "#8DA1AC", "element-color": "black", fill: "white", "yes-text": "Yes", "no-text": "No", "arrow-end": "block", scale: 1 }, F = { ...a$1, symbols: { start: { class: "start-element", "font-color": "#fff", fill: "#595959", "line-width": "0px" }, end: { class: "end-element", "font-color": "#fff", fill: "#595959", "line-width": "0px" }, operation: { class: "operation-element", "font-color": "#fff", fill: "#1890ff", "line-width": "0px" }, inputoutput: { class: "inputoutput-element", "font-color": "#fff", fill: "#1890ff", "line-width": "0px" }, subroutine: { class: "subroutine-element", "font-color": "#fff", fill: "#FF485E", "element-color": "#fff", "line-color": "red" }, condition: { class: "condition-element", "font-color": "#fff", fill: "#FF485E", "line-width": "0px" }, parallel: { class: "parallel-element", "font-color": "#fff", fill: "#1890ff", "line-width": "0px" } } }, C$1 = { ...a$1, "line-width": 1, symbols: { start: { class: "start-element", fill: "#ccc", "line-width": "1px", "line-color": "#5c6ac4", "font-color": "#000" }, end: { class: "end-element", fill: "#ccc", "line-width": "1px", "line-color": "#5c6ac4", "font-color": "#000" }, operation: { class: "operation-element", fill: "#f1f1f1", "line-width": "1px", "line-color": "#5c6ac4", "font-color": "#000" }, inputoutput: { class: "inputoutput-element", fill: "#f1f1f1", "line-width": "1px", "line-color": "#5c6ac4", "font-color": "#000" }, subroutine: { class: "subroutine-element", fill: "#f1f1f1", "line-width": "1px", "line-color": "#5c6ac4", "font-color": "#000" }, condition: { class: "condition-element", fill: "#f1f1f1", "line-width": "1px", "line-color": "#5c6ac4", "font-color": "#000" }, parallel: { class: "parallel-element", fill: "#f1f1f1", "line-width": "1px", "line-color": "#5c6ac4", "font-color": "#000" } } }, g = { ...a$1, symbols: { start: { class: "start-element", "font-color": "#fff", fill: "#2F495F", "line-width": "0px" }, end: { class: "end-element", "font-color": "#fff", fill: "#2F495F", "line-width": "0px" }, operation: { class: "operation-element", "font-color": "#fff", fill: "#00BC7D", "line-width": "0px" }, inputoutput: { class: "inputoutput-element", "font-color": "#fff", fill: "#EB4D5D", "line-width": "0px" }, subroutine: { class: "subroutine-element", "font-color": "#fff", fill: "#937AC4", "element-color": "#fff", "line-color": "red" }, condition: { class: "condition-element", "font-color": "#fff", fill: "#FFB500", "line-width": "0px" }, parallel: { class: "parallel-element", "font-color": "#fff", fill: "#2F495F", "line-width": "0px" } } }, p = { ant: F, vue: g, pie: C$1 }, k$3 = defineComponent({ name: "FlowChart", props: { code: { type: String, required: true }, id: { type: String, required: true }, preset: { type: String, default: "vue" } }, setup(e2) {
  let n2;
  const d2 = ref(), i2 = ref(true), t2 = ref(1), c2 = computed(() => p[e2.preset] || (console.warn(`[md-enhance:flowchart] Unknown preset: ${e2.preset}`), p.vue)), s = (l2) => l2 < 419 ? 0.8 : l2 > 1280 ? 1 : 0.9;
  return onMounted(() => {
    Promise.all([import("flowchart.ts"), new Promise((l2) => setTimeout(l2, 800))]).then(([{ parse: l2 }]) => {
      n2 = l2(Bt(e2.code)), t2.value = s(window.innerWidth), i2.value = false, n2.draw(e2.id, { ...c2.value, scale: t2.value }), useEventListener("resize", useDebounceFn(() => {
        const r2 = s(window.innerWidth);
        t2.value !== r2 && (t2.value = r2, n2.draw(e2.id, { ...c2.value, scale: r2 }));
      }, 100));
    });
  }), () => [i2.value ? h$4("div", { class: "flowchart-loading-wrapper" }, h$4(y$1)) : null, h$4("div", { ref: d2, class: ["flowchart-wrapper", e2.preset], id: e2.id, style: { display: i2.value ? "none" : "block" } })];
} });
const footnote = "";
const imageMark = "";
const mermaid = "";
const M = () => h$4(P$2, { name: "loading" }, () => ["0s", "-0.333s", "-0.667s"].map((e2) => h$4("circle", { cx: 512, cy: 512, r: 0, fill: "none", stroke: "currentColor", "stroke-width": "20" }, [h$4("animate", { attributeName: "r", repeatCount: "indefinite", dur: "1s", values: "0;400", keyTimes: "0;1", keySplines: "0 0.2 0.8 1", calcMode: "spline", begin: e2 }), h$4("animate", { attributeName: "opacity", repeatCount: "indefinite", dur: "1s", values: "1;0", keyTimes: "0;1", keySplines: "0.2 0 0.8 1", calcMode: "spline", begin: e2 })]))), k$2 = (e2) => ({ dark: e2, background: e2 ? "#1e1e1e" : "#fff", primaryColor: e2 ? "#389d70" : "#4abf8a", primaryBorderColor: e2 ? "#389d70" : "#4abf8a", primaryTextColor: "#fff", secondaryColor: "#ffb500", secondaryBorderColor: e2 ? "#fff" : "#000", secondaryTextColor: e2 ? "#ddd" : "#333", tertiaryColor: e2 ? "#282828" : "#efeef4", tertiaryBorderColor: e2 ? "#bbb" : "#242424", tertiaryTextColor: e2 ? "#ddd" : "#333", noteBkgColor: e2 ? "#f6d365" : "#fff5ad", noteTextColor: "#242424", noteBorderColor: e2 ? "#f6d365" : "#333", lineColor: e2 ? "#d3d3d3" : "#333", textColor: e2 ? "#fff" : "#242424", mainBkg: e2 ? "#389d70" : "#4abf8a", errorBkgColor: "#eb4d5d", errorTextColor: "#fff", nodeBorder: e2 ? "#389d70" : "#4abf8a", nodeTextColor: e2 ? "#fff" : "#242424", signalTextColor: e2 ? "#9e9e9e" : "#242424", classText: "#fff", labelColor: "#fff", fillType0: e2 ? "#cf1322" : "#f1636e", fillType1: "#f39c12", fillType2: "#2ecc71", fillType3: "#fa541c", fillType4: "#25a55b", fillType5: "#13c2c2", fillType6: "#096dd9", fillType7: "#aa6fe9" });
var w = defineComponent({ name: "Mermaid", props: { id: { type: String, required: true }, code: { type: String, required: true } }, setup(e2) {
  const r2 = ref(""), c2 = ref(), i2 = ref(false);
  let l2 = null;
  return onMounted(() => {
    const n2 = document.querySelector("html"), u = Bt(e2.code), s = () => n2.classList.contains("dark") || n2.getAttribute("data-theme") === "dark";
    i2.value = s(), Promise.all([import("mermaid/dist/mermaid.esm.min.mjs"), import("@mermaid-js/mermaid-mindmap/dist/mermaid-mindmap.esm.min.mjs"), new Promise((o2) => setTimeout(o2, 800))]).then(async ([{ default: o2 }, { default: m }]) => {
      try {
        await o2.registerExternalDiagrams([m]);
      } catch {
      }
      const f2 = async () => {
        const a2 = document.createElement("div");
        a2.style.position = "relative", a2.style.top = "-9999px";
        const p2 = (y2) => {
          r2.value = y2, document.body.removeChild(a2);
        };
        o2.initialize({ theme: "base", themeVariables: k$2(i2.value), flowchart: { useMaxWidth: false }, sequence: { useMaxWidth: false }, journey: { useMaxWidth: false }, gantt: { useMaxWidth: false }, er: { useMaxWidth: false }, pie: { useMaxWidth: false }, ...{}, startOnLoad: false }), r2.value = "", document.body.appendChild(a2), await nextTick(), await o2.renderAsync(e2.id, u, p2, a2);
      };
      await f2(), l2 = new MutationObserver(() => {
        i2.value = s();
      }), l2.observe(n2, { attributeFilter: ["class", "data-theme"], attributes: true }), watch(i2, f2);
    });
  }), onBeforeUnmount(() => {
    l2 == null || l2.disconnect();
  }), () => h$4("div", { ref: c2, class: ["mermaid-wrapper", { loading: !r2.value }] }, r2.value ? h$4("div", { class: "content", innerHTML: r2.value }) : h$4(M));
} });
const o = () => import("reveal.js/plugin/highlight/highlight.esm.js"), t = () => import("reveal.js/plugin/markdown/markdown.esm.js"), e = () => import("reveal.js/plugin/math/math.esm.js"), r$1 = () => import("reveal.js/plugin/notes/notes.esm.js"), a = () => import("reveal.js/dist/reveal.esm.js"), i = () => import("reveal.js/plugin/search/search.esm.js"), c = () => import("reveal.js/plugin/zoom/zoom.esm.js");
const useReveal = () => [a(), t(), o(), e(), i(), r$1(), c()];
const index$2 = "";
const leagueGothic = "";
const sourceSansPro = "";
const k$1 = () => h$4(P$2, { name: "loading" }, () => ["0s", "-0.333s", "-0.667s"].map((t2) => h$4("circle", { cx: 512, cy: 512, r: 0, fill: "none", stroke: "currentColor", "stroke-width": "20" }, [h$4("animate", { attributeName: "r", repeatCount: "indefinite", dur: "1s", values: "0;400", keyTimes: "0;1", keySplines: "0 0.2 0.8 1", calcMode: "spline", begin: t2 }), h$4("animate", { attributeName: "opacity", repeatCount: "indefinite", dur: "1s", values: "1;0", keyTimes: "0;1", keySplines: "0.2 0 0.8 1", calcMode: "spline", begin: t2 })])));
var S$1 = defineComponent({ name: "Presentation", props: { id: { type: String, required: true }, code: { type: String, required: true }, theme: { type: String, default: "auto" } }, setup(t2) {
  const n2 = usePageFrontmatter(), s = ref(""), r2 = ref(false), u = ref(), a2 = ref();
  let i2;
  return onMounted(() => {
    if (a2.value) {
      s.value = Bt(t2.code), a2.value.setAttribute("id", t2.id), a2.value.setAttribute("data-theme", t2.theme);
      const d2 = [new Promise((l2) => setTimeout(l2, 800)), ...useReveal()];
      Promise.all(d2).then(([, l2, ...m]) => {
        i2 = new l2.default(a2.value, { plugins: m.map((p2) => p2.default) }), i2.initialize({ backgroundTransition: "slide", hash: n2.value.layout === "Slide", mouseWheel: n2.value.layout === "Slide", transition: "slide", slideNumber: true, ...{}, ...n2.value.reveal || {}, embedded: n2.value.layout !== "Slide" }).then(() => {
          r2.value = false, i2.configure({ backgroundTransition: "slide" });
        });
      });
    }
  }), onBeforeUnmount(() => {
    i2 == null || i2.destroy();
  }), () => h$4("div", { ref: u, class: { "md-enhance-presentation": true, loading: r2.value } }, [r2.value ? h$4(k$1) : null, h$4("div", { ref: a2, class: ["reveal", "reveal-viewport"] }, h$4("div", { class: "slides", style: { display: r2.value ? "none" : "block" }, innerHTML: `<section data-markdown data-separator="^\\r?\\n---\\r?\\n$" data-separator-vertical="^\\r?\\n--\\r?\\n$"><script type="text/template">${s.value}<\/script></section>` }))]);
} });
const playground = "";
const n = '<svg class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="200" height="200"><path d="M512 74.667C270.933 74.667 74.667 270.933 74.667 512S270.933 949.333 512 949.333 949.333 753.067 949.333 512 753.067 74.667 512 74.667zm0 810.666C307.2 885.333 138.667 716.8 138.667 512S307.2 138.667 512 138.667 885.333 307.2 885.333 512 716.8 885.333 512 885.333z"/><path d="M708.267 465.067 473.6 330.667c-8.533-4.267-17.067-6.4-25.6-6.4-29.867 0-53.333 23.466-53.333 53.333v268.8c0 8.533 2.133 19.2 6.4 25.6 10.666 17.067 27.733 27.733 46.933 27.733 8.533 0 17.067-2.133 25.6-6.4l234.667-134.4c8.533-4.266 14.933-10.666 19.2-19.2 6.4-12.8 8.533-27.733 4.266-40.533-2.133-14.933-10.666-25.6-23.466-34.133zM458.667 627.2V396.8L661.333 512 458.667 627.2z"/></svg>';
var r = defineComponent({ name: "Playground", props: { title: { type: String, default: "" }, link: { type: String, required: true } }, setup(t2) {
  return () => [h$4("div", { class: "playground-wrapper" }, [h$4("div", { class: "title-wrapper" }, [t2.title ? h$4("div", { class: "title" }, decodeURIComponent(t2.title)) : null, h$4("div", { class: "actions" }, [h$4("a", { class: "action", href: decodeURIComponent(t2.link), target: "_blank", innerHTML: n })])]), h$4("div", { class: "preview-container" }, h$4("iframe", { class: "iframe-preview", src: decodeURIComponent(t2.link) }))])];
} });
const tabs = "";
const v = useStorage("VUEPRESS_TAB_STORE", {});
var S = defineComponent({ name: "Tabs", props: { active: { type: Number, default: 0 }, data: { type: Array, required: true }, id: { type: String, required: true }, tabId: { type: String, default: "" } }, setup(e2, { slots: o2 }) {
  const l2 = ref(e2.active), u = ref([]), s = () => {
    if (e2.tabId) {
      const { title: a2, id: t2 = a2 } = e2.data[l2.value];
      v.value[e2.tabId] = t2;
    }
  }, b = (a2 = l2.value) => {
    l2.value = a2 < u.value.length - 1 ? a2 + 1 : 0, u.value[l2.value].focus();
  }, f2 = (a2 = l2.value) => {
    l2.value = a2 > 0 ? a2 - 1 : u.value.length - 1, u.value[l2.value].focus();
  }, p2 = (a2, t2) => {
    a2.key === " " || a2.key === "Enter" ? (a2.preventDefault(), l2.value = t2) : a2.key === "ArrowRight" ? (a2.preventDefault(), b()) : a2.key === "ArrowLeft" && (a2.preventDefault(), f2()), s();
  }, m = () => {
    if (e2.tabId) {
      const a2 = e2.data.findIndex(({ title: t2, id: i2 = t2 }) => v.value[e2.tabId] === i2);
      if (a2 !== -1)
        return a2;
    }
    return e2.active;
  };
  return onMounted(() => {
    l2.value = m(), watch(() => v.value[e2.tabId], (a2, t2) => {
      if (e2.tabId && a2 !== t2) {
        const i2 = e2.data.findIndex(({ title: r2, id: d2 = r2 }) => d2 === a2);
        i2 !== -1 && (l2.value = i2);
      }
    });
  }), () => e2.data.length ? h$4("div", { class: "tab-list" }, [h$4("div", { class: "tab-list-nav", role: "tablist" }, e2.data.map(({ title: a2 }, t2) => {
    const i2 = t2 === l2.value;
    return h$4("button", { ref: (r2) => {
      r2 && (u.value[t2] = r2);
    }, class: ["tab-list-nav-item", { active: i2 }], role: "tab", "aria-controls": `tab-${e2.id}-${t2}`, "aria-selected": i2, onClick: () => {
      l2.value = t2, s();
    }, onKeydown: (r2) => p2(r2, t2) }, a2);
  })), e2.data.map(({ title: a2, id: t2 = a2 }, i2) => {
    var r2;
    const d2 = i2 === l2.value;
    return h$4("div", { class: ["tab-item", { active: d2 }], id: `tab-${e2.id}-${i2}`, role: "tabpanel", "aria-expanded": d2 }, (r2 = o2[`tab${i2}`]) == null ? void 0 : r2.call(o2, { title: a2, value: t2, isActive: d2 }));
  })]) : null;
} });
const tasklist = "";
const katex = "";
const clientConfig8 = defineClientConfig({
  enhance: ({ app }) => {
    app.component("ChartJS", ChartJS);
    app.component("CodeTabs", S$2);
    app.component("CodeGroup", y$2);
    app.component("CodeGroupItem", c$1);
    app.component("CodeDemo", F$1);
    app.component("ECharts", ECharts);
    app.component("FlowChart", k$3);
    app.component("Mermaid", w);
    app.component("Presentation", S$1);
    app.component("Playground", r);
    app.component("Tabs", S);
    app.component("VuePlayground", defineAsyncComponent(() => import("./assets/VuePlayground-cf20151a.js")));
  }
});
const photoswipe = "";
const E = ".theme-hope-content :not(a) > img", P = { "/": { "closeTitle": "关闭", "downloadTitle": "下载图片", "fullscreenTitle": "切换全屏", "zoomTitle": "缩放", "arrowPrevTitle": "上一个 (左箭头)", "arrowNextTitle": "下一个 (右箭头)" } }, O = 800, H = {}, d$1 = (t2) => ({ src: t2.src, width: t2.naturalWidth, height: t2.naturalHeight, alt: t2.alt }), I = (t2) => {
  const r2 = isString(t2) ? Array.from(document.querySelectorAll(t2)) : t2.map((e2) => Array.from(document.querySelectorAll(e2))).flat();
  return Promise.all(r2.map((e2) => new Promise((i2, s) => {
    e2.complete ? i2(d$1(e2)) : (e2.onload = () => i2(d$1(e2)), e2.onerror = (n2) => s(n2));
  }))).then((e2) => ({ elements: r2, infos: e2 }));
}, A = () => {
  const { isSupported: t2, toggle: r2 } = useFullscreen(), e2 = kt(P), i2 = useRoute(), s = () => {
    Promise.all([import("photoswipe"), new Promise((n2) => setTimeout(n2, O)).then(() => I(E))]).then(([n2, m]) => {
      m.elements.forEach((l2, p2) => {
        const u = () => {
          const o2 = new n2.default({ dataSource: m.infos, ...e2.value, ...H, index: p2 });
          o2.on("uiRegister", () => {
            t2 && o2.ui.registerElement({ name: "fullscreen", order: 7, isButton: true, html: '<svg class="pswp__icn" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M249.5 270.833H437v-75H212a37.5 37.5 0 0 0-37.5 37.5v225h75v-187.5zm-37.5 600h225v-75H249.5v-187.5h-75v225a37.5 37.5 0 0 0 37.5 37.5zm637.5-37.5v-225h-75v187.5H587v75h225a37.5 37.5 0 0 0 37.5-37.5zM587 270.833h187.5v187.5h75v-225a37.5 37.5 0 0 0-37.5-37.5H587v75z"/></svg>', onClick: () => {
              r2();
            } }), o2.ui.registerElement({ name: "download", order: 8, isButton: true, tagName: "a", html: { isCustomSVG: true, inner: '<path d="M20.5 14.3 17.1 18V10h-2.2v7.9l-3.4-3.6L10 16l6 6.1 6-6.1-1.5-1.6ZM23 23H9v2h14" id="pswp__icn-download"/>', outlineID: "pswp__icn-download" }, onInit: (a2, c2) => {
              a2.setAttribute("download", ""), a2.setAttribute("target", "_blank"), a2.setAttribute("rel", "noopener"), c2.on("change", () => {
                a2.href = c2.currSlide.data.src;
              });
            } });
          }), o2.init();
        };
        l2.style.cursor = "zoom-in", l2.addEventListener("click", u), l2.addEventListener("keypress", ({ key: o2 }) => {
          o2 === "Enter" && u();
        });
      });
    });
  };
  onMounted(() => {
    s(), watch(() => i2.path, () => s());
  });
};
var y = defineClientConfig({ setup: () => {
  A();
} });
const useAutoLink = (item, preferFull = false) => {
  const router = useRouter();
  const { fullPath, meta, name } = Dt(router, encodeURI(item));
  return {
    text: !preferFull && meta[
      "s"
      /* ArticleInfoType.shortTitle */
    ] ? meta[
      "s"
      /* ArticleInfoType.shortTitle */
    ] : meta.title || item,
    link: name === "404" ? item : fullPath,
    ...meta[
      "i"
      /* ArticleInfoType.icon */
    ] ? { icon: meta[
      "i"
      /* ArticleInfoType.icon */
    ] } : {}
  };
};
const useThemeData = () => useThemeData$1();
const useThemeLocaleData = () => useThemeLocaleData$1();
const usePure = () => computed(() => Boolean(useThemeData().value.pure));
const useWindowSize = () => {
  const themeData2 = useThemeData();
  const isMobile = ref(false);
  const isWide = ref(false);
  const windowSizeHandler = () => {
    isMobile.value = window.innerWidth <= (themeData2.value.mobileBreakPoint || 719);
    isWide.value = window.innerWidth >= (themeData2.value.wideBreakPoint || 1440);
  };
  onMounted(() => {
    windowSizeHandler();
    useEventListener("resize", windowSizeHandler, false);
    useEventListener("orientationchange", windowSizeHandler, false);
  });
  return {
    isMobile,
    isWide
  };
};
const useNavigate = () => {
  const router = useRouter();
  const route = useRoute();
  return (url) => {
    if (url) {
      if (ue(url)) {
        if (route.path !== url)
          void router.push(url);
      } else if (isLinkHttp(url) || isLinkMailto(url)) {
        if (window)
          window.open(url);
      } else {
        const base = route.path.slice(0, route.path.lastIndexOf("/"));
        void router.push(`${base}/${encodeURI(url)}`);
      }
    }
  };
};
const usePageAuthor = () => {
  const themeLocale = useThemeLocaleData();
  const frontmatter = usePageFrontmatter();
  return computed(() => {
    const { author } = frontmatter.value;
    if (author)
      return re(author);
    if (author === false)
      return [];
    return re(themeLocale.value.author, false);
  });
};
const usePageCategory = () => {
  const frontmatter = usePageFrontmatter();
  return computed(() => se(frontmatter.value.category).map((name) => {
    var _a2, _b2;
    return {
      name,
      // this is a hack
      path: ((_b2 = (_a2 = inject(Symbol.for("categoryMap"))) == null ? void 0 : _a2.value.map[name]) == null ? void 0 : _b2.path) || ""
    };
  }));
};
const usePageTag = () => {
  const frontmatter = usePageFrontmatter();
  return computed(() => oe(frontmatter.value.tag).map((name) => {
    var _a2, _b2;
    return {
      name,
      // this is a hack
      path: ((_b2 = (_a2 = inject(Symbol.for("tagMap"))) == null ? void 0 : _a2.value.map[name]) == null ? void 0 : _b2.path) || ""
    };
  }));
};
const usePageDate = () => {
  const frontmatter = usePageFrontmatter();
  const page2 = usePageData();
  return computed(() => {
    const { date } = frontmatter.value;
    if (date)
      return ot(date);
    const { createdTime } = page2.value.git || {};
    if (createdTime)
      return ot(new Date(createdTime));
    return null;
  });
};
const usePageInfo = () => {
  const themeLocale = useThemeLocaleData();
  const page2 = usePageData();
  const frontmatter = usePageFrontmatter();
  const author = usePageAuthor();
  const category = usePageCategory();
  const tag = usePageTag();
  const date = usePageDate();
  const info = computed(() => ({
    author: author.value,
    category: category.value,
    date: date.value,
    localizedDate: page2.value.localizedDate,
    tag: tag.value,
    isOriginal: frontmatter.value.isOriginal || false,
    readingTime: page2.value.readingTime || null,
    pageview: "pageview" in frontmatter.value ? frontmatter.value.pageview : true
  }));
  const items = computed(() => "pageInfo" in frontmatter.value ? frontmatter.value.pageInfo : "pageInfo" in themeLocale.value ? themeLocale.value.pageInfo : null);
  return { info, items };
};
let promise = null;
let promiseResolve = null;
const scrollPromise = {
  wait: () => promise,
  pending: () => {
    promise = new Promise((resolve) => promiseResolve = resolve);
  },
  resolve: () => {
    promiseResolve == null ? void 0 : promiseResolve();
    promise = null;
    promiseResolve = null;
  }
};
const useScrollPromise = () => scrollPromise;
const footer = "";
const PageFooter = defineComponent({
  name: "PageFooter",
  setup() {
    const frontmatter = usePageFrontmatter();
    const themeLocale = useThemeLocaleData();
    const author = usePageAuthor();
    const enable = computed(() => {
      const { copyright: copyright2, footer: footer2 } = frontmatter.value;
      return footer2 !== false && Boolean(copyright2 || footer2 || themeLocale.value.displayFooter);
    });
    const content = computed(() => {
      const { footer: footer2 } = frontmatter.value;
      return footer2 === false ? false : isString(footer2) ? footer2 : themeLocale.value.footer || "";
    });
    const copyright = computed(() => "copyright" in frontmatter.value ? frontmatter.value.copyright : "copyright" in themeLocale.value ? themeLocale.value.copyright : author.value.length ? `Copyright © ${new Date().getFullYear()} ${author.value[0].name}` : false);
    return () => enable.value ? h$4("footer", { class: "footer-wrapper" }, [
      content.value ? h$4("div", { class: "footer", innerHTML: content.value }) : null,
      copyright.value ? h$4("div", {
        class: "copyright",
        innerHTML: copyright.value
      }) : null
    ]) : null;
  }
});
const I18nIcon = () => h$4(P$2, { name: "i18n" }, () => [
  h$4("path", {
    d: "M379.392 460.8 494.08 575.488l-42.496 102.4L307.2 532.48 138.24 701.44l-71.68-72.704L234.496 460.8l-45.056-45.056c-27.136-27.136-51.2-66.56-66.56-108.544h112.64c7.68 14.336 16.896 27.136 26.112 35.84l45.568 46.08 45.056-45.056C382.976 312.32 409.6 247.808 409.6 204.8H0V102.4h256V0h102.4v102.4h256v102.4H512c0 70.144-37.888 161.28-87.04 210.944L378.88 460.8zM576 870.4 512 1024H409.6l256-614.4H768l256 614.4H921.6l-64-153.6H576zM618.496 768h196.608L716.8 532.48 618.496 768z"
  })
]);
I18nIcon.displayName = "I18nIcon";
const Icon = (props) => {
  const { icon = "" } = props;
  return isLinkHttp(icon) ? h$4("img", { class: "icon", src: icon }) : ue(icon) ? h$4("img", { class: "icon", src: withBase(icon) }) : h$4(resolveComponent("FontIcon"), props);
};
Icon.displayName = "Icon";
const AutoLink = defineComponent({
  name: "AutoLink",
  inheritAttrs: false,
  props: {
    /**
     * @description Autolink config
     */
    config: {
      type: Object,
      required: true
    },
    /**
     * @description Whether it's active only when exact match
     */
    exact: Boolean,
    /**
     * @description Whether to hide externalLinkIcon
     */
    noExternalLinkIcon: Boolean
  },
  emits: {
    focusout: () => true
  },
  setup(props, { attrs, emit, slots }) {
    const route = useRoute();
    const siteData2 = useSiteData();
    const config2 = toRef(props, "config");
    const hasHttpProtocol = computed(() => isLinkHttp(config2.value.link));
    const hasNonHttpProtocol = computed(() => isLinkMailto(config2.value.link) || isLinkTel(config2.value.link));
    const linkTarget = computed(() => hasNonHttpProtocol.value ? void 0 : config2.value.target || (hasHttpProtocol.value ? "_blank" : void 0));
    const isBlankTarget = computed(() => linkTarget.value === "_blank");
    const renderRouterLink = computed(() => !hasHttpProtocol.value && !hasNonHttpProtocol.value && !isBlankTarget.value);
    const anchorRel = computed(() => hasNonHttpProtocol.value ? void 0 : config2.value.rel || (isBlankTarget.value ? "noopener noreferrer" : void 0));
    const linkAriaLabel = computed(() => config2.value.ariaLabel || config2.value.text);
    const shouldBeActiveInSubpath = computed(() => {
      if (props.exact)
        return false;
      const localeKeys = Object.keys(siteData2.value.locales);
      return localeKeys.length ? (
        // check all the locales
        localeKeys.every((key) => key !== config2.value.link)
      ) : (
        // check root
        config2.value.link !== "/"
      );
    });
    const isActive = computed(() => renderRouterLink.value ? config2.value.activeMatch ? new RegExp(config2.value.activeMatch).test(route.path) : (
      // if this link is active in subpath
      !shouldBeActiveInSubpath.value ? route.path === config2.value.link : route.path.startsWith(config2.value.link)
    ) : false);
    return () => {
      var _a2, _b2, _c;
      const { text, icon, link } = config2.value;
      return renderRouterLink.value ? h$4(RouterLink, {
        to: link,
        "aria-label": linkAriaLabel.value,
        ...attrs,
        // class needs to be merged manually
        class: ["nav-link", { active: isActive.value }, attrs["class"]],
        onFocusout: () => emit("focusout")
      }, () => {
        var _a3, _b3, _c2;
        return ((_a3 = slots["default"]) == null ? void 0 : _a3.call(slots)) || [
          ((_b3 = slots["before"]) == null ? void 0 : _b3.call(slots)) || h$4(Icon, { icon }),
          text,
          (_c2 = slots["after"]) == null ? void 0 : _c2.call(slots)
        ];
      }) : h$4("a", {
        href: link,
        rel: anchorRel.value,
        target: linkTarget.value,
        "aria-label": linkAriaLabel.value,
        ...attrs,
        // class needs to be merged manually
        class: ["nav-link", attrs["class"]],
        onFocusout: () => emit("focusout")
      }, ((_a2 = slots["default"]) == null ? void 0 : _a2.call(slots)) || [
        ((_b2 = slots["before"]) == null ? void 0 : _b2.call(slots)) || h$4(Icon, { icon }),
        text,
        props.noExternalLinkIcon ? null : h$4(ExternalLinkIcon),
        (_c = slots["after"]) == null ? void 0 : _c.call(slots)
      ]);
    };
  }
});
const dropdownLink = "";
const DropdownLink = defineComponent({
  name: "NavbarDropdownLink",
  props: {
    /**
     * Dropdown config
     *
     * 下拉列表配置
     */
    config: {
      type: Object,
      required: true
    }
  },
  setup(props, { slots }) {
    const route = useRoute();
    const config2 = toRef(props, "config");
    const dropdownAriaLabel = computed(() => config2.value.ariaLabel || config2.value.text);
    const open = ref(false);
    watch(() => route.path, () => {
      open.value = false;
    });
    const handleDropdown = (event) => {
      const isTriggerByTab = event.detail === 0;
      if (isTriggerByTab)
        open.value = !open.value;
    };
    return () => {
      var _a2;
      return h$4("div", { class: ["dropdown-wrapper", { open: open.value }] }, [
        h$4("button", {
          class: "dropdown-title",
          type: "button",
          "aria-label": dropdownAriaLabel.value,
          onClick: handleDropdown
        }, [
          ((_a2 = slots["title"]) == null ? void 0 : _a2.call(slots)) || h$4("span", { class: "title" }, [
            h$4(Icon, { icon: config2.value.icon }),
            props.config.text
          ]),
          h$4("span", { class: "arrow" }),
          h$4("ul", { class: "nav-dropdown" }, config2.value.children.map((child, index2) => {
            const isLastChild = index2 === config2.value.children.length - 1;
            return h$4("li", { class: "dropdown-item" }, "children" in child ? [
              h$4("h4", { class: "dropdown-subtitle" }, child.link ? h$4(AutoLink, {
                config: child,
                onFocusout: () => {
                  if (
                    // no children
                    child.children.length === 0 && isLastChild
                  )
                    open.value = false;
                }
              }) : h$4("span", child.text)),
              h$4("ul", { class: "dropdown-subitem-wrapper" }, child.children.map((grandchild, grandIndex) => h$4("li", { class: "dropdown-subitem" }, h$4(AutoLink, {
                config: grandchild,
                onFocusout: () => {
                  if (
                    // last item of grandchild
                    grandIndex === child.children.length - 1 && isLastChild
                  )
                    open.value = false;
                }
              }))))
            ] : h$4(AutoLink, {
              config: child,
              onFocusout: () => {
                if (isLastChild)
                  open.value = false;
              }
            }));
          }))
        ])
      ]);
    };
  }
});
const resolveNavbarItem = (item, prefix = "") => {
  if (isString(item))
    return useAutoLink(`${prefix}${item}`);
  if ("children" in item)
    return {
      ...item,
      ...item.link && !isLinkExternal(item.link) ? useAutoLink(`${prefix}${item.link}`) : {},
      children: item.children.map((child) => resolveNavbarItem(child, `${prefix}${item.prefix || ""}`))
    };
  return {
    ...item,
    link: isLinkExternal(item.link) ? item.link : useAutoLink(`${prefix}${item.link}`).link
  };
};
const useNavbarConfig = () => computed(() => (useThemeLocaleData().value.navbar || []).map((item) => resolveNavbarItem(item)));
const useNavbarLanguageDropdown = () => {
  const router = useRouter();
  const routeLocale = useRouteLocale();
  const siteLocale = useSiteLocaleData();
  const themeData2 = useThemeData();
  const themeLocale = useThemeLocaleData();
  return computed(() => {
    const localePaths = Object.keys(siteLocale.value.locales);
    if (localePaths.length < 2)
      return null;
    const { path, fullPath } = router.currentRoute.value;
    const { navbarLocales } = themeLocale.value;
    const languageDropdown = {
      text: "",
      ariaLabel: navbarLocales == null ? void 0 : navbarLocales.selectLangAriaLabel,
      children: localePaths.map((targetLocalePath) => {
        var _a2, _b2, _c;
        const targetSiteLocale = ((_a2 = siteLocale.value.locales) == null ? void 0 : _a2[targetLocalePath]) ?? {};
        const targetThemeLocale = ((_b2 = themeData2.value.locales) == null ? void 0 : _b2[targetLocalePath]) ?? {};
        const targetLang = targetSiteLocale.lang || "";
        const text = ((_c = targetThemeLocale.navbarLocales) == null ? void 0 : _c.langName) ?? targetLang;
        let link;
        if (targetLang === siteLocale.value.lang) {
          link = path;
        } else {
          const targetLocalePage = path.replace(routeLocale.value, targetLocalePath);
          link = // try to link to the corresponding page of current page
          router.getRoutes().some((item) => item.path === targetLocalePage) ? (
            // try to keep current hash across languages
            fullPath.replace(path, targetLocalePage)
          ) : (
            // or fallback to homepage
            targetThemeLocale.home ?? targetLocalePath
          );
        }
        return {
          text,
          link
        };
      })
    };
    return languageDropdown;
  });
};
const useNavbarRepo = () => {
  const themeLocale = useThemeLocaleData();
  const repo = computed(() => themeLocale.value.repo || null);
  const repoLink2 = computed(() => repo.value ? Ft(repo.value) : null);
  const repoType = computed(() => repo.value ? Jt(repo.value) : null);
  const repoLabel = computed(() => repoLink2.value ? themeLocale.value.repoLabel ?? (repoType.value === null ? "Source" : repoType.value) : null);
  return computed(() => {
    if (!repoLink2.value || !repoLabel.value || themeLocale.value.repoDisplay === false)
      return null;
    return {
      type: repoType.value || "Source",
      label: repoLabel.value,
      link: repoLink2.value
    };
  });
};
defineComponent({
  name: "LanguageDropdown",
  setup() {
    const dropdown = useNavbarLanguageDropdown();
    return () => dropdown.value ? h$4("div", { class: "nav-item" }, h$4(DropdownLink, { class: "i18n-dropdown", config: dropdown.value }, {
      title: () => {
        var _a2;
        return h$4(I18nIcon, {
          "aria-label": (_a2 = dropdown.value) == null ? void 0 : _a2.ariaLabel,
          style: {
            width: "1rem",
            height: "1rem",
            verticalAlign: "middle"
          }
        });
      }
    })) : null;
  }
});
const navbarBrand = "";
const NavbarBrand = defineComponent({
  name: "NavbarBrand",
  setup() {
    const routeLocale = useRouteLocale();
    const siteLocale = useSiteLocaleData();
    const themeLocale = useThemeLocaleData();
    const siteBrandLink = computed(() => themeLocale.value.home || routeLocale.value);
    const siteBrandTitle = computed(() => siteLocale.value.title);
    const siteBrandLogo = computed(() => themeLocale.value.logo ? withBase(themeLocale.value.logo) : null);
    const siteBrandLogoDark = computed(() => themeLocale.value.logoDark ? withBase(themeLocale.value.logoDark) : null);
    return () => h$4(RouterLink, { to: siteBrandLink.value, class: "brand" }, () => [
      siteBrandLogo.value ? h$4("img", {
        class: ["logo", { light: Boolean(siteBrandLogoDark.value) }],
        src: siteBrandLogo.value,
        alt: siteBrandTitle.value
      }) : null,
      siteBrandLogoDark.value ? h$4("img", {
        class: ["logo dark"],
        src: siteBrandLogoDark.value,
        alt: siteBrandTitle.value
      }) : null,
      siteBrandTitle.value ? h$4("span", {
        class: [
          "site-name",
          {
            "hide-in-pad": siteBrandLogo.value && themeLocale.value.hideSiteNameOnMobile !== false
          }
        ]
      }, siteBrandTitle.value) : null
    ]);
  }
});
const navbarLinks = "";
const NavbarLinks = defineComponent({
  name: "NavbarLinks",
  setup() {
    const navbarConfig = useNavbarConfig();
    return () => navbarConfig.value.length ? h$4("nav", { class: "nav-links" }, [
      ...navbarConfig.value.map((config2) => h$4("div", { class: "nav-item hide-in-mobile" }, "children" in config2 ? h$4(DropdownLink, { config: config2 }) : h$4(AutoLink, { config: config2 })))
    ]) : null;
  }
});
const navScreenDropdown = "";
const NavScreenDropdown = defineComponent({
  name: "NavScreenDropdown",
  props: {
    /**
     * Navbar Screen Dropdown list config
     *
     * 导航栏下拉列表配置
     */
    config: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const route = useRoute();
    const config2 = toRef(props, "config");
    const dropdownAriaLabel = computed(() => config2.value.ariaLabel || config2.value.text);
    const open = ref(false);
    watch(() => route.path, () => {
      open.value = false;
    });
    const isLastItemOfArray = (item, arr) => arr[arr.length - 1] === item;
    return () => [
      h$4("button", {
        class: ["nav-screen-dropdown-title", { active: open.value }],
        type: "button",
        "aria-label": dropdownAriaLabel.value,
        onClick: () => {
          open.value = !open.value;
        }
      }, [
        h$4("span", { class: "title" }, [
          h$4(Icon, { icon: config2.value.icon }),
          props.config.text
        ]),
        h$4("span", { class: ["arrow", open.value ? "down" : "end"] })
      ]),
      h$4("ul", {
        class: ["nav-screen-dropdown", { hide: !open.value }]
      }, config2.value.children.map((child) => h$4("li", { class: "dropdown-item" }, "children" in child ? [
        h$4("h4", { class: "dropdown-subtitle" }, child.link ? h$4(AutoLink, {
          config: child,
          onFocusout: () => {
            if (isLastItemOfArray(child, config2.value.children) && child.children.length === 0)
              open.value = false;
          }
        }) : h$4("span", child.text)),
        h$4("ul", { class: "dropdown-subitem-wrapper" }, child.children.map((grandchild) => h$4("li", { class: "dropdown-subitem" }, h$4(AutoLink, {
          config: grandchild,
          onFocusout: () => {
            if (isLastItemOfArray(grandchild, child.children) && isLastItemOfArray(child, config2.value.children))
              open.value = false;
          }
        }))))
      ] : h$4(AutoLink, {
        config: child,
        onFocusout: () => {
          if (isLastItemOfArray(child, config2.value.children))
            open.value = false;
        }
      }))))
    ];
  }
});
const navScreenLinks = "";
const NavScreenLinks = defineComponent({
  name: "NavScreenLinks",
  setup() {
    const navbarConfig = useNavbarConfig();
    return () => navbarConfig.value.length ? h$4("nav", { class: "nav-screen-links" }, navbarConfig.value.map((config2) => h$4("div", { class: "navbar-links-item" }, "children" in config2 ? h$4(NavScreenDropdown, { config: config2 }) : h$4(AutoLink, { config: config2 })))) : null;
  }
});
const DarkIcon = () => h$4(P$2, { name: "dark" }, () => h$4("path", {
  d: "M524.8 938.667h-4.267a439.893 439.893 0 0 1-313.173-134.4 446.293 446.293 0 0 1-11.093-597.334A432.213 432.213 0 0 1 366.933 90.027a42.667 42.667 0 0 1 45.227 9.386 42.667 42.667 0 0 1 10.24 42.667 358.4 358.4 0 0 0 82.773 375.893 361.387 361.387 0 0 0 376.747 82.774 42.667 42.667 0 0 1 54.187 55.04 433.493 433.493 0 0 1-99.84 154.88 438.613 438.613 0 0 1-311.467 128z"
}));
DarkIcon.displayName = "DarkIcon";
const LightIcon = () => h$4(P$2, { name: "light" }, () => h$4("path", {
  d: "M952 552h-80a40 40 0 0 1 0-80h80a40 40 0 0 1 0 80zM801.88 280.08a41 41 0 0 1-57.96-57.96l57.96-58a41.04 41.04 0 0 1 58 58l-58 57.96zM512 752a240 240 0 1 1 0-480 240 240 0 0 1 0 480zm0-560a40 40 0 0 1-40-40V72a40 40 0 0 1 80 0v80a40 40 0 0 1-40 40zm-289.88 88.08-58-57.96a41.04 41.04 0 0 1 58-58l57.96 58a41 41 0 0 1-57.96 57.96zM192 512a40 40 0 0 1-40 40H72a40 40 0 0 1 0-80h80a40 40 0 0 1 40 40zm30.12 231.92a41 41 0 0 1 57.96 57.96l-57.96 58a41.04 41.04 0 0 1-58-58l58-57.96zM512 832a40 40 0 0 1 40 40v80a40 40 0 0 1-80 0v-80a40 40 0 0 1 40-40zm289.88-88.08 58 57.96a41.04 41.04 0 0 1-58 58l-57.96-58a41 41 0 0 1 57.96-57.96z"
}));
LightIcon.displayName = "LightIcon";
const AutoIcon = () => h$4(P$2, { name: "auto" }, () => h$4("path", {
  d: "M512 992C246.92 992 32 777.08 32 512S246.92 32 512 32s480 214.92 480 480-214.92 480-480 480zm0-840c-198.78 0-360 161.22-360 360 0 198.84 161.22 360 360 360s360-161.16 360-360c0-198.78-161.22-360-360-360zm0 660V212c165.72 0 300 134.34 300 300 0 165.72-134.28 300-300 300z"
}));
AutoIcon.displayName = "AutoIcon";
const EnterFullScreenIcon = () => h$4(P$2, { name: "enter-fullscreen" }, () => h$4("path", {
  d: "M762.773 90.24h-497.28c-96.106 0-174.4 78.293-174.4 174.4v497.28c0 96.107 78.294 174.4 174.4 174.4h497.28c96.107 0 175.04-78.293 174.4-174.4V264.64c0-96.213-78.186-174.4-174.4-174.4zm-387.2 761.173H215.04c-21.867 0-40.427-17.92-41.067-41.066V649.92c0-22.507 17.92-40.427 40.427-40.427 11.307 0 21.227 4.694 28.48 11.947 7.253 7.253 11.947 17.92 11.947 28.48v62.293l145.28-145.28c15.893-15.893 41.813-15.893 57.706 0 15.894 15.894 15.894 41.814 0 57.707l-145.28 145.28h62.294c22.506 0 40.426 17.92 40.426 40.427s-17.173 41.066-39.68 41.066zM650.24 165.76h160.427c21.866 0 40.426 17.92 41.066 41.067v160.426c0 22.507-17.92 40.427-40.426 40.427-11.307 0-21.227-4.693-28.48-11.947-7.254-7.253-11.947-17.92-11.947-28.48v-62.186L625.6 450.347c-15.893 15.893-41.813 15.893-57.707 0-15.893-15.894-15.893-41.814 0-57.707l145.28-145.28H650.88c-22.507 0-40.427-17.92-40.427-40.427s17.174-41.173 39.787-41.173z"
}));
EnterFullScreenIcon.displayName = "EnterFullScreenIcon";
const CancelFullScreenIcon = () => h$4(P$2, { name: "cancel-fullscreen" }, () => h$4("path", {
  d: "M778.468 78.62H247.922c-102.514 0-186.027 83.513-186.027 186.027V795.08c0 102.514 83.513 186.027 186.027 186.027h530.432c102.514 0 186.71-83.513 186.026-186.027V264.647C964.494 162.02 880.981 78.62 778.468 78.62zM250.88 574.35h171.122c23.324 0 43.122 19.115 43.804 43.805v171.121c0 24.008-19.114 43.122-43.122 43.122-12.06 0-22.641-5.006-30.378-12.743s-12.743-19.115-12.743-30.379V722.83L224.597 877.91c-16.953 16.952-44.6 16.952-61.553 0-16.953-16.954-16.953-44.602 0-61.554L318.009 661.39h-66.446c-24.007 0-43.122-19.114-43.122-43.122 0-24.12 18.432-43.918 42.439-43.918zm521.899-98.873H601.657c-23.325 0-43.122-19.114-43.805-43.804V260.55c0-24.007 19.115-43.122 43.122-43.122 12.06 0 22.642 5.007 30.379 12.743s12.743 19.115 12.743 30.38v66.445l154.965-154.965c16.953-16.953 44.601-16.953 61.554 0 16.953 16.953 16.953 44.6 0 61.554L705.536 388.55h66.446c24.007 0 43.122 19.115 43.122 43.122.114 24.007-18.318 43.804-42.325 43.804z"
}));
CancelFullScreenIcon.displayName = "CancelFullScreenIcon";
const OutlookIcon = () => h$4(P$2, { name: "outlook" }, () => [
  h$4("path", {
    d: "M224 800c0 9.6 3.2 44.8 6.4 54.4 6.4 48-48 76.8-48 76.8s80 41.6 147.2 0 134.4-134.4 38.4-195.2c-22.4-12.8-41.6-19.2-57.6-19.2C259.2 716.8 227.2 761.6 224 800zM560 675.2l-32 51.2c-51.2 51.2-83.2 32-83.2 32 25.6 67.2 0 112-12.8 128 25.6 6.4 51.2 9.6 80 9.6 54.4 0 102.4-9.6 150.4-32l0 0c3.2 0 3.2-3.2 3.2-3.2 22.4-16 12.8-35.2 6.4-44.8-9.6-12.8-12.8-25.6-12.8-41.6 0-54.4 60.8-99.2 137.6-99.2 6.4 0 12.8 0 22.4 0 12.8 0 38.4 9.6 48-25.6 0-3.2 0-3.2 3.2-6.4 0-3.2 3.2-6.4 3.2-6.4 6.4-16 6.4-16 6.4-19.2 9.6-35.2 16-73.6 16-115.2 0-105.6-41.6-198.4-108.8-268.8C704 396.8 560 675.2 560 675.2zM224 419.2c0-28.8 22.4-51.2 51.2-51.2 28.8 0 51.2 22.4 51.2 51.2 0 28.8-22.4 51.2-51.2 51.2C246.4 470.4 224 448 224 419.2zM320 284.8c0-22.4 19.2-41.6 41.6-41.6 22.4 0 41.6 19.2 41.6 41.6 0 22.4-19.2 41.6-41.6 41.6C339.2 326.4 320 307.2 320 284.8zM457.6 208c0-12.8 12.8-25.6 25.6-25.6 12.8 0 25.6 12.8 25.6 25.6 0 12.8-12.8 25.6-25.6 25.6C470.4 233.6 457.6 220.8 457.6 208zM128 505.6C128 592 153.6 672 201.6 736c28.8-60.8 112-60.8 124.8-60.8-16-51.2 16-99.2 16-99.2l316.8-422.4c-48-19.2-99.2-32-150.4-32C297.6 118.4 128 291.2 128 505.6zM764.8 86.4c-22.4 19.2-390.4 518.4-390.4 518.4-22.4 28.8-12.8 76.8 22.4 99.2l9.6 6.4c35.2 22.4 80 12.8 99.2-25.6 0 0 6.4-12.8 9.6-19.2 54.4-105.6 275.2-524.8 288-553.6 6.4-19.2-3.2-32-19.2-32C777.6 76.8 771.2 80 764.8 86.4z"
  })
]);
OutlookIcon.displayName = "OutlookIcon";
const darkModeSymbol = Symbol.for("darkMode");
const useDarkmode = () => {
  const darkmode = inject(darkModeSymbol);
  if (!darkmode) {
    throw new Error("useDarkmode() is called without provider.");
  }
  return darkmode;
};
const injectDarkmode = (app) => {
  const themeData2 = useThemeData();
  const isDarkPreferred = usePreferredDark();
  const status = useStorage("vuepress-theme-hope-scheme", "auto");
  const config2 = computed(() => themeData2.value.darkmode || "switch");
  const isDarkmode = computed(() => {
    const darkmode = config2.value;
    return darkmode === "disable" ? false : (
      // force darkmode
      darkmode === "enable" ? true : (
        // auto
        darkmode === "auto" ? isDarkPreferred.value : (
          // toggle
          darkmode === "toggle" ? status.value === "dark" : (
            // switch
            status.value === "dark" || status.value === "auto" && isDarkPreferred.value
          )
        )
      )
    );
  });
  const canToggle = computed(() => {
    const darkmode = config2.value;
    return darkmode === "switch" || darkmode === "toggle";
  });
  app.provide(darkModeSymbol, {
    canToggle,
    config: config2,
    isDarkmode,
    status
  });
  Object.defineProperties(app.config.globalProperties, {
    $isDarkmode: { get: () => isDarkmode.value }
  });
};
const setupDarkmode = () => {
  const { isDarkmode } = useDarkmode();
  const updateDOM = (isDark = isDarkmode.value) => {
    const html = window == null ? void 0 : window.document.querySelector("html");
    html == null ? void 0 : html.setAttribute("data-theme", isDark ? "dark" : "light");
  };
  onMounted(() => {
    watch(isDarkmode, updateDOM, { immediate: true });
  });
};
const appearanceSwitch = "";
const AppearanceSwitch = defineComponent({
  name: "AppearanceSwitch",
  setup() {
    const { config: config2, status } = useDarkmode();
    const toggleDarkMode = () => {
      if (config2.value === "switch") {
        status.value = {
          light: "dark",
          dark: "auto",
          auto: "light"
        }[status.value];
      } else
        status.value = status.value === "light" ? "dark" : "light";
    };
    return () => h$4("button", {
      id: "appearance-switch",
      onClick: () => toggleDarkMode()
    }, [
      h$4(AutoIcon, {
        style: {
          display: status.value === "auto" ? "block" : "none"
        }
      }),
      h$4(DarkIcon, {
        style: {
          display: status.value === "dark" ? "block" : "none"
        }
      }),
      h$4(LightIcon, {
        style: {
          display: status.value === "light" ? "block" : "none"
        }
      })
    ]);
  }
});
const AppearanceMode = defineComponent({
  name: "AppearanceMode",
  setup() {
    const themeLocale = useThemeLocaleData();
    const { canToggle } = useDarkmode();
    const locale = computed(() => themeLocale.value.outlookLocales.darkmode);
    return () => canToggle.value ? h$4("div", { class: "appearance-wrapper" }, [
      h$4("label", { class: "appearance-title", for: "appearance-switch" }, locale.value),
      h$4(AppearanceSwitch)
    ]) : null;
  }
});
const themeColorPicker = "";
const ThemeColorPicker = defineComponent({
  name: "ThemeColorPicker",
  props: {
    /**
     * Theme color picker config
     *
     * 主题色选择器配置
     */
    themeColor: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const setThemeColor = (theme = "") => {
      const classes = document.documentElement.classList;
      const themes = Object.keys(props.themeColor).map((color) => `theme-${color}`);
      if (!theme) {
        localStorage.removeItem("theme");
        classes.remove(...themes);
        return;
      }
      classes.remove(...themes.filter((themeColorClass) => themeColorClass !== `theme-${theme}`));
      classes.add(`theme-${theme}`);
      localStorage.setItem("theme", theme);
    };
    onMounted(() => {
      const theme = localStorage.getItem("theme");
      if (theme)
        setThemeColor(theme);
    });
    return () => h$4("ul", { id: "theme-color-picker" }, [
      h$4("li", h$4("span", {
        class: "theme-color",
        onClick: () => setThemeColor()
      })),
      ...Object.entries(props.themeColor).map(([color, value]) => h$4("li", h$4("span", {
        style: { background: value },
        onClick: () => setThemeColor(color)
      })))
    ]);
  }
});
const ThemeColor = defineComponent({
  name: "ThemeColor",
  setup() {
    const themeData2 = useThemeData();
    const themeLocale = useThemeLocaleData();
    const locale = computed(() => themeLocale.value.outlookLocales.themeColor);
    const themeColor = computed(() => {
      const { themeColor: themeColor2 } = themeData2.value;
      return themeColor2 === false ? null : themeColor2;
    });
    return () => themeColor.value ? h$4("div", { class: "theme-color-wrapper" }, [
      h$4("label", { class: "theme-color-title", for: "theme-color-picker" }, locale.value),
      h$4(ThemeColorPicker, { themeColor: themeColor.value })
    ]) : null;
  }
});
const toggleFullScreenButton = "";
const ToggleFullScreenButton = defineComponent({
  name: "ToggleFullScreenButton",
  setup() {
    const themeLocale = useThemeLocaleData();
    const { isSupported, isFullscreen, toggle } = useFullscreen();
    const fullscreenLocale = computed(() => themeLocale.value.outlookLocales.fullscreen);
    return () => isSupported ? h$4("div", { class: "fullscreen-wrapper" }, [
      h$4("label", { class: "full-screen-title", for: "full-screen-switch" }, fullscreenLocale.value),
      h$4("button", {
        class: "full-screen",
        id: "full-screen-switch",
        ariaPressed: isFullscreen.value,
        onClick: () => toggle()
      }, isFullscreen.value ? h$4(CancelFullScreenIcon) : h$4(EnterFullScreenIcon))
    ]) : null;
  }
});
const OutlookSettings = defineComponent({
  name: "OutlookSettings",
  setup() {
    const themeData2 = useThemeData();
    const pure = usePure();
    const enableThemeColor = computed(() => !pure.value && Boolean(themeData2.value.themeColor));
    const enableFullScreen = computed(() => !pure.value && themeData2.value.fullscreen);
    return () => h$4(ClientOnly, () => [
      enableThemeColor.value ? h$4(ThemeColor) : null,
      h$4(AppearanceMode),
      enableFullScreen.value ? h$4(ToggleFullScreenButton) : null
    ]);
  }
});
const navScreen = "";
const NavScreen = defineComponent({
  name: "NavScreen",
  props: {
    /**
     * Whether to show the screen
     *
     * 是否显示
     */
    show: Boolean
  },
  emits: {
    close: () => true
  },
  setup(props, { emit, slots }) {
    const route = useRoute();
    const { isMobile } = useWindowSize();
    const screen = ref();
    onMounted(() => {
      watch(isMobile, (value) => {
        if (!value && props.show) {
          clearAllBodyScrollLocks();
          emit("close");
        }
      });
      watch(() => route.path, () => {
        clearAllBodyScrollLocks();
        emit("close");
      });
    });
    onBeforeUnmount(() => {
      clearAllBodyScrollLocks();
    });
    return () => h$4(Transition, {
      name: "fade",
      onEnter: () => disableBodyScroll(screen.value, { reserveScrollBarGap: true }),
      onAfterLeave: () => clearAllBodyScrollLocks()
    }, () => {
      var _a2, _b2;
      return props.show ? h$4("div", { id: "nav-screen", ref: screen }, h$4("div", { class: "container" }, [
        (_a2 = slots["before"]) == null ? void 0 : _a2.call(slots),
        h$4(NavScreenLinks),
        h$4("div", { class: "outlook-wrapper" }, h$4(OutlookSettings)),
        (_b2 = slots["after"]) == null ? void 0 : _b2.call(slots)
      ])) : null;
    });
  }
});
const outlookButton = "";
const OutlookButton = defineComponent({
  name: "OutlookButton",
  setup() {
    const { isSupported } = useFullscreen();
    const themeData2 = useThemeData();
    const pure = usePure();
    const route = useRoute();
    const { canToggle } = useDarkmode();
    const open = ref(false);
    const enableThemeColor = computed(() => !pure.value && Boolean(themeData2.value.themeColor));
    const enableFullScreen = computed(() => !pure.value && themeData2.value.fullscreen && isSupported);
    watch(() => route.path, () => {
      open.value = false;
    });
    return () => canToggle.value || enableFullScreen.value || enableThemeColor.value ? h$4(
      "div",
      { class: "nav-item hide-in-mobile" },
      // only AppearanceSwitch is enabled
      canToggle.value && !enableFullScreen.value && !enableThemeColor.value ? h$4(AppearanceSwitch) : (
        // only FullScreen is enabled
        enableFullScreen.value && !canToggle.value && !enableThemeColor.value ? h$4(ToggleFullScreenButton) : h$4("button", {
          class: ["outlook-button", { open: open.value }],
          tabindex: "-1",
          ariaHidden: true
        }, [
          h$4(OutlookIcon),
          h$4("div", { class: "outlook-dropdown" }, h$4(OutlookSettings))
        ])
      )
    ) : null;
  }
});
const toggleNavbarButton = "";
const ToggleNavbarButton = ({ active = false }, { emit }) => h$4("button", {
  class: ["toggle-navbar-button", { "is-active": active }],
  "aria-label": "Toggle Navbar",
  "aria-expanded": active,
  "aria-controls": "nav-screen",
  onClick: () => emit("toggle")
}, h$4("span", { class: "button-container" }, [
  h$4("span", { class: "button-top" }),
  h$4("span", { class: "button-middle" }),
  h$4("span", { class: "button-bottom" })
]));
ToggleNavbarButton.displayName = "ToggleNavbarButton";
const toggleSidebarButton = "";
const ToggleSidebarButton = (_2, { emit }) => h$4("button", {
  class: "toggle-sidebar-button",
  title: "Toggle Sidebar",
  onClick: () => emit("toggle")
}, h$4("span", { class: "icon" }));
ToggleSidebarButton.displayName = "ToggleSidebarButton";
ToggleSidebarButton.emits = ["toggle"];
const repoLink = "";
const RepoLink = defineComponent({
  name: "RepoLink",
  components: { BitbucketIcon: gt, GiteeIcon: $t, GitHubIcon: vt, GitlabIcon: pt, SourceIcon: yt },
  setup() {
    const repo = useNavbarRepo();
    return () => repo.value ? h$4("div", { class: "nav-item" }, h$4("a", {
      class: "repo-link",
      href: repo.value.link,
      target: "_blank",
      rel: "noopener noreferrer",
      "aria-label": repo.value.label
    }, h$4(resolveComponent(`${repo.value.type}Icon`), {
      style: {
        width: "1.25rem",
        height: "1.25rem",
        verticalAlign: "middle"
      }
    }))) : null;
  }
});
const navbar = "";
const Navbar = defineComponent({
  name: "NavBar",
  emits: {
    toggleSidebar: () => true
  },
  setup(_props, { emit, slots }) {
    const themeLocale = useThemeLocaleData();
    const { isMobile } = useWindowSize();
    const showScreen = ref(false);
    const autoHide = computed(() => {
      const { navbarAutoHide = "mobile" } = themeLocale.value;
      return navbarAutoHide !== "none" && (navbarAutoHide === "always" || isMobile.value);
    });
    const navbarLayout = computed(() => themeLocale.value.navbarLayout || {
      start: ["Brand"],
      center: ["Links"],
      end: ["Language", "Repo", "Outlook", "Search"]
    });
    return () => {
      var _a2, _b2, _c, _d, _e, _f;
      const map = {
        Brand: h$4(NavbarBrand),
        Language: null,
        Links: h$4(NavbarLinks),
        Repo: h$4(RepoLink),
        Outlook: h$4(OutlookButton),
        Search: _t("Docsearch") ? h$4(resolveComponent("Docsearch")) : _t("SearchBox") ? h$4(resolveComponent("SearchBox")) : _t("SearchBox") ? h$4(resolveComponent("SearchBox")) : null
      };
      return [
        h$4("header", {
          class: [
            "navbar",
            {
              "auto-hide": autoHide.value,
              "hide-icon": themeLocale.value.navbarIcon === false
            }
          ],
          id: "navbar"
        }, [
          h$4("div", { class: "navbar-start" }, [
            // @ts-ignore
            h$4(ToggleSidebarButton, {
              onToggle: () => {
                if (showScreen.value)
                  showScreen.value = false;
                emit("toggleSidebar");
              }
            }),
            (_a2 = slots["startBefore"]) == null ? void 0 : _a2.call(slots),
            ...(navbarLayout.value.start || []).map((item) => map[item]),
            (_b2 = slots["startAfter"]) == null ? void 0 : _b2.call(slots)
          ]),
          h$4("div", { class: "navbar-center" }, [
            (_c = slots["centerBefore"]) == null ? void 0 : _c.call(slots),
            ...(navbarLayout.value.center || []).map((item) => map[item]),
            (_d = slots["centerAfter"]) == null ? void 0 : _d.call(slots)
          ]),
          h$4("div", { class: "navbar-end" }, [
            (_e = slots["endBegin"]) == null ? void 0 : _e.call(slots),
            ...(navbarLayout.value.end || []).map((item) => map[item]),
            (_f = slots["endAfter"]) == null ? void 0 : _f.call(slots),
            h$4(ToggleNavbarButton, {
              active: showScreen.value,
              onToggle: () => {
                showScreen.value = !showScreen.value;
              }
            })
          ])
        ]),
        h$4(NavScreen, {
          show: showScreen.value,
          onClose: () => {
            showScreen.value = false;
          }
        }, {
          before: () => {
            var _a3;
            return (_a3 = slots["screenTop"]) == null ? void 0 : _a3.call(slots);
          },
          after: () => {
            var _a3;
            return (_a3 = slots["screenBottom"]) == null ? void 0 : _a3.call(slots);
          }
        })
      ];
    };
  }
});
const isActiveSidebarItem = (route, item, exact = false) => {
  if ("activeMatch" in item)
    return new RegExp(item.activeMatch).test(route.path);
  if (Rt(route, item.link))
    return true;
  if (item.children && !exact)
    return item.children.some((child) => isActiveSidebarItem(route, child));
  return false;
};
const isMatchedSidebarItem = (route, item) => {
  if (item.type === "group")
    return item.children.some((child) => {
      if (child.type === "group")
        return isMatchedSidebarItem(route, child);
      return child.type === "page" && isActiveSidebarItem(route, child, true);
    }) || "prefix" in item && Rt(route, item.prefix);
  return false;
};
const renderItem = (config2, props) => config2.link ? (
  // if the item has link, render it as `<AutoLink>`
  h$4(AutoLink, {
    ...props,
    config: config2
  })
) : (
  // if the item only has text, render it as `<p>`
  h$4("p", props, [h$4(Icon, { icon: config2.icon }), config2.text])
);
const renderChildren$1 = (children) => {
  const route = useRoute();
  if (!children)
    return null;
  return h$4("ul", { class: "sidebar-sub-headers" }, children.map((child) => {
    const active = isActiveSidebarItem(route, child, true);
    return h$4("li", { class: "sidebar-sub-header" }, [
      renderItem(child, {
        class: ["sidebar-link", "heading", { active }]
      }),
      renderChildren$1(child.children)
    ]);
  }));
};
const sidebarData = {};
const resolvePrefix = (prefix = "", path = "") => ue(path) ? path : `${ensureEndingSlash(prefix)}${path}`;
const headerToSidebarItem = (header, headerDepth) => {
  const page2 = usePageData();
  return {
    type: "heading",
    text: header.title,
    link: `${page2.value.path}#${header.slug}`,
    children: headersToSidebarItemChildren(header.children, headerDepth)
  };
};
const headersToSidebarItemChildren = (headers, headerDepth) => headerDepth > 0 ? headers.map((header) => headerToSidebarItem(header, headerDepth - 1)) : [];
const resolveHeadingSidebarItems = (headerDepth) => {
  const page2 = usePageData();
  return headersToSidebarItemChildren(page2.value.headers, headerDepth);
};
const resolveArraySidebarItems = (sidebarConfig, headerDepth, prefix = "") => {
  const page2 = usePageData();
  const route = useRoute();
  const handleChildItem = (item, pathPrefix = prefix) => {
    var _a2;
    const childItem = isString(item) ? useAutoLink(resolvePrefix(pathPrefix, item)) : item.link ? {
      ...item,
      ...!isLinkExternal(item.link) ? { link: useAutoLink(resolvePrefix(pathPrefix, item.link)).link } : {}
    } : item;
    if ("children" in childItem) {
      const prefix2 = resolvePrefix(pathPrefix, childItem.prefix);
      const children = childItem.children === "structure" ? sidebarData[prefix2] : childItem.children;
      return {
        type: "group",
        ...childItem,
        prefix: prefix2,
        children: children.map((item2) => handleChildItem(item2, prefix2))
      };
    }
    return {
      type: "page",
      ...childItem,
      children: (
        // if the sidebar item is current page and children is not set
        // use headers of current page as children
        childItem.link === route.path ? headersToSidebarItemChildren(
          // skip h1 header
          ((_a2 = page2.value.headers[0]) == null ? void 0 : _a2.level) === 1 ? page2.value.headers[0].children : page2.value.headers,
          headerDepth
        ) : []
      )
    };
  };
  return sidebarConfig.map((item) => handleChildItem(item));
};
const resolveMultiSidebarItems = (sidebarConfig, headerDepth) => {
  const route = useRoute();
  const keys = Object.keys(sidebarConfig).sort((x2, y2) => y2.length - x2.length);
  for (const base of keys) {
    if (decodeURI(route.path).startsWith(base)) {
      const matchedConfig = sidebarConfig[base];
      return matchedConfig ? resolveArraySidebarItems(matchedConfig === "structure" ? sidebarData[base] : matchedConfig === "heading" ? resolveHeadingSidebarItems(headerDepth) : matchedConfig, headerDepth, base) : [];
    }
  }
  console.warn(`${route.path} is missing sidebar config.`);
  return [];
};
const resolveSidebarItems = () => {
  const routeLocale = useRouteLocale();
  const frontmatter = usePageFrontmatter();
  const themeLocale = useThemeLocaleData();
  const sidebarConfig = frontmatter.value.home ? false : frontmatter.value.sidebar ?? themeLocale.value.sidebar ?? "structure";
  const headerDepth = frontmatter.value.headerDepth ?? themeLocale.value.headerDepth ?? 2;
  return sidebarConfig === false ? [] : sidebarConfig === "heading" ? resolveHeadingSidebarItems(headerDepth) : sidebarConfig === "structure" ? resolveArraySidebarItems(sidebarData[routeLocale.value], headerDepth, routeLocale.value) : isArray(sidebarConfig) ? resolveArraySidebarItems(sidebarConfig, headerDepth) : isPlainObject(sidebarConfig) ? resolveMultiSidebarItems(sidebarConfig, headerDepth) : [];
};
const sidebarItemsSymbol = Symbol.for("sidebarItems");
const setupSidebarItems = () => {
  const sidebarItems = computed(() => resolveSidebarItems());
  provide(sidebarItemsSymbol, sidebarItems);
};
const useSidebarItems = () => {
  const sidebarItems = inject(sidebarItemsSymbol);
  if (!sidebarItems) {
    throw new Error("useSidebarItems() is called without provider.");
  }
  return sidebarItems;
};
const sidebarChild = "";
const SidebarChild = defineComponent({
  name: "SidebarChild",
  props: {
    /**
     * Sidebar item config
     *
     * 侧边栏项目配置
     */
    config: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const route = useRoute();
    return () => [
      renderItem(props.config, {
        class: [
          "sidebar-link",
          `sidebar-${props.config.type}`,
          { active: isActiveSidebarItem(route, props.config, true) }
        ],
        exact: true
      }),
      renderChildren$1(props.config.children)
    ];
  }
});
const sidebarGroup = "";
const SidebarGroup = defineComponent({
  name: "SidebarGroup",
  props: {
    /**
     * Sidebar group item config
     *
     * 侧边栏分组配置
     */
    config: {
      type: Object,
      required: true
    },
    /**
     * Whether current group is open
     *
     * 当前分组是否展开
     */
    open: {
      type: Boolean,
      required: true
    }
  },
  emits: {
    toggle: () => true
  },
  setup(props, { emit }) {
    const route = useRoute();
    const active = computed(() => isActiveSidebarItem(route, props.config));
    const exact = computed(() => isActiveSidebarItem(route, props.config, true));
    return () => {
      const { collapsible, children = [], icon, prefix, link, text } = props.config;
      return h$4("section", { class: "sidebar-group" }, [
        h$4(collapsible ? "button" : "p", {
          class: [
            "sidebar-heading",
            {
              clickable: collapsible || link,
              exact: exact.value,
              active: active.value
            }
          ],
          ...collapsible ? {
            onClick: () => emit("toggle"),
            onKeydown: (event) => {
              if (event.key === "Enter")
                emit("toggle");
            }
          } : {}
        }, [
          // icon
          h$4(Icon, { icon }),
          // title
          link ? h$4(RouterLink, { to: link, class: "title" }, () => text) : h$4("span", { class: "title" }, text),
          // arrow
          collapsible ? h$4("span", { class: ["arrow", props.open ? "down" : "end"] }) : null
        ]),
        props.open || !collapsible ? h$4(SidebarLinks, { key: prefix, config: children }) : null
      ]);
    };
  }
});
const sidebarLinks = "";
const SidebarLinks = defineComponent({
  name: "SidebarLinks",
  props: {
    /**
     * Sidebar links config
     *
     * 侧边栏链接配置
     */
    config: {
      type: Array,
      required: true
    }
  },
  setup(props) {
    const route = useRoute();
    const openGroupIndex = ref(-1);
    const toggleGroup = (index2) => {
      openGroupIndex.value = index2 === openGroupIndex.value ? -1 : index2;
    };
    watch(() => route.path, () => {
      const index2 = props.config.findIndex((item) => isMatchedSidebarItem(route, item));
      openGroupIndex.value = index2;
    }, { immediate: true, flush: "post" });
    return () => h$4("ul", { class: "sidebar-links" }, props.config.map((config2, index2) => h$4("li", config2.type === "group" ? h$4(SidebarGroup, {
      config: config2,
      open: index2 === openGroupIndex.value,
      onToggle: () => toggleGroup(index2)
    }) : h$4(SidebarChild, { config: config2 }))));
  }
});
const sidebar = "";
const Sidebar = defineComponent({
  name: "SideBar",
  setup(_props, { slots }) {
    const route = useRoute();
    const themeLocale = useThemeLocaleData();
    const sidebarItems = useSidebarItems();
    const sidebar2 = ref();
    onMounted(() => {
      watch(() => route.hash, (hash) => {
        const activeSidebarItem = document.querySelector(`.sidebar a.sidebar-link[href="${route.path}${hash}"]`);
        if (!activeSidebarItem)
          return;
        const { top: sidebarTop, height: sidebarHeight } = sidebar2.value.getBoundingClientRect();
        const { top: activeSidebarItemTop, height: activeSidebarItemHeight } = activeSidebarItem.getBoundingClientRect();
        if (activeSidebarItemTop < sidebarTop)
          activeSidebarItem.scrollIntoView(true);
        else if (activeSidebarItemTop + activeSidebarItemHeight > sidebarTop + sidebarHeight)
          activeSidebarItem.scrollIntoView(false);
      });
    });
    return () => {
      var _a2, _b2, _c;
      return h$4("aside", {
        class: [
          "sidebar",
          { "hide-icon": themeLocale.value.sidebarIcon === false }
        ],
        id: "sidebar",
        ref: sidebar2
      }, [
        (_a2 = slots["top"]) == null ? void 0 : _a2.call(slots),
        ((_b2 = slots["default"]) == null ? void 0 : _b2.call(slots)) || h$4(SidebarLinks, { config: sidebarItems.value }),
        (_c = slots["bottom"]) == null ? void 0 : _c.call(slots)
      ]);
    };
  }
});
const common = "";
const CommonWrapper = defineComponent({
  name: "CommonWrapper",
  props: {
    /**
     * Whether disable navbar
     *
     * 是否禁用导航栏
     */
    noNavbar: Boolean,
    /**
     * Whether disable sidebar
     *
     * 是否禁用侧边栏
     */
    noSidebar: Boolean
  },
  setup(props, { slots }) {
    const router = useRouter();
    const page2 = usePageData();
    const frontmatter = usePageFrontmatter();
    const themeLocale = useThemeLocaleData();
    const { isMobile, isWide } = useWindowSize();
    const hideNavbar = ref(false);
    const enableNavbar = computed(() => {
      if (props.noNavbar)
        return false;
      if (frontmatter.value.navbar === false || themeLocale.value.navbar === false)
        return false;
      return Boolean(page2.value.title || themeLocale.value.logo || themeLocale.value.repo || themeLocale.value.navbar);
    });
    const sidebarItems = useSidebarItems();
    const enableSidebar = computed(() => {
      if (props.noSidebar)
        return false;
      return frontmatter.value.sidebar !== false && sidebarItems.value.length !== 0 && !frontmatter.value.home;
    });
    const isMobileSidebarOpen = ref(false);
    const isDesktopSidebarCollapsed = ref(false);
    const toggleMobileSidebar = (value) => {
      isMobileSidebarOpen.value = typeof value === "boolean" ? value : !isMobileSidebarOpen.value;
    };
    const toggleDesktopSidebar = (value) => {
      isDesktopSidebarCollapsed.value = typeof value === "boolean" ? value : !isDesktopSidebarCollapsed.value;
    };
    const touchStart = { x: 0, y: 0 };
    const onTouchStart = (e2) => {
      touchStart.x = e2.changedTouches[0].clientX;
      touchStart.y = e2.changedTouches[0].clientY;
    };
    const onTouchEnd = (e2) => {
      const dx = e2.changedTouches[0].clientX - touchStart.x;
      const dy = e2.changedTouches[0].clientY - touchStart.y;
      if (
        // horizontal swipe
        Math.abs(dx) > Math.abs(dy) * 1.5 && Math.abs(dx) > 40
      ) {
        if (dx > 0 && touchStart.x <= 80)
          toggleMobileSidebar(true);
        else
          toggleMobileSidebar(false);
      }
    };
    const enableToc = computed(() => frontmatter.value.home ? false : frontmatter.value.toc || themeLocale.value.toc !== false && frontmatter.value.toc !== false);
    const getScrollTop = () => window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    let unregisterRouterHook;
    let lastDistance = 0;
    useEventListener("scroll", useThrottleFn(() => {
      const distance = getScrollTop();
      if (lastDistance < distance && distance > 58) {
        if (!isMobileSidebarOpen.value)
          hideNavbar.value = true;
      } else
        hideNavbar.value = false;
      lastDistance = distance;
    }, 300, true));
    watch(isMobile, (value) => {
      if (!value)
        toggleMobileSidebar(false);
    });
    onMounted(() => {
      unregisterRouterHook = router.afterEach(() => {
        toggleMobileSidebar(false);
      });
    });
    onBeforeUnmount(() => {
      unregisterRouterHook();
    });
    return () => h$4(_t("GlobalEncrypt") ? resolveComponent("GlobalEncrypt") : Ct, () => {
      var _a2;
      return h$4("div", {
        class: [
          "theme-container",
          // classes
          {
            "no-navbar": !enableNavbar.value,
            "no-sidebar": !enableSidebar.value && !(slots["sidebar"] || slots["sidebarTop"] || slots["sidebarBottom"]),
            "has-toc": enableToc.value,
            "hide-navbar": hideNavbar.value,
            "sidebar-collapsed": !isMobile.value && !isWide.value && isDesktopSidebarCollapsed.value,
            "sidebar-open": isMobile.value && isMobileSidebarOpen.value
          },
          frontmatter.value.containerClass || ""
        ],
        onTouchStart,
        onTouchEnd
      }, [
        // navbar
        enableNavbar.value ? h$4(Navbar, { onToggleSidebar: () => toggleMobileSidebar() }, {
          startBefore: () => {
            var _a3;
            return (_a3 = slots["navbarStartBefore"]) == null ? void 0 : _a3.call(slots);
          },
          startAfter: () => {
            var _a3;
            return (_a3 = slots["navbarStartAfter"]) == null ? void 0 : _a3.call(slots);
          },
          centerBefore: () => {
            var _a3;
            return (_a3 = slots["navbarCenterBefore"]) == null ? void 0 : _a3.call(slots);
          },
          centerAfter: () => {
            var _a3;
            return (_a3 = slots["navbarCenterAfter"]) == null ? void 0 : _a3.call(slots);
          },
          endBegin: () => {
            var _a3;
            return (_a3 = slots["navbarEndBegin"]) == null ? void 0 : _a3.call(slots);
          },
          endAfter: () => {
            var _a3;
            return (_a3 = slots["navbarEndAfter"]) == null ? void 0 : _a3.call(slots);
          },
          screenTop: () => {
            var _a3;
            return (_a3 = slots["navScreenTop"]) == null ? void 0 : _a3.call(slots);
          },
          screenBottom: () => {
            var _a3;
            return (_a3 = slots["navScreenBottom"]) == null ? void 0 : _a3.call(slots);
          }
        }) : null,
        // sidebar mask
        h$4(Transition, { name: "fade" }, () => isMobileSidebarOpen.value ? h$4("div", {
          class: "sidebar-mask",
          onClick: () => toggleMobileSidebar(false)
        }) : null),
        // toggle sidebar button
        h$4(Transition, { name: "fade" }, () => isMobile.value ? null : h$4("div", {
          class: "toggle-sidebar-wrapper",
          onClick: () => toggleDesktopSidebar()
        }, h$4("span", {
          class: [
            "arrow",
            isDesktopSidebarCollapsed.value ? "end" : "start"
          ]
        }))),
        // sidebar
        h$4(Sidebar, {}, {
          ...slots["sidebar"] ? {
            default: () => {
              var _a3;
              return (_a3 = slots["sidebar"]) == null ? void 0 : _a3.call(slots);
            }
          } : {},
          top: () => {
            var _a3;
            return (_a3 = slots["sidebarTop"]) == null ? void 0 : _a3.call(slots);
          },
          bottom: () => {
            var _a3;
            return (_a3 = slots["sidebarBottom"]) == null ? void 0 : _a3.call(slots);
          }
        }),
        (_a2 = slots["default"]) == null ? void 0 : _a2.call(slots),
        h$4(PageFooter)
      ]);
    });
  }
});
const DropTransition = defineComponent({
  name: "DropTransition",
  props: {
    /**
     * @description Transition type
     */
    type: {
      type: String,
      default: "single"
    },
    /**
     * @description Transition delay
     */
    delay: { type: Number, default: 0 },
    /**
     * @description Transition duration
     */
    duration: { type: Number, default: 0.25 },
    /**
     * @description appear
     */
    appear: Boolean
  },
  setup(props, { slots }) {
    const setStyle = (item) => {
      item.style.transition = `transform ${props.duration}s ease-in-out ${props.delay}s, opacity ${props.duration}s ease-in-out ${props.delay}s`;
      item.style.transform = "translateY(-20px)";
      item.style.opacity = "0";
    };
    const unsetStyle = (item) => {
      item.style.transform = "translateY(0)";
      item.style.opacity = "1";
    };
    return () => h$4(
      // @ts-ignore
      props.type === "single" ? Transition : TransitionGroup,
      {
        name: "drop",
        appear: props.appear,
        onAppear: setStyle,
        onAfterAppear: unsetStyle,
        onEnter: setStyle,
        onAfterEnter: unsetStyle,
        onBeforeLeave: setStyle
      },
      () => {
        var _a2;
        return (_a2 = slots["default"]) == null ? void 0 : _a2.call(slots);
      }
    );
  }
});
const featurePanel = "";
const FeaturePanel = defineComponent({
  name: "FeaturePanel",
  props: {
    /**
     * Feature config
     */
    items: {
      type: Object,
      default: () => []
    },
    /**
     * Feature header
     */
    header: {
      type: String,
      default: ""
    }
  },
  setup(props) {
    return () => h$4("div", { class: "feature-panel" }, [
      props.header ? h$4("h2", { class: "feature-header" }, props.header) : null,
      props.items.length ? h$4("div", { class: "feature-wrapper" }, props.items.map((feature) => {
        const children = [
          h$4("h3", [
            h$4(Icon, { icon: feature.icon }),
            h$4("span", { innerHTML: feature.title })
          ]),
          h$4("p", { innerHTML: feature.details })
        ];
        return feature.link ? isLinkExternal(feature.link) ? h$4("a", {
          class: "feature-item link",
          href: feature.link,
          role: "navigation",
          "aria-label": feature.title,
          target: "_blank"
        }, children) : h$4(RouterLink, {
          class: "feature-item link",
          to: feature.link,
          role: "navigation",
          "aria-label": feature.title
        }, () => children) : h$4("div", { class: "feature-item" }, children);
      })) : null
    ]);
  }
});
const heroInfo = "";
const HeroInfo = defineComponent({
  name: "HeroInfo",
  setup(_props, { slots }) {
    const frontmatter = usePageFrontmatter();
    const siteLocale = useSiteLocaleData();
    const heroText = computed(() => {
      if (frontmatter.value.heroText === false)
        return false;
      return frontmatter.value.heroText || siteLocale.value.title || "Hello";
    });
    const tagline = computed(() => {
      if (frontmatter.value.tagline === false)
        return false;
      return frontmatter.value.tagline || siteLocale.value.description || "Welcome to your VuePress site";
    });
    const heroImage = computed(() => {
      if (!frontmatter.value.heroImage)
        return null;
      return withBase(frontmatter.value.heroImage);
    });
    const heroImageDark = computed(() => {
      if (!frontmatter.value.heroImageDark)
        return null;
      return withBase(frontmatter.value.heroImageDark);
    });
    const heroAlt = computed(() => frontmatter.value.heroAlt || heroText.value || "hero");
    const actions = computed(() => frontmatter.value.actions ?? []);
    return () => {
      var _a2, _b2;
      return h$4("header", { class: "hero-info-wrapper" }, [
        ((_a2 = slots["heroImage"]) == null ? void 0 : _a2.call(slots)) || h$4(DropTransition, { appear: true, type: "group" }, () => [
          heroImage.value ? h$4("img", {
            key: "light",
            class: { light: heroImageDark.value },
            src: heroImage.value,
            alt: heroAlt.value
          }) : null,
          heroImageDark.value ? h$4("img", {
            key: "dark",
            class: "dark",
            src: heroImageDark.value,
            alt: heroAlt.value
          }) : null
        ]),
        ((_b2 = slots["heroInfo"]) == null ? void 0 : _b2.call(slots)) || h$4("div", { class: "hero-info" }, [
          heroText.value ? h$4(DropTransition, { appear: true, delay: 0.04 }, () => h$4("h1", { id: "main-title" }, heroText.value)) : null,
          tagline.value ? h$4(DropTransition, { appear: true, delay: 0.08 }, () => h$4("p", { class: "description" }, tagline.value)) : null,
          actions.value.length ? h$4(DropTransition, { appear: true, delay: 0.12 }, () => h$4("p", { class: "actions" }, actions.value.map((action) => h$4(AutoLink, {
            class: ["action-button", action.type || "default"],
            config: action,
            noExternalLinkIcon: true
          })))) : null
        ])
      ]);
    };
  }
});
const MarkdownContent = ({ custom }) => h$4(Content, { class: ["theme-hope-content", { custom }] });
MarkdownContent.displayName = "MarkdownContent";
MarkdownContent.props = {
  custom: Boolean
};
const homePage = "";
const HomePage = defineComponent({
  name: "HopePage",
  setup(_props, { slots }) {
    const pure = usePure();
    const frontmatter = usePageFrontmatter();
    const features = computed(() => {
      const { features: features2 } = frontmatter.value;
      if (isArray(features2))
        return features2.some((item) => !("items" in item)) ? [{ items: features2 }] : features2;
      return [];
    });
    return () => {
      var _a2, _b2, _c;
      return h$4("main", {
        class: ["home project", { pure: pure.value }],
        id: "main-content",
        "aria-labelledby": frontmatter.value.heroText === null ? void 0 : "main-title"
      }, [
        (_a2 = slots["top"]) == null ? void 0 : _a2.call(slots),
        h$4(HeroInfo),
        features.value.map(({ header = "", items }, index2) => h$4(DropTransition, { appear: true, delay: 0.16 + index2 * 0.08 }, () => h$4(FeaturePanel, { header, items }))),
        (_b2 = slots["center"]) == null ? void 0 : _b2.call(slots),
        h$4(DropTransition, { appear: true, delay: 0.16 + features.value.length * 0.08 }, () => h$4(MarkdownContent)),
        (_c = slots["bottom"]) == null ? void 0 : _c.call(slots)
      ]);
    };
  }
});
const getAncestorLinks = (route, routeLocale) => {
  const routePaths = route.path.replace(routeLocale, "/").split("/");
  const links = [];
  let link = removeEndingSlash(routeLocale);
  routePaths.forEach((element, index2) => {
    if (index2 !== routePaths.length - 1) {
      link += `${element}/`;
      links.push(link);
    } else if (element !== "") {
      link += element;
      links.push(link);
    }
  });
  return links;
};
const breadcrumb = "";
const BreadCrumb = defineComponent({
  name: "BreadCrumb",
  setup() {
    const router = useRouter();
    const route = useRoute();
    const routeLocale = useRouteLocale();
    const frontmatter = usePageFrontmatter();
    const themeLocale = useThemeLocaleData();
    const config2 = ref([]);
    const enable = computed(() => {
      return (frontmatter.value.breadcrumb || frontmatter.value.breadcrumb !== false && themeLocale.value.breadcrumb !== false) && config2.value.length > 1;
    });
    const iconEnable = computed(() => frontmatter.value.breadcrumbIcon || frontmatter.value.breadcrumbIcon !== false && themeLocale.value.breadcrumbIcon !== false);
    const getBreadCrumbConfig = () => {
      const routes = router.getRoutes();
      const breadcrumbConfig = getAncestorLinks(route, routeLocale.value).map((link) => {
        const route2 = routes.find((route3) => route3.path === link);
        if (route2) {
          const { meta, path } = Dt(router, route2.path);
          const title = meta[
            "s"
            /* ArticleInfoType.shortTitle */
          ] || meta.title;
          if (title)
            return {
              title,
              icon: meta[
                "i"
                /* ArticleInfoType.icon */
              ],
              path
            };
        }
        return null;
      }).filter((item) => item !== null);
      if (breadcrumbConfig.length > 1)
        config2.value = breadcrumbConfig;
    };
    onMounted(() => {
      void getBreadCrumbConfig();
      watch(() => route.path, getBreadCrumbConfig);
    });
    return () => h$4("nav", { class: ["breadcrumb", { disable: !enable.value }] }, enable.value ? h$4("ol", {
      vocab: "https://schema.org/",
      typeof: "BreadcrumbList"
    }, config2.value.map((item, index2) => h$4("li", {
      class: { "is-active": config2.value.length - 1 === index2 },
      property: "itemListElement",
      typeof: "ListItem"
    }, [
      h$4(RouterLink, {
        to: item.path,
        property: "item",
        typeof: "WebPage"
      }, () => [
        // icon
        iconEnable.value ? h$4(Icon, { icon: item.icon }) : null,
        // text
        h$4("span", { property: "name" }, item.title || "Unknown")
      ]),
      // meta
      h$4("meta", { property: "position", content: index2 + 1 })
    ]))) : []);
  }
});
const pageNav = "";
const resolveFromFrontmatterConfig = (conf) => {
  if (conf === false)
    return false;
  if (isString(conf))
    return useAutoLink(conf, true);
  if (isPlainObject(conf))
    return conf;
  return null;
};
const resolveFromSidebarItems = (sidebarItems, currentPath, offset) => {
  const index2 = sidebarItems.findIndex((item) => item.link === currentPath);
  if (index2 !== -1) {
    const targetItem = sidebarItems[index2 + offset];
    if (!(targetItem == null ? void 0 : targetItem.link))
      return null;
    return targetItem;
  }
  for (const item of sidebarItems)
    if (item.children) {
      const childResult = resolveFromSidebarItems(item.children, currentPath, offset);
      if (childResult)
        return childResult;
    }
  return null;
};
const PageNav = defineComponent({
  name: "PageNav",
  setup() {
    const themeLocale = useThemeLocaleData();
    const frontmatter = usePageFrontmatter();
    const sidebarItems = useSidebarItems();
    const route = useRoute();
    const navigate = useNavigate();
    const prevNavLink = computed(() => {
      const prevConfig = resolveFromFrontmatterConfig(frontmatter.value.prev);
      return prevConfig === false ? null : prevConfig || (themeLocale.value.prevLink === false ? null : resolveFromSidebarItems(sidebarItems.value, route.path, -1));
    });
    const nextNavLink = computed(() => {
      const nextConfig = resolveFromFrontmatterConfig(frontmatter.value.next);
      return nextConfig === false ? null : nextConfig || (themeLocale.value.nextLink === false ? null : resolveFromSidebarItems(sidebarItems.value, route.path, 1));
    });
    useEventListener("keydown", (event) => {
      if (event.altKey) {
        if (event.key === "ArrowRight") {
          if (nextNavLink.value) {
            navigate(nextNavLink.value.link);
            event.preventDefault();
          }
        } else if (event.key === "ArrowLeft") {
          if (prevNavLink.value) {
            navigate(prevNavLink.value.link);
            event.preventDefault();
          }
        }
      }
    });
    return () => prevNavLink.value || nextNavLink.value ? h$4("nav", { class: "page-nav" }, [
      prevNavLink.value ? h$4(AutoLink, { class: "prev", config: prevNavLink.value }, () => {
        var _a2, _b2;
        return [
          h$4("div", { class: "hint" }, [
            h$4("span", { class: "arrow start" }),
            themeLocale.value.metaLocales.prev
          ]),
          h$4("div", { class: "link" }, [
            h$4(Icon, {
              icon: (_a2 = prevNavLink.value) == null ? void 0 : _a2.icon
            }),
            (_b2 = prevNavLink.value) == null ? void 0 : _b2.text
          ])
        ];
      }) : null,
      nextNavLink.value ? h$4(AutoLink, { class: "next", config: nextNavLink.value }, () => {
        var _a2, _b2;
        return [
          h$4("div", { class: "hint" }, [
            themeLocale.value.metaLocales.next,
            h$4("span", { class: "arrow end" })
          ]),
          h$4("div", { class: "link" }, [
            (_a2 = nextNavLink.value) == null ? void 0 : _a2.text,
            h$4(Icon, {
              icon: (_b2 = nextNavLink.value) == null ? void 0 : _b2.icon
            })
          ])
        ];
      }) : null
    ]) : null;
  }
});
const AuthorIcon = () => h$4(P$2, { name: "author" }, () => h$4("path", {
  d: "M649.6 633.6c86.4-48 147.2-144 147.2-249.6 0-160-128-288-288-288s-288 128-288 288c0 108.8 57.6 201.6 147.2 249.6-121.6 48-214.4 153.6-240 288-3.2 9.6 0 19.2 6.4 25.6 3.2 9.6 12.8 12.8 22.4 12.8h704c9.6 0 19.2-3.2 25.6-12.8 6.4-6.4 9.6-16 6.4-25.6-25.6-134.4-121.6-240-243.2-288z"
}));
AuthorIcon.displayName = "AuthorIcon";
const CalendarIcon = () => h$4(P$2, { name: "calendar" }, () => h$4("path", {
  d: "M716.4 110.137c0-18.753-14.72-33.473-33.472-33.473-18.753 0-33.473 14.72-33.473 33.473v33.473h66.993v-33.473zm-334.87 0c0-18.753-14.72-33.473-33.473-33.473s-33.52 14.72-33.52 33.473v33.473h66.993v-33.473zm468.81 33.52H716.4v100.465c0 18.753-14.72 33.473-33.472 33.473a33.145 33.145 0 01-33.473-33.473V143.657H381.53v100.465c0 18.753-14.72 33.473-33.473 33.473a33.145 33.145 0 01-33.473-33.473V143.657H180.6A134.314 134.314 0 0046.66 277.595v535.756A134.314 134.314 0 00180.6 947.289h669.74a134.36 134.36 0 00133.94-133.938V277.595a134.314 134.314 0 00-133.94-133.938zm33.473 267.877H147.126a33.145 33.145 0 01-33.473-33.473c0-18.752 14.72-33.473 33.473-33.473h736.687c18.752 0 33.472 14.72 33.472 33.473a33.145 33.145 0 01-33.472 33.473z"
}));
CalendarIcon.displayName = "CalendarIcon";
const CategoryIcon$1 = () => h$4(P$2, { name: "category" }, () => h$4("path", {
  d: "M148.41 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H148.41c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.311-40.31zM147.556 553.478H429.73c22.263 0 40.311 18.048 40.311 40.31v282.176c0 22.263-18.048 40.312-40.31 40.312H147.555c-22.263 0-40.311-18.049-40.311-40.312V593.79c0-22.263 18.048-40.311 40.31-40.311zM593.927 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H593.927c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.31-40.31zM730.22 920.502H623.926c-40.925 0-74.22-33.388-74.22-74.425V623.992c0-41.038 33.387-74.424 74.425-74.424h222.085c41.038 0 74.424 33.226 74.424 74.067v114.233c0 10.244-8.304 18.548-18.547 18.548s-18.548-8.304-18.548-18.548V623.635c0-20.388-16.746-36.974-37.33-36.974H624.13c-20.585 0-37.331 16.747-37.331 37.33v222.086c0 20.585 16.654 37.331 37.126 37.331H730.22c10.243 0 18.547 8.304 18.547 18.547 0 10.244-8.304 18.547-18.547 18.547z"
}));
CategoryIcon$1.displayName = "CategoryIcon";
const EyeIcon = () => h$4(P$2, { name: "eye" }, () => h$4("path", {
  d: "M992 512.096c0-5.76-.992-10.592-1.28-11.136-.192-2.88-1.152-8.064-2.08-10.816-.256-.672-.544-1.376-.832-2.08-.48-1.568-1.024-3.104-1.6-4.32C897.664 290.112 707.104 160 512 160c-195.072 0-385.632 130.016-473.76 322.592-1.056 2.112-1.792 4.096-2.272 5.856a55.512 55.512 0 00-.64 1.6c-1.76 5.088-1.792 8.64-1.632 7.744-.832 3.744-1.568 11.168-1.568 11.168-.224 2.272-.224 4.032.032 6.304 0 0 .736 6.464 1.088 7.808.128 1.824.576 4.512 1.12 6.976h-.032c.448 2.08 1.12 4.096 1.984 6.08.48 1.536.992 2.976 1.472 4.032C126.432 733.856 316.992 864 512 864c195.136 0 385.696-130.048 473.216-321.696 1.376-2.496 2.24-4.832 2.848-6.912.256-.608.48-1.184.672-1.728 1.536-4.48 1.856-8.32 1.728-8.32l-.032.032c.608-3.104 1.568-7.744 1.568-13.28zM512 672c-88.224 0-160-71.776-160-160s71.776-160 160-160 160 71.776 160 160-71.776 160-160 160z"
}));
EyeIcon.displayName = "EyeIcon";
const FireIcon = () => h$4(P$2, { name: "fire" }, () => h$4("path", {
  d: "M726.4 201.6c-12.8-9.6-28.8-6.4-38.4 0-9.6 9.6-16 25.6-9.6 38.4 6.4 12.8 9.6 28.8 12.8 44.8C604.8 83.2 460.8 38.4 454.4 35.2c-9.6-3.2-22.4 0-28.8 6.4-9.6 6.4-12.8 19.2-9.6 28.8 12.8 86.4-25.6 188.8-115.2 310.4-6.4-25.6-16-51.2-32-80-9.6-9.6-22.4-16-35.2-12.8-16 3.2-25.6 12.8-25.6 28.8-3.2 48-25.6 92.8-51.2 140.8C134.4 499.2 112 544 102.4 592c-32 150.4 99.2 329.6 233.6 380.8 9.6 3.2 19.2 6.4 32 9.6-25.6-19.2-41.6-51.2-48-96C294.4 691.2 505.6 640 515.2 460.8c153.6 105.6 224 336 137.6 505.6 3.2 0 6.4-3.2 9.6-3.2 0 0 3.2 0 3.2-3.2 163.2-89.6 252.8-208 259.2-345.6 16-211.2-163.2-390.4-198.4-412.8z"
}));
FireIcon.displayName = "FireIcon";
const PrintIcon = () => h$4(P$2, { name: "print" }, () => h$4("path", {
  d: "M819.2 364.8h-44.8V128c0-17.067-14.933-32-32-32H281.6c-17.067 0-32 14.933-32 32v236.8h-44.8C145.067 364.8 96 413.867 96 473.6v192c0 59.733 49.067 108.8 108.8 108.8h44.8V896c0 17.067 14.933 32 32 32h460.8c17.067 0 32-14.933 32-32V774.4h44.8c59.733 0 108.8-49.067 108.8-108.8v-192c0-59.733-49.067-108.8-108.8-108.8zM313.6 160h396.8v204.8H313.6V160zm396.8 704H313.6V620.8h396.8V864zM864 665.6c0 25.6-19.2 44.8-44.8 44.8h-44.8V588.8c0-17.067-14.933-32-32-32H281.6c-17.067 0-32 14.933-32 32v121.6h-44.8c-25.6 0-44.8-19.2-44.8-44.8v-192c0-25.6 19.2-44.8 44.8-44.8h614.4c25.6 0 44.8 19.2 44.8 44.8v192z"
}));
PrintIcon.displayName = "PrintIcon";
const TagIcon$1 = () => h$4(P$2, { name: "tag" }, () => h$4("path", {
  d: "M939.902 458.563L910.17 144.567c-1.507-16.272-14.465-29.13-30.737-30.737L565.438 84.098h-.402c-3.215 0-5.726 1.005-7.634 2.913l-470.39 470.39a10.004 10.004 0 000 14.164l365.423 365.424c1.909 1.908 4.42 2.913 7.132 2.913s5.223-1.005 7.132-2.913l470.39-470.39c2.01-2.11 3.014-5.023 2.813-8.036zm-240.067-72.121c-35.458 0-64.286-28.828-64.286-64.286s28.828-64.285 64.286-64.285 64.286 28.828 64.286 64.285-28.829 64.286-64.286 64.286z"
}));
TagIcon$1.displayName = "TagIcon";
const TimerIcon = () => h$4(P$2, { name: "timer" }, () => h$4("path", {
  d: "M799.387 122.15c4.402-2.978 7.38-7.897 7.38-13.463v-1.165c0-8.933-7.38-16.312-16.312-16.312H256.33c-8.933 0-16.311 7.38-16.311 16.312v1.165c0 5.825 2.977 10.874 7.637 13.592 4.143 194.44 97.22 354.963 220.201 392.763-122.204 37.542-214.893 196.511-220.2 389.397-4.661 5.049-7.638 11.651-7.638 19.03v5.825h566.49v-5.825c0-7.379-2.849-13.981-7.509-18.9-5.049-193.016-97.867-351.985-220.2-389.527 123.24-37.67 216.446-198.453 220.588-392.892zM531.16 450.445v352.632c117.674 1.553 211.787 40.778 211.787 88.676H304.097c0-48.286 95.149-87.382 213.728-88.676V450.445c-93.077-3.107-167.901-81.297-167.901-177.093 0-8.803 6.99-15.793 15.793-15.793 8.803 0 15.794 6.99 15.794 15.793 0 80.261 63.69 145.635 142.01 145.635s142.011-65.374 142.011-145.635c0-8.803 6.99-15.793 15.794-15.793s15.793 6.99 15.793 15.793c0 95.019-73.789 172.82-165.96 177.093z"
}));
TimerIcon.displayName = "TimerIcon";
const WordIcon = () => h$4(P$2, { name: "word" }, () => [
  h$4("path", {
    d: "M518.217 432.64V73.143A73.143 73.143 0 01603.43 1.097a512 512 0 01419.474 419.474 73.143 73.143 0 01-72.046 85.212H591.36a73.143 73.143 0 01-73.143-73.143z"
  }),
  h$4("path", {
    d: "M493.714 566.857h340.297a73.143 73.143 0 0173.143 85.577A457.143 457.143 0 11371.566 117.76a73.143 73.143 0 0185.577 73.143v339.383a36.571 36.571 0 0036.571 36.571z"
  })
]);
WordIcon.displayName = "WordIcon";
const useMetaLocale = () => {
  const themeLocale = useThemeLocaleData();
  return computed(() => themeLocale.value.metaLocales);
};
const readingTimeLocales = { "/": { "word": "约 $word 字", "less1Minute": "小于 1 分钟", "time": "大约 $time 分钟" } };
const editLinkPatterns = {
  GitHub: ":repo/edit/:branch/:path",
  GitLab: ":repo/-/edit/:branch/:path",
  Gitee: ":repo/edit/:branch/:path",
  Bitbucket: ":repo/src/:branch/:path?mode=edit&spa=0&at=:branch&fileviewer=file-view-default"
};
const resolveEditLink = ({ docsRepo, docsBranch, docsDir, filePathRelative, editLinkPattern }) => {
  if (!filePathRelative)
    return null;
  const repoType = Jt(docsRepo);
  let pattern;
  if (editLinkPattern)
    pattern = editLinkPattern;
  else if (repoType !== null)
    pattern = editLinkPatterns[repoType];
  if (!pattern)
    return null;
  return pattern.replace(/:repo/, isLinkHttp(docsRepo) ? docsRepo : `https://github.com/${docsRepo}`).replace(/:branch/, docsBranch).replace(/:path/, removeLeadingSlash(`${removeEndingSlash(docsDir)}/${filePathRelative}`));
};
const useEditLink = () => {
  const themeLocale = useThemeLocaleData();
  const page2 = usePageData();
  const frontmatter = usePageFrontmatter();
  return computed(() => {
    const { repo, docsRepo = repo, docsBranch = "main", docsDir = "", editLink, editLinkPattern = "" } = themeLocale.value;
    const showEditLink = frontmatter.value.editLink ?? editLink ?? true;
    if (!showEditLink)
      return null;
    if (!docsRepo)
      return null;
    const link = resolveEditLink({
      docsRepo,
      docsBranch,
      docsDir,
      editLinkPattern,
      filePathRelative: page2.value.filePathRelative
    });
    if (!link)
      return null;
    return {
      text: themeLocale.value.metaLocales.editLink,
      link
    };
  });
};
const useUpdateTime = () => {
  const siteLocale = useSiteLocaleData();
  const themeLocale = useThemeLocaleData();
  const page2 = usePageData();
  const frontmatter = usePageFrontmatter();
  return computed(() => {
    var _a2, _b2;
    const showLastUpdated = frontmatter.value.lastUpdated ?? themeLocale.value.lastUpdated ?? true;
    if (!showLastUpdated)
      return null;
    if (!((_a2 = page2.value.git) == null ? void 0 : _a2.updatedTime))
      return null;
    const updatedDate = new Date((_b2 = page2.value.git) == null ? void 0 : _b2.updatedTime);
    return updatedDate.toLocaleString(siteLocale.value.lang);
  });
};
const useContributors = () => {
  const themeLocale = useThemeLocaleData();
  const page2 = usePageData();
  const frontmatter = usePageFrontmatter();
  return computed(() => {
    var _a2;
    const showContributors = frontmatter.value.contributors ?? themeLocale.value.contributors ?? true;
    if (!showContributors)
      return null;
    return ((_a2 = page2.value.git) == null ? void 0 : _a2.contributors) ?? null;
  });
};
const authorInfo = "";
const AuthorInfo = defineComponent({
  name: "AuthorInfo",
  inheritAttrs: false,
  props: {
    /**
     * Author information
     *
     * 作者信息
     */
    author: {
      type: Array,
      required: true
    },
    /**
     * Whether in pure mode
     *
     * 是否处于纯净模式
     */
    pure: Boolean
  },
  setup(props) {
    const metaLocale = useMetaLocale();
    return () => props.author.length ? h$4("span", {
      class: "page-author-info",
      "aria-label": `${metaLocale.value.author}${props.pure ? "" : "🖊"}`,
      ...props.pure ? {} : { "data-balloon-pos": "down" }
    }, [
      h$4(AuthorIcon),
      h$4("span", props.author.map((item) => item.url ? h$4("a", {
        class: "page-author-item",
        href: item.url,
        target: "_blank",
        rel: "noopener noreferrer"
      }, item.name) : h$4("span", { class: "page-author-item" }, item.name))),
      h$4("span", {
        property: "author",
        content: props.author.map((item) => item.name).join(", ")
      })
    ]) : null;
  }
});
const categoryInfo = "";
const CategoryInfo = defineComponent({
  name: "CategoryInfo",
  inheritAttrs: false,
  props: {
    /**
     * Category information
     *
     * 分类信息
     */
    category: {
      type: Array,
      required: true
    },
    /**
     * Whether in pure mode
     *
     * 是否处于纯净模式
     */
    pure: Boolean
  },
  setup(props) {
    const router = useRouter();
    const route = useRoute();
    const metaLocale = useMetaLocale();
    const navigate = (event, path = "") => {
      if (path && route.path !== path) {
        event.preventDefault();
        void router.push(path);
      }
    };
    return () => props.category.length ? h$4("span", {
      class: "page-category-info",
      "aria-label": `${metaLocale.value.category}${props.pure ? "" : "🌈"}`,
      ...props.pure ? {} : { "data-balloon-pos": "down" }
    }, [
      h$4(CategoryIcon$1),
      ...props.category.map(({ name, path }) => h$4("span", {
        class: [
          "page-category-item",
          {
            // TODO: magic number 9 is tricky here
            [`category${Gt(name, 9)}`]: !props.pure,
            clickable: path
          }
        ],
        role: path ? "navigation" : "",
        onClick: (event) => navigate(event, path)
      }, name)),
      h$4("meta", {
        property: "articleSection",
        content: props.category.map(({ name }) => name).join(",")
      })
    ]) : null;
  }
});
const DateInfo = defineComponent({
  name: "DateInfo",
  inheritAttrs: false,
  props: {
    /**
     * Date information
     *
     * 日期信息
     */
    date: {
      type: Object,
      default: null
    },
    /**
     * Localized date text
     *
     * 本地化的日期文字
     */
    localizedDate: {
      type: String,
      default: ""
    },
    /**
     * Whether in pure mode
     *
     * 是否处于纯净模式
     */
    pure: Boolean
  },
  setup(props) {
    const lang = usePageLang();
    const metaLocale = useMetaLocale();
    return () => {
      var _a2, _b2;
      return props.date ? h$4("span", {
        class: "page-date-info",
        "aria-label": `${metaLocale.value.date}${props.pure ? "" : "📅"}`,
        ...props.pure ? {} : { "data-balloon-pos": "down" }
      }, [
        h$4(CalendarIcon),
        h$4("span", h$4(ClientOnly, () => {
          var _a3;
          return props.localizedDate || ((_a3 = props.date.value) == null ? void 0 : _a3.toLocaleDateString(lang.value));
        })),
        h$4("meta", {
          property: "datePublished",
          // ISO Format Date string
          content: ((_b2 = (_a2 = props.date) == null ? void 0 : _a2.value) == null ? void 0 : _b2.toISOString()) || ""
        })
      ]) : null;
    };
  }
});
defineComponent({
  name: "PageViewInfo",
  inheritAttrs: false,
  props: {
    /**
     * Whether show pageview and it's path
     *
     * 是否显示浏览量以及其路径
     */
    pageview: {
      type: [Boolean, String],
      default: false
    },
    /**
     * Whether in pure mode
     *
     * 是否处于纯净模式
     */
    pure: Boolean
  },
  setup(props) {
    const route = useRoute();
    const metaLocale = useMetaLocale();
    const pageViews = ref(0);
    const getCount = () => {
      const countElement = document.querySelector(".waline-pageview-count");
      if (countElement) {
        const count = countElement.textContent;
        if (count && !isNaN(Number(count)))
          pageViews.value = Number(count);
        else
          setTimeout(getCount, 500);
      }
    };
    onMounted(() => {
      setTimeout(getCount, 1500);
    });
    watch(() => [route.path, route.query], () => {
      setTimeout(getCount, 500);
    });
    return () => props.pageview ? h$4("span", {
      class: "page-pageview-info",
      "aria-label": `${metaLocale.value.views}${props.pure ? "" : "🔢"}`,
      ...props.pure ? {} : { "data-balloon-pos": "down" }
    }, [
      h$4(pageViews.value < 1e3 ? EyeIcon : FireIcon),
      h$4("span", {
        class: "waline-pageview-count",
        /** visitorID */
        "data-path": isString(props.pageview) ? props.pageview : withBase(route.path)
      }, "...")
    ]) : null;
  }
});
const ReadingTimeInfo = defineComponent({
  name: "ReadingTimeInfo",
  inheritAttrs: false,
  props: {
    /**
     * Reading time information
     *
     * 阅读时间信息
     */
    readingTime: {
      type: Object,
      default: () => null
    },
    /**
     * Whether in pure mode
     *
     * 是否处于纯净模式
     */
    pure: Boolean
  },
  setup(props) {
    const metaLocale = useMetaLocale();
    const readingTimeLocale = kt(readingTimeLocales);
    const readingTime = computed(() => {
      if (!props.readingTime)
        return null;
      const { minutes } = props.readingTime;
      return minutes < 1 ? { text: readingTimeLocale.value.less1Minute, time: "PT1M" } : {
        text: readingTimeLocale.value.time.replace("$time", Math.round(minutes).toString()),
        time: `PT${Math.round(minutes)}M`
      };
    });
    return () => readingTime.value ? h$4("span", {
      class: "page-reading-time-info",
      "aria-label": `${metaLocale.value.readingTime}${props.pure ? "" : "⌛"}`,
      ...props.pure ? {} : { "data-balloon-pos": "down" }
    }, [
      h$4(TimerIcon),
      h$4("span", readingTime.value.text),
      h$4("meta", {
        property: "timeRequired",
        content: readingTime.value.time
      })
    ]) : null;
  }
});
const tagInfo = "";
const TagInfo = defineComponent({
  name: "TagInfo",
  inheritAttrs: false,
  props: {
    /**
     * Tag information
     *
     * 标签信息
     */
    tag: {
      type: Array,
      default: () => []
    },
    /**
     * Whether in pure mode
     *
     * 是否处于纯净模式
     */
    pure: Boolean
  },
  setup(props) {
    const router = useRouter();
    const route = useRoute();
    const metaLocale = useMetaLocale();
    const navigate = (event, path = "") => {
      if (path && route.path !== path) {
        event.preventDefault();
        void router.push(path);
      }
    };
    return () => props.tag.length ? h$4("span", {
      class: "page-tag-info",
      "aria-label": `${metaLocale.value.tag}${props.pure ? "" : "🏷"}`,
      ...props.pure ? {} : { "data-balloon-pos": "down" }
    }, [
      h$4(TagIcon$1),
      ...props.tag.map(({ name, path }) => h$4("span", {
        class: [
          "page-tag-item",
          {
            // TODO: magic number 9 is tricky here
            [`tag${Gt(name, 9)}`]: !props.pure,
            clickable: path
          }
        ],
        role: path ? "navigation" : "",
        onClick: (event) => navigate(event, path)
      }, name)),
      h$4("meta", {
        property: "keywords",
        content: props.tag.map(({ name }) => name).join(",")
      })
    ]) : null;
  }
});
const originalInfo = "";
const OriginalInfo = defineComponent({
  name: "OriginalInfo",
  inheritAttrs: false,
  props: {
    /**
     * Whether the article is original
     *
     * 文章是否是原创
     */
    isOriginal: Boolean
  },
  setup(props) {
    const metaLocale = useMetaLocale();
    return () => props.isOriginal ? h$4("span", { class: "page-original-info" }, metaLocale.value.origin) : null;
  }
});
const WordInfo = defineComponent({
  name: "ReadTimeInfo",
  inheritAttrs: false,
  props: {
    /**
     * Reading time information
     *
     * 阅读时间信息
     */
    readingTime: {
      type: Object,
      default: () => null
    },
    /**
     * Whether in pure mode
     *
     * 是否处于纯净模式
     */
    pure: Boolean
  },
  setup(props) {
    const metaLocale = useMetaLocale();
    const readingTimeLocale = kt(readingTimeLocales);
    const words = computed(() => {
      var _a2;
      return (_a2 = props.readingTime) == null ? void 0 : _a2.words.toString();
    });
    const wordText = computed(() => readingTimeLocale.value.word.replace("$word", words.value || ""));
    return () => words.value ? h$4("span", {
      class: "page-word-info",
      "aria-label": `${metaLocale.value.words}${props.pure ? "" : "🔠"}`,
      ...props.pure ? {} : { "data-balloon-pos": "down" }
    }, [
      h$4(WordIcon),
      h$4("span", wordText.value),
      h$4("meta", {
        property: "wordCount",
        content: words.value
      })
    ]) : null;
  }
});
const pageInfo = "";
const PageInfo = defineComponent({
  name: "PageInfo",
  components: {
    AuthorInfo,
    CategoryInfo,
    DateInfo,
    OriginalInfo,
    PageViewInfo: () => null,
    ReadingTimeInfo,
    TagInfo,
    WordInfo
  },
  props: {
    /**
     * Article information to display
     *
     * 待展示的文章信息
     */
    items: {
      type: [Array, Boolean],
      default: () => [
        "Author",
        "Original",
        "Date",
        "PageView",
        "ReadingTime",
        "Category",
        "Tag"
      ]
    },
    /**
     * Article information
     *
     * 文章信息配置
     */
    info: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const pure = usePure();
    return () => props.items ? h$4("div", { class: "page-info" }, props.items.map((item) => h$4(resolveComponent(`${item}Info`), {
      ...props.info,
      pure: pure.value
    }))) : null;
  }
});
const pageTitle = "";
const PageTitle = defineComponent({
  name: "PageTitle",
  setup() {
    const page2 = usePageData();
    const frontmatter = usePageFrontmatter();
    const themeLocale = useThemeLocaleData();
    const { info, items } = usePageInfo();
    return () => h$4("div", { class: "page-title" }, [
      h$4("h1", [
        themeLocale.value.titleIcon === false ? null : h$4(Icon, { icon: frontmatter.value.icon }),
        page2.value.title
      ]),
      h$4(PageInfo, {
        info: info.value,
        ...items.value === null ? {} : { items: items.value }
      }),
      h$4("hr")
    ]);
  }
});
const EditIcon = () => h$4(P$2, { name: "edit" }, () => [
  h$4("path", {
    d: "M430.818 653.65a60.46 60.46 0 0 1-50.96-93.281l71.69-114.012 7.773-10.365L816.038 80.138A60.46 60.46 0 0 1 859.225 62a60.46 60.46 0 0 1 43.186 18.138l43.186 43.186a60.46 60.46 0 0 1 0 86.373L588.879 565.55l-8.637 8.637-117.466 68.234a60.46 60.46 0 0 1-31.958 11.229z"
  }),
  h$4("path", {
    d: "M728.802 962H252.891A190.883 190.883 0 0 1 62.008 771.98V296.934a190.883 190.883 0 0 1 190.883-192.61h267.754a60.46 60.46 0 0 1 0 120.92H252.891a69.962 69.962 0 0 0-69.098 69.099V771.98a69.962 69.962 0 0 0 69.098 69.098h475.911A69.962 69.962 0 0 0 797.9 771.98V503.363a60.46 60.46 0 1 1 120.922 0V771.98A190.883 190.883 0 0 1 728.802 962z"
  })
]);
EditIcon.displayName = "EditIcon";
const pageMeta = "";
const PageMeta = defineComponent({
  name: "PageMeta",
  setup() {
    const themeLocale = useThemeLocaleData();
    const editLink = useEditLink();
    const updateTime = useUpdateTime();
    const contributors = useContributors();
    return () => {
      const { metaLocales } = themeLocale.value;
      return h$4("footer", { class: "page-meta" }, [
        editLink.value ? h$4("div", { class: "meta-item edit-link" }, h$4(AutoLink, { class: "label", config: editLink.value }, { before: () => h$4(EditIcon) })) : null,
        h$4("div", { class: "meta-item git-info" }, [
          updateTime.value ? h$4("div", { class: "update-time" }, [
            h$4("span", { class: "label" }, `${metaLocales.lastUpdated}: `),
            h$4(ClientOnly, () => h$4("span", { class: "info" }, updateTime.value))
          ]) : null,
          contributors.value && contributors.value.length ? h$4("div", { class: "contributors" }, [
            h$4("span", { class: "label" }, `${metaLocales.contributors}: `),
            contributors.value.map(({ email, name }, index2) => [
              h$4("span", { class: "contributor", title: `email: ${email}` }, name),
              index2 !== contributors.value.length - 1 ? "," : ""
            ])
          ]) : null
        ])
      ]);
    };
  }
});
const printButton = "";
const PrintButton = defineComponent({
  name: "PrintButton",
  setup() {
    const themeData2 = useThemeData();
    return () => themeData2.value.print === false ? null : h$4("button", {
      class: "print-button",
      title: "print",
      onClick: () => {
        window.print();
      }
    }, h$4(PrintIcon));
  }
});
const toc = "";
const renderHeader = ({ title, level, slug }) => h$4(RouterLink, {
  to: `#${slug}`,
  class: ["toc-link", `level${level}`]
}, () => title);
const renderChildren = (headers, headerDepth) => {
  const route = useRoute();
  return headers.length && headerDepth > 0 ? h$4("ul", { class: "toc-list" }, headers.map((header) => [
    h$4("li", {
      class: [
        "toc-item",
        { active: Rt(route, `#${header.slug}`) }
      ]
    }, renderHeader(header)),
    renderChildren(header.children, headerDepth - 1)
  ])) : null;
};
const TOC = defineComponent({
  name: "TOC",
  props: {
    /**
     * TOC items config
     *
     * TOC 项目配置
     */
    items: {
      type: Array,
      default: () => []
    },
    /**
     * Max header nesting depth
     *
     * 最大的标题嵌套深度
     */
    headerDepth: {
      type: Number,
      default: 2
    }
  },
  setup(props) {
    const route = useRoute();
    const page2 = usePageData();
    const metaLocale = useMetaLocale();
    const toc2 = ref();
    const scrollTo = (top) => {
      var _a2;
      (_a2 = toc2.value) == null ? void 0 : _a2.scrollTo({ top, behavior: "smooth" });
    };
    onMounted(() => {
      watch(() => route.hash, (hash) => {
        if (toc2.value) {
          const activeTocItem = document.querySelector(`#toc a.toc-link[href$="${hash}"]`);
          if (!activeTocItem)
            return;
          const { top: tocTop, height: tocHeight } = toc2.value.getBoundingClientRect();
          const { top: activeTocItemTop, height: activeTocItemHeight } = activeTocItem.getBoundingClientRect();
          if (activeTocItemTop < tocTop)
            scrollTo(toc2.value.scrollTop + activeTocItemTop - tocTop);
          else if (activeTocItemTop + activeTocItemHeight > tocTop + tocHeight)
            scrollTo(toc2.value.scrollTop + activeTocItemTop + activeTocItemHeight - tocTop - tocHeight);
        }
      });
    });
    return () => {
      const tocHeaders = props.items.length ? renderChildren(props.items, props.headerDepth) : page2.value.headers ? renderChildren(page2.value.headers, props.headerDepth) : null;
      return tocHeaders ? h$4("div", { class: "toc-place-holder" }, [
        h$4("aside", { id: "toc" }, [
          h$4("div", { class: "toc-header" }, [
            metaLocale.value.toc,
            h$4(PrintButton)
          ]),
          h$4("div", { class: "toc-wrapper", ref: toc2 }, [tocHeaders])
        ])
      ]) : null;
    };
  }
});
const page$1 = "";
const NormalPage = defineComponent({
  name: "NormalPage",
  setup(_props, { slots }) {
    const frontmatter = usePageFrontmatter();
    const { isDarkmode } = useDarkmode();
    const themeLocale = useThemeLocaleData();
    const tocEnable = computed(() => frontmatter.value.toc || frontmatter.value.toc !== false && themeLocale.value.toc !== false);
    return () => h$4("main", { class: "page", id: "main-content" }, h$4(_t("LocalEncrypt") ? resolveComponent("LocalEncrypt") : Ct, () => {
      var _a2, _b2, _c, _d;
      return [
        (_a2 = slots["top"]) == null ? void 0 : _a2.call(slots),
        h$4(BreadCrumb),
        h$4(PageTitle),
        tocEnable.value ? h$4(TOC, {
          headerDepth: frontmatter.value.headerDepth ?? themeLocale.value.headerDepth ?? 2
        }) : null,
        (_b2 = slots["contentBefore"]) == null ? void 0 : _b2.call(slots),
        h$4(MarkdownContent),
        (_c = slots["contentAfter"]) == null ? void 0 : _c.call(slots),
        h$4(PageMeta),
        h$4(PageNav),
        _t("CommentService") ? h$4(resolveComponent("CommentService"), {
          darkmode: isDarkmode.value
        }) : null,
        (_d = slots["bottom"]) == null ? void 0 : _d.call(slots)
      ];
    }));
  }
});
const fadeSlideY = "";
const FadeSlideY = defineComponent({
  name: "FadeSlideY",
  setup(_props, { slots }) {
    const scrollPromise2 = useScrollPromise();
    const onBeforeEnter = scrollPromise2.resolve;
    const onBeforeLeave = scrollPromise2.pending;
    return () => h$4(Transition, {
      name: "fade-slide-y",
      mode: "out-in",
      onBeforeEnter,
      onBeforeLeave
    }, () => {
      var _a2;
      return (_a2 = slots["default"]) == null ? void 0 : _a2.call(slots);
    });
  }
});
const skipLink = "";
const SkipLink = defineComponent({
  name: "SkipLink",
  props: {
    /** @description Content ID */
    content: {
      type: String,
      default: "main-content"
    }
  },
  setup(props) {
    const route = useRoute();
    const themeLocale = useThemeLocaleData();
    const skipToMainContent = ref();
    const focusMainContent = ({ target }) => {
      const el = document.querySelector(target.hash);
      if (el) {
        const removeTabIndex = () => {
          el.removeAttribute("tabindex");
          el.removeEventListener("blur", removeTabIndex);
        };
        el.setAttribute("tabindex", "-1");
        el.addEventListener("blur", removeTabIndex);
        el.focus();
        window.scrollTo(0, 0);
      }
    };
    onMounted(() => {
      watch(() => route.path, () => skipToMainContent.value.focus());
    });
    return () => [
      h$4("span", {
        ref: skipToMainContent,
        tabindex: "-1"
      }),
      h$4("a", {
        href: `#${props.content}`,
        class: "skip-link sr-only",
        onClick: focusMainContent
      }, themeLocale.value.routeLocales.skipToContent)
    ];
  }
});
const Layout = defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Layout",
  setup() {
    const themeData2 = useThemeData();
    const themeLocale = useThemeLocaleData();
    const page2 = usePageData();
    const frontmatter = usePageFrontmatter();
    const { isMobile } = useWindowSize();
    const sidebarDisplay = computed(
      () => {
        var _a2, _b2;
        return ((_a2 = themeLocale.value.blog) == null ? void 0 : _a2.sidebarDisplay) || ((_b2 = themeData2.value.blog) == null ? void 0 : _b2.sidebarDisplay) || "mobile";
      }
    );
    return () => [
      h$4(SkipLink),
      h$4(CommonWrapper, {}, {
        default: () => frontmatter.value.home ? h$4(HomePage) : h$4(FadeSlideY, () => h$4(NormalPage, { key: page2.value.path })),
        ...sidebarDisplay.value !== "none" ? { navScreenBottom: () => h$4(resolveComponent("BloggerInfo")) } : {},
        ...!isMobile.value && sidebarDisplay.value === "always" ? { sidebar: () => h$4(resolveComponent("BloggerInfo")) } : {}
      })
    ];
  }
});
const notFoundHint = "";
const NotFoundHint = defineComponent({
  name: "NotFoundHint",
  setup() {
    const themeLocale = useThemeLocaleData();
    const getMsg = () => {
      const messages = themeLocale.value.routeLocales["notFoundMsg"];
      return messages[Math.floor(Math.random() * messages.length)];
    };
    return () => h$4("div", { class: "not-found-hint" }, [
      h$4("p", { class: "error-code" }, "404"),
      h$4("h1", { class: "error-title" }, themeLocale.value.routeLocales["notFoundTitle"]),
      h$4("p", { class: "error-hint" }, getMsg())
    ]);
  }
});
const notFound = "";
const NotFound = defineComponent({
  name: "NotFound",
  setup(_props, { slots }) {
    const routeLocale = useRouteLocale();
    const themeLocale = useThemeLocaleData();
    const { navigate } = useLink({
      to: themeLocale.value.home ?? routeLocale.value
    });
    return () => [
      h$4(SkipLink),
      h$4(CommonWrapper, { noSidebar: true }, () => {
        var _a2;
        return h$4("main", { class: "page not-found", id: "main-content" }, ((_a2 = slots["default"]) == null ? void 0 : _a2.call(slots)) || [
          h$4(NotFoundHint),
          h$4("div", { class: "actions" }, [
            h$4("button", {
              class: "action-button",
              onClick: () => {
                window.history.go(-1);
              }
            }, themeLocale.value.routeLocales.back),
            h$4("button", { class: "action-button", onClick: () => navigate() }, themeLocale.value.routeLocales.home)
          ])
        ]);
      })
    ];
  }
});
const index$1 = "";
const icons = { "Gitee": '<svg xmlns="http://www.w3.org/2000/svg" class="icon gitee-icon" viewBox="0 0 1024 1024"><circle cx="512" cy="512" r="512" fill="#C71D23"/><path fill="#fff" d="M772.953 454.723H480.17v.006a25.46 25.46 0 0 0-25.46 25.453l-.025 63.649a25.46 25.46 0 0 0 25.46 25.466l178.242-.007a25.46 25.46 0 0 1 25.459 25.46v12.73c0 42.18-34.198 76.378-76.378 76.378H365.583a25.46 25.46 0 0 1-25.46-25.46V416.533h-.006c0-42.18 34.192-76.378 76.378-76.378h356.388v-.013a25.46 25.46 0 0 0 25.46-25.446l.057-63.65h.013a25.46 25.46 0 0 0-25.46-25.471l-356.432.012c-105.453 0-190.946 85.493-190.946 190.946v356.433a25.46 25.46 0 0 0 25.46 25.46H626.56c94.913 0 171.852-76.94 171.852-171.852V480.182a25.46 25.46 0 0 0-25.46-25.46z"/></svg>' };
const categoryMap = { "category": { "/": { "path": "/category/", "map": { "快速导航": { "path": "/category/%E5%BF%AB%E9%80%9F%E5%AF%BC%E8%88%AA/", "keys": ["v-4c083800"] }, "SQL": { "path": "/category/sql/", "keys": ["v-6de835c6"] }, "Go": { "path": "/category/go/", "keys": ["v-5fb2d9dd"] }, "Java": { "path": "/category/java/", "keys": ["v-2b78c687", "v-34cb6992", "v-b03ae20a", "v-677cae9d", "v-a46fbe6c", "v-1ff7fd37", "v-056f4c7a", "v-5661c88e"] }, "电子书": { "path": "/category/%E7%94%B5%E5%AD%90%E4%B9%A6/", "keys": ["v-4185ad80"] }, "实战项目": { "path": "/category/%E5%AE%9E%E6%88%98%E9%A1%B9%E7%9B%AE/", "keys": ["v-77e62f35"] }, "系统设计": { "path": "/category/%E7%B3%BB%E7%BB%9F%E8%AE%BE%E8%AE%A1/", "keys": ["v-76444286"] }, "技术教程": { "path": "/category/%E6%8A%80%E6%9C%AF%E6%95%99%E7%A8%8B/", "keys": ["v-39fb77e5"] }, "工具类库": { "path": "/category/%E5%B7%A5%E5%85%B7%E7%B1%BB%E5%BA%93/", "keys": ["v-804672f0"] }, "书籍": { "path": "/category/%E4%B9%A6%E7%B1%8D/", "keys": ["v-64c61a30"] }, "影视": { "path": "/category/%E5%BD%B1%E8%A7%86/", "keys": ["v-05b997d8"] }, "音乐": { "path": "/category/%E9%9F%B3%E4%B9%90/", "keys": ["v-05b997d8"] }, "算法": { "path": "/category/%E7%AE%97%E6%B3%95/", "keys": ["v-1665eced", "v-538b55ec", "v-a8b428d4", "v-78e9b099", "v-5b551ec1", "v-eb3c33d0", "v-75632350"] }, "数据结构": { "path": "/category/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84/", "keys": ["v-1665eced", "v-538b55ec", "v-a8b428d4", "v-78e9b099", "v-5b551ec1", "v-eb3c33d0"] }, "SpringCloud": { "path": "/category/springcloud/", "keys": ["v-521eece2", "v-53d3c581", "v-b2a73dca"] }, "微服务": { "path": "/category/%E5%BE%AE%E6%9C%8D%E5%8A%A1/", "keys": ["v-521eece2", "v-53d3c581", "v-b2a73dca"] }, "Netty": { "path": "/category/netty/", "keys": ["v-4edd469a", "v-65c1d7f2"] }, "网络编程": { "path": "/category/%E7%BD%91%E7%BB%9C%E7%BC%96%E7%A8%8B/", "keys": ["v-4edd469a", "v-65c1d7f2"] } } } }, "tag": { "/": { "path": "/tag/", "map": { "优质博客": { "path": "/tag/%E4%BC%98%E8%B4%A8%E5%8D%9A%E5%AE%A2/", "keys": ["v-4c083800"] }, "搜索引擎": { "path": "/tag/%E6%90%9C%E7%B4%A2%E5%BC%95%E6%93%8E/", "keys": ["v-4c083800"] }, "SQL": { "path": "/tag/sql/", "keys": ["v-6de835c6"] }, "Go": { "path": "/tag/go/", "keys": ["v-5fb2d9dd"] }, "Java": { "path": "/tag/java/", "keys": ["v-2b78c687", "v-34cb6992", "v-b03ae20a", "v-677cae9d", "v-a46fbe6c", "v-1ff7fd37", "v-056f4c7a", "v-5661c88e"] }, "电子书": { "path": "/tag/%E7%94%B5%E5%AD%90%E4%B9%A6/", "keys": ["v-4185ad80"] }, "实战项目": { "path": "/tag/%E5%AE%9E%E6%88%98%E9%A1%B9%E7%9B%AE/", "keys": ["v-77e62f35"] }, "系统设计": { "path": "/tag/%E7%B3%BB%E7%BB%9F%E8%AE%BE%E8%AE%A1/", "keys": ["v-76444286"] }, "技术教程": { "path": "/tag/%E6%8A%80%E6%9C%AF%E6%95%99%E7%A8%8B/", "keys": ["v-39fb77e5"] }, "工具类库": { "path": "/tag/%E5%B7%A5%E5%85%B7%E7%B1%BB%E5%BA%93/", "keys": ["v-804672f0"] }, "书籍": { "path": "/tag/%E4%B9%A6%E7%B1%8D/", "keys": ["v-64c61a30"] }, "影视": { "path": "/tag/%E5%BD%B1%E8%A7%86/", "keys": ["v-05b997d8"] }, "音乐": { "path": "/tag/%E9%9F%B3%E4%B9%90/", "keys": ["v-05b997d8"] }, "算法": { "path": "/tag/%E7%AE%97%E6%B3%95/", "keys": ["v-1665eced", "v-538b55ec", "v-a8b428d4", "v-78e9b099", "v-5b551ec1", "v-eb3c33d0", "v-75632350"] }, "数据结构": { "path": "/tag/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84/", "keys": ["v-1665eced", "v-538b55ec", "v-a8b428d4", "v-78e9b099", "v-5b551ec1", "v-eb3c33d0"] }, "序列化": { "path": "/tag/%E5%BA%8F%E5%88%97%E5%8C%96/", "keys": ["v-521eece2", "v-53d3c581", "v-b2a73dca", "v-65c1d7f2"] }, "参数调优": { "path": "/tag/%E5%8F%82%E6%95%B0%E8%B0%83%E4%BC%98/", "keys": ["v-521eece2", "v-53d3c581", "v-b2a73dca", "v-65c1d7f2"] }, "RPC框架": { "path": "/tag/rpc%E6%A1%86%E6%9E%B6/", "keys": ["v-521eece2", "v-53d3c581", "v-b2a73dca", "v-65c1d7f2"] }, "服务器": { "path": "/tag/%E6%9C%8D%E5%8A%A1%E5%99%A8/", "keys": ["v-4edd469a"] }, "客户端": { "path": "/tag/%E5%AE%A2%E6%88%B7%E7%AB%AF/", "keys": ["v-4edd469a"] }, "组件": { "path": "/tag/%E7%BB%84%E4%BB%B6/", "keys": ["v-4edd469a"] }, "协议设计": { "path": "/tag/%E5%8D%8F%E8%AE%AE%E8%AE%BE%E8%AE%A1/", "keys": ["v-4edd469a"] }, "粘包半包": { "path": "/tag/%E7%B2%98%E5%8C%85%E5%8D%8A%E5%8C%85/", "keys": ["v-4edd469a"] } } } } };
const typeMap = { "article": { "/": { "path": "/article/", "keys": ["v-2e3eac9e", "v-4c083800", "v-6de835c6", "v-5fb2d9dd", "v-2b78c687", "v-8d1bb016", "v-34cb6992", "v-b03ae20a", "v-677cae9d", "v-a46fbe6c", "v-1ff7fd37", "v-056f4c7a", "v-5661c88e", "v-4185ad80", "v-77e62f35", "v-76444286", "v-39fb77e5", "v-804672f0", "v-64c61a30", "v-05b997d8", "v-1665eced", "v-538b55ec", "v-a8b428d4", "v-78e9b099", "v-5b551ec1", "v-eb3c33d0", "v-75632350", "v-521eece2", "v-53d3c581", "v-b2a73dca", "v-4edd469a", "v-65c1d7f2", "v-6fbc3189"] } }, "star": { "/": { "path": "/star/", "keys": [] } }, "timeline": { "/": { "path": "/timeline/", "keys": ["v-2e3eac9e", "v-4c083800", "v-6de835c6", "v-5fb2d9dd", "v-2b78c687", "v-8d1bb016", "v-34cb6992", "v-b03ae20a", "v-677cae9d", "v-a46fbe6c", "v-1ff7fd37", "v-056f4c7a", "v-5661c88e", "v-4185ad80", "v-77e62f35", "v-76444286", "v-39fb77e5", "v-804672f0", "v-64c61a30", "v-05b997d8", "v-1665eced", "v-538b55ec", "v-a8b428d4", "v-78e9b099", "v-5b551ec1", "v-eb3c33d0", "v-75632350", "v-521eece2", "v-53d3c581", "v-b2a73dca", "v-4edd469a", "v-65c1d7f2", "v-6fbc3189"] } } };
const l = ref(categoryMap), k = (e2 = "") => {
  const s = useRouter(), c2 = useRoute(), u = useRouteLocale();
  return computed(() => {
    var r2;
    const p2 = e2 || ((r2 = usePageFrontmatter().value.blog) == null ? void 0 : r2.key) || "";
    if (!p2)
      return console.warn("useBlogCategory: key not found"), { path: "/", map: {} };
    const i2 = s.getRoutes();
    if (!l.value[p2])
      throw new Error(`useBlogCategory: key ${p2} is invalid`);
    const n2 = l.value[p2][u.value], o2 = { path: n2.path, map: {} };
    for (const a2 in n2.map) {
      const t2 = n2.map[a2];
      o2.map[a2] = { path: t2.path, items: [] };
      for (const d2 of t2.keys) {
        const f2 = i2.find(({ name: m }) => m === d2);
        if (f2) {
          const m = Dt(s, f2.path);
          o2.map[a2].items.push({ path: m.path, info: m.meta });
        }
      }
      c2.path === t2.path && (o2.currentItems = o2.map[a2].items);
    }
    return o2;
  });
};
const _ = ref(typeMap), C = (e2 = "") => {
  const s = useRouter(), c2 = useRouteLocale();
  return computed(() => {
    var u;
    const r2 = e2 || ((u = usePageFrontmatter().value.blog) == null ? void 0 : u.key) || "";
    if (!r2)
      return console.warn("useBlogType: key not found"), { path: "/", items: [] };
    if (!_.value[r2])
      throw new Error(`useBlogType: key ${e2} is invalid`);
    const p2 = s.getRoutes(), i2 = _.value[r2][c2.value], n2 = { path: i2.path, items: [] };
    for (const o2 of i2.keys) {
      const a2 = p2.find(({ name: t2 }) => t2 === o2);
      if (a2) {
        const t2 = Dt(s, a2.path);
        n2.items.push({ path: t2.path, info: t2.meta });
      }
    }
    return n2;
  });
};
const categoryMapSymbol = Symbol.for("categoryMap");
const useCategoryMap = () => {
  const categoryMap2 = inject(categoryMapSymbol);
  if (!categoryMap2) {
    throw new Error("useCategoryMap() is called without provider.");
  }
  return categoryMap2;
};
const setupCategoryMap = () => {
  const categoryMap2 = k("category");
  provide(categoryMapSymbol, categoryMap2);
};
const useBlogOptions = () => {
  const themeData2 = useThemeData();
  const themeLocale = useThemeLocaleData();
  return computed(() => ({
    ...themeData2.value.blog,
    ...themeLocale.value.blog
  }));
};
const tagMapSymbol = Symbol.for("tagMap");
const useTagMap = () => {
  const tagMap = inject(tagMapSymbol);
  if (!tagMap) {
    throw new Error("useTagMap() is called without provider.");
  }
  return tagMap;
};
const setupTagMap = () => {
  const tagMap = k("tag");
  provide(tagMapSymbol, tagMap);
};
const useArticleAuthor = (info) => {
  const themeLocale = useThemeLocaleData();
  return computed(() => {
    const { [
      "a"
      /* ArticleInfoType.author */
    ]: author } = info.value;
    if (author)
      return re(author);
    if (author === false)
      return [];
    return re(themeLocale.value.author, false);
  });
};
const useArticleCategory = (info) => {
  const categoryMap2 = useCategoryMap();
  return computed(() => se(info.value[
    "c"
    /* ArticleInfoType.category */
  ]).map((name) => ({
    name,
    path: categoryMap2.value.map[name].path
  })));
};
const useArticleTag = (info) => {
  const tagMap = useTagMap();
  return computed(() => oe(info.value[
    "g"
    /* ArticleInfoType.tag */
  ]).map((name) => ({
    name,
    path: tagMap.value.map[name].path
  })));
};
const useArticleDate = (info) => computed(() => {
  const { [
    "d"
    /* ArticleInfoType.date */
  ]: date } = info.value;
  return date ? ot(date) : null;
});
const useArticleInfo = (props) => {
  const articleInfo = toRef(props, "info");
  const blogOptions = useBlogOptions();
  const author = useArticleAuthor(articleInfo);
  const category = useArticleCategory(articleInfo);
  const tag = useArticleTag(articleInfo);
  const date = useArticleDate(articleInfo);
  const info = computed(() => ({
    author: author.value,
    category: category.value,
    date: date.value,
    localizedDate: articleInfo.value[
      "l"
      /* ArticleInfoType.localizedDate */
    ] || "",
    tag: tag.value,
    isOriginal: articleInfo.value[
      "o"
      /* ArticleInfoType.isOriginal */
    ] || false,
    readingTime: articleInfo.value[
      "r"
      /* ArticleInfoType.readingTime */
    ] || null,
    pageview: props.path
  }));
  const items = computed(() => blogOptions.value.articleInfo);
  return { info, items };
};
const articlesSymbol = Symbol.for("articles");
const useArticles = () => {
  const articles = inject(articlesSymbol);
  if (!articles) {
    throw new Error("useArticles() is called without provider.");
  }
  return articles;
};
const setupArticles = () => {
  const articles = C("article");
  provide(articlesSymbol, articles);
};
const starsSymbol = Symbol.for("stars");
const useStars = () => {
  const stars = inject(starsSymbol);
  if (!stars) {
    throw new Error("useStars() is called without provider.");
  }
  return stars;
};
const setupStars = () => {
  const stars = C("star");
  provide(starsSymbol, stars);
};
const timelinesSymbol = Symbol.for("timelines");
const useTimelines = () => {
  const timelines = inject(timelinesSymbol);
  if (!timelines) {
    throw new Error("useTimelines() is called without provider.");
  }
  return timelines;
};
const setupTimelines = () => {
  const timelines = C("timeline");
  const timelineItems2 = computed(() => {
    const timelineItems3 = [];
    timelines.value.items.forEach(({ info, path }) => {
      var _a2;
      const { year, month, day } = ((_a2 = ot(info[
        "d"
        /* ArticleInfoType.date */
      ])) == null ? void 0 : _a2.info) || {};
      if (year && month && day) {
        if (!timelineItems3[0] || timelineItems3[0].year !== year)
          timelineItems3.unshift({ year, items: [] });
        timelineItems3[0].items.push({
          date: `${month}/${day}`,
          info,
          path
        });
      }
    });
    return {
      ...timelines.value,
      config: timelineItems3.reverse()
    };
  });
  provide(timelinesSymbol, timelineItems2);
};
const setupBlog = () => {
  setupArticles();
  setupCategoryMap();
  setupStars();
  setupTagMap();
  setupTimelines();
};
const socialMedia = "";
const SocialMedia = defineComponent({
  name: "SocialMedia",
  setup() {
    const blogOptions = useBlogOptions();
    const isPure = usePure();
    const mediaLinks = computed(() => {
      const config2 = blogOptions.value.medias;
      return config2 ? Object.entries(config2).map(([media, url]) => ({
        name: media,
        icon: icons[media],
        url
      })) : [];
    });
    return () => mediaLinks.value.length ? h$4("div", { class: "social-media-wrapper" }, mediaLinks.value.map(({ name, icon, url }) => h$4("a", {
      class: "social-media",
      href: url,
      rel: "noopener noreferrer",
      target: "_blank",
      "aria-label": name,
      ...isPure.value ? {} : { "data-balloon-pos": "up" },
      innerHTML: icon
    }))) : null;
  }
});
const bloggerInfo = "";
const BloggerInfo = defineComponent({
  name: "BloggerInfo",
  setup() {
    const blogOptions = useBlogOptions();
    const siteLocale = useSiteLocaleData();
    const themeLocale = useThemeLocaleData();
    const articles = useArticles();
    const categoryMap2 = useCategoryMap();
    const tagMap = useTagMap();
    const timelines = useTimelines();
    const navigate = useNavigate();
    const bloggerName = computed(() => {
      var _a2;
      return blogOptions.value.name || ((_a2 = re(themeLocale.value.author)[0]) == null ? void 0 : _a2.name) || siteLocale.value.title;
    });
    const bloggerAvatar = computed(() => blogOptions.value.avatar || themeLocale.value.logo);
    const locale = computed(() => themeLocale.value.blogLocales);
    const intro = computed(() => blogOptions.value.intro);
    return () => h$4("div", {
      class: "blogger-info",
      vocab: "https://schema.org/",
      typeof: "Person"
    }, [
      h$4("div", {
        class: "blogger",
        ...intro.value ? {
          style: { cursor: "pointer" },
          "aria-label": locale.value.intro,
          "data-balloon-pos": "down",
          role: "navigation",
          onClick: () => navigate(intro.value)
        } : {}
      }, [
        bloggerAvatar.value ? h$4("img", {
          class: [
            "blogger-avatar",
            { round: blogOptions.value.roundAvatar }
          ],
          src: withBase(bloggerAvatar.value),
          property: "image",
          alt: "Blogger Avatar"
        }) : null,
        bloggerName.value ? h$4("div", { class: "blogger-name", property: "name" }, bloggerName.value) : null,
        blogOptions.value.description ? h$4("div", {
          class: "blogger-description",
          innerHTML: blogOptions.value.description
        }) : null,
        intro.value ? h$4("meta", { property: "url", content: withBase(intro.value) }) : null
      ]),
      h$4("div", { class: "num-wrapper" }, [
        h$4("div", { onClick: () => navigate(articles.value.path) }, [
          h$4("div", { class: "num" }, articles.value.items.length),
          h$4("div", locale.value.article)
        ]),
        h$4("div", { onClick: () => navigate(categoryMap2.value.path) }, [
          h$4("div", { class: "num" }, Object.keys(categoryMap2.value.map).length),
          h$4("div", locale.value.category)
        ]),
        h$4("div", { onClick: () => navigate(tagMap.value.path) }, [
          h$4("div", { class: "num" }, Object.keys(tagMap.value.map).length),
          h$4("div", locale.value.tag)
        ]),
        h$4("div", { onClick: () => navigate(timelines.value.path) }, [
          h$4("div", { class: "num" }, timelines.value.items.length),
          h$4("div", locale.value.timeline)
        ])
      ]),
      h$4(SocialMedia)
    ]);
  }
});
const CategoryIcon = () => h$4(P$2, { name: "category" }, () => h$4("path", {
  d: "M148.41 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H148.41c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.311-40.31zM147.556 553.478H429.73c22.263 0 40.311 18.048 40.311 40.31v282.176c0 22.263-18.048 40.312-40.31 40.312H147.555c-22.263 0-40.311-18.049-40.311-40.312V593.79c0-22.263 18.048-40.311 40.31-40.311zM593.927 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H593.927c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.31-40.31zM730.22 920.502H623.926c-40.925 0-74.22-33.388-74.22-74.425V623.992c0-41.038 33.387-74.424 74.425-74.424h222.085c41.038 0 74.424 33.226 74.424 74.067v114.233c0 10.244-8.304 18.548-18.547 18.548s-18.548-8.304-18.548-18.548V623.635c0-20.388-16.746-36.974-37.33-36.974H624.13c-20.585 0-37.331 16.747-37.331 37.33v222.086c0 20.585 16.654 37.331 37.126 37.331H730.22c10.243 0 18.547 8.304 18.547 18.547 0 10.244-8.304 18.547-18.547 18.547z"
}));
CategoryIcon.displayName = "CategoryIcon";
const TagIcon = () => h$4(P$2, { name: "tag" }, () => h$4("path", {
  d: "M939.902 458.563L910.17 144.567c-1.507-16.272-14.465-29.13-30.737-30.737L565.438 84.098h-.402c-3.215 0-5.726 1.005-7.634 2.913l-470.39 470.39a10.004 10.004 0 000 14.164l365.423 365.424c1.909 1.908 4.42 2.913 7.132 2.913s5.223-1.005 7.132-2.913l470.39-470.39c2.01-2.11 3.014-5.023 2.813-8.036zm-240.067-72.121c-35.458 0-64.286-28.828-64.286-64.286s28.828-64.285 64.286-64.285 64.286 28.828 64.286 64.285-28.829 64.286-64.286 64.286z"
}));
TagIcon.displayName = "TagIcon";
const TimelineIcon = () => h$4(P$2, { name: "timeline" }, () => h$4("path", {
  d: "M511.997 70.568c-243.797 0-441.429 197.633-441.429 441.435 0 243.797 197.632 441.429 441.43 441.429S953.431 755.8 953.431 512.002c0-243.796-197.637-441.434-441.435-441.434zm150.158 609.093-15.605 15.61c-8.621 8.615-22.596 8.615-31.215 0L472.197 552.126c-4.95-4.944-4.34-14.888-4.34-24.677V247.14c0-12.19 9.882-22.07 22.07-22.07h22.07c12.19 0 22.07 9.882 22.07 22.07v273.218l128.088 128.088c8.62 8.62 8.62 22.595 0 31.215zm0 0"
}));
TimelineIcon.displayName = "TimelineIcon";
const SlideIcon = () => h$4(P$2, { name: "slides" }, () => h$4("path", {
  d: "M896 170.667v426.666a85.333 85.333 0 0 1-85.333 85.334h-256v61.184l192.597 115.584-43.861 73.13-148.736-89.173v95.275h-85.334v-95.318l-148.736 89.216-43.861-73.13 192.597-115.627v-61.141h-256A85.333 85.333 0 0 1 128 597.333V170.667H85.333V85.333h853.334v85.334H896zm-682.667 0v426.666h597.334V170.667H213.333zM426.667 512h-85.334V341.333h85.334V512zm128 0h-85.334V256h85.334v256zm128 0h-85.334V384h85.334v128z"
}));
SlideIcon.displayName = "SlideIcon";
const StickyIcon = () => h$4(P$2, { name: "sticky" }, () => [
  h$4("path", {
    d: "m381.3 733.8l-161.9 118c-5.9 4.5-13.2 6.6-20.1 6.6-8.7 0-17.7-3.4-24.3-10-12.2-12.2-13.9-31.3-3.5-45.2l144.5-195.5-113.6-112.9c-11.1-11.1-13.2-28.4-5.5-42 5.5-8.7 52.1-76.4 155.5-51 1.8 0.3 3.5 0.3 5.6 0.7 4.2 0.3 9 0.7 14.2 1.7 21.9 3.5 60.8-13.9 94.5-42.7 32.3-27.5 53.1-59.4 53.1-81.6 0-5.2 0-10.8-0.3-16-0.7-20.8-2.1-52.8 21.5-76.4 28.1-28.1 72.9-30.6 103.9-5.2 0.6 0.3 1 1 1.7 1.7 16.7 16.3 187.5 187.2 189.3 188.9 14.5 14.6 22.9 34.4 22.9 55.3 0 20.8-8 40.2-22.9 54.8-23.7 23.6-56 22.6-77.1 21.6-4.9 0-10.5-0.4-15.7-0.4-20.8 0-45.8 14.6-70.5 41.3-34.3 37.5-55.5 85.8-53.8 107.7 0.7 6.9 2.1 19.1 2.4 20.8 25 101.4-42.7 147.6-50.7 152.8-13.9 8.4-31.6 6.3-42.7-4.8l-112.1-112.2z"
  })
]);
StickyIcon.displayName = "StickyIcon";
const ArticleIcon = () => h$4(P$2, { name: "article" }, () => h$4("path", {
  d: "M853.333 938.667H170.667A42.667 42.667 0 0 1 128 896V128a42.667 42.667 0 0 1 42.667-42.667h682.666A42.667 42.667 0 0 1 896 128v768a42.667 42.667 0 0 1-42.667 42.667zm-42.666-85.334V170.667H213.333v682.666h597.334zM298.667 256h170.666v170.667H298.667V256zm0 256h426.666v85.333H298.667V512zm0 170.667h426.666V768H298.667v-85.333zm256-384h170.666V384H554.667v-85.333z"
}));
ArticleIcon.displayName = "ArticleIcon";
const BookIcon = () => h$4(P$2, { name: "book" }, () => h$4("path", {
  d: "M256 853.333h426.667A85.333 85.333 0 0 0 768 768V256a85.333 85.333 0 0 0-85.333-85.333H469.333a42.667 42.667 0 0 1 0-85.334h213.334A170.667 170.667 0 0 1 853.333 256v512a170.667 170.667 0 0 1-170.666 170.667H213.333A42.667 42.667 0 0 1 170.667 896V128a42.667 42.667 0 0 1 42.666-42.667h128A42.667 42.667 0 0 1 384 128v304.256l61.653-41.088a42.667 42.667 0 0 1 47.36 0l61.654 41.045V256A42.667 42.667 0 0 1 640 256v256a42.667 42.667 0 0 1-66.347 35.499l-104.32-69.547-104.32 69.547A42.667 42.667 0 0 1 298.667 512V170.667H256v682.666z"
}));
BookIcon.displayName = "BookIcon";
const LinkIcon = () => h$4(P$2, { name: "link" }, () => h$4("path", {
  d: "M460.8 584.533c17.067 17.067 17.067 42.667 0 59.734-17.067 17.066-42.667 17.066-59.733 0-85.334-85.334-85.334-217.6 0-302.934L554.667 192C640 110.933 776.533 110.933 857.6 196.267c81.067 81.066 81.067 213.333 0 294.4l-68.267 64c0-34.134-4.266-68.267-17.066-102.4l21.333-21.334c51.2-46.933 55.467-128 4.267-179.2s-128-55.466-179.2-4.266c-4.267 0-4.267 4.266-4.267 4.266L465.067 401.067c-51.2 51.2-51.2 132.266-4.267 183.466m123.733-183.466C601.6 384 627.2 384 644.267 401.067c85.333 85.333 85.333 217.6 0 302.933l-153.6 149.333C405.333 934.4 268.8 934.4 187.733 849.067c-81.066-81.067-81.066-213.334 0-294.4l68.267-64c0 34.133 4.267 72.533 17.067 102.4L251.733 614.4C204.8 665.6 204.8 746.667 256 793.6c51.2 46.933 123.733 46.933 174.933 0l149.334-149.333c51.2-51.2 51.2-128 0-179.2-12.8-17.067-17.067-46.934 4.266-64z"
}));
LinkIcon.displayName = "LinkIcon";
const ProjectIcon = () => h$4(P$2, { name: "project" }, () => h$4("path", {
  d: "M987.456 425.152H864V295.296a36.48 36.48 0 0 0-36.544-36.544h-360l-134.08-128.256A9.344 9.344 0 0 0 327.04 128H36.48A36.48 36.48 0 0 0 0 164.544v676.608a36.48 36.48 0 0 0 36.544 36.544h797.76a36.672 36.672 0 0 0 33.92-22.848L1021.44 475.52a36.48 36.48 0 0 0-33.92-50.304zM82.304 210.304h215.424l136.64 130.752h347.328v84.096H198.848A36.672 36.672 0 0 0 164.928 448L82.304 652.8V210.304zM808.32 795.456H108.544l118.08-292.608h699.904L808.32 795.52z"
}));
ProjectIcon.displayName = "ProjectIcon";
const FriendIcon = () => h$4(P$2, { name: "friend" }, () => h$4("path", {
  d: "M860.16 213.333A268.373 268.373 0 0 0 512 186.027a267.52 267.52 0 0 0-348.16 404.48L428.8 855.893a118.613 118.613 0 0 0 166.4 0l264.96-265.386a267.52 267.52 0 0 0 0-377.174zM800 531.627l-264.96 264.96a32.427 32.427 0 0 1-46.08 0L224 530.347a183.04 183.04 0 0 1 0-256 182.187 182.187 0 0 1 256 0 42.667 42.667 0 0 0 60.587 0 182.187 182.187 0 0 1 256 0 183.04 183.04 0 0 1 3.413 256z"
}));
FriendIcon.displayName = "FriendIcon";
const SlideDownIcon = () => h$4(P$2, { name: "slide-down" }, () => h$4("path", {
  d: "M108.775 312.23c13.553 0 27.106 3.734 39.153 11.806l375.205 250.338 363.641-252.808c32.587-21.624 76.499-12.83 98.123 19.757 21.685 32.467 12.95 76.56-19.576 98.184l-402.854 278.89c-23.733 15.901-54.694 15.962-78.547.12L69.501 442.097c-32.647-21.685-41.441-65.777-19.817-98.304 13.734-20.54 36.201-31.563 59.09-31.563Z"
}));
SlideDownIcon.displayName = "SlideDownIcon";
const emptyIcon = "";
const EmptyIcon = () => h$4("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  // eslint-disable-next-line @typescript-eslint/naming-convention
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  class: "empty-icon",
  viewBox: "0 0 1024 1024",
  innerHTML: '<defs><linearGradient id="f" x1="512.342" y1="2266.13" x2="512.342" y2="666.063" gradientUnits="userSpaceOnUse"><stop offset=".919" stop-color="#e6e6e6" stop-opacity="0"/><stop offset="1" stop-color="#e6e6e6"/></linearGradient><linearGradient id="g" x1="528.912" y1="774" x2="388.088" y2="612" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#e6e6e6" stop-opacity="0"/></linearGradient><linearGradient id="h" x1="213.219" y1="721.704" x2="251.313" y2="683.61" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#d7d7d7"/><stop offset=".485" stop-color="#fafafa"/><stop offset="1" stop-color="#fafafa"/></linearGradient><linearGradient id="i" x1="724.813" y1="821.718" x2="768.656" y2="777.876" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#fafafa"/></linearGradient><linearGradient id="a" x1="513.493" y1="714.594" x2="471.007" y2="544.188" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#999"/><stop offset="1" stop-color="#ccc"/></linearGradient><linearGradient id="b" x1="440.156" y1="564.031" x2="508.594" y2="495.594" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#f0f0f0"/></linearGradient><linearGradient id="l" x1="660.988" y1="754.156" x2="608.637" y2="544.188" xlink:href="#a"/><linearGradient id="m" x1="479.188" y1="774.219" x2="649.782" y2="603.625" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#b3b3b3"/><stop offset="1" stop-color="#e6e6e6"/></linearGradient><linearGradient id="n" x1="447.121" y1="774.219" x2="394.661" y2="563.813" xlink:href="#a"/><linearGradient id="o" x1="494" y1="597" x2="628" y2="463" xlink:href="#b"/><linearGradient id="d" x1="610.485" y1="604.938" x2="697.298" y2="518.125" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#fff"/></linearGradient><linearGradient id="p" x1="457.438" y1="619.25" x2="353.469" y2="619.25" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#e6e6e6" stop-opacity="0"/><stop offset="1" stop-color="#e6e6e6"/></linearGradient><linearGradient id="q" x1="542.734" y1="674.25" x2="615.672" y2="601.313" xlink:href="#b"/><linearGradient id="c" x1="627.933" y1="358.938" x2="685.192" y2="422.531" gradientUnits="userSpaceOnUse"><stop offset=".4" stop-color="#e6e6e6" stop-opacity=".4"/><stop offset=".443" stop-color="#fff"/><stop offset=".6" stop-color="#ccc"/></linearGradient><linearGradient id="r" x1="618.547" y1="422.531" x2="681.547" y2="359.531" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#e6e6e6"/><stop offset=".761" stop-color="#fff"/><stop offset="1" stop-color="#f0f0f0"/></linearGradient><linearGradient id="s" x1="625" y1="441.5" x2="697" y2="369.5" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset=".761" stop-color="#fff"/><stop offset="1" stop-color="#f0f0f0"/></linearGradient><linearGradient id="t" x1="627.681" y1="361.438" x2="692.257" y2="433.156" xlink:href="#c"/><linearGradient id="u" x1="561.414" y1="735.438" x2="573.149" y2="688.375" xlink:href="#d"/><linearGradient id="v" x1="405" y1="485.875" x2="440" y2="450.875" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#fff" stop-opacity=".702"/></linearGradient><linearGradient id="w" x1="404.61" y1="486.906" x2="441.86" y2="449.656" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset=".495" stop-color="#ccc" stop-opacity=".702"/><stop offset=".498" stop-color="#ccc"/><stop offset="1" stop-color="#fff" stop-opacity=".302"/></linearGradient><radialGradient id="e" cx="329.297" cy="647.578" r="8.172" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fafafa"/><stop offset="1.2" stop-color="#e6e6e6"/></radialGradient><radialGradient id="j" cx="802.297" cy="673.578" r="8.172" xlink:href="#e"/><radialGradient id="k" cx="774.844" cy="642.75" r="5.531" xlink:href="#e"/></defs><path d="M512.33 666.07c441.828 0 800 358.18 800 800.03s-358.172 800.02-800 800.02-800-358.18-800-800.02 358.17-800.03 800-800.03z" style="fill:url(#f);fill-rule:evenodd"/><path d="m272 694 242-82 131 119-188 43z" style="fill:url(#g);fill-rule:evenodd"/><path fill="#b3b3b3" fill-rule="evenodd" d="M232.391 723.534a2.4 2.4 0 0 1 2.4 2.4v17.725a2.4 2.4 0 0 1-4.8 0v-17.725a2.4 2.4 0 0 1 2.4-2.4z"/><path d="M232.255 676.559c10.33 0 17.067 15.408 18.7 28.493 1.619 12.942-2.372 23.694-18.7 23.694-16.878 0-20.213-10.733-18.7-23.694 1.633-14.061 8.37-28.493 18.7-28.493z" style="fill:url(#h);fill-rule:evenodd"/><path fill="#b3b3b3" fill-rule="evenodd" d="M745.853 826h.938a2.4 2.4 0 0 1 2.4 2.4v22.238a2.4 2.4 0 0 1-2.4 2.4h-.938a2.4 2.4 0 0 1-2.4-2.4V828.4a2.4 2.4 0 0 1 2.4-2.4z"/><path d="M746.727 830.3c-19.438 0-23.278-9.326-21.541-20.59a34.467 34.467 0 0 1 3.289-10.369 16.628 16.628 0 0 1 0-9.112c2.889-12.327 12.059-20.911 18.356-20.911 6.56 0 15.468 9.1 18.356 20.911a14.589 14.589 0 0 1-.335 9.217 34.36 34.36 0 0 1 3.419 10.264c1.861 11.243-2.735 20.59-21.544 20.59z" style="fill:url(#i);fill-rule:evenodd"/><path fill="#ccc" fill-rule="evenodd" d="M328.841 654.562a6.571 6.571 0 0 0-5.2-5.027q-4.107-.952-.034-2.045a6.571 6.571 0 0 0 5.027-5.2q.952-4.109 2.045-.035a6.569 6.569 0 0 0 5.2 5.027q4.109.954.035 2.045a6.569 6.569 0 0 0-5.027 5.2q-.955 4.108-2.046.035z"/><path d="M328.383 653.73a6.567 6.567 0 0 0-5.2-5.027q-4.109-.954-.035-2.045a6.568 6.568 0 0 0 5.027-5.2q.954-4.107 2.046-.034a6.568 6.568 0 0 0 5.2 5.027q4.107.952.035 2.045a6.568 6.568 0 0 0-5.027 5.2q-.954 4.104-2.046.034z" style="fill:url(#e);fill-rule:evenodd"/><path fill="#ccc" fill-rule="evenodd" d="M801.841 680.562a6.571 6.571 0 0 0-5.2-5.027q-4.107-.952-.034-2.045a6.571 6.571 0 0 0 5.027-5.2q.952-4.109 2.045-.035a6.569 6.569 0 0 0 5.2 5.027q4.108.954.035 2.045a6.569 6.569 0 0 0-5.027 5.2q-.955 4.108-2.046.035z"/><path d="M801.383 679.73a6.567 6.567 0 0 0-5.2-5.027q-4.108-.954-.035-2.045a6.568 6.568 0 0 0 5.027-5.2q.954-4.107 2.046-.034a6.568 6.568 0 0 0 5.2 5.027q4.107.952.035 2.045a6.568 6.568 0 0 0-5.027 5.2q-.954 4.104-2.046.034z" style="fill:url(#j);fill-rule:evenodd"/><path d="M774.21 646.9a4.446 4.446 0 0 0-3.517-3.4q-2.778-.643-.023-1.383a4.443 4.443 0 0 0 3.4-3.517q.645-2.778 1.383-.023a4.443 4.443 0 0 0 3.517 3.4q2.778.645.023 1.383a4.446 4.446 0 0 0-3.4 3.517q-.645 2.78-1.383.023z" style="fill:url(#k);fill-rule:evenodd"/><path d="m385.6 714.6.158-150.658L598.9 544.174l-.158 150.658z" style="fill:url(#a);fill-rule:evenodd"/><path d="m385.474 564.031 214.763-19.383-36.171-49.067-215.559 17.634z" style="fill:url(#b);fill-rule:evenodd"/><path d="m598.744 694.832.156-150.658 71.975 59.319-.158 150.658z" style="fill:url(#l);fill-rule:evenodd"/><path d="m457.064 774.209.158-150.658 214.691-19.914-.158 150.663z" style="fill:url(#m);fill-rule:evenodd"/><path d="m384.566 714.459.158-150.659 72.5 59.75-.158 150.658z" style="fill:url(#n);fill-rule:evenodd"/><path d="M494 640s75.357-58.4 42-83-38.887 1.663-37 14 53.847 12.465 54-26c.2-49.979 75-125 75-125" style="fill:none;stroke-width:3px;stroke-dasharray:12 6;stroke:url(#o);fill-rule:evenodd"/><path d="m670.275 604.939-72.041-59.9 38.476-26.909 72.86 58.159z" style="fill:url(#d);fill-rule:evenodd"/><path d="m425.5 674.383-72.042-59.9 31.109-50.347 72.86 58.16z" style="fill:url(#p);fill-rule:evenodd"/><path d="m487.918 674.235 214.482-22.57-31.1-50.346-215.309 20.833z" style="fill:url(#q);fill-rule:evenodd"/><path style="fill:#fff;fill-rule:evenodd" d="m697.363 358.927-69.58 62.511-12.035 1.082z"/><path d="m697.363 358.927-69.58 62.511-12.035 1.082z" style="fill:url(#c);fill-rule:evenodd"/><path d="M615.748 422.52 604 413l92.089-53.46" style="fill:url(#r);fill-rule:evenodd"/><path d="m625 432 12 18 60-89" style="fill:url(#s);fill-rule:evenodd"/><path d="m626.98 421.335-2.471 11.828 70.918-71.735" style="fill:#fff;fill-rule:evenodd"/><path d="m626.98 421.335-2.471 11.828 70.918-71.735" style="fill:url(#t);fill-rule:evenodd"/><path d="m494.814 735.44 21.293-2.1v-6.613l-13.4 1.319v-6.965l10.977-1.08v-6.613l-10.977 1.08v-6.084l12.917-1.27v-6.525l-20.808 2.047v32.8zM521 732.863l7.054-.694v-11.241a106.361 106.361 0 0 0-1.014-11.274l.176-.017 2.645 7.586 4.453 11.553 4.32-.425 4.408-12.424 2.733-8.116.177-.018a111.811 111.811 0 0 0-1.014 11.474v11.241l7.185-.707V697l-8.552.841-5.025 14.646c-.618 1.956-1.147 4.08-1.808 6.173l-.22.022c-.617-1.968-1.146-3.987-1.808-5.818l-5.2-13.639-8.508.837v32.8zm37.213-3.661 7.891-.776v-10.889l3.835-.377c6.922-.681 12.961-4.714 12.961-12.517 0-8.111-5.951-10.082-13.181-9.371l-11.504 1.128v32.8zm7.891-17.881v-9.478l3.218-.316c3.792-.373 5.908.565 5.908 3.871 0 3.218-1.852 5.208-5.687 5.585zM594 725.682l7.891-.777v-26.274l8.905-.876v-6.524l-25.657 2.524v6.524l8.861-.871v26.274zm27.991-2.754 7.847-.772v-11.594l9.919-22.18-8.244.811-2.733 7.542c-.925 2.56-1.807 4.939-2.733 7.587l-.176.018c-.926-2.466-1.764-4.676-2.645-7.058l-2.734-7-8.375.824 9.874 20.233v11.594z" style="fill:url(#u);fill-rule:evenodd"/><path fill="#ccc" fill-rule="evenodd" d="M408.938 457.309a17.5 17.5 0 0 0 21.374 26.725 17.5 17.5 0 1 1-16.306-30.955 17.442 17.442 0 0 0-5.068 4.23z"/><circle cx="422.5" cy="468.375" r="17.5" style="fill:url(#v)"/><path fill="#ccc" fill-rule="evenodd" d="M391.76 451.5c-2.358 4.419 9.827 15.52 27.215 24.8 15.131 8.071 29.212 12.1 34.166 10.093-4.191 2.772-18.943-1.24-34.86-9.73-17.388-9.275-29.573-20.376-27.215-24.8a2.96 2.96 0 0 1 1.585-1.3 2.606 2.606 0 0 0-.891.937z"/><path d="M418.975 476.29c-17.388-9.275-29.573-20.376-27.215-24.8s18.363-.484 35.751 8.791 29.572 20.376 27.215 24.8-18.364.483-35.751-8.791zm31.634 5.732c1.824-3.42-8.789-12.642-23.7-20.6s-28.486-11.633-30.31-8.213 8.789 12.642 23.7 20.6 28.486 11.633 30.31 8.213zm-36.645-29.008-2.775 1.452.032 1.751 28.637 14.183.266-4.559z" style="fill:url(#w);fill-rule:evenodd"/><g class="people"><path style="fill:#f8cfad;fill-rule:evenodd" d="m612.131 676.5 1.362 3.532 3.255-2.324-1.361-3.532zM629.131 665.5l1.362 3.532 3.255-2.324-1.361-3.532z"/><path style="fill:#141a33;fill-rule:evenodd" d="m617.764 678.184-3.162-.078a11.028 11.028 0 0 0-1.034 3.454c-.258 2.006-1.177 5-.449 5.367 1.5 2.659 4.118-.215 4.118-.215s2.187-2.848 1.925-5.265c-.106-.973-1.181-1.869-1.398-3.263zM633.781 665.855l3.019.945a11.008 11.008 0 0 1-.137 3.6c-.4 1.981-.179 4.166-.986 4.277-2.283 2.03-3.827-1.533-3.827-1.533s-1.473-2.456-.444-4.659c.412-.88 1.718-1.385 2.375-2.63z"/><path style="fill:#f0c5a8;fill-rule:evenodd" d="M599.935 592.534s10.293 9.761 11.95 7.564 3.536-3.463-6.758-13.65z"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M611.3 596.361c1.674-1.105 11.5 7.048 14.5 11.774s-12.705-4.36-14.632-6.776-1.54-3.893.132-4.998z"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M621.815 607.988s1.809 2.549 2.433 1.756 2.475-1.064 2.449-1.138.1-.819 1.288-2.331-3.8-3.632-5.81-.494a2.556 2.556 0 0 0-.36 2.207z"/><path fill="#232c57" fill-rule="evenodd" d="M598 617s14.968-5.618 17 7a150.235 150.235 0 0 1 2 22s12.666 11.836 16 19c0 0-4.753-1.629-4 2 0 0-18.132-14.647-19-19s-9.148-18.716-12-31z"/><path d="M589 622s14.968-5.618 17 7a150.235 150.235 0 0 1 2 22s4.666 17.836 8 25c0 0-4.753-1.629-4 2 0 0-10.132-20.647-11-25s-9.148-18.716-12-31z" style="fill:#292966;fill-rule:evenodd"/><path style="fill:#f0c5a8;fill-rule:evenodd" d="M585.626 597.7s-10.292 9.761-11.95 7.563-3.536-3.463 6.758-13.65z"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M574.259 601.529c-1.675-1.105-11.5 7.049-14.5 11.774s12.7-4.36 14.631-6.775 1.543-3.894-.131-4.999z"/><path style="fill:#f0c5a8;fill-rule:evenodd" d="M591.715 577.752s-.606 1.681 1.48 3.716-3.615 5.307-4.645 2.85-.48-2.716-.48-2.716z"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M583.527 574.123c-.839 1.043.491 3.873 1.453 5.449s2.749 2.833 3.364 2.428 4.088-2.657 4-4-.228-3.4-.228-3.4 2.562-1.641 2.154-2.916-2.916-.154-2.916-.154a15.853 15.853 0 0 0-.227-2.224c-.189-.929-6.887-1.445-7.827 2.6s.558 1.805.227 2.217z"/><path fill="#232c57" fill-rule="evenodd" d="M584.227 567.758c2.1-.885 7.2-3.684 10.125.318s.842 4.385.989 5.294-1.894 5.69-1.341 6.63-3.865.8-4.657-1.179-2.844-.539-2.227-1.224-1.3-4.456-2.916-2.154a9.252 9.252 0 0 0 .309-1.38c-.115.192.259-3.257-.673-1.32s-2.1 1.037-3.069.762-1.8-1.118-1.071-1.689c.023-.016 2.436-3.172 4.531-4.058z"/><path d="M589 585c-2.584-.47-10.055.362-13 13 0 0 1.9 3.349 5 4s6 21 6 21 24.016 11.06 27-3c-.07-13.826-8-21-8-21s5.829-3.2 5-6-8.016-10.153-11-10-6 0-6 0-2.416 2.47-5 2z" style="fill:#f6bb07;fill-rule:evenodd"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M563.284 612.581s-.986 2.965-1.814 2.389-2.678-.3-2.675-.374-.333-.755-1.912-1.854 2.577-4.583 5.414-2.167a2.551 2.551 0 0 1 .987 2.006z"/></g>'
});
EmptyIcon.displayName = "EmptyIcon";
const LockIcon = () => h$4(P$2, { name: "lock" }, () => h$4("path", {
  d: "M787.168 952.268H236.832c-30.395 0-55.033-24.638-55.033-55.033V429.45c0-30.395 24.638-55.034 55.033-55.034h82.55V264.35c0-106.38 86.238-192.618 192.618-192.618S704.618 157.97 704.618 264.35v110.066h82.55c30.395 0 55.033 24.639 55.033 55.034v467.785c0 30.395-24.639 55.033-55.033 55.033zM484.483 672.046v115.122h55.034V672.046c31.99-11.373 55.033-41.605 55.033-77.496 0-45.592-36.958-82.55-82.55-82.55s-82.55 36.958-82.55 82.55c0 35.89 23.042 66.123 55.033 77.496zM622.067 264.35c0-60.788-49.28-110.067-110.067-110.067s-110.067 49.28-110.067 110.067v110.066h220.135V264.35z"
}));
LockIcon.displayName = "LockIcon";
const articleItem = "";
const ArticleItem = defineComponent({
  name: "ArticleItem",
  props: {
    /**
     * Article information
     *
     * 文章信息
     */
    info: {
      type: Object,
      required: true
    },
    /**
     * Article path
     *
     * 文章路径
     */
    path: { type: String, required: true }
  },
  setup(props) {
    const info = toRef(props, "info");
    const { info: articleInfo, items } = useArticleInfo(props);
    return () => h$4("div", { class: "article-item" }, h$4("article", {
      class: "article",
      vocab: "https://schema.org/",
      typeof: "Article"
    }, [
      info.value[
        "u"
        /* ArticleInfoType.sticky */
      ] ? h$4(StickyIcon) : null,
      h$4(RouterLink, { to: props.path }, () => [
        h$4("header", { class: "title" }, [
          info.value[
            "n"
            /* ArticleInfoType.isEncrypted */
          ] ? h$4(LockIcon) : null,
          info.value[
            "y"
            /* ArticleInfoType.type */
          ] === "s" ? h$4(SlideIcon) : null,
          h$4("span", { property: "headline" }, info.value.title),
          info.value[
            "v"
            /* ArticleInfoType.cover */
          ] ? h$4("meta", {
            property: "image",
            content: withBase(info.value[
              "v"
              /* ArticleInfoType.cover */
            ])
          }) : null
        ])
      ]),
      info.value[
        "e"
        /* ArticleInfoType.excerpt */
      ] ? h$4("div", {
        class: "article-excerpt",
        innerHTML: info.value[
          "e"
          /* ArticleInfoType.excerpt */
        ]
      }) : null,
      h$4("hr", { class: "hr" }),
      h$4(PageInfo, {
        info: articleInfo.value,
        ...items.value ? { items: items.value } : {}
      })
    ]));
  }
});
const pagination = "";
const Pagination = defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Pagination",
  props: {
    /**
     * Number of total items
     *
     * 项目总数
     */
    total: { type: Number, default: 10 },
    /**
     * Items per page
     *
     * 每页项目数
     */
    perPage: { type: Number, default: 10 },
    /**
     * Current page number
     *
     * 当前页面
     */
    current: { type: Number, default: 1 }
  },
  emits: {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    updateCurrentPage: (_page) => true
  },
  setup(props, { emit }) {
    let message2;
    const themeLocale = useThemeLocaleData();
    const input = ref("");
    const locale = computed(() => themeLocale.value.paginationLocales);
    const totalPages = computed(() => Math.ceil(props.total / props.perPage));
    const enable = computed(() => Boolean(totalPages.value) && totalPages.value !== 1);
    const displayLeftEllipsis = computed(() => {
      if (totalPages.value < 7)
        return false;
      return props.current > 4;
    });
    const displayRightEllipsis = computed(() => {
      if (totalPages.value < 7)
        return false;
      return props.current < totalPages.value - 3;
    });
    const indexes = computed(() => {
      const { current: currentPage } = props;
      let min = 1;
      let max2 = totalPages.value;
      const arr = [];
      if (totalPages.value >= 7) {
        if (currentPage <= 4 && currentPage < totalPages.value - 3) {
          min = 1;
          max2 = 5;
        } else if (currentPage > 4 && currentPage >= totalPages.value - 3) {
          max2 = totalPages.value;
          min = totalPages.value - 4;
        } else if (totalPages.value > 7) {
          min = currentPage - 2;
          max2 = currentPage + 2;
        }
      }
      for (let i2 = min; i2 <= max2; i2++)
        arr.push(i2);
      return arr;
    });
    const navigate = (page2) => emit("updateCurrentPage", page2);
    const jumpPage = (index2) => {
      const pageNum = parseInt(index2);
      if (pageNum <= totalPages.value && pageNum > 0)
        navigate(pageNum);
      else
        message2.pop(`<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path d="M64 512a448 448 0 1 0 896 0 448 448 0 1 0-896 0Z" fill="#FA5151"/><path d="m557.3 512 113.1-113.1c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L512 466.7 398.9 353.6c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L466.7 512 353.6 625.1c-12.5 12.5-12.5 32.8 0 45.3 6.2 6.2 14.4 9.4 22.6 9.4s16.4-3.1 22.6-9.4L512 557.3l113.1 113.1c6.2 6.2 14.4 9.4 22.6 9.4s16.4-3.1 22.6-9.4c12.5-12.5 12.5-32.8 0-45.3L557.3 512z" fill="#FFF"/></svg>${locale.value.errorText.replace(/\$page/g, totalPages.value.toString())}`);
    };
    onMounted(() => {
      message2 = new Pt();
    });
    return () => h$4("div", { class: "pagination-wrapper" }, enable.value ? h$4("div", { class: "pagination-list" }, [
      h$4("div", { class: "page-number" }, [
        // prev button
        props.current > 1 ? h$4("div", {
          class: "prev",
          role: "navigation",
          unselectable: "on",
          onClick: () => navigate(props.current - 1)
        }, locale.value.prev) : null,
        // left ellipsis
        ...displayLeftEllipsis.value ? [
          h$4("div", {
            role: "navigation",
            onClick: () => navigate(1)
          }, 1),
          h$4("div", { class: "ellipsis" }, "...")
        ] : [],
        // numbers
        ...indexes.value.map((num) => h$4("div", {
          key: num,
          class: { active: props.current === num },
          role: "navigation",
          onClick: () => navigate(num)
        }, num)),
        // right ellipsis
        ...displayRightEllipsis.value ? [
          h$4("div", { class: "ellipsis" }, "..."),
          h$4("div", {
            role: "navigation",
            onClick: () => navigate(totalPages.value)
          }, totalPages.value)
        ] : [],
        // next button
        props.current < totalPages.value ? h$4("div", {
          class: "next",
          role: "navigation",
          unselectable: "on",
          onClick: () => navigate(props.current + 1)
        }, locale.value.next) : null
      ]),
      h$4("div", { class: "navigate-wrapper" }, [
        h$4("label", { for: "navigation-text" }, `${locale.value.navigate}: `),
        h$4("input", {
          id: "navigation-text",
          value: input.value,
          onInput: ({ target }) => {
            input.value = target.value;
          },
          onKeydown: (event) => {
            if (event.key === "Enter") {
              event.preventDefault();
              jumpPage(input.value);
            }
          }
        }),
        h$4("button", {
          class: "navigate",
          role: "navigation",
          title: locale.value.action,
          onClick: () => jumpPage(input.value)
        }, locale.value.action)
      ])
    ]) : []);
  }
});
const articleList = "";
const ArticleList = defineComponent({
  name: "ArticleList",
  props: {
    /**
     * Articles
     *
     * 文章项目
     */
    items: {
      type: Array,
      default: () => []
    }
  },
  setup(props) {
    const route = useRoute();
    const router = useRouter();
    const blogOptions = useBlogOptions();
    const currentPage = ref(1);
    const articlePerPage = computed(() => blogOptions.value.articlePerPage || 10);
    const currentArticles = computed(() => props.items.slice((currentPage.value - 1) * articlePerPage.value, currentPage.value * articlePerPage.value));
    const updatePage = (page2) => {
      currentPage.value = page2;
      const query = { ...route.query };
      if (query["page"] === page2.toString() || page2 === 1 && !query["page"])
        return;
      if (page2 === 1)
        delete query["page"];
      else
        query["page"] = page2.toString();
      void router.push({ path: route.path, query });
    };
    onMounted(() => {
      const { page: page2 } = route.query;
      updatePage(page2 ? Number(page2) : 1);
      watch(currentPage, () => {
        const distance = document.querySelector("#article-list").getBoundingClientRect().top + window.scrollY;
        setTimeout(() => {
          window.scrollTo(0, distance);
        }, 100);
      });
    });
    return () => h$4("div", { id: "article-list", class: "article-wrapper" }, currentArticles.value.length ? [
      ...currentArticles.value.map(({ info, path }, index2) => h$4(DropTransition, { appear: true, delay: index2 * 0.04 }, () => h$4(ArticleItem, { key: path, info, path }))),
      h$4(Pagination, {
        current: currentPage.value,
        perPage: articlePerPage.value,
        total: props.items.length,
        onUpdateCurrentPage: updatePage
      })
    ] : h$4(EmptyIcon));
  }
});
const categoryList = "";
const CategoryList = defineComponent({
  name: "CategoryList",
  setup() {
    const route = useRoute();
    const categoryMap2 = useCategoryMap();
    return () => h$4("ul", { class: "category-list-wrapper" }, Object.entries(categoryMap2.value.map).map(([category, { path, items }]) => h$4("li", {
      class: [
        "category",
        // TODO: magic number 9 is tricky here
        `category${Gt(category, 9)}`,
        { active: path === route.path }
      ]
    }, h$4(RouterLink, { to: path }, () => [
      category,
      h$4("span", { class: "category-num" }, items.length)
    ]))));
  }
});
const tagList = "";
const TagList = defineComponent({
  name: "TagList",
  setup() {
    const frontmatter = usePageFrontmatter();
    const tagMap = useTagMap();
    const isActive = (name) => {
      var _a2;
      return name === ((_a2 = frontmatter.value.blog) == null ? void 0 : _a2.name);
    };
    return () => h$4("ul", { class: "tag-list-wrapper" }, Object.entries(tagMap.value.map).map(([tag, { path, items }]) => h$4("li", {
      class: [
        "tag",
        // TODO: magic number 9 is tricky here
        `tag${Gt(tag, 9)}`,
        { active: isActive(tag) }
      ]
    }, h$4(RouterLink, { to: path }, () => [
      tag,
      h$4("span", { class: "tag-num" }, items.length)
    ]))));
  }
});
const timelineList = "";
const TimelineList = defineComponent({
  name: "TimelineList",
  setup() {
    const themeLocale = useThemeLocaleData();
    const timelines = useTimelines();
    const navigate = useNavigate();
    const hint = computed(() => themeLocale.value.blogLocales.timeline);
    return () => h$4("div", { class: "timeline-list-wrapper" }, [
      h$4("div", {
        class: "timeline-list-title",
        onClick: () => navigate(timelines.value.path)
      }, [
        h$4(TimelineIcon),
        h$4("span", { class: "num" }, timelines.value.items.length),
        hint.value
      ]),
      h$4("hr"),
      h$4("div", { class: "timeline-content" }, h$4("ul", { class: "timeline-list" }, timelines.value.config.map(({ year, items }, index2) => h$4(DropTransition, { appear: true, delay: 0.08 * (index2 + 1) }, () => h$4("li", [
        h$4("h3", { class: "timeline-year" }, year),
        h$4("ul", { class: "timeline-year-wrapper" }, items.map(({ date, info, path }) => h$4("li", { class: "timeline-item" }, [
          h$4("span", { class: "timeline-date" }, date),
          h$4(RouterLink, {
            class: "timeline-title",
            to: path
          }, () => info.title)
        ])))
      ])))))
    ]);
  }
});
const infoList = "";
const InfoList = defineComponent({
  name: "InfoList",
  setup() {
    const themeLocale = useThemeLocaleData();
    const articles = useArticles();
    const categoryMap2 = useCategoryMap();
    const categoryNumber = computed(() => Object.keys(categoryMap2.value.map).length);
    const stars = useStars();
    const tagMap = useTagMap();
    const tagNumber = computed(() => Object.keys(tagMap.value.map).length);
    const navigate = useNavigate();
    const active = ref("article");
    const locale = computed(() => themeLocale.value.blogLocales);
    const buttons = [
      ["article", ArticleIcon],
      ["category", CategoryIcon],
      ["tag", TagIcon],
      ["timeline", TimelineIcon]
    ];
    return () => h$4("div", { class: "blog-info-list" }, [
      h$4("div", { class: "blog-type-wrapper" }, buttons.map(([key, icon]) => h$4("button", {
        class: "blog-type-button",
        onClick: () => {
          active.value = key;
        }
      }, h$4("div", {
        class: ["icon-wrapper", { active: active.value === key }],
        "aria-label": locale.value[key],
        "data-balloon-pos": "up"
      }, h$4(icon))))),
      h$4(DropTransition, () => (
        // article
        active.value === "article" ? h$4("div", { class: "sticky-article-wrapper" }, [
          h$4("div", {
            class: "title",
            onClick: () => navigate(articles.value.path)
          }, [
            h$4(ArticleIcon),
            h$4("span", { class: "num" }, articles.value.items.length),
            locale.value.article
          ]),
          h$4("hr"),
          h$4("ul", { class: "sticky-article-list" }, stars.value.items.map(({ info, path }, index2) => h$4(DropTransition, { appear: true, delay: 0.08 * (index2 + 1) }, () => h$4("li", { class: "sticky-article" }, h$4(RouterLink, { to: path }, () => info.title)))))
        ]) : active.value === "category" ? h$4("div", { class: "category-wrapper" }, [
          categoryNumber.value ? h$4("div", {
            class: "title",
            onClick: () => navigate(categoryMap2.value.path)
          }, [
            h$4(CategoryIcon),
            h$4("span", { class: "num" }, categoryNumber.value),
            locale.value.category
          ]) : null,
          h$4("hr"),
          h$4(DropTransition, { delay: 0.04 }, () => h$4(CategoryList))
        ]) : active.value === "tag" ? h$4("div", { class: "tag-wrapper" }, [
          tagNumber.value ? h$4("div", {
            class: "title",
            onClick: () => navigate(tagMap.value.path)
          }, [
            h$4(TagIcon),
            h$4("span", { class: "num" }, tagNumber.value),
            locale.value.tag
          ]) : null,
          h$4("hr"),
          h$4(DropTransition, { delay: 0.04 }, () => h$4(TagList))
        ]) : h$4(DropTransition, () => h$4(TimelineList))
      ))
    ]);
  }
});
const page = "";
const BlogWrapper = defineComponent({
  name: "BlogWrapper",
  setup(_props, { slots }) {
    const { isMobile } = useWindowSize();
    return () => [
      h$4(SkipLink),
      h$4(CommonWrapper, { noSidebar: true }, {
        default: () => {
          var _a2;
          return (_a2 = slots["default"]) == null ? void 0 : _a2.call(slots);
        },
        navScreenBottom: () => h$4(BloggerInfo),
        ...isMobile.value ? { sidebar: () => h$4(InfoList) } : {}
      })
    ];
  }
});
const infoPanel = "";
const InfoPanel = () => h$4("aside", { class: "blog-info-wrapper" }, [
  h$4(DropTransition, () => h$4(BloggerInfo)),
  h$4(DropTransition, { delay: 0.04 }, () => h$4(InfoList))
]);
InfoPanel.displayName = "InfoPanel";
const BlogCategory = defineComponent({
  name: "BlogPage",
  components: {
    CategoryList,
    TagList
  },
  setup() {
    const frontmatter = usePageFrontmatter();
    const route = useRoute();
    const categoryMap2 = useCategoryMap();
    const tagMap = useTagMap();
    const blogOptions = computed(() => frontmatter.value.blog || {});
    const componentName = computed(() => {
      const { key = "" } = blogOptions.value;
      return key === "category" ? "CategoryList" : key === "tag" ? "TagList" : null;
    });
    const items = computed(() => {
      const { name = "", key = "" } = blogOptions.value;
      return key === "category" ? name ? categoryMap2.value.map[name].items : [] : key === "tag" ? name ? tagMap.value.map[name].items : [] : [];
    });
    return () => h$4(BlogWrapper, () => h$4("div", { class: "page blog" }, h$4("div", { class: "blog-page-wrapper" }, [
      h$4("main", { class: "blog-main", id: "main-content" }, [
        h$4(DropTransition, () => componentName.value ? h$4(resolveComponent(componentName.value)) : null),
        blogOptions.value.name ? h$4(DropTransition, { appear: true, delay: 0.24 }, () => h$4(ArticleList, { key: route.path, items: items.value })) : null
      ]),
      h$4(DropTransition, { delay: 0.16 }, () => h$4(InfoPanel))
    ])));
  }
});
const defaultHeroBgImagePath = "/jmcoding/assets/hero-197a9d2d.jpg";
const blogHero = "";
const BlogHero = defineComponent({
  name: "BlogHero",
  setup() {
    const title = usePageHeadTitle();
    const frontmatter = usePageFrontmatter();
    const hero = ref();
    const heroImage = computed(() => frontmatter.value.heroImage || null);
    const isFullScreen = computed(() => frontmatter.value.heroFullScreen || false);
    const heroImageStyle = computed(() => {
      const defaultStyle = {
        maxHeight: "180px",
        margin: frontmatter.value.heroText === false ? "6rem auto 1.5rem" : "1rem auto"
      };
      return {
        ...defaultStyle,
        ...frontmatter.value.heroImageStyle
      };
    });
    const bgImage = computed(() => frontmatter.value.bgImage ? withBase(frontmatter.value.bgImage) : frontmatter.value.bgImage ?? defaultHeroBgImagePath);
    const bgImageStyle = computed(() => {
      const defaultStyle = {
        height: "350px",
        textAlign: "center",
        overflow: "hidden"
      };
      return {
        ...defaultStyle,
        ...frontmatter.value.bgImageStyle
      };
    });
    return () => frontmatter.value.hero === false ? null : h$4("div", {
      ref: hero,
      class: ["blog-hero", { fullscreen: isFullScreen.value }],
      style: bgImageStyle.value
    }, [
      bgImage.value ? h$4("div", {
        class: "mask",
        style: {
          background: `url(${bgImage.value}) center/cover no-repeat`
        }
      }) : null,
      h$4(DropTransition, { appear: true, delay: 0.04 }, () => heroImage.value ? h$4("img", {
        class: "hero-image",
        style: heroImageStyle.value,
        src: withBase(heroImage.value),
        alt: frontmatter.value.heroAlt || "hero image"
      }) : null),
      h$4(DropTransition, { appear: true, delay: 0.08 }, () => frontmatter.value.heroText === false ? null : h$4("h1", frontmatter.value.heroText || title.value)),
      h$4(DropTransition, { appear: true, delay: 0.12 }, () => frontmatter.value.tagline ? h$4("p", {
        class: "description",
        innerHTML: frontmatter.value.tagline
      }) : null),
      isFullScreen.value ? h$4("button", {
        class: "slide-down-button",
        onClick: () => {
          window.scrollTo({
            top: hero.value.clientHeight,
            behavior: "smooth"
          });
        }
      }, [h$4(SlideDownIcon), h$4(SlideDownIcon)]) : null
    ]);
  }
});
const projectPanel = "";
const AVAILABLE_PROJECT_TYPES = [
  "link",
  "article",
  "book",
  "project",
  "friend"
];
const ProjectPanel = defineComponent({
  name: "ProjectPanel",
  components: { ArticleIcon, BookIcon, FriendIcon, LinkIcon, ProjectIcon },
  setup() {
    const frontmatter = usePageFrontmatter();
    const pure = usePure();
    const navigate = useNavigate();
    const renderIcon = (icon = "", alt = "icon") => {
      if (AVAILABLE_PROJECT_TYPES.includes(icon))
        return h$4(resolveComponent(`${icon}-icon`));
      if (isLinkHttp(icon))
        return h$4("img", { src: icon, alt, class: "image" });
      if (ue(icon))
        return h$4("img", { src: withBase(icon), alt, class: "image" });
      return h$4(Icon, { icon });
    };
    return () => {
      var _a2;
      return ((_a2 = frontmatter.value.projects) == null ? void 0 : _a2.length) ? h$4("div", { class: "project-panel" }, frontmatter.value.projects.map(({ icon, link, name, desc }, index2) => h$4("div", {
        class: [
          "project",
          // TODO: magic number 9 is tricky here
          { [`project${index2 % 9}`]: !pure.value }
        ],
        onClick: () => navigate(link)
      }, [
        renderIcon(icon, name),
        h$4("div", { class: "name" }, name),
        h$4("div", { class: "desc" }, desc)
      ]))) : null;
    };
  }
});
const home = "";
const BlogHome$1 = defineComponent({
  name: "BlogHome",
  setup() {
    const articles = useArticles();
    return () => h$4("div", { class: "page blog" }, [
      h$4(BlogHero),
      h$4("div", { class: "blog-page-wrapper" }, [
        h$4("main", { class: "blog-home", id: "main-content" }, [
          h$4(DropTransition, { appear: true, delay: 0.16 }, () => h$4(ProjectPanel)),
          h$4(DropTransition, { appear: true, delay: 0.24 }, () => h$4(ArticleList, { items: articles.value.items }))
        ]),
        h$4(DropTransition, { appear: true, delay: 0.16 }, () => h$4(InfoPanel))
      ]),
      h$4(DropTransition, { appear: true, delay: 0.28 }, () => h$4(MarkdownContent))
    ]);
  }
});
const BlogHome = defineComponent({
  name: "BlogHome",
  setup() {
    return () => h$4(BlogWrapper, () => h$4(BlogHome$1));
  }
});
const articleType = "";
const ArticleType = defineComponent({
  name: "ArticleType",
  setup() {
    const localePath = useRouteLocale();
    const themeLocale = useThemeLocaleData();
    const route = useRoute();
    const articles = useArticles();
    const stars = useStars();
    const types = computed(() => {
      const locale = themeLocale.value.blogLocales;
      return [
        {
          text: locale.all,
          path: articles.value.path
        },
        { text: locale.star, path: stars.value.path },
        ...[].map(({ key, path }) => ({
          text: locale[key],
          path: path.replace(/^\//, localePath.value)
        }))
      ];
    });
    return () => h$4("ul", { class: "article-type-wrapper" }, types.value.map((type2) => h$4("li", {
      class: ["article-type", { active: type2.path === route.path }]
    }, h$4(RouterLink, { to: type2.path }, () => type2.text))));
  }
});
const BlogType = defineComponent({
  name: "BlogPage",
  setup() {
    const blogType = C();
    const frontmatter = usePageFrontmatter();
    const route = useRoute();
    const articles = useArticles();
    const stars = useStars();
    const items = computed(() => {
      const { key = "", type: type2 } = frontmatter.value.blog || {};
      return key === "star" ? stars.value.items : type2 === "type" && key ? blogType.value.items : articles.value.items;
    });
    return () => h$4(BlogWrapper, () => h$4("div", { class: "page blog" }, h$4("div", { class: "blog-page-wrapper" }, [
      h$4("main", { class: "blog-main", id: "main-content" }, [
        h$4(DropTransition, () => h$4(ArticleType)),
        h$4(DropTransition, { appear: true, delay: 0.24 }, () => h$4(ArticleList, { key: route.path, items: items.value }))
      ]),
      h$4(DropTransition, { delay: 0.16 }, () => h$4(InfoPanel))
    ])));
  }
});
const timelineItems = "";
const TimelineItems = defineComponent({
  name: "TimelineItems",
  setup() {
    const blogOptions = useBlogOptions();
    const themeLocale = useThemeLocaleData();
    const timelines = useTimelines();
    const hint = computed(() => blogOptions.value.timeline || themeLocale.value.blogLocales.timelineTitle);
    const items = computed(() => timelines.value.config.map(({ year }) => ({
      title: year.toString(),
      level: 2,
      slug: year.toString(),
      children: []
    })));
    return () => h$4("div", { class: "timeline-wrapper" }, h$4("ul", { class: "timeline-content" }, [
      h$4(DropTransition, () => h$4("li", { class: "motto" }, hint.value)),
      h$4(TOC, { items: items.value }),
      ...timelines.value.config.map(({ year, items: items2 }, index2) => h$4(DropTransition, { appear: true, delay: 0.08 * (index2 + 1), type: "group" }, () => [
        h$4("h3", { key: "title", id: year, class: "timeline-year-title" }, h$4("span", year)),
        h$4("li", { key: "content", class: "timeline-year-list" }, [
          h$4("ul", { class: "timeline-year-wrapper" }, items2.map(({ date, info, path }) => h$4("li", { class: "timeline-item" }, [
            h$4("span", { class: "timeline-date" }, date),
            h$4(RouterLink, {
              class: "timeline-title",
              to: path
            }, () => info.title)
          ])))
        ])
      ]))
    ]));
  }
});
const Timeline = defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Timeline",
  components: {
    ArticleType,
    CategoryList,
    TagList
  },
  setup() {
    return () => h$4(BlogWrapper, () => h$4("div", { class: "page blog" }, h$4("div", { class: "blog-page-wrapper" }, [
      h$4("main", { class: "blog-main", id: "main-content" }, [
        h$4(DropTransition, { appear: true, delay: 0.24 }, () => h$4(TimelineItems))
      ]),
      h$4(DropTransition, { delay: 0.16 }, () => h$4(InfoPanel))
    ])));
  }
});
const layout = "";
const slidePage = "";
const d = () => h$4(P$2, { name: "back" }, () => h$4("path", { d: "M1014.749 449.156v125.688H260.626l345.64 345.64-89.239 89.237L19.307 512l497.72-497.721 89.238 89.238-345.64 345.64h754.124z" })), h = () => h$4(P$2, { name: "home" }, () => h$4("path", { d: "M780.106 420.978L506.994 147.866 233.882 420.978h.045v455.11H780.06v-455.11h.046zm90.977 90.976V876.09a91.022 91.022 0 01-91.023 91.022H233.927a91.022 91.022 0 01-91.022-91.022V511.954l-67.22 67.175-64.307-64.307 431.309-431.31c35.498-35.498 93.115-35.498 128.614 0l431.309 431.31-64.307 64.307L871.083 512z" }));
var f = defineComponent({ name: "SlidePage", setup() {
  const c2 = useRouter(), t2 = ref(false), n2 = ref(), i2 = () => {
    t2.value = !t2.value;
  }, e2 = () => {
    t2.value = false;
  }, l2 = () => {
    e2(), window.history.go(-1);
  }, m = () => {
    e2(), c2.push("/");
  };
  return onClickOutside(n2, e2), () => h$4("div", { class: "presentation" }, [h$4(Content), h$4("div", { ref: n2, class: ["menu", { active: t2.value }] }, [h$4("button", { class: "menu-button", onClick: () => i2() }, h$4("span", { class: "icon" })), h$4("button", { class: "back-button", onClick: () => l2() }, h$4(d)), h$4("button", { class: "home-button", onClick: () => m() }, h$4(h))])]);
} });
const clientConfig10 = defineClientConfig({
  enhance: ({ app, router }) => {
    const { scrollBehavior } = router.options;
    router.options.scrollBehavior = async (...args) => {
      await useScrollPromise().wait();
      return scrollBehavior(...args);
    };
    injectDarkmode(app);
    app.component("BloggerInfo", BloggerInfo);
  },
  setup: () => {
    setupDarkmode();
    setupSidebarItems();
    setupBlog();
  },
  layouts: {
    Layout,
    NotFound,
    BlogCategory,
    BlogHome,
    BlogType,
    Timeline,
    Slide: f
  }
});
const clientConfig11 = {
  enhance: ({ app }) => {
    app.component("FlipClock", defineAsyncComponent(() => import("./assets/FlipClock-dd0e2fc8.js"))), app.component("FlipItem", defineAsyncComponent(() => import("./assets/FlipItem-32e726d9.js"))), app.component("MyFlipClock", defineAsyncComponent(() => import("./assets/MyFlipClock-d6f36baa.js"))), app.component("NavCard", defineAsyncComponent(() => import("./assets/NavCard-f808625f.js"))), app.component("QuickNav", defineAsyncComponent(() => import("./assets/QuickNav-93090831.js")));
  }
};
const isFocusingTextControl = (target) => {
  if (!(target instanceof Element)) {
    return false;
  }
  return document.activeElement === target && (["TEXTAREA", "SELECT", "INPUT"].includes(target.tagName) || target.hasAttribute("contenteditable"));
};
const isKeyMatched = (event, hotKeys2) => hotKeys2.some((item) => {
  if (isString(item)) {
    return item === event.key;
  }
  const { key, ctrl = false, shift = false, alt = false } = item;
  return key === event.key && ctrl === event.ctrlKey && shift === event.shiftKey && alt === event.altKey;
});
const nonASCIIRegExp = /[^\x00-\x7F]/;
const splitWords = (str) => str.split(/\s+/g).map((str2) => str2.trim()).filter((str2) => !!str2);
const escapeRegExp = (str) => str.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&");
const isQueryMatched = (query, toMatch) => {
  const toMatchStr = toMatch.join(" ");
  const words = splitWords(query);
  if (nonASCIIRegExp.test(query)) {
    return words.some((word) => toMatchStr.toLowerCase().indexOf(word) > -1);
  }
  const hasTrailingSpace = query.endsWith(" ");
  const searchRegex = new RegExp(words.map((word, index2) => {
    if (words.length === index2 + 1 && !hasTrailingSpace) {
      return `(?=.*\\b${escapeRegExp(word)})`;
    }
    return `(?=.*\\b${escapeRegExp(word)}\\b)`;
  }).join("") + ".+", "gi");
  return searchRegex.test(toMatchStr);
};
const useHotKeys = ({ input, hotKeys: hotKeys2 }) => {
  if (hotKeys2.value.length === 0)
    return;
  const onKeydown = (event) => {
    if (!input.value)
      return;
    if (
      // key matches
      isKeyMatched(event, hotKeys2.value) && // event does not come from the search box itself or
      // user isn't focusing (and thus perhaps typing in) a text control
      !isFocusingTextControl(event.target)
    ) {
      event.preventDefault();
      input.value.focus();
    }
  };
  onMounted(() => {
    document.addEventListener("keydown", onKeydown);
  });
  onBeforeUnmount(() => {
    document.removeEventListener("keydown", onKeydown);
  });
};
const searchIndex$1 = [
  {
    "title": "幻灯片页",
    "headers": [],
    "path": "/slides.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "",
    "headers": [],
    "path": "/blog/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "笔记目录页",
    "headers": [
      {
        "level": 2,
        "title": "Java核心",
        "slug": "java核心",
        "link": "#java核心",
        "children": []
      },
      {
        "level": 2,
        "title": "Java虚拟机",
        "slug": "java虚拟机",
        "link": "#java虚拟机",
        "children": []
      },
      {
        "level": 2,
        "title": "企业级框架",
        "slug": "企业级框架",
        "link": "#企业级框架",
        "children": [
          {
            "level": 3,
            "title": "Netty",
            "slug": "netty",
            "link": "#netty",
            "children": []
          }
        ]
      },
      {
        "level": 2,
        "title": "算法和数据结构",
        "slug": "算法和数据结构",
        "link": "#算法和数据结构",
        "children": []
      },
      {
        "level": 2,
        "title": "数据库",
        "slug": "数据库",
        "link": "#数据库",
        "children": []
      },
      {
        "level": 2,
        "title": "开发必备",
        "slug": "开发必备",
        "link": "#开发必备",
        "children": []
      },
      {
        "level": 2,
        "title": "在线技术文档",
        "slug": "在线技术文档",
        "link": "#在线技术文档",
        "children": []
      }
    ],
    "path": "/codenotes/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "杂记目录页",
    "headers": [],
    "path": "/floatinglife/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "快速导航",
    "headers": [
      {
        "level": 2,
        "title": "搜索引擎",
        "slug": "搜索引擎",
        "link": "#搜索引擎",
        "children": []
      },
      {
        "level": 2,
        "title": "开源社区",
        "slug": "开源社区",
        "link": "#开源社区",
        "children": []
      },
      {
        "level": 2,
        "title": "优质博客",
        "slug": "优质博客",
        "link": "#优质博客",
        "children": []
      },
      {
        "level": 2,
        "title": "在线工具",
        "slug": "在线工具",
        "link": "#在线工具",
        "children": []
      },
      {
        "level": 2,
        "title": "在线教程",
        "slug": "在线教程",
        "link": "#在线教程",
        "children": []
      },
      {
        "level": 2,
        "title": "文档相关",
        "slug": "文档相关",
        "link": "#文档相关",
        "children": []
      },
      {
        "level": 2,
        "title": "其他导航",
        "slug": "其他导航",
        "link": "#其他导航",
        "children": []
      }
    ],
    "path": "/quicknav/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "项目目录页",
    "headers": [],
    "path": "/projects/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "资源目录页",
    "headers": [],
    "path": "/resources/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "算法和数据结构",
    "headers": [],
    "path": "/codenotes/algdata/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "在线技术文档",
    "headers": [
      {
        "level": 2,
        "title": "前端",
        "slug": "前端",
        "link": "#前端",
        "children": []
      }
    ],
    "path": "/codenotes/cookbook/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "数据库",
    "headers": [],
    "path": "/codenotes/database/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "数据库笔记",
    "headers": [
      {
        "level": 2,
        "title": "数据库",
        "slug": "数据库",
        "link": "#数据库",
        "children": []
      },
      {
        "level": 2,
        "title": "一、数据库基础知识",
        "slug": "一、数据库基础知识",
        "link": "#一、数据库基础知识",
        "children": [
          {
            "level": 3,
            "title": "1、数据库系统基本构成",
            "slug": "_1、数据库系统基本构成",
            "link": "#_1、数据库系统基本构成",
            "children": []
          },
          {
            "level": 3,
            "title": "什么是元组、码、候选码、主码、外码、主属性、非主属性？",
            "slug": "什么是元组、码、候选码、主码、外码、主属性、非主属性",
            "link": "#什么是元组、码、候选码、主码、外码、主属性、非主属性",
            "children": []
          },
          {
            "level": 3,
            "title": "主键和外键有什么区别?",
            "slug": "主键和外键有什么区别",
            "link": "#主键和外键有什么区别",
            "children": []
          },
          {
            "level": 3,
            "title": "为什么不推荐使用外键与级联？",
            "slug": "为什么不推荐使用外键与级联",
            "link": "#为什么不推荐使用外键与级联",
            "children": []
          },
          {
            "level": 3,
            "title": "什么是 ER 图？",
            "slug": "什么是-er-图",
            "link": "#什么是-er-图",
            "children": []
          },
          {
            "level": 3,
            "title": "数据库范式了解吗？",
            "slug": "数据库范式了解吗",
            "link": "#数据库范式了解吗",
            "children": []
          },
          {
            "level": 3,
            "title": "什么是存储过程?",
            "slug": "什么是存储过程",
            "link": "#什么是存储过程",
            "children": []
          },
          {
            "level": 3,
            "title": "drop、delete 与 truncate 区别？",
            "slug": "drop、delete-与-truncate-区别",
            "link": "#drop、delete-与-truncate-区别",
            "children": []
          },
          {
            "level": 3,
            "title": "数据库设计通常分为哪几步?",
            "slug": "数据库设计通常分为哪几步",
            "link": "#数据库设计通常分为哪几步",
            "children": []
          }
        ]
      },
      {
        "level": 2,
        "title": "二、字符集",
        "slug": "二、字符集",
        "link": "#二、字符集",
        "children": [
          {
            "level": 3,
            "title": "1、何为字符集？",
            "slug": "_1、何为字符集",
            "link": "#_1、何为字符集",
            "children": []
          },
          {
            "level": 3,
            "title": "2、有哪些常见的字符集？",
            "slug": "_2、有哪些常见的字符集",
            "link": "#_2、有哪些常见的字符集",
            "children": []
          },
          {
            "level": 3,
            "title": "3、MySQL 字符集",
            "slug": "_3、mysql-字符集",
            "link": "#_3、mysql-字符集",
            "children": []
          }
        ]
      },
      {
        "level": 2,
        "title": "三、MySQL",
        "slug": "三、mysql",
        "link": "#三、mysql",
        "children": [
          {
            "level": 3,
            "title": "1、MySQL知识点",
            "slug": "_1、mysql知识点",
            "link": "#_1、mysql知识点",
            "children": []
          },
          {
            "level": 3,
            "title": "2、一千行MySQL",
            "slug": "_2、一千行mysql",
            "link": "#_2、一千行mysql",
            "children": []
          }
        ]
      }
    ],
    "path": "/codenotes/database/%E6%95%B0%E6%8D%AE%E5%BA%93%E7%AC%94%E8%AE%B0.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "开发必备",
    "headers": [],
    "path": "/codenotes/devtool/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "企业级框架",
    "headers": [],
    "path": "/codenotes/framework/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "go从入门到入坟",
    "headers": [
      {
        "level": 2,
        "title": "Go入门",
        "slug": "go入门",
        "link": "#go入门",
        "children": []
      },
      {
        "level": 2,
        "title": "博客",
        "slug": "博客",
        "link": "#博客",
        "children": []
      },
      {
        "level": 2,
        "title": "Go基础-基础语法 | 青训营笔记",
        "slug": "go基础-基础语法-青训营笔记",
        "link": "#go基础-基础语法-青训营笔记",
        "children": [
          {
            "level": 3,
            "title": "1. 什么是go语言",
            "slug": "_1-什么是go语言",
            "link": "#_1-什么是go语言",
            "children": []
          },
          {
            "level": 3,
            "title": "2. 入门",
            "slug": "_2-入门",
            "link": "#_2-入门",
            "children": []
          },
          {
            "level": 3,
            "title": "3. 项目实战",
            "slug": "_3-项目实战",
            "link": "#_3-项目实战",
            "children": []
          }
        ]
      },
      {
        "level": 2,
        "title": "Go进阶-工程实践 | 青训营笔记",
        "slug": "go进阶-工程实践-青训营笔记",
        "link": "#go进阶-工程实践-青训营笔记",
        "children": [
          {
            "level": 3,
            "title": "1. 语言进阶",
            "slug": "_1-语言进阶",
            "link": "#_1-语言进阶",
            "children": []
          },
          {
            "level": 3,
            "title": "2. 依赖管理",
            "slug": "_2-依赖管理",
            "link": "#_2-依赖管理",
            "children": []
          },
          {
            "level": 3,
            "title": "3. 测试",
            "slug": "_3-测试",
            "link": "#_3-测试",
            "children": []
          },
          {
            "level": 3,
            "title": "4. 项目实践",
            "slug": "_4-项目实践",
            "link": "#_4-项目实践",
            "children": []
          }
        ]
      },
      {
        "level": 2,
        "title": "Go性能优化-高质量编程 | 青训营笔记",
        "slug": "go性能优化-高质量编程-青训营笔记",
        "link": "#go性能优化-高质量编程-青训营笔记",
        "children": [
          {
            "level": 3,
            "title": "1. 简介",
            "slug": "_1-简介",
            "link": "#_1-简介",
            "children": []
          },
          {
            "level": 3,
            "title": "2. 编码规范",
            "slug": "_2-编码规范",
            "link": "#_2-编码规范",
            "children": []
          },
          {
            "level": 3,
            "title": "3. 性能优化建议",
            "slug": "_3-性能优化建议",
            "link": "#_3-性能优化建议",
            "children": []
          }
        ]
      },
      {
        "level": 2,
        "title": "Go性能优化-性能调优实战 | 青训营笔记",
        "slug": "go性能优化-性能调优实战-青训营笔记",
        "link": "#go性能优化-性能调优实战-青训营笔记",
        "children": [
          {
            "level": 3,
            "title": "1. 简介",
            "slug": "_1-简介-1",
            "link": "#_1-简介-1",
            "children": []
          },
          {
            "level": 3,
            "title": "2. 性能分析工具-pprof",
            "slug": "_2-性能分析工具-pprof",
            "link": "#_2-性能分析工具-pprof",
            "children": []
          },
          {
            "level": 3,
            "title": "3. 性能调优案例",
            "slug": "_3-性能调优案例",
            "link": "#_3-性能调优案例",
            "children": []
          },
          {
            "level": 3,
            "title": "4. 总结",
            "slug": "_4-总结",
            "link": "#_4-总结",
            "children": []
          }
        ]
      },
      {
        "level": 2,
        "title": "Go自动内存管理 | 青训营笔记",
        "slug": "go自动内存管理-青训营笔记",
        "link": "#go自动内存管理-青训营笔记",
        "children": [
          {
            "level": 3,
            "title": "1. 自动内存管理",
            "slug": "_1-自动内存管理",
            "link": "#_1-自动内存管理",
            "children": []
          },
          {
            "level": 3,
            "title": "2. Go 内存管理及优化",
            "slug": "_2-go-内存管理及优化",
            "link": "#_2-go-内存管理及优化",
            "children": []
          }
        ]
      }
    ],
    "path": "/codenotes/gocore/go.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "笔记目录页",
    "headers": [
      {
        "level": 2,
        "title": "Java核心",
        "slug": "java核心",
        "link": "#java核心",
        "children": []
      },
      {
        "level": 2,
        "title": "Java虚拟机",
        "slug": "java虚拟机",
        "link": "#java虚拟机",
        "children": []
      },
      {
        "level": 2,
        "title": "企业级框架",
        "slug": "企业级框架",
        "link": "#企业级框架",
        "children": [
          {
            "level": 3,
            "title": "Netty",
            "slug": "netty",
            "link": "#netty",
            "children": []
          }
        ]
      },
      {
        "level": 2,
        "title": "算法和数据结构",
        "slug": "算法和数据结构",
        "link": "#算法和数据结构",
        "children": []
      },
      {
        "level": 2,
        "title": "数据库",
        "slug": "数据库",
        "link": "#数据库",
        "children": []
      },
      {
        "level": 2,
        "title": "开发必备",
        "slug": "开发必备",
        "link": "#开发必备",
        "children": []
      },
      {
        "level": 2,
        "title": "在线技术文档",
        "slug": "在线技术文档",
        "link": "#在线技术文档",
        "children": []
      }
    ],
    "path": "/codenotes/gocore/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "Java8新特性",
    "headers": [
      {
        "level": 2,
        "title": "Optional类",
        "slug": "optional类",
        "link": "#optional类",
        "children": [
          {
            "level": 3,
            "title": "引入",
            "slug": "引入",
            "link": "#引入",
            "children": []
          },
          {
            "level": 3,
            "title": "源码解读及各API的使用",
            "slug": "源码解读及各api的使用",
            "link": "#源码解读及各api的使用",
            "children": []
          },
          {
            "level": 3,
            "title": "使用例子",
            "slug": "使用例子",
            "link": "#使用例子",
            "children": []
          },
          {
            "level": 3,
            "title": "使用总结",
            "slug": "使用总结",
            "link": "#使用总结",
            "children": []
          }
        ]
      }
    ],
    "path": "/codenotes/javacore/Java8%E6%96%B0%E7%89%B9%E6%80%A7.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "",
    "headers": [],
    "path": "/codenotes/javacore/Java%E4%B8%AD%E7%9A%84SPI%E6%9C%BA%E5%88%B6.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "Java反射机制",
    "headers": [],
    "path": "/codenotes/javacore/Java%E5%9F%BA%E7%A1%80-%E5%8F%8D%E5%B0%84%E6%9C%BA%E5%88%B6.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "Java异常机制",
    "headers": [],
    "path": "/codenotes/javacore/Java%E5%9F%BA%E7%A1%80-%E5%BC%82%E5%B8%B8%E6%9C%BA%E5%88%B6.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "Java泛型机制",
    "headers": [
      {
        "level": 2,
        "title": "前言",
        "slug": "前言",
        "link": "#前言",
        "children": []
      },
      {
        "level": 2,
        "title": "为什么会引入泛型",
        "slug": "为什么会引入泛型",
        "link": "#为什么会引入泛型",
        "children": []
      }
    ],
    "path": "/codenotes/javacore/Java%E5%9F%BA%E7%A1%80-%E6%B3%9B%E5%9E%8B%E6%9C%BA%E5%88%B6.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "Java注解机制",
    "headers": [],
    "path": "/codenotes/javacore/Java%E5%9F%BA%E7%A1%80-%E6%B3%A8%E8%A7%A3%E6%9C%BA%E5%88%B6.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "面向对象",
    "headers": [
      {
        "level": 2,
        "title": "三大特性",
        "slug": "三大特性",
        "link": "#三大特性",
        "children": []
      }
    ],
    "path": "/codenotes/javacore/Java%E5%9F%BA%E7%A1%80-%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "ArrayList",
    "headers": [
      {
        "level": 2,
        "title": "概述",
        "slug": "概述",
        "link": "#概述",
        "children": []
      },
      {
        "level": 2,
        "title": "ArrayList的实现",
        "slug": "arraylist的实现",
        "link": "#arraylist的实现",
        "children": [
          {
            "level": 3,
            "title": "底层数据结构",
            "slug": "底层数据结构",
            "link": "#底层数据结构",
            "children": []
          },
          {
            "level": 3,
            "title": "构造函数",
            "slug": "构造函数",
            "link": "#构造函数",
            "children": []
          },
          {
            "level": 3,
            "title": "两个常用数组拷贝方法",
            "slug": "两个常用数组拷贝方法",
            "link": "#两个常用数组拷贝方法",
            "children": []
          },
          {
            "level": 3,
            "title": "自动扩容",
            "slug": "自动扩容",
            "link": "#自动扩容",
            "children": []
          },
          {
            "level": 3,
            "title": "add()-addAll()",
            "slug": "add-addall",
            "link": "#add-addall",
            "children": []
          },
          {
            "level": 3,
            "title": "set()",
            "slug": "set",
            "link": "#set",
            "children": []
          },
          {
            "level": 3,
            "title": "get()",
            "slug": "get",
            "link": "#get",
            "children": []
          },
          {
            "level": 3,
            "title": "remove()-removeAll()-retainAll()",
            "slug": "remove-removeall-retainall",
            "link": "#remove-removeall-retainall",
            "children": []
          },
          {
            "level": 3,
            "title": "size()",
            "slug": "size",
            "link": "#size",
            "children": []
          },
          {
            "level": 3,
            "title": "isEmpty()",
            "slug": "isempty",
            "link": "#isempty",
            "children": []
          },
          {
            "level": 3,
            "title": "contains()",
            "slug": "contains",
            "link": "#contains",
            "children": []
          },
          {
            "level": 3,
            "title": "toArray()",
            "slug": "toarray",
            "link": "#toarray",
            "children": []
          },
          {
            "level": 3,
            "title": "clear()",
            "slug": "clear",
            "link": "#clear",
            "children": []
          },
          {
            "level": 3,
            "title": "subList()",
            "slug": "sublist",
            "link": "#sublist",
            "children": []
          },
          {
            "level": 3,
            "title": "trimToSize()",
            "slug": "trimtosize",
            "link": "#trimtosize",
            "children": []
          },
          {
            "level": 3,
            "title": "indexOf()-lastIndexOf()",
            "slug": "indexof-lastindexof",
            "link": "#indexof-lastindexof",
            "children": []
          },
          {
            "level": 3,
            "title": "forEach()-removeIf()-replaceAll()-sort()",
            "slug": "foreach-removeif-replaceall-sort",
            "link": "#foreach-removeif-replaceall-sort",
            "children": []
          },
          {
            "level": 3,
            "title": "Fail-Fast机制",
            "slug": "fail-fast机制",
            "link": "#fail-fast机制",
            "children": []
          }
        ]
      },
      {
        "level": 2,
        "title": "参考",
        "slug": "参考",
        "link": "#参考",
        "children": []
      }
    ],
    "path": "/codenotes/javacore/Java%E9%9B%86%E5%90%88-ArrayList.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "集合类关系图",
    "headers": [
      {
        "level": 2,
        "title": "类关系图",
        "slug": "类关系图",
        "link": "#类关系图",
        "children": []
      },
      {
        "level": 2,
        "title": "简单介绍",
        "slug": "简单介绍",
        "link": "#简单介绍",
        "children": []
      },
      {
        "level": 2,
        "title": "Collection",
        "slug": "collection",
        "link": "#collection",
        "children": [
          {
            "level": 3,
            "title": "如何学习",
            "slug": "如何学习",
            "link": "#如何学习",
            "children": []
          },
          {
            "level": 3,
            "title": "如何遍历",
            "slug": "如何遍历",
            "link": "#如何遍历",
            "children": []
          },
          {
            "level": 3,
            "title": "Set",
            "slug": "set",
            "link": "#set",
            "children": []
          },
          {
            "level": 3,
            "title": "List",
            "slug": "list",
            "link": "#list",
            "children": []
          },
          {
            "level": 3,
            "title": "Queue",
            "slug": "queue",
            "link": "#queue",
            "children": []
          }
        ]
      },
      {
        "level": 2,
        "title": "Map",
        "slug": "map",
        "link": "#map",
        "children": [
          {
            "level": 3,
            "title": "如何学习",
            "slug": "如何学习-1",
            "link": "#如何学习-1",
            "children": []
          },
          {
            "level": 3,
            "title": "如何遍历",
            "slug": "如何遍历-1",
            "link": "#如何遍历-1",
            "children": []
          },
          {
            "level": 3,
            "title": "TreeMap",
            "slug": "treemap",
            "link": "#treemap",
            "children": []
          },
          {
            "level": 3,
            "title": "HashMap",
            "slug": "hashmap",
            "link": "#hashmap",
            "children": []
          },
          {
            "level": 3,
            "title": "HashTable",
            "slug": "hashtable",
            "link": "#hashtable",
            "children": []
          },
          {
            "level": 3,
            "title": "LinkedHashMap",
            "slug": "linkedhashmap",
            "link": "#linkedhashmap",
            "children": []
          }
        ]
      },
      {
        "level": 2,
        "title": "参考",
        "slug": "参考",
        "link": "#参考",
        "children": []
      }
    ],
    "path": "/codenotes/javacore/Java%E9%9B%86%E5%90%88-%E7%B1%BB%E5%85%B3%E7%B3%BB%E5%9B%BE.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "Java核心",
    "headers": [],
    "path": "/codenotes/javacore/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "Java虚拟机",
    "headers": [],
    "path": "/codenotes/jvm/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "小镇美食家的日常",
    "headers": [],
    "path": "/floatinglife/cooker/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "小镇技术宅的日常",
    "headers": [
      {
        "level": 2,
        "title": "目录",
        "slug": "目录",
        "link": "#目录",
        "children": []
      }
    ],
    "path": "/floatinglife/iter/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "引入电子书",
    "headers": [
      {
        "level": 2,
        "title": "引入电子书",
        "slug": "引入电子书",
        "link": "#引入电子书",
        "children": []
      }
    ],
    "path": "/floatinglife/iter/%E5%BC%95%E5%85%A5%E7%94%B5%E5%AD%90%E4%B9%A6.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "小镇运动狂的日常",
    "headers": [],
    "path": "/floatinglife/sporter/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "小镇思考者的日常",
    "headers": [],
    "path": "/floatinglife/thinker/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "实战项目【开源项目】",
    "headers": [],
    "path": "/projects/pracprojects/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "系统设计【开源项目】",
    "headers": [
      {
        "level": 2,
        "title": "专业软件",
        "slug": "专业软件",
        "link": "#专业软件",
        "children": []
      }
    ],
    "path": "/projects/systemdesign/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "技术教程【开源项目】",
    "headers": [
      {
        "level": 2,
        "title": "CS",
        "slug": "cs",
        "link": "#cs",
        "children": []
      },
      {
        "level": 2,
        "title": "Java相关",
        "slug": "java相关",
        "link": "#java相关",
        "children": []
      },
      {
        "level": 2,
        "title": "源码相关",
        "slug": "源码相关",
        "link": "#源码相关",
        "children": []
      },
      {
        "level": 2,
        "title": "算法和数据结构",
        "slug": "算法和数据结构",
        "link": "#算法和数据结构",
        "children": []
      },
      {
        "level": 2,
        "title": "JVM相关",
        "slug": "jvm相关",
        "link": "#jvm相关",
        "children": []
      }
    ],
    "path": "/projects/techguide/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "工具类库【开源项目】",
    "headers": [
      {
        "level": 2,
        "title": "组件库",
        "slug": "组件库",
        "link": "#组件库",
        "children": []
      },
      {
        "level": 2,
        "title": "工具库",
        "slug": "工具库",
        "link": "#工具库",
        "children": []
      },
      {
        "level": 2,
        "title": "Mac软件",
        "slug": "mac软件",
        "link": "#mac软件",
        "children": []
      }
    ],
    "path": "/projects/toollibrary/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "书籍资源",
    "headers": [],
    "path": "/resources/books/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "影音资源",
    "headers": [],
    "path": "/resources/videos/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "算法小抄",
    "headers": [],
    "path": "/codenotes/algdata/lbld/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "动态规划",
    "headers": [],
    "path": "/codenotes/algdata/lbld/%E7%AE%97%E6%B3%95%E5%B0%8F%E6%8A%84%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "数学运算",
    "headers": [
      {
        "level": 2,
        "title": "常用的位操作",
        "slug": "常用的位操作",
        "link": "#常用的位操作",
        "children": [
          {
            "level": 3,
            "title": "Java中的位操作符",
            "slug": "java中的位操作符",
            "link": "#java中的位操作符",
            "children": []
          },
          {
            "level": 3,
            "title": "几个有趣的位操作",
            "slug": "几个有趣的位操作",
            "link": "#几个有趣的位操作",
            "children": []
          },
          {
            "level": 3,
            "title": "n&(n-1)的运用",
            "slug": "n-n-1-的运用",
            "link": "#n-n-1-的运用",
            "children": []
          },
          {
            "level": 3,
            "title": "a^a=0的运用",
            "slug": "a-a-0的运用",
            "link": "#a-a-0的运用",
            "children": []
          }
        ]
      },
      {
        "level": 2,
        "title": "两道常考的阶乘算法题",
        "slug": "两道常考的阶乘算法题",
        "link": "#两道常考的阶乘算法题",
        "children": [
          {
            "level": 3,
            "title": "题一",
            "slug": "题一",
            "link": "#题一",
            "children": []
          },
          {
            "level": 3,
            "title": "题二",
            "slug": "题二",
            "link": "#题二",
            "children": []
          }
        ]
      },
      {
        "level": 2,
        "title": "高效寻找素数",
        "slug": "高效寻找素数",
        "link": "#高效寻找素数",
        "children": []
      },
      {
        "level": 2,
        "title": "高效进行模幂运算",
        "slug": "高效进行模幂运算",
        "link": "#高效进行模幂运算",
        "children": [
          {
            "level": 3,
            "title": "如何处理数组指数",
            "slug": "如何处理数组指数",
            "link": "#如何处理数组指数",
            "children": []
          },
          {
            "level": 3,
            "title": "如何处理mod运算",
            "slug": "如何处理mod运算",
            "link": "#如何处理mod运算",
            "children": []
          },
          {
            "level": 3,
            "title": "如何高效求幂（快速幂）",
            "slug": "如何高效求幂-快速幂",
            "link": "#如何高效求幂-快速幂",
            "children": []
          }
        ]
      },
      {
        "level": 2,
        "title": "同时寻找缺失和重复的元素",
        "slug": "同时寻找缺失和重复的元素",
        "link": "#同时寻找缺失和重复的元素",
        "children": []
      },
      {
        "level": 2,
        "title": "在无限序列中随机抽取元素",
        "slug": "在无限序列中随机抽取元素",
        "link": "#在无限序列中随机抽取元素",
        "children": []
      },
      {
        "level": 2,
        "title": "游戏中的随机算法",
        "slug": "游戏中的随机算法",
        "link": "#游戏中的随机算法",
        "children": []
      },
      {
        "level": 2,
        "title": "一行代码解决的算法题",
        "slug": "一行代码解决的算法题",
        "link": "#一行代码解决的算法题",
        "children": []
      },
      {
        "level": 2,
        "title": "几个反直觉的概率问题",
        "slug": "几个反直觉的概率问题",
        "link": "#几个反直觉的概率问题",
        "children": []
      }
    ],
    "path": "/codenotes/algdata/lbld/%E7%AE%97%E6%B3%95%E5%B0%8F%E6%8A%84%E6%95%B0%E5%AD%A6%E8%BF%90%E7%AE%97.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "数据结构",
    "headers": [
      {
        "level": 2,
        "title": "手写LRU缓存淘汰算法",
        "slug": "手写lru缓存淘汰算法",
        "link": "#手写lru缓存淘汰算法",
        "children": [
          {
            "level": 3,
            "title": "LRU算法描述",
            "slug": "lru算法描述",
            "link": "#lru算法描述",
            "children": []
          },
          {
            "level": 3,
            "title": "LRU算法设计",
            "slug": "lru算法设计",
            "link": "#lru算法设计",
            "children": []
          },
          {
            "level": 3,
            "title": "代码实现",
            "slug": "代码实现",
            "link": "#代码实现",
            "children": []
          }
        ]
      },
      {
        "level": 2,
        "title": "手写LFU算法",
        "slug": "手写lfu算法",
        "link": "#手写lfu算法",
        "children": [
          {
            "level": 3,
            "title": "算法描述",
            "slug": "算法描述",
            "link": "#算法描述",
            "children": []
          },
          {
            "level": 3,
            "title": "思路分析",
            "slug": "思路分析",
            "link": "#思路分析",
            "children": []
          },
          {
            "level": 3,
            "title": "代码框架",
            "slug": "代码框架",
            "link": "#代码框架",
            "children": []
          },
          {
            "level": 3,
            "title": "LFU核心逻辑",
            "slug": "lfu核心逻辑",
            "link": "#lfu核心逻辑",
            "children": []
          }
        ]
      },
      {
        "level": 2,
        "title": "二叉树搜索树操作集锦",
        "slug": "二叉树搜索树操作集锦",
        "link": "#二叉树搜索树操作集锦",
        "children": [
          {
            "level": 3,
            "title": "判断BST的合法性",
            "slug": "判断bst的合法性",
            "link": "#判断bst的合法性",
            "children": []
          },
          {
            "level": 3,
            "title": "在BST中查找一个数是否存在",
            "slug": "在bst中查找一个数是否存在",
            "link": "#在bst中查找一个数是否存在",
            "children": []
          },
          {
            "level": 3,
            "title": "在BST中插入一个数",
            "slug": "在bst中插入一个数",
            "link": "#在bst中插入一个数",
            "children": []
          },
          {
            "level": 3,
            "title": "在BST中删除一个数",
            "slug": "在bst中删除一个数",
            "link": "#在bst中删除一个数",
            "children": []
          }
        ]
      },
      {
        "level": 2,
        "title": "完全二叉树的节点数为什么难算",
        "slug": "完全二叉树的节点数为什么难算",
        "link": "#完全二叉树的节点数为什么难算",
        "children": [
          {
            "level": 3,
            "title": "思路分析",
            "slug": "思路分析-1",
            "link": "#思路分析-1",
            "children": []
          },
          {
            "level": 3,
            "title": "复杂度分析",
            "slug": "复杂度分析",
            "link": "#复杂度分析",
            "children": []
          }
        ]
      },
      {
        "level": 2,
        "title": "用各种遍历框架序列化和反序列化二叉树",
        "slug": "用各种遍历框架序列化和反序列化二叉树",
        "link": "#用各种遍历框架序列化和反序列化二叉树",
        "children": [
          {
            "level": 3,
            "title": "题目描述",
            "slug": "题目描述",
            "link": "#题目描述",
            "children": []
          },
          {
            "level": 3,
            "title": "前序遍历解法",
            "slug": "前序遍历解法",
            "link": "#前序遍历解法",
            "children": []
          },
          {
            "level": 3,
            "title": "后序遍历解法",
            "slug": "后序遍历解法",
            "link": "#后序遍历解法",
            "children": []
          },
          {
            "level": 3,
            "title": "中序遍历解法",
            "slug": "中序遍历解法",
            "link": "#中序遍历解法",
            "children": []
          },
          {
            "level": 3,
            "title": "层级遍历解法",
            "slug": "层级遍历解法",
            "link": "#层级遍历解法",
            "children": []
          }
        ]
      },
      {
        "level": 2,
        "title": "Git原理之二叉树最近公共祖先",
        "slug": "git原理之二叉树最近公共祖先",
        "link": "#git原理之二叉树最近公共祖先",
        "children": [
          {
            "level": 3,
            "title": "二叉树的最近公共祖先",
            "slug": "二叉树的最近公共祖先",
            "link": "#二叉树的最近公共祖先",
            "children": []
          },
          {
            "level": 3,
            "title": "思路分析",
            "slug": "思路分析-2",
            "link": "#思路分析-2",
            "children": []
          }
        ]
      },
      {
        "level": 2,
        "title": "特殊数据结构-单调栈",
        "slug": "特殊数据结构-单调栈",
        "link": "#特殊数据结构-单调栈",
        "children": [
          {
            "level": 3,
            "title": "单调栈解题模版",
            "slug": "单调栈解题模版",
            "link": "#单调栈解题模版",
            "children": []
          },
          {
            "level": 3,
            "title": "题目变形",
            "slug": "题目变形",
            "link": "#题目变形",
            "children": []
          },
          {
            "level": 3,
            "title": "如何处理循环数组",
            "slug": "如何处理循环数组",
            "link": "#如何处理循环数组",
            "children": []
          }
        ]
      },
      {
        "level": 2,
        "title": "特殊数据结构-单调队列",
        "slug": "特殊数据结构-单调队列",
        "link": "#特殊数据结构-单调队列",
        "children": [
          {
            "level": 3,
            "title": "搭建解题框架",
            "slug": "搭建解题框架",
            "link": "#搭建解题框架",
            "children": []
          },
          {
            "level": 3,
            "title": "实现单调队列数据结构",
            "slug": "实现单调队列数据结构",
            "link": "#实现单调队列数据结构",
            "children": []
          },
          {
            "level": 3,
            "title": "算法复杂度分析",
            "slug": "算法复杂度分析",
            "link": "#算法复杂度分析",
            "children": []
          }
        ]
      },
      {
        "level": 2,
        "title": "如何判断回文链表",
        "slug": "如何判断回文链表",
        "link": "#如何判断回文链表",
        "children": [
          {
            "level": 3,
            "title": "判断回文单链表",
            "slug": "判断回文单链表",
            "link": "#判断回文单链表",
            "children": []
          },
          {
            "level": 3,
            "title": "优化空间复杂度",
            "slug": "优化空间复杂度",
            "link": "#优化空间复杂度",
            "children": []
          },
          {
            "level": 3,
            "title": "最后总结",
            "slug": "最后总结",
            "link": "#最后总结",
            "children": []
          }
        ]
      },
      {
        "level": 2,
        "title": "秀操作-纯递归反转链表",
        "slug": "秀操作-纯递归反转链表",
        "link": "#秀操作-纯递归反转链表",
        "children": [
          {
            "level": 3,
            "title": "递归反转整个链表",
            "slug": "递归反转整个链表",
            "link": "#递归反转整个链表",
            "children": []
          },
          {
            "level": 3,
            "title": "反转链表前N个节点",
            "slug": "反转链表前n个节点",
            "link": "#反转链表前n个节点",
            "children": []
          },
          {
            "level": 3,
            "title": "反转链表的一部分",
            "slug": "反转链表的一部分",
            "link": "#反转链表的一部分",
            "children": []
          },
          {
            "level": 3,
            "title": "最后总结",
            "slug": "最后总结-1",
            "link": "#最后总结-1",
            "children": []
          }
        ]
      },
      {
        "level": 2,
        "title": "秀操作-K个一组反转链表",
        "slug": "秀操作-k个一组反转链表",
        "link": "#秀操作-k个一组反转链表",
        "children": [
          {
            "level": 3,
            "title": "分析问题",
            "slug": "分析问题",
            "link": "#分析问题",
            "children": []
          },
          {
            "level": 3,
            "title": "代码实现",
            "slug": "代码实现-1",
            "link": "#代码实现-1",
            "children": []
          },
          {
            "level": 3,
            "title": "最后总结",
            "slug": "最后总结-2",
            "link": "#最后总结-2",
            "children": []
          }
        ]
      }
    ],
    "path": "/codenotes/algdata/lbld/%E7%AE%97%E6%B3%95%E5%B0%8F%E6%8A%84%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "核心套路",
    "headers": [
      {
        "level": 2,
        "title": "学习算法和刷题的框架思维",
        "slug": "学习算法和刷题的框架思维",
        "link": "#学习算法和刷题的框架思维",
        "children": [
          {
            "level": 3,
            "title": "数据结构的存储方式",
            "slug": "数据结构的存储方式",
            "link": "#数据结构的存储方式",
            "children": []
          },
          {
            "level": 3,
            "title": "数据结构的基本操作",
            "slug": "数据结构的基本操作",
            "link": "#数据结构的基本操作",
            "children": []
          },
          {
            "level": 3,
            "title": "算法刷题指南",
            "slug": "算法刷题指南",
            "link": "#算法刷题指南",
            "children": []
          }
        ]
      },
      {
        "level": 2,
        "title": "动态规划解题套路框架",
        "slug": "动态规划解题套路框架",
        "link": "#动态规划解题套路框架",
        "children": []
      },
      {
        "level": 2,
        "title": "回溯算法解题套路框架",
        "slug": "回溯算法解题套路框架",
        "link": "#回溯算法解题套路框架",
        "children": [
          {
            "level": 3,
            "title": "全排列问题",
            "slug": "全排列问题",
            "link": "#全排列问题",
            "children": []
          },
          {
            "level": 3,
            "title": "N皇后问题",
            "slug": "n皇后问题",
            "link": "#n皇后问题",
            "children": []
          },
          {
            "level": 3,
            "title": "最后总结",
            "slug": "最后总结",
            "link": "#最后总结",
            "children": []
          }
        ]
      },
      {
        "level": 2,
        "title": "BFS算法套路框架",
        "slug": "bfs算法套路框架",
        "link": "#bfs算法套路框架",
        "children": [
          {
            "level": 3,
            "title": "算法框架",
            "slug": "算法框架",
            "link": "#算法框架",
            "children": []
          },
          {
            "level": 3,
            "title": "二叉树的最小高度",
            "slug": "二叉树的最小高度",
            "link": "#二叉树的最小高度",
            "children": []
          },
          {
            "level": 3,
            "title": "解开密码锁的最少次数",
            "slug": "解开密码锁的最少次数",
            "link": "#解开密码锁的最少次数",
            "children": []
          }
        ]
      },
      {
        "level": 2,
        "title": "双指针技巧套路框架",
        "slug": "双指针技巧套路框架",
        "link": "#双指针技巧套路框架",
        "children": [
          {
            "level": 3,
            "title": "快慢指针的常用算法",
            "slug": "快慢指针的常用算法",
            "link": "#快慢指针的常用算法",
            "children": []
          },
          {
            "level": 3,
            "title": "左右指针的常用算法",
            "slug": "左右指针的常用算法",
            "link": "#左右指针的常用算法",
            "children": []
          }
        ]
      },
      {
        "level": 2,
        "title": "二分搜索算法",
        "slug": "二分搜索算法",
        "link": "#二分搜索算法",
        "children": [
          {
            "level": 3,
            "title": "二分搜索框架",
            "slug": "二分搜索框架",
            "link": "#二分搜索框架",
            "children": []
          },
          {
            "level": 3,
            "title": "寻找一个数（基本的二分搜索）",
            "slug": "寻找一个数-基本的二分搜索",
            "link": "#寻找一个数-基本的二分搜索",
            "children": []
          },
          {
            "level": 3,
            "title": "寻找左侧边界的二分搜索",
            "slug": "寻找左侧边界的二分搜索",
            "link": "#寻找左侧边界的二分搜索",
            "children": []
          },
          {
            "level": 3,
            "title": "寻找右侧边界的二分搜索",
            "slug": "寻找右侧边界的二分搜索",
            "link": "#寻找右侧边界的二分搜索",
            "children": []
          },
          {
            "level": 3,
            "title": "逻辑统一",
            "slug": "逻辑统一",
            "link": "#逻辑统一",
            "children": []
          }
        ]
      },
      {
        "level": 2,
        "title": "滑动窗口算法变成默写题",
        "slug": "滑动窗口算法变成默写题",
        "link": "#滑动窗口算法变成默写题",
        "children": [
          {
            "level": 3,
            "title": "最小覆盖子串",
            "slug": "最小覆盖子串",
            "link": "#最小覆盖子串",
            "children": []
          },
          {
            "level": 3,
            "title": "字符串排列",
            "slug": "字符串排列",
            "link": "#字符串排列",
            "children": []
          },
          {
            "level": 3,
            "title": "找所有字母异位词",
            "slug": "找所有字母异位词",
            "link": "#找所有字母异位词",
            "children": []
          },
          {
            "level": 3,
            "title": "最长无重复子串",
            "slug": "最长无重复子串",
            "link": "#最长无重复子串",
            "children": []
          }
        ]
      }
    ],
    "path": "/codenotes/algdata/lbld/%E7%AE%97%E6%B3%95%E5%B0%8F%E6%8A%84%E6%A0%B8%E5%BF%83%E5%A5%97%E8%B7%AF.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "算法思维",
    "headers": [],
    "path": "/codenotes/algdata/lbld/%E7%AE%97%E6%B3%95%E5%B0%8F%E6%8A%84%E7%AE%97%E6%B3%95%E6%80%9D%E7%BB%B4.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "高频面试",
    "headers": [
      {
        "level": 2,
        "title": "如何高效寻找素数",
        "slug": "如何高效寻找素数",
        "link": "#如何高效寻找素数",
        "children": [
          {
            "level": 3,
            "title": "一般实现",
            "slug": "一般实现",
            "link": "#一般实现",
            "children": []
          },
          {
            "level": 3,
            "title": "稍加优化",
            "slug": "稍加优化",
            "link": "#稍加优化",
            "children": []
          },
          {
            "level": 3,
            "title": "高效实现",
            "slug": "高效实现",
            "link": "#高效实现",
            "children": []
          }
        ]
      },
      {
        "level": 2,
        "title": "如何高效进行模幂运算",
        "slug": "如何高效进行模幂运算",
        "link": "#如何高效进行模幂运算",
        "children": [
          {
            "level": 3,
            "title": "如何处理数组指数",
            "slug": "如何处理数组指数",
            "link": "#如何处理数组指数",
            "children": []
          },
          {
            "level": 3,
            "title": "如何处理mod运算",
            "slug": "如何处理mod运算",
            "link": "#如何处理mod运算",
            "children": []
          },
          {
            "level": 3,
            "title": "如何高效求幂",
            "slug": "如何高效求幂",
            "link": "#如何高效求幂",
            "children": []
          }
        ]
      },
      {
        "level": 2,
        "title": "如何运用二分搜索算法",
        "slug": "如何运用二分搜索算法",
        "link": "#如何运用二分搜索算法",
        "children": []
      },
      {
        "level": 2,
        "title": "如何高效解决接雨水问题",
        "slug": "如何高效解决接雨水问题",
        "link": "#如何高效解决接雨水问题",
        "children": []
      },
      {
        "level": 2,
        "title": "如何去除有序数组的重复元素",
        "slug": "如何去除有序数组的重复元素",
        "link": "#如何去除有序数组的重复元素",
        "children": []
      },
      {
        "level": 2,
        "title": "如何寻找最长回文子串",
        "slug": "如何寻找最长回文子串",
        "link": "#如何寻找最长回文子串",
        "children": []
      },
      {
        "level": 2,
        "title": "如何运用贪心思想玩跳跃游戏",
        "slug": "如何运用贪心思想玩跳跃游戏",
        "link": "#如何运用贪心思想玩跳跃游戏",
        "children": []
      },
      {
        "level": 2,
        "title": "如何运用贪心算法做时间管理",
        "slug": "如何运用贪心算法做时间管理",
        "link": "#如何运用贪心算法做时间管理",
        "children": []
      },
      {
        "level": 2,
        "title": "如何判定括号合法性",
        "slug": "如何判定括号合法性",
        "link": "#如何判定括号合法性",
        "children": []
      },
      {
        "level": 2,
        "title": "如何调度考生的座位",
        "slug": "如何调度考生的座位",
        "link": "#如何调度考生的座位",
        "children": []
      },
      {
        "level": 2,
        "title": "Union-Find算法详解",
        "slug": "union-find算法详解",
        "link": "#union-find算法详解",
        "children": []
      },
      {
        "level": 2,
        "title": "Union-Find算法应用",
        "slug": "union-find算法应用",
        "link": "#union-find算法应用",
        "children": []
      },
      {
        "level": 2,
        "title": "一行代码就能解决的算法题",
        "slug": "一行代码就能解决的算法题",
        "link": "#一行代码就能解决的算法题",
        "children": [
          {
            "level": 3,
            "title": "Nim游戏",
            "slug": "nim游戏",
            "link": "#nim游戏",
            "children": []
          },
          {
            "level": 3,
            "title": "石子游戏",
            "slug": "石子游戏",
            "link": "#石子游戏",
            "children": []
          },
          {
            "level": 3,
            "title": "电灯开关问题",
            "slug": "电灯开关问题",
            "link": "#电灯开关问题",
            "children": []
          }
        ]
      }
    ],
    "path": "/codenotes/algdata/lbld/%E7%AE%97%E6%B3%95%E5%B0%8F%E6%8A%84%E9%AB%98%E9%A2%91%E9%9D%A2%E8%AF%95.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "HOT100",
    "headers": [
      {
        "level": 2,
        "title": "HOT100",
        "slug": "hot100",
        "link": "#hot100",
        "children": []
      },
      {
        "level": 2,
        "title": "EASY",
        "slug": "easy",
        "link": "#easy",
        "children": [
          {
            "level": 3,
            "title": "1、两数之和",
            "slug": "_1、两数之和",
            "link": "#_1、两数之和",
            "children": []
          },
          {
            "level": 3,
            "title": "20、有效的括号",
            "slug": "_20、有效的括号",
            "link": "#_20、有效的括号",
            "children": []
          },
          {
            "level": 3,
            "title": "21、合并两个有序链表",
            "slug": "_21、合并两个有序链表",
            "link": "#_21、合并两个有序链表",
            "children": []
          }
        ]
      },
      {
        "level": 2,
        "title": "MEDIUM",
        "slug": "medium",
        "link": "#medium",
        "children": [
          {
            "level": 3,
            "title": "79、单词搜索",
            "slug": "_79、单词搜索",
            "link": "#_79、单词搜索",
            "children": []
          },
          {
            "level": 3,
            "title": "146、LRU 缓存",
            "slug": "_146、lru-缓存",
            "link": "#_146、lru-缓存",
            "children": []
          },
          {
            "level": 3,
            "title": "207、课程表",
            "slug": "_207、课程表",
            "link": "#_207、课程表",
            "children": []
          },
          {
            "level": 3,
            "title": "337、打家劫舍 III",
            "slug": "_337、打家劫舍-iii",
            "link": "#_337、打家劫舍-iii",
            "children": []
          },
          {
            "level": 3,
            "title": "437、路径总和 III",
            "slug": "_437、路径总和-iii",
            "link": "#_437、路径总和-iii",
            "children": []
          },
          {
            "level": 3,
            "title": "560、和为 K 的子数组",
            "slug": "_560、和为-k-的子数组",
            "link": "#_560、和为-k-的子数组",
            "children": []
          },
          {
            "level": 3,
            "title": "581、最短无序连续子数组",
            "slug": "_581、最短无序连续子数组",
            "link": "#_581、最短无序连续子数组",
            "children": []
          },
          {
            "level": 3,
            "title": "621、任务调度器",
            "slug": "_621、任务调度器",
            "link": "#_621、任务调度器",
            "children": []
          }
        ]
      },
      {
        "level": 2,
        "title": "HARD",
        "slug": "hard",
        "link": "#hard",
        "children": [
          {
            "level": 3,
            "title": "42、接雨水",
            "slug": "_42、接雨水",
            "link": "#_42、接雨水",
            "children": []
          },
          {
            "level": 3,
            "title": "84、柱状图中最大的矩形",
            "slug": "_84、柱状图中最大的矩形",
            "link": "#_84、柱状图中最大的矩形",
            "children": []
          },
          {
            "level": 3,
            "title": "297、二叉树的序列化与反序列化",
            "slug": "_297、二叉树的序列化与反序列化",
            "link": "#_297、二叉树的序列化与反序列化",
            "children": []
          }
        ]
      }
    ],
    "path": "/codenotes/algdata/LeetCode/HOT100.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "LeetCode",
    "headers": [],
    "path": "/codenotes/algdata/LeetCode/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "微服务",
    "headers": [],
    "path": "/codenotes/framework/MicroServices/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "微服务1",
    "headers": [
      {
        "level": 2,
        "title": "1.0 学习目标",
        "slug": "_1-0-学习目标",
        "link": "#_1-0-学习目标",
        "children": []
      },
      {
        "level": 2,
        "title": "1.1 服务架构演变",
        "slug": "_1-1-服务架构演变",
        "link": "#_1-1-服务架构演变",
        "children": [
          {
            "level": 3,
            "title": "1.1.1 单体架构",
            "slug": "_1-1-1-单体架构",
            "link": "#_1-1-1-单体架构",
            "children": []
          },
          {
            "level": 3,
            "title": "1.1.2 分布式架构",
            "slug": "_1-1-2-分布式架构",
            "link": "#_1-1-2-分布式架构",
            "children": []
          },
          {
            "level": 3,
            "title": "1.1.3 总结",
            "slug": "_1-1-3-总结",
            "link": "#_1-1-3-总结",
            "children": []
          }
        ]
      },
      {
        "level": 2,
        "title": "1.3 微服务",
        "slug": "_1-3-微服务",
        "link": "#_1-3-微服务",
        "children": []
      },
      {
        "level": 2,
        "title": "1.4 SpringCloud",
        "slug": "_1-4-springcloud",
        "link": "#_1-4-springcloud",
        "children": []
      },
      {
        "level": 2,
        "title": "1.5 总结",
        "slug": "_1-5-总结",
        "link": "#_1-5-总结",
        "children": []
      },
      {
        "level": 2,
        "title": "2.1 服务拆分原则",
        "slug": "_2-1-服务拆分原则",
        "link": "#_2-1-服务拆分原则",
        "children": []
      },
      {
        "level": 2,
        "title": "2.2 服务拆分示例",
        "slug": "_2-2-服务拆分示例",
        "link": "#_2-2-服务拆分示例",
        "children": [
          {
            "level": 3,
            "title": "2.2.1 导入Sql语句",
            "slug": "_2-2-1-导入sql语句",
            "link": "#_2-2-1-导入sql语句",
            "children": []
          },
          {
            "level": 3,
            "title": "2.2.2 导入demo工程",
            "slug": "_2-2-2-导入demo工程",
            "link": "#_2-2-2-导入demo工程",
            "children": []
          }
        ]
      },
      {
        "level": 2,
        "title": "2.3 实现远程调用案例",
        "slug": "_2-3-实现远程调用案例",
        "link": "#_2-3-实现远程调用案例",
        "children": [
          {
            "level": 3,
            "title": "2.3.1 案例需求",
            "slug": "_2-3-1-案例需求",
            "link": "#_2-3-1-案例需求",
            "children": []
          },
          {
            "level": 3,
            "title": "2.3.2 注册RestTemplate",
            "slug": "_2-3-2-注册resttemplate",
            "link": "#_2-3-2-注册resttemplate",
            "children": []
          },
          {
            "level": 3,
            "title": "2.3.3 实现远程调用",
            "slug": "_2-3-3-实现远程调用",
            "link": "#_2-3-3-实现远程调用",
            "children": []
          }
        ]
      },
      {
        "level": 2,
        "title": "2.4 提供者与消费者",
        "slug": "_2-4-提供者与消费者",
        "link": "#_2-4-提供者与消费者",
        "children": []
      },
      {
        "level": 2,
        "title": "3.1 Eureka的结构和作用",
        "slug": "_3-1-eureka的结构和作用",
        "link": "#_3-1-eureka的结构和作用",
        "children": []
      },
      {
        "level": 2,
        "title": "3.2 搭建eureka-server",
        "slug": "_3-2-搭建eureka-server",
        "link": "#_3-2-搭建eureka-server",
        "children": [
          {
            "level": 3,
            "title": "3.2.1 创建eureka-server服务",
            "slug": "_3-2-1-创建eureka-server服务",
            "link": "#_3-2-1-创建eureka-server服务",
            "children": []
          },
          {
            "level": 3,
            "title": "3.2.2 引入eureka依赖",
            "slug": "_3-2-2-引入eureka依赖",
            "link": "#_3-2-2-引入eureka依赖",
            "children": []
          },
          {
            "level": 3,
            "title": "3.2.3 编写启动类",
            "slug": "_3-2-3-编写启动类",
            "link": "#_3-2-3-编写启动类",
            "children": []
          },
          {
            "level": 3,
            "title": "3.2.4 编写配置文件",
            "slug": "_3-2-4-编写配置文件",
            "link": "#_3-2-4-编写配置文件",
            "children": []
          },
          {
            "level": 3,
            "title": "3.2.5 启动服务",
            "slug": "_3-2-5-启动服务",
            "link": "#_3-2-5-启动服务",
            "children": []
          }
        ]
      },
      {
        "level": 2,
        "title": "3.3 服务注册",
        "slug": "_3-3-服务注册",
        "link": "#_3-3-服务注册",
        "children": [
          {
            "level": 3,
            "title": "3.3.1 引入依赖",
            "slug": "_3-3-1-引入依赖",
            "link": "#_3-3-1-引入依赖",
            "children": []
          },
          {
            "level": 3,
            "title": "3.3.2 配置文件",
            "slug": "_3-3-2-配置文件",
            "link": "#_3-3-2-配置文件",
            "children": []
          },
          {
            "level": 3,
            "title": "3.3.3 启动多个user-service实例",
            "slug": "_3-3-3-启动多个user-service实例",
            "link": "#_3-3-3-启动多个user-service实例",
            "children": []
          }
        ]
      },
      {
        "level": 2,
        "title": "3.4 服务发现",
        "slug": "_3-4-服务发现",
        "link": "#_3-4-服务发现",
        "children": [
          {
            "level": 3,
            "title": "3.4.1 引入依赖",
            "slug": "_3-4-1-引入依赖",
            "link": "#_3-4-1-引入依赖",
            "children": []
          },
          {
            "level": 3,
            "title": "3.4.2 配置文件",
            "slug": "_3-4-2-配置文件",
            "link": "#_3-4-2-配置文件",
            "children": []
          },
          {
            "level": 3,
            "title": "3.4.3 服务拉取和负载均衡",
            "slug": "_3-4-3-服务拉取和负载均衡",
            "link": "#_3-4-3-服务拉取和负载均衡",
            "children": []
          }
        ]
      },
      {
        "level": 2,
        "title": "4.1 负载均衡原理",
        "slug": "_4-1-负载均衡原理",
        "link": "#_4-1-负载均衡原理",
        "children": []
      },
      {
        "level": 2,
        "title": "4.2 源码跟踪",
        "slug": "_4-2-源码跟踪",
        "link": "#_4-2-源码跟踪",
        "children": [
          {
            "level": 3,
            "title": "4.2.1 LoadBalancerIntercepor",
            "slug": "_4-2-1-loadbalancerintercepor",
            "link": "#_4-2-1-loadbalancerintercepor",
            "children": []
          },
          {
            "level": 3,
            "title": "4.2.2 LoadBalancerClient",
            "slug": "_4-2-2-loadbalancerclient",
            "link": "#_4-2-2-loadbalancerclient",
            "children": []
          },
          {
            "level": 3,
            "title": "4.2.3 负载均衡策略IRule",
            "slug": "_4-2-3-负载均衡策略irule",
            "link": "#_4-2-3-负载均衡策略irule",
            "children": []
          },
          {
            "level": 3,
            "title": "4.2.4 总结",
            "slug": "_4-2-4-总结",
            "link": "#_4-2-4-总结",
            "children": []
          }
        ]
      },
      {
        "level": 2,
        "title": "4.3 负载均衡策略",
        "slug": "_4-3-负载均衡策略",
        "link": "#_4-3-负载均衡策略",
        "children": [
          {
            "level": 3,
            "title": "4.3.1 负载均衡策略",
            "slug": "_4-3-1-负载均衡策略",
            "link": "#_4-3-1-负载均衡策略",
            "children": []
          },
          {
            "level": 3,
            "title": "4.3.2 自定义负载均衡策略",
            "slug": "_4-3-2-自定义负载均衡策略",
            "link": "#_4-3-2-自定义负载均衡策略",
            "children": []
          }
        ]
      },
      {
        "level": 2,
        "title": "4.4 饥饿加载",
        "slug": "_4-4-饥饿加载",
        "link": "#_4-4-饥饿加载",
        "children": []
      },
      {
        "level": 2,
        "title": "5.1 认识和安装Nacos",
        "slug": "_5-1-认识和安装nacos",
        "link": "#_5-1-认识和安装nacos",
        "children": []
      },
      {
        "level": 2,
        "title": "5.2 服务注册到nacos",
        "slug": "_5-2-服务注册到nacos",
        "link": "#_5-2-服务注册到nacos",
        "children": [
          {
            "level": 3,
            "title": "5.2.1 引入依赖",
            "slug": "_5-2-1-引入依赖",
            "link": "#_5-2-1-引入依赖",
            "children": []
          },
          {
            "level": 3,
            "title": "5.2.2 配置nacos地址",
            "slug": "_5-2-2-配置nacos地址",
            "link": "#_5-2-2-配置nacos地址",
            "children": []
          },
          {
            "level": 3,
            "title": "5.2.3 重启",
            "slug": "_5-2-3-重启",
            "link": "#_5-2-3-重启",
            "children": []
          }
        ]
      },
      {
        "level": 2,
        "title": "5.3 服务分级存储模型",
        "slug": "_5-3-服务分级存储模型",
        "link": "#_5-3-服务分级存储模型",
        "children": [
          {
            "level": 3,
            "title": "5.3.1 给user-service配置集群",
            "slug": "_5-3-1-给user-service配置集群",
            "link": "#_5-3-1-给user-service配置集群",
            "children": []
          },
          {
            "level": 3,
            "title": "5.3.2 同集群优先的负载均衡",
            "slug": "_5-3-2-同集群优先的负载均衡",
            "link": "#_5-3-2-同集群优先的负载均衡",
            "children": []
          }
        ]
      },
      {
        "level": 2,
        "title": "5.4 权重配置",
        "slug": "_5-4-权重配置",
        "link": "#_5-4-权重配置",
        "children": []
      },
      {
        "level": 2,
        "title": "5.5 环境隔离",
        "slug": "_5-5-环境隔离",
        "link": "#_5-5-环境隔离",
        "children": [
          {
            "level": 3,
            "title": "5.5.1 创建namespace",
            "slug": "_5-5-1-创建namespace",
            "link": "#_5-5-1-创建namespace",
            "children": []
          },
          {
            "level": 3,
            "title": "5.5.2 给微服务配置namespace",
            "slug": "_5-5-2-给微服务配置namespace",
            "link": "#_5-5-2-给微服务配置namespace",
            "children": []
          }
        ]
      },
      {
        "level": 2,
        "title": "5.6 Nacos与Eureka的区别",
        "slug": "_5-6-nacos与eureka的区别",
        "link": "#_5-6-nacos与eureka的区别",
        "children": []
      }
    ],
    "path": "/codenotes/framework/MicroServices/SpringCloud01.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "微服务2",
    "headers": [
      {
        "level": 2,
        "title": "1.1 统一配置管理",
        "slug": "_1-1-统一配置管理",
        "link": "#_1-1-统一配置管理",
        "children": [
          {
            "level": 3,
            "title": "1.1.1 在nacos中添加配置文件",
            "slug": "_1-1-1-在nacos中添加配置文件",
            "link": "#_1-1-1-在nacos中添加配置文件",
            "children": []
          },
          {
            "level": 3,
            "title": "1.1.2 从微服务拉取配置",
            "slug": "_1-1-2-从微服务拉取配置",
            "link": "#_1-1-2-从微服务拉取配置",
            "children": []
          }
        ]
      },
      {
        "level": 2,
        "title": "1.2 配置热更新",
        "slug": "_1-2-配置热更新",
        "link": "#_1-2-配置热更新",
        "children": [
          {
            "level": 3,
            "title": "1.2.1 方式一",
            "slug": "_1-2-1-方式一",
            "link": "#_1-2-1-方式一",
            "children": []
          },
          {
            "level": 3,
            "title": "1.2.2 方式二",
            "slug": "_1-2-2-方式二",
            "link": "#_1-2-2-方式二",
            "children": []
          }
        ]
      },
      {
        "level": 2,
        "title": "1.3 配置共享",
        "slug": "_1-3-配置共享",
        "link": "#_1-3-配置共享",
        "children": [
          {
            "level": 3,
            "title": "1、添加一个环境共享配置",
            "slug": "_1、添加一个环境共享配置",
            "link": "#_1、添加一个环境共享配置",
            "children": []
          },
          {
            "level": 3,
            "title": "2、在user-service中读取共享配置",
            "slug": "_2、在user-service中读取共享配置",
            "link": "#_2、在user-service中读取共享配置",
            "children": []
          },
          {
            "level": 3,
            "title": "3、运行两个UserApplication，使用不同的profile",
            "slug": "_3、运行两个userapplication-使用不同的profile",
            "link": "#_3、运行两个userapplication-使用不同的profile",
            "children": []
          },
          {
            "level": 3,
            "title": "4、配置共享的优先级",
            "slug": "_4、配置共享的优先级",
            "link": "#_4、配置共享的优先级",
            "children": []
          }
        ]
      },
      {
        "level": 2,
        "title": "1.4 搭建Nacos集群",
        "slug": "_1-4-搭建nacos集群",
        "link": "#_1-4-搭建nacos集群",
        "children": []
      },
      {
        "level": 2,
        "title": "2.1 Feign替代RestTemplate",
        "slug": "_2-1-feign替代resttemplate",
        "link": "#_2-1-feign替代resttemplate",
        "children": [
          {
            "level": 3,
            "title": "1、引入依赖",
            "slug": "_1、引入依赖",
            "link": "#_1、引入依赖",
            "children": []
          },
          {
            "level": 3,
            "title": "2、添加注解",
            "slug": "_2、添加注解",
            "link": "#_2、添加注解",
            "children": []
          },
          {
            "level": 3,
            "title": "3、编写Feign的客户端",
            "slug": "_3、编写feign的客户端",
            "link": "#_3、编写feign的客户端",
            "children": []
          },
          {
            "level": 3,
            "title": "4、测试",
            "slug": "_4、测试",
            "link": "#_4、测试",
            "children": []
          },
          {
            "level": 3,
            "title": "5、总结",
            "slug": "_5、总结",
            "link": "#_5、总结",
            "children": []
          }
        ]
      },
      {
        "level": 2,
        "title": "2.2 自定义配置",
        "slug": "_2-2-自定义配置",
        "link": "#_2-2-自定义配置",
        "children": [
          {
            "level": 3,
            "title": "2.2.1 配置文件方式",
            "slug": "_2-2-1-配置文件方式",
            "link": "#_2-2-1-配置文件方式",
            "children": []
          },
          {
            "level": 3,
            "title": "2.2.2 Java代码方式",
            "slug": "_2-2-2-java代码方式",
            "link": "#_2-2-2-java代码方式",
            "children": []
          }
        ]
      },
      {
        "level": 2,
        "title": "2.3 Feign使用优化",
        "slug": "_2-3-feign使用优化",
        "link": "#_2-3-feign使用优化",
        "children": []
      },
      {
        "level": 2,
        "title": "2.4 最佳实践",
        "slug": "_2-4-最佳实践",
        "link": "#_2-4-最佳实践",
        "children": [
          {
            "level": 3,
            "title": "2.4.1 继承方式",
            "slug": "_2-4-1-继承方式",
            "link": "#_2-4-1-继承方式",
            "children": []
          },
          {
            "level": 3,
            "title": "2.4.2 抽取方式",
            "slug": "_2-4-2-抽取方式",
            "link": "#_2-4-2-抽取方式",
            "children": []
          },
          {
            "level": 3,
            "title": "2.4.3 实现基于抽取的最佳实践",
            "slug": "_2-4-3-实现基于抽取的最佳实践",
            "link": "#_2-4-3-实现基于抽取的最佳实践",
            "children": []
          }
        ]
      },
      {
        "level": 2,
        "title": "3.1 为什么需要网关",
        "slug": "_3-1-为什么需要网关",
        "link": "#_3-1-为什么需要网关",
        "children": []
      },
      {
        "level": 2,
        "title": "3.2 gateway快速入门",
        "slug": "_3-2-gateway快速入门",
        "link": "#_3-2-gateway快速入门",
        "children": [
          {
            "level": 3,
            "title": "1、创建gateway服务，引入依赖",
            "slug": "_1、创建gateway服务-引入依赖",
            "link": "#_1、创建gateway服务-引入依赖",
            "children": []
          },
          {
            "level": 3,
            "title": "2、编写启动类",
            "slug": "_2、编写启动类",
            "link": "#_2、编写启动类",
            "children": []
          },
          {
            "level": 3,
            "title": "3、编写基础配置和路由规则",
            "slug": "_3、编写基础配置和路由规则",
            "link": "#_3、编写基础配置和路由规则",
            "children": []
          },
          {
            "level": 3,
            "title": "4、重启测试",
            "slug": "_4、重启测试",
            "link": "#_4、重启测试",
            "children": []
          },
          {
            "level": 3,
            "title": "5、网关路由的流程图",
            "slug": "_5、网关路由的流程图",
            "link": "#_5、网关路由的流程图",
            "children": []
          },
          {
            "level": 3,
            "title": "6、总结",
            "slug": "_6、总结",
            "link": "#_6、总结",
            "children": []
          }
        ]
      },
      {
        "level": 2,
        "title": "3.3 断言工厂",
        "slug": "_3-3-断言工厂",
        "link": "#_3-3-断言工厂",
        "children": []
      },
      {
        "level": 2,
        "title": "3.4 过滤器工厂",
        "slug": "_3-4-过滤器工厂",
        "link": "#_3-4-过滤器工厂",
        "children": [
          {
            "level": 3,
            "title": "3.4.1 路由过滤器的种类",
            "slug": "_3-4-1-路由过滤器的种类",
            "link": "#_3-4-1-路由过滤器的种类",
            "children": []
          },
          {
            "level": 3,
            "title": "3.4.2 请求头过滤器",
            "slug": "_3-4-2-请求头过滤器",
            "link": "#_3-4-2-请求头过滤器",
            "children": []
          },
          {
            "level": 3,
            "title": "3.4.3 默认过滤器",
            "slug": "_3-4-3-默认过滤器",
            "link": "#_3-4-3-默认过滤器",
            "children": []
          },
          {
            "level": 3,
            "title": "3.4.4 总结",
            "slug": "_3-4-4-总结",
            "link": "#_3-4-4-总结",
            "children": []
          }
        ]
      },
      {
        "level": 2,
        "title": "3.5 全局过滤器",
        "slug": "_3-5-全局过滤器",
        "link": "#_3-5-全局过滤器",
        "children": [
          {
            "level": 3,
            "title": "3.5.1 全局过滤器作用",
            "slug": "_3-5-1-全局过滤器作用",
            "link": "#_3-5-1-全局过滤器作用",
            "children": []
          },
          {
            "level": 3,
            "title": "3.5.2 自定义全局过滤器",
            "slug": "_3-5-2-自定义全局过滤器",
            "link": "#_3-5-2-自定义全局过滤器",
            "children": []
          },
          {
            "level": 3,
            "title": "3.5.3 过滤器执行顺序",
            "slug": "_3-5-3-过滤器执行顺序",
            "link": "#_3-5-3-过滤器执行顺序",
            "children": []
          }
        ]
      },
      {
        "level": 2,
        "title": "3.6 跨域问题",
        "slug": "_3-6-跨域问题",
        "link": "#_3-6-跨域问题",
        "children": [
          {
            "level": 3,
            "title": "3.6.1 什么是跨域问题",
            "slug": "_3-6-1-什么是跨域问题",
            "link": "#_3-6-1-什么是跨域问题",
            "children": []
          },
          {
            "level": 3,
            "title": "3.6.2 模拟跨域问题",
            "slug": "_3-6-2-模拟跨域问题",
            "link": "#_3-6-2-模拟跨域问题",
            "children": []
          },
          {
            "level": 3,
            "title": "3.6.3 解决跨域问题",
            "slug": "_3-6-3-解决跨域问题",
            "link": "#_3-6-3-解决跨域问题",
            "children": []
          }
        ]
      }
    ],
    "path": "/codenotes/framework/MicroServices/SpringCloud02.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "微服务0",
    "headers": [],
    "path": "/codenotes/framework/MicroServices/%E8%AE%A4%E8%AF%86%E5%BE%AE%E6%9C%8D%E5%8A%A1.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "Netty核心",
    "headers": [
      {
        "level": 2,
        "title": "一、概述",
        "slug": "一、概述",
        "link": "#一、概述",
        "children": [
          {
            "level": 3,
            "title": "1、什么是Netty",
            "slug": "_1、什么是netty",
            "link": "#_1、什么是netty",
            "children": []
          },
          {
            "level": 3,
            "title": "2、Netty的优势",
            "slug": "_2、netty的优势",
            "link": "#_2、netty的优势",
            "children": []
          },
          {
            "level": 3,
            "title": "3、Netty的地位",
            "slug": "_3、netty的地位",
            "link": "#_3、netty的地位",
            "children": []
          },
          {
            "level": 3,
            "title": "4、Netty的作者",
            "slug": "_4、netty的作者",
            "link": "#_4、netty的作者",
            "children": []
          }
        ]
      },
      {
        "level": 2,
        "title": "二、入门案例",
        "slug": "二、入门案例",
        "link": "#二、入门案例",
        "children": [
          {
            "level": 3,
            "title": "1、需求",
            "slug": "_1、需求",
            "link": "#_1、需求",
            "children": []
          },
          {
            "level": 3,
            "title": "2、服务器端代码",
            "slug": "_2、服务器端代码",
            "link": "#_2、服务器端代码",
            "children": []
          },
          {
            "level": 3,
            "title": "3、客户端代码",
            "slug": "_3、客户端代码",
            "link": "#_3、客户端代码",
            "children": []
          },
          {
            "level": 3,
            "title": "4、运行流程",
            "slug": "_4、运行流程",
            "link": "#_4、运行流程",
            "children": []
          },
          {
            "level": 3,
            "title": "5、组件解释",
            "slug": "_5、组件解释",
            "link": "#_5、组件解释",
            "children": []
          }
        ]
      },
      {
        "level": 2,
        "title": "三、组件",
        "slug": "三、组件",
        "link": "#三、组件",
        "children": [
          {
            "level": 3,
            "title": "1、EventLoop",
            "slug": "_1、eventloop",
            "link": "#_1、eventloop",
            "children": []
          },
          {
            "level": 3,
            "title": "2、Channel",
            "slug": "_2、channel",
            "link": "#_2、channel",
            "children": []
          },
          {
            "level": 3,
            "title": "3、Future&Promise",
            "slug": "_3、future-promise",
            "link": "#_3、future-promise",
            "children": []
          },
          {
            "level": 3,
            "title": "4、Handler&Pipeline",
            "slug": "_4、handler-pipeline",
            "link": "#_4、handler-pipeline",
            "children": []
          },
          {
            "level": 3,
            "title": "5、ByteBuf",
            "slug": "_5、bytebuf",
            "link": "#_5、bytebuf",
            "children": []
          }
        ]
      },
      {
        "level": 2,
        "title": "四、应用",
        "slug": "四、应用",
        "link": "#四、应用",
        "children": [
          {
            "level": 3,
            "title": "1、粘包与半包",
            "slug": "_1、粘包与半包",
            "link": "#_1、粘包与半包",
            "children": []
          },
          {
            "level": 3,
            "title": "2、协议设计与解析",
            "slug": "_2、协议设计与解析",
            "link": "#_2、协议设计与解析",
            "children": []
          },
          {
            "level": 3,
            "title": "3、在线聊天室",
            "slug": "_3、在线聊天室",
            "link": "#_3、在线聊天室",
            "children": []
          }
        ]
      }
    ],
    "path": "/codenotes/framework/netty/Netty%E6%A0%B8%E5%BF%83.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "Netty高级",
    "headers": [
      {
        "level": 2,
        "title": "一、优化",
        "slug": "一、优化",
        "link": "#一、优化",
        "children": [
          {
            "level": 3,
            "title": "1、扩展序列化算法",
            "slug": "_1、扩展序列化算法",
            "link": "#_1、扩展序列化算法",
            "children": []
          },
          {
            "level": 3,
            "title": "2、参数调优",
            "slug": "_2、参数调优",
            "link": "#_2、参数调优",
            "children": []
          },
          {
            "level": 3,
            "title": "3、RPC框架",
            "slug": "_3、rpc框架",
            "link": "#_3、rpc框架",
            "children": []
          },
          {
            "level": 3,
            "title": "4、项目代码",
            "slug": "_4、项目代码",
            "link": "#_4、项目代码",
            "children": []
          }
        ]
      },
      {
        "level": 2,
        "title": "二、源码",
        "slug": "二、源码",
        "link": "#二、源码",
        "children": []
      },
      {
        "level": 2,
        "title": "三、参考",
        "slug": "三、参考",
        "link": "#三、参考",
        "children": []
      }
    ],
    "path": "/codenotes/framework/netty/Netty%E9%AB%98%E7%BA%A7.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "Netty",
    "headers": [],
    "path": "/codenotes/framework/netty/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "",
    "headers": [],
    "path": "/codenotes/framework/Spring_SpringBoot/Spring.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "",
    "headers": [],
    "path": "/404.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "Spring Spring Boot",
    "headers": [],
    "path": "/codenotes/framework/Spring_SpringBoot/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "分类",
    "headers": [],
    "path": "/category/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "标签",
    "headers": [],
    "path": "/tag/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "文章",
    "headers": [],
    "path": "/article/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "收藏",
    "headers": [],
    "path": "/star/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "时间轴",
    "headers": [],
    "path": "/timeline/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "快速导航 分类",
    "headers": [],
    "path": "/category/%E5%BF%AB%E9%80%9F%E5%AF%BC%E8%88%AA/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "优质博客 标签",
    "headers": [],
    "path": "/tag/%E4%BC%98%E8%B4%A8%E5%8D%9A%E5%AE%A2/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "SQL 分类",
    "headers": [],
    "path": "/category/sql/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "搜索引擎 标签",
    "headers": [],
    "path": "/tag/%E6%90%9C%E7%B4%A2%E5%BC%95%E6%93%8E/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "Go 分类",
    "headers": [],
    "path": "/category/go/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "SQL 标签",
    "headers": [],
    "path": "/tag/sql/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "Java 分类",
    "headers": [],
    "path": "/category/java/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "Go 标签",
    "headers": [],
    "path": "/tag/go/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "电子书 分类",
    "headers": [],
    "path": "/category/%E7%94%B5%E5%AD%90%E4%B9%A6/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "Java 标签",
    "headers": [],
    "path": "/tag/java/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "实战项目 分类",
    "headers": [],
    "path": "/category/%E5%AE%9E%E6%88%98%E9%A1%B9%E7%9B%AE/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "电子书 标签",
    "headers": [],
    "path": "/tag/%E7%94%B5%E5%AD%90%E4%B9%A6/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "系统设计 分类",
    "headers": [],
    "path": "/category/%E7%B3%BB%E7%BB%9F%E8%AE%BE%E8%AE%A1/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "实战项目 标签",
    "headers": [],
    "path": "/tag/%E5%AE%9E%E6%88%98%E9%A1%B9%E7%9B%AE/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "技术教程 分类",
    "headers": [],
    "path": "/category/%E6%8A%80%E6%9C%AF%E6%95%99%E7%A8%8B/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "系统设计 标签",
    "headers": [],
    "path": "/tag/%E7%B3%BB%E7%BB%9F%E8%AE%BE%E8%AE%A1/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "工具类库 分类",
    "headers": [],
    "path": "/category/%E5%B7%A5%E5%85%B7%E7%B1%BB%E5%BA%93/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "技术教程 标签",
    "headers": [],
    "path": "/tag/%E6%8A%80%E6%9C%AF%E6%95%99%E7%A8%8B/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "书籍 分类",
    "headers": [],
    "path": "/category/%E4%B9%A6%E7%B1%8D/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "工具类库 标签",
    "headers": [],
    "path": "/tag/%E5%B7%A5%E5%85%B7%E7%B1%BB%E5%BA%93/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "影视 分类",
    "headers": [],
    "path": "/category/%E5%BD%B1%E8%A7%86/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "书籍 标签",
    "headers": [],
    "path": "/tag/%E4%B9%A6%E7%B1%8D/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "音乐 分类",
    "headers": [],
    "path": "/category/%E9%9F%B3%E4%B9%90/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "影视 标签",
    "headers": [],
    "path": "/tag/%E5%BD%B1%E8%A7%86/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "算法 分类",
    "headers": [],
    "path": "/category/%E7%AE%97%E6%B3%95/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "音乐 标签",
    "headers": [],
    "path": "/tag/%E9%9F%B3%E4%B9%90/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "数据结构 分类",
    "headers": [],
    "path": "/category/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "算法 标签",
    "headers": [],
    "path": "/tag/%E7%AE%97%E6%B3%95/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "SpringCloud 分类",
    "headers": [],
    "path": "/category/springcloud/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "数据结构 标签",
    "headers": [],
    "path": "/tag/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "微服务 分类",
    "headers": [],
    "path": "/category/%E5%BE%AE%E6%9C%8D%E5%8A%A1/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "序列化 标签",
    "headers": [],
    "path": "/tag/%E5%BA%8F%E5%88%97%E5%8C%96/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "Netty 分类",
    "headers": [],
    "path": "/category/netty/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "参数调优 标签",
    "headers": [],
    "path": "/tag/%E5%8F%82%E6%95%B0%E8%B0%83%E4%BC%98/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "网络编程 分类",
    "headers": [],
    "path": "/category/%E7%BD%91%E7%BB%9C%E7%BC%96%E7%A8%8B/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "RPC框架 标签",
    "headers": [],
    "path": "/tag/rpc%E6%A1%86%E6%9E%B6/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "服务器 标签",
    "headers": [],
    "path": "/tag/%E6%9C%8D%E5%8A%A1%E5%99%A8/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "客户端 标签",
    "headers": [],
    "path": "/tag/%E5%AE%A2%E6%88%B7%E7%AB%AF/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "组件 标签",
    "headers": [],
    "path": "/tag/%E7%BB%84%E4%BB%B6/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "协议设计 标签",
    "headers": [],
    "path": "/tag/%E5%8D%8F%E8%AE%AE%E8%AE%BE%E8%AE%A1/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "粘包半包 标签",
    "headers": [],
    "path": "/tag/%E7%B2%98%E5%8C%85%E5%8D%8A%E5%8C%85/",
    "pathLocale": "/",
    "extraFields": []
  }
];
const searchIndex = ref(searchIndex$1);
const useSearchIndex = () => searchIndex;
const useSearchSuggestions = ({ searchIndex: searchIndex2, routeLocale, query, maxSuggestions: maxSuggestions2 }) => {
  const localeSearchIndex = computed(() => searchIndex2.value.filter((item) => item.pathLocale === routeLocale.value));
  return computed(() => {
    const searchStr = query.value.trim().toLowerCase();
    if (!searchStr)
      return [];
    const suggestions = [];
    const matchPageHeader = (searchIndexItem, header) => {
      if (isQueryMatched(searchStr, [header.title])) {
        suggestions.push({
          link: `${searchIndexItem.path}#${header.slug}`,
          title: searchIndexItem.title,
          header: header.title
        });
      }
      for (const child of header.children) {
        if (suggestions.length >= maxSuggestions2.value) {
          return;
        }
        matchPageHeader(searchIndexItem, child);
      }
    };
    for (const searchIndexItem of localeSearchIndex.value) {
      if (suggestions.length >= maxSuggestions2.value) {
        break;
      }
      if (isQueryMatched(searchStr, [
        searchIndexItem.title,
        ...searchIndexItem.extraFields
      ])) {
        suggestions.push({
          link: searchIndexItem.path,
          title: searchIndexItem.title
        });
        continue;
      }
      for (const header of searchIndexItem.headers) {
        if (suggestions.length >= maxSuggestions2.value) {
          break;
        }
        matchPageHeader(searchIndexItem, header);
      }
    }
    return suggestions;
  });
};
const useSuggestionsFocus = (suggestions) => {
  const focusIndex = ref(0);
  const focusNext = () => {
    if (focusIndex.value < suggestions.value.length - 1) {
      focusIndex.value += 1;
    } else {
      focusIndex.value = 0;
    }
  };
  const focusPrev = () => {
    if (focusIndex.value > 0) {
      focusIndex.value -= 1;
    } else {
      focusIndex.value = suggestions.value.length - 1;
    }
  };
  return {
    focusIndex,
    focusNext,
    focusPrev
  };
};
const SearchBox = defineComponent({
  name: "SearchBox",
  props: {
    locales: {
      type: Object,
      required: false,
      default: () => ({})
    },
    hotKeys: {
      type: Array,
      required: false,
      default: () => []
    },
    maxSuggestions: {
      type: Number,
      required: false,
      default: 5
    }
  },
  setup(props) {
    const { locales: locales2, hotKeys: hotKeys2, maxSuggestions: maxSuggestions2 } = toRefs(props);
    const router = useRouter();
    const routeLocale = useRouteLocale();
    const searchIndex2 = useSearchIndex();
    const input = ref(null);
    const isActive = ref(false);
    const query = ref("");
    const locale = computed(() => locales2.value[routeLocale.value] ?? {});
    const suggestions = useSearchSuggestions({
      searchIndex: searchIndex2,
      routeLocale,
      query,
      maxSuggestions: maxSuggestions2
    });
    const { focusIndex, focusNext, focusPrev } = useSuggestionsFocus(suggestions);
    useHotKeys({ input, hotKeys: hotKeys2 });
    const showSuggestions = computed(() => isActive.value && !!suggestions.value.length);
    const onArrowUp = () => {
      if (!showSuggestions.value) {
        return;
      }
      focusPrev();
    };
    const onArrowDown = () => {
      if (!showSuggestions.value) {
        return;
      }
      focusNext();
    };
    const goTo = (index2) => {
      if (!showSuggestions.value) {
        return;
      }
      const suggestion = suggestions.value[index2];
      if (!suggestion) {
        return;
      }
      router.push(suggestion.link).then(() => {
        query.value = "";
        focusIndex.value = 0;
      });
    };
    return () => h$4("form", {
      class: "search-box",
      role: "search"
    }, [
      h$4("input", {
        ref: input,
        type: "search",
        placeholder: locale.value.placeholder,
        autocomplete: "off",
        spellcheck: false,
        value: query.value,
        onFocus: () => isActive.value = true,
        onBlur: () => isActive.value = false,
        onInput: (event) => query.value = event.target.value,
        onKeydown: (event) => {
          switch (event.key) {
            case "ArrowUp": {
              onArrowUp();
              break;
            }
            case "ArrowDown": {
              onArrowDown();
              break;
            }
            case "Enter": {
              event.preventDefault();
              goTo(focusIndex.value);
              break;
            }
          }
        }
      }),
      showSuggestions.value && h$4("ul", {
        class: "suggestions",
        onMouseleave: () => focusIndex.value = -1
      }, suggestions.value.map(({ link, title, header }, index2) => h$4("li", {
        class: [
          "suggestion",
          {
            focus: focusIndex.value === index2
          }
        ],
        onMouseenter: () => focusIndex.value = index2,
        onMousedown: () => goTo(index2)
      }, h$4("a", {
        href: link,
        onClick: (event) => event.preventDefault()
      }, [
        h$4("span", {
          class: "page-title"
        }, title),
        header && h$4("span", { class: "page-header" }, `> ${header}`)
      ]))))
    ]);
  }
});
const vars = "";
const search = "";
const locales = { "/": { "placeholder": "搜索本站" } };
const hotKeys = ["command", "k"];
const maxSuggestions = 7;
const clientConfig12 = defineClientConfig({
  enhance({ app }) {
    app.component("SearchBox", (props) => h$4(SearchBox, {
      locales,
      hotKeys,
      maxSuggestions,
      ...props
    }));
  }
});
const index = "";
const clientConfig13 = defineClientConfig({
  enhance: ({ app, router, siteData: siteData2 }) => {
    app.use(ElementPlus);
  }
});
const clientConfigs = [
  clientConfig0,
  clientConfig1,
  clientConfig2,
  a$2,
  clientConfig4,
  clientConfig5,
  clientConfig6,
  M$2,
  clientConfig8,
  y,
  clientConfig10,
  clientConfig11,
  clientConfig12,
  clientConfig13
];
const pagesRoutes = [
  ["v-8daa1a0e", "/", { "y": "h", "title": "个人主页", "i": "home" }, ["/index.html", "/README.md"]],
  ["v-2e3eac9e", "/slides.html", { "d": "2023-01-26T06:20:30.000Z", "e": "<!-- markdownlint-disable MD024 MD033 MD051 -->\n", "r": { "minutes": 4.51, "words": 1352 }, "y": "s", "title": "幻灯片页", "i": "slides" }, ["/slides", "/slides.md"]],
  ["v-145ac574", "/blog/", { "y": "h", "title": "" }, ["/blog/index.html", "/blog/README.md"]],
  ["v-7208bd18", "/codenotes/", { "y": "p", "title": "笔记目录页", "i": "code" }, ["/codenotes/index.html", "/codenotes/README.md"]],
  ["v-1486b3d8", "/floatinglife/", { "y": "p", "title": "杂记目录页", "i": "note" }, ["/floatinglife/index.html", "/floatinglife/README.md"]],
  ["v-4c083800", "/quicknav/", { "d": "2023-01-26T06:20:30.000Z", "c": ["快速导航"], "g": ["优质博客", "搜索引擎"], "u": false, "e": "<h2> 搜索引擎</h2>\n<h2> 开源社区</h2>\n<h2> 优质博客</h2>\n<h2> 在线工具</h2>\n<h2> 在线教程</h2>\n<h2> 文档相关</h2>\n<h2> 其他导航</h2>\n", "r": { "minutes": 3.45, "words": 1034 }, "y": "a", "title": "快速导航", "i": "navigation" }, ["/quicknav/index.html", "/quicknav/README.md"]],
  ["v-6dc367c8", "/projects/", { "y": "p", "title": "项目目录页", "i": "free" }, ["/projects/index.html", "/projects/README.md"]],
  ["v-7fe15663", "/resources/", { "y": "p", "title": "资源目录页", "i": "advance" }, ["/resources/index.html", "/resources/README.md"]],
  ["v-37b21b1d", "/codenotes/algdata/", { "y": "p", "title": "算法和数据结构", "i": "ability" }, ["/codenotes/algdata/index.html", "/codenotes/algdata/README.md"]],
  ["v-5c24fdac", "/codenotes/cookbook/", { "y": "p", "title": "在线技术文档", "i": "read" }, ["/codenotes/cookbook/index.html", "/codenotes/cookbook/README.md"]],
  ["v-a16c41c0", "/codenotes/database/", { "y": "p", "title": "数据库", "i": "mysql" }, ["/codenotes/database/index.html", "/codenotes/database/README.md"]],
  ["v-6de835c6", "/codenotes/database/%E6%95%B0%E6%8D%AE%E5%BA%93%E7%AC%94%E8%AE%B0.html", { "d": "2023-01-26T06:20:30.000Z", "c": ["SQL"], "g": ["SQL"], "u": false, "e": "<h2> 数据库</h2>\n<blockquote>\n<p>by杰米Y</p>\n</blockquote>\n<h2> 一、数据库基础知识</h2>\n<h3> 1、数据库系统基本构成</h3>\n<ul>\n<li><strong>数据库</strong>：数据库(DataBase 简称 DB)就是<u>信息的集合</u>或者说<u>数据库是由数据库管理系统管理的数据的集合</u></li>\n<li><strong>数据库管理系统</strong>：数据库管理系统(Database Management System 简称 DBMS)是<u>一种操纵和管理数据库的大型软件，通常用于建立、使用和维护数据库</u></li>\n<li><strong>数据库系统</strong>：数据库系统(Data Base System，简称 DBS)通常<u>由软件、数据库和数据管理员(DBA)组成</u></li>\n<li><strong>数据库管理员</strong>：数据库管理员(Database Administrator，简称 DBA)<u>负责全面管理和控制数据库系统</u></li>\n</ul>", "r": { "minutes": 65.1, "words": 19530 }, "y": "a", "title": "数据库笔记", "i": "mysql" }, ["/codenotes/database/数据库笔记.html", "/codenotes/database/%E6%95%B0%E6%8D%AE%E5%BA%93%E7%AC%94%E8%AE%B0", "/codenotes/database/数据库笔记.md", "/codenotes/database/%E6%95%B0%E6%8D%AE%E5%BA%93%E7%AC%94%E8%AE%B0.md"]],
  ["v-178a7816", "/codenotes/devtool/", { "y": "p", "title": "开发必备", "i": "tool" }, ["/codenotes/devtool/index.html", "/codenotes/devtool/README.md"]],
  ["v-7310a336", "/codenotes/framework/", { "y": "p", "title": "企业级框架", "i": "frame" }, ["/codenotes/framework/index.html", "/codenotes/framework/README.md"]],
  ["v-5fb2d9dd", "/codenotes/gocore/go.html", { "d": "2023-01-26T06:20:30.000Z", "c": ["Go"], "g": ["Go"], "u": false, "e": '<h2> Go入门</h2>\n<blockquote>\n<p><strong>这是我参与「第五届青训营 」伴学笔记创作活动的第 N 天</strong></p>\n</blockquote>\n<h2> 博客</h2>\n<p>mock测试：<a href="https://juejin.cn/post/7169895196824436750" target="_blank" rel="noopener noreferrer">https://juejin.cn/post/7169895196824436750</a></p>\n<p>单个函数测试：<a href="https://blog.csdn.net/lanyang123456/article/details/112056027" target="_blank" rel="noopener noreferrer">https://blog.csdn.net/lanyang123456/article/details/112056027</a></p>', "r": { "minutes": 70.41, "words": 21123 }, "y": "a", "title": "go从入门到入坟", "i": "write" }, ["/codenotes/gocore/go", "/codenotes/gocore/go.md"]],
  ["v-33989c94", "/codenotes/gocore/", { "y": "p", "title": "笔记目录页", "i": "code" }, ["/codenotes/gocore/index.html", "/codenotes/gocore/README.md"]],
  ["v-2b78c687", "/codenotes/javacore/Java8%E6%96%B0%E7%89%B9%E6%80%A7.html", { "d": "2023-01-26T06:20:30.000Z", "c": ["Java"], "g": ["Java"], "u": false, "e": '<h2> Optional类</h2>\n<h3> 引入</h3>\n<p><code>NPE</code>问题就是在开发中经常碰到的<code>NullPointerException</code>，即空指针问题，<code>Optional</code>类就是用来优雅解决该问题的方案。</p>\n<p>比如大家可能都有这样的经历：调用一个方法得到了返回值却不能直接将返回值作为参数去调用别的方法。我们首先要判断这个返回值是否为<code>null</code>，只有在非空的前提下才能将其作为其他方法的参数。</p>\n<p>以用户类和地址类举例说明其用法：</p>\n<div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>\n    <span class="token keyword">private</span> <span class="token class-name">String</span> userName<span class="token punctuation">;</span>\n    <span class="token keyword">private</span> <span class="token class-name">String</span> phoneNumber<span class="token punctuation">;</span>\n    <span class="token keyword">private</span> <span class="token class-name">Address</span> address<span class="token punctuation">;</span>\n  <span class="token comment">//无参、部分参数、全参数构造器方法...</span>\n  <span class="token comment">//setter、getter方法...</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>', "r": { "minutes": 11.39, "words": 3418 }, "y": "a", "title": "Java8新特性", "i": "write" }, ["/codenotes/javacore/Java8新特性.html", "/codenotes/javacore/Java8%E6%96%B0%E7%89%B9%E6%80%A7", "/codenotes/javacore/Java8新特性.md", "/codenotes/javacore/Java8%E6%96%B0%E7%89%B9%E6%80%A7.md"]],
  ["v-8d1bb016", "/codenotes/javacore/Java%E4%B8%AD%E7%9A%84SPI%E6%9C%BA%E5%88%B6.html", { "d": "2023-01-26T06:20:30.000Z", "y": "a", "title": "" }, ["/codenotes/javacore/Java中的SPI机制.html", "/codenotes/javacore/Java%E4%B8%AD%E7%9A%84SPI%E6%9C%BA%E5%88%B6", "/codenotes/javacore/Java中的SPI机制.md", "/codenotes/javacore/Java%E4%B8%AD%E7%9A%84SPI%E6%9C%BA%E5%88%B6.md"]],
  ["v-34cb6992", "/codenotes/javacore/Java%E5%9F%BA%E7%A1%80-%E5%8F%8D%E5%B0%84%E6%9C%BA%E5%88%B6.html", { "d": "2023-01-26T06:20:30.000Z", "c": ["Java"], "g": ["Java"], "u": false, "r": { "minutes": 0.32, "words": 95 }, "y": "a", "title": "Java反射机制", "i": "write" }, ["/codenotes/javacore/Java基础-反射机制.html", "/codenotes/javacore/Java%E5%9F%BA%E7%A1%80-%E5%8F%8D%E5%B0%84%E6%9C%BA%E5%88%B6", "/codenotes/javacore/Java基础-反射机制.md", "/codenotes/javacore/Java%E5%9F%BA%E7%A1%80-%E5%8F%8D%E5%B0%84%E6%9C%BA%E5%88%B6.md"]],
  ["v-b03ae20a", "/codenotes/javacore/Java%E5%9F%BA%E7%A1%80-%E5%BC%82%E5%B8%B8%E6%9C%BA%E5%88%B6.html", { "d": "2023-01-26T06:20:30.000Z", "c": ["Java"], "g": ["Java"], "u": false, "r": { "minutes": 0.32, "words": 95 }, "y": "a", "title": "Java异常机制", "i": "write" }, ["/codenotes/javacore/Java基础-异常机制.html", "/codenotes/javacore/Java%E5%9F%BA%E7%A1%80-%E5%BC%82%E5%B8%B8%E6%9C%BA%E5%88%B6", "/codenotes/javacore/Java基础-异常机制.md", "/codenotes/javacore/Java%E5%9F%BA%E7%A1%80-%E5%BC%82%E5%B8%B8%E6%9C%BA%E5%88%B6.md"]],
  ["v-677cae9d", "/codenotes/javacore/Java%E5%9F%BA%E7%A1%80-%E6%B3%9B%E5%9E%8B%E6%9C%BA%E5%88%B6.html", { "d": "2023-01-26T06:20:30.000Z", "c": ["Java"], "g": ["Java"], "u": false, "e": "<h2> 前言</h2>\n<p>Java泛型这个特性是从JDK 1.5才开始加入的，因此为了兼容之前的版本，Java泛型的实现采取了“<strong>伪泛型</strong>”的策略，即Java在语法上支持泛型，但是在编译阶段会进行所谓的“<strong>类型擦除</strong>”（Type Erasure），将所有的泛型表示（尖括号中的内容）都替换为具体的类型（其对应的原生态类型），就像完全没有泛型一样。</p>\n<h2> 为什么会引入泛型</h2>\n<blockquote>\n<p>泛型的本质是为了参数化类型，也就是说在泛型使用过程中，操作的数据类型被指定为一个参数，这种参数类型可以用在类、接口和方法中，分别被称为泛型类、泛型接口、泛型方法。</p>\n</blockquote>", "r": { "minutes": 3.83, "words": 1149 }, "y": "a", "title": "Java泛型机制", "i": "write" }, ["/codenotes/javacore/Java基础-泛型机制.html", "/codenotes/javacore/Java%E5%9F%BA%E7%A1%80-%E6%B3%9B%E5%9E%8B%E6%9C%BA%E5%88%B6", "/codenotes/javacore/Java基础-泛型机制.md", "/codenotes/javacore/Java%E5%9F%BA%E7%A1%80-%E6%B3%9B%E5%9E%8B%E6%9C%BA%E5%88%B6.md"]],
  ["v-a46fbe6c", "/codenotes/javacore/Java%E5%9F%BA%E7%A1%80-%E6%B3%A8%E8%A7%A3%E6%9C%BA%E5%88%B6.html", { "d": "2023-01-26T06:20:30.000Z", "c": ["Java"], "g": ["Java"], "u": false, "r": { "minutes": 0.32, "words": 95 }, "y": "a", "title": "Java注解机制", "i": "write" }, ["/codenotes/javacore/Java基础-注解机制.html", "/codenotes/javacore/Java%E5%9F%BA%E7%A1%80-%E6%B3%A8%E8%A7%A3%E6%9C%BA%E5%88%B6", "/codenotes/javacore/Java基础-注解机制.md", "/codenotes/javacore/Java%E5%9F%BA%E7%A1%80-%E6%B3%A8%E8%A7%A3%E6%9C%BA%E5%88%B6.md"]],
  ["v-1ff7fd37", "/codenotes/javacore/Java%E5%9F%BA%E7%A1%80-%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1.html", { "d": "2023-01-26T06:20:30.000Z", "c": ["Java"], "g": ["Java"], "u": false, "e": "<h2> 三大特性</h2>\n", "r": { "minutes": 0.33, "words": 98 }, "y": "a", "title": "面向对象", "i": "write" }, ["/codenotes/javacore/Java基础-面向对象.html", "/codenotes/javacore/Java%E5%9F%BA%E7%A1%80-%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1", "/codenotes/javacore/Java基础-面向对象.md", "/codenotes/javacore/Java%E5%9F%BA%E7%A1%80-%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1.md"]],
  ["v-056f4c7a", "/codenotes/javacore/Java%E9%9B%86%E5%90%88-ArrayList.html", { "d": "2023-01-26T06:20:30.000Z", "c": ["Java"], "g": ["Java"], "u": false, "e": "<h2> 概述</h2>\n<p><code>ArrayList</code>实现了<code>List</code>接口，是顺序容器，即元素存放的数据与放进去的顺序相同，允许放入<code>null</code>元素，底层通过<strong>数组实现</strong>。除该类未实现同步外，其余跟<code>Vector</code>大致相同。每个<code>ArrayList</code>都有一个容量<code>(capacity)</code>，表示底层数组的实际大小，容器内存储元素的个数不能多于当前容量。当向容器中添加元素时，如果容量不足，容器会自动增大底层数组的大小。前面已经提过，<code>Java</code>泛型只是编译器提供的语法糖，所以这里的数组是一个<code>Object</code>数组，以便能够容纳任何类型的对象。</p>", "r": { "minutes": 13.87, "words": 4160 }, "y": "a", "title": "ArrayList", "i": "write" }, ["/codenotes/javacore/Java集合-ArrayList.html", "/codenotes/javacore/Java%E9%9B%86%E5%90%88-ArrayList", "/codenotes/javacore/Java集合-ArrayList.md", "/codenotes/javacore/Java%E9%9B%86%E5%90%88-ArrayList.md"]],
  ["v-5661c88e", "/codenotes/javacore/Java%E9%9B%86%E5%90%88-%E7%B1%BB%E5%85%B3%E7%B3%BB%E5%9B%BE.html", { "d": "2023-01-26T06:20:30.000Z", "c": ["Java"], "g": ["Java"], "u": false, "e": "<h2> 类关系图</h2>\n<h2> 简单介绍</h2>\n<ul>\n<li>容器就是可以容纳其他<code>Java</code>对象的对象。<code>Java Collections Framework(JCF)</code>为<code>Java</code>开发者提供了通用的容器，其始于<code>JDK 1.2</code>。</li>\n<li><code>Java</code>容器里只能放对象，对于基本类型(<code>int</code>, <code>long</code>, <code>float</code>, <code>double</code>等)，需要将其包装成对象类型后(<code>Integer</code>, <code>Long</code>, <code>Float</code>, <code>Double</code>等)才能放到容器里。很多时候拆包装和解包装能够自动完成。这虽然会导致额外的性能和空间开销，但简化了设计和编程。</li>\n<li>容器主要包括 <code>Collection</code> 和 <code>Map</code> 两种，<code>Collection</code> 存储着对象的集合，而 <code>Map</code> 存储着键值对（两个对象）的映射表。</li>\n</ul>", "r": { "minutes": 7.89, "words": 2367 }, "y": "a", "title": "集合类关系图", "i": "write" }, ["/codenotes/javacore/Java集合-类关系图.html", "/codenotes/javacore/Java%E9%9B%86%E5%90%88-%E7%B1%BB%E5%85%B3%E7%B3%BB%E5%9B%BE", "/codenotes/javacore/Java集合-类关系图.md", "/codenotes/javacore/Java%E9%9B%86%E5%90%88-%E7%B1%BB%E5%85%B3%E7%B3%BB%E5%9B%BE.md"]],
  ["v-da753ecc", "/codenotes/javacore/", { "y": "p", "title": "Java核心", "i": "java" }, ["/codenotes/javacore/index.html", "/codenotes/javacore/README.md"]],
  ["v-965081bc", "/codenotes/jvm/", { "y": "p", "title": "Java虚拟机", "i": "engine" }, ["/codenotes/jvm/index.html", "/codenotes/jvm/README.md"]],
  ["v-8f955f74", "/floatinglife/cooker/", { "y": "p", "title": "小镇美食家的日常", "i": "linter" }, ["/floatinglife/cooker/index.html", "/floatinglife/cooker/README.md"]],
  ["v-a74c22fa", "/floatinglife/iter/", { "y": "p", "title": "小镇技术宅的日常", "i": "computer" }, ["/floatinglife/iter/index.html", "/floatinglife/iter/README.md"]],
  ["v-4185ad80", "/floatinglife/iter/%E5%BC%95%E5%85%A5%E7%94%B5%E5%AD%90%E4%B9%A6.html", { "d": "2023-01-26T06:20:30.000Z", "c": ["电子书"], "g": ["电子书"], "u": false, "e": "<h2> 引入电子书</h2>\n", "r": { "minutes": 0.37, "words": 112 }, "y": "a", "title": "引入电子书", "i": "write" }, ["/floatinglife/iter/引入电子书.html", "/floatinglife/iter/%E5%BC%95%E5%85%A5%E7%94%B5%E5%AD%90%E4%B9%A6", "/floatinglife/iter/引入电子书.md", "/floatinglife/iter/%E5%BC%95%E5%85%A5%E7%94%B5%E5%AD%90%E4%B9%A6.md"]],
  ["v-01d70f42", "/floatinglife/sporter/", { "y": "p", "title": "小镇运动狂的日常", "i": "strong" }, ["/floatinglife/sporter/index.html", "/floatinglife/sporter/README.md"]],
  ["v-8fe64df8", "/floatinglife/thinker/", { "y": "p", "title": "小镇思考者的日常", "i": "style" }, ["/floatinglife/thinker/index.html", "/floatinglife/thinker/README.md"]],
  ["v-77e62f35", "/projects/pracprojects/", { "d": "2023-01-26T06:20:30.000Z", "c": ["实战项目"], "g": ["实战项目"], "u": false, "r": { "minutes": 0.35, "words": 104 }, "y": "a", "title": "实战项目【开源项目】", "i": "workingDirectory" }, ["/projects/pracprojects/index.html", "/projects/pracprojects/README.md"]],
  ["v-76444286", "/projects/systemdesign/", { "d": "2023-01-26T06:20:30.000Z", "c": ["系统设计"], "g": ["系统设计"], "u": false, "e": '<h2> 专业软件</h2>\n<ul>\n<li><a href="https://ruancang.net/" target="_blank" rel="noopener noreferrer">RuanCang</a>：<strong>专业软件</strong>免费下载。</li>\n</ul>\n<blockquote>\n<p>官网：<a href="https://ruancang.net/" target="_blank" rel="noopener noreferrer">https://ruancang.net/</a></p>\n</blockquote>\n', "r": { "minutes": 0.41, "words": 123 }, "y": "a", "title": "系统设计【开源项目】", "i": "shell" }, ["/projects/systemdesign/index.html", "/projects/systemdesign/README.md"]],
  ["v-39fb77e5", "/projects/techguide/", { "d": "2023-01-26T06:20:30.000Z", "c": ["技术教程"], "g": ["技术教程"], "u": false, "e": '<h2> CS</h2>\n<ul>\n<li><a href="https://github.com/CyC2018/CS-Notes" target="_blank" rel="noopener noreferrer">CS-Notes</a>：技术面试<strong>必备基础知识</strong>、<code>Leetcode</code>、计算机操作系统、计算机网络、系统设计。</li>\n</ul>\n<blockquote>\n<p><code>Github</code>地址：<a href="https://github.com/CyC2018/CS-Notes" target="_blank" rel="noopener noreferrer">https://github.com/CyC2018/CS-Notes</a></p>\n<p>官网：<a href="http://www.cyc2018.xyz/" target="_blank" rel="noopener noreferrer">http://www.cyc2018.xyz/</a></p>\n</blockquote>', "r": { "minutes": 1.34, "words": 403 }, "y": "a", "title": "技术教程【开源项目】", "i": "guide" }, ["/projects/techguide/index.html", "/projects/techguide/README.md"]],
  ["v-804672f0", "/projects/toollibrary/", { "d": "2023-01-26T06:20:30.000Z", "c": ["工具类库"], "g": ["工具类库"], "u": false, "e": '<h2> 组件库</h2>\n<ul>\n<li><a href="https://github.com/bestvist/vue-clock2/" target="_blank" rel="noopener noreferrer">vue-clock2</a>：一款简单的<strong>图形时钟组件</strong>，可以自定义时间、颜色、边框、背景、大小。</li>\n</ul>\n<blockquote>\n<p>官网：<a href="https://github.com/bestvist/vue-clock2/" target="_blank" rel="noopener noreferrer">GitHub - bestvist/vue-clock2: vue clock component</a></p>\n<p>演示：<a href="https://bestvist.github.io/vue-clock2/docs/" target="_blank" rel="noopener noreferrer">vue-clock2 | vue clock component (bestvist.github.io)</a></p>\n</blockquote>', "r": { "minutes": 5.03, "words": 1508 }, "y": "a", "title": "工具类库【开源项目】", "i": "module" }, ["/projects/toollibrary/index.html", "/projects/toollibrary/README.md"]],
  ["v-64c61a30", "/resources/books/", { "d": "2023-01-26T06:20:30.000Z", "c": ["书籍"], "g": ["书籍"], "u": false, "e": '<table>\n<thead>\n<tr>\n<th>资源名称</th>\n<th>分享链接</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><code>《Labuladong的算法小抄》</code></td>\n<td><a href="https://www.aliyundrive.com/s/8ouAjxFVgUX" target="_blank" rel="noopener noreferrer">https://www.aliyundrive.com/s/8ouAjxFVgUX</a></td>\n</tr>\n<tr>\n<td><code>《小傅哥的IDEA插件开发手册》</code></td>\n<td><a href="https://www.aliyundrive.com/s/Pq7xVp9bXdR" target="_blank" rel="noopener noreferrer">https://www.aliyundrive.com/s/Pq7xVp9bXdR</a></td>\n</tr>\n<tr>\n<td><code>《疯狂Java讲义第四版》</code></td>\n<td><a href="https://www.aliyundrive.com/s/Yd2L8XtGWUa" target="_blank" rel="noopener noreferrer">https://www.aliyundrive.com/s/Yd2L8XtGWUa</a></td>\n</tr>\n<tr>\n<td><code>《Java核心技术-卷1-基础知识》</code></td>\n<td><a href="https://www.aliyundrive.com/s/EvpXjq55LXn" target="_blank" rel="noopener noreferrer">https://www.aliyundrive.com/s/EvpXjq55LXn</a></td>\n</tr>\n<tr>\n<td><code>《Java核心技术-卷2-高级特性》</code></td>\n<td><a href="https://www.aliyundrive.com/s/hT5RQDe6q1k" target="_blank" rel="noopener noreferrer">https://www.aliyundrive.com/s/hT5RQDe6q1k</a></td>\n</tr>\n<tr>\n<td><code>《Linux命令速查手册》</code></td>\n<td><a href="https://www.aliyundrive.com/s/ophXiMFVPrB" target="_blank" rel="noopener noreferrer">https://www.aliyundrive.com/s/ophXiMFVPrB</a></td>\n</tr>\n<tr>\n<td><code>《鸟哥的Linux私房菜-高清》</code></td>\n<td><a href="https://www.aliyundrive.com/s/bd9PeqCf82N" target="_blank" rel="noopener noreferrer">https://www.aliyundrive.com/s/bd9PeqCf82N</a></td>\n</tr>\n<tr>\n<td><code>《鸟哥的Linux私房菜-非高清》</code></td>\n<td><a href="https://www.aliyundrive.com/s/e9ag9zBwTCS" target="_blank" rel="noopener noreferrer">https://www.aliyundrive.com/s/e9ag9zBwTCS</a></td>\n</tr>\n<tr>\n<td><code>《数学建模算法与应用-第二版-司守奎》</code></td>\n<td><a href="https://www.aliyundrive.com/s/uDtSpLzFqz2" target="_blank" rel="noopener noreferrer">https://www.aliyundrive.com/s/uDtSpLzFqz2</a></td>\n</tr>\n<tr>\n<td><code>《统计学习方法-李航》</code></td>\n<td><a href="https://www.aliyundrive.com/s/Gae5A3tJaZn" target="_blank" rel="noopener noreferrer">https://www.aliyundrive.com/s/Gae5A3tJaZn</a></td>\n</tr>\n<tr>\n<td><code>《Matlab神经网络30个案例分析》</code></td>\n<td><a href="https://www.aliyundrive.com/s/EVibkTrcFex" target="_blank" rel="noopener noreferrer">https://www.aliyundrive.com/s/EVibkTrcFex</a></td>\n</tr>\n<tr>\n<td><code>《具有AI功能加持的终端工具warp使用总结》</code></td>\n<td><a href="https://www.aliyundrive.com/s/kXKqP4RqyUD" target="_blank" rel="noopener noreferrer">https://www.aliyundrive.com/s/kXKqP4RqyUD</a></td>\n</tr>\n</tbody>\n</table>', "r": { "minutes": 0.92, "words": 276 }, "y": "a", "title": "书籍资源", "i": "animation" }, ["/resources/books/index.html", "/resources/books/README.md"]],
  ["v-05b997d8", "/resources/videos/", { "d": "2023-01-26T06:20:30.000Z", "c": ["影视", "音乐"], "g": ["影视", "音乐"], "u": false, "r": { "minutes": 0.33, "words": 100 }, "y": "a", "title": "影音资源", "i": "play" }, ["/resources/videos/index.html", "/resources/videos/README.md"]],
  ["v-12036784", "/codenotes/algdata/lbld/", { "y": "p", "title": "算法小抄", "i": "like" }, ["/codenotes/algdata/lbld/index.html", "/codenotes/algdata/lbld/README.md"]],
  ["v-1665eced", "/codenotes/algdata/lbld/%E7%AE%97%E6%B3%95%E5%B0%8F%E6%8A%84%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92.html", { "d": "2023-01-26T06:20:30.000Z", "c": ["算法", "数据结构"], "g": ["算法", "数据结构"], "u": false, "r": { "minutes": 0.35, "words": 104 }, "y": "a", "title": "动态规划", "i": "write" }, ["/codenotes/algdata/lbld/算法小抄动态规划.html", "/codenotes/algdata/lbld/%E7%AE%97%E6%B3%95%E5%B0%8F%E6%8A%84%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92", "/codenotes/algdata/lbld/算法小抄动态规划.md", "/codenotes/algdata/lbld/%E7%AE%97%E6%B3%95%E5%B0%8F%E6%8A%84%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92.md"]],
  ["v-538b55ec", "/codenotes/algdata/lbld/%E7%AE%97%E6%B3%95%E5%B0%8F%E6%8A%84%E6%95%B0%E5%AD%A6%E8%BF%90%E7%AE%97.html", { "d": "2023-01-26T06:20:30.000Z", "c": ["算法", "数据结构"], "g": ["算法", "数据结构"], "u": false, "e": '<h2> 常用的位操作</h2>\n<h3> Java中的位操作符</h3>\n<div class="hint-container warning">\n<p class="hint-container-title">注意</p>\n<ul>\n<li><code>Java</code>中位操作符的操作数只能是<strong>整型<code>（byte、short、int、long）</code>和字符型数据<code>（char）</code>。</strong></li>\n<li><code>Java</code>中位操作符<strong>一共有7个，其中4个是位逻辑运算符，3个是移位运算符。</strong></li>\n<li>使用按位操作符时要注意：相等<code>（==）</code>与不相等<code>（!=）</code>的优先级在按位操作符之上！这意味着，位运算符的<strong>优先级极小，所以使用位运算符时，最好加上括号。</strong></li>\n</ul>\n</div>', "r": { "minutes": 26.61, "words": 7984 }, "y": "a", "title": "数学运算", "i": "write" }, ["/codenotes/algdata/lbld/算法小抄数学运算.html", "/codenotes/algdata/lbld/%E7%AE%97%E6%B3%95%E5%B0%8F%E6%8A%84%E6%95%B0%E5%AD%A6%E8%BF%90%E7%AE%97", "/codenotes/algdata/lbld/算法小抄数学运算.md", "/codenotes/algdata/lbld/%E7%AE%97%E6%B3%95%E5%B0%8F%E6%8A%84%E6%95%B0%E5%AD%A6%E8%BF%90%E7%AE%97.md"]],
  ["v-a8b428d4", "/codenotes/algdata/lbld/%E7%AE%97%E6%B3%95%E5%B0%8F%E6%8A%84%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84.html", { "d": "2023-01-26T06:20:30.000Z", "c": ["算法", "数据结构"], "g": ["算法", "数据结构"], "u": false, "e": "<h2> 手写LRU缓存淘汰算法</h2>\n<h3> LRU算法描述</h3>\n<h3> LRU算法设计</h3>\n<h3> 代码实现</h3>\n<h2> 手写LFU算法</h2>\n<h3> 算法描述</h3>\n<h3> 思路分析</h3>\n<h3> 代码框架</h3>\n<h3> LFU核心逻辑</h3>\n<h2> 二叉树搜索树操作集锦</h2>\n<h3> 判断BST的合法性</h3>\n<h3> 在BST中查找一个数是否存在</h3>\n<h3> 在BST中插入一个数</h3>\n<h3> 在BST中删除一个数</h3>\n<h2> 完全二叉树的节点数为什么难算</h2>\n<h3> 思路分析</h3>", "r": { "minutes": 1.46, "words": 439 }, "y": "a", "title": "数据结构", "i": "write" }, ["/codenotes/algdata/lbld/算法小抄数据结构.html", "/codenotes/algdata/lbld/%E7%AE%97%E6%B3%95%E5%B0%8F%E6%8A%84%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84", "/codenotes/algdata/lbld/算法小抄数据结构.md", "/codenotes/algdata/lbld/%E7%AE%97%E6%B3%95%E5%B0%8F%E6%8A%84%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84.md"]],
  ["v-78e9b099", "/codenotes/algdata/lbld/%E7%AE%97%E6%B3%95%E5%B0%8F%E6%8A%84%E6%A0%B8%E5%BF%83%E5%A5%97%E8%B7%AF.html", { "d": "2023-01-26T06:20:30.000Z", "c": ["算法", "数据结构"], "g": ["算法", "数据结构"], "u": false, "e": '<h2> 学习算法和刷题的框架思维</h2>\n<p>学习解决问题的<strong>思路、套路、框架</strong>，养成“框架思维”，<strong>不应该纠结于问题的细节</strong>，把握问题的共性和本质，做到举一反三。</p>\n<h3> 数据结构的存储方式</h3>\n<p>数据结构的底层存储方式只有两种：<code>数组（顺序存储）和链表（链式存储）</code>。</p>\n<p>其他的数据结构，比如哈希表、栈、队列、堆、树、图等都是属于具体的上层建筑，都是在数组或者链表上的特殊操作，只是<code>API</code>特性不同而已。</p>\n<div class="hint-container tip">\n<p class="hint-container-title">数组</p>\n<p>数组由于是紧凑连续存储，因此可以随机访问，通过索引快速找到对应的元素，而且相对节约存储空间。但正因为连续存储，内存空间必须一次性分配足，所以数组如果要扩容，需要先重新分配一块更大的空间，再把数据全部复制进去，时间复杂度为<code>O(N)</code>；而且如果想在数组中间和开始位置进行插入和删除操作，每次必须移动后面的所有数据以保持连续，时间复杂度为<code>O(N)</code>。</p>\n<p><strong>数组在开始、中间、最后位置的增删改查分析如下：</strong></p>\n<ul>\n<li>开始位置：增加和删除都需要挪动元素，所以效率不高，但是查询和修改就比较高效。</li>\n<li>中间位置：增加和删除都需要挪动元素，所以效率不高，但是查询和修改就比较高效。</li>\n<li>最后位置：增加和删除位置不需要挪动元素，效率比较高，同时查询和修改效率也比较高。</li>\n</ul>\n</div>', "r": { "minutes": 24.8, "words": 7441 }, "y": "a", "title": "核心套路", "i": "write" }, ["/codenotes/algdata/lbld/算法小抄核心套路.html", "/codenotes/algdata/lbld/%E7%AE%97%E6%B3%95%E5%B0%8F%E6%8A%84%E6%A0%B8%E5%BF%83%E5%A5%97%E8%B7%AF", "/codenotes/algdata/lbld/算法小抄核心套路.md", "/codenotes/algdata/lbld/%E7%AE%97%E6%B3%95%E5%B0%8F%E6%8A%84%E6%A0%B8%E5%BF%83%E5%A5%97%E8%B7%AF.md"]],
  ["v-5b551ec1", "/codenotes/algdata/lbld/%E7%AE%97%E6%B3%95%E5%B0%8F%E6%8A%84%E7%AE%97%E6%B3%95%E6%80%9D%E7%BB%B4.html", { "d": "2023-01-26T06:20:30.000Z", "c": ["算法", "数据结构"], "g": ["算法", "数据结构"], "u": false, "r": { "minutes": 0.35, "words": 104 }, "y": "a", "title": "算法思维", "i": "write" }, ["/codenotes/algdata/lbld/算法小抄算法思维.html", "/codenotes/algdata/lbld/%E7%AE%97%E6%B3%95%E5%B0%8F%E6%8A%84%E7%AE%97%E6%B3%95%E6%80%9D%E7%BB%B4", "/codenotes/algdata/lbld/算法小抄算法思维.md", "/codenotes/algdata/lbld/%E7%AE%97%E6%B3%95%E5%B0%8F%E6%8A%84%E7%AE%97%E6%B3%95%E6%80%9D%E7%BB%B4.md"]],
  ["v-eb3c33d0", "/codenotes/algdata/lbld/%E7%AE%97%E6%B3%95%E5%B0%8F%E6%8A%84%E9%AB%98%E9%A2%91%E9%9D%A2%E8%AF%95.html", { "d": "2023-01-26T06:20:30.000Z", "c": ["算法", "数据结构"], "g": ["算法", "数据结构"], "u": false, "e": '<h2> 如何高效寻找素数</h2>\n<div class="hint-container tip">\n<p class="hint-container-title">素数</p>\n<p>如果一个数只能被1和它本身整除，那么这个数就是素数。</p>\n</div>\n<p>实现一个函数，输入一个正整数<code>n</code>，函数返回区间<code>[2,n)</code>中素数的个数。</p>\n<p>函数签名如下：<code>int countPrimes(int n)</code></p>\n<h3> 一般实现</h3>\n<div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/***\n * @Description: [2, n)素数的个数\n * @Author: Mr.Tong\n */</span>\n<span class="token keyword">int</span> <span class="token function">countPrimes</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">int</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\n    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isPrime</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            count<span class="token operator">++</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">return</span> count<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token doc-comment comment">/***\n * @Description: 判断一个数是不是素数\n * @Author: Mr.Tong\n */</span>\n<span class="token keyword">boolean</span> <span class="token function">isPrime</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">%</span> i <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>', "r": { "minutes": 3.59, "words": 1078 }, "y": "a", "title": "高频面试", "i": "write" }, ["/codenotes/algdata/lbld/算法小抄高频面试.html", "/codenotes/algdata/lbld/%E7%AE%97%E6%B3%95%E5%B0%8F%E6%8A%84%E9%AB%98%E9%A2%91%E9%9D%A2%E8%AF%95", "/codenotes/algdata/lbld/算法小抄高频面试.md", "/codenotes/algdata/lbld/%E7%AE%97%E6%B3%95%E5%B0%8F%E6%8A%84%E9%AB%98%E9%A2%91%E9%9D%A2%E8%AF%95.md"]],
  ["v-75632350", "/codenotes/algdata/LeetCode/HOT100.html", { "d": "2023-01-26T06:20:30.000Z", "c": ["算法"], "g": ["算法"], "u": false, "e": '<h2> HOT100</h2>\n<blockquote>\n<p>刷题时的一点总结，有的题可能还有更多的解法，这里面是个人觉得好的或者目前会的🤣</p>\n</blockquote>\n<h2> EASY</h2>\n<h3> <a href="https://leetcode.cn/problems/two-sum/?favorite=2cktkvj" target="_blank" rel="noopener noreferrer">1、两数之和</a></h3>\n<h4> 1、暴力</h4>\n<blockquote>\n<p><code>O(N^2)/O(1)</code></p>\n<p>直接<code>双重for循环</code>遍历数组寻找两个数和是否为<code>target</code>即可</p>\n</blockquote>', "r": { "minutes": 15.06, "words": 4518 }, "y": "a", "title": "HOT100", "i": "write" }, ["/codenotes/algdata/LeetCode/HOT100", "/codenotes/algdata/LeetCode/HOT100.md"]],
  ["v-64a1663d", "/codenotes/algdata/LeetCode/", { "y": "p", "title": "LeetCode", "i": "like" }, ["/codenotes/algdata/LeetCode/index.html", "/codenotes/algdata/LeetCode/README.md"]],
  ["v-ba95c21c", "/codenotes/framework/MicroServices/", { "y": "p", "title": "微服务", "i": "network" }, ["/codenotes/framework/MicroServices/index.html", "/codenotes/framework/MicroServices/README.md"]],
  ["v-521eece2", "/codenotes/framework/MicroServices/SpringCloud01.html", { "d": "2023-01-26T06:20:30.000Z", "c": ["SpringCloud", "微服务"], "g": ["序列化", "参数调优", "RPC框架"], "u": false, "e": '<h1> SpringCloud1</h1>\n<blockquote>\n<p>by九牧</p>\n</blockquote>\n<h1> 1. 认识微服务</h1>\n<p>随着互联网行业的发展，对服务的要求也越来越高，服务架构也从单体架构逐渐演变为现在流行的微服务架构。这些架构之间有怎样的差别呢？</p>\n<h2> 1.0 学习目标</h2>\n<p>了解微服务架构的优缺点</p>\n<h2> 1.1 服务架构演变</h2>\n<h3> 1.1.1 单体架构</h3>\n<p><strong>单体架构</strong>：将业务的所有功能集中在一个项目中开发，打成一个包部署。</p>\n<p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1273/image-20210713202807818.png" alt="image-20210713202807818"></p>', "r": { "minutes": 23.15, "words": 6946 }, "y": "a", "title": "微服务1", "i": "write" }, ["/codenotes/framework/MicroServices/SpringCloud01", "/codenotes/framework/MicroServices/SpringCloud01.md"]],
  ["v-53d3c581", "/codenotes/framework/MicroServices/SpringCloud02.html", { "d": "2023-01-26T06:20:30.000Z", "c": ["SpringCloud", "微服务"], "g": ["序列化", "参数调优", "RPC框架"], "u": false, "e": "<h1> SpringCloud02</h1>\n<blockquote>\n<p>by九牧</p>\n</blockquote>\n<h1> 0. 学习目标</h1>\n<h1> 1. Nacos配置管理</h1>\n<blockquote>\n<p><code>Nacos</code> 除了可以做注册中心，同样可以做配置管理来使用</p>\n</blockquote>\n<h2> 1.1 统一配置管理</h2>\n<blockquote>\n<p>当微服务部署的实例越来越多，达到数十、数百时，逐个修改微服务配置就会让人抓狂，而且很容易出错，所以我们需要一种统一配置管理方案，可以集中管理所有实例的配置</p>\n</blockquote>", "r": { "minutes": 19.93, "words": 5978 }, "y": "a", "title": "微服务2", "i": "write" }, ["/codenotes/framework/MicroServices/SpringCloud02", "/codenotes/framework/MicroServices/SpringCloud02.md"]],
  ["v-b2a73dca", "/codenotes/framework/MicroServices/%E8%AE%A4%E8%AF%86%E5%BE%AE%E6%9C%8D%E5%8A%A1.html", { "d": "2023-01-26T06:20:30.000Z", "c": ["SpringCloud", "微服务"], "g": ["序列化", "参数调优", "RPC框架"], "u": false, "r": { "minutes": 0.33, "words": 98 }, "y": "a", "title": "微服务0", "i": "write" }, ["/codenotes/framework/MicroServices/认识微服务.html", "/codenotes/framework/MicroServices/%E8%AE%A4%E8%AF%86%E5%BE%AE%E6%9C%8D%E5%8A%A1", "/codenotes/framework/MicroServices/认识微服务.md", "/codenotes/framework/MicroServices/%E8%AE%A4%E8%AF%86%E5%BE%AE%E6%9C%8D%E5%8A%A1.md"]],
  ["v-4edd469a", "/codenotes/framework/netty/Netty%E6%A0%B8%E5%BF%83.html", { "d": "2023-01-26T06:20:30.000Z", "c": ["Netty", "网络编程"], "g": ["服务器", "客户端", "组件", "协议设计", "粘包半包"], "u": false, "e": '<h2> 一、概述</h2>\n<h3> 1、什么是Netty</h3>\n<div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">Netty</span> is an asynchronous event<span class="token operator">-</span>driven network application framework <span class="token keyword">for</span> rapid development of maintainable high performance protocol servers <span class="token operator">&amp;</span> clients<span class="token punctuation">.</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>', "r": { "minutes": 76.61, "words": 22984 }, "y": "a", "title": "Netty核心", "i": "write" }, ["/codenotes/framework/netty/Netty核心.html", "/codenotes/framework/netty/Netty%E6%A0%B8%E5%BF%83", "/codenotes/framework/netty/Netty核心.md", "/codenotes/framework/netty/Netty%E6%A0%B8%E5%BF%83.md"]],
  ["v-65c1d7f2", "/codenotes/framework/netty/Netty%E9%AB%98%E7%BA%A7.html", { "d": "2023-01-26T06:20:30.000Z", "c": ["Netty", "网络编程"], "g": ["序列化", "参数调优", "RPC框架"], "u": false, "e": '<h2> 一、优化</h2>\n<h3> 1、扩展序列化算法</h3>\n<h4> 1、序列化接口</h4>\n<div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">Serializer</span> <span class="token punctuation">{</span>\n    <span class="token doc-comment comment">/**\n     * 序列化\n     *\n     * <span class="token keyword">@param</span> <span class="token parameter">object</span> 被序列化的对象\n     * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">&lt;</span>T<span class="token punctuation">&gt;</span></span>    被序列化对象类型\n     * <span class="token keyword">@return</span> 序列化后的字节数组\n     */</span>\n    <span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">serialize</span><span class="token punctuation">(</span><span class="token class-name">T</span> object<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token doc-comment comment">/**\n     * 反序列化\n     *\n     * <span class="token keyword">@param</span> <span class="token parameter">clazz</span> 反序列化的目标类的Class对象\n     * <span class="token keyword">@param</span> <span class="token parameter">bytes</span> 被反序列化的字节数组\n     * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">&lt;</span>T<span class="token punctuation">&gt;</span></span>   反序列化目标类\n     * <span class="token keyword">@return</span> 反序列化后的对象\n     */</span>\n    <span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token class-name">T</span> <span class="token function">deserialize</span><span class="token punctuation">(</span><span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> clazz<span class="token punctuation">,</span> <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> bytes<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>', "r": { "minutes": 12.62, "words": 3787 }, "y": "a", "title": "Netty高级", "i": "write" }, ["/codenotes/framework/netty/Netty高级.html", "/codenotes/framework/netty/Netty%E9%AB%98%E7%BA%A7", "/codenotes/framework/netty/Netty高级.md", "/codenotes/framework/netty/Netty%E9%AB%98%E7%BA%A7.md"]],
  ["v-2465339c", "/codenotes/framework/netty/", { "y": "p", "title": "Netty", "i": "network" }, ["/codenotes/framework/netty/index.html", "/codenotes/framework/netty/README.md"]],
  ["v-6fbc3189", "/codenotes/framework/Spring_SpringBoot/Spring.html", { "d": "2023-01-26T06:20:30.000Z", "y": "a", "title": "" }, ["/codenotes/framework/Spring_SpringBoot/Spring", "/codenotes/framework/Spring&SpringBoot/Spring.html", "/codenotes/framework/Spring&SpringBoot/Spring.md"]],
  ["v-3706649a", "/404.html", { "y": "p", "title": "" }, ["/404"]],
  ["v-12854963", "/codenotes/framework/Spring_SpringBoot/", { "y": "p", "title": "Spring Spring Boot" }, ["/codenotes/framework/Spring_SpringBoot/index.html"]],
  ["v-5bc93818", "/category/", { "y": "p", "title": "分类" }, ["/category/index.html"]],
  ["v-744d024e", "/tag/", { "y": "p", "title": "标签" }, ["/tag/index.html"]],
  ["v-e52c881c", "/article/", { "y": "p", "title": "文章" }, ["/article/index.html"]],
  ["v-154dc4c4", "/star/", { "y": "p", "title": "收藏" }, ["/star/index.html"]],
  ["v-01560935", "/timeline/", { "y": "p", "title": "时间轴" }, ["/timeline/index.html"]],
  ["v-1eaeb558", "/category/%E5%BF%AB%E9%80%9F%E5%AF%BC%E8%88%AA/", { "y": "p", "title": "快速导航 分类" }, ["/category/快速导航/", "/category/%E5%BF%AB%E9%80%9F%E5%AF%BC%E8%88%AA/index.html"]],
  ["v-48f9b645", "/tag/%E4%BC%98%E8%B4%A8%E5%8D%9A%E5%AE%A2/", { "y": "p", "title": "优质博客 标签" }, ["/tag/优质博客/", "/tag/%E4%BC%98%E8%B4%A8%E5%8D%9A%E5%AE%A2/index.html"]],
  ["v-65f56839", "/category/sql/", { "y": "p", "title": "SQL 分类" }, ["/category/sql/index.html"]],
  ["v-36f81cca", "/tag/%E6%90%9C%E7%B4%A2%E5%BC%95%E6%93%8E/", { "y": "p", "title": "搜索引擎 标签" }, ["/tag/搜索引擎/", "/tag/%E6%90%9C%E7%B4%A2%E5%BC%95%E6%93%8E/index.html"]],
  ["v-3d18412f", "/category/go/", { "y": "p", "title": "Go 分类" }, ["/category/go/index.html"]],
  ["v-b305b122", "/tag/sql/", { "y": "p", "title": "SQL 标签" }, ["/tag/sql/index.html"]],
  ["v-5831b135", "/category/java/", { "y": "p", "title": "Java 分类" }, ["/category/java/index.html"]],
  ["v-0da0c339", "/tag/go/", { "y": "p", "title": "Go 标签" }, ["/tag/go/index.html"]],
  ["v-d170eb22", "/category/%E7%94%B5%E5%AD%90%E4%B9%A6/", { "y": "p", "title": "电子书 分类" }, ["/category/电子书/", "/category/%E7%94%B5%E5%AD%90%E4%B9%A6/index.html"]],
  ["v-28a1d8bf", "/tag/java/", { "y": "p", "title": "Java 标签" }, ["/tag/java/index.html"]],
  ["v-f18cc9a6", "/category/%E5%AE%9E%E6%88%98%E9%A1%B9%E7%9B%AE/", { "y": "p", "title": "实战项目 分类" }, ["/category/实战项目/", "/category/%E5%AE%9E%E6%88%98%E9%A1%B9%E7%9B%AE/index.html"]],
  ["v-5e7287a5", "/tag/%E7%94%B5%E5%AD%90%E4%B9%A6/", { "y": "p", "title": "电子书 标签" }, ["/tag/电子书/", "/tag/%E7%94%B5%E5%AD%90%E4%B9%A6/index.html"]],
  ["v-0d7069e8", "/category/%E7%B3%BB%E7%BB%9F%E8%AE%BE%E8%AE%A1/", { "y": "p", "title": "系统设计 分类" }, ["/category/系统设计/", "/category/%E7%B3%BB%E7%BB%9F%E8%AE%BE%E8%AE%A1/index.html"]],
  ["v-4b991ab7", "/tag/%E5%AE%9E%E6%88%98%E9%A1%B9%E7%9B%AE/", { "y": "p", "title": "实战项目 标签" }, ["/tag/实战项目/", "/tag/%E5%AE%9E%E6%88%98%E9%A1%B9%E7%9B%AE/index.html"]],
  ["v-7281fe0a", "/category/%E6%8A%80%E6%9C%AF%E6%95%99%E7%A8%8B/", { "y": "p", "title": "技术教程 分类" }, ["/category/技术教程/", "/category/%E6%8A%80%E6%9C%AF%E6%95%99%E7%A8%8B/index.html"]],
  ["v-84b16ad4", "/tag/%E7%B3%BB%E7%BB%9F%E8%AE%BE%E8%AE%A1/", { "y": "p", "title": "系统设计 标签" }, ["/tag/系统设计/", "/tag/%E7%B3%BB%E7%BB%9F%E8%AE%BE%E8%AE%A1/index.html"]],
  ["v-3f7ac554", "/category/%E5%B7%A5%E5%85%B7%E7%B1%BB%E5%BA%93/", { "y": "p", "title": "工具类库 分类" }, ["/category/工具类库/", "/category/%E5%B7%A5%E5%85%B7%E7%B1%BB%E5%BA%93/index.html"]],
  ["v-e9c2fef6", "/tag/%E6%8A%80%E6%9C%AF%E6%95%99%E7%A8%8B/", { "y": "p", "title": "技术教程 标签" }, ["/tag/技术教程/", "/tag/%E6%8A%80%E6%9C%AF%E6%95%99%E7%A8%8B/index.html"]],
  ["v-42f2f156", "/category/%E4%B9%A6%E7%B1%8D/", { "y": "p", "title": "书籍 分类" }, ["/category/书籍/", "/category/%E4%B9%A6%E7%B1%8D/index.html"]],
  ["v-b6bbc640", "/tag/%E5%B7%A5%E5%85%B7%E7%B1%BB%E5%BA%93/", { "y": "p", "title": "工具类库 标签" }, ["/tag/工具类库/", "/tag/%E5%B7%A5%E5%85%B7%E7%B1%BB%E5%BA%93/index.html"]],
  ["v-69731659", "/category/%E5%BD%B1%E8%A7%86/", { "y": "p", "title": "影视 分类" }, ["/category/影视/", "/category/%E5%BD%B1%E8%A7%86/index.html"]],
  ["v-086db55f", "/tag/%E4%B9%A6%E7%B1%8D/", { "y": "p", "title": "书籍 标签" }, ["/tag/书籍/", "/tag/%E4%B9%A6%E7%B1%8D/index.html"]],
  ["v-5995bc00", "/category/%E9%9F%B3%E4%B9%90/", { "y": "p", "title": "音乐 分类" }, ["/category/音乐/", "/category/%E9%9F%B3%E4%B9%90/index.html"]],
  ["v-d94b773a", "/tag/%E5%BD%B1%E8%A7%86/", { "y": "p", "title": "影视 标签" }, ["/tag/影视/", "/tag/%E5%BD%B1%E8%A7%86/index.html"]],
  ["v-06be9332", "/category/%E7%AE%97%E6%B3%95/", { "y": "p", "title": "算法 分类" }, ["/category/算法/", "/category/%E7%AE%97%E6%B3%95/index.html"]],
  ["v-05c75fec", "/tag/%E9%9F%B3%E4%B9%90/", { "y": "p", "title": "音乐 标签" }, ["/tag/音乐/", "/tag/%E9%9F%B3%E4%B9%90/index.html"]],
  ["v-4f178b9c", "/category/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84/", { "y": "p", "title": "数据结构 分类" }, ["/category/数据结构/", "/category/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84/index.html"]],
  ["v-2687e471", "/tag/%E7%AE%97%E6%B3%95/", { "y": "p", "title": "算法 标签" }, ["/tag/算法/", "/tag/%E7%AE%97%E6%B3%95/index.html"]],
  ["v-6fcf7e02", "/category/springcloud/", { "y": "p", "title": "SpringCloud 分类" }, ["/category/springcloud/index.html"]],
  ["v-13770b26", "/tag/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84/", { "y": "p", "title": "数据结构 标签" }, ["/tag/数据结构/", "/tag/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84/index.html"]],
  ["v-5bd10ded", "/category/%E5%BE%AE%E6%9C%8D%E5%8A%A1/", { "y": "p", "title": "微服务 分类" }, ["/category/微服务/", "/category/%E5%BE%AE%E6%9C%8D%E5%8A%A1/index.html"]],
  ["v-eccae7f6", "/tag/%E5%BA%8F%E5%88%97%E5%8C%96/", { "y": "p", "title": "序列化 标签" }, ["/tag/序列化/", "/tag/%E5%BA%8F%E5%88%97%E5%8C%96/index.html"]],
  ["v-95e0c4b6", "/category/netty/", { "y": "p", "title": "Netty 分类" }, ["/category/netty/index.html"]],
  ["v-47b60b66", "/tag/%E5%8F%82%E6%95%B0%E8%B0%83%E4%BC%98/", { "y": "p", "title": "参数调优 标签" }, ["/tag/参数调优/", "/tag/%E5%8F%82%E6%95%B0%E8%B0%83%E4%BC%98/index.html"]],
  ["v-676e81cc", "/category/%E7%BD%91%E7%BB%9C%E7%BC%96%E7%A8%8B/", { "y": "p", "title": "网络编程 分类" }, ["/category/网络编程/", "/category/%E7%BD%91%E7%BB%9C%E7%BC%96%E7%A8%8B/index.html"]],
  ["v-9e1cafc4", "/tag/rpc%E6%A1%86%E6%9E%B6/", { "y": "p", "title": "RPC框架 标签" }, ["/tag/rpc框架/", "/tag/rpc%E6%A1%86%E6%9E%B6/index.html"]],
  ["v-26aa7bf5", "/tag/%E6%9C%8D%E5%8A%A1%E5%99%A8/", { "y": "p", "title": "服务器 标签" }, ["/tag/服务器/", "/tag/%E6%9C%8D%E5%8A%A1%E5%99%A8/index.html"]],
  ["v-f7d81b2a", "/tag/%E5%AE%A2%E6%88%B7%E7%AB%AF/", { "y": "p", "title": "客户端 标签" }, ["/tag/客户端/", "/tag/%E5%AE%A2%E6%88%B7%E7%AB%AF/index.html"]],
  ["v-457b5cec", "/tag/%E7%BB%84%E4%BB%B6/", { "y": "p", "title": "组件 标签" }, ["/tag/组件/", "/tag/%E7%BB%84%E4%BB%B6/index.html"]],
  ["v-10cff453", "/tag/%E5%8D%8F%E8%AE%AE%E8%AE%BE%E8%AE%A1/", { "y": "p", "title": "协议设计 标签" }, ["/tag/协议设计/", "/tag/%E5%8D%8F%E8%AE%AE%E8%AE%BE%E8%AE%A1/index.html"]],
  ["v-a3a7272a", "/tag/%E7%B2%98%E5%8C%85%E5%8D%8A%E5%8C%85/", { "y": "p", "title": "粘包半包 标签" }, ["/tag/粘包半包/", "/tag/%E7%B2%98%E5%8C%85%E5%8D%8A%E5%8C%85/index.html"]]
];
var Vuepress = defineComponent({
  name: "Vuepress",
  setup() {
    const layout2 = usePageLayout();
    return () => h$4(layout2.value);
  }
});
var createRoutes = () => pagesRoutes.reduce(
  (result, [name, path, meta, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path
      }))
    );
    return result;
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress
    }
  ]
);
var historyCreator = createMemoryHistory;
var createVueRouter = () => {
  const router = createRouter({
    history: historyCreator(removeEndingSlash("/jmcoding/")),
    routes: createRoutes(),
    scrollBehavior: (to, from, savedPosition) => {
      if (savedPosition)
        return savedPosition;
      if (to.hash)
        return { el: to.hash };
      return { top: 0 };
    }
  });
  router.beforeResolve(async (to, from) => {
    var _a2;
    if (to.path !== from.path || from === START_LOCATION) {
      [pageData.value] = await Promise.all([
        resolvers.resolvePageData(to.name),
        (_a2 = pagesComponents[to.name]) == null ? void 0 : _a2.__asyncLoader()
      ]);
    }
  });
  return router;
};
var setupGlobalComponents = (app) => {
  app.component("ClientOnly", ClientOnly);
  app.component("Content", Content);
};
var setupGlobalComputed = (app, router, clientConfigs2) => {
  const layouts = computed(() => resolvers.resolveLayouts(clientConfigs2));
  const routeLocale = computed(
    () => resolvers.resolveRouteLocale(
      siteData.value.locales,
      router.currentRoute.value.path
    )
  );
  const siteLocaleData = computed(
    () => resolvers.resolveSiteLocaleData(siteData.value, routeLocale.value)
  );
  const pageFrontmatter = computed(
    () => resolvers.resolvePageFrontmatter(pageData.value)
  );
  const pageHeadTitle = computed(
    () => resolvers.resolvePageHeadTitle(pageData.value, siteLocaleData.value)
  );
  const pageHead = computed(
    () => resolvers.resolvePageHead(
      pageHeadTitle.value,
      pageFrontmatter.value,
      siteLocaleData.value
    )
  );
  const pageLang = computed(() => resolvers.resolvePageLang(pageData.value));
  const pageLayout = computed(
    () => resolvers.resolvePageLayout(pageData.value, layouts.value)
  );
  app.provide(layoutsSymbol, layouts);
  app.provide(pageFrontmatterSymbol, pageFrontmatter);
  app.provide(pageHeadTitleSymbol, pageHeadTitle);
  app.provide(pageHeadSymbol, pageHead);
  app.provide(pageLangSymbol, pageLang);
  app.provide(pageLayoutSymbol, pageLayout);
  app.provide(routeLocaleSymbol, routeLocale);
  app.provide(siteLocaleDataSymbol, siteLocaleData);
  Object.defineProperties(app.config.globalProperties, {
    $frontmatter: { get: () => pageFrontmatter.value },
    $head: { get: () => pageHead.value },
    $headTitle: { get: () => pageHeadTitle.value },
    $lang: { get: () => pageLang.value },
    $page: { get: () => pageData.value },
    $routeLocale: { get: () => routeLocale.value },
    $site: { get: () => siteData.value },
    $siteLocale: { get: () => siteLocaleData.value },
    $withBase: { get: () => withBase }
  });
  return {
    layouts,
    pageData,
    pageFrontmatter,
    pageHead,
    pageHeadTitle,
    pageLang,
    pageLayout,
    routeLocale,
    siteData,
    siteLocaleData
  };
};
var setupUpdateHead = () => {
  useRoute();
  const head = usePageHead();
  const lang = usePageLang();
  {
    const ssrContext = useSSRContext();
    if (ssrContext) {
      ssrContext.head = head.value;
      ssrContext.lang = lang.value;
    }
    return;
  }
};
var appCreator = createSSRApp;
var createVueApp = async () => {
  var _a2;
  const app = appCreator({
    name: "VuepressApp",
    setup() {
      var _a3;
      setupUpdateHead();
      for (const clientConfig of clientConfigs) {
        (_a3 = clientConfig.setup) == null ? void 0 : _a3.call(clientConfig);
      }
      return () => [
        h$4(RouterView),
        ...clientConfigs.flatMap(
          ({ rootComponents = [] }) => rootComponents.map((component) => h$4(component))
        )
      ];
    }
  });
  const router = createVueRouter();
  setupGlobalComponents(app);
  setupGlobalComputed(app, router, clientConfigs);
  for (const clientConfig of clientConfigs) {
    await ((_a2 = clientConfig.enhance) == null ? void 0 : _a2.call(clientConfig, { app, router, siteData }));
  }
  app.use(router);
  return {
    app,
    router
  };
};
export {
  P$2 as P,
  at as a,
  createVueApp,
  kt as k,
  useSiteData as u
};
