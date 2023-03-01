import Root from './routes';
import Layout from './components/Layout';
import NavBar from './components/Navbar';
import './App.css';

function App() {
  return (
    <Layout>
      <NavBar />
      <Root />
    </Layout>
  );
}

export default App;
