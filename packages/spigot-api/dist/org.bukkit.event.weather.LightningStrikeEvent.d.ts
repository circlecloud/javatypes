declare namespace org {
    namespace bukkit {
        namespace event {
            namespace weather {
                /**
                 * Stores data for lightning striking
                 */
                // @ts-ignore
                class LightningStrikeEvent extends org.bukkit.event.weather.WeatherEvent implements org.bukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(world: org.bukkit.World, bolt: org.bukkit.entity.LightningStrike)
                    // @ts-ignore
                    constructor(world: org.bukkit.World, bolt: org.bukkit.entity.LightningStrike, cause: org.bukkit.event.weather.LightningStrikeEvent.Cause)
                    // @ts-ignore
                    isCancelled(): boolean
                    // @ts-ignore
                    setCancelled(cancel: boolean): void
                    /**
                     * Gets the bolt which is striking the earth.
                     * @return lightning entity
                     */
                    // @ts-ignore
                    getLightning(): org.bukkit.entity.LightningStrike
                    /**
                     * Gets the cause of this lightning strike.
                     * @return strike cause
                     */
                    // @ts-ignore
                    getCause(): org.bukkit.event.weather.LightningStrikeEvent.Cause
                    // @ts-ignore
                    getHandlers(): org.bukkit.event.HandlerList
                    // @ts-ignore
                    getHandlerList(): org.bukkit.event.HandlerList
                }
            }
        }
    }
}
