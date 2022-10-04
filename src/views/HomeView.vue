<template>
    <div class="home">
        <v-banner />
        <v-products />
        <v-gallery />
        <v-bottom-section />
    </div>
</template>

<script>
import VBanner from "@/components/blocks/VBanner.vue";
import VProducts from "@/components/blocks/VProducts.vue";
import VGallery from "@/components/blocks/VGallery.vue";
import VBottomSection from "@/components/blocks/VBottomSection.vue";

export default {
    name: 'HomeView',

    components: {
        VBanner,
        VProducts,
        VGallery,
        VBottomSection
    },
};
</script>
