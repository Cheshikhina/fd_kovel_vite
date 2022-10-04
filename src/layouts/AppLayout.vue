<template>
    <div class="app-root">
        <v-header />
        <v-fix-menu />

        <main class="main">
            <slot />
        </main>

        <v-footer />
    </div>
</template>

<script>
import VHeader from '@/components/blocks/VHeader.vue';
import VFooter from '@/components/blocks/VFooter.vue';
import VFixMenu from '@/components/blocks/VFixMenu.vue';

export default {
    components: {
        VHeader,
        VFooter,
        VFixMenu
    },
};
</script>
