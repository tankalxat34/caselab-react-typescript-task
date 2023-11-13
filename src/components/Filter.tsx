import React from "react";
import { Vehicle, VehicleType } from "../data/vehicles/contracts";
import { VehicleTypeSelect } from "./VehicleTypeSelect";

export class Filter extends React.Component {
    state = {
        selectedVehicleType: -1 as VehicleType, // Изначально выбрано "Все"
    };

    handleVehicleTypeChange = (value: VehicleType | null) => {
        this.setState({ selectedVehicleType: value != null ? value : -1 });
    };

    render(): React.ReactNode {
        const { selectedVehicleType } = this.state;

        return (
            <div>
                <h3>Фильтр</h3>
                <div style={{ display: "grid", maxWidth: "60%", margin: "7px" }}>
                    <label htmlFor="vehicleName">Поиск по названию ТС</label>
                    <div style={{ display: "flex" }}>
                        <input type="text" name="vehicleName" id="vehicleName" placeholder="Введите название ТС..." />
                        <button>Найти</button>
                    </div>
                </div>
                <div style={{ display: "grid", maxWidth: "60%", margin: "7px" }}>
                    <label htmlFor="">Поиск по Типу ТС</label>
                    <VehicleTypeSelect value={selectedVehicleType} onChange={this.handleVehicleTypeChange} />
                </div>
            </div>
        );
    }
}
