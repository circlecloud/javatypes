declare namespace org {
    namespace bukkit {
        namespace event {
            namespace raid {
                namespace RaidStopEvent {
                    // @ts-ignore
                    class Reason extends java.lang.Enum<org.bukkit.event.raid.RaidStopEvent.Reason> {
                        /**
                         * Because the difficulty has been changed to peaceful.
                         */
                        // @ts-ignore
                        readonly PEACE: org.bukkit.event.raid.RaidStopEvent.Reason
                        /**
                         * The raid took a long time without a final result.
                         */
                        // @ts-ignore
                        readonly TIMEOUT: org.bukkit.event.raid.RaidStopEvent.Reason
                        /**
                         * Finished the raid.
                         */
                        // @ts-ignore
                        readonly FINISHED: org.bukkit.event.raid.RaidStopEvent.Reason
                        /**
                         * Couldn't find a suitable place to spawn raiders.
                         */
                        // @ts-ignore
                        readonly UNSPAWNABLE: org.bukkit.event.raid.RaidStopEvent.Reason
                        /**
                         * The place where the raid occurs no longer be a village.
                         */
                        // @ts-ignore
                        readonly NOT_IN_VILLAGE: org.bukkit.event.raid.RaidStopEvent.Reason
                        // @ts-ignore
                        values(): org.bukkit.event.raid.RaidStopEvent.Reason[]
                        // @ts-ignore
                        valueOf(name: java.lang.String | string): org.bukkit.event.raid.RaidStopEvent.Reason
                    }
                }
            }
        }
    }
}
