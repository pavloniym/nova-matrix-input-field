<?php

namespace Pavloniym\NovaMatrixInputField;

use Laravel\Nova\Fields\Field;
use Pavloniym\NovaMatrixInputField\Components\MatrixCell;
use Pavloniym\NovaMatrixInputField\Components\MatrixColumn;
use Pavloniym\NovaMatrixInputField\Components\MatrixRow;

class MatrixInputField extends Field
{
    /**
     * The field's component.
     *
     * @var string
     */
    public $component = 'nova-matrix-input-field';


    /**
     * Indicates if the element should be shown on the index view.
     *
     * @var (callable():(bool))|bool
     */
    public $showOnIndex = false;


    /**
     * @param string|int $delimiter
     * @return $this
     */
    public function setDelimiter(string|int $delimiter): self
    {
        return $this->withMeta(['delimiter' => $delimiter]);
    }


    /**
     * Set table styles
     *
     * @param array $styles
     * @return self
     */
    public function setTableStyles(array $styles = []): self
    {
        return $this->withMeta(['tableStyles' => $styles]);
    }


    /**
     * Set matrix cells
     *
     * @param iterable $matrixCells
     * @return self
     */
    public function setMatrixCells(iterable $matrixCells = []): self
    {
        return $this->withMeta([
            'cells' => collect($matrixCells)
                ->filter(fn(mixed $matrixCell) => $matrixCell instanceof MatrixCell)
                ->map(fn(MatrixCell $matrixCell) => $matrixCell->toArray())
                ->values()
                ->toArray()
        ]);
    }


    /**
     * Set matrix rows
     *
     * @param iterable $matrixRows
     * @return self
     */
    public function setMatrixRows(iterable $matrixRows = []): self
    {
        return $this->withMeta([
            'rows' => collect($matrixRows)
                ->filter(fn(mixed $matrixRow) => $matrixRow instanceof MatrixRow)
                ->map(fn(MatrixRow $matrixRow) => $matrixRow->toArray())
                ->values()
                ->toArray()
        ]);
    }


    /**
     * Set matrix columns
     *
     * @param iterable $matrixColumns
     * @return self
     */
    public function setMatrixColumns(iterable $matrixColumns = []): self
    {
        return $this->withMeta([
            'columns' => collect($matrixColumns)
                ->filter(fn(mixed $matrixColumn) => $matrixColumn instanceof MatrixColumn)
                ->map(fn(MatrixColumn $matrixColumn) => $matrixColumn->toArray())
                ->values()
                ->toArray()
        ]);
    }

}
