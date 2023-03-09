import { QuestionCircleOutlined, HomeOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from "./Navbar.module.css"



const items = [
  {
    label: 'Главная страница',
    key: '/',
    icon: <HomeOutlined />,
  },
  {
    label: 'О сервисе',
    key: '/about',
    icon: <QuestionCircleOutlined />,
  },

];
const Navbar = () => {

  const navigate = useNavigate()

  const [current, setCurrent] = useState('home');
  const onClick = (e) => {
    setCurrent(e.key);
    navigate(e.key)
  };
  return <Menu className={styles.menu} onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
};
export default Navbar;