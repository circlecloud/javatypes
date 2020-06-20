declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace mutable {
                        namespace entity {
                            /**
                             * An {@link DataManipulator} handling the "size" of a {@link Slime}. Depending
                             * on the "size" of the {@link Slime}, it may have more health, deal more
                             * damage, and appear larger in size.
                             */
                            // @ts-ignore
                            interface SlimeData extends org.spongepowered.api.data.manipulator.DataManipulator<org.spongepowered.api.data.manipulator.mutable.entity.SlimeData, org.spongepowered.api.data.manipulator.immutable.entity.ImmutableSlimeData> {
                                /**
                                 * Gets the {@link MutableBoundedValue} for the "size" of a slime.
                                 * @return The value for a slime
                                 * @see Keys#SLIME_SIZE
                                 */
                                // @ts-ignore
                                size(): org.spongepowered.api.data.value.mutable.MutableBoundedValue<java.lang.Integer>
                            }
                        }
                    }
                }
            }
        }
    }
}
