import { useParams } from "react-router";
import {
  useEditProfileMutation,
  useGetProfileQuery,
} from "../../../futures/services/userApi";
import { useEffect, useState } from "react";
import fotos from '../../../shared/fotos.png'

const Account = () => {
  const { id } = useParams();
  const { data, isLoading, error, refetch } = useGetProfileQuery(id);
  const [editProfile] = useEditProfileMutation();

  const [editFirstName, seteditFirstName] = useState("");
  const [editLastName, seteditLastName] = useState("");
  const [editemail, seteditemail] = useState("");
  const [editnumber, seteditnumber] = useState("");
  const [editdate, seteditdate] = useState("");
  const [editimg, seteditimg] = useState(null);

  const profile = data?.data;

  useEffect(() => {
    if (profile) {
      seteditFirstName(profile.firstName || "");
      seteditLastName(profile.lastName || "");
      seteditemail(profile.email || "");
      seteditnumber(profile.phoneNumber || "");
      seteditdate(profile.dob || "");
    }
  }, [profile]);

  async function editUser(e) {
    e.preventDefault();

    const formData = new FormData();
    if (editimg) formData.append("Image", editimg);
    formData.append("firstName", editFirstName);
    formData.append("lastName", editLastName);
    formData.append("email", editemail);
    formData.append("dob", editdate);
    formData.append("phoneNumber", editnumber);

    await editProfile(formData);
    refetch();
  }

  if (isLoading) return <p className="text-center mt-10">Loading...</p>;
  if (error)
    return <p className="text-center text-red-500 mt-10">Failed to load profile</p>;

  return (
    <div className="w-[90%] m-auto mt-[150px]">
      <div className="text-sm text-gray-500 mb-4">
        <span className="text-blue-500">Home</span> /{" "}
        <span className="text-black">My Account</span>
      </div>

      <div className="flex flex-col sm:flex-row gap-8 bg-white p-5 border border-gray-300 mt-10 rounded shadow">
        <div className="w-full sm:w-1/4 border-r pr-4">
          <h2 className="font-semibold text-lg mb-4">Manage My Account</h2>
          <ul className="space-y-2 text-sm">
            <li className="text-red-500 font-medium">My Profile</li>
            <li className="text-gray-600 hover:text-black cursor-pointer">
              Address Book
            </li>
            <li className="text-gray-600 hover:text-black cursor-pointer">
              My Payment Options
            </li>
          </ul>

          <h2 className="font-semibold text-lg mt-6 mb-4">My Orders</h2>
          <ul className="space-y-2 text-sm">
            <li className="text-gray-600 hover:text-black cursor-pointer">
              My Returns
            </li>
            <li className="text-gray-600 hover:text-black cursor-pointer">
              My Cancellations
            </li>
          </ul>

          <h2 className="font-semibold text-lg mt-6 mb-4">My Wishlist</h2>
        </div>

        <div className="w-full sm:w-3/4">
          <div className="flex justify-center mb-10">
            <img
              className="w-[150px] h-[150px] rounded-full object-cover"
              src={`https://store-api.softclub.tj/images/${profile?.image}`}
              alt="Profile"
            />
          </div>

          <form onSubmit={editUser} encType="multipart/form-data">
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Change Image</label>
              <input
                type="file"
                onChange={(e) => seteditimg(e.target.files[0])}
              />
            </div>

            <h1 className="text-xl font-bold mb-6">Profile</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <input
                type="text"
                placeholder="First name"
                className="border p-3 rounded w-full"
                value={editFirstName}
                onChange={(e) => seteditFirstName(e.target.value)}
              />
              <input
                type="text"
                placeholder="Last name"
                className="border p-3 rounded w-full"
                value={editLastName}
                onChange={(e) => seteditLastName(e.target.value)}
              />
              <input
                type="email"
                placeholder="Email address"
                className="border p-3 rounded w-full"
                value={editemail}
                onChange={(e) => seteditemail(e.target.value)}
              />
              <input
                type="text"
                placeholder="Phone Number"
                className="border p-3 rounded w-full"
                value={editnumber}
                onChange={(e) => seteditnumber(e.target.value)}
              />
            </div>

            <input
              type="text"
              placeholder="Date of Birth"
              className="border p-3 rounded w-full mb-6"
              value={editdate}
              onChange={(e) => seteditdate(e.target.value)}
            />

            <h2 className="text-lg font-semibold mb-4">Password Changes</h2>
            <div className="space-y-4 mb-6">
              <input
                type="password"
                placeholder="Current password"
                className="border p-3 rounded w-full"
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="password"
                  placeholder="New password"
                  className="border p-3 rounded w-full"
                />
                <input
                  type="password"
                  placeholder="Confirm new password"
                  className="border p-3 rounded w-full"
                />
              </div>
            </div>

            <div className="flex justify-end items-center gap-4">
              <button
                type="button"
                className="text-gray-600 hover:text-black"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded cursor-pointer"
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Account;
