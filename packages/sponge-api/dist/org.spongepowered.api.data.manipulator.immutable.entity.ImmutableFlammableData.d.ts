declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace immutable {
                        namespace entity {
                            /**
                             * An {@link ImmutableDataManipulator} for the "flaming" state of an entity.
                             * This state is different from being set on fire as the entity is igniting
                             * itself without taking damage.
                             */
                            // @ts-ignore
                            interface ImmutableFlammableData extends org.spongepowered.api.data.manipulator.ImmutableDataManipulator<org.spongepowered.api.data.manipulator.immutable.entity.ImmutableFlammableData, org.spongepowered.api.data.manipulator.mutable.entity.FlammableData> {
                                /**
                                 * Gets the {@link ImmutableValue} for the "aflame" state.
                                 * @return The immutable value for the aflame state
                                 */
                                // @ts-ignore
                                flammable(): org.spongepowered.api.data.value.immutable.ImmutableValue<java.lang.Boolean>
                            }
                        }
                    }
                }
            }
        }
    }
}
