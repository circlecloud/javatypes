declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace advancement {
                namespace criteria {
                    /**
                     * Represents a criterion that should be acquired
                     * to unlock a {@link Advancement}.
                     */
                    // @ts-ignore
                    interface AdvancementCriterion {
                        /**
                         * Represents an empty criterion, this means that nothing has to be
                         * achieved to unlock a {@link Advancement}.
                         */
                        // @ts-ignore
                        
                        /**
                         * Represents a dummy criterion, this will never be triggered
                         * by vanilla Minecraft.
                         */
                        // @ts-ignore
                        
                        /**
                         * Creates a new {@link Builder} to create {@link AdvancementCriterion}s.
                         * @return The new builder
                         */
                        // @ts-ignore
                        builder(): org.spongepowered.api.advancement.criteria.AdvancementCriterion.Builder
                        /**
                         * Gets the name of this criterion.
                         * @return The name
                         */
                        // @ts-ignore
                        getName(): java.lang.String
                        /**
                         * Combines this {@link AdvancementCriterion} with the other criteria
                         * to create an AND operation.
                         * <p>There is no guarantee that the returned extends {@link AndCriterion},
                         * this depends on if there are duplicate criteria, {@link #EMPTY}
                         * is present, or when no extra criteria are provided.</p>
                         * @param criteria The criteria
                         * @return The AND operation
                         */
                        // @ts-ignore
                        and(...criteria: org.spongepowered.api.advancement.criteria.AdvancementCriterion[]): org.spongepowered.api.advancement.criteria.AdvancementCriterion
                        /**
                         * Combines this {@link AdvancementCriterion} with the other criteria
                         * to create an AND operation.
                         * <p>There is no guarantee that the returned extends {@link AndCriterion},
                         * this depends on if there are duplicate criteria, {@link #EMPTY}
                         * is present, or when no extra criteria are provided.</p>
                         * @param criteria The criteria
                         * @return The AND operation
                         */
                        // @ts-ignore
                        and(criteria: java.lang.Iterable<org.spongepowered.api.advancement.criteria.AdvancementCriterion>): org.spongepowered.api.advancement.criteria.AdvancementCriterion
                        /**
                         * Combines this {@link AdvancementCriterion} with the other criteria
                         * to create an OR operation.
                         * <p>There is no guarantee that the returned extends {@link OrCriterion},
                         * this depends on if there are duplicate criteria, {@link #EMPTY}
                         * is present, or when no extra criteria are provided.</p>
                         * @param criteria The criteria
                         * @return The OR operation
                         */
                        // @ts-ignore
                        or(...criteria: org.spongepowered.api.advancement.criteria.AdvancementCriterion[]): org.spongepowered.api.advancement.criteria.AdvancementCriterion
                        /**
                         * Combines this {@link AdvancementCriterion} with the other criteria
                         * to create an OR operation.
                         * <p>There is no guarantee that the returned extends {@link OrCriterion},
                         * this depends on if there are duplicate criteria, {@link #EMPTY}
                         * is present, or when no extra criteria are provided.</p>
                         * @param criteria The criteria
                         * @return The OR operation
                         */
                        // @ts-ignore
                        or(criteria: java.lang.Iterable<org.spongepowered.api.advancement.criteria.AdvancementCriterion>): org.spongepowered.api.advancement.criteria.AdvancementCriterion
                        /**
                         * Gets the {@link FilteredTrigger} of this
                         * {@link AdvancementCriterion}, if present.
                         * @return The trigger
                         */
                        // @ts-ignore
                        getTrigger(): java.util.Optional<org.spongepowered.api.advancement.criteria.trigger.FilteredTrigger<?>>
                    }
                }
            }
        }
    }
}
