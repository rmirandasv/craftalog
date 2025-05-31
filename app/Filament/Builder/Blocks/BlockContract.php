<?php

namespace App\Filament\Builder\Blocks;

use Filament\Forms\Components\Builder\Block;
use Filament\Forms\Form;

interface BlockContract
{
    public function type(): string;

    public function getBlock(Form $form): Block;
}
