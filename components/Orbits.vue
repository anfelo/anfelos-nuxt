<template>
  <div class="orbits-container">
    <div class="orbits">
      <div class="nav-item-1 yellow-sun" />
      <div id="nav-orbit1" class="orbit-nav item-2" data-speed="6">
        <div id="atom1" class="atom-nav pink-js" />
      </div>
      <div id="nav-orbit2" class="orbit-nav item-3" data-speed="5">
        <div id="atom2" class="atom-nav green-ios" />
      </div>
      <div id="nav-orbit3" class="orbit-nav item-4" data-speed="4">
        <div id="atom3" class="atom-nav blue-html" />
      </div>
      <div id="nav-orbit4" class="orbit-nav item-5" data-speed="3">
        <div id="atom4" class="atom-nav red-ruby" />
      </div>
      <div id="nav-orbit5" class="orbit-nav item-6" data-speed="2">
        <div id="atom5" class="atom-nav green-android" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import runOrbitsAnimation from "@/helpers/orbits";
export default {
  mounted() {
    runOrbitsAnimation();
  }
};
</script>

<style lang="scss" scoped>
.orbits-container {
  position: relative;
  min-height: 400px;
  width: 100%;
  opacity: 0.7;
}
.orbits {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 370px;
  height: 370px;
  transform: translate(-50%, -50%);
  z-index: 0;
}
.nav-item-1 {
  position: absolute;
  left: 170px;
  top: 170px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #e0ab18;
  z-index: 100;
}
.item-2 {
  position: absolute;
  left: 140px;
  top: 140px;
  width: 90px;
  height: 90px;
  border: 1px solid #d9d9d9;
  border-radius: 50%;
  z-index: 98;
}
.item-3 {
  position: absolute;
  left: 105px;
  top: 105px;
  width: 160px;
  height: 160px;
  border: 1px solid #d9d9d9;
  border-radius: 50%;
  z-index: 97;
}
.item-4 {
  position: absolute;
  left: 70px;
  top: 70px;
  width: 230px;
  height: 230px;
  border: 1px solid #d9d9d9;
  border-radius: 50%;
  z-index: 96;
}
.item-5 {
  position: absolute;
  left: 35px;
  top: 35px;
  width: 300px;
  height: 300px;
  border: 1px solid #d9d9d9;
  border-radius: 50%;
  z-index: 95;
}
.item-6 {
  position: absolute;
  width: 370px;
  height: 370px;
  border: 1px solid #d9d9d9;
  border-radius: 50%;
  z-index: 94;
}
.item-2 .atom-nav {
  position: absolute;
  right: -10px;
  top: 35px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
}
.item-3 .atom-nav {
  position: absolute;
  right: -10px;
  top: 70px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
}
.item-4 .atom-nav {
  position: absolute;
  right: -10px;
  top: 105px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
}
.item-5 .atom-nav {
  position: absolute;
  right: -10px;
  top: 140px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
}
.item-6 .atom-nav {
  position: absolute;
  right: -10px;
  top: 175px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
}
.atom-nav,
.nav-item-1 {
  -webkit-transition: all 0.5s ease;
  -moz-transition: all 0.5s ease;
  -ms-transition: all 0.5s ease;
  -o-transition: all 0.5s ease;
  transition: all 0.5s ease;
}
.atom-nav:hover {
  width: 30px;
  height: 30px;
  right: -15px;
}
.nav-item-1:hover {
  width: 35px;
  height: 35px;
}
#nav-orbit1,
#nav-orbit2,
#nav-orbit3,
#nav-orbit4,
#nav-orbit5 {
  -webkit-transform: rotate(120deg);
  -moz-transform: rotate(120deg);
  -ms-transform: rotate(120deg);
  -o-transform: rotate(120deg);
  transform: rotate(120deg);
}
</style>
