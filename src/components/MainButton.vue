<template>
    <button :id="btnId"
        class=" relative shadow-[10px_10px_10px_0_rgb(225,226,228),-10px_-10px_20px_0_rgb(255,255,255)] w-fit p-5 rounded-full m-auto hover:cursor-pointer" @click="onClick($event)">
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: 'MainButton',
    props: ['btn'],
    data() {
        return {
            isActive: false,
            btnId: this.btn,
        }
    },

    methods: {
        onClick(event) {
            if(event.currentTarget.id == 'on-btn'){
                console.log('coucou')
                if(this.isActive){
                    this.isActive = false
                    event.srcElement.classList.add('declick')
                    event.srcElement.classList.remove('onclick')
                } else {
                    event.srcElement.classList.add('onclick')
                    event.srcElement.classList.remove('declick')
                    this.isActive = true
                }
                console.log(event)
                    console.log(this.isActive)
            }
        }
    },
}

</script>

<style scoped>
button {
    transition: all 0.2s ease-out;
    border: 2px transparent solid;
}

button::after {
    content: " ";
    background-color: inherit;
    width: 5px;
    height: 5px;
    position: absolute;
    bottom: -35%;
    ;
    left: 50%;
    -ms-transform: translate(-50%);
    transform: translateX(-50%);
    border-radius: 50%;
    transition: all 0.5s ease-out;

}

button:hover:after {
    background-color: blue;
}

.hideAfterElem::after{
    display: none !important;
}

button#btn:active {
    animation: onclick 0.2s ease-out forwards;

}

.onclick {
    /* animation: onclick2 0.2s ease-out forwards; */
    box-shadow: 5px 5px 5px 0 rgb(225,226,228), -5px -5px 10px 0 rgb(255,255,255);
    background-color: rgba(36, 201, 36, 0.388);
}
.declick {
    /* animation: onclick2 0.2s ease-out forwards reverse; */
    box-shadow: 10px 10px 10px 0 rgb(225,226,228), -10px -10px 20px 0 rgb(255,255,255);
}

@keyframes onclick {
    0% {
        box-shadow: 10px 10px 10px 0 rgb(225,226,228), -10px -10px 20px 0 rgb(255,255,255);
    }
    100%{
        box-shadow:10px 10px 10px 0 rgb(225,226,228), -10px -10px 20px 0 rgb(255,255,255), 10px 10px 10px 0 rgb(225,226,228) inset, -10px -10px 20px 0 rgb(255,255,255) inset
    }
}

</style>