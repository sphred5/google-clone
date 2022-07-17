import Image from "next/image";
import { useRouter } from "next/router";

export default function SearchHeader() {
  const router = useRouter();
  return (
    <header className="sticky top-0 bg-white">
      <div>
        <Image
          onClick={() => router.push("/")}
          className="cursor-pointer"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1920px-Google_2015_logo.svg.png"
          objectFit="contain"
          alt="google logo"
          height={40}
          width={120}
        />
      </div>
    </header>
  );
}
