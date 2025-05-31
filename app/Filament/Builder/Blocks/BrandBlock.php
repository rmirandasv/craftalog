<?php

namespace App\Filament\Builder\Blocks;

use App\Models\Brand;
use Filament\Forms\Components\Builder\Block;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Form;

class BrandBlock implements BlockContract
{
    public function type(): string
    {
        return 'categoryBlock';
    }

    public function getBlock(Form $form): Block
    {
        return Block::make('brandBlock')
            ->label(__('labels.brandBlock'))
            ->schema([
                TextInput::make('heading')
                    ->label(__('labels.heading')),
                Select::make('brand')
                    ->label(__('labels.brand'))
                    ->options(Brand::pluck('name', 'id'))
                    ->multiple(),
            ]);
    }
}
