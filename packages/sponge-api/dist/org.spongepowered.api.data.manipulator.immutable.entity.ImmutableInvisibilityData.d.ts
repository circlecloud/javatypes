declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace immutable {
                        namespace entity {
                            /**
                             * An {@link ImmutableDataManipulator} for the "vanish" state. If present,
                             * the {@link Entity} is rendered "vanish".
                             */
                            // @ts-ignore
                            interface ImmutableInvisibilityData extends org.spongepowered.api.data.manipulator.ImmutableDataManipulator<org.spongepowered.api.data.manipulator.immutable.entity.ImmutableInvisibilityData, org.spongepowered.api.data.manipulator.mutable.entity.InvisibilityData> {
                                /**
                                 * Gets the {@link ImmutableValue} of the "invisible" state of an
                                 * {@link Entity}.
                                 * <p>Note that this is different from the {@link #vanish()} state as when an
                                 * {@link Entity} is "invisible", update packets are still sent to all clients
                                 * and the server. Likewise, no </p>
                                 * @return The immutable value of the invisible state
                                 */
                                // @ts-ignore
                                invisible(): org.spongepowered.api.data.value.immutable.ImmutableValue<java.lang.Boolean>
                                /**
                                 * Gets the {@link ImmutableValue} of the "vanish" state of an
                                 * {@link Entity}.
                                 * @return The immutable value of the vanish state
                                 */
                                // @ts-ignore
                                vanish(): org.spongepowered.api.data.value.immutable.ImmutableValue<java.lang.Boolean>
                                /**
                                 * Gets the {@link Value} of whether an {@link Entity} that is "vanished" will
                                 * be ignored for collision detection. The collision detection can affect
                                 * collisions with other {@link Entity entities}, blocks, etc.
                                 * @return The value of the collision detection state
                                 */
                                // @ts-ignore
                                ignoresCollisionDetection(): org.spongepowered.api.data.value.immutable.ImmutableValue<java.lang.Boolean>
                                /**
                                 * Gets the {@link Value} of whether an {@link Entity} that is "vanished" will
                                 * be ignored when other {@link Entity entities} are processing possible "targets"
                                 * for their AI.
                                 * @return The value of the targetable detection state
                                 */
                                // @ts-ignore
                                untargetable(): org.spongepowered.api.data.value.immutable.ImmutableValue<java.lang.Boolean>
                            }
                        }
                    }
                }
            }
        }
    }
}
