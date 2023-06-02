const Footer = () => {
  return (
    <div className="absolute inset-x-0 bottom-0 h-16">
      <div className="text-slate-500 bg-slate-950 py-3 px-3">Bangladesh</div>
      <div className="flex justify-between text-slate-500 bg-slate-950 py-3 px-3 mt-px">
        <div className="flex gap-x-4">
          <div>About</div>
          <div>Advertizing</div>
          <div>Business</div>
          <div>How Search Works</div>
        </div>
        <div></div>
        <div className="flex gap-x-4">
          <div>Privacy</div>
          <div>Terms</div>
          <div>Settings</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
