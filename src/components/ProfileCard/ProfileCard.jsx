

const ProfileCard = ({ studentData }) => {
    console.log (studentData);
    return(
        <div className="profile-card">
            <img className="profile-card__headshot" src={studentData.profileImage} alt="" />
            <h4 className="profile-card__name">{studentData.name}</h4>
            <p style={{backgroundColor: `${studentData.fieldColor}`}} className="profile-card__field">{studentData.field}</p>
            <p className="profile-card__mutual-interests">{studentData.mutualInterests} mutual interests</p>
            <button className="profile-card__button"><img className="profile-card__button-icon" src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/000000/external-send-email-flatart-icons-outline-flatarticons.png"/>Buzz</button>
        </div>
    )
}

export default ProfileCard;