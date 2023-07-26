<template>
  <div class="home py-5 px-20 max-sm:px-8">
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="opacity:0; position:absolute; z-index:-999" width="0" height="0">
      <defs>
        <symbol id="icon-power" viewBox="0 0 486.8200035 512">
          <path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V256c0 17.7 14.3 32 32 32s32-14.3 32-32V32zM143.5 120.6c13.6-11.3 15.4-31.5 4.1-45.1s-31.5-15.4-45.1-4.1C49.7 115.4 16 181.8 16 256c0 132.5 107.5 240 240 240s240-107.5 240-240c0-74.2-33.8-140.6-86.6-184.6c-13.6-11.3-33.8-9.4-45.1 4.1s-9.4 33.8 4.1 45.1c38.9 32.3 63.5 81 63.5 135.4c0 97.2-78.8 176-176 176s-176-78.8-176-176c0-54.4 24.7-103.1 63.5-135.4z" />
        </symbol>
        <symbol id="icon-plus" viewBox="0 0 511.9959858 512">
          <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/>
        </symbol>
        <symbol id="icon-minus" viewBox="0 0 511.9959858 512">
          <path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"/>
        </symbol>
        <symbol id="icon-oscillation" viewBox="0 0 408.3400116 512">
          <path d="M142.9 142.9c62.2-62.2 162.7-62.5 225.3-1L327 183c-6.9 6.9-8.9 17.2-5.2 26.2s12.5 14.8 22.2 14.8H463.5c0 0 0 0 0 0H472c13.3 0 24-10.7 24-24V72c0-9.7-5.8-18.5-14.8-22.2s-19.3-1.7-26.2 5.2L413.4 96.6c-87.6-86.5-228.7-86.2-315.8 1C73.2 122 55.6 150.7 44.8 181.4c-5.9 16.7 2.9 34.9 19.5 40.8s34.9-2.9 40.8-19.5c7.7-21.8 20.2-42.3 37.8-59.8zM16 312v7.6 .7V440c0 9.7 5.8 18.5 14.8 22.2s19.3 1.7 26.2-5.2l41.6-41.6c87.6 86.5 228.7 86.2 315.8-1c24.4-24.4 42.1-53.1 52.9-83.7c5.9-16.7-2.9-34.9-19.5-40.8s-34.9 2.9-40.8 19.5c-7.7 21.8-20.2 42.3-37.8 59.8c-62.2 62.2-162.7 62.5-225.3 1L185 329c6.9-6.9 8.9-17.2 5.2-26.2s-12.5-14.8-22.2-14.8H48.4h-.7H40c-13.3 0-24 10.7-24 24z"/>
        </symbol>
      </defs>
    </svg>
    <div class="flex mb-8 items-center justify-center">
      <div class=" w-8">
        <img alt="Vue logo" src="../assets/logo.png">
      </div>
      <p class="ml-2">Thermo Fan</p>
    </div>
    <!-- info-->
    <div
      class="rounded-lg bg-[#f4f6fe] h-full sm:h-20 py-4 mt-5 mb-10 flex items-center justify-around w-2/5 max-sm:w-full m-auto shadow-[inset_0rem_0.2rem_0.4rem_0_rgb(0,0,0,0.1)]">
      <div class="flex items-center">
        <div>
          <svg class="w-8 h-8" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512">
            <path
              d="M112 112c0-26.5 21.5-48 48-48s48 21.5 48 48V276.5c0 17.3 7.1 31.9 15.3 42.5C233.8 332.6 240 349.5 240 368c0 44.2-35.8 80-80 80s-80-35.8-80-80c0-18.5 6.2-35.4 16.7-48.9c8.2-10.6 15.3-25.2 15.3-42.5V112zM160 0C98.1 0 48 50.2 48 112V276.5c0 .1-.1 .3-.2 .6c-.2 .6-.8 1.6-1.7 2.8C27.2 304.2 16 334.8 16 368c0 79.5 64.5 144 144 144s144-64.5 144-144c0-33.2-11.2-63.8-30.1-88.1c-.9-1.2-1.5-2.2-1.7-2.8c-.1-.3-.2-.5-.2-.6V112C272 50.2 221.9 0 160 0zm0 416a48 48 0 1 0 0-96 48 48 0 1 0 0 96z" />
          </svg>
        </div>
        <div class=" text-start ml-3">
          <p class=" text-xs">Température</p>
          <p>{{ fan.temperatureActuelle }}°c</p>
        </div>
      </div>
      <div class="flex items-center">
        <div>
          <svg class="w-8 h-8" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512">
            <path
              d="M192 512C86 512 0 426 0 320C0 228.8 130.2 57.7 166.6 11.7C172.6 4.2 181.5 0 191.1 0h1.8c9.6 0 18.5 4.2 24.5 11.7C253.8 57.7 384 228.8 384 320c0 106-86 192-192 192zM96 336c0-8.8-7.2-16-16-16s-16 7.2-16 16c0 61.9 50.1 112 112 112c8.8 0 16-7.2 16-16s-7.2-16-16-16c-44.2 0-80-35.8-80-80z" />
          </svg>
        </div>
        <div class=" text-start ml-3">
          <p class=" text-xs">Humidité</p>
          <p>{{ fan.humidite }}</p>
        </div>
      </div>
    </div>
    <!-- 3D fan-->
    <div data-webgl class="flex justify-center"></div>
    <!-- Toggles -->
    <div class="flex w-2/5 m-auto absolute centeredAbsolute max-sm:w-3/5 max-xs:w-4/5">
      <MainButton btn="on-btn" data-power-btn class="bg-red-200">
        <svg class="icon-power" height="1em" width="1em">
          <use xlink:href="#icon-power" />
        </svg>
      </MainButton>

      <MainButton btn="btn" data-oscillation-btn>
        <svg class="icon-oscillation" height="1em" width="1em">
          <use xlink:href="#icon-oscillation" />
        </svg>
      </MainButton>

      <MainButton btn="btn" data-fan-speed-btn data-fan-speed="high">
        <svg class="icon-arrow" height="1em" width="1em">
          <use xlink:href="#icon-plus" />
        </svg>
      </MainButton>

      <MainButton btn="btn" data-fan-speed-btn data-fan-speed="low">
        <svg class="icon-arrow" height="1em" width="1em">
          <use xlink:href="#icon-minus" />
        </svg>
      </MainButton>
    </div>
  </div>
</template>

<script>
import MainButton from '@/components/MainButton.vue'
import * as THREE from "three";
import axios from "axios";

export default {
  name: 'HomeView',
  data(){
    return {
      fan:[],
      isRunning: false,
    }
  },
  components: {
    MainButton
  },
  mounted() {
      this.getStatus();
      this.toogleOn()
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
            clearColor: 0xecf2fa,
            width: window.innerWidth / 1.6,
            height: window.innerHeight / 1.6,
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

        onResize() {
          window.addEventListener('resize', () => {
            this.renderer.setSize(500, 500);
            this.perspectiveCamera.aspect = 500 / 500;
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
            this.isRunning = this.isPower
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
  methods:{
    async getStatus(){
        await axios.get('http://d04ad23.online-server.cloud:8080/ventilator/currentStatus')
        .then((response)=>{
            this.fan = response.data
            console.log(this.fan);
        }).catch(error=>{
            console.log(error)
            this.fan = []
        })
    },
    async toogleOn(){
        await axios.post('http://d04ad23.online-server.cloud:8080/ventilator/setMode')
        .then((response)=>{
            console.log("click de l'allumag" + response.data);
        }).catch(error=>{
            console.log(error)
        })
    },
  }
}
</script>
<style scoped>.centeredAbsolute {
  left: 50%;
  -ms-transform: translate(-50%);
  transform: translateX(-50%);
  bottom: 5%;
}</style>