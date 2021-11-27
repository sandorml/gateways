import React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import Modal from "react-modal";

import AddButton from "./AddButton";
import Input from "./Input";

const ButtonClose = styled.button`
  border: none;
  border-radius: 2px;
  background-color: #bf3939;
  color: white;
  font-weight: bold;
  float: right;
`;

const ButtonSubmit = styled.input`
  border: none;
  background-color: #4caf50;
  color: white;
  font-weight: bold;
  padding: 10px;
  margin-top: 5px;;
  border-radius: 5px;
`;

const GatewayComponent = styled.button``;

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    transform: "translate(-50%, -50%)",
    width: "500px",
  },
};

function AddGateway() {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  const onSubmit = (data) => {
    // dispatch();
  };

  return (
    <>
      <AddButton onClick={openModal} text={"Add Gateway"} />
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Create new Gateway"
      >
        <ButtonClose onClick={closeModal}>X</ButtonClose>
        <h3>Create new Gateway</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input placeholder="Name" {...register("name")} />
          <Input
            placeholder="Serial"
            {...register("serial", { required: true })}
          />
          <Input
            placeholder="ipv4 Address"
            {...register("ip", {
              pattern:
                /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/i,
            })}
          />
          {errors.ip && "Ip is required"}
          <ButtonSubmit type="submit" />
        </form>
      </Modal>
    </>
  );
}

export default AddGateway;
