declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace advancement {
                namespace criteria {
                    namespace ScoreAdvancementCriterion {
                        /**
                         * A builder to create {@link ScoreAdvancementCriterion}s.
                         */
                        // @ts-ignore
                        interface Builder extends org.spongepowered.api.advancement.criteria.AdvancementCriterion.BaseBuilder<org.spongepowered.api.advancement.criteria.ScoreAdvancementCriterion, org.spongepowered.api.advancement.criteria.ScoreAdvancementCriterion.Builder> {
                            /**
                             * Sets the goal value. This value must be greater then zero.
                             * <p>Defaults to {@code 1}.</p>
                             * @param goal The goal value
                             * @return This builder, for chaining
                             */
                            // @ts-ignore
                            goal(goal: number /*int*/): org.spongepowered.api.advancement.criteria.ScoreAdvancementCriterion.Builder
                        }
                    }
                }
            }
        }
    }
}
