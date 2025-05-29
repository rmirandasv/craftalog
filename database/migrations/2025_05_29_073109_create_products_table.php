<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('slug')->unique();
            $table->text('description');
            $table->string('short_description', 255);
            $table->string('sku')->unique()->nullable();
            $table->decimal('price')->nullable();
            $table->decimal('compare_at_price')->nullable();
            $table->decimal('cost_price')->nullable();
            $table->integer('quantity')->nullable();
            $table->string('qr_code')->nullable();
            $table->boolean('is_featured')->default(false);
            $table->boolean('is_visible')->nullable();
            $table->json('images')->nullable();
            $table->json('attributes')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
