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

    // Constants
    const IMPLODE_ROW_COLUMN = 'IMPLODE_ROW_COLUMN';
    const IMPLODE_COLUMN_ROW = 'IMPLODE_COLUMN_ROW';

    // Props
    const props = defineProps({
        field: {type: Object, required: true},
    })

    // Computed
    const rows = computed(() => props?.field?.rows || [])
    const cells = computed(() => props?.field?.cells || [])
    const columns = computed(() => props?.field?.columns || [])

    // Computed
    // Get prefix
    // Get delimiter
    const prefix = computed(() => props?.field?.prefix || null)
    const delimiter = computed(() => props?.field?.delimiter || ':')
    const implodeType = computed(() => props?.field?.implodeType || IMPLODE_ROW_COLUMN)

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
    const getKey = (rowIndex, colIndex) => {
        let values = []

        if (implodeType === IMPLODE_ROW_COLUMN) values = [prefix?.value, rows?.value?.[rowIndex]?.value, columns?.value?.[colIndex]?.value]
        if (implodeType === IMPLODE_COLUMN_ROW) values = [prefix?.value, columns?.value?.[colIndex]?.value, rows?.value?.[rowIndex]?.value]

        return values
            .filter(v => v !== undefined && v !== null)
            .join(delimiter.value)

    }

    // Methods
    // Get cell by row and col indexes
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

        if (column?.rotateHeaderInDegrees || column?.translateHeaderByXYInPixels) {
            styles = {
                ...styles,
                transform: `rotate(${column?.rotateHeaderInDegrees}) translate(${column.translateHeaderByXYInPixels?.[0] || '0px'}, ${column.translateHeaderByXYInPixels?.[1] || '0px'})`,
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
