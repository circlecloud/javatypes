declare namespace org {
    namespace bukkit {
        namespace event {
            namespace server {
                /**
                 * This event is called when either the server startup or reload has completed.
                 */
                // @ts-ignore
                class ServerLoadEvent extends org.bukkit.event.server.ServerEvent {
                    /**
                     * Creates a {@code ServerLoadEvent} with a given loading type.
                     * @param type the context in which the server was loaded
                     */
                    // @ts-ignore
                    constructor(type: org.bukkit.event.server.ServerLoadEvent.LoadType)
                    /**
                     * Gets the context in which the server was loaded.
                     * @return the context in which the server was loaded
                     */
                    // @ts-ignore
                    getType(): org.bukkit.event.server.ServerLoadEvent.LoadType
                    // @ts-ignore
                    getHandlers(): org.bukkit.event.HandlerList
                    // @ts-ignore
                    getHandlerList(): org.bukkit.event.HandlerList
                }
            }
        }
    }
}
