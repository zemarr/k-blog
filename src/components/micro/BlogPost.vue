<template>
  <div class="blog-post">
    <div class="relative py-8 max-w-[1220px] mx-auto my-[64px] px-[20px]">
      <h1 class="text-[36px] leading-[47.99px] font-Playfair font-[600] mb-4">Funding Opportunities for NGOs - Bond</h1>
        <div class="flex items-center mb-[6px]">
          <span class="font-Rubik sm:text-[14px] text-[12px] sm:leading-[20px] leading-[16px] text-greyText ">INVESTMENT</span>
          <svg class="mx-[6px]" width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="2" cy="2" r="2" fill="#A3A3A3"/>
          </svg>
          <span class="font-Rubik sm:text-[16px] text-[12px] sm:leading-[24px] leading-[18px] text-greyText">Published April 29, 2022</span>
        </div>
    </div>
    <div class="banner max-h-[590px] w-full relative mb-[88px]">
      <img src="../../assets/main-banner.jpeg" alt="banner" class="w-full h-full">
    </div>
    <div v-if="content" v-html="content" class="max-w-[792px] mx-auto"></div>
    <div v-else class="min-h-screen flex items-center justify-center">
      <h4>Loading article...</h4>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
  import axios from 'axios'
import { ref } from '@vue/reactivity'


export default {
  name: 'BlogPost',
  setup() {
    const content = ref("")
    const fetchAllPosts = () => {
      axios.get('https://blog.quabbly.com/wp-json/wp/v2/posts').then((response) => {
        console.log(response.data[0]);
        content.value = response.data[0].content.rendered
      }).catch((err) => {
        alert(err)
      });
    }
    fetchAllPosts()

    return {
      fetchAllPosts,
      content
    }
  }
}
</script>

<style>
h1 {
  font-family: "Playfair Display", serif !important;
  font-size: 36px !important;
  font-weight: 500 !important;
  line-height: 36px !important;
  letter-spacing: -2px !important;
}

h3 {
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;

  font-family: "Rubik", sans-serif !important;
  font-size: 28px !important;
  font-weight: 500 !important;
  line-height: 36px !important;
  /* letter-spacing: -2px !important; */
  margin-bottom: 1.5rem !important;
}

.blog-post p {
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;

  font-family: "Rubik", sans-serif !important;
  font-size: 18px !important;
  font-weight: 400 !important;
  line-height: 34px !important;
  color: #666666 !important;
  /* margin-bottom: 1rem !important; */
}

/* strong {
  margin-bottom: 1.5rem !important;
} */

a {
  font-family: "Rubik", sans-serif !important;
  font-size: 18px !important;
  font-weight: 400 !important;
  line-height: 34px !important;
  text-decoration: none;
  font-style: italic;

}

ul {
    display: block;
    list-style-type: disc;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
}
li {
    display: list-item;
    text-align: -webkit-match-parent;
    font-size: 18px !important;
    font-family: 'Rubik', sans-serif;
}

</style>
