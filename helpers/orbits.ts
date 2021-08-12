export default function runOrbitsAnimation(): void {
  const navOrbit1 = document.getElementById("nav-orbit1");
  const navOrbit2 = document.getElementById("nav-orbit2");
  const navOrbit3 = document.getElementById("nav-orbit3");
  const navOrbit4 = document.getElementById("nav-orbit4");
  const navOrbit5 = document.getElementById("nav-orbit5");
  let stopId, stopId1, stopId2, stopId3, stopId4, stopId5;

  function step(this) {
    const speed = parseInt(this.dataset.speed);
    let rotation = getRotation(this);
    if (rotation !== undefined) {
      rotation -= speed * 0.5;
      setRotation(this, rotation);
      stopId = window.requestAnimationFrame(step.bind(this));
    } else {
      cancelAnimation();
    }
  }

  function setRotation(element, deg) {
    element.style.transform = "rotate(" + deg + "deg)";
  }

  function getRotation(elem) {
    const el = elem;
    const st = window.getComputedStyle(el, null);
    const tr =
      st.getPropertyValue("-webkit-transform") ||
      st.getPropertyValue("-moz-transform") ||
      st.getPropertyValue("-ms-transform") ||
      st.getPropertyValue("-o-transform") ||
      st.getPropertyValue("transform") ||
      undefined;

    if (tr === undefined) {
      return undefined;
    }
    const values = tr.split("(")[1];
    const valuesA = values.split(")")[0];
    const valuesB = valuesA.split(",");
    const a = +valuesB[0];
    const b = +valuesB[1];

    const angle = Math.round(Math.atan2(b, a) * (180 / Math.PI));

    return angle;
  }

  function cancelAnimation() {
    window.cancelAnimationFrame(stopId);
    window.cancelAnimationFrame(stopId1);
    window.cancelAnimationFrame(stopId2);
    window.cancelAnimationFrame(stopId3);
    window.cancelAnimationFrame(stopId4);
    window.cancelAnimationFrame(stopId5);
  }

  (function() {
    let lastTime = 0;
    const vendors = ["ms", "moz", "webkit", "o"];
    for (let x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
      window.requestAnimationFrame =
        window[vendors[x] + "RequestAnimationFrame"];
      window.cancelAnimationFrame =
        window[vendors[x] + "CancelAnimationFrame"] ||
        window[vendors[x] + "CancelRequestAnimationFrame"];
    }

    if (!window.requestAnimationFrame)
      window.requestAnimationFrame = function(callback) {
        const currTime = new Date().getTime();
        const timeToCall = Math.max(0, 16 - (currTime - lastTime));
        const id = window.setTimeout(function() {
          callback(currTime + timeToCall);
        }, timeToCall);
        lastTime = currTime + timeToCall;
        return id;
      };

    if (!window.cancelAnimationFrame)
      window.cancelAnimationFrame = function(id) {
        clearTimeout(id);
      };
  })();
  if (navOrbit1 && navOrbit2 && navOrbit3 && navOrbit4 && navOrbit5) {
    stopId1 = window.requestAnimationFrame(step.bind(navOrbit1));
    stopId2 = window.requestAnimationFrame(step.bind(navOrbit2));
    stopId3 = window.requestAnimationFrame(step.bind(navOrbit3));
    stopId4 = window.requestAnimationFrame(step.bind(navOrbit4));
    stopId5 = window.requestAnimationFrame(step.bind(navOrbit5));
  }
}
