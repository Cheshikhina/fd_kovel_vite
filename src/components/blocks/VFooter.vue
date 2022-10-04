<template>
    <footer class="footer">
        <p>© Classic Family Restaurant</p>
        <v-lazy-image class="footer__logo" src="/src/assets/logo-footer.png" alt="Logo" width="96" height="49" />
        <p class="footer__text">Made with delight by <b>harmuder<span class="footer__point">.</span></b></p>
    </footer>
</template>

<script>
import VLazyImage from "v-lazy-image";

export default {
    name: 'VFooter',

    components: { VLazyImage },
};
</script>

<style scoped lang="scss">

.footer {
    @include make-container();

    display: grid;
    grid-template-columns: 1fr 106px 1fr;
    align-items: baseline;
    padding-top: 55px;
    padding-bottom: 56px;
    line-height: 140%;

    @include media(down, md) {
        display: block;
        text-align: center;
        padding-top: 35px;
        padding-bottom: 36px;
    };
}

.footer__logo {
    display: none;

    @include media(up, md) {
        display: block;
        margin: 0 auto;
        transform: translateY(14px);
    };
}

.footer__text {
    justify-self: end;

    @include media(down, md) {
        margin-top: 15px;
    }
}

.footer__point {
    color: cl('red');
}
</style>

