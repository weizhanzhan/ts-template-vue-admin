
<template>
  <header class="header">
    <div class="header-left">
      <a-icon
        class="trigger"
        :type="collapsed ? 'menu-unfold' : 'menu-fold'"
        @click="changeCollapsed"
      />
      <breadCrumb class="head-bread" />
    </div>
    <ul class="menu">
      <li class="user">
        <UserConfig />
      </li>
      <li class="theme">
        <ThemeConfig v-on="$listeners" />
      </li>
      <li class="lang">
        <LangConfig />
      </li>
    </ul>
  </header>
</template>

<script lang="ts">
  import BreadCrumb from '../BreadCrumb.vue'
  import UserConfig from '../Config/User.vue'
  import ThemeConfig from '../Config/Theme.vue'
  import LangConfig from '../Config/Lang.vue'
  import { Icon } from 'ant-design-vue'
  import { Vue, Component, Prop } from 'vue-property-decorator'
  @Component({
    components: {
        BreadCrumb, UserConfig, ThemeConfig, LangConfig,
        'a-icon': Icon
    }
  })
  export default class Template extends Vue {
    @Prop()collapsed!:Boolean
    changeCollapsed() {
      this.$emit('trigger')
    }
  }
</script>

<style scoped>
</style>
