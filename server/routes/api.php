<?php

use App\Http\Controllers\Api\FoodController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('foods', [FoodController::class, 'GetFood']);
Route::post('foods', [FoodController::class, 'AddFood']);
Route::get('foods/{id}', [FoodController::class, 'GetFoodById']);
Route::put('foods/{id}/edit', [FoodController::class, 'Update']); 
Route::get('foods/{id}/edit', [FoodController::class, 'Edit']);
Route::delete('foods/{id}', [FoodController::class, 'Delete']);