import Head from "next/head";

// @ts-ignore
export default function Layout({ children }): JSX.Element {
  return (
    <div>
      <Head>
        <title>Shopping List by Guppy</title>
      </Head>
      <main className="min-h-screen pt-24">
        <div className="max-w-2xl mx-auto px-4">{children}</div>
      </main>
    </div>
  );
}
