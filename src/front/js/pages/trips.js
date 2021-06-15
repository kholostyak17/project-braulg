import React, { useContext, useEffect, useState, onSubmit, handleSubmit } from "react";
import { Context } from "../store/appContext";
import tripsImage from "../../img/background-trips.png";
import "../../styles/trips.scss";
import { MyNavbar } from "../component/my-navbar";
import { Footer } from "../component/footer";
import { Link } from "react-router-dom";
import Button from "../component/button.js";
import { TripCard } from "../component/trip-card.js";

export const Trips = () => {
	const { store, actions } = useContext(Context);
	const [tripsMap, setTripsMap] = useState("");
	const ARRAYAUX = [
		{ picture: store.profilePicture, name: "Ricardo" },
		{ picture: store.profilePicture, name: "Ricardo" }
	];
	useEffect(() => {
		actions.getTrips();
	}, []);

	useEffect(() => {
		if (store.trips != undefined || store.trip.user != undefined) {
			setTripsMap(
				store.trips.map((trip, index) => {
					return (
						<TripCard
							key={index.toString()}
							idTrip={trip.id}
							username={ARRAYAUX[1].name}
							userpicture={ARRAYAUX[1].picture}
							country={trip.country}
							cities={trip.cities}
							startDate={trip.start_date}
							endDate={trip.end_date}
							activities={trip.activities}
							partners={ARRAYAUX}
						/>
					);
				})
			);
		}
		console.log(store.trips);
	}, [store.trips]);

	return (
		<>
			<MyNavbar />
			<div className="container-fluid row main-box trips-view">
				<div className="col-sm-12 col-md-5 picture-box">
					<img src={tripsImage} className="picture" />
				</div>
				<div className="col-sm-12 col-md-7 content-box">
					<h1 className="text-center mt-4">Últimos viajes propuestos</h1>
					<div className="d-flex flex-column-reverse">{tripsMap}</div>
				</div>
			</div>
			<Footer />
		</>
	);
};