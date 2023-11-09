"use client";
import React, { ReactNode } from "react";
import { ThemeProvider } from "@mui/system";
import { theme } from "@/theme/theme";

const CustomThemeProvider = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </>
  );
};

export default CustomThemeProvider;
