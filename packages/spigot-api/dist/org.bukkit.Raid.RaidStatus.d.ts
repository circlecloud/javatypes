declare namespace org {
    namespace bukkit {
        namespace Raid {
            /**
             * Represents the status of a {@link Raid}.
             */
            // @ts-ignore
            class RaidStatus extends java.lang.Enum<org.bukkit.Raid.RaidStatus> {
                /**
                 * The raid is in progress.
                 */
                // @ts-ignore
                readonly ONGOING: org.bukkit.Raid.RaidStatus
                /**
                 * The raid was beaten by heroes.
                 */
                // @ts-ignore
                readonly VICTORY: org.bukkit.Raid.RaidStatus
                /**
                 * The village has fallen (i.e. all villagers died).
                 */
                // @ts-ignore
                readonly LOSS: org.bukkit.Raid.RaidStatus
                /**
                 * The raid was terminated.
                 */
                // @ts-ignore
                readonly STOPPED: org.bukkit.Raid.RaidStatus
                // @ts-ignore
                values(): org.bukkit.Raid.RaidStatus[]
                // @ts-ignore
                valueOf(name: java.lang.String | string): org.bukkit.Raid.RaidStatus
            }
        }
    }
}
