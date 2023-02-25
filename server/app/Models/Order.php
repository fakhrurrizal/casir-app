<?php

namespace App\Models;

use App\Models\Food;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class order extends Model
{
    use HasFactory;
    protected $table = 'orders';

    protected $fillable = [
        'id',
        'id_food',
        'qty',
        'total',
    ];

    public function food(){
        return $this->morphOne(Food::class, 'foodable');
    }
    
}
