import Home from "../Home";

const Profile = () => {
  return (
    <div className=" min-h-[85vh]">
      <div className="flex justify-start items-start gap-8 w-full px-10 py-10">
        <div className="rounded-2xl border w-1/5 h-72 flex flex-col justify-center items-center">
          <h2 className="text-7xl">+</h2>
          <h2 className="font-medium">Add Image</h2>
        </div>
        <div className="w-3/5 px-6 space-y-6">
          <div className="flex  justify-between items-center">
            <h2 className="text-5xl font-bold">Lorem Ipsum</h2>
            <>
              <button className="bg-[#0A2540] text-white px-7 py-2 rounded-[50px]">
                Save
              </button>
            </>
          </div>
          <textarea
            rows="4"
            className="p-2 w-full border bg-[#f7f7ff] rounded-md row-span-5"
            placeholder="Add Profile Description..............."
          ></textarea>
          <input
            className="border bg-[#f7f7ff] rounded-md w-full p-2"
            type="text"
            placeholder="https://example.com"
          />
        </div>
      </div>
      <Home />
    </div>
  );
};

export default Profile;
