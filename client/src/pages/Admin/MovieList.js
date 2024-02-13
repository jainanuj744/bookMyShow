import { Table } from 'antd'
import Button from '../../components/Button';
import MovieForm from './MovieForm';
import React, { useEffect } from 'react';

function MovieList() {

    const [movies, setMovies ] = React.useState([])
    const [showMovieFormModal, setShowMovieFormModal] = React.useState(false);
    const [selectedMovie, setSelectedMovie] = React.useState(null);
    const [formType, setFormType] = React.useState('add');

    const columns = [
        {
            title: 'Poster',
            dataIndex: 'poster',
            key: 'name',
        },
        {
            title: 'Name',
            dataIndex: 'title',
        },
        {
            title: 'Description',
            dataIndex: 'description',
        },
        {
            title: 'Duration',
            dataIndex: 'duration',
        },
        {
            title: 'Genre',
            dataIndex: 'genre',
        },
        {
            title: 'Language',
            dataIndex: 'language',
        },
        {
            title: 'Release Date',
            dataIndex: 'releaseDate',
        },
        {
            title: 'Action',
            dataIndex: 'action',
        },
    ];


    return (
        <div>
            <div className='flex justify-end mb-1'>
                <Button
                    title="Add Movie"
                    variant="outlined"
                    onClick={() => {
                        setShowMovieFormModal(true);
                        setFormType("add");
                      }}
                />
            </div>
            <Table dataSource={movies} columns={columns} />
            {showMovieFormModal &&
                <MovieForm
                    showMovieFormModal={showMovieFormModal}
                    setShowMovieFormModal={setShowMovieFormModal}
                    selectedMovie={selectedMovie}
                    setSelectedMovie={setSelectedMovie}
                    formType={formType}
                />
            }
        </div>
    )

}

export default MovieList