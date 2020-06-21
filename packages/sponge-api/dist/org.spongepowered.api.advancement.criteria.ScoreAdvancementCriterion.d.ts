declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace advancement {
                namespace criteria {
                    /**
                     * Represents a {@link AdvancementCriterion} that requires a
                     * specific score ({@link #getGoal()}) to be achieved.
                     */
                    // @ts-ignore
                    interface ScoreAdvancementCriterion extends org.spongepowered.api.advancement.criteria.AdvancementCriterion {
                        /**
                         * Creates a new {@link Builder} which can be used to create
                         * a {@link ScoreAdvancementCriterion}.
                         * @return The new builder
                         */
                        // @ts-ignore
                        builder(): org.spongepowered.api.advancement.criteria.ScoreAdvancementCriterion.Builder
                        /**
                         * Gets the goal value.
                         * @return The goal value
                         */
                        // @ts-ignore
                        getGoal(): number /*int*/
                    }
                }
            }
        }
    }
}
