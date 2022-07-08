<template>
    <!-- <KinfolkLogo></KinfolkLogo> -->

    <div class="max-w-[1440px] mx-auto shadow-sm">
        <div class="flex px-5 py-6 z-[500]">
            <header class="flex w-full justify-between md:max-w-[85%] max-w-[95%] mx-auto">
                <div class="flex justify-between items-center">
                <a href="/">
                    <img v-if="!isDark" src="../../assets/svg/kinfolk.svg" alt="" style="width: 40px; height: 40px;">
                    <img v-if="isDark" src="../../assets/svg/kinfolkwhite.svg" alt="" style="width: 40px; height: 40px;">
                </a>
                </div>
                <div v-if="isNavOpen" class="open-overlay flex items-center h-[40px] cursor-pointer relative z-[1000]" @click="handleNav()">
                    <div class="hamburger flex rounded-full">
                        <div class="hamburger-track closed">
                            <span style="color: white">
                            Close
                            </span>
                        </div>
                        <div class="hamburger-button closed">
                        <div class="lines closed">
                            <span class="bar"></span>
                            <span class="bar"></span>
                            <span class="bar"></span>
                        </div>
                        </div>
                    </div>
                </div>
                <div v-if="!isNavOpen" class="open-overlay closed flex items-center h-[40px] cursor-pointer relative z-[1000]" @click="handleNav()">
                <div class="hamburger flex rounded-full">
                    <div class="hamburger-track">
                    <span style="color: black; line-height: 1">
                    Open
                    </span>
                    </div>
                    <div class="hamburger-button">
                    <div class="lines">
                        <span class="bar"></span>
                        <span class="bar"></span>
                        <span class="bar"></span>
                    </div>
                    </div>
                </div>
                </div>

            </header>
        </div>
        <div class="overlay-navigation">
            <nav role="navigation">
                <ul>

                    <li>
                        <div class="navitem-container flex h-full flex-col items-center justify-center">
                            <div class="navitem-title mb-0 md:mb-[50px] w-full">
                                <a href="https://kinfolk.vc/about">
                                    <span @click="handleNav()" class="nav-text font-serif text-[32px] lg:text-[46px] text-white font-normal leading-[55px] mb-0 lg:mb-[20px]">About</span>
                                </a>
                            </div>
                            <div class="navitem-destinations overflow-hidden w-full h-0 hidden sm:block">
                                <a href="https://kinfolk.vc/about/philosophy">
                                    <span class="nav-text font-serif text-[17px] leading-[20px] font-normal" @click="handleNav()" data-content="Philosophy">Philosophy</span>
                                </a>
                                <a href="https://kinfolk.vc/about/investment-strategy">
                                    <span class="nav-text font-serif text-[17px] leading-[20px] font-normal" @click="handleNav()" data-content="Investment Strategy">Investment Strategy</span>
                                </a>
                                <a href="https://kinfolk.vc/about/impact-commitments">
                                    <span class="nav-text font-serif text-[17px] leading-[20px] font-normal" @click="handleNav()" data-content="Impact Commitments">Impact Commitments</span>
                                </a>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="navitem-container flex h-full flex-col items-center justify-center">
                            <div class="navitem-title mb-0 md:mb-[50px] w-full">
                                <a href="https://kinfolk.vc/team">
                                    <span @click="handleNav()" class="nav-text font-serif text-[32px] lg:text-[46px] text-white font-normal leading-[55px] mb-0 lg:mb-[20px]">Team</span>
                                </a>
                            </div>
                            <div class="navitem-destinations overflow-hidden w-full h-0 hidden sm:block">
                                <a href="https://kinfolk.vc/team">
                                    <span class="nav-text font-serif text-[17px] leading-[20px] font-normal" @click="handleNav()" data-content="Partners">Partners</span>
                                </a>
                                <!-- <router-link :to="{ name: 'Team', hash: '#kinfolk-collective' }">
                                <span class="nav-text font-serif text-[17px] leading-[20px] font-normal" @click="handleNav()" data-content="kinfolk-collective">Kinfolk Collective</span>
                                </router-link> -->
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="navitem-container flex h-full flex-col items-center justify-center">
                            <div class="navitem-title mb-0 md:mb-[50px] w-full">
                                <a href="https://kinfolk.vc/companies">
                                    <span @click="handleNav()" class="nav-text font-serif text-[32px] lg:text-[46px] text-white font-normal leading-[55px] mb-0 lg:mb-[20px]">Companies</span>
                                </a>
                            </div>
                            <div class="navitem-destinations overflow-hidden w-full h-0 hidden sm:block">
                                <a href="https://kinfolk.vc/companies">
                                    <span class="nav-text font-serif text-[17px] leading-[20px] font-normal" @click="handleNav()" data-content="Family By Design">Portfolio</span>
                                </a>
                            </div>
                        </div>
                    </li>
                    <!-- <li>
                        <div class="navitem-container flex h-full flex-col items-center justify-center">
                        <div class="navitem-title mb-0 md:mb-[50px] w-full">
                            <router-link to="/stories">
                            <span @click="handleNav()" class="nav-text font-serif text-[32px] md:text-[46px] text-white font-normal leading-[55px] mb-0 md:mb-[20px]">Stories</span>
                            </router-link>
                        </div>
                        <div class="navitem-destinations overflow-hidden w-full h-0 hidden sm:block">
                            <router-link to="/stories">
                            <span class="nav-text font-serif text-[17px] leading-[20px] font-normal" @click="handleNav()" data-content="Family By Design">Read more</span>
                            </router-link>
                        </div>
                        </div>
                    </li> -->
                    <li>
                        <div class="navitem-container flex h-full flex-col items-center justify-center">
                            <div class="navitem-title mb-0 md:mb-[50px] w-full">
                                <a href="https://kinfolk.vc/contact">
                                    <span @click="handleNav()" class="nav-text font-serif text-[32px] lg:text-[46px] text-white font-normal leading-[55px] mb-0 lg:mb-[20px]">Connect</span>
                                </a>
                            </div>
                            <div class="navitem-destinations overflow-hidden w-full h-0 hidden sm:block">
                                <a href="https://kinfolk.vc/pitch-us">
                                    <span class="nav-text font-serif text-[17px] leading-[20px] font-normal" @click="handleNav()" data-content="Family By Design">Pitch Us</span>
                                </a>
                                <a href="https://kinfolk.vc/contact">
                                    <span class="nav-text font-serif text-[17px] leading-[20px] font-normal" @click="handleNav()" data-content="Family By Design">Contact</span>
                                </a>
                            </div>
                        </div>
                    </li>
                </ul>
            </nav>
        </div>
    </div>

</template>

<script>
// import KinfolkLogo from '../KinfolkLogo.vue';
import { computed, ref } from 'vue';
import {useStore} from 'vuex'

export default {
    name: "NavbarView",
    components: {
        // KinfolkLogo
    },
    setup() {
        const store = useStore()
        const isNavOpen = ref(false)
        
        const handleNav = () => {
            isNavOpen.value = !isNavOpen.value
            console.log(isNavOpen.value);
            if (!isNavOpen.value) {
              store.dispatch('setDark', true)
            } else {
              store.dispatch('setDark', false)
            }
        }
        const isDark = computed(() => store.getters.getDark)
      return {
        handleNav,
        isDark,
        isNavOpen
    };
  },
};
</script>

<style scoped>

</style>
