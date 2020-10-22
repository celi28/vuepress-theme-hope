import { HeadItem } from "@mr-hope/vuepress-types";
import { PWAOptions } from "../types";

export const head = (options: PWAOptions, head?: HeadItem[]): HeadItem[] => {
  const headList = head || [];

  const metaKeys: string[] = [];
  const linkKeys: string[] = [];

  // Generate Hash for Head
  headList.forEach((item) => {
    if (item[0] === "meta") metaKeys.push(item[1].name);
    else if (item[0] === "link") linkKeys.push(item[1].rel);
  });

  let fallBackIcon = "";
  const setLink = (
    rel: string,
    href: string,
    more: Record<string, string> = {}
  ): void => {
    if (!linkKeys.includes(rel))
      headList.push(["link", { rel, href, ...more }]);
  };

  const setMeta = (
    name: string,
    content: string,
    more: Record<string, string> = {}
  ): void => {
    if (!metaKeys.includes(name))
      headList.push(["meta", { name, content, ...more }]);
  };

  if (options.favicon) setLink("icon", options.favicon);

  if (options.manifest && options.manifest.icons) {
    const { icons } = options.manifest;

    if (icons.length > 0) {
      fallBackIcon = icons[0].src;

      options.manifest.icons.map((icon) => {
        if (icon.type)
          setLink("icon", icon.src, { type: icon.type, sizes: icon.sizes });
        else setLink("icon", icon.src, { sizes: icon.sizes });
      });
    }
  }

  setLink("manifest", `${options.base || "/"}manifest.webmanifest`);
  setMeta("theme-color", options.themeColor || "#46bd87");

  if (
    typeof options.apple === "object" &&
    (options.apple.icon || fallBackIcon)
  ) {
    setLink("apple-touch-icon", options.apple.icon || fallBackIcon);
    setMeta("apple-mobile-web-app-capable", "yes");
    setMeta(
      "apple-mobile-web-app-status-bar-style",
      options.apple.statusBarColor || "black"
    );
    if (options.apple.maskIcon)
      setLink("mask-icon", options.apple.maskIcon, {
        color: options.themeColor || "#46bd87",
      });
  } else if (options.apple !== false && fallBackIcon) {
    setLink("apple-touch-icon", fallBackIcon);
    setMeta("apple-mobile-web-app-capable", "yes");
    setMeta("apple-mobile-web-app-status-bar-style", "black");
  }

  if (
    typeof options.msTile === "object" &&
    (options.msTile.image || fallBackIcon)
  ) {
    setMeta("msapplication-TileImage", options.msTile.image || fallBackIcon);
    setMeta(
      "msapplication-TileColor",
      options.msTile.color || options.themeColor || "#46bd87"
    );
  } else if (options.msTile !== false && fallBackIcon) {
    setMeta("msapplication-TileImage", fallBackIcon);
    setMeta("msapplication-TileColor", options.themeColor || "#46bd87");
  }

  // enhance pwa experience
  setMeta(
    "viewport",
    "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover"
  );

  return headList;
};
