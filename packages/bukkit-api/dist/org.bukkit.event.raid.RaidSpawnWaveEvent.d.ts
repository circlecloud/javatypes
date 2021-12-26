declare namespace org {
    namespace bukkit {
        namespace event {
            namespace raid {
                /**
                 * Called when a raid wave spawns.
                 */
                // @ts-ignore
                class RaidSpawnWaveEvent extends org.bukkit.event.raid.RaidEvent {
                    // @ts-ignore
                    constructor(raid: org.bukkit.Raid, world: org.bukkit.World, leader: org.bukkit.entity.Raider, raiders: java.util.List<org.bukkit.entity.Raider> | Array<org.bukkit.entity.Raider>)
                    /**
                     * Returns the patrol leader.
                     * @return {#link Raider}
                     */
                    // @ts-ignore
                    public getPatrolLeader(): org.bukkit.entity.Raider
                    /**
                     * Returns all {@link Raider} that spawned in this wave.
                     * @return an immutable list of raiders
                     */
                    // @ts-ignore
                    public getRaiders(): Array<org.bukkit.entity.Raider>
                    // @ts-ignore
                    public getHandlers(): org.bukkit.event.HandlerList
                    // @ts-ignore
                    public static getHandlerList(): org.bukkit.event.HandlerList
                }
            }
        }
    }
}
