declare namespace org {
    namespace bukkit {
        namespace event {
            namespace entity {
                /**
                 * Stores data for health-regain events
                 */
                // @ts-ignore
                class EntityRegainHealthEvent extends org.bukkit.event.entity.EntityEvent implements org.bukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(entity: org.bukkit.entity.Entity, amount: number /*double*/, regainReason: org.bukkit.event.entity.EntityRegainHealthEvent.RegainReason)
                    /**
                     * Gets the amount of regained health
                     * @return The amount of health regained
                     */
                    // @ts-ignore
                    public getAmount(): number /*double*/
                    /**
                     * Sets the amount of regained health
                     * @param amount the amount of health the entity will regain
                     */
                    // @ts-ignore
                    public setAmount(amount: number /*double*/): void
                    // @ts-ignore
                    public isCancelled(): boolean
                    // @ts-ignore
                    public setCancelled(cancel: boolean): void
                    /**
                     * Gets the reason for why the entity is regaining health
                     * @return A RegainReason detailing the reason for the entity regaining
                     *      health
                     */
                    // @ts-ignore
                    public getRegainReason(): org.bukkit.event.entity.EntityRegainHealthEvent.RegainReason
                    // @ts-ignore
                    public getHandlers(): org.bukkit.event.HandlerList
                    // @ts-ignore
                    public static getHandlerList(): org.bukkit.event.HandlerList
                }
            }
        }
    }
}
