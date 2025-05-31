<?php

namespace App\Filament\Builder;

use App\Filament\Builder\Blocks\CategoryBlock;
use App\Filament\Builder\Blocks\HeroBlock;
use App\Filament\Builder\Blocks\IconCardBlock;
use Filament\Forms\Components\Builder;
use Filament\Forms\Form;

class PageBuilder
{
    public static function make(Form $form): Builder
    {
        $blocks = [
            new HeroBlock()->getBlock($form),
            new IconCardBlock()->getBlock($form),
            new CategoryBlock()->getBlock($form),
        ];

        return Builder::make('blocks')
            ->label(__('Page Blocks'))
            ->blocks($blocks)
            ->collapsible();
    }
}
