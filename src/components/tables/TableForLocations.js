import React from 'react';
import dateFormat from "dateformat";
import s from './Table.module.css'

export default function Table({ sortData, data }) {

    return (
        <div className={s.table}>
            <table className={s.iksweb}>
                <thead>
                    <tr>
                        <th onClick={() => { sortData('id') }}>id</th>
                        <th onClick={() => { sortData('name') }}>Name</th>
                        <th onClick={() => { sortData('type') }}>Type</th>
                        <th onClick={() => { sortData('dimension') }}>Dimension</th>
                        <th onClick={() => { sortData('created') }}>Created</th>
                    </tr>
                </thead>

                <tbody>
                    {data.map(row =>
                    (<tr key={row.id}>
                        <td>
                            {row.id}
                        </td>
                        <td>
                            {row.name}
                        </td>
                        <td>
                            {row.type}
                        </td>
                        <td>
                            {row.dimension}
                        </td>
                        <td>
                            {dateFormat(row.created, "dd-mm-yyyy")}
                        </td>
                    </tr>))
                    }
                </tbody>
            </table>
        </div>
    );
};