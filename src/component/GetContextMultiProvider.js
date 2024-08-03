import { useContext } from "react";
import { ProductContext, UserContext } from "../context/usercontext";

const GetContextMultiProvider = () => {
  const productData = useContext(ProductContext);
  const userData = useContext(UserContext);
  return (
    <>
      <h1>Multiple Context Provider changes Product length {productData.length}</h1>
      <h1>Multiple Context Provider changes cars length {userData.length}</h1>
    </>
  );
};

export default GetContextMultiProvider;
