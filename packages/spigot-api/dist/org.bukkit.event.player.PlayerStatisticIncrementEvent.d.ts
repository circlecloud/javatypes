declare namespace org {
    namespace bukkit {
        namespace event {
            namespace player {
                /**
                 * Called when a player statistic is incremented.
                 * <p>
                 * This event is not called for some high frequency statistics, e.g. movement
                 * based statistics.
                 */
                // @ts-ignore
                class PlayerStatisticIncrementEvent extends org.bukkit.event.player.PlayerEvent implements org.bukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(player: org.bukkit.entity.Player, statistic: org.bukkit.Statistic, initialValue: number /*int*/, newValue: number /*int*/)
                    // @ts-ignore
                    constructor(player: org.bukkit.entity.Player, statistic: org.bukkit.Statistic, initialValue: number /*int*/, newValue: number /*int*/, entityType: org.bukkit.entity.EntityType)
                    // @ts-ignore
                    constructor(player: org.bukkit.entity.Player, statistic: org.bukkit.Statistic, initialValue: number /*int*/, newValue: number /*int*/, material: org.bukkit.Material)
                    // @ts-ignore
                    readonly statistic: org.bukkit.Statistic
                    /**
                     * Gets the statistic that is being incremented.
                     * @return the incremented statistic
                     */
                    // @ts-ignore
                    getStatistic(): org.bukkit.Statistic
                    /**
                     * Gets the previous value of the statistic.
                     * @return the previous value of the statistic
                     */
                    // @ts-ignore
                    getPreviousValue(): int
                    /**
                     * Gets the new value of the statistic.
                     * @return the new value of the statistic
                     */
                    // @ts-ignore
                    getNewValue(): int
                    /**
                     * Gets the EntityType if {@link #getStatistic() getStatistic()} is an
                     * entity statistic otherwise returns null.
                     * @return the EntityType of the statistic
                     */
                    // @ts-ignore
                    getEntityType(): org.bukkit.entity.EntityType
                    /**
                     * Gets the Material if {@link #getStatistic() getStatistic()} is a block
                     * or item statistic otherwise returns null.
                     * @return the Material of the statistic
                     */
                    // @ts-ignore
                    getMaterial(): org.bukkit.Material
                    // @ts-ignore
                    isCancelled(): boolean
                    // @ts-ignore
                    setCancelled(cancel: boolean): void
                    // @ts-ignore
                    getHandlers(): org.bukkit.event.HandlerList
                    // @ts-ignore
                    getHandlerList(): org.bukkit.event.HandlerList
                }
            }
        }
    }
}
