declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace immutable {
                        namespace item {
                            /**
                             * A type of {@link ImmutableVariantData} handling the {@link CookedFish} of an
                             * {@link ItemStack} of the {@link ItemTypes#COOKED_FISH}.
                             * <p>Since different types of fish have different properties, it is
                             * recommended to further check the specific item properties associated with
                             * the fish type from the item stack after changing this data.</p>
                             */
                            // @ts-ignore
                            interface ImmutableCookedFishData extends org.spongepowered.api.data.manipulator.immutable.ImmutableVariantData<org.spongepowered.api.data.type.CookedFish, org.spongepowered.api.data.manipulator.immutable.item.ImmutableCookedFishData, org.spongepowered.api.data.manipulator.mutable.item.CookedFishData> {
                            }
                        }
                    }
                }
            }
        }
    }
}
