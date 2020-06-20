declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace mutable {
                        namespace entity {
                            /**
                             * A {@link DataManipulator} for the "custom name visible" state
                             * of an {@link Entity}.
                             * @see DisplayNameData
                             */
                            // @ts-ignore
                            interface CustomNameVisibleData extends org.spongepowered.api.data.manipulator.DataManipulator<org.spongepowered.api.data.manipulator.mutable.entity.CustomNameVisibleData, org.spongepowered.api.data.manipulator.immutable.entity.ImmutableCustomNameVisibleData> {
                                /**
                                 * Returns whether the display name is visible to players.
                                 * @return Whether the display name is visible or not
                                 * @see Keys#CUSTOM_NAME_VISIBLE
                                 */
                                // @ts-ignore
                                customNameVisible(): org.spongepowered.api.data.value.mutable.Value<java.lang.Boolean>
                            }
                        }
                    }
                }
            }
        }
    }
}
