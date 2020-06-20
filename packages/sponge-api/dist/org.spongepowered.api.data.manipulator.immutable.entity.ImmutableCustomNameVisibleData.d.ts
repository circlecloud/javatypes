declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace immutable {
                        namespace entity {
                            /**
                             * An {@link ImmutableDataManipulator} for the "custom name visible" state
                             * of an {@link Entity}.
                             * @see ImmutableDisplayNameData
                             */
                            // @ts-ignore
                            interface ImmutableCustomNameVisibleData extends org.spongepowered.api.data.manipulator.ImmutableDataManipulator<org.spongepowered.api.data.manipulator.immutable.entity.ImmutableCustomNameVisibleData, org.spongepowered.api.data.manipulator.mutable.entity.CustomNameVisibleData> {
                                /**
                                 * Returns whether the display name is visible to players.
                                 * @return Whether the display name is visible or not
                                 */
                                // @ts-ignore
                                customNameVisible(): org.spongepowered.api.data.value.immutable.ImmutableValue<java.lang.Boolean>
                            }
                        }
                    }
                }
            }
        }
    }
}
