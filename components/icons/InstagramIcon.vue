<template>
  <a :href='link'>

    <svg viewBox="0 0 23 23" :width='width' :height='height' :style='styleOne'>
      <defs><style>.cls-1{fill:none;stroke-width:1.1px;}.cls-1,.cls-2{stroke-miterlimit:10;}.cls-2{stroke-width:0.55px;}</style></defs>
      <g>
        <rect class="cls-1" x="1.2" y="1.2" width="20" height="20" rx="5.21"/>
        <circle class="cls-1" cx="11.2" cy="11.2" r="4.78"/>
        <circle :style='styleTwo' class="cls-2" cx="17" cy="5.14" r="0.97"/>
      </g>
    </svg>

  </a>
</template>

<script>
export default {
  name: 'InstagramIcon',
  props: {
    height: Number(0),
    width: Number(0),
    color: Number(0),
  },
  data() {
    return {
      hovering: false,
      link: 'https://www.instagram.com/shop.sustainables/',
    }
  },
  computed: {
    styleOne() {
      return `stroke: ${this.color}`
    },
    styleTwo() {
      return `fill: ${this.color}`
    }
  },
}
</script>

<style scoped>
</style>
