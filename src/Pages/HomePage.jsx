import React, {useEffect} from 'react'
import NewsList from '../Components/NewsList/NewsList';
import { useSelector, useDispatch } from 'react-redux';
import { fetchNewsList } from '../redux/slices/NewsSlice';
import { usePageNews } from '../hooks/usePageNews';
import Loader from '../UI/Navbar/Loader/Loader';
import Paginator from '../Components/Pagination/Pagination';




import { SearchOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import "../Styles/global.css"




const Home = () => {

  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.pagination.currentPage)
  const totalCountNews = useSelector((state) => state.pagination.totalCountNews)
  const pageSize = useSelector((state) => state.pagination.pageSize)
  const { news, statusNews } = useSelector((state) => state.news)

  const currentPageNews = usePageNews(currentPage, pageSize, news)



  const rebootNewsList = () => {
    dispatch(fetchNewsList())
    window.scrollTo(0, 0)
  }
  

  useEffect(() => {
    rebootNewsList()
  }, [])



  return (
    <>

      {statusNews === 'error'
        ? <h3 className='loadingText'>Не удалось получить данные с сервера :( </h3>
        : <div> {statusNews === 'loading'
          ? <><h2 className='loadingText'>Пожалуйста, подождите,<br /> идёт загрузка новостей...</h2>
            <div className="Loader"> <Loader /> </div></>
          : <NewsList title='Самые свежие новости со всего мира' currentPageNews={currentPageNews} />}</div>
      }

      <div className='reboot'>
        <Button className='rebootButton' type="primary" onClick={rebootNewsList} icon={<SearchOutlined />}>Обновить новостную ленту</Button>
      </div>
      <Paginator currentPage={currentPage} pageSize={pageSize} totalCount={totalCountNews} />




    </>
  )
}
export default Home