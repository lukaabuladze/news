<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Str;

function decodedRequest(array $data) :array
{
    array_walk($data, function (&$value, $key) {
        if ($value === '""') $value = null;
        else if (!Str::contains($key, ['image', 'photo', 'file']) && !is_array($value)) $value = json_decode($value, true);
        if(Str::contains($key,'decode') && is_array($value)) {
            array_walk_recursive($value, function (&$item, $index) {
                if ($item === '""') $value = null;
                if($index !== 'file' || is_string($item)) $item = json_decode($item, true);
            });
        }
    });

    return $data;
}

function uploadFile(string $path, $file): string
{
    $file_name = md5(uniqid(rand(), true)) . '.' . $file->getClientOriginalExtension();
    $file->move(public_path($path), $file_name);
    return "$path/" . $file_name;
}

function deleteFile(?string $path = null)
{
    if ($path && file_exists(public_path($path))) {
        @unlink(public_path($path));
    }
}
