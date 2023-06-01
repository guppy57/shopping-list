import Head from "next/head";

// @ts-ignore
export default function Layout({ children }): JSX.Element {
  return (
    <div>
      <Head>
        <title>Shopping List by Guppy</title>
      </Head>
      <div className="min-h-screen pt-24">
        <main className="max-w-2xl mx-auto px-4">{children}</main>
      </div>
    </div>
  );
}
