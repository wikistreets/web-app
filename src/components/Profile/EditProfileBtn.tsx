"use client";

type Props = {};

export const EditProfileButton: React.FC<Props> = ({}) => {
  const handleClick = () => {};

  return (
    <>
      <button
        onClick={handleClick}
        className="bg-secondary text-indigo-600 font-medium px-4 py-0.5 text-xs"
      >
        Edit Profile
      </button>
    </>
  );
};

export default EditProfileButton;
