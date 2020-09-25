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
                public static readonly ONGOING: org.bukkit.Raid.RaidStatus
                /**
                 * The raid was beaten by heroes.
                 */
                // @ts-ignore
                public static readonly VICTORY: org.bukkit.Raid.RaidStatus
                /**
                 * The village has fallen (i.e. all villagers died).
                 */
                // @ts-ignore
                public static readonly LOSS: org.bukkit.Raid.RaidStatus
                /**
                 * The raid was terminated.
                 */
                // @ts-ignore
                public static readonly STOPPED: org.bukkit.Raid.RaidStatus
                // @ts-ignore
                public static values(): org.bukkit.Raid.RaidStatus[]
                // @ts-ignore
                public static valueOf(name: java.lang.String | string): org.bukkit.Raid.RaidStatus
            }
        }
    }
}
