import { useState } from "react";

// 모달 on/off
export const useToggle = (initialState = false) => {
  const [isToggled, setIsToggled] = useState(initialState);

  const handleToggled = () => {
    setIsToggled(value => !value);
    document.body.style.overflow = "unset";
  };
  return [isToggled, handleToggled];
};
