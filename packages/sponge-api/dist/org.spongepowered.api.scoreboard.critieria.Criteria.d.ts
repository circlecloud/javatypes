declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace scoreboard {
                namespace critieria {
                    /**
                     * Criteria names which trigger an objective to be modified by actions in-game.
                     */
                    // @ts-ignore
                    class Criteria extends java.lang.Object {
                        /**
                         * Represents a {@link Criteria} which causes an {@link Objective}
                         * to have a score for a player incremented when they die.
                         */
                        // @ts-ignore
                        public static readonly DEATHS: org.spongepowered.api.scoreboard.critieria.Criterion
                        /**
                         * Represents a {@link Criterion} which causes an {@link Objective}
                         * is only updated manually, through commands or plugins.
                         */
                        // @ts-ignore
                        public static readonly DUMMY: org.spongepowered.api.scoreboard.critieria.Criterion
                        /**
                         * Represents a {@link Criteria} which causes an {@link Objective} to have
                         * a score for a player represent their current health, on a scale of 0-20
                         * (can be greater than 20 due to effects such as
                         * {@link PotionEffectTypes#HEALTH_BOOST}).
                         */
                        // @ts-ignore
                        public static readonly HEALTH: org.spongepowered.api.scoreboard.critieria.Criterion
                        /**
                         * Represents a {@link Criteria} which causes an {@link Objective}
                         * to have a score for a player incremented when they kill a player.
                         */
                        // @ts-ignore
                        public static readonly PLAYER_KILLS: org.spongepowered.api.scoreboard.critieria.Criterion
                        /**
                         * Represents a {@link Criteria} which causes an {@link Objective}
                         * to have a score for a player incremented when they kill an entity.
                         */
                        // @ts-ignore
                        public static readonly TOTAL_KILLS: org.spongepowered.api.scoreboard.critieria.Criterion
                        /**
                         * Represents a {@link Criterion} which causes an {@link Objective}
                         * to have a score for a player updated by the <code>/trigger</code>
                         * command.
                         */
                        // @ts-ignore
                        public static readonly TRIGGER: org.spongepowered.api.scoreboard.critieria.Criterion
                    }
                }
            }
        }
    }
}
