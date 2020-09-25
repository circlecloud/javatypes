declare namespace org {
    namespace bukkit {
        namespace event {
            namespace player {
                namespace PlayerBedEnterEvent {
                    /**
                     * Represents the default possible outcomes of this event.
                     */
                    // @ts-ignore
                    class BedEnterResult extends java.lang.Enum<org.bukkit.event.player.PlayerBedEnterEvent.BedEnterResult> {
                        /**
                         * The player will enter the bed.
                         */
                        // @ts-ignore
                        public static readonly OK: org.bukkit.event.player.PlayerBedEnterEvent.BedEnterResult
                        /**
                         * The world doesn't allow sleeping (ex. Nether or The End). Entering
                         * the bed is prevented and the bed explodes.
                         */
                        // @ts-ignore
                        public static readonly NOT_POSSIBLE_HERE: org.bukkit.event.player.PlayerBedEnterEvent.BedEnterResult
                        /**
                         * Entering the bed is prevented due to it not being night nor
                         * thundering currently.
                         * <p>
                         * If the event is forcefully allowed during daytime, the player will
                         * enter the bed (and set its bed location), but might get immediately
                         * thrown out again.
                         */
                        // @ts-ignore
                        public static readonly NOT_POSSIBLE_NOW: org.bukkit.event.player.PlayerBedEnterEvent.BedEnterResult
                        /**
                         * Entering the bed is prevented due to the player being too far away.
                         */
                        // @ts-ignore
                        public static readonly TOO_FAR_AWAY: org.bukkit.event.player.PlayerBedEnterEvent.BedEnterResult
                        /**
                         * Entering the bed is prevented due to there being monsters nearby.
                         */
                        // @ts-ignore
                        public static readonly NOT_SAFE: org.bukkit.event.player.PlayerBedEnterEvent.BedEnterResult
                        /**
                         * Entering the bed is prevented due to there being some other problem.
                         */
                        // @ts-ignore
                        public static readonly OTHER_PROBLEM: org.bukkit.event.player.PlayerBedEnterEvent.BedEnterResult
                        // @ts-ignore
                        public static values(): org.bukkit.event.player.PlayerBedEnterEvent.BedEnterResult[]
                        // @ts-ignore
                        public static valueOf(name: java.lang.String | string): org.bukkit.event.player.PlayerBedEnterEvent.BedEnterResult
                    }
                }
            }
        }
    }
}
