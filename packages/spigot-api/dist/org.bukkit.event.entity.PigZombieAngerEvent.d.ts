declare namespace org {
    namespace bukkit {
        namespace event {
            namespace entity {
                /**
                 * Called when a Pig Zombie is angered by another entity.
                 * <p>
                 * If the event is cancelled, the pig zombie will not be angered.
                 */
                // @ts-ignore
                class PigZombieAngerEvent extends org.bukkit.event.entity.EntityEvent implements org.bukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(pigZombie: org.bukkit.entity.PigZombie, target: org.bukkit.entity.Entity, newAnger: number /*int*/)
                    /**
                     * Gets the entity (if any) which triggered this anger update.
                     * @return triggering entity, or null
                     */
                    // @ts-ignore
                    public getTarget(): org.bukkit.entity.Entity
                    /**
                     * Gets the new anger resulting from this event.
                     * @return new anger
                     * @see PigZombie#getAnger()
                     */
                    // @ts-ignore
                    public getNewAnger(): number /*int*/
                    /**
                     * Sets the new anger resulting from this event.
                     * @param newAnger the new anger
                     * @see PigZombie#setAnger(int)
                     */
                    // @ts-ignore
                    public setNewAnger(newAnger: number /*int*/): void
                    // @ts-ignore
                    public getEntity(): org.bukkit.entity.PigZombie
                    // @ts-ignore
                    public isCancelled(): boolean
                    // @ts-ignore
                    public setCancelled(cancel: boolean): void
                    // @ts-ignore
                    public getHandlers(): org.bukkit.event.HandlerList
                    // @ts-ignore
                    public static getHandlerList(): org.bukkit.event.HandlerList
                }
            }
        }
    }
}
