<template>
    <transition mode="out-in"
    enter-class="animate__animated animate__tada"
    leave-active-class="animate__animated animate__bounceOutRight"
    >
    <slot></slot>
    </transition>
</template>

<script>

export default {}
</script>
