declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace plugin {
                /**
                 * The manager that manages plugins. This manager can retrieve
                 * {@link PluginContainer}s from {@link Plugin} instances, getting
                 * {@link Logger}s, etc.
                 */
                // @ts-ignore
                interface PluginManager {
                    // @ts-ignore
                    readonly MINECRAFT_PLUGIN_ID: java.lang.String | string
                    // @ts-ignore
                    readonly SPONGE_PLUGIN_ID: java.lang.String | string
                    /**
                     * Gets the plugin container from an instance.
                     * @param instance The instance
                     * @return The container
                     */
                    // @ts-ignore
                    fromInstance(instance: java.lang.Object | any): java.util.Optional<org.spongepowered.api.plugin.PluginContainer>
                    /**
                     * Retrieves a {@link PluginContainer} based on its ID.
                     * @param id The plugin ID
                     * @return The plugin, if available
                     */
                    // @ts-ignore
                    getPlugin(id: java.lang.String | string): java.util.Optional<org.spongepowered.api.plugin.PluginContainer>
                    /**
                     * Gets a {@link Collection} of all {@link PluginContainer}s.
                     * @return The plugins
                     */
                    // @ts-ignore
                    getPlugins(): Array<org.spongepowered.api.plugin.PluginContainer>
                    /**
                     * Checks if a plugin is loaded based on its ID.
                     * This may contain plugins/mods from other systems in some implementations.
                     * @param id the id of the {#link Plugin}
                     * @return {#code true} if loaded {@code false} if not loaded.
                     */
                    // @ts-ignore
                    isLoaded(id: java.lang.String | string): boolean
                }
            }
        }
    }
}
