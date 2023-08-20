const button = () => {
  return (
    <>
      <button className=" bg-sky-500 rounded hover:bg-sky-200 px-2 ">
        save changes
      </button>
      <button className="bg-violet-500 hover:bg-violet-600 focus:bg-violet-600 focus:outline-none focus:ring focus:ring-violet-300 rounded px-2">
        save changes
      </button>
      <input
        type="text"
        name="search"
        placeholder="search for anything"
        className="placeholder:italic placeholder:text-slate-400 block bg-grey  border border-slate-400 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 "
      />
      <form className="flex items-center space-x-6">
        <div className="shrink-0">
          <img
            className="h-16 w-16 object-cover rounded-full"
            src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1361&q=80"
            alt="Current profile photo"
          />
        </div>
        <label className="block">
          <span className="sr-only"> choose a profile photo</span>
          <input
            type="file"
            className="block w-full text-sm text-slate-500 
          file:mr-4 file:py-2 file:px-2  
          file:rounded-full file:border-0
          file:text-sm file:font-semibold
          file:bg-violet-50 file:text-violet-700
          hover:file:bg-violet-100"
          />
        </label>
      </form>
      <ul className="marker:text-sky-500 list-disc pl-5 space-y-2 text-slate-500">
        <li>5 cups chopped Porcini mushrooms</li>
        <li>1/2 cup of olive oil</li>
        <li>3lb of celery</li>
      </ul>
      <p>
        RESPONSIVE BREAKPOINT - For example, this will render a 3-column grid on
        mobile, a 4-column grid on medium-width screens, and a 6-column grid on
        large-width screens:
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6">hi</div>
      </p>
      <span className="box-decoration-clone bg-gradient-to-r from-indigo-600 to-pink-400 text-white px-2">
        Hello <br />
        World
      </span>
      <br />
      <span className="box-decoration-slice bg-gradient-to-r from-indigo-600 to-pink-400 text-white px-2">
        Hello <br />
        World
      </span>
      <div>
        When controlling the flow of text, using the CSS property
        <span className="inline">display: inline</span>
        will cause the text inside the element to wrap normally.
        <br />
        While using the property{" "}
        <span className="inline-block">display: inline-block</span>
        will wrap the element to prevent the text inside from extending beyond
        its parent.
        <br />
        Lastly, using the property <span className="block">display: block</span>
        will put the element on its own line and fill its parent.
      </div>
      FLow root
      <div className="p-4">
        <div className="flow-root ...">
          <div className="my-4">Well, let me tell you something, ...</div>
        </div>
        <div className="flow-root ...">
          <div className="my-4 ...">Sure, go ahead, laugh if you want...</div>
        </div>
      </div>
      
    </>
  );
};

export default button;
