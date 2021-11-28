import React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import Modal from "react-modal";
import PropTypes from "prop-types";

import AddOrEditButton from "../AddOrEditButton";
import Input from "../Input";

import { createGateway, updateGateway } from "../../store/gateway/actions";

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
  margin-top: 5px;
  border-radius: 5px;
`;

const ErrorMesasge = styled.p`
  color: #bf3939;
  font-weight: bolder;
`;

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

function AddOrEditGateway({ gateway }) {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: gateway?gateway:{},
  });
  const dispatch = useDispatch();

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  const onSubmit = (data) => {
    if (gateway) {
      dispatch(
        updateGateway({
          ...gateway,
          serial: data.serial,
          name: data.name,
          ipv4Address: data.ipv4Address,
        })
      );
    } else {
      dispatch(createGateway(data.serial, data.name, data.ipv4Address));
    }
    reset();
    closeModal();
  };
  
  return (
    <>
      <AddOrEditButton onClick={openModal} text={"Add Gateway"} size={gateway?"small":"normal"}/>
      <Modal
        ariaHideApp={false}
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
            {...register("ipv4Address", {
              required: true,
              pattern:
                /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/i,
            })}
          />

          {errors.serial && <ErrorMesasge>"Serial is required"</ErrorMesasge>}
          {errors.ipv4Address && <ErrorMesasge>"Ip is required"</ErrorMesasge>}
          <ButtonSubmit type="submit" />
        </form>
      </Modal>
    </>
  );
}
AddOrEditGateway.propTypes = {
  gateway: PropTypes.object,
};
export default AddOrEditGateway;
