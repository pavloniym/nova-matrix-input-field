<template>
    <DefaultField
        :field="field"
        :errors="errors"
        :show-help-text="showHelpText"
        :full-width-content="fullWidthContent"
    >
        <template #field>
            <matrix-input v-bind="{field}" :id="field.attribute">
                <template v-slot:default="{ cell, row, valueKey }">
                    <input
                        type="text"
                        class="w-full form-control form-input form-control-bordered"
                        :value="value?.[valueKey]"
                        :style="{ textAlign: row?.valueAlign || 'left' }"
                        :readonly="cell?.isReadonly === true"
                        :disabled="cell?.isDisabled === true"
                        @input="value[valueKey] = $event.target.value"
                    />
                </template>
            </matrix-input>
        </template>
    </DefaultField>
</template>

<script>

    // Components
    import MatrixInput from "./_components/MatrixInput.vue";

    // Mixins
    import {FormField, HandlesValidationErrors} from 'laravel-nova'

    export default {
        mixins: [FormField, HandlesValidationErrors],
        props: ['resourceName', 'resourceId', 'field'],
        components: {MatrixInput},
        methods: {

            /**
             * Set the initial, internal value for the field.
             */
            setInitialValue() {
                try {
                    const rawValue = this.field.value;
                    if (typeof rawValue === 'object' && rawValue !== null && !Array.isArray(rawValue)) {
                        this.value = rawValue
                    } else {
                        const parsedValue = JSON.parse(rawValue);
                        this.value = typeof parsedValue === 'object' && parsedValue !== null && !Array.isArray(parsedValue) ? parsedValue : {};
                    }
                } catch (e) {
                    this.value = {};
                }
            },

            /**
             * Fill the given FormData object with the field's internal value.
             */
            fill(formData) {
                formData.append(this.fieldAttribute, this.value ? JSON.stringify(this.value) : null)
            },
        },
    }
</script>
