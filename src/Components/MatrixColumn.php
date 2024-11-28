<?php

namespace Pavloniym\NovaMatrixInputField\Components;

class MatrixColumn
{
    public function __construct
    (
        public string $label,
        public string $value,
        public string $cellWidth = '80px',
        public array  $theadStyles = [],
        public string $headerAlign = 'center',
        public ?string $rotateHeaderInDegrees = null,
        public ?array  $translateHeaderByXYInPixels = null,
    )
    {
        //
    }

    /**
     * Get the instance as an array.
     *
     * @return array
     */
    public function toArray(): array
    {
        return [
            'label' => $this->label,
            'value' => $this->value,
            'cellWidth' => $this->cellWidth,
            'theadStyles' => $this->theadStyles,
            'headerAlign' => $this->headerAlign,
            'rotateHeaderInDegrees' => $this->rotateHeaderInDegrees,
            'translateHeaderByXYInPixels' => $this->translateHeaderByXYInPixels
        ];
    }
}
