import { PluginOptions } from './types';

const DEFAULT_PREFIX = 'pageMeta';
const DEFAULT_FIELD_NAME = 'pageMeta';

export function requirePluginOptions(input: unknown): Required<PluginOptions> {
  const {
    prefix = DEFAULT_PREFIX,
    fieldName = DEFAULT_FIELD_NAME,
  } = (typeof input === 'object' ? input : {}) as Partial<PluginOptions>;

  return { prefix, fieldName };
}
