import { Question } from '../../Question';

const HomeQuestions = () => {
  return (
    <div className="w-full bg-trColor">
      <div className="pt-48">
        <h1 className="font-unicaOne text-4xl text-center font-semibold uppercase">Pertanyaan Umum</h1>
        <div className="flex flex-wrap pt-12 gap-10 container justify-center">
          {Question.map((quest, index) => (
            <div key={index} className="lg:w-2/5 p-9 bg-gryColor shadow-lg">
              <h2 className="font-unicaOne font-bold text-3xl">{quest.q}</h2>
              <p className="text-xl font-firaSans font-light text-justify">{quest.a}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeQuestions;
