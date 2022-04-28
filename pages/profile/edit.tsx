import type { NextPage } from "next";

const EditProfile: NextPage = () => {
  return (
    <div className="py-10 px-4 space-y-4">
      <div className="flex items-center space-x-3">
        <div className="w-14 h-14 rounded-full bg-slate-400"></div>
        <label 
          htmlFor="picture"
          className="
            cursor-pointer py-2 px-3 border border-gray-300 
            rounded-m shadow-sm text-sm font-medium
            hover:ring-2 hover:ring-offset-2 hover:ring-orange-400 text-gray-800
          "
        >
          Change photo
          <input id="picture" type="file" className="hidden" accept="image/*"/>
        </label>
      </div>
      <div className="space-y-1">
        <label htmlFor="email" className="text-sm font-medium text-gray-700">
          Email address
        </label>
        <div className="mt-1">
          <input
            id="email"
            type="email" 
            className="
              appearance-none w-full px-3 py-2 border-gray-300 
              rounded-md shadow-sm placeholder-gray-400 
              focus:outline-none focus:ring-orange-400 focus:border-orange-400
              " 
            required 
          />
        </div>
      </div>
      <div className="space-y-1">
        <label htmlFor="phone" className="text-sm font-medium text-gray-700">
          Phone number
        </label>
        <div className="flex rounded-md shadow-sm">
          <span 
            className="
              flex items-center justify-center px-3 
              rounded-l-md border border-r-0 text-sm
              border-gray-300 bg-gray-50 text-gray-500 select-none
              "
          >+82</span>
          <input
            id="input" 
            type="number" 
            className="
              flex items-center justify-center w-full px-3 
              rounded-r-md rounded-l-none border
              border-gray-300 bg-gray-50 text-gray-500 select-none
              focus:outline-none focus:ring-orange-400 focus:border-orange-400
              "
            required 
          />
        </div>
      </div>
      <button 
        className="
          mt-6 bg-orange-400 hover:bg-orange-500 w-full
        text-white py-2 px-4 border border-transparent 
          rounded-md shadow-sm text-sm font-medium
          focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 focus: outline-none
        "
      >
        Update profile
      </button>
    </div>
  )
}

export default EditProfile;