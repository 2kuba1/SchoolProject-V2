<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Contacts; // Assuming Contact is the name of the model used to interact with the contacts table

class ContactController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'email' => 'required|email',
            'message' => 'required',
        ]);
       
        return Contacts::create($request->all());
    }
}