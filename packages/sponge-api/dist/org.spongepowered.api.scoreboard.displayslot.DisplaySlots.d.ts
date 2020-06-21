declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace scoreboard {
                namespace displayslot {
                    /**
                     * Display slot names which display an objective in a particular place in-game.
                     */
                    // @ts-ignore
                    class DisplaySlots extends java.lang.Object {
                        /**
                         * Displays a player's score for the objective underneath their nametag
                         * in-game, when a player is closer than 10 blocks.
                         */
                        // @ts-ignore
                        public static readonly BELOW_NAME: org.spongepowered.api.scoreboard.displayslot.DisplaySlot
                        /**
                         * Displays scores for the objective next to players' names in the
                         * player list (accessed by holding TAB).
                         */
                        // @ts-ignore
                        public static readonly LIST: org.spongepowered.api.scoreboard.displayslot.DisplaySlot
                        /**
                         * Displays scores for the objective on the side of the screen in-game.
                         */
                        // @ts-ignore
                        public static readonly SIDEBAR: org.spongepowered.api.scoreboard.displayslot.DisplaySlot
                    }
                }
            }
        }
    }
}
