<template>
    <div class="carousel-wrap relative w-full max-h-[700px] h-full">
        <slot :currentSlide="currentSlide"></slot>

        <div class="pagination h-[max-content] w-full flex items-center justify-center mt-[24px] absolute top-[710px]">
          <span v-for="(slide, index) in getSlideCount" :key="index" :class="{active: index + 1 === currentSlide}" class="h-[4px] w-[40px] bg-faintGrey rounded-[12px] mr-[6px]"></span>
        </div>
    </div>
</template>

<script>
import { ref, onMounted } from 'vue'

export default {
  name: 'CarouselWrap',
  setup () {
    const currentSlide = ref(1)
    const getSlideCount = ref(null)
    const interval = 5000
    const autoPlayEnabled = ref(true)
    const changeSlide = () => {
      if (currentSlide.value === getSlideCount.value) {
        currentSlide.value = 1
        return
      }
      currentSlide.value += 1
    }
    const autoPlay = () => {
      setInterval(() => {
        changeSlide()
      }, interval)
    }
    const pauseAutoplay = () => {
      autoPlayEnabled.value = false
      clearInterval(currentSlide)
    }

    onMounted(() => {
      getSlideCount.value = document.querySelectorAll('.carousel-slide').length
      autoPlayEnabled.value ? (autoPlay()) : null
    })
    
    // watchEffect(() => {
    //     if (autoPlayEnabled.value) {
    //       console.log('Should be paused')
    //     } else {
    //       console.log('Should be played')
    //     }
    //   }
    // );

    return {
      autoPlay,
      pauseAutoplay,
      currentSlide,
      getSlideCount,
      autoPlayEnabled
    }
  }
}
</script>
<style>
.pagination span.active {
  background-color: black!important;
  transition: 3s cubic-bezier(0.23, 1, 0.320, 1);
}
</style>
