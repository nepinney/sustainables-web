<template>
  <nav class='p-4 pt-6 pb-6 fixed top-0 w-full left-0 lg:left-16 z-20'>
    <div class='grid grid-cols-3'>
      <div class='flex items-center justify-start z-20'>
        <NuxtLink to='/'>
          <div class='flex items-center bg-green-dark'>
            <p class='text-xxs sm:text-lg md:text-xl pl-0.5 pr-0.5'>SUSTAINABLES</p>
          </div>
        </NuxtLink>
      </div>
      <div class='flex items-center justify-center z-20'>
        <svg id='menuIcon' viewBox="0 0 52 52" width='30%' @click='rotateHamburgerAndShowNavLinks()'>
          <g>
            <path class="menuVectors" d="M26.05,1.05a25,25,0,1,1-25,25,25,25,0,0,1,25-25" transform="translate(-0.05 -0.05)"/>
            <line class="menuVectors" x1="11.94" y1="22.44" x2="40.06" y2="22.44"/>
            <line class="menuVectors" x1="11.94" y1="29.56" x2="40.06" y2="29.56"/>
          </g>
        </svg>
      </div>
      <div class='flex items-center justify-end z-20'>
          <InstagramIcon color='black' width='1.5rem' height='1.5rem' />
      </div>
    </div>

    <div class='nav-menu fixed transform flex justify-center items-center z-10'>
      <ul class='list-none m-0 text-center'>
        <li class='p-4 lg:p-8 text-4xl lg:text-5xl'><NuxtLink to='/' @click.native='rotateHamburgerAndHideNavLinks()'>Home</NuxtLink></li>
        <li class='p-4 lg:p-8 text-4xl lg:text-5xl'><NuxtLink to='shop' @click.native='rotateHamburgerAndHideNavLinks()'>Shop</NuxtLink></li>
        <li class='p-4 lg:p-8 text-4xl lg:text-5xl'><NuxtLink to='ourStory' @click.native='rotateHamburgerAndHideNavLinks()'>Our Story</NuxtLink></li>
        <li class='p-4 lg:p-8 text-4xl lg:text-5xl'><NuxtLink to='contact' @click.native='rotateHamburgerAndHideNavLinks()'>Contact</NuxtLink></li>
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
      if (this.$store.state.navMenuActive)
        this.unfixScrolling()
      else
        this.fixScrolling()
      this.$store.commit("setNavMenuActive", !this.$store.state.navMenuActive);

      const iconLinesSelector = "#menuIcon";
      const navListSelector = ".nav-menu";

      if (  $( iconLinesSelector ).css( "transform" ) === 'none' ){
        $(iconLinesSelector).css("transform","rotate(90deg)");
      } else {
        $(iconLinesSelector).css("transform","" );
      }

      $( navListSelector ).toggleClass('nav-list-active-transform');
    },
    rotateHamburgerAndHideNavLinks() {
      this.unfixScrolling()
      this.$store.commit("setNavMenuActive", false);

      const iconLinesSelector = "#menuIcon";
      const navListSelector = ".nav-menu";

      if (  $( iconLinesSelector ).css( "transform" ) === 'none' ){
        $(iconLinesSelector).css("transform","rotate(-90deg)");
      } else {
        $(iconLinesSelector).css("transform","" );
      }

      $( navListSelector ).toggleClass('nav-list-active-transform');
    },
    fixScrolling() {
      // When the modal is shown, we want a fixed body
      const scrollY = window.scrollY
      document.body.style.position = 'fixed'
      document.body.style.top = `-${scrollY}px`;
    },
    unfixScrolling() {
      // When the modal is hidden, we want to remain at the top of the scroll position
      const scrollY = document.body.style.top;
      console.log('Scroll y: ', scrollY)
      document.body.style.position = '';
      document.body.style.top = '';
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
    },
  },
}
</script>

<style scoped>

@media (min-width: 1024px) {
  nav {
    width: calc(100vw - 8rem);
  }
}

@media (min-width: 1536px) {
  nav {
    border-bottom: #47745B 1px solid;
  }
}

nav {
  background-color: rgba(255, 255, 255, 0.5);
}

.nav-menu {
  top: 0;
  left: 0;
  z-index: 5;
  background-color: #f6f6f6;
  width: 100vw;
  height: 100vh;
  transform: translateY(-100%);
}

.transform {
  -webkit-transition: all 1s ease;
  -moz-transition: all 1s ease;
  -o-transition: all 1s ease;
  transition: all 0.3s ease;
}

.nav-list-active-transform {
  transform: translateY(0);
}

li {
  font-family: "Roboto Condensed", sans-serif;
  /*font-size: 4rem;*/
  /*padding: 2rem;*/
  font-weight: 400;
  color: #707070;
}

a:hover {
  color: #3a5d4a;
}

a.nuxt-link-exact-active {
  color: #3a5d4a;
  font-weight: 700;
}

#logoBackground {
  background-color: #3A5D4A;
}

p {
  font-family: "Roboto Condensed";
  font-weight: 700;
  color: #F6F6F6;
  letter-spacing: 1px;
  margin: 0;
}

#menuIcon {
  fill:none;
  stroke:black;
  stroke-width:1.5px;
  max-width: 48px;
  transition-duration: 0.3s;
}

#menuIcon:hover, .menuVectors:hover {
  fill: #BCDBB5;
  /*stroke: black;*/
  /*stroke-miterlimit:10;*/
  /*stroke-width:2px;*/
}

</style>
