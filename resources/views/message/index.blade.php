@extends('adminlte::page')

@section('template_title')
    Message
@endsection

@section('content')
    <div class="container-fluid">
        <div class="row">
            <div class="col-sm-12">
                <div class="card">
                    <div class="card-header">
                        <div style="display: flex; justify-content: space-between; align-items: center;">

                            <span id="card_title">
                                {{ __('Message') }}
                            </span>

                             <div class="float-right">
                                <a href="{{ route('messages.create') }}" class="btn btn-primary btn-sm float-right"  data-placement="left">
                                  {{ __('Create New') }}
                                </a>
                              </div>
                        </div>
                    </div>
                    @if ($message = Session::get('success'))
                        <div class="alert alert-success">
                            <p>{{ $message }}</p>
                        </div>
                    @endif

                    <div class="card-body">
                        <div class="table-responsive">
                            <table class="table table-striped table-hover">
                                <thead class="thead">
                                    <tr>
                                        <th>No</th>
                                        
										<th>Name Sender</th>
										<th>Mail Sender</th>
										<th>Body Sender</th>
										<th>Phone</th>

                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    @foreach ($messages as $message)
                                        <tr>
                                            <td>{{ ++$i }}</td>
                                            
											<td>{{ $message->name_sender }}</td>
											<td>{{ $message->mail_sender }}</td>
											<td>{{ $message->body_sender }}</td>
											<td>{{ $message->phone }}</td>

                                            <td>
                                                <form action="{{ route('messages.destroy',$message->id) }}" method="POST">
                                                    <a class="btn btn-sm btn-success" href="{{ route('messages.edit',$message->id) }}"><i class="fa fa-fw fa-edit"></i> {{ __('Edit') }}</a>
                                                    @csrf
                                                    @method('DELETE')
                                                    <button type="submit" class="btn btn-danger btn-sm"><i class="fa fa-fw fa-trash"></i> {{ __('Delete') }}</button>
                                                </form>
                                            </td>
                                        </tr>
                                    @endforeach
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                {!! $messages->links() !!}
            </div>
        </div>
    </div>
@endsection
