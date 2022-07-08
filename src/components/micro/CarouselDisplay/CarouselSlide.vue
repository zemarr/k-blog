<template>
    <div class="carousel-slide w-full max-h-[700px] h-full">
        <transition name="fade">
            <slot></slot>
        </transition>
    </div>
</template>

<script>
export default {
  name: 'CarouselSlide'
}
</script>
<style>
    .fade-enter-active, .fade-leave-active {
        transition: opacity 1s ease-in-out;
    }
    .fade-enter-from, .fade-leave-to {
        opacity: 0;
    }
    .fade-enter-to, .fade-leave-active {
        opacity: 1;
    }
</style>
