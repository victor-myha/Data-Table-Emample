import React, { useState } from 'react';
import classnames from 'classnames';
import { usePagination, DOTS } from './usePagination';
import './DataTable.scss';
import './pagination.scss';
import { useDispatch } from 'react-redux';

const Pagination = (props) => {
    const dispatch = useDispatch();

    const {
        onPageChange,
        totalCount,
        siblingCount = 1,
        currentPage,
        pageSize,
        className
    } = props;

    const paginationRange = usePagination({
        currentPage,
        totalCount,
        siblingCount,
        pageSize
    });

    if (currentPage === 0 || paginationRange.length < 2) {
        return null;
    }

    const onNext = () => {
        onPageChange(currentPage + 1);
    };

    const onPrevious = () => {
        onPageChange(currentPage - 1);
    };

    let lastPage = paginationRange[paginationRange.length - 1];

    const handleChange = (e) => {
        const value = Number(e.target.value)
        console.log('e.target.value',value);
        //dispatch({type: '', PageSize: value})
        //setSelectValue(value);
        props.setPageSize(value);
        props.setCurrentPage(1);
      }
    return (
        <div className='paginationWrap'>
            <div>
                {props.totalCount} hotels
            </div>

            <div>
                <ul
                    className={classnames('pagination-container', { [className]: className })}
                >
                    <li
                        className={classnames('pagination-item', {
                            disabled: currentPage === 1
                        })}
                        onClick={onPrevious}
                    >
                        <div className="arrow left" />
                    </li>
                    {paginationRange.map(pageNumber => {
                        if (pageNumber === DOTS) {
                            return <li className="pagination-item dots">&#8230;</li>;
                        }

                        return (
                            <li
                                className={classnames('pagination-item', {
                                    selected: pageNumber === currentPage
                                })}
                                onClick={() => onPageChange(pageNumber)}
                            >
                                {pageNumber}
                            </li>
                        );
                    })}
                    <li
                        className={classnames('pagination-item', {
                            disabled: currentPage === lastPage
                        })}
                        onClick={onNext}
                    >
                        <div className="arrow right" />
                    </li>
                </ul>
            </div>

            <div>
                Hotels per page
                <select name="select" onChange={handleChange} value={props.pageSize}> 
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                </select>
            </div>
        </div>
    );
};

export default Pagination;
