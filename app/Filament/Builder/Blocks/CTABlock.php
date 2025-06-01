<?php

namespace App\Filament\Builder\Blocks;

use Filament\Forms\Form;
use Filament\Forms\Components\Builder\Block;
use Filament\Forms\Components\Repeater;
use Filament\Forms\Components\Section;
use Filament\Forms\Components\TextInput;
use Filament\Support\Enums\Alignment;

class CTABlock implements BlockContract
{
    public function type(): string
    {
        return 'ctaBlock';
    }

    public function getBlock(Form $form): Block
    {
        return Block::make('ctaBlock')
            ->label(__('CTA Block'))
            ->schema([
                TextInput::make('heading')
                    ->label(__('labels.heading')),
                TextInput::make('subheading')
                    ->label('labels.subheading'),
                Section::make('cta')
                    ->label(__('labels.cta'))
                    ->schema([
                        TextInput::make('label')
                            ->label(__('labels.label'))
                            ->required(),
                        TextInput::make('url')
                            ->label(__('labels.url'))
                            ->required(),
                    ]),
                Repeater::make('secndaryCTA')
                    ->label(__('labels.secondaryCta'))
                    ->defaultItems(0)
                    ->maxItems(1)
                    ->addActionAlignment(Alignment::Start)
                    ->addActionLabel(__('Add secondary CTA'))
                    ->schema([
                        TextInput::make('label')
                            ->label(__('labels.label'))
                            ->required(),
                        TextInput::make('url')
                            ->label(__('labels.url'))
                            ->required(),
                    ])
            ]);
    }
}
