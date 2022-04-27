const Study1 = () => {
  return (
    <div className="flex flex-col space-y-2 p-10">
      <details className='select-none open:text-white open:bg-indigo-400'>
        <summary className='cursor-pointer'>What is my fav. food</summary>
        <span className='selection:bg-indigo-600 selection:text-white'>김치</span>
      </details>
      <ul className='list-decimal marker:text-red-500 text-3xl'>
        <li>hi</li>
        <li>hi</li>
        <li>hi</li>
      </ul>
      <input 
        type="file" 
        className='
          file:border-0 file:rounded-xl file:px-5 file:text-white file:bg-purple-400 file:transition file:border-2 file:border-purple-300
        file:hover:bg-white file:hover:border-purple-400 file:hover:border-2 file:hover:text-purple-400 file:hover:cursor-pointer
        '
      />
      <p className='first-line:text-7xl'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo iste quam cumque aliquam eius repellat vitae aspernatur. Obcaecati nobis maiores corporis repellat, nostrum itaque nam, aspernatur dolorum illum provident placeat?</p>
      <p className='first-letter:text-5xl first-letter:text-red-500'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam odit iste quisquam? Corporis inventore voluptates dignissimos, corrupti sed dolorem? Ullam, dicta voluptatum? Vel laboriosam obcaecati nam explicabo excepturi. Autem, voluptatum.</p>
    </div>
  )
}

export default Study1;