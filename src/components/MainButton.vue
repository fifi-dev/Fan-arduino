<template>
    <div class=" relative shadow-[0.625rem_0.625rem_0.875rem_0_rgb(225,226,228),-0.5rem_-0.5rem_1.125rem_0_rgb(255,255,255)] w-fit p-5 rounded-full m-auto hover:cursor-pointer">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'MainButton',
}
</script>

<style scoped>

div{
    transition: all 0.8s ease-out;
}

div::after{
    content: " ";
    background-color: inherit;
    width: 5px;
    height: 5px;
    position: absolute;
    bottom: -35%;;
    left: 50%;
    -ms-transform: translate(-50%);
    transform: translateX(-50%);
    border-radius: 50%;
    transition: all 0.5s ease-out;

}

div:hover:after{
    background-color: blue;
}


</style>