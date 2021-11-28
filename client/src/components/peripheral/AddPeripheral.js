import React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import Modal from "react-modal";

import AddButton from "../AddButton";
import Input from "../Input";

import { createPeripheral } from "../../store/peripheral/actions";

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

function AddPeripheral() {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const { selectedGateway } = useSelector((state) => state.gatewayReducers);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const dispatch = useDispatch();

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  const onSubmit = (data) => {
    dispatch(
      createPeripheral(data.uid, data.vendor, data.status, selectedGateway._id)
    );
    reset();
    closeModal();
  };

  return (
    <>
      <AddButton onClick={openModal} text={"Add Peripheral"} small={true} />
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Create new Peripheral"
      >
        <ButtonClose onClick={closeModal}>X</ButtonClose>
        <h3>Create new Peripheral</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input placeholder="UID" type="number" {...register("uid")} />
          <Input
            placeholder="Vendor"
            {...register("vendor", { required: true })}
          />
          <label htmlFor="status">
            Status
            <Input
              type="checkbox"
              placeholder="Status"
              {...register("status")}
            />
          </label>

          {errors.vendor && <ErrorMesasge>"Vendor is required"</ErrorMesasge>}
          <ButtonSubmit type="submit" />
        </form>
      </Modal>
    </>
  );
}

export default AddPeripheral;
