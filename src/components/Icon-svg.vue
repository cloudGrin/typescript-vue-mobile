<template>
  <svg class="svg-icon"
       aria-hidden="true">
    <use :xlink:href="iconName"></use>
  </svg>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
@Component({ name: 'icon-svg' })
export default class IconSvg extends Vue {
  @Prop({ required: true }) private readonly iconClass!: string;
  get iconName() {
    return `#icon-${this.iconClass}`;
  }
}
</script>
