const TextAndCaption = ({ text1, text2 }) => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl font-bold text-center mt-15 md:mx-70">{text1}</h1>
      <p className="px-5 text-center my-5 md:mx-35 xl:mx-60">{text2}</p>
    </div>
  );
};

export default TextAndCaption;
