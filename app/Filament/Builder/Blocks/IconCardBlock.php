<?php

namespace App\Filament\Builder\Blocks;

use Filament\Forms\Form;
use Filament\Forms\Components\Builder\Block;
use Filament\Forms\Components\Repeater;
use Filament\Forms\Components\TextInput;
use Guava\FilamentIconPicker\Forms\IconPicker;

class IconCardBlock implements BlockContract
{
    public function type(): string
    {
        return 'iconCardBlock';
    }

    public function getBlock(Form $form): Block
    {
        return Block::make('iconCardBlock')
            ->label(__('labels.iconCardBlock'))
            ->schema([
                TextInput::make('heading')
                    ->label(__('labels.heading'))
                    ->required(),
                Repeater::make('cards')
                    ->label(__('Cards'))
                    ->defaultItems(3)
                    ->minItems(3)
                    ->schema([
                        IconPicker::make('icon')->columns(2),
                        TextInput::make('heading'),
                        TextInput::make('content'),
                    ])
            ]);
    }
}
