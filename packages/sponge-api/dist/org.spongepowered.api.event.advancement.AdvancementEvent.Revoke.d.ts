declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace advancement {
                    namespace AdvancementEvent {
                        /**
                         * Is called when a {@link AdvancementCriterion} is revoked.
                         * <p>This event cannot be canceled, you have to cancel the
                         * {@link CriterionEvent.Grant}s of the underlying {@link CriterionEvent}s
                         * to prevent revoking the {@link Advancement}.</p>
                         */
                        // @ts-ignore
                        interface Revoke extends org.spongepowered.api.event.advancement.AdvancementEvent {
                        }
                    }
                }
            }
        }
    }
}
