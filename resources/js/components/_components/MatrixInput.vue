<template>
    <table :style="tableStyles">
        <thead>
        <tr>
            <th></th>
            <th v-for="(column, colIndex) in columns"
                :key="colIndex"
                :style="getHeaderStylesOfColumn(column)">
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
    // Get table styles
    const tableStyles = computed(() => props?.field?.tableStyles || {})

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
    // Get cell of provided row and col indexes
    const getKey = (rowIndex, colIndex) => [rows?.value?.[rowIndex]?.value, columns?.value?.[colIndex]?.value].join(delimiter.value)
    const getCell = (rowIndex, collIndex) => (cells?.value || []).find(cell => cell.rowIndex === rowIndex && cell.colIndex === collIndex) || null


    // Methods
    // Get header styles of column
    const getHeaderStylesOfColumn = (column) => {

        let styles = {
            width: column?.cellWidth || 'auto',
            maxWidth: column?.cellWidth || 'auto',
            minWidth: column?.cellWidth || 'auto',
            textAlign: column.headerAlign || 'center',
        }

        if(column?.rotateHeaderInDegrees) {
            styles = {
                ...styles,
                transform: `rotate(${column?.rotateHeaderInDegrees}deg)`,
                whiteSpace: 'nowrap',
                transformOrigin: 'center center',
            }
        }

        return {
            ...styles,
            ...(column?.theadStyles || [])
        }
    }



</script>
