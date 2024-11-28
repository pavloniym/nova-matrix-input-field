<template>
    <table>
        <thead>
        <tr>
            <th></th>
            <th v-for="(column, colIndex) in columns" :key="colIndex" :style="{textAlign: column.headerAlign || 'center'}">
                {{ column.label }}
            </th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(row, rowIndex) in rows" :key="rowIndex">
            <td class="whitespace-nowrap text-right pr-2">{{ row.label }}</td>
            <td v-for="(column, colIndex) in columns" :key="colIndex" :style="{width: column?.cellWidth || '80px'}">
                <slot v-bind="{
                    row,
                    column,
                    rowIndex,
                    colIndex,
                    cell: getCell(rowIndex, colIndex),
                    valueKey: getKey(rowIndex, colIndex),
                    displayValue: decodedDisplayValues?.[getKey(rowIndex, colIndex)],
                }"
                ></slot>
            </td>
        </tr>
        </tbody>
    </table>
</template>

<script setup>

    // Composables
    import {computed} from 'vue'

    // Props
    const props = defineProps({
        field: {type: Object, required: true},
    })

    // Computed
    const rows = computed(() => props?.field?.rows || [])
    const cells = computed(() => props?.field?.cells || [])
    const columns = computed(() => props?.field?.columns || [])
    const delimiter = computed(() => props?.field?.delimiter || ':')

    // Computed
    // Get decoded value
    const decodedDisplayValues = computed(() => {
        try {
            const rawValue = props?.field?.value || props?.field?.displayedAs;
            if (typeof rawValue === 'object' && rawValue !== null && !Array.isArray(rawValue)) {
                return rawValue
            }
            const parsedValue = JSON.parse(rawValue);
            return typeof parsedValue === 'object' && parsedValue !== null && !Array.isArray(parsedValue) ? parsedValue : {};
        } catch (e) {
            return {};
        }
    })

    // Methods
    // Get key
    const getKey = (rowIndex, colIndex) => [rows?.value?.[rowIndex]?.value, columns?.value?.[colIndex]?.value].join(delimiter.value)

    // Methods
    // Get cell of provided row and col indexes
    const getCell = (rowIndex, collIndex) => (cells?.value || []).find(cell => cell.rowIndex === rowIndex && cell.colIndex === collIndex) || null


</script>
