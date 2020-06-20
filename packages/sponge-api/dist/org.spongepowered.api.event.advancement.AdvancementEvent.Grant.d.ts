declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace advancement {
                    namespace AdvancementEvent {
                        /**
                         * Is called when a {@link Advancement} is granted/unlocked.
                         * <p>This event cannot be canceled, you have to cancel the
                         * {@link CriterionEvent.Grant}s of the underlying {@link CriterionEvent}s
                         * to prevent unlocking the {@link Advancement}.</p>
                         */
                        // @ts-ignore
                        interface Grant extends org.spongepowered.api.event.advancement.AdvancementEvent, org.spongepowered.api.event.message.MessageChannelEvent {
                            /**
                             * Gets the {@link Instant} at which the {@link Advancement}
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
