import HomePage from "../../components/Home/HomePage";

export default function Home({ params }: { params: { lang: string } }) {
  const { lang } = params;

  return (
    <>
      <HomePage lang={lang} />
    </>
  );
}
