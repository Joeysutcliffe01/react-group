import { useEffect } from "react";
import { useState } from "react";
// import MemeData from "../MemeData";

export function MemeGeneratorMain() {
  // -------------------------States
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage:
      "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWVtZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
  });

  const [allMemes, setAllMemes] = useState([]);

  useEffect(() => {
    async function getdata() {
      const res = await fetch("https://api.imgflip.com/get_memes");
      const data = await res.json();
      setAllMemes(data.data.memes);
    }

    getdata();
  }, []);

  console.log("allMemes data", allMemes);

  // -------------------------Functions
  function getMemeImage() {
    const randomNumber = Math.floor(Math.random() * allMemes.length);

    const url = allMemes[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }

  function handleChange(event) {
    const { name, value } = event.target;

    setMeme((preveMeme) => {
      return {
        ...preveMeme,
        [name]: value,
      };
    });
  }

  return (
    <section className="main-content">
      <div className="meme__form">
        <div className="meme__input-comtainer">
          <input
            type="text"
            placeholder="Top Text"
            className="meme__form-input"
            name="topText"
            value={meme.topText}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Bottom Text"
            className="meme__form-input"
            name="bottomText"
            value={meme.bottomText}
            onChange={handleChange}
          />
        </div>

        <button className="form__button" onClick={getMemeImage}>
          Get a new image 🖼
        </button>
      </div>

      <div className="meme__form-img-container">
        <img src={meme.randomImage} alt="me" className="meme__form-img" />
        <h2 className="meme__form-text meme__form-top">{meme.topText}</h2>
        <h2 className="meme__form-text meme__form-bottom">{meme.bottomText}</h2>
      </div>

      {console.log(meme.randomImage)}
    </section>
  );
}
