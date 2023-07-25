<template>
    <div>
        <div class="flex  items-center justify-center mt-10">
            <div class=" w-8">
                <img alt="Vue logo" src="../assets/logo.png">
            </div>
            <p class="ml-2">Thermo Fan</p>
        </div>
        <p class="w-3/5 m-auto my-10 max-sm:my-3">
            Bienvenu dans votre application de gestion <br> des ventilateurs <span class=" font-medium">Thermo Fan</span>.
        </p>
        <!-- All Fan slider-->
        <div>
            <div class="rounded-lg bg-[#f4f6fe] h-10 sm:h-10 py-0 mt-5 mb-0 flex items-center justify-around w-2/5 max-sm:w-4/5 m-auto shadow-[inset_0rem_0.2rem_0.4rem_0_rgb(0,0,0,0.1)]">
                <p>n°</p>
            </div>
            <div class="flex justify-center px-10 items-center m-auto">
                <div>
                    <MainButton class="">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5"  viewBox="0 0 256 512"><path d="M9.4 278.6c-12.5-12.5-12.5-32.8 0-45.3l128-128c9.2-9.2 22.9-11.9 34.9-6.9s19.8 16.6 19.8 29.6l0 256c0 12.9-7.8 24.6-19.8 29.6s-25.7 2.2-34.9-6.9l-128-128z"/></svg>
                    </MainButton>
                </div>
                <div>
                    <div class=" m-auto w-2/5 max-sm:w-4/5">
                        <img alt="Vue logo" src="../assets/fan.png">
                    </div>
                </div>
                <div>
                    <MainButton>
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5"  viewBox="0 0 256 512"><path d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z"/></svg>
                    </MainButton>
                </div>
            </div>
            
        </div>
        <div class="mt-12">
            <a href="/home">
            <MainButton class="!rounded-3x !py-3 flex items-center hideAfterElem" > 
                Choisir </MainButton>
            </a>
        </div>
    </div>
</template>
<script>
import axios from "axios";
import MainButton from '@/components/MainButton.vue'

export default{
    name:"LandingView",
    data(){
        return {
            allFan:[],
        }
    },
    components: {
        MainButton
    },
    mounted(){
        this.getAllFan();
    },
    methods:{
        async getAllFan(){
            await axios.get('http://d04ad23.online-server.cloud:8080/ventilator/getAllVentilatorStatus')
            .then((response)=>{
                this.allFan = response.data
                console.log(this.allFan);
            }).catch(error=>{
                console.log(error)
                this.allFan = []
            })
        },
        goTo() {
            this.$router.push({
                path: '/home'
            });
        },
    }
}
</script>