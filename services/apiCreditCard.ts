import { CreditCard } from "@/models/creditCard.model";
import { timeout } from "utils/utils";


export const addCreditCard = async (data:CreditCard): Promise<CreditCard> => {
  await timeout(100);
  return data;
};

export const editCreditCard = async (data:CreditCard): Promise<CreditCard> => {
  await timeout(100);
  return data;
};

export const deleteCreditCard = async (id:string): Promise<string> => {
  await timeout(100);
  return id;
};

import creditCardJSON from "../data-mock/credit_card.json";
export const getCreditCard = async (): Promise<CreditCard[]> => {
  
  await timeout(100);
  return creditCardJSON;
};