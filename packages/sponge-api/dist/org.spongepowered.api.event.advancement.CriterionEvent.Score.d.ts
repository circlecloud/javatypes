declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace advancement {
                    namespace CriterionEvent {
                        /**
                         * A base event for {@link ScoreAdvancementCriterion} related events.
                         */
                        // @ts-ignore
                        interface Score extends org.spongepowered.api.event.advancement.CriterionEvent {
                            // @ts-ignore
                            getCriterion(): org.spongepowered.api.advancement.criteria.ScoreAdvancementCriterion
                        }
                    }
                }
            }
        }
    }
}
