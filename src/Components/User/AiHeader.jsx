import { useState } from 'react';
import OrganismAiHeader from './Organism/OrganismAiHeader';
import OrganismAiTextarea from './Organism/OrganismAiTextarea';
import OpenAI from 'openai';
import OrganismAiButton from './Organism/OrganimsAiButton';

const AiHeader = () => {
  const openai = new OpenAI({
    apiKey: import.meta.env.VITE_APP_APIKEY_OPENAI,
    dangerouslyAllowBrowser: true,
  });

  const [data, setData] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await openai.completions.create({
        model: 'gpt-3.5-turbo-instruct',
        prompt: data,
        max_tokens: 100,
      });
      setResult(response.choices[0].text);
      setData('');
    } catch (error) {
      console.log(error);
    }

    setLoading(false);
  };

  return (
    <div className="container mt-20">
      <OrganismAiHeader />
      <div className="mt-16 px-40">
        <form className="flex flex-col ">
          <OrganismAiTextarea name="genereteAi" value={data} onChange={(e) => setData(e.target.value)} />
          <OrganismAiButton onClick={handleSubmit} loading={loading} data={data} />
        </form>
        <div className="mt-12">
          <p className="w-full h-96 border border-scColor shadow-sm shadow-scColor px-6 py-7 rounded-sm lg:text-2xl text-xl font-firaSans ">{result}</p>
        </div>
      </div>
    </div>
  );
};

export default AiHeader;
