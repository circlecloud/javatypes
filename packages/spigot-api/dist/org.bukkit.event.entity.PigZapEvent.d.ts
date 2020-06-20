declare namespace org {
    namespace bukkit {
        namespace event {
            namespace entity {
                /**
                 * Stores data for pigs being zapped
                 */
                // @ts-ignore
                class PigZapEvent extends org.bukkit.event.entity.EntityTransformEvent implements org.bukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(pig: org.bukkit.entity.Pig, bolt: org.bukkit.entity.LightningStrike, pigzombie: org.bukkit.entity.PigZombie)
                    // @ts-ignore
                    isCancelled(): boolean
                    // @ts-ignore
                    setCancelled(cancel: boolean): void
                    // @ts-ignore
                    getEntity(): org.bukkit.entity.Pig
                    /**
                     * Gets the bolt which is striking the pig.
                     * @return lightning entity
                     */
                    // @ts-ignore
                    getLightning(): org.bukkit.entity.LightningStrike
                    /**
                     * Gets the zombie pig that will replace the pig, provided the event is
                     * not cancelled first.
                     * @return resulting entity
                     * @deprecated use {#link EntityTransformEvent#getTransformedEntity()}
                     */
                    // @ts-ignore
                    getPigZombie(): org.bukkit.entity.PigZombie
                    // @ts-ignore
                    getHandlers(): org.bukkit.event.HandlerList
                    // @ts-ignore
                    getHandlerList(): org.bukkit.event.HandlerList
                }
            }
        }
    }
}
