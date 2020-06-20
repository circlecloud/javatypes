declare namespace org {
    namespace bukkit {
        namespace plugin {
            /**
             * Stores relevant information for plugin listeners
             */
            // @ts-ignore
            class RegisteredListener extends java.lang.Object {
                // @ts-ignore
                constructor(listener: org.bukkit.event.Listener, executor: org.bukkit.plugin.EventExecutor, priority: org.bukkit.event.EventPriority, plugin: org.bukkit.plugin.Plugin, ignoreCancelled: boolean)
                /**
                 * Gets the listener for this registration
                 * @return Registered Listener
                 */
                // @ts-ignore
                getListener(): org.bukkit.event.Listener
                /**
                 * Gets the plugin for this registration
                 * @return Registered Plugin
                 */
                // @ts-ignore
                getPlugin(): org.bukkit.plugin.Plugin
                /**
                 * Gets the priority for this registration
                 * @return Registered Priority
                 */
                // @ts-ignore
                getPriority(): org.bukkit.event.EventPriority
                /**
                 * Calls the event executor
                 * @param event The event
                 * @throws EventException If an event handler throws an exception.
                 */
                // @ts-ignore
                callEvent(event: org.bukkit.event.Event): void
                /**
                 * Whether this listener accepts cancelled events
                 * @return True when ignoring cancelled events
                 */
                // @ts-ignore
                isIgnoringCancelled(): boolean
            }
        }
    }
}
