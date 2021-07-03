<?php

namespace App\Http\Requests\Admin;

use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;

class ProfileUpdateRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        $id = Auth::user()->id;

        $rules = [
            'username' => 'required|string',
            'phone' => 'required|digits:9|starts_with:5|unique:users,phone,'.$id,
            'email' => 'required|email|unique:users,email,'.$id,
        ];

        if($this->password){
            $rules['password'] = 'required|string|min:8';
        }

        return $rules;

    }

    protected function failedValidation(Validator $validator)
    {
        return response()->json($validator->errors())->throwResponse();
    }
}
