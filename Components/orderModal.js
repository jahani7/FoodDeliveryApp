
import React, { useState } from "react";
import {
  Modal,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { ModalStyle } from "../Styles/ModalStyle";

const OrderModal = ({ isVisible, onClose, onOrderPlaced }) => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [pinCode, setPinCode] = useState("");

  const handleSubmit = () => {
    onClose();
  };

  return (
    <Modal
      visible={isVisible}
      animationType="slide"
      transparent={true}
      onRequestClose={onClose}
    >
      <View style={ModalStyle.modalContainer}>
        <View style={ModalStyle.modalContent}>
          <Text style={ModalStyle.modalTitle}>Enter Your Details</Text>
          <TextInput
            style={ModalStyle.input}
            placeholder="Name"
            value={name}
            onChangeText={(text) => setName(text)}
          />
          <TextInput
            style={ModalStyle.input}
            placeholder="Address"
            value={address}
            onChangeText={(text) => setAddress(text)}
          />
          <TextInput
            style={ModalStyle.input}
            placeholder="Phone Number"
            value={phoneNumber}
            onChangeText={(text) => setPhoneNumber(text)}
            keyboardType="phone-pad"
          />
          <TextInput
            style={ModalStyle.input}
            placeholder="Pin Code"
            value={pinCode}
            onChangeText={(text) => setPinCode(text)}
            keyboardType="numeric"
          />
          <TouchableOpacity
            style={ModalStyle.orderButton}
            onPress={handleSubmit}
          >
            <Text style={ModalStyle.orderButtonText}>Place Order</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default OrderModal;
