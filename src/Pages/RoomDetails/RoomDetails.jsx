import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Container from "../../components/Container";
import Loader from "../../components/Loader";
import { Helmet } from "react-helmet-async";
import Header from "../../components/RoomDetails/Header";
import RoomInfo from "../../components/RoomDetails/RoomInfo";
import Calender from "../../components/RoomDetails/Calender";
import RoomReservation from "../../components/RoomDetails/RoomReservation";


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
          <div className="max-w-screen-lg mx-auto">
              <div className="flex flex-col gap-6">
                <Header room={room}></Header>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-7 md:gap-10 mt-10">

                    <RoomInfo  room={room}></RoomInfo>
                    <div className="md:col-span-3 order-first md:order-last mb-10 "> 
                    <RoomReservation room={room}></RoomReservation>
                    </div>
                </div>
               
            
          </div>
        </Container>
    );
};

export default RoomDetails;