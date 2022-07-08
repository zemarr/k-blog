<template>
  <div class="all-news relative max-w-[1180px] mx-auto mb-[48px] px-[20px] py-16">
    <div class="head flex flex-col justify-between w-full py-3 mb-16">
      <h3 class="font-[600] text-[36px] leading-[47.99px] font-Playfair text-black mb-4">Profile</h3>
      <p class="font-Rubik text-[17px] leading-[28px] font-[300] text-[#3D3D3D]">Insights on the latest news articles on the Kinfolk blog. Don’t be a stranger, dig in!</p>
    </div>
    <div class="grid lg:grid-cols-3 sm:grid-cols-3 grid-cols-2 gap-[19px]">
      <div @click="viewProfileArticle(data.title)" v-for="(data, index) in profilesPreviewData" :key="index" class="post-thumb cursor-pointer">
        <div class="thumbImg max-h-[330px] w-full mb-3 overflow-hidden rounded-[4px]">
          <img :src="data.placeholderImg" :alt="data.title" class="w-full h-full">
        </div>
        <div class="flex items-center mb-[6px]">
          <span class="font-Rubik sm:text-[14px] text-[12px] sm:leading-[20px] leading-[16px] text-greyText ">{{data.category.toUpperCase()}}</span>
          <svg class="mx-[6px]" width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="2" cy="2" r="2" fill="#A3A3A3"/>
          </svg>
          <span class="font-Rubik sm:text-[14px] text-[10px] sm:leading-[20px] leading-[16px] text-greyText">{{data.date}}</span>
        </div>
        <h4 class="font-Rubik font-[500] sm:text-[17px] text-[16px] sm:leading-[28px] leading-[20px]">{{data.title}}</h4>
      </div>
    </div>
  </div>
</template>

<script>
// import { ref } from 'vue';
import {profilesPreviewData } from '@/utils/dum';
import { useRouter } from 'vue-router'


export default {
  name: "All Profiles",
  setup() {
    const router = useRouter()

    const viewProfileArticle = (id) => {
      router.push({ name: 'Profile Article', params: { id: id } })
    }
    return {
      profilesPreviewData,
      viewProfileArticle
    };
  },
};
</script>

<style></style>
