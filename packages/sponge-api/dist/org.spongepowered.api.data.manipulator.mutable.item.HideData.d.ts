declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace mutable {
                        namespace item {
                            /**
                             * An {@link DataManipulator} handling the hidden state of various pieces of information
                             * attached to an {@link ItemStack}.
                             */
                            // @ts-ignore
                            interface HideData extends org.spongepowered.api.data.manipulator.DataManipulator<org.spongepowered.api.data.manipulator.mutable.item.HideData, org.spongepowered.api.data.manipulator.immutable.item.ImmutableHideData> {
                                /**
                                 * Gets the {@link Value} for the "enchantments hidden" state of an itemstack.
                                 * @return The value for the enchantments hidden state
                                 * @see Keys#HIDE_ENCHANTMENTS
                                 */
                                // @ts-ignore
                                hideEnchantments(): org.spongepowered.api.data.value.mutable.Value<java.lang.Boolean>
                                /**
                                 * Gets the {@link Value} for the "attributes hidden" state of an itemstack.
                                 * @return The value for the attributes hidden state
                                 * @see Keys#HIDE_ATTRIBUTES
                                 */
                                // @ts-ignore
                                hideAttributes(): org.spongepowered.api.data.value.mutable.Value<java.lang.Boolean>
                                /**
                                 * Gets the {@link Value} for the "unbreakable hidden" state of an itemstack.
                                 * @return The value for the unbreakable hidden state
                                 * @see Keys#HIDE_UNBREAKABLE
                                 */
                                // @ts-ignore
                                hideUnbreakable(): org.spongepowered.api.data.value.mutable.Value<java.lang.Boolean>
                                /**
                                 * Gets the {@link Value} for the "can destroy hidden" state of an itemstack.
                                 * @return The value for the can destroy hidden state
                                 * @see Keys#HIDE_CAN_DESTROY
                                 */
                                // @ts-ignore
                                hideCanDestroy(): org.spongepowered.api.data.value.mutable.Value<java.lang.Boolean>
                                /**
                                 * Gets the {@link Value} for the "can place hidden" state of an itemstack.
                                 * @return The value for the can place hidden state
                                 * @see Keys#HIDE_CAN_PLACE
                                 */
                                // @ts-ignore
                                hideCanPlace(): org.spongepowered.api.data.value.mutable.Value<java.lang.Boolean>
                                /**
                                 * Gets the {@link Value} for the "miscellaneous hidden" state of an itemstack.
                                 * @return The value for the miscellaneous hidden state
                                 * @see Keys#HIDE_MISCELLANEOUS
                                 */
                                // @ts-ignore
                                hideMiscellaneous(): org.spongepowered.api.data.value.mutable.Value<java.lang.Boolean>
                            }
                        }
                    }
                }
            }
        }
    }
}
