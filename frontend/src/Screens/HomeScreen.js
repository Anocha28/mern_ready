import React,{useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {listPage} from '../Actions/PageActions'

const HomeScreen = () => {
    const dispatch = useDispatch()

    const {loading, error, pages} = useSelector(state=>state.pageList)

    useEffect(()=>{
        dispatch(listPage())
    },[dispatch])

    return (
        <>
            <h1>Home Screen</h1>
            {loading ? <h1>Loading...</h1> :
            error ? <p>{error}</p> :
            pages.length === 0 ? <h1>No pages to show</h1> :
            pages.map(itm=>(
                <div key={itm._id}>
                    <h1 >{itm.item}</h1>
                </div>
            ))
            }
        </>
    )
}

export default HomeScreen
