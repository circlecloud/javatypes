declare namespace org {
    namespace bukkit {
        namespace event {
            namespace world {
                /**
                 * Called when the time skips in a world.
                 * <p>
                 * If the event is cancelled the time will not change.
                 */
                // @ts-ignore
                class TimeSkipEvent extends org.bukkit.event.world.WorldEvent implements org.bukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(world: org.bukkit.World, skipReason: org.bukkit.event.world.TimeSkipEvent.SkipReason, skipAmount: number /*long*/)
                    /**
                     * Gets the reason why the time has skipped.
                     * @return a SkipReason value detailing why the time has skipped
                     */
                    // @ts-ignore
                    getSkipReason(): org.bukkit.event.world.TimeSkipEvent.SkipReason
                    /**
                     * Gets the amount of time that was skipped.
                     * @return Amount of time skipped
                     */
                    // @ts-ignore
                    getSkipAmount(): long
                    /**
                     * Sets the amount of time to skip.
                     * @param skipAmount Amount of time to skip
                     */
                    // @ts-ignore
                    setSkipAmount(skipAmount: number /*long*/): void
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
