<template>
  <main class="relative">
    <div class="mx-auto min-h-screen relative">
      <Navbar />
      <router-view></router-view>
    </div>
    <Footer />
    <div
      v-show="scrollPosition > 100"
      @click="backToTop"
      class="w-[60px] h-[60px] p-2 rounded-full border-white border-[2px] bg-black fixed bottom-[5vh] right-[5vw] flex items-center justify-center cursor-pointer"
    >
      <span class="text-white text-[11px] leading-[20px]">TOP</span>
      <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24">
        <path
          fill="#FFFFFF"
          d="M17.71,11.29l-5-5a1,1,0,0,0-.33-.21,1,1,0,0,0-.76,0,1,1,0,0,0-.33.21l-5,5a1,1,0,0,0,1.42,1.42L11,9.41V17a1,1,0,0,0,2,0V9.41l3.29,3.3a1,1,0,0,0,1.42,0A1,1,0,0,0,17.71,11.29Z"
        />
      </svg>
    </div>
  </main>
</template>

<script>
import Navbar from "./components/Navbar/Navbar.vue";
import Footer from "./components/footer/Footer.vue";
import { onMounted, onUnmounted, ref } from "vue";

export default {
  name: "App",
  components: {
    Navbar,
    Footer,
  },
  setup() {
    const scrollPosition = ref(window.scrollY)
    const backToTop = () => {
      if (scrollPosition.value > 100) {
        document.body.scrollTop = 0
        document.documentElement.scrollTop = 0
      }
    }

    onMounted(() => {
      window.addEventListener('scroll', () => {
        scrollPosition.value = window.scrollY
      })
    })
    onUnmounted(() => {
      window.removeEventListener('scroll', () => {
        scrollPosition.value = window.scrollY
      })
    })

    return {
      backToTop,
      scrollPosition
    }
  }
};
</script>

<style></style>
