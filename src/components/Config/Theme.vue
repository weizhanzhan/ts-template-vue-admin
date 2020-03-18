<template>
  <a-dropdown
    v-model="visible"
    overlay-class-name="theme-config"
  >
    <div class="menu-icon">
      <span>
        <a-icon
          type="bg-colors"
          class="menu-icon-item"
        />
      </span>
    </div>
    <div
      slot="overlay"
    >
      <div class="w_theme_select">
        <h3 class="w_theme_select_title">
          Theme Color
        </h3>
        <div class="w_theme_content">
          <div
            v-for="color in colors"
            :key="color"
            class="w_theme_color_block"
            :style="[{'background':color}]"
            @click="changeTheme(color)"
          >
            <a-icon
              v-if="activeTheme===color"
              type="check"
            />
          </div>
        </div>
        <h3 class="w_theme_select_title">
          Menu Color
        </h3>
        <div>
          <a-switch
            checked-children="深色"
            un-checked-children="浅色"
            default-checked
            @change="changeMenuTheme"
          />
        </div>
      </div>
    </div>
  </a-dropdown>
</template>
<script lang="ts">
// import { updateTheme } from '../../../../../utils/common.js'
  import { Vue, Component } from 'vue-property-decorator'
  import { Dropdown, Menu, Avatar, Icon, Switch } from 'ant-design-vue'
  @Component({
    components: {
      'a-icon': Icon,
      'a-switch': Switch,
      'a-avatar': Avatar,
      'a-dropdown': Dropdown,
      'a-menu-item': Menu.Item,
      'a-menu-divider': Menu.Divider,
      'a-menu': Menu
    }
  })
  export default class ThemeConfig extends Vue {
    colors:Array<string> = ['#F5222D', '#FA541C', '#FAAD14', '#13C2C2', '#52C41A', '#1890FF', '#2F54E8', '#722ED1']
    themeTigger:Boolean = true
    activeTheme:string = '#2F54E8'
    visible:Boolean = false

    changeTheme(color:string) {
      this.activeTheme = color
      // updateTheme(color)
    }
    changeMenuTheme(val:Boolean) { this.$emit('changeLeftBar', val) }
  }
</script>

<style lang="scss" scoped>

</style>
