declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace scoreboard {
                /**
                 * Represents a scoreboard, which contains {@link Team}s and {@link Objective}s.
                 * The server has a default scoreboard, but each {@link Player}
                 * can have their own scoreboard.
                 * @see <a href="http://minecraft.gamepedia.com/Scoreboard">Scoreboards on the Minecraft Wiki</a>
                 */
                // @ts-ignore
                interface Scoreboard {
                    /**
                     * Creates a new {@link Builder} to build a {@link Scoreboard}.
                     * @return The new builder
                     */
                    // @ts-ignore
                    builder(): org.spongepowered.api.scoreboard.Scoreboard.Builder
                    /**
                     * Gets an {@link Objective} on this scoreboard by name, if it exists.
                     * @param name Name of the {#link Objective}
                     * @return The {#link Objective}, if it exists
                     */
                    // @ts-ignore
                    getObjective(name: java.lang.String | string): java.util.Optional<org.spongepowered.api.scoreboard.objective.Objective>
                    /**
                     * Gets the {@link Objective} currently displayed in a {@link DisplaySlot} on this
                     * scoreboard, if one is present.
                     * @param slot The {#link DisplaySlot}
                     * @return the {#link Objective} currently displayed, if present
                     */
                    // @ts-ignore
                    getObjective(slot: org.spongepowered.api.scoreboard.displayslot.DisplaySlot): java.util.Optional<org.spongepowered.api.scoreboard.objective.Objective>
                    /**
                     * Adds the specified {@link Objective} to this scoreboard.
                     * @param objective The {#link Objective} add
                     * @throws IllegalArgumentException if an {#link Objective} with the same
                     *              {@link Objective#getName() name} already exists, or if the
                     *              specified {@link Objective} has already been added.
                     */
                    // @ts-ignore
                    addObjective(objective: org.spongepowered.api.scoreboard.objective.Objective): void
                    /**
                     * Sets the specified {@link Objective} in the specified {@link DisplaySlot}.
                     * <p>If the {@link Objective} is <code>null</code>, then the specified
                     * {@link DisplaySlot} will be cleared.</p>
                     * @param objective The {#link Objective} to set
                     * @param displaySlot The {#link DisplaySlot} to the specified {@link Objective} in
                     * @throws IllegalStateException if the specified {#link Objective} does not exist
                     *                                on this scoreboard
                     */
                    // @ts-ignore
                    updateDisplaySlot(objective: org.spongepowered.api.scoreboard.objective.Objective, displaySlot: org.spongepowered.api.scoreboard.displayslot.DisplaySlot): void
                    /**
                     * Clears any {@link Objective} in the specified slot.
                     * @param slot The {#link DisplaySlot} to remove any {@link Objective} for
                     */
                    // @ts-ignore
                    clearSlot(slot: org.spongepowered.api.scoreboard.displayslot.DisplaySlot): void
                    /**
                     * Gets all {@link Objective}s of a Criteria on this scoreboard.
                     * @param criteria {#link Criterion} to search by
                     * @return A set of {#link Objective}s using the specified Criteria
                     */
                    // @ts-ignore
                    getObjectivesByCriteria(criteria: org.spongepowered.api.scoreboard.critieria.Criterion): Array<org.spongepowered.api.scoreboard.objective.Objective>
                    /**
                     * Gets all {@link Objective}s on this scoreboard.
                     * @return A set of all {#link Objective}s on this scoreboard
                     */
                    // @ts-ignore
                    getObjectives(): Array<org.spongepowered.api.scoreboard.objective.Objective>
                    /**
                     * Removes the specified {@link Objective} from this scoreboard.
                     * @param objective The {#link Objective} to remove
                     */
                    // @ts-ignore
                    removeObjective(objective: org.spongepowered.api.scoreboard.objective.Objective): void
                    /**
                     * Gets all the scores on this scoreboard, across all objectives.
                     * <p>If the same {@link Score} has been added to multiple objectives,
                     * it will only appear once in the set.</p>
                     * @return A set of all scores
                     */
                    // @ts-ignore
                    getScores(): Array<org.spongepowered.api.scoreboard.Score>
                    /**
                     * Gets all scores with the specified name on this scoreboard,
                     * across all objectives.
                     * <p>If the same {@link Score} has been added to multiple objectives,
                     * it will only appear once in the set.</p>
                     * @param name The name whose scores are being retrieved
                     * @return A set of all scores for the name
                     */
                    // @ts-ignore
                    getScores(name: org.spongepowered.api.text.Text): Array<org.spongepowered.api.scoreboard.Score>
                    /**
                     * Removes all scores with the specified name on this scoreboard,
                     * across all objectives.
                     * @param name The name to remove all scores for
                     */
                    // @ts-ignore
                    removeScores(name: org.spongepowered.api.text.Text): void
                    /**
                     * Gets a {@link Team} by name on this scoreboard.
                     * @param teamName The name of the {#link Team}
                     * @return The matching {#link Team}, if it exists
                     */
                    // @ts-ignore
                    getTeam(teamName: java.lang.String | string): java.util.Optional<org.spongepowered.api.scoreboard.Team>
                    /**
                     * Registers the specified {@link Team} to this scoreboard.
                     * @param team The {#link Team} to register
                     * @throws IllegalArgumentException if a team with the same
                     *              {#link Team#getName() name} already exists on this scoreboard, or if the specified
                     *              {@link Team} is already registered to a scoreboard (this scoreboard,
                     *              or another one).
                     */
                    // @ts-ignore
                    registerTeam(team: org.spongepowered.api.scoreboard.Team): void
                    /**
                     * Gets all the {@link Team}s on this scoreboard.
                     * @return The set of {#link Team}s
                     */
                    // @ts-ignore
                    getTeams(): Array<org.spongepowered.api.scoreboard.Team>
                    /**
                     * Gets a {@link Text} member's {@link Team} on this scoreboard.
                     * @param member The {#link Text} to search for
                     * @return The {#link Text} member's {@link Team}, or Optional.empty()
                     *      if the member has no team
                     */
                    // @ts-ignore
                    getMemberTeam(member: org.spongepowered.api.text.Text): java.util.Optional<org.spongepowered.api.scoreboard.Team>
                }
            }
        }
    }
}
