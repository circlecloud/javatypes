declare namespace org {
    namespace bukkit {
        namespace event {
            namespace player {
                namespace PlayerFishEvent {
                    /**
                     * An enum to specify the state of the fishing
                     */
                    // @ts-ignore
                    class State extends java.lang.Enum<org.bukkit.event.player.PlayerFishEvent.State> {
                        /**
                         * When a player is fishing, ie casting the line out.
                         */
                        // @ts-ignore
                        public static readonly FISHING: org.bukkit.event.player.PlayerFishEvent.State
                        /**
                         * When a player has successfully caught a fish and is reeling it in. In
                         * this instance, a "fish" is any item retrieved from water as a result
                         * of fishing, ie an item, but not necessarily a fish.
                         */
                        // @ts-ignore
                        public static readonly CAUGHT_FISH: org.bukkit.event.player.PlayerFishEvent.State
                        /**
                         * When a player has successfully caught an entity. This refers to any
                         * already spawned entity in the world that has been hooked directly by
                         * the rod.
                         */
                        // @ts-ignore
                        public static readonly CAUGHT_ENTITY: org.bukkit.event.player.PlayerFishEvent.State
                        /**
                         * When a bobber is stuck in the ground.
                         */
                        // @ts-ignore
                        public static readonly IN_GROUND: org.bukkit.event.player.PlayerFishEvent.State
                        /**
                         * When a player fails to catch a bite while fishing usually due to
                         * poor timing.
                         */
                        // @ts-ignore
                        public static readonly FAILED_ATTEMPT: org.bukkit.event.player.PlayerFishEvent.State
                        /**
                         * When a player reels in their hook without receiving any bites.
                         */
                        // @ts-ignore
                        public static readonly REEL_IN: org.bukkit.event.player.PlayerFishEvent.State
                        /**
                         * Called when there is a bite on the hook and it is ready to be reeled
                         * in.
                         */
                        // @ts-ignore
                        public static readonly BITE: org.bukkit.event.player.PlayerFishEvent.State
                        // @ts-ignore
                        public static values(): org.bukkit.event.player.PlayerFishEvent.State[]
                        // @ts-ignore
                        public static valueOf(name: java.lang.String | string): org.bukkit.event.player.PlayerFishEvent.State
                    }
                }
            }
        }
    }
}
