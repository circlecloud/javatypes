declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace mutable {
                        namespace entity {
                            /**
                             * A {@link DataManipulator} for the number of "stuck arrows" in
                             * {@link Living} entities.
                             */
                            // @ts-ignore
                            interface StuckArrowsData extends org.spongepowered.api.data.manipulator.DataManipulator<org.spongepowered.api.data.manipulator.mutable.entity.StuckArrowsData, org.spongepowered.api.data.manipulator.immutable.entity.ImmutableStuckArrowsData> {
                                /**
                                 * Gets the {@link MutableBoundedValue} for the stuck arrows.
                                 * @return The mutable value of stuck arrows
                                 * @see Keys#STUCK_ARROWS
                                 */
                                // @ts-ignore
                                stuckArrows(): org.spongepowered.api.data.value.mutable.MutableBoundedValue<java.lang.Integer>
                            }
                        }
                    }
                }
            }
        }
    }
}
