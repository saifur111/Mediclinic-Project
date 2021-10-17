import useAuth from "../../Hooks/useAuth";

const Profile =()=> {
  const {user}=useAuth();
  return (
    <>
      <h1 className="text-center m-5 p-5">Sign In As : {user.displayName}</h1>
    </>
  );
}
export default Profile;
