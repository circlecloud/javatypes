declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace scoreboard {
                namespace objective {
                    /**
                     * An objective tracks an integer score for each entry it contains.
                     * <p>Entries can be updated by plugins, by in-game commands, or automatically
                     * by the game, depending on their {@link Criterion}.</p>
                     */
                    // @ts-ignore
                    interface Objective {
                        /**
                         * Creates a new {@link Builder} to build a {@link Objective}.
                         * @return The new builder
                         */
                        // @ts-ignore
                        builder(): org.spongepowered.api.scoreboard.objective.Objective.Builder
                        /**
                         * Gets the name of this Objective.
                         * @return The objective's name
                         */
                        // @ts-ignore
                        getName(): java.lang.String
                        /**
                         * Gets the name displayed to players.
                         * @return The objective's display name
                         */
                        // @ts-ignore
                        getDisplayName(): org.spongepowered.api.text.Text
                        /**
                         * Sets the name displayed to players.
                         * @param displayName Display name to set
                         * @throws IllegalArgumentException if displayName is longer than 32
                         *      characters (in its legacy representation)
                         */
                        // @ts-ignore
                        setDisplayName(displayName: org.spongepowered.api.text.Text): void
                        /**
                         * Gets the criterion for this objective.
                         * @return This objective's criterion
                         */
                        // @ts-ignore
                        getCriterion(): org.spongepowered.api.scoreboard.critieria.Criterion
                        /**
                         * Gets the {@link ObjectiveDisplayMode} used to display this objective.
                         * @return The {#link ObjectiveDisplayMode} used to display this objective
                         */
                        // @ts-ignore
                        getDisplayMode(): org.spongepowered.api.scoreboard.objective.displaymode.ObjectiveDisplayMode
                        /**
                         * Sets the {@link ObjectiveDisplayMode} used to display this objective.
                         * @param displayMode The {#link ObjectiveDisplayMode} used to display this objective
                         */
                        // @ts-ignore
                        setDisplayMode(displayMode: org.spongepowered.api.scoreboard.objective.displaymode.ObjectiveDisplayMode): void
                        /**
                         * Gets the set of {@link Score}s for this objective.
                         * @return The set of {#link Score}s for this objective
                         */
                        // @ts-ignore
                        getScores(): java.util.Map<org.spongepowered.api.text.Text, org.spongepowered.api.scoreboard.Score>
                        /**
                         * Returns whether this objective has a {@link Score} with the given name.
                         * @param name The name of the {#link Score} to check for.
                         * @return Whether this objective has a {#link Score} with the given name.
                         */
                        // @ts-ignore
                        hasScore(name: org.spongepowered.api.text.Text): boolean
                        /**
                         * Adds the specified {@link Score} to this objective.
                         * @param score The {#link Score} to add
                         * @throws IllegalArgumentException If a {#link Score} with the same name exists, or the specified {@link Score} has already been added
                         */
                        // @ts-ignore
                        addScore(score: org.spongepowered.api.scoreboard.Score): void
                        /**
                         * Gets an entry's {@link Score} for this objective, if it exists.
                         * @param name The name of the {#link Score} to get.
                         * @return The {#link Score} for te specified {@link Text}, if it exists.
                         */
                        // @ts-ignore
                        getScore(name: org.spongepowered.api.text.Text): java.util.Optional<org.spongepowered.api.scoreboard.Score>
                        /**
                         * Gets an entry's {@link Score} for this objective.
                         * <p>If the {@link Score} does not exist, it will be created.</p>
                         * @param name The name of the {#link Score} to get
                         * @return The {#link Score} for the specified {@link Text}
                         */
                        // @ts-ignore
                        getOrCreateScore(name: org.spongepowered.api.text.Text): org.spongepowered.api.scoreboard.Score
                        /**
                         * Removes the specified {@link Score} from this objective, if present.
                         * @param score The {#link Score} to remove
                         * @return Whether the score existed on this objective
                         */
                        // @ts-ignore
                        removeScore(score: org.spongepowered.api.scoreboard.Score): boolean
                        /**
                         * Removes the {@link Score} with the specified name from this objective, if present.
                         * @param name The name of the {#link Score} to remove.
                         * @return Whether the score existed on this objective
                         */
                        // @ts-ignore
                        removeScore(name: org.spongepowered.api.text.Text): boolean
                        /**
                         * Returns a {@link Set} of parent {@link Scoreboard}s this
                         * {@link Objective} is registered to.
                         * @return A {#link Set} of parent {@link Scoreboard}s this
                         *          {@link Objective} is registered to
                         */
                        // @ts-ignore
                        getScoreboards(): java.util.Set<org.spongepowered.api.scoreboard.Scoreboard>
                    }
                }
            }
        }
    }
}
