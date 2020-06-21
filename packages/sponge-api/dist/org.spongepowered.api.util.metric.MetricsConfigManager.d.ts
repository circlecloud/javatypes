declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace util {
                namespace metric {
                    /**
                     * Provides information about whether a server has granted permission for
                     * server metric data to be transmitted on a per plugin basis.
                     * <p>This manager is {@code @Inject}able into plugin classes.</p>
                     */
                    // @ts-ignore
                    interface MetricsConfigManager {
                        /**
                         * Gets whether permission for third-party metrics gathering has been
                         * granted for a specific plugin (or the global permission if the plugin
                         * has not got a specific permission or lack thereof).
                         * <p>The value returned from this <em>should not be stored</em>. As the
                         * configuration/permission can be updated at any time, it is best to
                         * check this each time metrics collection is due to occur.</p>
                         * @param container The {#link PluginContainer} to check for permission for
                         * @return true if metrics gathering plugins have permission to gather
                         *          data about this plugin
                         */
                        // @ts-ignore
                        areMetricsEnabled(container: org.spongepowered.api.plugin.PluginContainer): boolean
                        /**
                         * Gets whether permission for third-party metrics gathering has been
                         * granted for a specific plugin (or the global permission if the plugin
                         * has not got a specific permission or lack thereof).
                         * <p>The value returned from this <em>should not be stored</em>. As the
                         * configuration/permission can be updated at any time, it is best to
                         * check this each time server metric collection is due to occur.</p>
                         * @param plugin The plugin object (annotated with
                         *                {#link org.spongepowered.api.plugin.Plugin})
                         * @throws IllegalArgumentException if the supplied object is not a plugin
                         *                                   object
                         * @return true if metrics gathering plugins have permission to gather
                         *          data about this plugin
                         */
                        // @ts-ignore
                        areMetricsEnabled(plugin: java.lang.Object | any): boolean
                        /**
                         * Gets the current <em>global</em> state of collection. The collection state determines
                         * how data collection should be handled.
                         * Global state determines how an undefined state for a specific plugin should be handled.
                         * If a plugin has a state specified then it will override the global state.
                         * {@link Tristate#TRUE} Permits data collection
                         * {@link Tristate#FALSE} Disallows data collection, this has been explicitly set
                         * {@link Tristate#UNDEFINED} Disallows data collection, this is set by default
                         * @return The global state of collection
                         */
                        // @ts-ignore
                        getGlobalCollectionState(): org.spongepowered.api.util.Tristate
                        /**
                         * Gets the current state of collection for the specified plugin. The collection state
                         * determines how data collection should be handled.
                         * {@link Tristate#TRUE} Permits data collection
                         * {@link Tristate#FALSE} Disallows data collection, this has been explicitly set
                         * {@link Tristate#UNDEFINED} Inherit from {@link MetricsConfigManager#getGlobalCollectionState()}, this is set by default
                         * @param container The {#link org.spongepowered.api.plugin.PluginContainer}
                         * @return The current collection state
                         */
                        // @ts-ignore
                        getCollectionState(container: org.spongepowered.api.plugin.PluginContainer): org.spongepowered.api.util.Tristate
                    }
                }
            }
        }
    }
}
