import "./ProfileCard.scss";
import send from "../../assets/images/send.png";

const ProfileCard = ({ studentData }) => {
    console.log (studentData);
    return(
        <div className="profile-card">
            <img className="profile-card__headshot" src={studentData.profileImage} alt="" />
            <h4 className="profile-card__name">{studentData.name}</h4>
            <p style={{backgroundColor: `${studentData.fieldColor}`}} className="profile-card__field">{studentData.field}</p>
            <p className="profile-card__mutual-interests">{studentData.mutualInterests} mutual interests</p>
            <button className="profile-card__button"><img className="profile-card__button-icon" src={send}/>Buzz</button>
        </div>
    )
}

export default ProfileCard;