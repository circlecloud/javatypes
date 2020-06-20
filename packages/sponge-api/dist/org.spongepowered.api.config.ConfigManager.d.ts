declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace config {
                /**
                 * Provides configuration for plugins.
                 * <p>Plugins can choose between two places to store their configuration:</p>
                 * <ul>
                 * <li>A shared configuration folder, which is preferred for plugins with
                 * little configuration. These plugins can simply use
                 * {@code plugin_id.conf}.</li>
                 * <li>A configuration folder specific for the plugin, which is preferred
                 * for plugins with a lot of configuration data.</li>
                 * </ul>
                 * <p>In either case, a "default configuration file" is provided in both
                 * scenarios. It is not required that plugins use this, but it does ensure
                 * consistency.</p>
                 * <p>Call either {@link #getSharedConfig(Object)} or
                 * {@link #getPluginConfig(Object)} to get an object that represents one of
                 * the two outlined choices.</p>
                 */
                // @ts-ignore
                interface ConfigManager {
                    /**
                     * Gets the configuration root for a plugin that utilizes the shared
                     * configuration folder.
                     * <p>The shared configuration folder <em>may</em> refer to
                     * "config/" but this may vary between implementations and
                     * configurations.</p>
                     * <p>The plugin parameter is used to determine the filename for
                     * {@link ConfigRoot#getConfigPath()}.</p>
                     * @param instance The plugin instance
                     * @return A shared configuration root
                     */
                    // @ts-ignore
                    getSharedConfig(instance: any): org.spongepowered.api.config.ConfigRoot
                    /**
                     * Gets the configuration root for a plugin that utilizes a configuration
                     * folder specific to the plugin, which <em>may</em> also be a
                     * su-directory of the shared configuration folder.
                     * <p>The provided plugin is used to determine the folder name.</p>
                     * @param instance The plugin instance
                     * @return A plugin-specific configuration root
                     */
                    // @ts-ignore
                    getPluginConfig(instance: any): org.spongepowered.api.config.ConfigRoot
                }
            }
        }
    }
}
