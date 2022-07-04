import MemeLogo from "../img/meme-logo.svg";

export function MemeGeneratorHeader() {
  return (
    <>
      <header className="meme__header">
        <img className="meme__logo" src={MemeLogo} alt="MemeLogo " />
        <h1 className="meme__h1">Meme Generator</h1>
      </header>
    </>
  );
}
