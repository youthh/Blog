import React from "react";
import { getDictionary } from "../../../../../lib/dictionaries";
import { SignIn } from "@/pages";

const Page = async ({
  params: { lang },
}: {
  params: { lang: "en" | "ua" };
}) => {
  const dictionary = await getDictionary(lang);

  return (
    <div className={"container"}>
      <SignIn dictionary={dictionary} />
    </div>
  );
};

export default Page;
