import { useRouter } from "next/router";
const Profile = () => {
  const { username } = useRouter().query;

  return <div>Hello {username}</div>;
};

export default Profile;
