declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace advancement {
                namespace criteria {
                    namespace trigger {
                        namespace FilteredTrigger {
                            /**
                             * A builder to create {@link FilteredTrigger}s.
                             * @param <C> The trigger type
                             */
                            // @ts-ignore
                            interface Builder<C extends org.spongepowered.api.advancement.criteria.trigger.FilteredTriggerConfiguration> extends org.spongepowered.api.util.ResettableBuilder<org.spongepowered.api.advancement.criteria.trigger.FilteredTrigger<C>, org.spongepowered.api.advancement.criteria.trigger.FilteredTrigger.Builder<C>> {
                                /**
                                 * Sets the {@link Trigger}.
                                 * @param type The trigger type
                                 * @param <T> The configuration type
                                 * @return This builder, for chaining
                                 */
                                // @ts-ignore
                                type<T extends org.spongepowered.api.advancement.criteria.trigger.FilteredTriggerConfiguration>(type: org.spongepowered.api.advancement.criteria.trigger.Trigger<T>): org.spongepowered.api.advancement.criteria.trigger.FilteredTrigger.Builder<T>
                                /**
                                 * Sets the {@link FilteredTriggerConfiguration}.
                                 * @param config The configuration
                                 * @return This builder, for chaining
                                 */
                                // @ts-ignore
                                config(config: C): org.spongepowered.api.advancement.criteria.trigger.FilteredTrigger.Builder<C>
                                /**
                                 * Builds the {@link FilteredTrigger}.
                                 * @return The trigger
                                 */
                                // @ts-ignore
                                build(): org.spongepowered.api.advancement.criteria.trigger.FilteredTrigger<C>
                            }
                        }
                    }
                }
            }
        }
    }
}
