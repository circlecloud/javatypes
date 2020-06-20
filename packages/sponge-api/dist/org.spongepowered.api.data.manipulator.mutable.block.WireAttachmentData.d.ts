declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace mutable {
                        namespace block {
                            /**
                             * Represents the {@link WireAttachmentType}s for the four cardinal directions of a
                             * piece of {@link BlockTypes#REDSTONE_WIRE}.
                             */
                            // @ts-ignore
                            interface WireAttachmentData extends org.spongepowered.api.data.manipulator.DataManipulator<org.spongepowered.api.data.manipulator.mutable.block.WireAttachmentData, org.spongepowered.api.data.manipulator.immutable.block.ImmutableWireAttachmentData> {
                                /**
                                 * Gets the current {@link MapValue} for the available {@link Direction}s
                                 * and associated{@link WireAttachmentType}s.
                                 * @return The map value for the directions and their associated
                                 *      wire attachment types
                                 * @see Keys#WIRE_ATTACHMENTS
                                 */
                                // @ts-ignore
                                wireAttachments(): org.spongepowered.api.data.value.mutable.MapValue<org.spongepowered.api.util.Direction, org.spongepowered.api.data.type.WireAttachmentType>
                                /**
                                 * Gets the {@link Value} for the {@link Direction#NORTH}'s
                                 * {@link WireAttachmentType}.
                                 * @return The value for the northern wire attachment type
                                 * @see Keys#WIRE_ATTACHMENT_NORTH
                                 */
                                // @ts-ignore
                                wireAttachmentNorth(): org.spongepowered.api.data.value.mutable.Value<org.spongepowered.api.data.type.WireAttachmentType>
                                /**
                                 * Gets the {@link Value} for the {@link Direction#SOUTH}'s
                                 * {@link WireAttachmentType}.
                                 * @return The value for the southern wire attachment type
                                 * @see Keys#WIRE_ATTACHMENT_SOUTH
                                 */
                                // @ts-ignore
                                wireAttachmentSouth(): org.spongepowered.api.data.value.mutable.Value<org.spongepowered.api.data.type.WireAttachmentType>
                                /**
                                 * Gets the {@link Value} for the {@link Direction#EAST}'s
                                 * {@link WireAttachmentType}.
                                 * @return The value for the eastern wire attachment type
                                 * @see Keys#WIRE_ATTACHMENT_EAST
                                 */
                                // @ts-ignore
                                wireAttachmentEast(): org.spongepowered.api.data.value.mutable.Value<org.spongepowered.api.data.type.WireAttachmentType>
                                /**
                                 * Gets the {@link Value} for the {@link Direction#WEST}'s
                                 * {@link WireAttachmentType}.
                                 * @return The value for the western wire attachment type
                                 * @see Keys#WIRE_ATTACHMENT_WEST
                                 */
                                // @ts-ignore
                                wireAttachmentWest(): org.spongepowered.api.data.value.mutable.Value<org.spongepowered.api.data.type.WireAttachmentType>
                            }
                        }
                    }
                }
            }
        }
    }
}
