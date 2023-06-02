const Navbar = () => {
  return (
    <div className="flex justify-between pt-1 pr-1 pb-1 pl-1 text-neutral-50 bg-slate-900">
      <div></div>
      <div></div>
      <div className="flex gap-x-4">
        <div className="pt-2 pr-2 pb-2 pl-2">Gmail</div>
        <div className="pt-2 pr-2 pb-2 pl-2">Images</div>
        <span className="material-symbols-outlined pt-2 pr-2 pb-2 pl-2 align-middle">
          apps
        </span>
        <div className="pt-2 pr-4 pb-2 pl-4 bg-cyan-400 rounded-lg ">
          Sign In
        </div>
      </div>
    </div>
  );
};

export default Navbar;
