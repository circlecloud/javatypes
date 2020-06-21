declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace advancement {
                namespace criteria {
                    /**
                     * Represents the progress of a {@link ScoreAdvancementCriterion}.
                     */
                    // @ts-ignore
                    interface ScoreCriterionProgress extends org.spongepowered.api.advancement.criteria.CriterionProgress {
                        // @ts-ignore
                        getCriterion(): org.spongepowered.api.advancement.criteria.ScoreAdvancementCriterion
                        /**
                         * Gets the goal value.
                         * @return The goal value
                         */
                        // @ts-ignore
                        getGoal(): number /*int*/
                        /**
                         * Gets the score value.
                         * @return The score value
                         */
                        // @ts-ignore
                        getScore(): number /*int*/
                        /**
                         * Adds the target score value, the score cannot exceed
                         * the goal value ({@link #getGoal()}) or be under zero.
                         * The achieved time will be returned if the goal is met.
                         * @param score The score to set
                         * @return The achieving time, if achieved
                         */
                        // @ts-ignore
                        set(score: number /*int*/): java.util.Optional<java.time.Instant>
                        /**
                         * Adds the target score value, the score cannot exceed
                         * the goal value ({@link #getGoal()}). The achieved time
                         * will be returned if the goal is met.
                         * @param score The score to add
                         * @return The achieving time, if achieved
                         */
                        // @ts-ignore
                        add(score: number /*int*/): java.util.Optional<java.time.Instant>
                        /**
                         * Removes the target score value, the score cannot go under zero.
                         * The achieved time will be returned if the goal is met before.
                         * @param score The score to remove
                         * @return The old achieving time, if achieved before
                         */
                        // @ts-ignore
                        remove(score: number /*int*/): java.util.Optional<java.time.Instant>
                    }
                }
            }
        }
    }
}
