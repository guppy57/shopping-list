import Link from "next/link";
import Image from "next/image";

export default function Header(): JSX.Element {
  return (
    <div
      className={"flex flex-row items-center border-b border-green-600 pb-4"}
    >
      <Link href={"https://my.kreativeusa.com"}>
        <Image
          className={
            "h-11 w-11 rounded-full mr-3 outline outline-2 outline-offset-0 outline-green-800"
          }
          src={"/guppy.jpg"}
          alt={"Guppy profile picture"}
          width={40}
          height={40}
        />
      </Link>
      <h1 className="text-4xl font-bold text-green-800">
        Guppy&apos;s Shopping List
      </h1>
    </div>
  );
}
