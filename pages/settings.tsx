function Page({ data }: { data: string }) {
  return <h2>{data}</h2>;
}

export async function getServerSideProps() {
  return { props: { data: "hello world" } };
}

export default Page;
