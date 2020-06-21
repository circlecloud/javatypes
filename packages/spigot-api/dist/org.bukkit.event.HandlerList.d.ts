declare namespace org {
    namespace bukkit {
        namespace event {
            /**
             * A list of event handlers, stored per-event. Based on lahwran's fevents.
             */
            // @ts-ignore
            class HandlerList extends java.lang.Object {
                /**
                 * Create a new handler list and initialize using EventPriority.
                 * <p>
                 * The HandlerList is then added to meta-list for use in bakeAll()
                 */
                // @ts-ignore
                constructor()
                /**
                 * Bake all handler lists. Best used just after all normal event
                 * registration is complete, ie just after all plugins are loaded if
                 * you're using fevents in a plugin system.
                 */
                // @ts-ignore
                public static bakeAll(): void
                /**
                 * Unregister all listeners from all handler lists.
                 */
                // @ts-ignore
                public static unregisterAll(): void
                /**
                 * Unregister a specific plugin's listeners from all handler lists.
                 * @param plugin plugin to unregister
                 */
                // @ts-ignore
                public static unregisterAll(plugin: org.bukkit.plugin.Plugin): void
                /**
                 * Unregister a specific listener from all handler lists.
                 * @param listener listener to unregister
                 */
                // @ts-ignore
                public static unregisterAll(listener: org.bukkit.event.Listener): void
                /**
                 * Register a new listener in this handler list
                 * @param listener listener to register
                 */
                // @ts-ignore
                public register(listener: org.bukkit.plugin.RegisteredListener): void
                /**
                 * Register a collection of new listeners in this handler list
                 * @param listeners listeners to register
                 */
                // @ts-ignore
                public registerAll(listeners: java.util.Collection<org.bukkit.plugin.RegisteredListener> | Array<org.bukkit.plugin.RegisteredListener>): void
                /**
                 * Remove a listener from a specific order slot
                 * @param listener listener to remove
                 */
                // @ts-ignore
                public unregister(listener: org.bukkit.plugin.RegisteredListener): void
                /**
                 * Remove a specific plugin's listeners from this handler
                 * @param plugin plugin to remove
                 */
                // @ts-ignore
                public unregister(plugin: org.bukkit.plugin.Plugin): void
                /**
                 * Remove a specific listener from this handler
                 * @param listener listener to remove
                 */
                // @ts-ignore
                public unregister(listener: org.bukkit.event.Listener): void
                /**
                 * Bake HashMap and ArrayLists to 2d array - does nothing if not necessary
                 */
                // @ts-ignore
                public bake(): void
                /**
                 * Get the baked registered listeners associated with this handler list
                 * @return the array of registered listeners
                 */
                // @ts-ignore
                public getRegisteredListeners(): org.bukkit.plugin.RegisteredListener[]
                /**
                 * Get a specific plugin's registered listeners associated with this
                 * handler list
                 * @param plugin the plugin to get the listeners of
                 * @return the list of registered listeners
                 */
                // @ts-ignore
                public static getRegisteredListeners(plugin: org.bukkit.plugin.Plugin): java.util.ArrayList<org.bukkit.plugin.RegisteredListener>
                /**
                 * Get a list of all handler lists for every event type
                 * @return the list of all handler lists
                 */
                // @ts-ignore
                public static getHandlerLists(): java.util.ArrayList<org.bukkit.event.HandlerList>
            }
        }
    }
}
