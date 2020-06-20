declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace mutable {
                        /**
                         * Represents a {@link PotionType}s that can be applicable to {@link ItemStack}s such as
                         * {@link ItemTypes#POTION}.
                         */
                        // @ts-ignore
                        interface PotionTypeData extends org.spongepowered.api.data.manipulator.DataManipulator<org.spongepowered.api.data.manipulator.mutable.PotionTypeData, org.spongepowered.api.data.manipulator.immutable.ImmutablePotionTypeData> {
                            /**
                             * Gets the {@link Value} for the potion type.
                             * @return The value for potion type
                             * @see Keys#POTION_TYPE
                             */
                            // @ts-ignore
                            type(): org.spongepowered.api.data.value.mutable.Value<org.spongepowered.api.item.potion.PotionType>
                        }
                    }
                }
            }
        }
    }
}
