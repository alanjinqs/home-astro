<script setup lang="ts">
import MasonryWall from "@yeger/vue-masonry-wall";

const images = [
  {
    title: "Jan 2023",
    contents: [
      {
        src: "https://static.alanjin.me/photos/202301/202301_1.jpg",
      },
      {
        src: "https://static.alanjin.me/photos/202301/202301_2.jpg",
      },
      {
        src: "https://static.alanjin.me/photos/202301/202301_3.jpg",
      },
      {
        src: "https://static.alanjin.me/photos/202301/202301_4.jpg",
      },
      {
        src: "https://static.alanjin.me/photos/202301/202301_5.jpg",
      },
      {
        src: "https://static.alanjin.me/photos/202301/202301_6.jpg",
      },
      {
        src: "https://static.alanjin.me/photos/202301/202301_7.jpg",
      },
      {
        src: "https://static.alanjin.me/photos/202301/202301_8.jpg",
      },
      {
        src: "https://static.alanjin.me/photos/202301/202301_9.jpg",
      },
      {
        src: "https://static.alanjin.me/photos/202301/202301_10.jpg",
      },
      {
        src: "https://static.alanjin.me/photos/202301/202301_11.jpg",
      },
    ],
  },
  {
    title: "Christmas 2022",
    contents: [
      {
        src: "https://static.alanjin.me/photos/202212/20221225_0.jpg",
      },
      {
        src: "https://static.alanjin.me/photos/202212/20221225_1.jpg",
      },
      {
        src: "https://static.alanjin.me/photos/202212/20221225_2.jpg",
      },
      {
        src: "https://static.alanjin.me/photos/202212/20221225_3.jpg",
      },
      {
        src: "https://static.alanjin.me/photos/202212/20221225_4.jpg",
      },
      {
        src: "https://static.alanjin.me/photos/202212/20221225_5.jpg",
      },
    ],
  },
  {
    title: "Dec 2022",
    contents: [
      {
        src: "https://static.alanjin.me/photos/202212/202212_1.jpg",
      },
      {
        src: "https://static.alanjin.me/photos/202212/202212_2.jpg",
      },
      {
        src: "https://static.alanjin.me/photos/202212/202212_3.jpg",
      },
      {
        src: "https://static.alanjin.me/photos/202212/202212_4.jpg",
      },
      {
        src: "https://static.alanjin.me/photos/202212/202212_5.jpg",
      },
      {
        src: "https://static.alanjin.me/photos/202212/202212_6.jpg",
      },
      {
        src: "https://static.alanjin.me/photos/202212/202212_7.jpg",
      },
      {
        src: "https://static.alanjin.me/photos/202212/202212_8.jpg",
      },
      {
        src: "https://static.alanjin.me/photos/202212/202212_9.jpg",
      },
      {
        src: "https://static.alanjin.me/photos/202212/202212_10.jpg",
      },
      {
        src: "https://static.alanjin.me/photos/202212/202212_11.jpg",
      },
      {
        src: "https://static.alanjin.me/photos/202212/202212_12.jpg",
      },
      {
        src: "https://static.alanjin.me/photos/202212/202212_13.jpg",
      },
      {
        src: "https://static.alanjin.me/photos/202212/202212_14.jpg",
      },
      {
        src: "https://static.alanjin.me/photos/202212/202212_15.jpg",
      },
      {
        src: "https://static.alanjin.me/photos/202212/202212_16.jpg",
      },
      {
        src: "https://static.alanjin.me/photos/202212/202212_17.jpg",
      },
    ],
  },
];
</script>

<template>
  <div class="m-10">
    <h2>Photography</h2>
    <div v-for="group in images" :key="group.title">
      <h3>{{ group.title }}</h3>
      <masonry-wall
        :items="group.contents"
        :ssr-columns="2"
        :column-width="300"
        :gap="16"
      >
        <template #default="{ item, index }">
          <div>
            <img :src="item.src" />
          </div>
        </template>
      </masonry-wall>
    </div>
    <div class="flex w-full justify-center pt-8 text-center opacity-60">
      <p>
        Please <a href="mailto:q@alanjin.me"> contact me </a> if you wish to use
        any of the photos for commercial purposes.
      </p>
    </div>
  </div>
</template>
