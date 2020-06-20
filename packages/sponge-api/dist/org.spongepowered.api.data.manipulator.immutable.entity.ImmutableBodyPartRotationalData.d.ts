declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace immutable {
                        namespace entity {
                            /**
                             * An {@link ImmutableDataManipulator} containing an {@link ImmutableMapValue}
                             * matching {@link BodyPart}s to {@link Vector3d} rotations. Depending on the
                             * owning {@link CompositeValueStore}, certain {@link BodyPart}s may not be
                             * usable or valid.
                             */
                            // @ts-ignore
                            interface ImmutableBodyPartRotationalData extends org.spongepowered.api.data.manipulator.ImmutableDataManipulator<org.spongepowered.api.data.manipulator.immutable.entity.ImmutableBodyPartRotationalData, org.spongepowered.api.data.manipulator.mutable.entity.BodyPartRotationalData> {
                                /**
                                 * Gets the {@link ImmutableMapValue} of {@link BodyPart}s to
                                 * {@link Vector3d} rotations.
                                 * @return The immutable map value of body parts to rotations
                                 */
                                // @ts-ignore
                                partRotation(): org.spongepowered.api.data.value.immutable.ImmutableMapValue<org.spongepowered.api.data.type.BodyPart, Vector3d>
                                /**
                                 * Gets the individual {@link ImmutableValue} of the {@link Vector3d}
                                 * rotation for {@link BodyParts#HEAD}.
                                 * @return The immutable rotation value for the head rotation
                                 */
                                // @ts-ignore
                                headDirection(): org.spongepowered.api.data.value.immutable.ImmutableValue<Vector3d>
                                /**
                                 * Gets the individual {@link ImmutableValue} of the {@link Vector3d}
                                 * rotation for {@link BodyParts#CHEST}.
                                 * @return The immutable rotation value for the chest rotation
                                 */
                                // @ts-ignore
                                bodyRotation(): org.spongepowered.api.data.value.immutable.ImmutableValue<Vector3d>
                                /**
                                 * Gets the individual {@link ImmutableValue} of the {@link Vector3d}
                                 * rotation for {@link BodyParts#LEFT_ARM}.
                                 * @return The immutable rotation value for the left arm rotation
                                 */
                                // @ts-ignore
                                leftArmDirection(): org.spongepowered.api.data.value.immutable.ImmutableValue<Vector3d>
                                /**
                                 * Gets the individual {@link ImmutableValue} of the {@link Vector3d}
                                 * rotation for {@link BodyParts#RIGHT_ARM}.
                                 * @return The immutable rotation value for the right arm rotation
                                 */
                                // @ts-ignore
                                rightArmDirection(): org.spongepowered.api.data.value.immutable.ImmutableValue<Vector3d>
                                /**
                                 * Gets the individual {@link ImmutableValue} of the {@link Vector3d}
                                 * rotation for {@link BodyParts#LEFT_LEG}.
                                 * @return The immutable rotation value for the left leg rotation
                                 */
                                // @ts-ignore
                                leftLegDirection(): org.spongepowered.api.data.value.immutable.ImmutableValue<Vector3d>
                                /**
                                 * Gets the individual {@link ImmutableValue} of the {@link Vector3d}
                                 * rotation for {@link BodyParts#RIGHT_LEG}.
                                 * @return The immutable rotation value for the right leg rotation
                                 */
                                // @ts-ignore
                                rightLegDirection(): org.spongepowered.api.data.value.immutable.ImmutableValue<Vector3d>
                            }
                        }
                    }
                }
            }
        }
    }
}
