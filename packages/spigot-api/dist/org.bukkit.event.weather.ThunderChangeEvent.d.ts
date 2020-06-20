declare namespace org {
    namespace bukkit {
        namespace event {
            namespace weather {
                /**
                 * Stores data for thunder state changing in a world
                 */
                // @ts-ignore
                class ThunderChangeEvent extends org.bukkit.event.weather.WeatherEvent implements org.bukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(world: org.bukkit.World, to: boolean)
                    // @ts-ignore
                    isCancelled(): boolean
                    // @ts-ignore
                    setCancelled(cancel: boolean): void
                    /**
                     * Gets the state of thunder that the world is being set to
                     * @return true if the weather is being set to thundering, false otherwise
                     */
                    // @ts-ignore
                    toThunderState(): boolean
                    // @ts-ignore
                    getHandlers(): org.bukkit.event.HandlerList
                    // @ts-ignore
                    getHandlerList(): org.bukkit.event.HandlerList
                }
            }
        }
    }
}
