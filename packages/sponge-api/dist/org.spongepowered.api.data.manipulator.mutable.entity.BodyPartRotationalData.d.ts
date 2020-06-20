declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace mutable {
                        namespace entity {
                            /**
                             * Represents the mapped rotational data for all known body parts. Usually
                             * applicable to {@link Humanoid}s and {@link ArmorStand}s.
                             */
                            // @ts-ignore
                            interface BodyPartRotationalData extends org.spongepowered.api.data.manipulator.DataManipulator<org.spongepowered.api.data.manipulator.mutable.entity.BodyPartRotationalData, org.spongepowered.api.data.manipulator.immutable.entity.ImmutableBodyPartRotationalData> {
                                /**
                                 * Gets the {@link MapValue} of {@link BodyPart}s to {@link Vector3d}
                                 * rotations.
                                 * @return The map value of body parts to rotations
                                 * @see Keys#BODY_ROTATIONS
                                 */
                                // @ts-ignore
                                partRotation(): org.spongepowered.api.data.value.mutable.MapValue<org.spongepowered.api.data.type.BodyPart, Vector3d>
                                /**
                                 * Gets the direction the headpiece is aiming at.
                                 * @return The direction the headpiece is aiming at
                                 * @see Keys#HEAD_ROTATION
                                 */
                                // @ts-ignore
                                headDirection(): org.spongepowered.api.data.value.mutable.Value<Vector3d>
                                /**
                                 * Gets the direction the body is aiming at.
                                 * @return The direction the body is aiming at
                                 * @see Keys#CHEST_ROTATION
                                 */
                                // @ts-ignore
                                bodyRotation(): org.spongepowered.api.data.value.mutable.Value<Vector3d>
                                /**
                                 * Gets the direction the left arm is aiming at.
                                 * @return The direction the left arm is aiming at
                                 * @see Keys#LEFT_ARM_ROTATION
                                 */
                                // @ts-ignore
                                leftArmDirection(): org.spongepowered.api.data.value.mutable.Value<Vector3d>
                                /**
                                 * Gets the direction the right arm is aiming at.
                                 * @return The direction the right arm is aiming at
                                 * @see Keys#RIGHT_ARM_ROTATION
                                 */
                                // @ts-ignore
                                rightArmDirection(): org.spongepowered.api.data.value.mutable.Value<Vector3d>
                                /**
                                 * Gets the direction the left leg is aiming at.
                                 * @return The direction the left leg is aiming at
                                 * @see Keys#LEFT_LEG_ROTATION
                                 */
                                // @ts-ignore
                                leftLegDirection(): org.spongepowered.api.data.value.mutable.Value<Vector3d>
                                /**
                                 * Gets the direction the right leg is aiming at.
                                 * @return The direction the right leg is aiming at
                                 * @see Keys#RIGHT_LEG_ROTATION
                                 */
                                // @ts-ignore
                                rightLegDirection(): org.spongepowered.api.data.value.mutable.Value<Vector3d>
                            }
                        }
                    }
                }
            }
        }
    }
}
