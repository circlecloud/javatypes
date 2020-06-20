declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace asset {
                /**
                 * The AssetManager offers a convenient way to easily retrieve resources from
                 * Sponge {@link Plugin}s. The asset manager will attempt to find the
                 * asset of the specified name at: <code>assets/&lt;plugin_id&gt;</code>
                 */
                // @ts-ignore
                interface AssetManager {
                    /**
                     * Returns the {@link Asset} of the specified name for the specified
                     * {@link Plugin} instance.
                     * @param plugin Plugin instance
                     * @param name Name of resource to retrieve
                     * @return Asset if present, empty otherwise
                     */
                    // @ts-ignore
                    getAsset(plugin: any, name: string): java.util.Optional<org.spongepowered.api.asset.Asset>
                    /**
                     * Returns the {@link Asset} of the specified name within the domain of the
                     * implementation. This method will typically call
                     * {@link #getAsset(Object, String)} using a dummy
                     * {@link PluginContainer} for the SpongeAPI implementation.
                     * @param name Name of resource to retrieve
                     * @return Asset if present, empty otherwise
                     */
                    // @ts-ignore
                    getAsset(name: string): java.util.Optional<org.spongepowered.api.asset.Asset>
                }
            }
        }
    }
}
