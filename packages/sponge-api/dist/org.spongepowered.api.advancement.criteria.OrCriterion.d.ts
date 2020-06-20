declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace advancement {
                namespace criteria {
                    /**
                     * A {@link AdvancementCriterion} that represents an OR operation. One the criteria
                     * should be {@code true} in order for the final result to be {@code true}.
                     */
                    // @ts-ignore
                    interface OrCriterion extends org.spongepowered.api.advancement.criteria.OperatorCriterion {
                        /**
                         * Attempts to build a new OR operation with the
                         * given {@link AdvancementCriterion}s.
                         * <p> There is no guarantee that the returned extends {@link OrCriterion},
                         * this depends on if there are duplicate criteria, {@link #EMPTY}
                         * is present, or when no extra criteria are provided.</p>
                         * @param criteria The other criteria
                         * @return The OR operation
                         */
                        // @ts-ignore
                        of(...criteria: org.spongepowered.api.advancement.criteria.AdvancementCriterion[]): org.spongepowered.api.advancement.criteria.AdvancementCriterion
                        /**
                         * Attempts to build a new OR operation with the
                         * given {@link AdvancementCriterion}s.
                         * <p>There is no guarantee that the returned extends {@link OrCriterion},
                         * this depends on if there are duplicate criteria, {@link #EMPTY}
                         * is present, or when no extra criteria are provided.</p>
                         * @param criteria The other criteria
                         * @return The OR operation
                         */
                        // @ts-ignore
                        of(criteria: java.lang.Iterable<org.spongepowered.api.advancement.criteria.AdvancementCriterion>): org.spongepowered.api.advancement.criteria.AdvancementCriterion
                    }
                }
            }
        }
    }
}
