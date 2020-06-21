declare namespace org {
    namespace bukkit {
        namespace event {
            namespace raid {
                /**
                 * Represents events related to raids.
                 */
                // @ts-ignore
                abstract class RaidEvent extends org.bukkit.event.world.WorldEvent {
                    // @ts-ignore
                    constructor(raid: org.bukkit.Raid, world: org.bukkit.World)
                    /**
                     * Returns the raid involved with this event.
                     * @return Raid
                     */
                    // @ts-ignore
                    public getRaid(): org.bukkit.Raid
                }
            }
        }
    }
}
