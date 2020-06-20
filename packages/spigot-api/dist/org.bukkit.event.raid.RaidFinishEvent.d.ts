declare namespace org {
    namespace bukkit {
        namespace event {
            namespace raid {
                /**
                 * This event is called when a {@link Raid} was complete with a clear result.
                 */
                // @ts-ignore
                class RaidFinishEvent extends org.bukkit.event.raid.RaidEvent {
                    // @ts-ignore
                    constructor(raid: org.bukkit.Raid, world: org.bukkit.World, winners: Array<org.bukkit.entity.Player>)
                    /**
                     * Returns an immutable list contains all winners.
                     * <br>
                     * <b>Note: Players who are considered as heroes but were not online at the
                     * end would not be included in this list.</b>
                     * @return winners
                     */
                    // @ts-ignore
                    getWinners(): java.util.List<org.bukkit.entity.Player>
                    // @ts-ignore
                    getHandlers(): org.bukkit.event.HandlerList
                    // @ts-ignore
                    getHandlerList(): org.bukkit.event.HandlerList
                }
            }
        }
    }
}
