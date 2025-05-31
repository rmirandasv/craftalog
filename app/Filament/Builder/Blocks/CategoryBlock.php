<?php

namespace App\Filament\Builder\Blocks;

use App\Models\Category;
use Filament\Forms\Form;
use Filament\Forms\Components\Builder\Block;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;

class CategoryBlock implements BlockContract
{
    public function type(): string
    {
        return 'categoryBlock';
    }

    public function getBlock(Form $form): Block
    {
        return Block::make('categoryBlock')
            ->label(__('labels.categoryBlock'))
            ->schema([
                TextInput::make('heading')
                    ->label(__('labels.heading')),
                Select::make('category')
                    ->label(__('labels.category'))
                    ->options(Category::pluck('name', 'id'))
                    ->multiple(),
            ]);
    }
}
