import React from 'react'
import { useDispatch } from "react-redux";
import { setCurrentPage } from '../../redux/slices/PaginationSlice'
import { setPageSize } from '../../redux/slices/PaginationSlice';

import { Pagination } from 'antd'
import './Paginator.css'

const Paginator = ({ currentPage, pageSize, totalCount }) => {

    const dispatch = useDispatch()

    const onPageChange = (page) => {
        dispatch(setCurrentPage(page))
    }

    const changeSizeShow = (_, size) => {
        dispatch(setPageSize(size))
    }

    return (
        <div
            className={'paginator_container'}>
            <Pagination
                defaultPageSize={pageSize}
                current={currentPage}
                onChange={onPageChange}
                defaultCurrent={1}
                onShowSizeChange={changeSizeShow}
                total={totalCount} />
        </div>
    )
}

export default Paginator;