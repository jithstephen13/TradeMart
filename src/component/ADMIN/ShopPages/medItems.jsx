import React from "react";
import { Tr, Td, Image } from "@chakra-ui/react";
import { RiDeleteBin5Fill } from "react-icons/ri";

const MedItems = ({ id, name, price, company, img_src }) => {
  return (
    <div>
      <Td>{id}</Td>
      <Td>{name}</Td>
      <Td>₹{price}</Td>
      <Td>{company}</Td>
      <Td>
        <Image src={img_src} alt={id} />
      </Td>
      <Td>Update</Td>
      <Td>
        <RiDeleteBin5Fill />
      </Td>
    </div>
  );
};

export default MedItems;
