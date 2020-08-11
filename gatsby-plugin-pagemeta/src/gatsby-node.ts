import fs from 'fs';
import { promisify } from 'util';
import { GatsbyNode } from 'gatsby';

import { requirePluginOptions } from './utils';
import { extractProperties } from './lib';

const readFile = promisify(fs.readFile);

export const onCreatePage: GatsbyNode['onCreatePage'] = async (
  {
    page,
    actions: { createPage, deletePage },
  },
  pluginOptionsInput,
) => {
  const pluginOptions = requirePluginOptions(pluginOptionsInput);
  const { prefix, fieldName } = pluginOptions;

  const content = await readFile(page.path, 'utf-8');
  const properties = extractProperties(prefix, content);

  deletePage(page);
  createPage({
    ...page,
    context: {
      ...page.context,
      [fieldName]: {
        ...Array.from(properties.entries()).reduce((acc, [key, val]) => {
          return { ...acc, [key]: val };
        }, {}),
      }
    }
  });
};
