<template>
  <div class="home">
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="opacity:0; position:absolute; z-index:-999" width="0" height="0">
  <defs>
    <symbol id="icon-power" viewBox="0 0 486.8200035 512">
      <path d="M410.6719933,91.9919968c-16.8770142-15.909996-43.4339905-15.0979996-59.3200073,1.7779999-15.8940125,16.8769989-15.0979919,43.4339981,1.7789917,59.3199997,32.0820007,30.2129974,49.7539978,71.2380066,49.7539978,115.5,0,87.9339905-71.5410156,159.4759827-159.4759979,159.4759827s-159.4739761-71.5419922-159.4739761-159.4759827c0-44.2619934,17.6679993-85.2870026,49.7540054-115.5,16.8769989-15.8849945,17.6719971-42.4420013,1.779007-59.3199997-15.8849945-16.8850021-42.4550018-17.6879959-59.3199997-1.7779999C27.7540016,137.5570068,0,201.9259949,0,268.5899963c0,134.2130127,109.192997,243.4100037,243.4099998,243.4100037,134.2130127,0,243.4100037-109.196991,243.4100037-243.4100037,0-66.6640015-27.7539978-131.0329895-76.1480103-176.5979996Z" fill="#fff" />
      <path d="M243.4099998,268.5899963c23.178009,0,41.9670105-15.0330048,41.9670105-33.5740051V33.5740013c0-18.5410013-18.7890015-33.5740013-41.9670105-33.5740013-23.1779938,0-41.9669952,15.033-41.9669952,33.5740013V235.0169983c0,18.5400085,18.7890015,33.572998,41.9669952,33.572998Z" fill="#fff" />
    </symbol>
    <symbol id="icon-arrow" viewBox="0 0 511.9959858 512">
      <path d="M255.998,0C114.8400029,0,0,114.8399963,0,256s114.8400029,256,255.998,256,255.9979858-114.8399963,255.9979858-256S397.1559895,0,255.998,0Zm0,66.7850037c104.3339844,0,189.2160034,84.8789978,189.2160034,189.2149963s-84.8819885,189.2149963-189.2160034,189.2149963-189.2170029-84.8789978-189.2170029-189.2149963S151.6650074,66.7850037,255.998,66.7850037Z" fill="#fff" />
      <path d="M246.149001,357.4819946c2.5910034,3.4159851,6.0870056,5.2990112,9.848999,5.2990112s7.2569885-1.8829956,9.8479919-5.2950134l69.0140076-90.9700012c2.6650085-3.5130005,3.3930054-6.9450073,2.04599-9.6549988-1.3469849-2.7129974-4.5180054-4.2080078-8.9299927-4.2080078h-26.4240112c-6.9530029,0-12.6090088-5.6519928-12.6090088-12.6040039v-75.0350037c0-8.7070007-7.0820007-15.7919922-15.7879944-15.7919922h-34.3119965c-8.7059937,0-15.7879944,7.0839996-15.7879944,15.7919922v75.0350037c0,6.9519958-5.6560059,12.6040039-12.6089935,12.6040039h-26.4219971c-4.4120026,0-7.5859985,1.4949951-8.9299927,4.2080078-1.3470001,2.7099915-.6210022,6.1419983,2.0460052,9.6579895l69.0089874,90.9630127Z" fill="#fff" />
    </symbol>
    <symbol id="icon-oscillation" viewBox="0 0 408.3400116 512">
      <path d="M167.3170013,181.4960022c16.2489929,0,189.803009-21.6750031,241.0229797,70.8980103-2.526001-75.7210083-72.4379883-187.5059967-241.022995-186.276001V0L0,126.8040009l167.3179932,126.7839966v-72.0919952h-.0009918Z" fill="#ffffff" />
      <path d="M240.9910126,330.5220032C224.7649994,330.5220032,51.1790161,352.1419983,.0000153,259.6159973c2.4990005,75.730011,72.4250031,187.4700012,240.9909973,186.2649841v66.1190186l167.348999-126.8129883-167.348999-126.7850037v72.1199951Z" fill="#ffffff" />
    </symbol>

  </defs>
</svg>
<div data-webgl></div>
<ul>
  <li>
    <button type="button" data-power-btn><svg class="icon-power">
        <use xlink:href="#icon-power" />
      </svg></button>
  </li>
  <li>
    <button type="button" data-oscillation-btn><svg class="icon-oscillation">
        <use xlink:href="#icon-oscillation" />
      </svg></button>
  </li>
  <li>
    <button type="button" data-fan-speed-btn data-fan-speed="high"><svg class="icon-arrow-up icon-arrow">
        <use xlink:href="#icon-arrow" />
      </svg></button>
  </li>
  <li>
    <button type="button" data-fan-speed-btn data-fan-speed="low"><svg class="icon-arrow">
        <use xlink:href="#icon-arrow" />
      </svg></button>
  </li>
</ul>
  </div>
</template>

<script>

import * as THREE from "three";
export default {
    name: "FanView",
    mounted() {
        window.addEventListener('DOMContentLoaded', () => {
  new App3();
}, false);

class App3 {
  static get COLOR_PARAM() {
    return {
      white: 0xffffff,
      black: 0x212121,
    };
  }

  static get CAMERA_PARAM() {
    return {
      fovy: 40,
      aspect: window.innerWidth / window.innerHeight,
      near: 0.1,
      far: 50.0,
      x: 0.0,
      y: 3.0,
      z: 20.0,
      lookAt: new THREE.Vector3(0.0, 0.0, 0.0),
    };
  }

  static get RENDERER_PARAM() {
    return {
      clearColor: App3.COLOR_PARAM.black,
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }

  static get DIRECTIONAL_LIGHT_PARAM() {
    return {
      color: App3.COLOR_PARAM.white,
      intensity: 1.0, 
      x: 1.0,
      y: 1.0,
      z: 1.0
    };
  }

  static get AMBIENT_LIGHT_PARAM() {
    return {
      color: App3.COLOR_PARAM.white,
      intensity: 0.2,
    };
  }

  constructor() {
    this.renderer;
    this.scene;
    this.perspectiveCamera;
    this.directionalLight;
    this.ambientLight;
    this.controls;
    this.fan;
    this.headGroup;
    this.wingGroup;

    this.$webgl = document.querySelector('[data-webgl]');
    this.$powerBtn = document.querySelector('[data-power-btn]');
    this.$fanSpeedBtn = [...document.querySelectorAll('[data-fan-speed-btn]')];
    this.$oscillationBtn = document.querySelector('[data-oscillation-btn]');

    this.fanSpeed = 0.15
    this.rotationCount = 0
    this.isPower = false
    this.isOscillation = false
    this.render = this.render.bind(this);

    this.init();
    this.createFan();
    this.render();
    this.gridHelper();
    this.onPowerClicked();
    this.onFanSpeedClicked();
    this.onOscillationClicked();
    this.onResize();
  }

  createFan() {
    this.fan = new THREE.Group();
    this.scene.add(this.fan);
    
    const standGeometry = new THREE.CylinderGeometry(0.8, 0.8, 0.1, 32); 
    const standMaterial = new THREE.MeshStandardMaterial({ color: App3.COLOR_PARAM.white }); 
    const stand = new THREE.Mesh(standGeometry, standMaterial);
    stand.position.y = 0.05
    this.fan.add(stand);

    const standDecoGeometry = new THREE.PlaneGeometry(0.5, 0.2); 
    const standDecoMaterial = new THREE.MeshStandardMaterial({ color: App3.COLOR_PARAM.black }); 
    const standDeco = new THREE.Mesh(standDecoGeometry, standDecoMaterial);
    standDeco.position.y = 0.11
    standDeco.position.z = 0.4
    standDeco.rotation.x = Math.PI / -2;
    this.fan.add(standDeco);

    const strutGeometry = new THREE.CylinderGeometry(0.15, 0.15, 1.6, 32); 
    const strutMaterial = new THREE.MeshStandardMaterial({ color: App3.COLOR_PARAM.white }); 
    const strut = new THREE.Mesh(strutGeometry, strutMaterial);
    strut.position.y = 1.6 / 2
    this.fan.add(strut);

    const pipeGeometry = new THREE.CylinderGeometry(0.1, 0.1, 3.0, 32); 
    const pipeMaterial = new THREE.MeshStandardMaterial( { color: App3.COLOR_PARAM.white } ); 
    const pipe = new THREE.Mesh(pipeGeometry, pipeMaterial);
    pipe.position.y = 1.5
    this.fan.add(pipe);

    this.headGroup = new THREE.Group();
    this.fan.add(this.headGroup);

    const motorGeometry = new THREE.CylinderGeometry(0.3, 0.3, 0.8, 32); 
    const motorMaterial = new THREE.MeshStandardMaterial({ color: App3.COLOR_PARAM.white }); 
    const motor = new THREE.Mesh(motorGeometry, motorMaterial);
    motor.position.y = 3
    motor.rotation.set(Math.PI/2,0,0); 
    this.fan.add(motor);
    this.headGroup.add(motor);

    const shaftGeometry = new THREE.CylinderGeometry(0.05, 0.05, 0.3, 32); 
    const shaftMaterial = new THREE.MeshStandardMaterial({ color: App3.COLOR_PARAM.white }); 
    const shaft = new THREE.Mesh(shaftGeometry, shaftMaterial);
    shaft.position.y = 3
    shaft.position.z = 0.5
    shaft.rotation.set(Math.PI/2,0,0); 
    this.fan.add(shaft);
    this.headGroup.add(shaft);

    const coverBackGeometry = new THREE.SphereGeometry(1.5, 32, 32, 0, 2 * Math.PI, 0, Math.PI / 5 );
    const coverBackMaterial = new THREE.MeshBasicMaterial({ color: App3.COLOR_PARAM.white, opacity: 0.2, transparent: true, wireframe: true }); 
    const coverBack = new THREE.Mesh(coverBackGeometry, coverBackMaterial);
    coverBack.rotation.set(-Math.PI/2, 0, 0); 
    coverBack.position.y = 3
    coverBack.position.z = 1.86
    this.fan.add(coverBack);
    this.headGroup.add(coverBack);

    const rimGeometry = new THREE.TorusGeometry( 0.9, 0.02, 16, 100 ); 
    const rimMaterial = new THREE.MeshBasicMaterial({ color: App3.COLOR_PARAM.black }); 
    const rim = new THREE.Mesh(rimGeometry, rimMaterial);
    rim.position.y = 3
    rim.position.z = 0.65
    this.fan.add(rim);
    this.headGroup.add(rim);

    this.wingGroup = new THREE.Group();
    this.fan.add(this.wingGroup);

    const WING_COUNT = 4;
    for (let i = 1; i <= WING_COUNT; i++) {
      const angle = Math.PI * (i - 1) / 2.0;
      const wingGeometry = new THREE.RingGeometry(0.2, 0.7, 32, 0, Math.PI * i, 1);
      const wingMaterial = new THREE.MeshBasicMaterial({ color: App3.COLOR_PARAM.white, opacity: 0.8, transparent: true, side: THREE.DoubleSide });
      const wing = new THREE.Mesh(wingGeometry, wingMaterial);
      wing.position.z = 0.65;
      wing.rotation.z = angle;
      this.wingGroup.add(wing);
    }
    this.wingGroup.position.set(0, 3, 0)
    this.headGroup.add(this.wingGroup);

    const capGeometry = new THREE.CylinderGeometry(0.2, 0.2, 0.1, 32); 
    const capMaterial = new THREE.MeshStandardMaterial({ color: App3.COLOR_PARAM.white }); 
    const cap = new THREE.Mesh(capGeometry, capMaterial);
    cap.position.y = 3
    cap.position.z = 0.65
    cap.rotation.set(Math.PI/2,0,0); 
    this.fan.add(cap);
    this.headGroup.add(cap);

    const coverFrontGeometry = new THREE.SphereGeometry(1.5, 32, 32, 0, 2 * Math.PI, 0, Math.PI / 5 );
    const coverFrontMaterial = new THREE.MeshBasicMaterial({ color: App3.COLOR_PARAM.white, opacity: 0.2, transparent: true, wireframe: true }); 
    const coverFront = new THREE.Mesh(coverFrontGeometry, coverFrontMaterial);
    coverFront.rotation.set(Math.PI/2, 0, 0); 
    coverFront.position.y = 3
    coverFront.position.z = - 0.55
    this.fan.add(coverFront);
    this.headGroup.add(coverFront);

    const coverFrontDecoGeometry = new THREE.CylinderGeometry(0.2, 0.2, 0.01, 32); 
    const coverFrontDecoMaterial = new THREE.MeshStandardMaterial({ color: App3.COLOR_PARAM.black }); 
    const coverFrontDeco = new THREE.Mesh(coverFrontDecoGeometry, coverFrontDecoMaterial);
    coverFrontDeco.position.y = 3
    coverFrontDeco.position.z = 0.95
    coverFrontDeco.rotation.set(Math.PI/2,0,0); 
    this.fan.add(coverFrontDeco);
    this.headGroup.add(coverFrontDeco);

    this.fan.position.set(0, 0, 11)
  }

  init() {
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setClearColor(new THREE.Color(App3.RENDERER_PARAM.clearColor));
    this.renderer.setSize(App3.RENDERER_PARAM.width, App3.RENDERER_PARAM.height);
    this.$webgl.appendChild(this.renderer.domElement);
    this.scene = new THREE.Scene();
    this.light();
    this.camera();
  }

  light() {
    this.directionalLight = new THREE.DirectionalLight(
      App3.DIRECTIONAL_LIGHT_PARAM.color,
      App3.DIRECTIONAL_LIGHT_PARAM.intensity
    );
    this.directionalLight.position.set(
      App3.DIRECTIONAL_LIGHT_PARAM.x,
      App3.DIRECTIONAL_LIGHT_PARAM.y,
      App3.DIRECTIONAL_LIGHT_PARAM.z,
    );
    this.scene.add(this.directionalLight);
    this.ambientLight = new THREE.AmbientLight(
      App3.AMBIENT_LIGHT_PARAM.color,
      App3.AMBIENT_LIGHT_PARAM.intensity,
    );
    this.scene.add(this.ambientLight);
  }

  camera() {
    this.perspectiveCamera = new THREE.PerspectiveCamera(
      App3.CAMERA_PARAM.fovy,
      App3.CAMERA_PARAM.aspect,
      App3.CAMERA_PARAM.near,
      App3.CAMERA_PARAM.far,
    );
    this.perspectiveCamera.position.set(
      App3.CAMERA_PARAM.x,
      App3.CAMERA_PARAM.y,
      App3.CAMERA_PARAM.z,
    );
    this.perspectiveCamera.lookAt(App3.CAMERA_PARAM.lookAt);
  }

  render() {
    requestAnimationFrame(this.render);
    this.renderer.render(this.scene, this.perspectiveCamera);
    if (this.isPower) {
      this.wingGroup.rotation.z -= this.fanSpeed
    } 
    if (this.isOscillation && this.isPower) {
      this.headGroup.rotation.y = Math.sin(++ this.rotationCount / 200)
    }
  }

  gridHelper() {
    this.gridHelper = new THREE.GridHelper(100, 100);
    this.scene.add(this.gridHelper);
  }

  onResize() {
    window.addEventListener('resize', () => {
      this.renderer.setSize(window.innerWidth, window.innerHeight);
      this.perspectiveCamera.aspect = window.innerWidth / window.innerHeight;
      this.perspectiveCamera.updateProjectionMatrix();
    }, false);
  }

  onPowerClicked() {
    this.$powerBtn.addEventListener('click', () => {
      this.fanSpeed = 0.15
      if (this.isPower) {
        this.isPower = false
        this.isOscillation = false
      } else {
        this.isPower = true
        this.isOscillation = true
      }
    });
  }

  onFanSpeedClicked() {
    this.$fanSpeedBtn.forEach(el => {
      el.addEventListener('click', () => {
        if (el.dataset.fanSpeed === 'high') {
          this.fanSpeed = 0.4
        } else {
          this.fanSpeed = 0.2
        }
      });
    });
  }

  onOscillationClicked() {
    this.$oscillationBtn.addEventListener('click', () => {
      if (this.isOscillation) {
        this.isOscillation = false
      } else {
        this.isOscillation = true
      }
    });
  }
}
    },
}
</script>


<style scoped>
body, ul {
  margin: 0;
  padding: 0;
}
div {
  height: 100%;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
}
ul {
  align-items: center;
  bottom: 25px;
  display: flex;
  gap: 0 20px;
  justify-content: center;
  left: 0;
  list-style: none;
  margin: 0;
  margin: auto;
  pointer-events: none;
  position: fixed;
  right: 0;
}
button {
  background: #212121;
  border-radius: 4px;
  border: 1px solid #ffffff;
  color: #fff;
  cursor: pointer;
  font-family: 'Roboto', sans-serif;
  height: 50px;
  letter-spacing: 0.1em;
  pointer-events: auto;
  width: 60px;
}
@media only screen and (min-width: 769px) {
  button {
    height: 50px;
    width: 100px;
  }
}
.icon-power {
  width: 18px;
  height: 19px;
}
.icon-oscillation {
  margin-top: 2px;
  width: 18px;
  height: 22px;
}
.icon-arrow {
  margin-top: 3px;
  width: 20px;
  height: 20px;
}
.icon-arrow-up {
  transform: scale(1, -1);
}

</style>