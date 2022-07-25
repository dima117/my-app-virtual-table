import React, { FC, useRef } from 'react';
import { Column, useTable } from 'react-table';
import { Employee, STUB } from './stub';
import { List, ListRowRenderer, WindowScroller, AutoSizer } from 'react-virtualized';
import 'react-virtualized/styles.css';
import './App.css';

const COLUMNS: Column<Employee>[] = [
    {
        Header: 'Фамилия, Имя',
        accessor: x => (
            <div>
                <span>{x.name}</span>
                <span>@{x.login}</span>
            </div>
        ),
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

    const ref = useRef<WindowScroller>(null);

    const RenderRow: ListRowRenderer = React.useCallback(
        ({ index, style }) => {
            const row = rows[index]
            prepareRow(row)
            return (
                <tr {...row.getRowProps({ style })}>
                    {row.cells.map(cell => {
                        return (
                            <td {...cell.getCellProps()}>
                                {cell.render('Cell')}
                            </td>
                        )
                    })}
                </tr>
            )
        },
        [prepareRow, rows]
    );

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
                <AutoSizer disableHeight>
                    {({width}) => (
                        <WindowScroller ref={ref}>
                            {({ height, isScrolling, onChildScroll, scrollTop }) => (
                                <List
                                    autoHeight
                                    height={height}
                                    isScrolling={isScrolling}
                                    onScroll={onChildScroll}
                                    rowCount={STUB.length}
                                    rowHeight={41}
                                    rowRenderer={RenderRow}
                                    scrollTop={scrollTop}
                                    width={width}
                                />
                            )}
                        </WindowScroller>
                    )}
                </AutoSizer>
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
