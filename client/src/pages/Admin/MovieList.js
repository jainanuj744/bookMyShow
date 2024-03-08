import { Table, message } from 'antd'
import Button from '../../components/Button';
import MovieForm from './MovieForm';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { DeleteMovie, GetAllMovies } from '../../apicalls/movies';
import { HideLoading, ShowLoading } from '../../redux/loadersSlice';


function MovieList() {

    const [movies, setMovies] = React.useState([])
    const [showMovieFormModal, setShowMovieFormModal] = React.useState(false);
    const [selectedMovie, setSelectedMovie] = React.useState(null);
    const [formType, setFormType] = React.useState('add');

    const dispatch = useDispatch();

    const getData = async () => {
        try {
            dispatch(ShowLoading());
            const response = await GetAllMovies();
            if (response.success) {
                setMovies(response.data)
            } else {
                message.error(response.message);
            }
            dispatch(HideLoading());
        }
        catch (error) {
            dispatch(HideLoading());
            message.error(error.message);
        }
    }

    const handleDelete = async(movieId)=>{
        try{
            dispatch(ShowLoading());
            const response = await DeleteMovie({
                movieId
            });
            if (response.success) {
                message.success(response.message);
                getData();
            } else {
                message.error(response.message);
            }
            dispatch(HideLoading());
        }
        catch(error){
            dispatch(HideLoading());
            message.error(error.message);
        }
    }

    const columns = [
        {
            title: 'Poster',
            dataIndex: 'poster',
            render: (text, record) => {
                return (
                  <img
                    src={record.poster}
                    alt="poster"
                    height="60"
                    width="80"
                    className="br-1"
                  />
                );
              },
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
            render:(text,record)=>{
                return(
                    <div className='flex gap-1'>
                        <i className="ri-delete-bin-line cursor-pointer"
                        onClick={()=>{
                            handleDelete(record._id)
                        }}
                        >
                        </i>
                        <i className="ri-pencil-line cursor-pointer" 
                        onClick={()=>{
                            setSelectedMovie(record)
                            setFormType("edit")
                            setShowMovieFormModal(true)
                        }}
                        >
                        </i>
                    </div>
                )
            }
        },
    ];

    useEffect(() => {
        getData();
    }, [])


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
                    getData={getData}
                />
            }
        </div>
    )

}

export default MovieList