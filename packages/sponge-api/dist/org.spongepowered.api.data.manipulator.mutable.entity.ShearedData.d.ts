declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace mutable {
                        namespace entity {
                            /**
                             * Signifies that an entity is currently "sheared" and will regrow at some
                             * point. Usually applicable to {@link Sheep}.
                             */
                            // @ts-ignore
                            interface ShearedData extends org.spongepowered.api.data.manipulator.DataManipulator<org.spongepowered.api.data.manipulator.mutable.entity.ShearedData, org.spongepowered.api.data.manipulator.immutable.entity.ImmutableShearedData> {
                                /**
                                 * Gets the {@link Value} of the "sheared" state.
                                 * @return The value for the "sheared" state
                                 * @see Keys#IS_SHEARED
                                 */
                                // @ts-ignore
                                sheared(): org.spongepowered.api.data.value.mutable.Value<java.lang.Boolean>
                            }
                        }
                    }
                }
            }
        }
    }
}
