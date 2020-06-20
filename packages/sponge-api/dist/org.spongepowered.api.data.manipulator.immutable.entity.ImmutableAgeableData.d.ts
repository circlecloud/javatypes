declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace immutable {
                        namespace entity {
                            /**
                             * An {@link ImmutableDataManipulator} for handling the "age" of an
                             * {@link Entity}.
                             */
                            // @ts-ignore
                            interface ImmutableAgeableData extends org.spongepowered.api.data.manipulator.ImmutableDataManipulator<org.spongepowered.api.data.manipulator.immutable.entity.ImmutableAgeableData, org.spongepowered.api.data.manipulator.mutable.entity.AgeableData> {
                                /**
                                 * Gets the {@link ImmutableBoundedValue} for the "age" state.
                                 * @return The immutable bounded value for the "age"
                                 */
                                // @ts-ignore
                                age(): org.spongepowered.api.data.value.immutable.ImmutableBoundedValue<java.lang.Integer>
                                /**
                                 * Gets the {@link ImmutableValue} for whether the {@link #age()} is
                                 * considered to be an "adult".
                                 * @return The immutable value for the "adult" state
                                 */
                                // @ts-ignore
                                adult(): org.spongepowered.api.data.value.immutable.ImmutableValue<java.lang.Boolean>
                            }
                        }
                    }
                }
            }
        }
    }
}
