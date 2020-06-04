import { atom } from "recoil";

export const customers = atom({
  key: "customers",
  default: [],
});

export const filterDisplay = atom({
    key: "filterDisplay",
    default: customers,
});
