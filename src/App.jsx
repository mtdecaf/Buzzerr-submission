import "./App.scss";
import "./styles/global.scss";

// imported components
import DonutChart from "./components/DonutChart/DonutChart";
import SchoolCard from "./components/SchoolCard/SchoolCard";

// imported images
import DianaLansdowne from "./assets/images/Diana-Lansdowne.png";
import GypsyHardinge from "./assets/images/Gypsy-Hardinge.png";
import KlavdiaDedova from "./assets/images/Klavdia-Dedova.png";
import MarianoRasgado from "./assets/images/Mariano-Rasgado.png";


function App() {
  const data = [
    { value: 65, label: "University of Toronto" },
    { value: 15, label: "McMaster University" },
    { value: 15, label: "York University" },
    { value: 10, label: "Western University" },
  ];

  const studentData = [
    {
      profileImage: GypsyHardinge,
      name: "Gypsy Hardinge",
      field: "Engineering",
      fieldColor: "#2BCBBA",
      mutualInterests: 3,
    },
    {
      profileImage: DianaLansdowne,
      name: "Diane Lansdowne",
      field: "Science",
      fieldColor: "#3867D6",
      mutualInterests: 3,
    },
    {
      profileImage: KlavdiaDedova,
      name: "Klavdia Dedova",
      field: "Architecture",
      fieldColor: "#F1C40F",
      mutualInterests: 3,
    },
    {
      profileImage: MarianoRasgado,
      name: "Mariano Rasgado",
      field: "Law",
      fieldColor: "#E74C3C",
      mutualInterests: 3,
    },
  ];

  return (
    <div className="main">
      <section className="main__sidebar">
        <h2 className="main__sidebar-header">
          Students with your areas of interest
        </h2>
        <DonutChart data={data} />
        <ul className="main__legend">
          {/* map out the data label */}
          {data.map((item, key) => (
            <li
              className={`main__school main__school-${item.label.replace(
                /\s/g,
                "-"
              )}`}
              key={key}
            >
              <span
                className={`main__color-bullet main__color-bullet-${item.label.replace(
                  /\s/g,
                  "-"
                )}`}
              ></span>
              <span className="main__legend-text">{item.label}</span>
              <span className="main__legend-percentage">{item.value}%</span>
            </li>
          ))}
        </ul>
      </section>
      <section className="content">
        <div className="content__header-wrap">
          <h1 className="content__title">
            <span className="content__title--colored">Buzz Away... </span>
            Expand You Network
          </h1>
          <form className="content__search-bar" action="">
            <img className="content__search-bar-icon" src="https://img.icons8.com/ios-glyphs/60/000000/search--v1.png" />
            <input className="content__search-bar-input" type="text" placeholder="Search" />
          </form>
        </div>
        {/* map out a SchoolCard for each school data */}
        {data.map((item, key) => (
          <SchoolCard data={item} studentData={studentData} key={key} />
        ))}
        {/* <SchoolCard studentData={studentData} /> */}
      </section>
    </div>
  );
}

export default App;
