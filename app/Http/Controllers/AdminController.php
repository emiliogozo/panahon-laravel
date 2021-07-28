<?php

namespace App\Http\Controllers;

use App\Models\ObservationsStation;
use Illuminate\Http\Request;

class AdminController extends Controller
{
    public function __construct() {
        $this->middleware('auth');
        $this->middleware('role:ADMIN');
    }

    public function index() {
        return view('admin.home');
    }

}