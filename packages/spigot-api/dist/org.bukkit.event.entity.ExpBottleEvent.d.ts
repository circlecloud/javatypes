declare namespace org {
    namespace bukkit {
        namespace event {
            namespace entity {
                /**
                 * Called when a ThrownExpBottle hits and releases experience.
                 */
                // @ts-ignore
                class ExpBottleEvent extends org.bukkit.event.entity.ProjectileHitEvent {
                    // @ts-ignore
                    constructor(bottle: org.bukkit.entity.ThrownExpBottle, exp: number /*int*/)
                    // @ts-ignore
                    public getEntity(): org.bukkit.entity.ThrownExpBottle
                    /**
                     * This method indicates if the particle effect should be shown.
                     * @return true if the effect will be shown, false otherwise
                     */
                    // @ts-ignore
                    public getShowEffect(): boolean
                    /**
                     * This method sets if the particle effect will be shown.
                     * <p>
                     * This does not change the experience created.
                     * @param showEffect true indicates the effect will be shown, false
                     *      indicates no effect will be shown
                     */
                    // @ts-ignore
                    public setShowEffect(showEffect: boolean): void
                    /**
                     * This method retrieves the amount of experience to be created.
                     * <p>
                     * The number indicates a total amount to be divided into orbs.
                     * @return the total amount of experience to be created
                     */
                    // @ts-ignore
                    public getExperience(): number /*int*/
                    /**
                     * This method sets the amount of experience to be created.
                     * <p>
                     * The number indicates a total amount to be divided into orbs.
                     * @param exp the total amount of experience to be created
                     */
                    // @ts-ignore
                    public setExperience(exp: number /*int*/): void
                    // @ts-ignore
                    public getHandlers(): org.bukkit.event.HandlerList
                    // @ts-ignore
                    public static getHandlerList(): org.bukkit.event.HandlerList
                }
            }
        }
    }
}
