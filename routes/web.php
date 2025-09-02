<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ClientController; 

// This routes for admin panel
Auth::routes();

Route::prefix('admin')->group(function(){
    Route::get('/home', [HomeController::class, 'index'])->name('home');
    Route::get('/client', [ClientController::class, 'index'])->name('clients.index');
    Route::get('/client/create', [ClientController::class, 'create'])->name('clients.create');
    Route::post('/client', [ClientController::class, 'store'])->name('clients.store');
    Route::get('/client/{client}/edit', [ClientController::class, 'edit'])->name('clients.edit');
    Route::put('/client/{client}', [ClientController::class, 'update'])->name('clients.update');
    Route::delete('/client/{client}', [ClientController::class, 'destroy'])->name('clients.destroy');
    
});
