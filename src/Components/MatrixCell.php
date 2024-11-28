<?php

namespace Pavloniym\NovaMatrixInputField\Components;

class MatrixCell
{

    public function __construct
    (
        public int $rowIndex,
        public int $colIndex,
        public bool $isReadonly = false
    )
    {
        //
    }


    /**
     * To array
     *
     * @return array
     */
    public function toArray(): array
    {
        return [
            'rowIndex' => $this->rowIndex,
            'colIndex' => $this->colIndex,
            'isReadonly' => $this->isReadonly
        ];
    }
}
