declare namespace org {
    namespace bukkit {
        namespace plugin {
            /**
             * Represents a plugin loader, which handles direct access to specific types
             * of plugins
             */
            // @ts-ignore
            interface PluginLoader {
                /**
                 * Loads the plugin contained in the specified file
                 * @param file File to attempt to load
                 * @return Plugin that was contained in the specified file, or null if
                 *      unsuccessful
                 * @throws InvalidPluginException Thrown when the specified file is not a
                 *      plugin
                 * @throws UnknownDependencyException If a required dependency could not
                 *      be found
                 */
                // @ts-ignore
                loadPlugin(file: java.io.File): org.bukkit.plugin.Plugin
                /**
                 * Loads a PluginDescriptionFile from the specified file
                 * @param file File to attempt to load from
                 * @return A new PluginDescriptionFile loaded from the plugin.yml in the
                 *      specified file
                 * @throws InvalidDescriptionException If the plugin description file
                 *      could not be created
                 */
                // @ts-ignore
                getPluginDescription(file: java.io.File): org.bukkit.plugin.PluginDescriptionFile
                /**
                 * Returns a list of all filename filters expected by this PluginLoader
                 * @return The filters
                 */
                // @ts-ignore
                getPluginFileFilters(): java.util.regex.Pattern[]
                /**
                 * Creates and returns registered listeners for the event classes used in
                 * this listener
                 * @param listener The object that will handle the eventual call back
                 * @param plugin The plugin to use when creating registered listeners
                 * @return The registered listeners.
                 */
                // @ts-ignore
                createRegisteredListeners(listener: org.bukkit.event.Listener, plugin: org.bukkit.plugin.Plugin): java.util.Map<java.lang.Class<? extends org.bukkit.event.Event>, java.util.Set<org.bukkit.plugin.RegisteredListener>>
                /**
                 * Enables the specified plugin
                 * <p>
                 * Attempting to enable a plugin that is already enabled will have no
                 * effect
                 * @param plugin Plugin to enable
                 */
                // @ts-ignore
                enablePlugin(plugin: org.bukkit.plugin.Plugin): void
                /**
                 * Disables the specified plugin
                 * <p>
                 * Attempting to disable a plugin that is not enabled will have no effect
                 * @param plugin Plugin to disable
                 */
                // @ts-ignore
                disablePlugin(plugin: org.bukkit.plugin.Plugin): void
            }
        }
    }
}
