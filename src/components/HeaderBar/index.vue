
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

<style lang="scss">

.ant-dropdown:before {
  //为了解决 无法点击自定义的东西
  z-index: -1;
}
.header{
  position: relative;
  .header-left{
    padding-left: 24px;
    .head-bread{
      position: absolute;
      top: 22px;
      left: 60px;
    }
  }
  .menu{
    position: absolute;
    right: 0;
    top: 0;
    list-style: none;
    li{
       display: inline-block;
       text-align: center;
      //  padding: 0 20px;
      // width: 100px;
        &:hover{
          background: #fafafa
        }
    }
    .user{
      min-width: 100px;
    }
    .theme{
      width: 50px;
    }
    .lang{
      width: 50px;
    }
  }
}
</style>
