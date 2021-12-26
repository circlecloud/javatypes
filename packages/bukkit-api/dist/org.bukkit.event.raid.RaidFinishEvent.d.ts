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
                    constructor(raid: org.bukkit.Raid, world: org.bukkit.World, winners: java.util.List<org.bukkit.entity.Player> | Array<org.bukkit.entity.Player>)
                    /**
                     * Returns an immutable list contains all winners.
                     * <br>
                     * <b>Note: Players who are considered as heroes but were not online at the
                     * end would not be included in this list.</b>
                     * @return winners
                     */
                    // @ts-ignore
                    public getWinners(): Array<org.bukkit.entity.Player>
                    // @ts-ignore
                    public getHandlers(): org.bukkit.event.HandlerList
                    // @ts-ignore
                    public static getHandlerList(): org.bukkit.event.HandlerList
                }
            }
        }
    }
}
