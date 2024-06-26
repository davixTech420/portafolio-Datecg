<?php

namespace App\Http\Controllers;

use App\Models\Experience;
use Illuminate\Http\Request;

/**
 * Class ExperienceController
 * @package App\Http\Controllers
 */
class ExperienceController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $experiences = Experience::paginate();

        return view('experience.index', compact('experiences'))
            ->with('i', (request()->input('page', 1) - 1) * $experiences->perPage());
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $experience = new Experience();
        return view('experience.create', compact('experience'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        request()->validate(Experience::$rules);

        $experience = Experience::create($request->all());

        return redirect()->route('experiences.index')
            ->with('success', 'Experience created successfully.');
    }

    /**
     * Display the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $experience = Experience::find($id);

        return view('experience.show', compact('experience'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $experience = Experience::find($id);

        return view('experience.edit', compact('experience'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  Experience $experience
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Experience $experience)
    {
        request()->validate(Experience::$rules);

        $experience->update($request->all());

        return redirect()->route('experiences.index')
            ->with('success', 'Experience updated successfully');
    }

    /**
     * @param int $id
     * @return \Illuminate\Http\RedirectResponse
     * @throws \Exception
     */
    public function destroy($id)
    {
        $experience = Experience::find($id)->delete();

        return redirect()->route('experiences.index')
            ->with('success', 'Experience deleted successfully');
    }
}
