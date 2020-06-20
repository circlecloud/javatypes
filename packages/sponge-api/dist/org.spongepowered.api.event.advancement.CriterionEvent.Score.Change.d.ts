declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace advancement {
                    namespace CriterionEvent {
                        namespace Score {
                            /**
                             * Is called when the score of a {@link ScoreAdvancementCriterion}
                             * changes.
                             */
                            // @ts-ignore
                            interface Change extends org.spongepowered.api.event.advancement.CriterionEvent.Score, org.spongepowered.api.event.Cancellable {
                                /**
                                 * Gets the previous score.
                                 * @return The previous score
                                 */
                                // @ts-ignore
                                getPreviousScore(): int
                                /**
                                 * Gets the new score.
                                 * @return The new score
                                 */
                                // @ts-ignore
                                getNewScore(): int
                            }
                        }
                    }
                }
            }
        }
    }
}
