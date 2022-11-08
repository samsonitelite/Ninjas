export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  const paths = data.map((ninja) => {
    return {
      params: { id: ninja.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
  const data = await res.json();

  return {
    props: { ninja: data },
  };
};

const Details = ({ ninja }) => {
const { name, email, address, website} = ninja;
const { street, suite, city, zipcode } = address;
return (
    <div>
        <h1>{name}</h1>
        <p>{email}</p>
        <p>{website}</p>
        <p>{city}</p>
    </div>
);
};

export default Details;
