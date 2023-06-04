import React, { useState, useRef, useEffect } from "react";
import DropDownPicker from "react-native-dropdown-picker";
import { useFormikContext } from "formik";

const SelectComponent = ({ name, items }) => {
  const { values, setFieldValue } = useFormikContext();
  const [isOpen, setIsOpen] = useState(false);
  const controllerRef = useRef(null);

  useEffect(() => {
    if (controllerRef.current) {
      controllerRef.current.reset();
    }
  }, [values[name]]);

  const handleValueChange = (itemValue) => {
    setFieldValue(name, itemValue);
  };
  const checkFunc = () => {
    console.log("ckicked..");
  };

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <DropDownPicker
      items={items}
      controller={(instance) => (controllerRef.current = instance)}
      defaultValue={values[name]}
      containerStyle={{ height: 40, marginVertical: 10 }}
      style={{ backgroundColor: "#fafafa" }}
      itemStyle={{ justifyContent: "flex-start" }}
      dropDownStyle={{ backgroundColor: "#fafafa" }}
      onChangeItem={(item) => checkFunc(item.value)}
      onOpen={handleOpen}
      onClose={handleClose}
      open={isOpen}
      //   placeholder="Select an option"
    />
  );
};

export default SelectComponent;
