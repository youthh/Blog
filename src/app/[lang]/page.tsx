import { getDictionary } from "../../../lib/dictionaries";

const Home = async ({
  params: { lang },
}: {
  params: { lang: "en" | "ua" };
}) => {
  const dictionary = await getDictionary(lang);

  return <div>{dictionary.register.signIn}</div>;
};

export default Home;
