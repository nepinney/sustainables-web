<template>
  <nav class='p-4 lg:p-8 fixed top-0 w-full left-0 lg:left-16 z-10'>
    <div class='grid grid-cols-3'>
      <div class='flex items-center justify-start'>
        <NuxtLink to='/'>
          <div id='logoBackground' class='flex items-center'>
            <p class='text-base sm:text-lg md:text-xl pl-0.5 pr-0.5'>SUSTAINABLES</p>
          </div>
        </NuxtLink>
      </div>
      <div class='flex items-center justify-center'>
          <svg id='menuIcon' viewBox="0 0 52 52" width='30%' @click='rotateHamburgerAndShowNavLinks()'>
            <g>
              <path class="menuVectors" d="M26.05,1.05a25,25,0,1,1-25,25,25,25,0,0,1,25-25" transform="translate(-0.05 -0.05)"/>
              <line class="menuVectors" x1="11.94" y1="22.44" x2="40.06" y2="22.44"/>
              <line class="menuVectors" x1="11.94" y1="29.56" x2="40.06" y2="29.56"/>
            </g>
          </svg>
        </div>
      <div class='flex items-center justify-end'>
          <InstagramIcon color='black' width='1.5rem' height='1.5rem' />
      </div>
    </div>

    <div class='nav-list transform flex justify-center items-center pt-8'>
      <ul class='list-none m-0 text-center'>
        <li><NuxtLink to='/'>Home</NuxtLink></li>
        <li><NuxtLink to='products'>Products</NuxtLink></li>
        <li><NuxtLink to='aboutUs'>About</NuxtLink></li>
        <li><NuxtLink to='contact'>Contact</NuxtLink></li>
      </ul>
    </div>

  </nav>
</template>

<script>
import $ from 'jquery';
import InstagramIcon from './icons/InstagramIcon'
export default {
  name: 'Navbar',
  components: { InstagramIcon },
  methods: {
    rotateHamburgerAndShowNavLinks() {
      const iconLinesSelector = "#menuIcon";
      const navListSelector = ".nav-list";

      if (  $( iconLinesSelector ).css( "transform" ) === 'none' ){
        $(iconLinesSelector).css("transform","rotate(90deg)");
      } else {
        $(iconLinesSelector).css("transform","" );
      }

      $( navListSelector ).toggleClass('nav-list-active-transform');

      // if ( $(navListSelector).css ("display") === 'none' ){
      //   $(navListSelector).css("display", "block");
      // } else {
      //   $(navListSelector).css("display", "none" );
      // }
    },
  },
}
</script>

<style scoped>

@media (min-width: 1024px) {
  nav {
    width: calc(100vw - 8rem);
    /*left: 4rem;*/
  }
}

nav {
  /*border-bottom: solid 1px #707070;*/
  background-color: rgba(255, 255, 255, 0.5);
}

.nav-list {
  /*z-index: -1;*/
  display: none;
  opacity: 0;
  transform: translateY(-15rem);
}

.transform {
  -webkit-transition: all 1s ease;
  -moz-transition: all 1s ease;
  -o-transition: all 1s ease;
  transition: all 2s ease;
  /*transition: opacity 500ms ease-in, transform 500ms;*/
}

.nav-list-active-transform {
  display: block;
  opacity: 1;
  transform: translateY(0);
}

#logoBackground {
  background-color: #3A5D4A;
  /*height: 12.8%;*/
  /*width: 60.8%;*/
}

p {
  font-family: "Roboto Condensed";
  font-weight: 700;
  /*font-size: 1.2rem;*/
  color: #F6F6F6;
  letter-spacing: 1px;
  margin: 0;
}

#menuIcon {
  fill:none;
  stroke:black;
  stroke-miterlimit:10;
  stroke-width:2px;
  max-width: 48px;
  transition-duration: 0.3s;
}

#menuIcon:hover, .menuVectors:hover {
  fill: #BCDBB5;
  stroke: black;
  stroke-miterlimit:10;
  stroke-width:2px;
}

#socialMediaIconsContainer {
  width: 152px;
}

.instaVectors {
  fill: black;
}

</style>
