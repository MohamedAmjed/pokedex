import Head from "next/head";
import Layout from "../components/Layout";
import Link from "next/link";

export default function Home({ pokemon }) {
  console.log(pokemon);
  return (
    <Layout title="Pokedex">
      <h1 className="bg-gray-200 text-4xl mb-4 p-4 text-center">PokeDex!</h1>
      <div className="flex flex-wrap -mx-2 sm:-mx-2 md:-mx-2 lg:-mx-2 xl:-mx-2">
        {pokemon.map((poke, index) => (
          <div
            key={index}
            className="my-2 px-2 w-full sm:my-2 sm:px-2 sm:w-1/3 md:my-2 md:px-2 md:w-1/4 lg:my-2 lg:px-2 lg:w-1/3 xl:my-2 xl:px-2 xl:w-1/4"
          >
            <Link href={`/pokemon?id=${index + 1}`}>
              <a className=" float-right rounded-md mb-5 p-4 capitalize items-center text-lg bg-white shadow-lg transition duration-200 ease-in-out  transform hover:-translate-y-3 hover:shadow-xl">
                <img className="w-full" src={poke.image} alt={poke.name}></img>
                <span className="mr-2 font-bold">{index + 1}</span>
                <h1>{poke.name}</h1>
              </a>
            </Link>
          </div>
        ))}
      </div>
    </Layout>
  );
}

export async function getStaticProps(context) {
  try {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100");
    const { results } = await res.json();
    const pokemon = results.map((pokemon, index) => {
      const padindex = ("00" + (index + 1)).slice(-3);

      const image = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${padindex}.png`;
      return { ...pokemon, image };
    });
    return {
      props: { pokemon },
    };
  } catch (err) {
    console.error(err);
  }
}
