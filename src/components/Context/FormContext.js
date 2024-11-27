import { createContext, useState } from "react";

const FormContext = createContext();

const FormContextProvider = ({ children }) => {
  const [step, setStep] = useState(1);
  const [delivery, setDelivery] = useState("standard");
  const [done, setDone] = useState(0);
  const [addressData, setAddressData] = useState({
    title: "",
    name: "",
    phone: "",
    email: "",
    county: "",
    address: "",
  });
  const [cardData, setCardData] = useState({
    cardUserName: "",
    cardNumber: "",
    cardExpirationDate: "",
    cardCVCCCV: "",
  });

  const valueInput = {
    step,
    setStep,
    delivery,
    setDelivery,
    done,
    setDone,
    addressData,
    setAddressData,
    cardData,
    setCardData,
  };

  return (
    <FormContext.Provider value={valueInput}>{children}</FormContext.Provider>
  );
};

export { FormContextProvider };
export default FormContext;
