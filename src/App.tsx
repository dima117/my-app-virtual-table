import React, { FC } from 'react';
import { Column, useTable } from 'react-table';
import { Employee, STUB } from './stub';
import './App.css';

const COLUMNS: Column<Employee>[] = [
    {
        Header: 'Фамилия, Имя',
        accessor: x => (
            <div>
                <span>{x.name}</span>
                <span>@{x.login}</span>
            </div>
        )
    },
    {
        Header: 'Column 2',
        accessor: x => <span>{x.salary}₽</span>,
    },
];

export const App: FC = () => {
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({
        columns: COLUMNS,
        data: STUB,
    });

    return (<div className='container'>
        <h1>qwfqwefqwef</h1>
        <p>qwg4rt4yt</p>
        <p>qwg4rt4yt</p>
        <p>qwg4rt4yt</p>
        <p>qwg4rt4yt</p>
        <table className="table" {...getTableProps()}>
            <thead>
                {// Loop over the header rows
                    headerGroups.map(headerGroup => (
                        // Apply the header row props
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {// Loop over the headers in each row
                                headerGroup.headers.map(column => (
                                    // Apply the header cell props
                                    <th {...column.getHeaderProps()}>
                                        {// Render the header
                                            column.render('Header')}
                                    </th>
                                ))}
                        </tr>
                    ))}
            </thead>
            {/* Apply the table body props */}
            <tbody {...getTableBodyProps()}>
                {// Loop over the table rows
                    rows.map(row => {
                        // Prepare the row for display
                        prepareRow(row)
                        return (
                            // Apply the row props
                            <tr {...row.getRowProps()}>
                                {// Loop over the rows cells
                                    row.cells.map(cell => {
                                        // Apply the cell props
                                        return (
                                            <td {...cell.getCellProps()}>
                                                {// Render the cell contents
                                                    cell.render('Cell')}
                                            </td>
                                        )
                                    })}
                            </tr>
                        )
                    })}
            </tbody>
        </table>
        <p>qwg4rt4yt</p>
        <p>qwg4rt4yt</p>
        <p>qwg4rt4yt</p>
        <p>qwg4rt4yt</p>
        <p>qwg4rt4yt</p>
        <p>qwg4rt4yt</p>
        <p>qwg4rt4yt</p>
        <p>qwg4rt4yt</p>
        <p>qwg4rt4yt</p>
        <p>qwg4rt4yt</p>
        <p>qwg4rt4yt</p>
        <p>qwg4rt4yt</p>
        <p>qwg4rt4yt</p>
        <p>qwg4rt4yt</p>
        <p>qwg4rt4yt</p>
        <p>qwg4rt4yt</p>
        <p>qwg4rt4yt</p>
        <p>qwg4rt4yt</p>
        <p>qwg4rt4yt</p>
        <p>qwg4rt4yt</p>
        <p>qwg4rt4yt</p>
        <p>qwg4rt4yt</p>
        <p>qwg4rt4yt</p>
        <p>qwg4rt4yt</p>
        <p>qwg4rt4yt</p>
        <p>qwg4rt4yt</p>
        <p>qwg4rt4yt</p>
        <p>qwg4rt4yt</p>
        <p>qwg4rt4yt</p>
        <p>qwg4rt4yt</p>
        <p>qwg4rt4yt</p>
        <p>qwg4rt4yt</p>
        <p>qwg4rt4yt</p>
        <p>qwg4rt4yt</p>
        <p>qwg4rt4yt</p>
        <p>qwg4rt4yt</p>
        <p>qwg4rt4yt</p>
        <p>qwg4rt4yt</p>
        <p>qwg4rt4yt</p>
        <p>qwg4rt4yt</p>
        <p>qwg4rt4yt</p>
        <p>qwg4rt4yt</p>
        <p>qwg4rt4yt</p>
        <p>qwg4rt4yt</p>
        <p>qwg4rt4yt</p>
        <p>qwg4rt4yt</p>
        <p>qwg4rt4yt</p>
        <p>qwg4rt4yt</p>
        <p>qwg4rt4yt</p>
        <p>qwg4rt4yt</p>
        <p>qwg4rt4yt</p>
        <p>qwg4rt4yt</p>
        <p>qwg4rt4yt</p>
        <p>qwg4rt4yt</p>
        <p>qwg4rt4yt</p>
        <p>qwg4rt4yt</p>
        <p>qwg4rt4yt</p>
        <p>qwg4rt4yt</p>
        <p>qwg4rt4yt</p>
        <p>qwg4rt4yt</p>
        <p>qwg4rt4yt</p>
        <p>qwg4rt4yt</p>
        <p>qwg4rt4yt</p>
        <p>qwg4rt4yt</p>
        <p>qwg4rt4yt</p>
        <p>qwg4rt4yt</p>
        <p>qwg4rt4yt</p>
        <p>qwg4rt4yt</p>
        <p>qwg4rt4yt</p>
        <p>qwg4rt4yt</p>
        <p>qwg4rt4yt</p>
        <p>qwg4rt4yt</p>
        <p>qwg4rt4yt</p>
        <p>qwg4rt4yt</p>
        <p>qwg4rt4yt</p>
        <p>qwg4rt4yt</p>
        <p>qwg4rt4yt</p>
        <p>qwg4rt4yt</p>
        <p>qwg4rt4yt</p>
        <p>qwg4rt4yt</p>

    </div>
    );
}

export default App;
