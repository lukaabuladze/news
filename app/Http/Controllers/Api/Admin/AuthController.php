<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\LoginRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function username()
    {
        return 'phone';
    }

    public function login(LoginRequest $request)
    {
        if(!auth()->attempt([
            'phone' => $request->phone,
            'password' => $request->password
        ],true)) {
            return response(['password'=>'ტელეფონი ან პაროლი არასწორია.']);
        }

        $user = Auth::user();

        return response([
            'status' => "success",
            'user' => [
                'name' => $user->username,
                'isAdmin' => $user->role == 1,
            ]
        ]);

    }

}
