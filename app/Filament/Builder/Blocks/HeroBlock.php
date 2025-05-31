<?php

namespace App\Filament\Builder\Blocks;

use Filament\Forms\Components\Builder\Block;
use Filament\Forms\Components\Repeater;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Form;
use Filament\Support\Enums\Alignment;

class HeroBlock implements BlockContract
{
    public function type(): string
    {
        return 'heroBlock';
    }

    public function getBlock(Form $form): Block
    {
        return Block::make('Hero Block')
        ->schema([
            TextInput::make('heading')
                ->label(__('labels.heading')),
            TextInput::make('subheading')
                ->label(__('labels.subheading')),
            Repeater::make('cta')
                ->label(__('labels.cta'))
                ->defaultItems(0)
                ->maxItems(1)
                ->addActionLabel(__('actions.cta'))
                ->addActionAlignment(Alignment::Start)
                ->columns(2)
                ->reorderable(false)
                ->schema([
                    TextInput::make('label')
                        ->label(__('labels.label'))
                        ->helperText(__('helpers.ctalabel')),
                    TextInput::make('url')
                        ->label(__('labels.url'))
                        ->url()
                ]),
            Repeater::make('secondarycta')
                ->label(__('labels.secondarycta'))
                ->defaultItems(0)
                ->maxItems(1)
                ->addActionLabel(__('actions.secondarycta'))
                ->addActionAlignment(Alignment::Start)
                ->columns(2)
                ->reorderable(false)
                ->schema([
                    TextInput::make('label')
                        ->label(__('labels.label'))
                        ->helperText(__('helpers.ctalabel')),
                    TextInput::make('url')
                        ->label(__('labels.url'))
                        ->url()
                ]),
        ]);
    }
}
