<template>
    <v-link class="btn-tel" href="tel:+0 800 33 08 98" text="0 800 33 08 98">
        <span class="btn-tel__icon">
            <v-icon name="tel" />
        </span>
    </v-link>
</template>

<script>
import VLink from '@/components/components/VLink.vue';
import VIcon from '@/components/components/VIcon.vue';

export default {
    name: 'VBtnTel',

    components: {
        VLink,
        VIcon
    }
};
</script>

<style scoped lang="scss">
  .btn-tel {
    @include font(btn, 700);
    @include flex-helper();

    &:hover svg {
        transform: scale(1.2) rotate(-10deg);
    }
}

.btn-tel__icon {
    @include flex-helper(center);
    @include btn(btn, btn, btn);

    width: 33px;
    height: 33px;
    margin-right: 16px;
    color: cl('white');

    svg {
        @include transition(transform);

        width: 14px;
        height: 14px;
    }
}
</style>

