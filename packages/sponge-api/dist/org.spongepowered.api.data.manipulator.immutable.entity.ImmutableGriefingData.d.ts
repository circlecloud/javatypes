declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace immutable {
                        namespace entity {
                            /**
                             * An {@link ImmutableDataManipulator} handling the "griefing" state of an
                             * {@link Entity}. Usually, when an entity can "grief", it can edit blocks
                             * at will unabated by external forces. Usually applies to {@link Humanoid}s and
                             * {@link Enderman}.
                             */
                            // @ts-ignore
                            interface ImmutableGriefingData extends org.spongepowered.api.data.manipulator.ImmutableDataManipulator<org.spongepowered.api.data.manipulator.immutable.entity.ImmutableGriefingData, org.spongepowered.api.data.manipulator.mutable.entity.GriefingData> {
                                /**
                                 * Gets the {@link ImmutableValue} for the "griefing" state.
                                 * @return The immutable value of the griefing state
                                 */
                                // @ts-ignore
                                canGrief(): org.spongepowered.api.data.value.immutable.ImmutableValue<java.lang.Boolean>
                            }
                        }
                    }
                }
            }
        }
    }
}
