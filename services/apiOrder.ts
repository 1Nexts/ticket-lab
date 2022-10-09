import httpClient from "@/utils/httpClient";

export const submitPlaceorder = async (objFormData: FormData): Promise<any> => {
  try {
    // console.log("objFormData = ", objFormData);
    // Display the key/value pairs
    // for (var pair of objFormData.entries()) {
    //   console.log(pair[0] + ", " + pair[1]);
    // }

    return {
      requestStatus:'fulfilled'
    }

  } catch (error: any) {
    throw error;
  }
};
