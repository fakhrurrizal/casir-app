<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     *
     * @return void
     */
    public function up()
    {
        Schema::create('transactions', function(Blueprint $table){
            $table->id();
            $table->integer('id_order');
            $table->integer('pay');
            $table->integer('change');
            $table->integer('total');
            $table->timestamps();
           });
    }

    /**
     * @return void
     */
    public function down()
    {
        //
    }
};
