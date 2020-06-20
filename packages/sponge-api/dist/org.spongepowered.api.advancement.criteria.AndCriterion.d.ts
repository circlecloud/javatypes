declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace advancement {
                namespace criteria {
                    /**
                     * A {@link AdvancementCriterion} that represents an AND operation. All
                     * the criteria should be {@code true} in order for the final result
                     * to be {@code true}.
                     */
                    // @ts-ignore
                    interface AndCriterion extends org.spongepowered.api.advancement.criteria.OperatorCriterion {
                        /**
                         * Attempts to build a new AND operation with the
                         * given {@link AdvancementCriterion}s.
                         * <p>There is no guarantee that the returned extends {@link AndCriterion},
                         * this depends on if there are duplicate criteria, {@link #EMPTY}
                         * is present, or when no extra criteria are provided.</p>
                         * @param criteria The other criteria
                         * @return The AND operation
                         */
                        // @ts-ignore
                        of(...criteria: org.spongepowered.api.advancement.criteria.AdvancementCriterion[]): org.spongepowered.api.advancement.criteria.AdvancementCriterion
                        /**
                         * Attempts to build a new AND operation with the
                         * given {@link AdvancementCriterion}s.
                         * <p>There is no guarantee that the returned extends {@link AndCriterion},
                         * this depends on if there are duplicate criteria, {@link #EMPTY}
                         * is present, or when no extra criteria are provided.</p>
                         * @param criteria The other criteria
                         * @return The AND operation
                         */
                        // @ts-ignore
                        of(criteria: java.lang.Iterable<org.spongepowered.api.advancement.criteria.AdvancementCriterion>): org.spongepowered.api.advancement.criteria.AdvancementCriterion
                    }
                }
            }
        }
    }
}
