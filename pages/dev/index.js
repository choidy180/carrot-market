const DevIndex = () => {
  return (
    <div className="bg-slate-400 py-10 px-5 grid gap-10 min-h-screen">
      <div className='bg-white p-6 rounded-2xl shadow-2xl'>
        <span className='font-semibold text-3xl'>Select Item</span>
        <div className='flex justify-between my-2'>
          <span className='text-gray-500'>Grey Chair</span>
          <span className='font-semibold'>$5</span>
        </div>
        <div className='flex justify-between my-2'>
          <span className='text-gray-500'>Grey Chair</span>
          <span className='font-semibold'>$5</span>
        </div>
        <div className='flex justify-between mt-2 pt-2 border-t-2 border-dashed'>
          <span>Total</span>
          <span className='font-semibold'>$10</span>
        </div>
        <button 
          className='block mt-5 bg-blue-500 text-white p-3 
          text-center rounded-xl w-3/4 mx-auto
          hover:bg-teal-500 hover:text-black
          active:bg-red-500 active:text-white
          '
        >Checkout</button>
      </div>
      <div className='bg-white overflow-hidden rounded-3xl shadow-2xl group'>
        <div className='bg-blue-500 p-6 pb-14'>
          <span className='text-white text-2xl'>Profile</span>
        </div>
        <div className='rounded-3xl p-6 relative -top-5 bg-white'>
          <div className='flex relative -top-16 justify-between items-end'>
            <div className='flex flex-col items-center'>
              <span className='text-sm text-gray-500'>Orders</span>
              <span className='font-medium'>340</span>
            </div>
            <div className='h-24 w-24 bg-gray-300 rounded-full group-hover:bg-red-500 transition-colors'>
            </div>
            <div className='flex flex-col items-center'>
              <span className='text-sm text-gray-500'>Spent</span>
              <span className='font-medium'>$340</span>
            </div>
          </div>
          <div className='relative mt-5 flex flex-col items-center -mt-10 -mb-5'>
            <span className='text-lg font-medium'>Tony Molly</span>
            <span className='text-sm text-gray-500'>미국</span>
          </div>
        </div>
      </div>
      <div className='bg-white p-10 rounded-2xl shadow-2xl'>
        <div className='flex mb-5 justify-between items-center'>
          <span>⬅️</span>
          <div className='space-x-3'>
            <span>⭐️ 4.9</span>
            <span className='shadow-xl p-2 rounded-md'>❤️</span>
          </div>
        </div>
        <div className='bg-zinc-400 h-72 mb-5'>
        </div>
          <div className='flex flex-col'>
            <span className='font-medium text-xl'>Swoon Lounge</span>
            <span className='text-xs text-gray-500'>Chair</span>
            <div className='mt-3 mb-5 flex justify-between items-center'>
              <div className='space-x-2'>
                <button className='w-5 h-5 rounded-full bg-yellow-500 hover:ring-2 ring-offset-2 ring-yellow-500 transition'/>
                <button className='w-5 h-5 rounded-full bg-indigo-500 hover:ring-2 ring-offset-2 ring-indigo-500 transition'/>
                <button className='w-5 h-5 rounded-full bg-teal-500 hover:ring-2 ring-offset-2 ring-teal-500 transition'/>
              </div>
              <div className='flex items-center space-x-5'>
                <button className='rounded-lg bg-blue-200 flex justify-center items-center aspect-square w-8 text-xl text-gray-500'>-</button>
                <span>1</span>
                <button className='rounded-lg bg-blue-200 flex justify-center items-center aspect-square w-8 text-xl text-gray-500'>+</button>
              </div>
            </div>
          </div>
        <div className='flex justify-between items-center'>
          <span className='font-medium text-2xl'>$450</span>
          <button className='bg-blue-500 py-2 px-5 text-center text-white rounded-lg'>Add to cart</button>
        </div>
      </div>
      <div className='bg-white p-10 rounded-2xl shadow-2xl'></div>
      <form className='flex flex-col space-y-2 p-5 bg-white'>
        <input 
          type="text" 
          required 
          placeholder='Username'
          className='border p-1 peer border-gray-400 rounded-3xl'
        />
        <span className='hidden peer-invalid:block peer-invalid:text-red-500'>This input is invalid</span>
        <span className='hidden peer-valid:block peer-valid:text-teal-500'>Awesome username</span>
        <span className='hidden peer-hover:block text-amber-500'>Hello</span>
        <input type="submit" value="Login" className='bg-slate-300' />
      </form>
    </div>
  )
}

export default DevIndex
