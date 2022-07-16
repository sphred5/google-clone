import Header from "../../components/Header.js";
import { getProviders } from "next-auth/react";

export default function signIn({ providers }) {
  return (
    <>
      <Header />
      <diiv>
        {Object.values(providers).map((provider) => (
          <div key={provider.name}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1920px-Google_2015_logo.svg.png"
              alt="google logo"
            />
            <p>This website is created for learning purposes</p>
            <button>Signin with {provider.name}</button>
          </div>
        ))}
      </diiv>
    </>
  );
}

export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}
