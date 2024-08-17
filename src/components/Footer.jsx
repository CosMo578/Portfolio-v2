import reactSvg from '/images/react.svg';
const Footer = () => {
  return (
    <footer className="w-full mt-20 ">
      <div className="text-gray-300 ml-auto leading-loose text-center capitalize">
        Built with ReactJS{' '}
        <img src={reactSvg} className="inline -scale-[.8] " alt="" />{' '}
        by Dev. Ralph
        <br />
        {/* Inspired by{' '}
        <span className="hover:cursor-pointer hover:underline text-primary">
          Britanny Chiang
        </span> */}
      </div>
    </footer>
  );
};

export default Footer;
