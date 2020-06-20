declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace mutable {
                        namespace entity {
                            /**
                             * An {@link DataManipulator} for the "aflame" state of an entity. This state
                             * is different from being set on fire as the entity is igniting itself without
                             * taking damage. Usually applies to {@link Blaze}s.
                             */
                            // @ts-ignore
                            interface FlammableData extends org.spongepowered.api.data.manipulator.DataManipulator<org.spongepowered.api.data.manipulator.mutable.entity.FlammableData, org.spongepowered.api.data.manipulator.immutable.entity.ImmutableFlammableData> {
                                /**
                                 * Gets the {@link Value} for the "aflame" state.
                                 * @return The value for the aflame state
                                 * @see Keys#IS_AFLAME
                                 */
                                // @ts-ignore
                                flammable(): org.spongepowered.api.data.value.mutable.Value<java.lang.Boolean>
                            }
                        }
                    }
                }
            }
        }
    }
}
