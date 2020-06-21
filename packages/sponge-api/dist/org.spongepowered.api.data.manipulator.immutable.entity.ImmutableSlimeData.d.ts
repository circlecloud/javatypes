declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace immutable {
                        namespace entity {
                            /**
                             * An {@link ImmutableDataManipulator} handling the "size" of a {@link Slime}.
                             * Depending on the "size" of the {@link Slime}, it may have more health,
                             * deal more damage, and appear larger in size.
                             */
                            // @ts-ignore
                            interface ImmutableSlimeData extends org.spongepowered.api.data.manipulator.ImmutableDataManipulator<org.spongepowered.api.data.manipulator.immutable.entity.ImmutableSlimeData, org.spongepowered.api.data.manipulator.mutable.entity.SlimeData> {
                                /**
                                 * Gets the {@link ImmutableValue} for the "size" of a slime.
                                 * @return The immutable value for a slime
                                 */
                                // @ts-ignore
                                size(): org.spongepowered.api.data.value.immutable.ImmutableValue<java.lang.Integer | number>
                            }
                        }
                    }
                }
            }
        }
    }
}
