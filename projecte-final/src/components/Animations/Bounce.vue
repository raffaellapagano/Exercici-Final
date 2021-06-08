<template>
    <transition mode="out-in"
    enter-active-class="animate__animated animate__bounce"
    leave-active-class="animate__animated animate__bounce"
    >
    <slot></slot>
    </transition>
</template>

<script>

export default {}
</script>
