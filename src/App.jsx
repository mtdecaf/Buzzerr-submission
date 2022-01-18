import './App.scss';
import './styles/global.scss';

// imported components
import DonutChart from './components/DonutChart/DonutChart';

function App() {
  const data = [
    { value: 65, key: 'University of Toronto' },
    { value: 15, key: 'McMaster University' },
    { value: 15, key: 'York University' },
    { value: 10, key: 'Western University' },
  ];
  return (
    <div className="App">
      <DonutChart data={data} />
    </div>
  );
}

export default App;
