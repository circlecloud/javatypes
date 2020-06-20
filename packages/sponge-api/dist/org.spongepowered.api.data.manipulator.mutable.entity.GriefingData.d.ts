declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace mutable {
                        namespace entity {
                            /**
                             * A {@link DataManipulator} handling the "griefing" state of an
                             * {@link Entity}. Usually, when an entity can "grief", it can edit blocks
                             * at will unabated by external forces. Usually applies to {@link Humanoid}s and
                             * {@link Enderman}.
                             */
                            // @ts-ignore
                            interface GriefingData extends org.spongepowered.api.data.manipulator.DataManipulator<org.spongepowered.api.data.manipulator.mutable.entity.GriefingData, org.spongepowered.api.data.manipulator.immutable.entity.ImmutableGriefingData> {
                                /**
                                 * Gets the {@link Value} for the "griefing" state.
                                 * @return The value of the griefing state
                                 * @see Keys#CAN_GRIEF
                                 */
                                // @ts-ignore
                                canGrief(): org.spongepowered.api.data.value.mutable.Value<java.lang.Boolean>
                            }
                        }
                    }
                }
            }
        }
    }
}
