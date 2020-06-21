declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace mutable {
                        namespace entity {
                            /**
                             * Represents data that defines the owner as having a growing
                             * age process.
                             */
                            // @ts-ignore
                            interface AgeableData extends org.spongepowered.api.data.manipulator.DataManipulator<org.spongepowered.api.data.manipulator.mutable.entity.AgeableData, org.spongepowered.api.data.manipulator.immutable.entity.ImmutableAgeableData> {
                                /**
                                 * Gets the {@link MutableBoundedValue} for the "age" state.
                                 * @return The mutable bounded value for the "age"
                                 * @see Keys#AGE
                                 */
                                // @ts-ignore
                                age(): org.spongepowered.api.data.value.mutable.MutableBoundedValue<java.lang.Integer | number>
                                /**
                                 * Gets the {@link Value} for whether the {@link #age()} is
                                 * considered to be an "adult".
                                 * @return The immutable value for the "adult" state
                                 */
                                // @ts-ignore
                                adult(): org.spongepowered.api.data.value.mutable.Value<java.lang.Boolean>
                            }
                        }
                    }
                }
            }
        }
    }
}
