<?php

namespace App\Filament\Builder;

use App\Filament\Builder\Blocks\HeroBlock;
use App\Filament\Builder\Blocks\IconCardBlock;
use Filament\Forms\Components\Builder;
use Filament\Forms\Form;

class PageBuilder
{
    public static function make(Form $form): Builder
    {
        $blocks = [
            new HeroBlock($form)->getBlock($form),
            new IconCardBlock($form)->getBlock($form),
        ];

        return Builder::make('blocks')
            ->label(__('Page Blocks'))
            ->blocks($blocks)
            ->collapsible();
    }
}
