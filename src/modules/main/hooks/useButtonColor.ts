import { ButtonTypes } from "../@types";

type UseButtonColor = (type: ButtonTypes) => string;

const useButtonColor: UseButtonColor = (type) => {
  switch (type) {
    case "primary":
      return "bg-gradient-to-b from-red from-80% to-light-red to-100%";
    case "secondary":
      return "";
  }
};

export { useButtonColor };
