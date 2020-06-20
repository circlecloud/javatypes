declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace immutable {
                        /**
                         * An {@link ImmutableDataManipulator} that handles the {@link PotionType}s that can be applicable to
                         * {@link ItemStack}s such as {@link ItemTypes#POTION}.
                         */
                        // @ts-ignore
                        interface ImmutablePotionTypeData extends org.spongepowered.api.data.manipulator.ImmutableDataManipulator<org.spongepowered.api.data.manipulator.immutable.ImmutablePotionTypeData, org.spongepowered.api.data.manipulator.mutable.PotionTypeData> {
                            /**
                             * Gets the {@link ImmutableValue} of the {@link PotionType}.
                             * @return The immutable value for the potion type
                             */
                            // @ts-ignore
                            type(): org.spongepowered.api.data.value.immutable.ImmutableValue<org.spongepowered.api.item.potion.PotionType>
                        }
                    }
                }
            }
        }
    }
}
