<template>
  <nav class="flex" aria-label="Breadcrumb">
    <ol role="list" class="flex items-center">
      <li>
        <div class="flex items-center">
          <router-link :to="`/${path}`" class="p-0 m-0 text-[13px] text-greyText leading-[15.41px] font-Rubik hover:text-gray-700">
            {{ capitalizeRoute()}}
          </router-link>
        </div>
      </li>
      <li>
        <div class="flex items-center">
          <!-- <svg class="h-5 w-5 text-greyText mx-1" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
          </svg> -->
          <svg  class="h-2 w-2 text-greyText mx-1" fill="currentColor" viewBox="0 0 5 8">
            <path fill-rule="evenodd" d="M.64645 7.35355c-.19527-.19526-.19527-.51184 0-.7071L3.29289 4 .64645 1.35355c-.19527-.19526-.19527-.51184 0-.7071.19526-.19527.51184-.19527.7071 0l3 3c.19527.19526.19527.51184 0 .7071l-3 3c-.19526.19527-.51184.19527-.7071 0Z"/>
          </svg>
          <a
            class="text-[13px] leading-[15.41px] font-Rubik text-black font-medium"
            >{{ page.breadcrumbList }}</a>
        </div>
      </li>
    </ol>
  </nav>
</template>

<script>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
export default {
  props: {
    page: Object
  },
  setup (props) {
    const route = useRoute()
    const path = route.path.split('/')[1]
    // const store = useStore()
    const breadcrumbList = ref(null)
    // const companyData = computed(() => store.state.app.company)
    // const getCompany = (id) => {
    //   return companyData.value.filter(company => company.id === id)
    // }
    const getList = (id) => {
      return 'Fintech In Lagos'
    }
    // cosnt routeTo = (pRouteTo) => {
    //   if (breadcrumbList[pRouteTo].link) this.$router.push(breadcrumbList[pRouteTo].link)
    // }
    const upDateList = () => {
      // console.log(route.params.id)
      const company = getCompany(route.params.id)
      if (company.length > 0) {
        breadcrumbList.value = company[0].name
      }
      breadcrumbList.value = getList(route.params.id)
      // breadcrumbList.value = route.params.id
    }
    // capitalize the first letter
    const capitalizeRoute = () => {
      const string = route.path.split('/')[1]
      return string.charAt(0).toUpperCase() + string.slice(1)
    }
    upDateList()
    // watch(
    //   () => route.params,
    //   () => upDateList()
    // )
    return {
      breadcrumbList,
      capitalizeRoute,
      path
    }
  }
}
</script>

<style>

</style>
