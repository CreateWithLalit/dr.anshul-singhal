import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const isDemo = process.env.NEXT_PUBLIC_DEMO_MODE !== "false";

  if (isDemo) {
    return {
      rules: {
        userAgent: "*",
        disallow: "/",
      },
    };
  }

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
  };
}
