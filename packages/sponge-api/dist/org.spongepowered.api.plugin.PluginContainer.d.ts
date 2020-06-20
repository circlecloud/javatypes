declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace plugin {
                /**
                 * A wrapper around a class marked with an {@link Plugin} annotation to retrieve
                 * information from the annotation for easier use.
                 */
                // @ts-ignore
                interface PluginContainer {
                    /**
                     * Gets the qualified ID of the {@link Plugin} within this container.
                     * @return The plugin ID
                     * @see Plugin#id()
                     */
                    // @ts-ignore
                    getId(): java.lang.String
                    /**
                     * Gets the name of the {@link Plugin} within this container.
                     * @return The plugin name, or {#link #getId()} if unknown
                     * @see Plugin#name()
                     */
                    // @ts-ignore
                    getName(): java.lang.String
                    /**
                     * Gets the version of the {@link Plugin} within this container.
                     * @return The plugin version, or {#link Optional#empty()} if unknown
                     * @see Plugin#version()
                     */
                    // @ts-ignore
                    getVersion(): java.util.Optional<java.lang.String>
                    /**
                     * Gets the description of the {@link Plugin} within this container.
                     * @return The plugin description, or {#link Optional#empty()} if unknown
                     * @see Plugin#description()
                     */
                    // @ts-ignore
                    getDescription(): java.util.Optional<java.lang.String>
                    /**
                     * Gets the url or website of the {@link Plugin} within this container.
                     * @return The plugin url, or {#link Optional#empty()} if unknown
                     * @see Plugin#url()
                     */
                    // @ts-ignore
                    getUrl(): java.util.Optional<java.lang.String>
                    /**
                     * Gets the authors of the {@link Plugin} within this container.
                     * @return The plugin authors, or empty if unknown
                     * @see Plugin#authors()
                     */
                    // @ts-ignore
                    getAuthors(): java.util.List<java.lang.String>
                    /**
                     * Gets a {@link Set} of all dependencies of the {@link Plugin} within this
                     * container.
                     * @return The plugin dependencies, can be empty
                     * @see Plugin#dependencies()
                     */
                    // @ts-ignore
                    getDependencies(): java.util.Set<PluginDependency>
                    /**
                     * Gets the {@link PluginDependency} the plugin in this container has on
                     * the plugin with the specified plugin ID.
                     * @param id The plugin ID of the dependency
                     * @return The dependency, or {#link Optional#empty()} if unknown
                     */
                    // @ts-ignore
                    getDependency(id: string): java.util.Optional<PluginDependency>
                    /**
                     * Retrieves the {@link Asset} of the specified name from the
                     * {@link AssetManager} for this {@link Plugin}.
                     * @param name Name of asset
                     * @return Asset if present, empty otherwise
                     */
                    // @ts-ignore
                    getAsset(name: string): java.util.Optional<org.spongepowered.api.asset.Asset>
                    /**
                     * Returns the source the plugin was loaded from.
                     * @return The source the plugin was loaded from or {#link Optional#empty()}
                     *      if unknown
                     */
                    // @ts-ignore
                    getSource(): java.util.Optional<java.nio.file.Path>
                    /**
                     * Returns the created instance of {@link Plugin} if it is available.
                     * @return The instance if available
                     */
                    // @ts-ignore
                    getInstance(): java.util.Optional<?>
                    /**
                     * Returns the assigned logger to this {@link Plugin}.
                     * @return The assigned logger
                     */
                    // @ts-ignore
                    getLogger(): Logger
                }
            }
        }
    }
}
