<?php

namespace App\Filament\Resources;

use App\Filament\Resources\ProductResource\Pages;
use App\Filament\Resources\ProductResource\RelationManagers;
use App\Models\Product;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class ProductResource extends Resource
{
    protected static ?string $model = Product::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    public static function getNavigationLabel(): string
    {
        return __('Products');
    }

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Section::make(__('General information'))
                    ->description(__('Minimum information to show the product in the catalog'))
                    ->columns(2)
                    ->schema([
                    Forms\Components\TextInput::make('name')
                        ->required(),
                    Forms\Components\TextInput::make('slug')
                        ->required(),
                    Forms\Components\Select::make('categories')
                        ->relationship('categories', 'name')
                        ->multiple()
                        ->preload()
                        ->columnSpanFull(),
                    Forms\Components\RichEditor::make('description')
                        ->required()
                        ->columnSpanFull(),
                    Forms\Components\Textarea::make('short_description')
                        ->required()
                        ->columnSpanFull(),
                     Forms\Components\KeyValue::make('attributes')
                        ->helperText(__('Examples: Color: Red, Material: Metllic'))
                        ->columnSpanFull(),
                    Forms\Components\Toggle::make('is_visible')
                        ->helperText(__('Control visivility in the catalog'))
                        ->required(),
                    Forms\Components\Toggle::make('is_featured')
                        ->helperText(__('Featured products appers on the home page')),
                ]),
                Forms\Components\Section::make(__('Product images'))
                    ->description(__('Manage product images'))
                    ->schema([
                        Forms\Components\FileUpload::make('images')
                        ->image()
                        ->multiple()
                        ->reorderable()
                        ->columnSpanFull(),
                    ]),
                Forms\Components\Section::make(__('Inventory information'))
                    ->description(__('This information it is not mandatory and will not be show in the catalog'))
                    ->collapsed()
                    ->schema([
                    Forms\Components\TextInput::make('sku')
                        ->label('SKU'),
                    Forms\Components\TextInput::make('price')
                        ->numeric()
                        ->prefix('$'),
                    Forms\Components\TextInput::make('compare_at_price')
                        ->numeric(),
                    Forms\Components\TextInput::make('cost_price')
                        ->numeric(),
                    Forms\Components\TextInput::make('quantity')
                        ->numeric(),
                    
                ])
                ->grow(false)
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('name')
                    ->searchable(),
                Tables\Columns\TextColumn::make('categories.name')
                    ->listWithLineBreaks()
                    ->limitList(3)
                    ->expandableLimitedList(),
                Tables\Columns\TextColumn::make('short_description')
                    ->limit(30)
                    ->searchable(),
                Tables\Columns\IconColumn::make('is_visible')
                    ->boolean(),
                Tables\Columns\IconColumn::make('is_featured')
                    ->boolean(),
                Tables\Columns\TextColumn::make('created_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
                Tables\Columns\TextColumn::make('updated_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
            ])
            ->filters([
                Tables\Filters\SelectFilter::make('categories.name')
                    ->relationship('categories', 'name')
                    ->multiple()
                    ->preload(),
            ])
            ->actions([
                Tables\Actions\ViewAction::make(),
                Tables\Actions\EditAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListProducts::route('/'),
            'create' => Pages\CreateProduct::route('/create'),
            'view' => Pages\ViewProduct::route('/{record}'),
            'edit' => Pages\EditProduct::route('/{record}/edit'),
        ];
    }
}
