import { useState, useEffect } from "react";
export default function PinInput({ PIN, handleError, handleSuccess }) {
  const [pinValue, setPinValue] = useState(Array(6).fill(""));
  const [currentPinIndex, setCurrentPinIndex] = useState(0);
  useEffect(() => {
    let check = true;
    pinValue.forEach((el) => {
      if (el === "") {
        check = false;
      }
    });
    if (check === true) {
      if (pinValue.join("") === PIN) {
        handleSuccess();
      } else {
        handleError();
      }
    }
  }, [pinValue]);
  return (
    <ul>
      {pinValue.map((el, index) => {
        return (
          <li key={index}>
            <input
              type="number"
              maxLength={1}
              id={"input" + index}
              autoFocus={index === currentPinIndex}
              value={el}
              onKeyDown={(e) => {
                if (
                  (e.key === "Backspace" || e.key === "Delete") &&
                  pinValue[index].length === 0
                ) {
                  setCurrentPinIndex((prev) => Math.max(prev - 1, 0));
                  document
                    .getElementById("input" + Math.max(index - 1, 0))
                    .focus();
                }
              }}
              onInput={(e) => {
                if (e.target.value === "") {
                  // setCurrentPinIndex(prev=>Math.max(prev-1 , 0));
                  // document.getElementById("input"+Math.max(index-1 , 0)).focus();
                  let temp = [...pinValue];
                  temp[index] = "";
                  setPinValue(temp);
                } else if (e.target.value.length === 1) {
                  setCurrentPinIndex((prev) => Math.min(prev + 1, 5));
                  document
                    .getElementById("input" + Math.min(index + 1, 5))
                    .focus();
                  let temp = [...pinValue];
                  temp[index] = e.target.value;
                  setPinValue(temp);
                }
              }}
              onFocus={(e) => {
                setCurrentPinIndex(index);
              }}
            />
          </li>
        );
      })}
    </ul>
  );
}
