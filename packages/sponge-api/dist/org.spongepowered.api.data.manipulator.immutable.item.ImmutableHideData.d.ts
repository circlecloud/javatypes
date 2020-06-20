declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace immutable {
                        namespace item {
                            /**
                             * An {@link ImmutableDataManipulator} handling the hidden state of various pieces of information
                             * attached to an {@link ItemStack}.
                             */
                            // @ts-ignore
                            interface ImmutableHideData extends org.spongepowered.api.data.manipulator.ImmutableDataManipulator<org.spongepowered.api.data.manipulator.immutable.item.ImmutableHideData, org.spongepowered.api.data.manipulator.mutable.item.HideData> {
                                /**
                                 * Gets the {@link ImmutableValue} for the "enchantments hidden" state of an itemstack.
                                 * @return The immutable value for the enchantments hidden state
                                 */
                                // @ts-ignore
                                hideEnchantments(): org.spongepowered.api.data.value.immutable.ImmutableValue<java.lang.Boolean>
                                /**
                                 * Gets the {@link ImmutableValue} for the "attributes hidden" state of an itemstack.
                                 * @return The immutable value for the attributes hidden state
                                 */
                                // @ts-ignore
                                hideAttributes(): org.spongepowered.api.data.value.immutable.ImmutableValue<java.lang.Boolean>
                                /**
                                 * Gets the {@link ImmutableValue} for the "unbreakable hidden" state of an itemstack.
                                 * @return The immutable value for the unbreakable hidden state
                                 */
                                // @ts-ignore
                                hideUnbreakable(): org.spongepowered.api.data.value.immutable.ImmutableValue<java.lang.Boolean>
                                /**
                                 * Gets the {@link ImmutableValue} for the "can destroy hidden" state of an itemstack.
                                 * @return The immutable value for the can destroy hidden state
                                 */
                                // @ts-ignore
                                hideCanDestroy(): org.spongepowered.api.data.value.immutable.ImmutableValue<java.lang.Boolean>
                                /**
                                 * Gets the {@link ImmutableValue} for the "can destroy hidden" state of an itemstack.
                                 * @return The immutable value for the can place hidden state
                                 */
                                // @ts-ignore
                                hideCanPlace(): org.spongepowered.api.data.value.immutable.ImmutableValue<java.lang.Boolean>
                                /**
                                 * Gets the {@link ImmutableValue} for the "miscellaneous hidden" state of an itemstack.
                                 * @return The immutable value for the miscellaneous hidden state
                                 */
                                // @ts-ignore
                                hideMiscellaneous(): org.spongepowered.api.data.value.immutable.ImmutableValue<java.lang.Boolean>
                            }
                        }
                    }
                }
            }
        }
    }
}
