<template>
  <nav class='p-8 flex justify-between fixed top-0 w-full left-0 lg:left-16 z-10'>
    <div class='flex items-center'>
      <NuxtLink to='/'>
        <div id='logoBackground' class='flex justify-center items-center'>
          <p>SUSTAINABLES</p>
        </div>
      </NuxtLink>
    </div>
    <NuxtLink to='Products'>
      <div class='flex items-center'>
          <svg id='menuIcon' viewBox="0 0 52 52" width='50' height='50'>
            <g>
              <path class="menuVectors" d="M26.05,1.05a25,25,0,1,1-25,25,25,25,0,0,1,25-25" transform="translate(-0.05 -0.05)"/>
              <line class="menuVectors" x1="11.94" y1="22.44" x2="40.06" y2="22.44"/>
              <line class="menuVectors" x1="11.94" y1="29.56" x2="40.06" y2="29.56"/>
            </g>
          </svg>
      </div>
    </NuxtLink>
    <div class='flex items-center'>
      <div id='socialMediaIconsContainer' class='flex justify-end'>
        <svg viewBox="0 0 24 24" width='25' height='25'>
          <g id="Shape">
            <path class="instaVectors" d="M16,22.2H6.41A6.21,6.21,0,0,1,.2,16V6.41A6.22,6.22,0,0,1,6.41.2H16a6.21,6.21,0,0,1,6.2,6.21V16A6.21,6.21,0,0,1,16,22.2ZM6.41,2.2A4.22,4.22,0,0,0,2.2,6.41V16a4.21,4.21,0,0,0,4.21,4.2H16A4.2,4.2,0,0,0,20.2,16V6.41A4.21,4.21,0,0,0,16,2.2Z"/>
            <path class="instaVectors" d="M11.2,17A5.78,5.78,0,1,1,17,11.2,5.79,5.79,0,0,1,11.2,17Zm0-9.56A3.78,3.78,0,1,0,15,11.2,3.79,3.79,0,0,0,11.2,7.42Z"/>
            <circle class="instaVectors" cx="17" cy="5.14" r="1.25"/>
          </g>
        </svg>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style scoped>

@media (min-width: 1024px) {
  nav {
    width: calc(100vw - 8rem);
    /*left: 4rem;*/
  }
}

#logoBackground {
  background-color: #707070;
  height: 32px;
  width: 152px;
}

p {
  font-family: "Roboto Condensed";
  font-weight: 700;
  font-size: 20px;
  color: #F6F6F6;
  letter-spacing: 1px;
  margin: 0;
}

#menuIcon {
  fill:none;
  stroke:#707070;
  stroke-miterlimit:10;
  stroke-width:2px;
}

#menuIcon :hover {
  fill: #BCDBB5;
  stroke: #707070;
  stroke-miterlimit:10;
  stroke-width:2px;
}

#socialMediaIconsContainer {
  width: 152px;
}

.instaVectors {
  fill:#707070;
}

</style>
