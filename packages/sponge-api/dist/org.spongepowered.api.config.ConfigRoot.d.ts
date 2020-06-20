declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace config {
                /**
                 * A configuration root is a representation of where configuration
                 * data can be stored, which is ultimately mapped to a directory on disk.
                 * <p>The underlying directory may refer to a shared directory (shared
                 * by many plugins) or one that is specific to a plugin. Be mindful
                 * of simply storing data in {@link #getDirectory()} depending on the
                 * type of configuration root.</p>
                 * <p>A default configuration file is provided via both
                 * {@link #getConfigPath()} and {@link #getConfig()}, but other or additional
                 * configuration files can be stored in the directory returned by
                 * {@link #getDirectory()} (as long as it's
                 * not the shared configuration folder).</p>
                 * @see ConfigManager A provider of configuration root
                 */
                // @ts-ignore
                interface ConfigRoot {
                    /**
                     * Gets the pathname to the default configuration file for the plugin.
                     * <p>If the configuration root is shared, then the returned pathname will
                     * refer to the path {@code $config/$plugin_id.conf} (where "$config" is the
                     * shared configuration directory). Otherwise, the returned pathname will
                     * refer to a file named "config.conf" stored in a directory specific to
                     * the plugin.</p>
                     * <p>The returned pathname may refer to a file that does not yet exist.
                     * It is up to the caller of this method to create the file if desired.</p>
                     * @return A file, which may not yet exist
                     * @see DefaultConfig
                     */
                    // @ts-ignore
                    getConfigPath(): java.nio.file.Path
                    /**
                     * Gets the configuration file that utilizes the default configuration
                     * pathname.
                     * @return A configuration object
                     * @see #getConfigPath()
                     */
                    // @ts-ignore
                    getConfig(): <any>
                    /**
                     * Gets the directory that this configuration root refers to.
                     * <p>The returned pathname may not refer to a directory that exists
                     * yet.</p>
                     * @return A directory
                     */
                    // @ts-ignore
                    getDirectory(): java.nio.file.Path
                }
            }
        }
    }
}
