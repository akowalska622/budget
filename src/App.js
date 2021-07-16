import './index.css';
import { useSelector } from 'react-redux';
import Header from './components/UI/Header';
import MovementsContainer from './components/Movements/MovementsContainer';
import LoginForm from './components/LoginForm/LoginForm';

export default function App() {
  const isLoggedIn = useSelector(state => state.auth.isAuthenticated);

  return (
    <div className='App'>
      <Header />
      <div className='main'>
        {!isLoggedIn && <LoginForm />}
        {isLoggedIn && <MovementsContainer />}
      </div>
    </div>
  );
}
