import ProfileForm from "./ProfileForm";
import classes from './UserProfile.module.css';
const UserProfile = () =>{
    return (
        <div className={classes.profile}>
            <h1>New User Profile</h1>
            <ProfileForm/>
        </div>
    )
};
export default UserProfile;