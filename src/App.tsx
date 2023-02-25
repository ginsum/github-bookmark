import Root from './routes';
import './App.css';
import Layout from './components/Layout';
import NavBar from './components/Navbar';

function App() {
  return (
    <Layout>
      <NavBar />
      <Root />
    </Layout>
  );
}

export default App;
