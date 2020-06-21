declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace immutable {
                        namespace tileentity {
                            /**
                             * An {@link ImmutableDataManipulator} representing the {@link EndGateway}.
                             */
                            // @ts-ignore
                            interface ImmutableEndGatewayData extends org.spongepowered.api.data.manipulator.ImmutableDataManipulator<org.spongepowered.api.data.manipulator.immutable.tileentity.ImmutableEndGatewayData, org.spongepowered.api.data.manipulator.mutable.tileentity.EndGatewayData> {
                                /**
                                 * Gets the {@link ImmutableValue} for the exit portal location of
                                 * the {@link EndGateway}.
                                 * @return The immutable value for the exit portal location
                                 */
                                // @ts-ignore
                                exitPortal(): org.spongepowered.api.data.value.immutable.ImmutableValue<Vector3i>
                                /**
                                 * Gets the {@link ImmutableValue} for the "should use exact teleport
                                 * location" state of the {@link EndGateway}.
                                 * @return The immutable value for the "should use exact teleport location"
                                 *      state
                                 */
                                // @ts-ignore
                                exactTeleport(): org.spongepowered.api.data.value.immutable.ImmutableValue<java.lang.Boolean>
                                /**
                                 * Gets the {@link ImmutableValue} for the age of the {@link EndGateway}.
                                 * @return The immutable value for the age
                                 */
                                // @ts-ignore
                                age(): org.spongepowered.api.data.value.immutable.ImmutableValue<java.lang.Long | number>
                                /**
                                 * Gets the {@link ImmutableValue} for the teleport cooldown of the
                                 * {@link EndGateway}.
                                 * @return The immutable value for the teleport cooldown
                                 */
                                // @ts-ignore
                                teleportCooldown(): org.spongepowered.api.data.value.immutable.ImmutableValue<java.lang.Integer | number>
                            }
                        }
                    }
                }
            }
        }
    }
}
