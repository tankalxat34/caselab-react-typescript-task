import React from "react";
import { VehicleFilter, VehicleType } from "../data/vehicles/contracts";
import { VehicleTypeSelect } from "./VehicleTypeSelect";


interface FilterProps {
    rerenderTable: (filter: VehicleFilter) => void
}


export class Filter extends React.Component<FilterProps> {
    state = {
        title: "",
        type: null,
    }

    localRender = () => this.props.rerenderTable(this.state);

    handleSubstringChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ title: e.target.value }, this.localRender);
    }

    handleTypeChange = (newType: number | null) => {
        this.setState({ type: newType }, this.localRender);
    }

    render(): React.ReactNode {
        return (
            <div>
                <h3>Фильтр</h3>
                <div style={{ display: "grid", maxWidth: "60%", margin: "7px" }}>
                    <label htmlFor="vehicleName">Поиск по названию ТС</label>
                    <input type="text"
                        name="vehicleName"
                        id="vehicleName"
                        placeholder="Введите название ТС..."
                        onChange={this.handleSubstringChange}
                    />
                </div>
                <div style={{ display: "grid", maxWidth: "60%", margin: "7px" }}>
                    <label htmlFor="">Поиск по Типу ТС</label>
                    <VehicleTypeSelect value={this.state.type || -1 as VehicleType} onChange={this.handleTypeChange} />
                </div>
            </div>
        );
    }
}
