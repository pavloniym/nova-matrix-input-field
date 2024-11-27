<?php

namespace Pavloniym\NovaMatrixInputField\Components;

class MatrixRow
{
    public function __construct
    (
        public string $label,
        public string $value,
        public string $valueAlign = 'left'
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
            'valueAlign' => $this->valueAlign
        ];
    }
}
