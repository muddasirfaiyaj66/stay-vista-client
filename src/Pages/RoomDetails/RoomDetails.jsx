import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Container from "../../components/Container";
import Loader from "../../components/Loader";


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

            {room?.title}
        </Container>
    );
};

export default RoomDetails;