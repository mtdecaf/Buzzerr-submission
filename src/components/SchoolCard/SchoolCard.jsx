import "./SchoolCard.scss"

import ProfileCard from "../ProfileCard/ProfileCard";

const SchoolCard = ({ studentData }) => {
    console.log (studentData);
    return(
        <div className="school-card">
            <div className="school-card__header">
                <h2 className="school-card__title">Placeholder</h2>
                <div className="school-card__menu">
                    <span className="school-card__menu-button school-card__menu-visibility"><img className="school-card__menu-icon" src="https://img.icons8.com/material-outlined/24/000000/visible--v1.png"/></span>
                    <span className="school-card__menu-button school-card__menu-left"><img className="school-card__menu-icon" src="https://img.icons8.com/material-sharp/24/000000/chevron-left.png"/></span>
                    <span className="school-card__menu-button school-card__menu-right"><img className="school-card__menu-icon" src="https://img.icons8.com/material-sharp/24/000000/chevron-right.png"/></span>
                </div>
            </div>
            <div className="school-card__carousel">
                {/* map out profile cards for each student */}
                {studentData.map((item, key) => (
                    <ProfileCard studentData={item} key={key} /> 
                ))}
            </div>
        </div>
    )
}

export default SchoolCard;