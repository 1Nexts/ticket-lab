import { CreditCard } from "@/models/creditCard.model";
import httpClient from "@/utils/httpClient";
import { timeout } from "utils/utils";

export const addCreditCard = async (data: CreditCard): Promise<CreditCard> => {
  try {
    await timeout(100);
    return data;
  } catch (error) {
    throw error;
  }
};

export const editCreditCard = async (data: CreditCard): Promise<CreditCard> => {
  try {
    await timeout(100);
    return data;
  } catch (error) {
    throw error;
  }
};

export const deleteCreditCard = async (id: string): Promise<string> => {
  try {
    await timeout(100);
    return id;
  } catch (error) {
    throw error;
  }
};

import creditCardJSON from "../data-mock/credit_card.json";
export const getCreditCard = async (): Promise<CreditCard[]> => {
  try {
    await timeout(100);
    return creditCardJSON;
  } catch (error) {
    throw error;
  }
};
