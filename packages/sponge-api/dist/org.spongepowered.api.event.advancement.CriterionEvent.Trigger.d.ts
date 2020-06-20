declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace advancement {
                    namespace CriterionEvent {
                        /**
                         * Is called when a {@link FilteredTrigger} is
                         * being processed for a specific {@link Criterion}.
                         */
                        // @ts-ignore
                        interface Trigger<C extends org.spongepowered.api.advancement.criteria.trigger.FilteredTriggerConfiguration> extends org.spongepowered.api.event.advancement.CriterionEvent, org.spongepowered.api.event.GenericEvent<C> {
                            /**
                             * Gets the {@link FilteredTrigger}
                             * that is being processed.
                             * @return The trigger
                             */
                            // @ts-ignore
                            getTrigger(): org.spongepowered.api.advancement.criteria.trigger.FilteredTrigger<C>
                            /**
                             * Gets the result of the trigger event.
                             * @return The result
                             */
                            // @ts-ignore
                            getResult(): boolean
                            /**
                             * Sets the result of the trigger event.
                             * @param result The result
                             */
                            // @ts-ignore
                            setResult(result: boolean): void
                        }
                    }
                }
            }
        }
    }
}
