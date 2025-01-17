import React from "react";
import { CurrencyLabel } from "@skbkontur/react-ui";
import { PropsTable, PropsTableItem, vehicleTypeTitles } from "../data/vehicles/contracts"


const TableItem: React.FC<PropsTableItem> = ({ vehicle, number }) => {
    return (
        <tr>
            <td>{number}</td>
            <td>{vehicle.title}</td>
            <td>
                <CurrencyLabel value={vehicle.price} fractionDigits={2} />
            </td>
            <td>
                <p className="vehicleTypeTitle">{vehicleTypeTitles[vehicle.type]}</p>
            </td>
        </tr>
    );
};

export const Table: React.FC<PropsTable> = ({ vehicles }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Название</th>
                    <th>Цена, ₽</th>
                    <th>Тип ТС</th>
                </tr>
            </thead>
            <tbody>
                {vehicles.map((x, i) => (
                    <TableItem key={x.id} number={i + 1} vehicle={x} />
                ))}
            </tbody>
        </table>
    );
};
