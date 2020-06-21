declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace mutable {
                        namespace entity {
                            /**
                             * Represents the base and height sizes of an entity if it has physical
                             * form. Usually applies to all types of {@link Entity}.
                             */
                            // @ts-ignore
                            interface SizeData extends org.spongepowered.api.data.manipulator.DataManipulator<org.spongepowered.api.data.manipulator.mutable.entity.SizeData, org.spongepowered.api.data.manipulator.immutable.entity.ImmutableSizeData> {
                                /**
                                 * Gets the current x/z size of this entity.
                                 * @return The width of this entity
                                 * @see Keys#BASE_SIZE
                                 */
                                // @ts-ignore
                                base(): org.spongepowered.api.data.value.mutable.Value<java.lang.Float | number>
                                /**
                                 * Gets the current y height of this entity.
                                 * @return The current y height
                                 * @see Keys#HEIGHT
                                 */
                                // @ts-ignore
                                height(): org.spongepowered.api.data.value.mutable.Value<java.lang.Float | number>
                                /**
                                 * Gets the {@link MutableBoundedValue} for the "scale" size.
                                 * @return The value for the scale
                                 * @see Keys#SCALE
                                 */
                                // @ts-ignore
                                scale(): org.spongepowered.api.data.value.mutable.MutableBoundedValue<java.lang.Float | number>
                            }
                        }
                    }
                }
            }
        }
    }
}
