declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace mutable {
                        namespace item {
                            /**
                             * A type of {@link VariantData} handling the {@link Fish} of an
                             * {@link ItemStack} of the {@link ItemTypes#FISH}.
                             * <p>Since different types of fish have different properties, it is
                             * recommended to further check the specific item properties associated with
                             * the fish type from the item stack after changing this data.</p>
                             * @see Keys#FISH_TYPE
                             */
                            // @ts-ignore
                            interface FishData extends org.spongepowered.api.data.manipulator.mutable.VariantData<org.spongepowered.api.data.type.Fish, org.spongepowered.api.data.manipulator.mutable.item.FishData, org.spongepowered.api.data.manipulator.immutable.item.ImmutableFishData> {
                            }
                        }
                    }
                }
            }
        }
    }
}
