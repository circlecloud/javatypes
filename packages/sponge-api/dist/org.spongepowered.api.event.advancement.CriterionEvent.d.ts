declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace advancement {
                    /**
                     * A base event for {@link AdvancementCriterion} related events.
                     */
                    // @ts-ignore
                    interface CriterionEvent extends org.spongepowered.api.event.advancement.AdvancementEvent {
                        /**
                         * Gets the {@link AdvancementCriterion} that was met.
                         * @return The criterion
                         */
                        // @ts-ignore
                        getCriterion(): org.spongepowered.api.advancement.criteria.AdvancementCriterion
                    }
                }
            }
        }
    }
}
