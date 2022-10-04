<template>
    <section class="gallery">
        <div class="gallery__box">
            <div v-for="number in 12" class="gallery__item" :key="`Gallery-${number}`">
                <v-lazy-image 
                          class="gallery__img" 
                          :src="`/src/assets/gallery-${number > 6 ? number - 6 : number}.png`"
                          :alt="`Gallery ${number}`"
                          width="260"
                          height="260"
                />
            </div>
        </div>
        <div class="gallery__wrap">
            <v-link href="#" class="gallery__insta" >Instagram:&nbsp;<b>@classic_kovel</b></v-link>
        </div>
    </section>
</template>

<script>
import VLazyImage from "v-lazy-image";
import VLink from '@/components/components/VLink.vue';

export default {
    name: 'VGallery',

    components: { 
        VLazyImage,
        VLink
    }
};
</script>

<style scoped lang="scss">
.gallery {
    position: relative;
    margin-bottom: 127px;
    overflow: hidden;
    z-index: 2;
}

.gallery__box {
    display: flex;
    transform: translateX(-180px);
    animation: gallery 70s linear infinite;
}

.gallery__item {
    flex: 0 0 260px;
    margin: 0 20px;
}

.gallery__img {
    display: block;
    width: 100%;
}

.gallery__wrap {
    @include flex-helper(center);
    @include btn(insta, insta, insta);
    @include absolute-center();

    align-items: stretch;
    width: calc(100vw - 30px);
    min-height: 180px;
    padding: 20px;
    z-index: 10;

    @include media(up, md) {
        max-width: 480px;
    }

    &:hover .gallery__insta {
        border: 1px solid cl('white', 0.5);
    }
}

.gallery__insta {
    @include flex-helper(center);
    @include transition(border-color);

    width: 100%;
    border: 1px solid cl('white', 0.1);
    border-radius: map-get($border-radius, insta);
    color: cl('white');
    line-height: 29px;

    @include media(up, sm) {
        @include font(subtitle);
    }
}
</style>

