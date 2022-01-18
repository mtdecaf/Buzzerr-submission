import "./App.scss";
import "./styles/global.scss";

// imported components
import DonutChart from "./components/DonutChart/DonutChart";

function App() {
  const data = [
    { value: 65, label: "University of Toronto" },
    { value: 15, label: "McMaster University" },
    { value: 15, label: "York University" },
    { value: 10, label: "Western University" },
  ];
  return (
    <div className="main">
      <div className="main__sidebar">
        <h2 className="main__sidebar-header">Students with your areas of interest</h2>
        <DonutChart data={data} />
        <ul className="main__legend">
          {/* map out the data label */}
          {data.map((item, key) => (
            <li className={`main__school main__school-${item.label.replace(/\s/g , "-")}`} key={key}>
              <span className={`main__color-bullet main__color-bullet-${item.label.replace(/\s/g , "-")}`}></span>
              <span className="main__legend-text">{item.label}</span>
              <span className="main__legend-percentage">{item.value}%</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;