declare namespace org {
    namespace bukkit {
        namespace event {
            namespace entity {
                /**
                 * Called when a Creeper is struck by lightning.
                 * <p>
                 * If a Creeper Power event is cancelled, the Creeper will not be powered.
                 */
                // @ts-ignore
                class CreeperPowerEvent extends org.bukkit.event.entity.EntityEvent implements org.bukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(creeper: org.bukkit.entity.Creeper, bolt: org.bukkit.entity.LightningStrike, cause: org.bukkit.event.entity.CreeperPowerEvent.PowerCause)
                    // @ts-ignore
                    constructor(creeper: org.bukkit.entity.Creeper, cause: org.bukkit.event.entity.CreeperPowerEvent.PowerCause)
                    // @ts-ignore
                    isCancelled(): boolean
                    // @ts-ignore
                    setCancelled(cancel: boolean): void
                    // @ts-ignore
                    getEntity(): org.bukkit.entity.Creeper
                    /**
                     * Gets the lightning bolt which is striking the Creeper.
                     * @return The Entity for the lightning bolt which is striking the Creeper
                     */
                    // @ts-ignore
                    getLightning(): org.bukkit.entity.LightningStrike
                    /**
                     * Gets the cause of the creeper being (un)powered.
                     * @return A PowerCause value detailing the cause of change in power.
                     */
                    // @ts-ignore
                    getCause(): org.bukkit.event.entity.CreeperPowerEvent.PowerCause
                    // @ts-ignore
                    getHandlers(): org.bukkit.event.HandlerList
                    // @ts-ignore
                    getHandlerList(): org.bukkit.event.HandlerList
                }
            }
        }
    }
}
