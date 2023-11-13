import React from "react";
import { VehicleFilter, VehicleType } from "../data/vehicles/contracts";
import { VehicleTypeSelect } from "./VehicleTypeSelect";
import { VehicleApi } from "../data/vehicles/api";


interface FilterProps {
    rerenderTable: (filter: VehicleFilter) => void
}


export class Filter extends React.Component<FilterProps> {
    state = {
        title: "",
        type: null
    }

    handleSubstringChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);
        this.setState({title: e.target.value }, () => this.props.rerenderTable(this.state));
    }

    render(): React.ReactNode {
        return (
            <div>
                <h3>Фильтр</h3>
                <div style={{ display: "grid", maxWidth: "60%", margin: "7px" }}>
                    <label htmlFor="vehicleName">Поиск по названию ТС</label>
                    <div style={{ display: "flex" }}>
                        <input type="text"
                            name="vehicleName"
                            id="vehicleName"
                            placeholder="Введите название ТС..."
                            onChange={this.handleSubstringChange}
                        />
                    </div>
                </div>
                <div style={{ display: "grid", maxWidth: "60%", margin: "7px" }}>
                    <label htmlFor="">Поиск по Типу ТС</label>
                    {/* <VehicleTypeSelect value={selectedVehicleType} onChange={this.handleVehicleTypeChange} /> */}
                </div>
            </div>
        );
    }
}
