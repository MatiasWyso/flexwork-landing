import { collection, addDoc } from "firebase/firestore";
import { db } from "./db";

export const saveSubscription = async (
  name: string,
  email: string,
  lastname: string,
  phone: string
) => {
  try {
    await addDoc(collection(db, "subscriptions"), {
      name: name,
      lastname: lastname,
      email: email,
      phone: phone,
      timestamp: new Date(),

    });
    console.log("Subscription saved successfully");
  } catch (e) {
    console.error("Error saving subscription: ", e);
  }
};
