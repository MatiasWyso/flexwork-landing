import { collection, addDoc } from "firebase/firestore";
import { db } from "./db";

export const saveSubscription = async (
  name: string,
  lastname: string,
  email: string
) => {
  try {
    await addDoc(collection(db, "subscriptions"), {
      name: name,
      lastname: lastname,
      email: email,
      timestamp: new Date(),
    });
    console.log("Subscription saved successfully");
  } catch (e) {
    console.error("Error saving subscription: ", e);
  }
};
