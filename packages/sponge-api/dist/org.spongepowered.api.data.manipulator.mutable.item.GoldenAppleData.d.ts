declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace mutable {
                        namespace item {
                            /**
                             * Represents the type of {@link GoldenApple} the golden apple item is.
                             * <p>Since different types of golden apples have different properties, it is
                             * recommended to further check the specific item properties associated with
                             * the golden apple type from the item stack after changing this data.</p>
                             * @see Keys#GOLDEN_APPLE_TYPE
                             */
                            // @ts-ignore
                            interface GoldenAppleData extends org.spongepowered.api.data.manipulator.mutable.VariantData<org.spongepowered.api.data.type.GoldenApple, org.spongepowered.api.data.manipulator.mutable.item.GoldenAppleData, org.spongepowered.api.data.manipulator.immutable.item.ImmutableGoldenAppleData> {
                            }
                        }
                    }
                }
            }
        }
    }
}
