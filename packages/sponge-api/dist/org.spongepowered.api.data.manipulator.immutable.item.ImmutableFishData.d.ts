declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace immutable {
                        namespace item {
                            /**
                             * A type of {@link ImmutableVariantData} handling the {@link Fish} of an
                             * {@link ItemStack} of the {@link ItemTypes#FISH}.
                             * <p>Since different types of fish have different properties, it is
                             * recommended to further check the specific item properties associated with
                             * the fish type from the item stack after changing this data.</p>
                             */
                            // @ts-ignore
                            interface ImmutableFishData extends org.spongepowered.api.data.manipulator.immutable.ImmutableVariantData<org.spongepowered.api.data.type.Fish, org.spongepowered.api.data.manipulator.immutable.item.ImmutableFishData, org.spongepowered.api.data.manipulator.mutable.item.FishData> {
                            }
                        }
                    }
                }
            }
        }
    }
}
