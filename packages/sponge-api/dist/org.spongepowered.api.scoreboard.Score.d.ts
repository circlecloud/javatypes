declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace scoreboard {
                /**
                 * A score entry for one or more {@link Objective}s.
                 */
                // @ts-ignore
                interface Score {
                    /**
                     * Gets the name of this score.
                     * @return The name of this score
                     */
                    // @ts-ignore
                    getName(): org.spongepowered.api.text.Text
                    /**
                     * Gets the current score value.
                     * @return The current score value
                     */
                    // @ts-ignore
                    getScore(): number /*int*/
                    /**
                     * Sets the current score value.
                     * @param score The new score value
                     */
                    // @ts-ignore
                    setScore(score: number /*int*/): void
                    /**
                     * Returns a {@link Set} of parent {@link Objective}s this {@link Score} is
                     * registered to.
                     * @return A {#link Set} of parent {@link Objective} this {@link Score} is
                     *          registered to
                     */
                    // @ts-ignore
                    getObjectives(): Array<org.spongepowered.api.scoreboard.objective.Objective>
                }
            }
        }
    }
}
