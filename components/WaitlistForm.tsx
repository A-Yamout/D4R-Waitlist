import { useState } from "react";
import FirestoreManager from "../util/firestoreManager";
import toast, { Toaster } from "react-hot-toast";

const firestore = new FirestoreManager();

const error = (msg: string) => toast.error(msg);
const success = () => toast.success("Your email was waitlisted.");

async function handleSubmit(email: string) {
  const validationResult = await firestore.validateEmail(email);

  console.log(validationResult);

  if (validationResult === "success") {
    firestore.addEmail(email);
    success();
  } else {
    error(validationResult);
  }
}

export const WaitlistForm = () => {
  const [email, setEmail] = useState<string>("");

  return (
    <>
      <Toaster />
      <form
        className="md:flex items-center gap-2 mt-8 mb-2 select-none"
        onSubmit={(e) => e.preventDefault()}
      >
        <WaitlistInput email={email} setEmail={setEmail} />
        <SubmitButton email={email} />
      </form>
    </>
  );
};

const WaitlistInput = ({ email, setEmail }) => {
  return (
    <div className="relative w-full md:w-[25rem]">
      <span className="rounded-full h-5 bg-variant-2 text-[#fff] uppercase absolute -top-2 left-4 px-5 text-[0.5rem] font-bold grid place-items-center">
        Email Address
      </span>
      <input
        className="p-4 bg-fg text-[#000] outline-none ring-variant-2 focus:ring-2 rounded-lg w-full h-[4rem]"
        placeholder="example@email.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      ></input>
    </div>
  );
};

const SubmitButton = ({ email }) => {
  return (
    <button
      type="submit"
      className="uppercase inline-block float-right mt-2 p-3 md:block md:h-[4rem] md:m-0 md:p-4 bg-[#fff] text-variant-3 rounded-lg outline-none font-semibold hover:opacity-90"
      onClick={() => handleSubmit(email)}
    >
      Submit Email
    </button>
  );
};
