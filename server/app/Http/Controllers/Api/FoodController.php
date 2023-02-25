<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Food;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class FoodController extends Controller
{
    public function GetFood()
    {
        $foods = Food::all();
        if ($foods->count() > 0) {
            return response()->json([
                'status' => 200,
                'foods' => $foods
            ], 200);
        } else {
            return response()->json([
                'status' => 404,
                'messages' => "No Records Found"
            ], 404);
        };
    }

    public function AddFood(Request $request)
    {

        $validator = Validator::make($request->all(), [
            'name' => 'required|max:191',
            'price' => 'required|max:191',
            'image' => 'required|mimes:png,jpg,jpeg|max:2048',
        ]);
        if ($validator->fails()) {
            return response()->json([
                'status' => 422,
                'errors' => $validator->messages()
            ], 422);
        } else {
            $foods = Food::create([
                'name' => $request->name,
                'price' => $request->price,
                'image' => $request->file('image')->store('foods')
            ]);

            if ($foods) {
                return response()->json([
                    'status' => 200,
                    'message' => "Foods Created Successfully"
                ], 200);
            } else {
                return response()->json([
                    'status' => 500,
                    'message' => "Foods Created Failed"
                ], 500);
            }
        }
    }
    public function GetFoodById($id)
    {
        $food = Food::find($id);
        if ($food) {
            return response()->json([
                'status' => 200,
                'student' => $food
            ], 200);
        } else {
            return response()->json([
                'status' => 404,
                'messages' => "No Records Found"
            ], 404);
        }
    }

    public function edit($id){
        $foods = Food::find($id);
        if($foods){
            return response()->json([
                'status'=>200,
                'foods'=> $foods
            ],200);
        }else{
            return response()->json([
                'status'=>404,
                'messages'=> 'No Such Food Found!'
            ],404);
        }
    }


    public function Update(Request $request,$id)
    {

        $validator = Validator::make($request->all(), [
            'name' => 'max:191',
            'price' => 'max:191',
            'image' => 'mimes:png,jpg,jpeg|max:2048',
        ]);
        if ($validator->fails()) {
            return response()->json([
                'status' => 422,
                'errors' => $validator->messages()
            ], 422);
        } else {
            $foods = Food::find($id); 
            if ($foods) {

                $foods->update([
                    'name' => $request->name,
                    'price' => $request->price,
                    // 'image' => $request->file('image')->store('foods')
                ]);

                return response()->json([
                    'status' => 200,
                    'message' => "Foods Updated Successfully"
                ], 200);
            } else {
                return response()->json([
                    'status' => 404,
                    'message' => "Foods Updated Failed"
                ], 404);
            }
        }
    }

    public function Delete($id){
        $result = Food::where('id', $id)->delete();
        if($result){
            return response()->json([
                'status' => 200,
                'message' => "Foods Deleted Successfully"
            ], 200);
        }else {
            return response()->json([
                'status' => 500,
                'message' => "Foods Deleted Failed"
            ], 500);
        }
    }

}
