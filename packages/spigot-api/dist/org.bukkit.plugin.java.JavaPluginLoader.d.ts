declare namespace org {
    namespace bukkit {
        namespace plugin {
            namespace java {
                /**
                 * Represents a Java plugin loader, allowing plugins in the form of .jar
                 */
                // @ts-ignore
                class JavaPluginLoader extends java.lang.Object implements org.bukkit.plugin.PluginLoader {
                    /**
                     * This class was not meant to be constructed explicitly
                     * @param instance the server instance
                     */
                    // @ts-ignore
                    constructor(instance: org.bukkit.Server)
                    // @ts-ignore
                    readonly pluginParentTimer: org.spigotmc.CustomTimingsHandler
                    // @ts-ignore
                    loadPlugin(file: java.io.File): org.bukkit.plugin.Plugin
                    // @ts-ignore
                    getPluginDescription(file: java.io.File): org.bukkit.plugin.PluginDescriptionFile
                    // @ts-ignore
                    getPluginFileFilters(): java.util.regex.Pattern[]
                    // @ts-ignore
                    createRegisteredListeners(listener: org.bukkit.event.Listener, plugin: org.bukkit.plugin.Plugin): java.util.Map<java.lang.Class<? extends org.bukkit.event.Event>, java.util.Set<org.bukkit.plugin.RegisteredListener>>
                    // @ts-ignore
                    enablePlugin(plugin: org.bukkit.plugin.Plugin): void
                    // @ts-ignore
                    disablePlugin(plugin: org.bukkit.plugin.Plugin): void
                }
            }
        }
    }
}
