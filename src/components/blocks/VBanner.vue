<template>
    <section class="banner">
        <v-paralax class="banner__paralax" />
        <div class="banner__wrap">
            <h1 class="banner__title">Food delivery in Kovel</h1>
            <p class="banner__desc">If you decide to relax or have unexpected guests, call us. We make sure that your vacation is comfortable, enjoyable and delicious</p>
        </div>
        <v-lazy-image class="banner__img" src="/src/assets/main-piza.png" alt="Pizza" width="847" height="591" />
    </section>
</template>

<script>
import VLazyImage from "v-lazy-image";
import VParalax from "@/components/components/VParalax.vue";

export default {
    name: 'VBanner',

    components: { 
        VLazyImage,
        VParalax
    }
};
</script>

<style scoped lang="scss">
.banner {
    position: relative;
    min-height: 696px;
    margin-top: 100px;
    background-image: url('@/assets/main.png');
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    background-color: cl(header);

    @include media(down, md) {
        min-height: 496px;
    }
}

.banner__paralax {
    top: -100px;
    left: 50%;
    width: 100%;
    height: calc(100% + 100px);
    background-image: url('@/assets/main-1.svg'),
                      url('@/assets/main-2.svg'),
                      url('@/assets/main-3.svg');
    background-repeat: no-repeat;
    background-position: 63% 68%, 59% 34.5%, 56.1% 0;
    transform: translateX(-50%);
    z-index: 1;

    @media (min-width: 1920px) {
        background-position: 50% 68%, 50% 34.5%, 56.1% 0;
    }
}

.banner__wrap {
    @include make-container();
    @include flex-helper(center);

    position: relative;
    flex-direction: column;
    padding-top: 61px;
    z-index: 2;

    @include media(down, md) {
        padding-top: 40px;
    }
}

.banner__title {
    @include font(title, 700);

    margin-bottom: 18px;
    line-height: 59px;
    text-align: center;

    @include media(down, md) {
        font-size: map-get($font-size, subtitle);
        line-height: 1;
    }
}

.banner__desc {
    @include font(btn);

    max-width: 621px;
    margin-bottom: 17px;
    line-height: 140%;
    text-align: center;

    @include media(down, md) {
        font-size: map-get($font-size, main);
    }
}

.banner__img {
    position: absolute;
    bottom: -109px;
    left: calc(50% + 100px);
    display: flex;
    max-height: 591px;
    margin-top: -34px;
    transform: translateX(-50%);
    animation: piza 5s infinite alternate;

    @include media(down, md) {
        position: relative;
        left: calc(50% + 50px);
        bottom: 0;
        margin-top: 0;
        animation: none;
    }
}
</style>

