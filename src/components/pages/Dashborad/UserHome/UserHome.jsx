import useAuth from "../../../../hooks/useAuth";

const UserHome = () => {
  const { user } = useAuth();
  return (
    <div>
      <h3 className="text-3xl">
        hi ,Welcome
        <span>{user?.displayName ? user.displayName : "back"}</span>
      </h3>
    </div>
  );
};

export default UserHome;
