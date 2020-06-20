declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace advancement {
                namespace criteria {
                    namespace trigger {
                        /**
                         * Represents something that will filter the context
                         * of the {@link Trigger} to determine whether a criterion
                         * will be granted.
                         */
                        // @ts-ignore
                        interface FilteredTrigger<C extends org.spongepowered.api.advancement.criteria.trigger.FilteredTriggerConfiguration> {
                            /**
                             * Creates a new {@link Trigger.Builder}.
                             * @return The builder
                             */
                            // @ts-ignore
                            builder(): org.spongepowered.api.advancement.criteria.trigger.FilteredTrigger.Builder<?>
                            /**
                             * Gets the {@link Trigger}.
                             * @return The type
                             */
                            // @ts-ignore
                            getType(): org.spongepowered.api.advancement.criteria.trigger.Trigger<C>
                            /**
                             * Gets the {@link FilteredTriggerConfiguration} of this trigger.
                             * @return The trigger configuration
                             */
                            // @ts-ignore
                            getConfiguration(): C
                        }
                    }
                }
            }
        }
    }
}
