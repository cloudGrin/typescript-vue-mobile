<template>
  <div class="layout__page">
    <div class="layout__header">
    </div>
    <div class="layout__body">
      <icon-svg icon-class="account" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({ name: 'Home' })
export default class Home extends Vue {
  private async activated() {
    console.log('init');
  }
}
</script>
<style lang="less" scoped>
.layout__body {
  padding: 16px 16px 0 16px;
}

.layout__header {
  padding: 0 16px 40px 16px;
  background: @background-color;
}
</style>
