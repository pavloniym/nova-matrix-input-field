<template>
    <PanelItem :index="index" :field="field">
        <template #value>
            <matrix-input v-bind="{field}">
                <template v-slot:default="{ cell, row, displayValue }">
                    <input
                        readonly
                        type="text"
                        class="px-0 w-full form-control form-input form-control-bordered"
                        :style="{ textAlign: row?.valueAlign || 'left' }"
                        :value="displayValue"
                        :disabled="cell?.isDisabled === true"
                    />
                </template>
            </matrix-input>
        </template>
    </PanelItem>
</template>

<script>

    // Components
    import MatrixInput from "./_components/MatrixInput.vue";

    export default {
        props: ['index', 'resource', 'resourceName', 'resourceId', 'field'],
        components: {MatrixInput},
    }
</script>
