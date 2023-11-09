"use client";
import React from "react";
import InstagramIcon from "../../../public/assets/icons/Instagram.svg";
import FacebookIcon from "../../../public/assets/icons/facebook.svg";
import GoogleIcon from "../../../public/assets/icons/Google.svg";
import { Button } from "@mui/material";
import Image from "next/image";
import { Box } from "@mui/system";
import { useSession, signIn } from "next-auth/react";

const buttonStyles = {
  background: "transparent",
  minWidth: "36px",
  padding: "0",
  "&:hover": {
    background: "rgb(255,249,249)",
  },
};
export const SigInSocial = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        maxWidth: "185px",
        margin: "0 auto",
        gap: "20px",
      }}
    >
      <Button onClick={() => signIn("facebook")} sx={buttonStyles}>
        <Image src={FacebookIcon} width={40} height={40} alt={"facebook"} />
      </Button>
      <Button onClick={() => signIn("instagram")} sx={buttonStyles}>
        <Image src={InstagramIcon} width={40} height={40} alt={"Instagram"} />
      </Button>
      <Button onClick={() => signIn("google")} sx={buttonStyles}>
        <Image src={GoogleIcon} width={40} height={40} alt={"google"} />
      </Button>
    </Box>
  );
};
