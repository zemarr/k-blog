<template>
  <div class="home">
    <section class="hero relative py-8 max-w-[1180px] mx-auto mb-[48px] px-[20px]">
      <h1 class="text-[40px] leading-[72px] text-center mb-6">Collective Wisdom</h1>
      <div class="carousel h-[270px] lg:h-[750px] md:h-[600px] sm:h-[400px] overflow-y-hidden">
        <!-- <h1>{{carouselData}}</h1> -->
        <Carousel v-slot="{ currentSlide }">
          <CarouselSlide v-for="(data, index) in carouselData" :key="index">
            <div v-show="currentSlide === index + 1" class="info absolute max-h-[700px] h-full w-full top-0 left-0 flex items-center justify-center">
              <div class="thumb relative overflow-hidden rounded-[6px] h-full w-full">
                <img :src="data.headerImg" alt="" class="absolute top-0 left-0 w-full h-full object-cover">
                <span class="label absolute md:top-[40px] md:left-[40px] top-[20px] left-[20px] min-w-[112px] bg-white rounded-[4px] font-Rubik sm:text-[13px] text-[12px] leading-[20px] text-center px-4 py-1 opacity-1">{{data.category.toUpperCase()}}</span>
                <div class="onhovered lg:translate-x-[120px] lg:translate-y-[35px] translate-x-0 translate-y-0 flex flex-col items-center justify-between w-full max-w-[910px] h-full max-h-[600px] bg-[rgba(0,0,0,0.8)] text-white lg:px-[115px] lg:py-[40px] md:py-[35px] md:px-[85px] sm:px-[36px] p-[12px] opacity-0">
                  <span class="font-Rubik md:text-[14px] text-[12px] font-light leading-[20px] text-white">{{data.category.toUpperCase()}}</span>
                  <div>
                    <h1 class="text-white lg:text-[36px] md:text-[24px] sm:text-[18px] text-[18px] lg:leading-[44px] md:leading-[32px] sm:leading-[26px] leading-[20px] font-medium text-center tracking-[-2%] max-w-full md:max-w-[80%] mx-auto mb-6">{{data.heading}}</h1>
                    <p class="font-Rubik lg:text-[18px] md:text-[16px] sm:text-[13px] text-[12px] lg:leading-[32px] md:leading-[28px] sm:leading-[22px] leading-[16px] text-center text-white">{{data.brief}}</p>
                  </div>
                  <div>
                    <span class="block w-[40px] h-[40px] mx-auto overflow-hidden rounded-full mb-[6px]">
                      <img :src="data.author.avatar" :alt="data.author.name" class="w-full h-full">
                    </span>
                    <p class="text-[12px] leading-[20px] text-center text-white font-Rubik">By {{data.author.name}}</p>
                  </div>
                </div>
              </div>
            </div>
          </CarouselSlide>
        </Carousel>
      </div>
    </section>
    <section class="news relative py-8 max-w-[1180px] mx-auto mb-[64px] px-[20px]">
      <div class="head flex items-center justify-between w-full border-b-[1px] border-faintGrey py-3 mb-6">
        <h3 class="text-[32px] leading-[42.66px] font-Playfair">News</h3>
        <router-link to="/news">
          <button class="font-Playfair text-[14px] leading-[20px] text-greyText">View all</button>
        </router-link>
      </div>
      <div class="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-2 gap-[19px]">
        <div @click="viewNewsArticle(data.title)" v-for="(data, index) in newsPreviewData.splice(0, 8)" :key="index" class="post-thumb cursor-pointer">
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
    </section>
    <section class="business relative py-8 max-w-[1180px] mx-auto mb-[64px] px-[20px]">
      <div class="head flex items-center justify-between w-full border-b-[1px] border-faintGrey py-3 mb-6">
        <h3 class="text-[32px] leading-[42.66px] font-Playfair">Business</h3>
        <router-link to="/business">
          <button class="font-Playfair text-[14px] leading-[20px] text-greyText">View all</button>
        </router-link>
      </div>
      <div class="grid grid-cols-2 gap-[19px]">
        <div @click="viewBusinessArticle(data.title)" v-for="(data, index) in businessPreviewData.splice(0, 4)" :key="index" class="post-thumb cursor-pointer">
          <div class="thumbImg max-h-[330px] w-full mb-3 overflow-hidden rounded-[4px]">
            <img :src="data.placeholderImg" :alt="data.title" class="w-full h-full">
          </div>
          <div class="flex items-center mb-[6px]">
            <span class="font-Rubik sm:text-[14px] text-[10px] sm:leading-[20px] leading-[16px] text-greyText ">{{data.category.toUpperCase()}}</span>
            <svg class="mx-[6px]" width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="2" cy="2" r="2" fill="#A3A3A3"/>
            </svg>
            <span class="font-Rubik sm:text-[14px] text-[10px] sm:leading-[20px] leading-[16px] text-greyText">{{data.date}}</span>
          </div>
          <h4 class="font-Rubik font-[500] sm:text-[17px] text-[16px] sm:leading-[28px] leading-[20px]">{{data.title}}</h4>
        </div>
      </div>
    </section>
    <section class="profiles relative py-8 max-w-[1180px] mx-auto mb-[64px] px-[20px]">
      <div class="head flex items-center justify-between w-full border-b-[1px] border-faintGrey py-3 mb-6">
        <h3 class="text-[32px] leading-[42.66px] font-Playfair">Profiles</h3>
        <router-link to="/profiles">
          <button class="font-Playfair text-[14px] leading-[20px] text-greyText">View all</button>
        </router-link>
      </div>
      <div class="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-2 gap-[19px]">
        <div @click="viewProfileArticle(data.title)" v-for="(data, index) in profilesPreviewData.splice(0, 4)" :key="index" class="post-thumb cursor-pointer">
          <div class="thumbImg max-h-[330px] w-full mb-3 overflow-hidden rounded-[4px]">
            <img :src="data.placeholderImg" :alt="data.title" class="w-full h-full">
          </div>
          <div class="flex items-center mb-[6px]">
            <span class="font-Rubik sm:text-[14px] text-[10px] sm:leading-[20px] leading-[16px] text-greyText ">{{data.category.toUpperCase()}}</span>
            <svg class="mx-[6px]" width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="2" cy="2" r="2" fill="#A3A3A3"/>
            </svg>
            <span class="font-Rubik sm:text-[14px] text-[10px] sm:leading-[20px] leading-[16px] text-greyText">{{data.date}}</span>
          </div>
          <h4 class="font-Rubik font-[500] sm:text-[17px] text-[16px] sm:leading-[28px] leading-[20px]">{{data.title}}</h4>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import CarouselSlide from '@/components/micro/CarouselDisplay/CarouselSlide'
import Carousel from '@/components/micro/CarouselDisplay/CarouselWrap'
import {carouselData, newsPreviewData, businessPreviewData, profilesPreviewData } from '@/utils/dum'
import { useRouter } from 'vue-router'

export default {
  name: 'HomeView',
  components: {
    Carousel,
    CarouselSlide
  },
  setup() {
    const router = useRouter()
    const viewNewsArticle = (id) => {
      router.push({ name: 'News Article', params: { id: id } })
    }
    const viewBusinessArticle = (id) => {
      router.push({ name: 'Business Article', params: { id: id } })
    }
    const viewProfileArticle = (id) => {
      router.push({ name: 'Profile Article', params: { id: id } })
    }

    return {
      viewNewsArticle,
      viewBusinessArticle,
      viewProfileArticle,
      carouselData,
      newsPreviewData,
      businessPreviewData,
      profilesPreviewData
    }
  }
}
</script>

<style>
  .onhovered {
    transition: 1s cubic-bezier(0.23, 1, 0.320, 1) all;
  }
  .carousel .thumb:hover > .onhovered {
    opacity: 1!important;
    transition: 2s cubic-bezier(0.23, 1, 0.320, 1) all;
  }
  .carousel .thumb:hover > .label {
    opacity: 0!important;
  }
  @media screen and (max-width: 1116px) and (min-width: 1024px) {
    .onhovered {
      transform: translateX(10%) !important;
      transform: translateY(10%) !important;
      margin: 0 auto;
    }
  }
</style>