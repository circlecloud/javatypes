declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace scoreboard {
                namespace Scoreboard {
                    /**
                     * Represents a builder to create {@link Scoreboard} instances.
                     */
                    // @ts-ignore
                    interface Builder extends org.spongepowered.api.util.ResettableBuilder<org.spongepowered.api.scoreboard.Scoreboard, org.spongepowered.api.scoreboard.Scoreboard.Builder> {
                        /**
                         * Sets the list of {@link Objective}s of the {@link Scoreboard}.
                         * <p>By default, this is the empty list.</p>
                         * @param objectives The list of {#link Objective}s to set
                         * @return This builder
                         */
                        // @ts-ignore
                        objectives(objectives: java.util.List<org.spongepowered.api.scoreboard.objective.Objective> | Array<org.spongepowered.api.scoreboard.objective.Objective>): org.spongepowered.api.scoreboard.Scoreboard.Builder
                        /**
                         * Sets the list of {@link Team}s of the {@link Scoreboard}.
                         * <p>By default, this is the empty list.</p>
                         * @param teams The list of {#link Team}s to set
                         * @return This builder
                         */
                        // @ts-ignore
                        teams(teams: java.util.List<org.spongepowered.api.scoreboard.Team> | Array<org.spongepowered.api.scoreboard.Team>): org.spongepowered.api.scoreboard.Scoreboard.Builder
                        /**
                         * Builds an instance of a {@link Scoreboard}.
                         * @return A new instance of a {#link Scoreboard}
                         * @throws IllegalStateException if the {#link Scoreboard} is not complete
                         */
                        // @ts-ignore
                        build(): org.spongepowered.api.scoreboard.Scoreboard
                    }
                }
            }
        }
    }
}
