<script>
import Lectures from "../components/LecturesComp.vue"
import SearchComp from "../components/SearchComp.vue"

export default {
  name: 'lectures',
  components: {
    Lectures,
    SearchComp
  }
}
</script>

<template>
  <div class="lectures">
    <Lectures/>
  </div>
</template>

