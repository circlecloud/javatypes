declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace mutable {
                        namespace tileentity {
                            /**
                             * Represents the data for an {@link EndGateway}.
                             */
                            // @ts-ignore
                            interface EndGatewayData extends org.spongepowered.api.data.manipulator.DataManipulator<org.spongepowered.api.data.manipulator.mutable.tileentity.EndGatewayData, org.spongepowered.api.data.manipulator.immutable.tileentity.ImmutableEndGatewayData> {
                                /**
                                 * Gets the {@link Value} for the exit portal location of
                                 * the {@link EndGateway}.
                                 * @return The value for the exit portal location
                                 */
                                // @ts-ignore
                                exitPosition(): org.spongepowered.api.data.value.mutable.Value<Vector3i>
                                /**
                                 * Gets the {@link Value} for the "should use exact teleport location"
                                 * state of the {@link EndGateway}.
                                 * @return The value for the "should use exact teleport location" state
                                 */
                                // @ts-ignore
                                exactTeleport(): org.spongepowered.api.data.value.mutable.Value<java.lang.Boolean>
                                /**
                                 * Gets the {@link Value} for the age of the {@link EndGateway}.
                                 * @return The value for the age
                                 */
                                // @ts-ignore
                                age(): org.spongepowered.api.data.value.mutable.Value<java.lang.Long | number>
                                /**
                                 * Gets the {@link Value} for the teleport cooldown of the {@link EndGateway}.
                                 * @return The value for the teleport cooldown
                                 */
                                // @ts-ignore
                                teleportCooldown(): org.spongepowered.api.data.value.mutable.Value<java.lang.Integer | number>
                            }
                        }
                    }
                }
            }
        }
    }
}
