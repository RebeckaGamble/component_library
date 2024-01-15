import sthlm from "./assets/stockholm.jpg";

function Stockholm() {
  return (
    <div className="w-screen flex flex-col bg-slate-100 h-screen">
      <div className="section  mx-auto justify-center bg-white rounded-md p-6 mt-6">
        <img
          src={sthlm}
          alt="Stockholm"
          className="rounded-xl shadow-xl mx-auto"
        />
        <h1 className="font-semibold my-6 text-3xl text-center">Stockholm</h1>
        <p className="pb-1.5">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus
          molestias asperiores rerum dolore! Iste, odio adipisci? Laboriosam
          sint quam natus eum laudantium totam, esse eos maxime tenetur
          dignissimos molestias perspiciatis.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
          consequuntur quos repudiandae amet repellat accusamus debitis sequi
          aliquid autem. Nam!
        </p>
        <a href="/" className="font-semibold flex justify-center mt-6"> Back Home</a>
      </div>
    </div>
  );
}

export default Stockholm;
