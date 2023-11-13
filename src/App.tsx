import React, { useState, useEffect } from "react";
import { Vehicle, VehicleFilter } from "./data/vehicles/contracts";
import { VehicleApi } from "./data/vehicles/api";
import { Filter } from "./components/Filter";
import { Table } from "./components/Table";

const initialFilter: VehicleFilter = {
    title: "",
    type: null,
};

export default function App() {
    const [vehicles, setVehicles] = useState<Vehicle[]>([]);

    useEffect(() => {
        const data = VehicleApi.search(initialFilter);
        setVehicles(data);
    }, []);

    const rerenderTable = (fltr: VehicleFilter) => {
        if (/[^a-zA-Z]+/gm.test(fltr.title)) {
            fltr.title = "";
            alert("Введены некорректные символы. Повторите попытку поиска без них.");
            return false;
        } else {
            setVehicles(VehicleApi.search(fltr));
        }
    }

    return (
        <>
            <Filter rerenderTable={rerenderTable} />
            <Table vehicles={vehicles} />
        </>
    );
}
