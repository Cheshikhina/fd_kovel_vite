<template>
    <a :href="href" :class="[isLink && 'link']">
        <slot />
        <template v-if="text">
            {{ text }}
        </template>
    </a>
</template>

<script>
export default {
    name: 'VLink',

    props: {
        text: {
            type: String,
        },

        href: {
            type: String,
            requared: true
        },

        isLink: {
            type: Boolean,
            default: false
        }
    }
};
</script>

<style scoped lang="scss">
.link {
    @include link-hover();

    display: inline-flex;
}
</style>

