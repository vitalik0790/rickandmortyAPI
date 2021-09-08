import React from 'react';
import s from './Table.module.css'

export default function Table({ sortData, data }) {

    return (
        <div className={s.table}>
            <table className={s.iksweb}>
                <thead>
                    <tr>
                        <th onClick={() => { sortData('id') }}>id</th>
                        <th onClick={() => { sortData('name') }}>Name</th>
                        <th onClick={() => { sortData('air_date') }}>Air Date</th>
                        <th onClick={() => { sortData('episode') }}>Episode</th>
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
                            {row.air_date}
                        </td>
                        <td>
                            {row.episode}
                        </td>
                        <td>
                            {row.created}
                        </td>
                    </tr>))
                    }
                </tbody>
            </table>
        </div>
    );
};