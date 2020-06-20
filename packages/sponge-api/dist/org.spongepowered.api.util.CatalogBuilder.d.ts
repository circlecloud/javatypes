declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace util {
                /**
                 * A base builder to construct {@link CatalogType}s.
                 */
                // @ts-ignore
                interface CatalogBuilder<C extends org.spongepowered.api.CatalogType, B extends org.spongepowered.api.util.ResettableBuilder<C, B>> extends org.spongepowered.api.util.ResettableBuilder<C, B> {
                    /**
                     * Sets the id of the {@link CatalogType} (without the namespace/plugin id).
                     * @param id The id
                     * @return This builder for chaining
                     */
                    // @ts-ignore
                    id(id: string): B
                    /**
                     * Sets the name of the {@link CatalogType}. Defaults to {@link #id(String)}.
                     * @param name The name
                     * @return This builder for chaining
                     */
                    // @ts-ignore
                    name(name: string): B
                    /**
                     * Sets the name of the {@link CatalogType} as a {@link Translation}. Defaults to {@link #id}.
                     * @param translation The name translation
                     * @return This builder for chaining
                     */
                    // @ts-ignore
                    name(translation: org.spongepowered.api.text.translation.Translation): B
                    /**
                     * Builds the {@link CatalogType} of type {@code C}.
                     * <p>The last {@link PluginContainer} in the cause stack will be used to
                     * determine which plugin was used to construct the {@link CatalogType}.</p>
                     * @return The built catalog type
                     * @throws IllegalStateException If not all required options were specified
                     */
                    // @ts-ignore
                    build(): C
                    /**
                     * @deprecated It's not allowed to duplicate catalog types.
                     */
                    // @ts-ignore
                    from(value: C extends org.spongepowered.api.CatalogType): B
                }
            }
        }
    }
}
