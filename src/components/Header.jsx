export function Header({ item }) {
  return (
    <header className="flex justify-between">
      <img src="" alt="" />
      <span className="hidden text-green-700 text-2xl">
        <TbMenuDeep />
        <TfiClose />
      </span>
      <nav>
        <ul className="">
          {['About', 'Experience', 'Work', 'Contact'].map((item) => {
            return (
              <li key={crypto.randomUUID} className="inline">
                <a href="">{item}</a>
              </li>
            );
          })}
        </ul>
        <button>Resume</button>
      </nav>
    </header>
  );
}
