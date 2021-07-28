@extends('layouts.app')

@section('content')
<div class="container" x-data="userForm()">
    @if(Session::has('success'))
        <div class="alert alert-success text-center">
            {{Session::get('success')}}
        </div>
    @endif

    <div class="table-title">
        <div class="row">
            <div class="col-sm-8"><h2>User <b>Details</b></h2></div>
            @auth
            @if (Auth::user()->hasRole('SUPERADMIN'))
            <div class="col-sm-4">
                <a class="btn btn-info add-new" href="{{ url('users/create') }}" user="button"><i class="fa fa-plus"></i> Add New</a>
            </div>
            @endif
            @endauth
        </div>
    </div>
    <table class="table table-bordered table-hover">
        <thead>
            <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Roles</th>
            @auth
            @if (Auth::user()->hasRole('SUPERADMIN'))
            <th scope="col">Action</th>
            @endif
            @endauth
            </tr>
        </thead>
        <tbody>
        @foreach($users as $user)
            <tr>
            <th scope="row">{{ $user->id }}</th>
            <td>{{ $user->name }}</td>
            <td>{{ $user->roleList }}</td>
            @auth
            @if (Auth::user()->hasRole('SUPERADMIN'))
            <td>
                {{-- <a class="add" title="Add" data-toggle="tooltip"><i class="fas fa-plus-square">&#xE03B;</i></a> --}}
                <a class="edit" title="Edit" data-bs-toggle="tooltip" href="{{ url('users/'.$user->id.'/edit') }}"><i class="fas fa-edit">&#xE254;</i></a>
                <a class="delete" title="Delete" data-bs-toggle="tooltip" @click="deleteUser({{ $user->id }})"><i class="fas fa-trash">&#xE872;</i></a>
            </td>
            @endif
            @endauth
            </tr>
        @endforeach
        </tbody>
    </table>

    <div>
        <!-- For Default pagination user -->
        {{-- <div>{{ $users->links() }}</div> --}}

        <!-- For Custom pagination User -->
        <div>{{ $users->links('components.pagination') }}</div>
    </div>

    <!-- Modal -->
    @auth
    @if (Auth::user()->hasRole('SUPERADMIN'))
    <div class="x-modal" x-cloak x-show="modalIsVisible" tabindex="-1" aria-labelledby="deleteModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Confirm delete</h5>
                    <button type="button" class="btn-close" @click="closeModal()" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    Are you sure you want to delete this user?
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" @click="closeModal()">Close</button>
                    <form x-bind:action="`{{ url('users') }}/${user.id}`" method="post">
                        @csrf
                        @method('DELETE')
                        <button class="btn btn-danger" type="submit">Delete</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
    @endif
    @endauth
</div>
@endsection