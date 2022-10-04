<template>
  <svg aria-hidden="true">
    <use :href="`#icon-${name}`" />
  </svg>
</template>

<script>
export default {
    name: 'VIcon',

    props: {
        name: {
            type: String,
            required: true,
        },
    },
};
</script>
