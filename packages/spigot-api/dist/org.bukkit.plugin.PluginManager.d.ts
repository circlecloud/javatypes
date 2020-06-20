declare namespace org {
    namespace bukkit {
        namespace plugin {
            /**
             * Handles all plugin management from the Server
             */
            // @ts-ignore
            interface PluginManager {
                /**
                 * Registers the specified plugin loader
                 * @param loader Class name of the PluginLoader to register
                 * @throws IllegalArgumentException Thrown when the given Class is not a
                 *      valid PluginLoader
                 */
                // @ts-ignore
                registerInterface(loader: java.lang.Class<org.bukkit.plugin.PluginLoader>): void
                /**
                 * Checks if the given plugin is loaded and returns it when applicable
                 * <p>
                 * Please note that the name of the plugin is case-sensitive
                 * @param name Name of the plugin to check
                 * @return Plugin if it exists, otherwise null
                 */
                // @ts-ignore
                getPlugin(name: string): org.bukkit.plugin.Plugin
                /**
                 * Gets a list of all currently loaded plugins
                 * @return Array of Plugins
                 */
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
                /**
                 * Loads the plugin in the specified file
                 * <p>
                 * File must be valid according to the current enabled Plugin interfaces
                 * @param file File containing the plugin to load
                 * @return The Plugin loaded, or null if it was invalid
                 * @throws InvalidPluginException Thrown when the specified file is not a
                 *      valid plugin
                 * @throws InvalidDescriptionException Thrown when the specified file
                 *      contains an invalid description
                 * @throws UnknownDependencyException If a required dependency could not
                 *      be resolved
                 */
                // @ts-ignore
                loadPlugin(file: java.io.File): org.bukkit.plugin.Plugin
                /**
                 * Loads the plugins contained within the specified directory
                 * @param directory Directory to check for plugins
                 * @return A list of all plugins loaded
                 */
                // @ts-ignore
                loadPlugins(directory: java.io.File): org.bukkit.plugin.Plugin[]
                /**
                 * Disables all the loaded plugins
                 */
                // @ts-ignore
                disablePlugins(): void
                /**
                 * Disables and removes all plugins
                 */
                // @ts-ignore
                clearPlugins(): void
                /**
                 * Calls an event with the given details
                 * @param event Event details
                 * @throws IllegalStateException Thrown when an asynchronous event is
                 *      fired from synchronous code.
                 *      <p>
                 *      <i>Note: This is best-effort basis, and should not be used to test
                 *      synchronized state. This is an indicator for flawed flow logic.</i>
                 */
                // @ts-ignore
                callEvent(event: org.bukkit.event.Event): void
                /**
                 * Registers all the events in the given listener class
                 * @param listener Listener to register
                 * @param plugin Plugin to register
                 */
                // @ts-ignore
                registerEvents(listener: org.bukkit.event.Listener, plugin: org.bukkit.plugin.Plugin): void
                /**
                 * Registers the specified executor to the given event class
                 * @param event Event type to register
                 * @param listener Listener to register
                 * @param priority Priority to register this event at
                 * @param executor EventExecutor to register
                 * @param plugin Plugin to register
                 */
                // @ts-ignore
                registerEvent(event: java.lang.Class<org.bukkit.event.Event>, listener: org.bukkit.event.Listener, priority: org.bukkit.event.EventPriority, executor: org.bukkit.plugin.EventExecutor, plugin: org.bukkit.plugin.Plugin): void
                /**
                 * Registers the specified executor to the given event class
                 * @param event Event type to register
                 * @param listener Listener to register
                 * @param priority Priority to register this event at
                 * @param executor EventExecutor to register
                 * @param plugin Plugin to register
                 * @param ignoreCancelled Whether to pass cancelled events or not
                 */
                // @ts-ignore
                registerEvent(event: java.lang.Class<org.bukkit.event.Event>, listener: org.bukkit.event.Listener, priority: org.bukkit.event.EventPriority, executor: org.bukkit.plugin.EventExecutor, plugin: org.bukkit.plugin.Plugin, ignoreCancelled: boolean): void
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
                /**
                 * Gets a {@link Permission} from its fully qualified name
                 * @param name Name of the permission
                 * @return Permission, or null if none
                 */
                // @ts-ignore
                getPermission(name: string): org.bukkit.permissions.Permission
                /**
                 * Adds a {@link Permission} to this plugin manager.
                 * <p>
                 * If a permission is already defined with the given name of the new
                 * permission, an exception will be thrown.
                 * @param perm Permission to add
                 * @throws IllegalArgumentException Thrown when a permission with the same
                 *      name already exists
                 */
                // @ts-ignore
                addPermission(perm: org.bukkit.permissions.Permission): void
                /**
                 * Removes a {@link Permission} registration from this plugin manager.
                 * <p>
                 * If the specified permission does not exist in this plugin manager,
                 * nothing will happen.
                 * <p>
                 * Removing a permission registration will <b>not</b> remove the
                 * permission from any {@link Permissible}s that have it.
                 * @param perm Permission to remove
                 */
                // @ts-ignore
                removePermission(perm: org.bukkit.permissions.Permission): void
                /**
                 * Removes a {@link Permission} registration from this plugin manager.
                 * <p>
                 * If the specified permission does not exist in this plugin manager,
                 * nothing will happen.
                 * <p>
                 * Removing a permission registration will <b>not</b> remove the
                 * permission from any {@link Permissible}s that have it.
                 * @param name Permission to remove
                 */
                // @ts-ignore
                removePermission(name: string): void
                /**
                 * Gets the default permissions for the given op status
                 * @param op Which set of default permissions to get
                 * @return The default permissions
                 */
                // @ts-ignore
                getDefaultPermissions(op: boolean): java.util.Set<org.bukkit.permissions.Permission>
                /**
                 * Recalculates the defaults for the given {@link Permission}.
                 * <p>
                 * This will have no effect if the specified permission is not registered
                 * here.
                 * @param perm Permission to recalculate
                 */
                // @ts-ignore
                recalculatePermissionDefaults(perm: org.bukkit.permissions.Permission): void
                /**
                 * Subscribes the given Permissible for information about the requested
                 * Permission, by name.
                 * <p>
                 * If the specified Permission changes in any form, the Permissible will
                 * be asked to recalculate.
                 * @param permission Permission to subscribe to
                 * @param permissible Permissible subscribing
                 */
                // @ts-ignore
                subscribeToPermission(permission: string, permissible: org.bukkit.permissions.Permissible): void
                /**
                 * Unsubscribes the given Permissible for information about the requested
                 * Permission, by name.
                 * @param permission Permission to unsubscribe from
                 * @param permissible Permissible subscribing
                 */
                // @ts-ignore
                unsubscribeFromPermission(permission: string, permissible: org.bukkit.permissions.Permissible): void
                /**
                 * Gets a set containing all subscribed {@link Permissible}s to the given
                 * permission, by name
                 * @param permission Permission to query for
                 * @return Set containing all subscribed permissions
                 */
                // @ts-ignore
                getPermissionSubscriptions(permission: string): java.util.Set<org.bukkit.permissions.Permissible>
                /**
                 * Subscribes to the given Default permissions by operator status
                 * <p>
                 * If the specified defaults change in any form, the Permissible will be
                 * asked to recalculate.
                 * @param op Default list to subscribe to
                 * @param permissible Permissible subscribing
                 */
                // @ts-ignore
                subscribeToDefaultPerms(op: boolean, permissible: org.bukkit.permissions.Permissible): void
                /**
                 * Unsubscribes from the given Default permissions by operator status
                 * @param op Default list to unsubscribe from
                 * @param permissible Permissible subscribing
                 */
                // @ts-ignore
                unsubscribeFromDefaultPerms(op: boolean, permissible: org.bukkit.permissions.Permissible): void
                /**
                 * Gets a set containing all subscribed {@link Permissible}s to the given
                 * default list, by op status
                 * @param op Default list to query for
                 * @return Set containing all subscribed permissions
                 */
                // @ts-ignore
                getDefaultPermSubscriptions(op: boolean): java.util.Set<org.bukkit.permissions.Permissible>
                /**
                 * Gets a set of all registered permissions.
                 * <p>
                 * This set is a copy and will not be modified live.
                 * @return Set containing all current registered permissions
                 */
                // @ts-ignore
                getPermissions(): java.util.Set<org.bukkit.permissions.Permission>
                /**
                 * Returns whether or not timing code should be used for event calls
                 * @return True if event timings are to be used
                 */
                // @ts-ignore
                useTimings(): boolean
            }
        }
    }
}
