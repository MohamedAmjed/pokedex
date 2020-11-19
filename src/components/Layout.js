import Head from "next/head";

export default function Home({ children, title }) {
  return (
    <div className="bg-gray-200  h-929 m-auto m-0">
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-gray-200 container mx-auto px-4 flex-auto justify-center items-center mb-16">
        {children}
      </main>

      <footer className="text-center text-sm mt-10 p-10">
        Mohammed Amjed @github.com/MohammedAmj
      </footer>
    </div>
  );
}
