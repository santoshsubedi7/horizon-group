<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

// Catch-all route for Vue Router (after all other routes!)
Route::get('/{any}', function () {
    return view('app'); // or 'index', whatever your main blade file is
})->where('any', '.*');
