declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace advancement {
                namespace criteria {
                    namespace trigger {
                        namespace Trigger {
                            /**
                             * A builder to create {@link Trigger}s.
                             * @param <C> The configuration type
                             */
                            // @ts-ignore
                            interface Builder<C extends org.spongepowered.api.advancement.criteria.trigger.FilteredTriggerConfiguration> extends org.spongepowered.api.util.ResettableBuilder<org.spongepowered.api.advancement.criteria.trigger.Trigger<C>, org.spongepowered.api.advancement.criteria.trigger.Trigger.Builder<C>> {
                                /**
                                 * Sets the class for the {@link FilteredTriggerConfiguration} as
                                 * a {@link DataSerializable}. The configuration will be constructed
                                 * using the {@link DataBuilder} that is registered for
                                 * the {@link DataSerializable}.
                                 * @param dataConfigClass The configuration class
                                 * @param <T> The configuration type
                                 * @return This builder, for chaining
                                 */
                                // @ts-ignore
                                dataSerializableConfig<T extends org.spongepowered.api.advancement.criteria.trigger.FilteredTriggerConfiguration & org.spongepowered.api.data.DataSerializable>(dataConfigClass: java.lang.Class<T>): org.spongepowered.api.advancement.criteria.trigger.Trigger.Builder<T>
                                /**
                                 * Sets the class for the {@link FilteredTriggerConfiguration} as
                                 * a config serializable. This configuration will be constructed
                                 * using Configurate (with {@link TypeSerializer}s).
                                 * @param configClass The configuration class
                                 * @param <T> The configuration type
                                 * @return This builder, for chaining
                                 */
                                // @ts-ignore
                                typeSerializableConfig<T extends org.spongepowered.api.advancement.criteria.trigger.FilteredTriggerConfiguration>(configClass: java.lang.Class<T>): org.spongepowered.api.advancement.criteria.trigger.Trigger.Builder<T>
                                /**
                                 * Sets the class for the {@link FilteredTriggerConfiguration} as
                                 * a config serializable. This configuration will be constructed using
                                 * Configurate (with {@link TypeSerializer}s) with a
                                 * specific {@link TypeSerializerCollection} instead of the global one.
                                 * @param configClass The configuration class
                                 * @param typeSerializerCollection The type serializer collection
                                 * @param <T> The configuration type
                                 * @return This builder, for chaining
                                 */
                                // @ts-ignore
                                typeSerializableConfig<T extends org.spongepowered.api.advancement.criteria.trigger.FilteredTriggerConfiguration>(configClass: java.lang.Class<T>, typeSerializerCollection: TypeSerializerCollection): org.spongepowered.api.advancement.criteria.trigger.Trigger.Builder<T>
                                /**
                                 * Sets the class for the {@link FilteredTriggerConfiguration} as
                                 * a json serializable. This configuration will be constructed using
                                 * the provided {@link Gson} instance.
                                 * @param configClass The configuration class
                                 * @param gson The gson instance to use
                                 * @param <T> The configuration type
                                 * @return This builder, for chaining
                                 */
                                // @ts-ignore
                                jsonSerializableConfig<T extends org.spongepowered.api.advancement.criteria.trigger.FilteredTriggerConfiguration>(configClass: java.lang.Class<T>, gson: Gson): org.spongepowered.api.advancement.criteria.trigger.Trigger.Builder<T>
                                /**
                                 * Sets the class for the {@link FilteredTriggerConfiguration} as
                                 * a json serializable. This configuration will be constructed using
                                 * the default {@link Gson} instance.
                                 * @param configClass The configuration class
                                 * @param <T> The configuration type
                                 * @return This builder, for chaining
                                 */
                                // @ts-ignore
                                jsonSerializableConfig<T extends org.spongepowered.api.advancement.criteria.trigger.FilteredTriggerConfiguration>(configClass: java.lang.Class<T>): org.spongepowered.api.advancement.criteria.trigger.Trigger.Builder<T>
                                /**
                                 * Sets the class for the {@link FilteredTriggerConfiguration} to use
                                 * {@link FilteredTriggerConfiguration.Empty}.
                                 * @return This builder, for chaining
                                 */
                                // @ts-ignore
                                emptyConfig(): org.spongepowered.api.advancement.criteria.trigger.Trigger.Builder<org.spongepowered.api.advancement.criteria.trigger.FilteredTriggerConfiguration.Empty>
                                /**
                                 * Adds the {@link Consumer} to handle the triggers. If no handler is
                                 * provided then will the result of the trigger always be {@code true},
                                 * which results in triggering the {@link Criterion}.
                                 * <p>The {@link Cause} of the event should be used to determine
                                 * whether the configuration matches the requirements to trigger
                                 * the criterion.</p>
                                 * @param eventListener The event listener
                                 * @return This builder, for chaining
                                 */
                                // @ts-ignore
                                listener(eventListener: java.util.function$.Consumer<org.spongepowered.api.event.advancement.CriterionEvent.Trigger<C>>): org.spongepowered.api.advancement.criteria.trigger.Trigger.Builder<C>
                                /**
                                 * Sets the identifier of the {@link Trigger}
                                 * (without the namespace).
                                 * @param id The identifier
                                 * @return This builder, for chaining
                                 */
                                // @ts-ignore
                                id(id: java.lang.String | string): org.spongepowered.api.advancement.criteria.trigger.Trigger.Builder<C>
                                /**
                                 * Sets the name of the {@link Trigger}. Defaults
                                 * to the identifier ({@link #id(String)}).
                                 * @param name The name
                                 * @return This builder, for chaining
                                 */
                                // @ts-ignore
                                name(name: java.lang.String | string): org.spongepowered.api.advancement.criteria.trigger.Trigger.Builder<C>
                                /**
                                 * Builds a {@link Trigger}.
                                 * @return The trigger type
                                 */
                                // @ts-ignore
                                build(): org.spongepowered.api.advancement.criteria.trigger.Trigger<C>
                                // @ts-ignore
                                from(value: org.spongepowered.api.advancement.criteria.trigger.Trigger<C>): org.spongepowered.api.advancement.criteria.trigger.Trigger.Builder<C>
                            }
                        }
                    }
                }
            }
        }
    }
}
