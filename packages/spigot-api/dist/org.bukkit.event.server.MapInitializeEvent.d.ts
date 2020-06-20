declare namespace org {
    namespace bukkit {
        namespace event {
            namespace server {
                /**
                 * Called when a map is initialized.
                 */
                // @ts-ignore
                class MapInitializeEvent extends org.bukkit.event.server.ServerEvent {
                    // @ts-ignore
                    constructor(mapView: org.bukkit.map.MapView)
                    /**
                     * Gets the map initialized in this event.
                     * @return Map for this event
                     */
                    // @ts-ignore
                    getMap(): org.bukkit.map.MapView
                    // @ts-ignore
                    getHandlers(): org.bukkit.event.HandlerList
                    // @ts-ignore
                    getHandlerList(): org.bukkit.event.HandlerList
                }
            }
        }
    }
}
