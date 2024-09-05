import { Inter } from "next/font/google";
import "./Global.css";
import StyledComponentsRegistry from "@/Lib/registry";
import HeaderSidebarWrapper from "@/Components/Common/Header/HeaderSidebarWrapper";
import GlobalStyle from "@/public/Assets/Style/GlobalStyle";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <HeaderSidebarWrapper />
          {children}
        </StyledComponentsRegistry>
        <GlobalStyle />
      </body>
    </html>
  );
}
