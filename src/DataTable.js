import React, { useEffect, useMemo, useState } from 'react';
import DataTable from 'react-data-table-component-with-filter';
import './DataTable.scss'
import Pagination from './Pagination';

const apiData = [
    { id: 1, title: 'Victor', year: '2002', age: 17 },
    { id: 2, title: 'Dimon', year: '2003', age: 18 },
    { id: 3, title: 'Sasha', year: '2006', age: 19 },
    { id: 4, title: 'Nastia', year: '2007', age: 16 },
    { id: 5, title: 'Dimon', year: '2003', age: 18 },
    { id: 6, title: 'Sasha', year: '2006', age: 19 },
    { id: 7, title: 'Victor', year: '2002', age: 17 },
    { id: 8, title: 'Dimon', year: '2003', age: 18 },
    { id: 9, title: 'Sasha', year: '2006', age: 19 },
    { id: 10, title: 'Victor', year: '2002', age: 17 },
    { id: 11, title: 'Dimon', year: '2003', age: 18 },
    { id: 12, title: 'Sasha', year: '2006', age: 19 },
];
const columns = [
    {
        name: 'Title',
        selector: 'title',
        sortable: true,
        filterable: false,
    },
    {
        name: 'Age',
        selector: 'age',
        sortable: true,
        right: true,
    },
    {
        name: 'Year',
        selector: 'year',
        sortable: true,
        right: true,
    },
    {
        name: 'Status',
        right: true,
        cell: row => <div data-tag="allowRowEvents"><div style={{ fontWeight: 'bold' }}>...</div></div>,
    },
];

const customStyles = {
    rows: {
        style: {
            minHeight: '72px', // override the row height
            backgroundColor: 'yellow',
            fontSize: 20
        }
    },
    headCells: {
        style: {
            paddingLeft: '1vw', // override the cell padding for head cells
            paddingRight: '1vw',
            paddingBottom: '3vw',
            backgroundColor: 'red',
            fontSize: 25,
            fontWeight: 'bold'
        },
    },
    cells: {
        style: {
            paddingLeft: '8px', // override the cell padding for data cells
            paddingRight: '8px',
        },
    },
};

const MyComponent = () => {
    // const [data, setData] = useState(apiData);

    // let CustomPagination = () => {
    //     const UsersPerPage = () => {

    //     }

    //     return (
    //         <div className='paginationWrap'>
    //             <div>{data.length} hotels</div>
    //             <div> 1 2 3 4 5</div>
    //             <div>
    //                 <button >1</button>
    //                 <button>2</button>
    //                 <button onClick={UsersPerPage}>3</button>
    //             </div>
    //         </div>
    //     )
    // }
    const [tableData, setTableData] = [{ id: 4, title: 'Nastia', year: '2007', age: 16 }]

    let PageSize = 4;
    const [currentPage, setCurrentPage] = useState(1);

    const currentTableData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return apiData.slice(firstPageIndex, lastPageIndex);
    }, [currentPage]);

    // useEffect(() => {
    //     // for (let i = 0; i < PageSize; i++) {
    //     //     const smth = tableData.push(apiData[i])
    //     //     console.log('---smth---', smth); 
    //     // }
    //     let filteredArr = apiData.filter(item=>item.id<PageSize);
    //     setTableData(filteredArr)
    // }, [])
    return (
        <div>
            <DataTable
                data={currentTableData}
                columns={columns}
                customStyles={customStyles}
                pagination
                //paginationPerPage={paginationPerPage}
                // paginationRowsPerPageOptions={[1,2,3,4,5,6]}
                paginationComponent={()=><Pagination
                    className="pagination-bar"
                    currentPage={currentPage}
                    totalCount={apiData.length}
                    pageSize={PageSize}
                    onPageChange={page => setCurrentPage(page)}
                />}
            />
        </div>
    );
}


export default MyComponent;