declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace mutable {
                        namespace entity {
                            /**
                             * A {@link DataManipulator} for the "vanish" state. If the value is true,
                             * the {@link Entity} is rendered "vanish".
                             */
                            // @ts-ignore
                            interface InvisibilityData extends org.spongepowered.api.data.manipulator.DataManipulator<org.spongepowered.api.data.manipulator.mutable.entity.InvisibilityData, org.spongepowered.api.data.manipulator.immutable.entity.ImmutableInvisibilityData> {
                                /**
                                 * Gets the {@link Value} of the "invisible" state of an {@link Entity}.
                                 * <p>Note that this is different from the {@link #vanish()} state as when an
                                 * {@link Entity} is "invisible", update packets are still sent to all clients
                                 * and the server.</p>
                                 * @return The value of the invisible state
                                 * @see Keys#INVISIBLE
                                 */
                                // @ts-ignore
                                invisible(): org.spongepowered.api.data.value.mutable.Value<java.lang.Boolean>
                                /**
                                 * Gets the {@link Value} of the "vanish" state of an {@link Entity}.
                                 * <p>The presence of a vanished entity will not be made known to a client;
                                 * no packets pertaining to this entity are sent. Client-side, this entity
                                 * will cease to exist. Server-side it may still be targeted by hostile
                                 * entities or collide with other entities.</p>
                                 * <p>Vanishing an {@link Entity} ridden by other entities (see
                                 * {@link PassengerData}) will cause problems.</p>
                                 * @return The value of the vanish state
                                 * @see Keys#VANISH
                                 */
                                // @ts-ignore
                                vanish(): org.spongepowered.api.data.value.mutable.Value<java.lang.Boolean>
                                /**
                                 * Gets the {@link Value} of whether an {@link Entity} that is "vanished" will
                                 * be ignored for collision detection. The collision detection can affect
                                 * collisions with other {@link Entity entities}, blocks, etc.
                                 * @return The value of the ignore collision detection state
                                 * @see Keys#VANISH_IGNORES_COLLISION
                                 */
                                // @ts-ignore
                                ignoresCollisionDetection(): org.spongepowered.api.data.value.mutable.Value<java.lang.Boolean>
                                /**
                                 * Gets the {@link Value} of whether an {@link Entity} that is "vanished" will
                                 * be ignored when other {@link Entity entities} are processing possible "targets"
                                 * for their AI.
                                 * @return The value of the targetable detection state
                                 * @see Keys#VANISH_PREVENTS_TARGETING
                                 */
                                // @ts-ignore
                                untargetable(): org.spongepowered.api.data.value.mutable.Value<java.lang.Boolean>
                            }
                        }
                    }
                }
            }
        }
    }
}
