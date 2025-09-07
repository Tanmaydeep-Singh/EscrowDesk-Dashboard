import React from "react";

const ClientHead = () => {
  return (
    <div className="flex items-center justify-between w-full mb-6">
      <div>
        <h1 className="text-2xl font-bold text-white">Clients</h1>
        <p className="text-gray-400">
          Manage your client list and add new ones here.
        </p>
      </div>

    <button className="px-4 py-2 rounded-xl bg-white text-black text-sm font-medium 
                             shadow-md hover:opacity-90 transition">
            Add Client
          </button>
    </div>
  );
};

export default ClientHead;
