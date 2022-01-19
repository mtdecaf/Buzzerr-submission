import "./SchoolCard.scss"

import ProfileCard from "../ProfileCard/ProfileCard";


const SchoolCard = ({ studentData, data }) => {

    const toggleSchoolCard = (e) => {
        // target the parent div and toggle the class
        let selectedSchoolCard;
        if (e.target === <img class="school-card__menu-icon" src="https://img.icons8.com/material-outlined/24/000000/visible--v1.png"></img>){
            selectedSchoolCard = e.target.parentElement.parentNode.parentNode;
        } else {
            selectedSchoolCard = e.target.parentNode.parentNode.parentNode.parentNode;
        }
        console.log(selectedSchoolCard);
        // find the school-card__carousel
        let schoolCardCarousel = selectedSchoolCard.querySelector(".school-card__carousel");
        console.log(schoolCardCarousel);
        if (schoolCardCarousel.classList.contains("school-card__carousel--close")) {
            schoolCardCarousel.classList.add("school-card__carousel--open");
            schoolCardCarousel.classList.remove("school-card__carousel--close");
        } else {    
            schoolCardCarousel.classList.remove("school-card__carousel--open");
            schoolCardCarousel.classList.add("school-card__carousel--close");
        }
    };

    return(
        <div className="school-card">
            <div className="school-card__header">
                <h2 className="school-card__title">{data.label}</h2>
                <div className="school-card__menu">
                    <span className="school-card__menu-button school-card__menu-visibility" onClick={toggleSchoolCard}><img className="school-card__menu-icon" src="https://img.icons8.com/material-outlined/24/000000/visible--v1.png"/></span>
                    <span className="school-card__menu-button school-card__menu-left"><img className="school-card__menu-icon" src="https://img.icons8.com/material-sharp/24/000000/chevron-left.png"/></span>
                    <span className="school-card__menu-button school-card__menu-right"><img className="school-card__menu-icon" src="https://img.icons8.com/material-sharp/24/000000/chevron-right.png"/></span>
                </div>
            </div>
            <div className="school-card__carousel school-card__carousel--open">
                {/* map out profile cards for each student */}
                {studentData.map((item, key) => (
                    <ProfileCard studentData={item} key={key} /> 
                ))}
            </div>
        </div>
    )
}

export default SchoolCard;