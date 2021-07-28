<template>
  <div class='w-full'>
    <FavouriteItems />

<!--    Categories -->
    <section class='w-full'>
      <h1 class='text-center pt-6 pb-6'>CATEGORIES</h1>
      <div class='flex justify-evenly'>
          <Category :svg-h-t-m-l="getGlassesSVG" category-name='Accessories'></Category>
          <Category :svg-h-t-m-l="getShoeSVG" category-name='Shoes'></Category>
          <Category :svg-h-t-m-l="getShirtSVG" category-name='Clothes'></Category>
      </div>
    </section>
  </div>
</template>

<script>
import Category from '../components/Category'
export default {
  components: { Category },
  layout: 'Secondary',
  computed: {
    getGlassesSVG()
    {
      return("<svg viewBox=\"0 0 68.47 28.25\" width=\"100%\">\n" +
        "      <defs><style>.cls-1{fill:none;stroke:#47745b;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.3px;}</style></defs>\n" +
        "      <g>\n" +
        "        <circle class=\"cls-1\" cx=\"17.43\" cy=\"14.13\" r=\"12.38\"/>\n" +
        "        <line class=\"cls-1\" x1=\"1.41\" y1=\"14.13\" x2=\"5.05\" y2=\"14.13\"/>\n" +
        "        <circle class=\"cls-1\" cx=\"51.03\" cy=\"14.13\" r=\"12.38\"/>\n" +
        "        <line class=\"cls-1\" x1=\"67.06\" y1=\"14.13\" x2=\"63.41\" y2=\"14.13\"/>\n" +
        "        <path class=\"cls-1\" d=\"M38.68,13.32s-2.14-2.23-4.45-2.23-4.44,2.23-4.44,2.23\"/>\n" +
        "      </g>\n" +
        "    </svg>")
    },
    getShoeSVG() {
      return("<svg viewBox=\"0 0 68.47 55.63\" width='100%'>\n" +
        "      <defs><style>.shoe{fill:none;stroke:#47745b;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.3px;}</style></defs>\n" +
        "      <g>\n" +
        "        <path class=\"shoe\" d=\"M39.68,16.8c2.43,5.44,8.54,12.36,8.54,12.36,7.25,8.6,10.21,8.8,13.13,10.56a4.57,4.57,0,0,1,2.08,4.94l-2.88,4.05c-1.88.62-14.14,1.38-23.35-4.38S4.93,23.5,4.93,23.5l13-17c.55,1.54,2.57,8.63,8.24,11S39.68,16.8,39.68,16.8Z\"/>\n" +
        "        <path class=\"shoe\" d=\"M40.73,11.43c-2,1.87-1,5.37-1,5.37\"/>\n" +
        "        <line class=\"shoe\" x1=\"22.67\" y1=\"29.32\" x2=\"7.83\" y2=\"19.7\"/>\n" +
        "        <path class=\"shoe\" d=\"M16.23,12.57c5.39,7.13.76,13.07.76,13.07\"/>\n" +
        "        <path class=\"shoe\" d=\"M25.94,31.31l14.76,9.3a40.87,40.87,0,0,0,22.73,4\"/>\n" +
        "        <line class=\"shoe\" x1=\"44.69\" y1=\"21.89\" x2=\"39.45\" y2=\"25.24\"/>\n" +
        "        <line class=\"shoe\" x1=\"47.22\" y1=\"25.24\" x2=\"42.47\" y2=\"28.37\"/>\n" +
        "        <line class=\"shoe\" x1=\"49.51\" y1=\"28.37\" x2=\"44.85\" y2=\"31.31\"/>\n" +
        "      </g>\n" +
        "    </svg>")
    },
    getShirtSVG() {
      return("<svg viewBox=\"0 0 77.78 71.67\" width=\"100%\">\n" +
        "      <defs><style>.tshirt{fill:none;stroke:#47745b;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.3px;}</style></defs>\n" +
        "      <g>" +
        "        <path class=\"cls-1\" d=\"M56.1,37.09,65,39.18,69.31,30l-8.22-7.55s-5,4.45-5,9.84V66.9H21.68V32.26c0-5.39-5-9.84-5-9.84L8.47,30l4.36,9.21,8.85-2.09\"/>\n" +
        "        <path class=\"tshirt\" d=\"M61.09,22.42,48.47,17.5a19.13,19.13,0,0,1-9.58,2.72,19.13,19.13,0,0,1-9.58-2.72L16.69,22.42\"/>\n" +
        "        <path class=\"tshirt\" d=\"M48.47,17.5s-.39,10.16-9.58,10.16S29.31,17.5,29.31,17.5\"/>\n" +
        "        <polyline class=\"tshirt\" points=\"47.03 22.77 38.89 15.57 30.74 22.77\"/>\n" +
        "        <line class=\"tshirt\" x1=\"38.89\" y1=\"15.57\" x2=\"38.89\" y2=\"12.44\"/>\n" +
        "        <path class=\"tshirt\" d=\"M35.05,8.6a3.84,3.84,0,1,1,3.84,3.84\"/>\n" +
        "      </g>\n" +
        "    </svg>")
    }
  }
}
</script>

<style scoped>

h1 {
  font-family: "Roboto Condensed", sans-serif;
  color: #707070;
  font-weight: 700;
}

.category {
  border: solid 1px #707070;
  max-width: 20vw;
  max-height: 16vw;
  min-height: 16vw;
}

.category-heading {
  font-family: "Roboto Condensed", sans-serif;
  color: #707070;
  font-weight: 400;
}

</style>
