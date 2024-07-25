import React from "react";
import { DocsThemeConfig, useConfig } from "nextra-theme-docs";
import { useRouter } from "next/router";

const config: DocsThemeConfig = {
  logo: () => {
    const { darkMode } = useConfig();
    console.log("Dark Mode: ", darkMode);
    return darkMode ? (
      <img
        src="https://res.cloudinary.com/dgsrxvev1/image/upload/v1720526803/dark_xzdwmv.png"
        style={{ height: 45 }}
        alt="l_logo"
      />
    ) : (
      <img
        src="https://res.cloudinary.com/dgsrxvev1/image/upload/v1720526803/dark_xzdwmv.png"
        style={{ height: 45 }}
        alt="d_logo"
      />
    );
  },
  project: {
    link: "https://github.com/AIML-In-Ecommerce",
  },
  chat: {
    link: "https://discord.com",
  },
  docsRepositoryBase: "https://github.com/minhtringuyen31/vagoda-doc.git",
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Vagoda Doc" />
      <meta
        property="og:description"
        content="The document site of Vagoda project"
      />
    </>
  ),
  footer: {
    text: "Vagoda",
  },
  useNextSeoProps() {
    const { asPath } = useRouter();
    if (asPath !== "/") {
      return {
        titleTemplate: "%s – Vagoda",
      };
    }
  },
};

export default config;
