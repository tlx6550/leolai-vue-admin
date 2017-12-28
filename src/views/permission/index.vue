<template>
  <div class="app-container">
    <div style="margin-bottom:15px;">你的权限： {{roles}}</div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default{
    name: 'permission',
    data() {
      return {
        role: ''
      }
    },
    computed: {
      ...mapGetters([
        'roles'
      ])
    }
  }
</script>
