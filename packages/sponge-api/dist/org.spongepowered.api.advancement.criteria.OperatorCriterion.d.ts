declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace advancement {
                namespace criteria {
                    // @ts-ignore
                    interface OperatorCriterion extends org.spongepowered.api.advancement.criteria.AdvancementCriterion {
                        /**
                         * Attempts to find all the children {@link AdvancementCriterion}s
                         * with the specified name. The children will be checked recursively.
                         * @param name The name
                         * @return The criteria
                         */
                        // @ts-ignore
                        find(name: string): java.util.Collection<org.spongepowered.api.advancement.criteria.AdvancementCriterion>
                        /**
                         * Attempts to find the first child {@link AdvancementCriterion} with
                         * the specified name. The children will be checked recursively, but
                         * direct children are prioritized.
                         * @param name The name
                         * @return The criterion
                         */
                        // @ts-ignore
                        findFirst(name: string): java.util.Optional<org.spongepowered.api.advancement.criteria.AdvancementCriterion>
                        /**
                         * Gets the children {@link AdvancementCriterion}s of this
                         * {@link OperatorCriterion}. May contain {@link OperatorCriterion}s.
                         * @return The criteria
                         */
                        // @ts-ignore
                        getCriteria(): java.util.Collection<org.spongepowered.api.advancement.criteria.AdvancementCriterion>
                        /**
                         * Gets the leaf {@link AdvancementCriterion}s. This means that there will
                         * never be any {@link OperatorCriterion}s in this list.
                         * @return The leaf criteria
                         */
                        // @ts-ignore
                        getLeafCriteria(): java.util.Collection<org.spongepowered.api.advancement.criteria.AdvancementCriterion>
                    }
                }
            }
        }
    }
}
