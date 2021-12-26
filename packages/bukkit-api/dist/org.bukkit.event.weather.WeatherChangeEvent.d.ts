declare namespace org {
    namespace bukkit {
        namespace event {
            namespace weather {
                /**
                 * Stores data for weather changing in a world
                 */
                // @ts-ignore
                class WeatherChangeEvent extends org.bukkit.event.weather.WeatherEvent implements org.bukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(world: org.bukkit.World, to: boolean)
                    // @ts-ignore
                    public isCancelled(): boolean
                    // @ts-ignore
                    public setCancelled(cancel: boolean): void
                    /**
                     * Gets the state of weather that the world is being set to
                     * @return true if the weather is being set to raining, false otherwise
                     */
                    // @ts-ignore
                    public toWeatherState(): boolean
                    // @ts-ignore
                    public getHandlers(): org.bukkit.event.HandlerList
                    // @ts-ignore
                    public static getHandlerList(): org.bukkit.event.HandlerList
                }
            }
        }
    }
}
