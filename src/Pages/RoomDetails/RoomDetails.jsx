import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Container from "../../components/Container";
import Loader from "../../components/Loader";
import { Helmet } from "react-helmet-async";


const RoomDetails = () => {
    const {id}=useParams()
    const [room,setRoom]=useState({})
    const [loading,setLoading]=useState(true)
    //fetching room details
    useEffect(()=>{
        fetch('/rooms.json')
        .then(res=> res.json())
        .then(data=>{
            const findRoomData = data.find(item=> item._id === id)

            setRoom(findRoomData)
            setLoading(false)
        })

    },[id])
    if(loading) return <Loader></Loader>
    return (
        <Container>

            <Helmet>
                <title>{room?.title}</title>
            </Helmet>
            <div className="flex flex-col gap-6">
                <div className="">Heading</div>
                <div className="">body</div>
                <div className="">Calender</div>
            </div>
        </Container>
    );
};

export default RoomDetails;