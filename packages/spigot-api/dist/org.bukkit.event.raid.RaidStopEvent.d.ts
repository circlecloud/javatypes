declare namespace org {
    namespace bukkit {
        namespace event {
            namespace raid {
                /**
                 * Called when a {@link Raid} is stopped.
                 */
                // @ts-ignore
                class RaidStopEvent extends org.bukkit.event.raid.RaidEvent {
                    // @ts-ignore
                    constructor(raid: org.bukkit.Raid, world: org.bukkit.World, reason: org.bukkit.event.raid.RaidStopEvent.Reason)
                    /**
                     * Returns the stop reason.
                     * @return Reason
                     */
                    // @ts-ignore
                    getReason(): org.bukkit.event.raid.RaidStopEvent.Reason
                    // @ts-ignore
                    getHandlers(): org.bukkit.event.HandlerList
                    // @ts-ignore
                    getHandlerList(): org.bukkit.event.HandlerList
                }
            }
        }
    }
}
