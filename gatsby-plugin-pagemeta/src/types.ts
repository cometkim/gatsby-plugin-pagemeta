export type PluginOptions = {

  /**
   * Comment prefix. Plugin will extract all properties decorated by `@{prefix}`
   *
   * @default `pageMeta`
   */
  prefix?: string,

  /**
   * Field name in context.
   *
   * @default `pageMeta`
   */
  fieldName?: string,
};
