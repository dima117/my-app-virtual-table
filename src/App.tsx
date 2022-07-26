import React, { FC, useRef } from 'react';
import { Column, useTable, useBlockLayout } from 'react-table';
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
        width: 400,
    },
    {
        Header: 'Сумма',
        accessor: x => <span>{x.salary}₽</span>,
        width: 140,
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
    }, useBlockLayout);

    const ref = useRef<WindowScroller>(null);

    const RenderRow: ListRowRenderer = React.useCallback(
        ({ index, style }) => {
            const row = rows[index];
            prepareRow(row);
            return (
                <div {...row.getRowProps({ style })}>
                    {row.cells.map(cell => {
                        return (
                            <div {...cell.getCellProps()}>
                                {cell.render('Cell')}
                            </div>
                        )
                    })}
                </div>
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
        <div className="card">
            <div className="card-body">
                <div {...getTableProps()}>
                    <div className="thead">
                        {
                            // Loop over the header rows
                            headerGroups.map(headerGroup => (
                                // Apply the header row props
                                <div {...headerGroup.getHeaderGroupProps()}>
                                    {// Loop over the headers in each row
                                        headerGroup.headers.map(column => (
                                            // Apply the header cell props
                                            <div {...column.getHeaderProps()}>
                                                {// Render the header
                                                    column.render('Header')}
                                            </div>
                                        ))}
                                </div>
                            ))
                        }
                    </div>
                    {/* Apply the table body props */}
                    <div {...getTableBodyProps()}>
                        <AutoSizer disableHeight>
                            {({ width }) => (
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
                    </div>
                </div>
            </div>
        </div>

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
