import { generateSiteMap } from "./generateSitemap";
import { logger } from "./utils";

import type { Plugin, PluginConfig, PluginObject } from "@vuepress/core";
import type { SitemapOptions } from "../shared";

export const sitemapPlugin: Plugin<SitemapOptions> = (options) => {
  const plugin: PluginObject = {
    name: "vuepress-plugin-sitemap2",
  };

  if (!options.hostname) {
    logger.warn('"hostname" is required');

    return plugin;
  }

  return {
    ...plugin,

    onGenerated: (app): Promise<void> =>
      generateSiteMap(app, options as SitemapOptions),
  };
};

export const sitemap = (
  options: SitemapOptions | false
): PluginConfig<SitemapOptions> => ["sitemap2", options];
