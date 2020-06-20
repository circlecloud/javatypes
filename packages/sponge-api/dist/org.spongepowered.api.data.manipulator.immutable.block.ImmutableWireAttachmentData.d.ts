declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace immutable {
                        namespace block {
                            /**
                             * An {@link ImmutableDataManipulator} that handles the
                             * {@link ImmutableMapValue} of {@link Direction} to {@link WireAttachmentType}
                             * for a {@link BlockState}. Usually applicable to
                             * {@link BlockTypes#REDSTONE_WIRE} and {@link BlockTypes#TRIPWIRE}.
                             */
                            // @ts-ignore
                            interface ImmutableWireAttachmentData extends org.spongepowered.api.data.manipulator.ImmutableDataManipulator<org.spongepowered.api.data.manipulator.immutable.block.ImmutableWireAttachmentData, org.spongepowered.api.data.manipulator.mutable.block.WireAttachmentData> {
                                /**
                                 * Gets the current {@link ImmutableMapValue} for the available
                                 * {@link Direction}s and associated{@link WireAttachmentType}s.
                                 * @return The immutable map value for the directions and their associated
                                 *      wire attachment types
                                 */
                                // @ts-ignore
                                wireAttachments(): org.spongepowered.api.data.value.immutable.ImmutableMapValue<org.spongepowered.api.util.Direction, org.spongepowered.api.data.type.WireAttachmentType>
                                /**
                                 * Gets the {@link ImmutableValue} for the {@link Direction#NORTH}'s
                                 * {@link WireAttachmentType}.
                                 * @return The value for the northern wire attachment type
                                 */
                                // @ts-ignore
                                wireAttachmentNorth(): org.spongepowered.api.data.value.immutable.ImmutableValue<org.spongepowered.api.data.type.WireAttachmentType>
                                /**
                                 * Gets the {@link ImmutableValue} for the {@link Direction#SOUTH}'s
                                 * {@link WireAttachmentType}.
                                 * @return The value for the southern wire attachment type
                                 */
                                // @ts-ignore
                                wireAttachmentSouth(): org.spongepowered.api.data.value.immutable.ImmutableValue<org.spongepowered.api.data.type.WireAttachmentType>
                                /**
                                 * Gets the {@link ImmutableValue} for the {@link Direction#EAST}'s
                                 * {@link WireAttachmentType}.
                                 * @return The value for the eastern wire attachment type
                                 */
                                // @ts-ignore
                                wireAttachmentEast(): org.spongepowered.api.data.value.immutable.ImmutableValue<org.spongepowered.api.data.type.WireAttachmentType>
                                /**
                                 * Gets the {@link ImmutableValue} for the {@link Direction#WEST}'s
                                 * {@link WireAttachmentType}.
                                 * @return The value for the western wire attachment type
                                 */
                                // @ts-ignore
                                wireAttachmentWest(): org.spongepowered.api.data.value.immutable.ImmutableValue<org.spongepowered.api.data.type.WireAttachmentType>
                            }
                        }
                    }
                }
            }
        }
    }
}
