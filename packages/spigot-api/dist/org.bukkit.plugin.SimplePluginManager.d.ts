declare namespace org {
    namespace bukkit {
        namespace plugin {
            /**
             * Handles all plugin management from the Server
             */
            // @ts-ignore
            class SimplePluginManager extends java.lang.Object implements org.bukkit.plugin.PluginManager {
                // @ts-ignore
                constructor(instance: org.bukkit.Server, commandMap: org.bukkit.command.SimpleCommandMap)
                /**
                 * Registers the specified plugin loader
                 * @param loader Class name of the PluginLoader to register
                 * @throws IllegalArgumentException Thrown when the given Class is not a
                 *      valid PluginLoader
                 */
                // @ts-ignore
                registerInterface(loader: java.lang.Class<org.bukkit.plugin.PluginLoader>): void
                /**
                 * Loads the plugins contained within the specified directory
                 * @param directory Directory to check for plugins
                 * @return A list of all plugins loaded
                 */
                // @ts-ignore
                loadPlugins(directory: java.io.File): org.bukkit.plugin.Plugin[]
                /**
                 * Loads the plugin in the specified file
                 * <p>
                 * File must be valid according to the current enabled Plugin interfaces
                 * @param file File containing the plugin to load
                 * @return The Plugin loaded, or null if it was invalid
                 * @throws InvalidPluginException Thrown when the specified file is not a
                 *      valid plugin
                 * @throws UnknownDependencyException If a required dependency could not
                 *      be found
                 */
                // @ts-ignore
                loadPlugin(file: java.io.File): org.bukkit.plugin.Plugin
                /**
                 * Checks if the given plugin is loaded and returns it when applicable
                 * <p>
                 * Please note that the name of the plugin is case-sensitive
                 * @param name Name of the plugin to check
                 * @return Plugin if it exists, otherwise null
                 */
                // @ts-ignore
                getPlugin(name: string): org.bukkit.plugin.Plugin
                // @ts-ignore
                getPlugins(): org.bukkit.plugin.Plugin[]
                /**
                 * Checks if the given plugin is enabled or not
                 * <p>
                 * Please note that the name of the plugin is case-sensitive.
                 * @param name Name of the plugin to check
                 * @return true if the plugin is enabled, otherwise false
                 */
                // @ts-ignore
                isPluginEnabled(name: string): boolean
                /**
                 * Checks if the given plugin is enabled or not
                 * @param plugin Plugin to check
                 * @return true if the plugin is enabled, otherwise false
                 */
                // @ts-ignore
                isPluginEnabled(plugin: org.bukkit.plugin.Plugin): boolean
                // @ts-ignore
                enablePlugin(plugin: org.bukkit.plugin.Plugin): void
                // @ts-ignore
                disablePlugins(): void
                // @ts-ignore
                disablePlugin(plugin: org.bukkit.plugin.Plugin): void
                // @ts-ignore
                clearPlugins(): void
                /**
                 * Calls an event with the given details.
                 * @param event Event details
                 */
                // @ts-ignore
                callEvent(event: org.bukkit.event.Event): void
                // @ts-ignore
                registerEvents(listener: org.bukkit.event.Listener, plugin: org.bukkit.plugin.Plugin): void
                // @ts-ignore
                registerEvent(event: java.lang.Class<org.bukkit.event.Event>, listener: org.bukkit.event.Listener, priority: org.bukkit.event.EventPriority, executor: org.bukkit.plugin.EventExecutor, plugin: org.bukkit.plugin.Plugin): void
                /**
                 * Registers the given event to the specified listener using a directly
                 * passed EventExecutor
                 * @param event Event class to register
                 * @param listener PlayerListener to register
                 * @param priority Priority of this event
                 * @param executor EventExecutor to register
                 * @param plugin Plugin to register
                 * @param ignoreCancelled Do not call executor if event was already
                 *      cancelled
                 */
                // @ts-ignore
                registerEvent(event: java.lang.Class<org.bukkit.event.Event>, listener: org.bukkit.event.Listener, priority: org.bukkit.event.EventPriority, executor: org.bukkit.plugin.EventExecutor, plugin: org.bukkit.plugin.Plugin, ignoreCancelled: boolean): void
                // @ts-ignore
                getPermission(name: string): org.bukkit.permissions.Permission
                // @ts-ignore
                addPermission(perm: org.bukkit.permissions.Permission): void
                // @ts-ignore
                addPermission(perm: org.bukkit.permissions.Permission, dirty: boolean): void
                // @ts-ignore
                getDefaultPermissions(op: boolean): java.util.Set<org.bukkit.permissions.Permission>
                // @ts-ignore
                removePermission(perm: org.bukkit.permissions.Permission): void
                // @ts-ignore
                removePermission(name: string): void
                // @ts-ignore
                recalculatePermissionDefaults(perm: org.bukkit.permissions.Permission): void
                // @ts-ignore
                dirtyPermissibles(): void
                // @ts-ignore
                subscribeToPermission(permission: string, permissible: org.bukkit.permissions.Permissible): void
                // @ts-ignore
                unsubscribeFromPermission(permission: string, permissible: org.bukkit.permissions.Permissible): void
                // @ts-ignore
                getPermissionSubscriptions(permission: string): java.util.Set<org.bukkit.permissions.Permissible>
                // @ts-ignore
                subscribeToDefaultPerms(op: boolean, permissible: org.bukkit.permissions.Permissible): void
                // @ts-ignore
                unsubscribeFromDefaultPerms(op: boolean, permissible: org.bukkit.permissions.Permissible): void
                // @ts-ignore
                getDefaultPermSubscriptions(op: boolean): java.util.Set<org.bukkit.permissions.Permissible>
                // @ts-ignore
                getPermissions(): java.util.Set<org.bukkit.permissions.Permission>
                // @ts-ignore
                isTransitiveDepend(plugin: org.bukkit.plugin.PluginDescriptionFile, depend: org.bukkit.plugin.PluginDescriptionFile): boolean
                // @ts-ignore
                useTimings(): boolean
                /**
                 * Sets whether or not per event timing code should be used
                 * @param use True if per event timing code should be used
                 */
                // @ts-ignore
                useTimings(use: boolean): void
            }
        }
    }
}
