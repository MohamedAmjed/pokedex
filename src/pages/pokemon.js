import React from "react";
import Layout from "../components/Layout";
import Link from "next/lclsink";

export default function pokemon({ poke }) {
  return (
    <Layout title={poke.name}>
      <h1 className="text-4xl text-center p-3 capitalize">{poke.name}</h1>
      <img
        className="w-100 mx-auto rounded"
        src={poke.image}
        alt={poke.name}
      ></img>
      <div className="p-10 rounded-md shadow-md bg-white">
        <h1 className="capitalize">Name: {poke.name}</h1>
        <h1>Wieght: {poke.weight}</h1>
      </div>
      <div className="items-center text-center p-4">
        <Link href="/">
          <button className="h-12 px-6 m-2 text-lg text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800">
            Home
          </button>
        </Link>
      </div>
    </Layout>
  );
}

export async function getServerSideProps({ query }) {
  const id = query.id;
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const poke = await res.json();
    const paddedId = ("00" + id).slice(-3);
    poke.image = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${paddedId}.png`;
    return {
      props: { poke },
    };
  } catch (err) {
    console.error(err);
  }
}
