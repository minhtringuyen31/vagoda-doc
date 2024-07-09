import React from "react";
import { DocsThemeConfig, useConfig } from "nextra-theme-docs";
import { useRouter } from "next/router";

const config: DocsThemeConfig = {
  logo: () => {
    const { darkMode } = useConfig();
    console.log("Dark Mode: ", darkMode);
    return darkMode ? (
      <img
        src="https://res.cloudinary.com/dgsrxvev1/image/upload/v1720255067/vagoda_viznwl.png"
        style={{ height: 50 }}
        alt="logo"
      />
    ) : (
      <img
        src="https://res.cloudinary.com/dgsrxvev1/image/upload/v1720255067/vagoda_viznwl.png"
        style={{ height: 50 }}
        alt="logo"
      />
    );
  },
  project: {
    link: "https://github.com/shuding/nextra-docs-template",
  },
  chat: {
    link: "https://discord.com",
  },
  docsRepositoryBase: "https://github.com/shuding/nextra-docs-template",
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
