type Props = {
  params: { id: string };
  searchParams?: {
    search?: string;
  };
};

const Product = ({ params, searchParams }: Props) => {
  return (
    <>
      id : {params.id}
      <br />
      searchParams : {JSON.stringify(searchParams)}
    </>
  );
};

export default Product;
