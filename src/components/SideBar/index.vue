
<template>
  <div>
    <div :class="['logo',theme+'_bg']">
      <img
        src="/ico.png"
      >
      <span :class="['logo_text',theme,collapsed?'hide':'show']">Vue Admin</span>
    </div>
    <a-menu
      mode="inline"
      :class="['side_bar_'+theme]"
      :theme="theme"
      :open-keys="openKeys"
      :selected-keys="[$route.name]"
      :inline-collapsed="collapsed"
      @click="menuClick"
      @openChange="handleOpenChange"
    >
      <template v-for="item in handleRoutes(routes)">
        <a-menu-item
          v-if="!item.children"
          :key="item.name"
        >
          <a-icon type="pie-chart" />
          <span>{{ $t(`menu.${ item.meta.title}`) }}</span>
        </a-menu-item>
        <sub-menu
          v-else
          :key="item.name"
          :menu-info="item"
        />
      </template>
    </a-menu>
  </div>
</template>

<script lang="ts">
  import { Vue, Component, Watch, Prop } from 'vue-property-decorator'
  import { Getter } from 'vuex-class'
  import SubMenu from '../Menu/SubMenu.vue'
  import { Menu, Icon } from 'ant-design-vue'
  @Component({
    components: {
        SubMenu,
        'a-menu': Menu,
        'a-submenu': Menu.SubMenu,
        'a-menu-item-group': Menu.ItemGroup,
        'a-menu-item': Menu.Item,
        'a-icon': Icon
    }
  })
  export default class Template extends Vue {
    openKeys:Array<any>=[]
    @Prop({ default: 'dark' })theme!:string
    @Prop()collapsed!:Boolean
    @Getter('routes') public routes!: any
    @Watch('$route')
    onRouterChange(val:any) {
      this.openKeys = [val.matched[0].name]
    }

    handleOpenChange(openKeys:Array<any>) {
      let keys
      if (openKeys.length > 1) {
        if (openKeys.length > 2) {
          keys = [openKeys[openKeys.length - 1]]
        } else if (openKeys[1].indexOf(openKeys[0]) > -1) {
          keys = [openKeys[0], openKeys[1]]
        } else {
          keys = [openKeys[openKeys.length - 1]]
        }
        this.openKeys = keys
      } else {
        this.openKeys = openKeys
      }
    }
    menuClick({ key }:any) {
      this.$router.push({ name: key })
    }
    /**
     * 过滤菜单，把hidden的去掉，把children只有一个 覆盖父级路由 显示单级菜单
     */
    handleRoutes(routes:Array<any>) {
      let newRoutes = JSON.parse(JSON.stringify(routes))
      newRoutes = newRoutes.filter((route:any) => !route.hidden)
      for (var i = 0; i < newRoutes.length; i++) {
        const route = newRoutes[i]
        if (route.children && route.children.length === 1) {
          if (!route.alwaysShow) {
            newRoutes[i] = route.children[0]
          }
        } else if (route.children && route.children.length > 1) {
          newRoutes[i].children = [...this.handleRoutes(route.children)]
        }
      }
      return newRoutes
    }
  }
</script>

<style scoped>
</style>
