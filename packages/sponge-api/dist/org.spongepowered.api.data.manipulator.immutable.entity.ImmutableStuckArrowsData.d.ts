declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace immutable {
                        namespace entity {
                            /**
                             * An {@link ImmutableDataManipulator} for the number of "stuck arrows" in
                             * {@link Living} entities.
                             */
                            // @ts-ignore
                            interface ImmutableStuckArrowsData extends org.spongepowered.api.data.manipulator.ImmutableDataManipulator<org.spongepowered.api.data.manipulator.immutable.entity.ImmutableStuckArrowsData, org.spongepowered.api.data.manipulator.mutable.entity.StuckArrowsData> {
                                /**
                                 * Gets the {@link ImmutableBoundedValue} for the stuck arrows.
                                 * @return The immutable value of stuck arrows
                                 */
                                // @ts-ignore
                                stuckArrows(): org.spongepowered.api.data.value.immutable.ImmutableBoundedValue<java.lang.Integer | number>
                            }
                        }
                    }
                }
            }
        }
    }
}
