declare namespace org {
    namespace bukkit {
        namespace event {
            namespace world {
                namespace TimeSkipEvent {
                    /**
                     * An enum specifying the reason the time skipped.
                     */
                    // @ts-ignore
                    class SkipReason extends java.lang.Enum<org.bukkit.event.world.TimeSkipEvent.SkipReason> {
                        /**
                         * When time is changed using the vanilla /time command.
                         */
                        // @ts-ignore
                        public static readonly COMMAND: org.bukkit.event.world.TimeSkipEvent.SkipReason
                        /**
                         * When time is changed by a plugin.
                         */
                        // @ts-ignore
                        public static readonly CUSTOM: org.bukkit.event.world.TimeSkipEvent.SkipReason
                        /**
                         * When time is changed by all players sleeping in their beds and the
                         * night skips.
                         */
                        // @ts-ignore
                        public static readonly NIGHT_SKIP: org.bukkit.event.world.TimeSkipEvent.SkipReason
                        // @ts-ignore
                        public static values(): org.bukkit.event.world.TimeSkipEvent.SkipReason[]
                        // @ts-ignore
                        public static valueOf(name: java.lang.String | string): org.bukkit.event.world.TimeSkipEvent.SkipReason
                    }
                }
            }
        }
    }
}
