<template>
  <a :href='link'>
  <svg viewBox="0 0 22.7 22.7" :style='style' :width='width' :height='height'>
    <g>
      <path d="M16,22.2H6.41A6.21,6.21,0,0,1,.2,16V6.41A6.22,6.22,0,0,1,6.41.2H16a6.21,6.21,0,0,1,6.2,6.21V16A6.21,6.21,0,0,1,16,22.2ZM6.41,2.2A4.22,4.22,0,0,0,2.2,6.41V16a4.21,4.21,0,0,0,4.21,4.2H16A4.2,4.2,0,0,0,20.2,16V6.41A4.21,4.21,0,0,0,16,2.2Z"/>
      <path d="M11.2,17A5.78,5.78,0,1,1,17,11.2,5.79,5.79,0,0,1,11.2,17Zm0-9.56A3.78,3.78,0,1,0,15,11.2,3.79,3.79,0,0,0,11.2,7.42Z"/>
      <circle cx="17" cy="5.14" r="1.25"/>
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
    // fillOnHoverColor: String('white'),
  },
  data() {
    return {
      hovering: false,
      link: 'https://www.instagram.com',
    }
  },
  computed: {
    style() {
      const svgStyle = `fill: ${this.color};`
      return svgStyle
    }
    // instaVectorsStyle() {
    //   const instaVectorsStyle = `fill: ${this.hovering ? this.fillOnHoverColor: this.color};`
    //   // `stroke: ${this.color};`
    //   return instaVectorsStyle
    // }
  },
  // methods: {
  //   mouseOver() {
  //     this.hovering = !this.hovering
  //   }
  // }
}
</script>

<style scoped>
</style>
