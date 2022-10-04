<template>
    <div class="input">
        <div class="input__wrap">
            <input 
                  :class="['input__value', { 'input__value--valid': isValid }]"
                  :id="`${name}-${type}`"
                  :name="name"
                  :type="type"
                  v-on:blur="onBlur"
                  v-model="text"
                  v-maska="type === 'tel' ? '+7 (###) ###-##-##' : 'S*'"
            >
            <label :for="`${name}-${type}`" class="input__label">{{ label }}</label>

            <div class="input__error">
                {{ errorText }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'VInput',

    props: {
        type: {
            type: String,
            requared: true
        },

        name: {
            type: String,
            requared: true
        },

        label: {
            type: String,
            requared: true
        },

        textData: {
            type: [String, Array],
            requared: true
        },
    },

    data() {
        return {
            text: this.textData,
            errorText: null,
            isValid: false
        };
    },

    watch: {
        text(value) {
            if (value === '') {
                return this.errorText = 'This field is required. Please fill it.';
            } else if (this.type === 'tel' && value.length != 0 && value.length < 18) {
                return this.errorText = 'Please fill youre phone number.';
            } else {
                this.errorText = null;
            }

            this.$emit('update:input', `{${this.name}: '${value}'}`);
        },

        textData(value) {
            this.text = value;
            if (value.length == 0) this.isValid = false;
        }
    },

    methods: {
        onBlur() {
            if (!!this.text && !this.errorText) {
                this.isValid = true;
            } else {
                this.text = [];
                this.isValid = false;
            }
        }
    }
};
</script>

<style scoped lang="scss">
.input__wrap {
    @include flex-helper(center);

    position: relative;
    width: 100%;
}

.input__value,
.input__label {
    @include font(input);

    line-height: inherit;
    color: cl(input);
    background-color: cl('white');
    border-radius: map-get($border-radius, input);
}

.input__value {
    @include transition(border-color);

    width: 100%;
    margin: 0;
    padding: 19px 31px;
    background-color: cl('white');
    border: 2px solid cl(border-card);
    outline: none !important;
    box-shadow: inset 0 0 0 50px cl('white');
    -webkit-text-fill-color:  cl(input);

    &:hover {
        border-color: cl('orange');
    }

    &:focus {
        border-color: cl('orange');

        & + .input__label {
            top: 0;
        }
    }
    &.input__value--valid {
        background-color: cl('white') !important;

        & + .input__label {
            top: 0;
        }
    }

    &:autofill,
    &:-webkit-autofill {
        background-color: cl('white') !important;

        & + .input__label {
            top: 0;
        }
    }
}

.input__label {
    @include transition(top);

    position: absolute;
    top: 50%;
    left: 26px;
    padding: 5px;
    transform: translateY(-50%);
    cursor: text;
}

.input__error {
    @include font(small, 600);

    position: absolute;
    bottom: -15px;
    left: 31px;
    color: cl('red');
}
</style>
