import "./PageNav.scss";
// import icons for the page nav
import home from '../../assets/images/home.png'
import explore from '../../assets/images/explore.png'
import events from '../../assets/images/events.png'
import jobs from '../../assets/images/jobs.png'
import messages from '../../assets/images/messages.png'
import search from '../../assets/images/search.png'
import notification from '../../assets/images/notification.png'
import profile from '../../assets/images/profile.png'

const PageNav = () => {
    return (
        <div className="page-nav">
            <div className="page-nav__wrap">
                <h2>Buzzerr</h2>
                <ul className="page-nav__list page-nav__menu">
                    <div className="page-nav__menu-item-wrap">
                        <li className="page-nav__menu-item"><img className="page-nav__menu-icon" src={home} alt="home icon"/>home</li>
                        <div className="page-nav__menu-pointer"></div>
                    </div>
                    <div className="page-nav__menu-item-wrap">
                        <li className="page-nav__menu-item page-nav__menu-item--selected"><img className="page-nav__menu-icon" src={explore} alt="explore icon"/>explore</li>
                        <div className="page-nav__menu-pointer page-nav__menu-pointer--selected"></div>
                    </div>
                    <div className="page-nav__menu-item-wrap">
                        <li className="page-nav__menu-item"><img className="page-nav__menu-icon" src={events} alt="events icon"/>events</li>
                        <div className="page-nav__menu-pointer"></div>
                    </div>
                    <div className="page-nav__menu-item-wrap">
                        <li className="page-nav__menu-item"><img className="page-nav__menu-icon" src={jobs} alt="jobs icon"/>jobs</li>
                        <div className="page-nav__menu-pointer"></div>
                    </div>
                    <div className="page-nav__menu-item-wrap">
                        <li className="page-nav__menu-item"><img className="page-nav__menu-icon" src={messages} alt="messages icon"/>messages</li>
                        <div className="page-nav__menu-pointer"></div>
                    </div>
                </ul>
                <ul className="page-nav__list page-nav__profile">
                    <li className="page-nav__profile-item"><img className="page-nav__profile-icon" src={search} alt="search icon" /></li>
                    <li className="page-nav__profile-item"><img className="page-nav__profile-icon" src={notification} alt="notification icon" /></li>
                    <li className="page-nav__profile-item"><img className="page-nav__profile-icon page-nav__profile-picture" src={profile} alt="profile picture"/></li>
                </ul>
            </div>
        </div>
    )
}

export default PageNav;