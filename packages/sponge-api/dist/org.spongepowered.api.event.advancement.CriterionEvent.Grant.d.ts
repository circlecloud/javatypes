declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace advancement {
                    namespace CriterionEvent {
                        /**
                         * Is called when a {@link AdvancementCriterion} is granted/unlocked.
                         * <p>The {@link Cause} in vanilla minecraft may contain the {@link Trigger}
                         * that caused this event to happen, other methods to trigger the event
                         * are through commands or the api.</p>
                         */
                        // @ts-ignore
                        interface Grant extends org.spongepowered.api.event.advancement.CriterionEvent, org.spongepowered.api.event.Cancellable {
                            /**
                             * Gets the {@link Instant} at which the {@link AdvancementCriterion}
                             * was unlocked.
                             * @return The time instant
                             */
                            // @ts-ignore
                            getTime(): java.time.Instant
                        }
                    }
                }
            }
        }
    }
}
