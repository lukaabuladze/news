<?php

namespace App\Http\Requests\Admin;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;

class PostRequest extends FormRequest
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
        $id = $this->segment(4) ?? 0;

        $rules = [
            "category_id" => 'required',
            "title" => 'required|string',
            'content' => 'required|string',
            'is_featured' => 'nullable'
        ];

        if(!$id || $this->hasFile('photo')){
            $rules['photo'] = 'required|image|mimes:jpg,jpeg,png|max:6000';
        }

        return $rules;

    }

    protected function prepareForValidation()
    {
        $this->merge(decodedRequest($this->all()));
    }

    protected function failedValidation(Validator $validator)
    {
        return response()->json($validator->errors())->throwResponse();
    }
}
