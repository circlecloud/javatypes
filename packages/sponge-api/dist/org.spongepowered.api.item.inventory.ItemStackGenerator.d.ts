declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace item {
                namespace inventory {
                    /**
                     * A simple generator that takes a {@link Random} and generates
                     * an {@link ItemStack}.
                     */
                    // @ts-ignore
                    interface ItemStackGenerator extends java.util.function.Function<java.util.Random, org.spongepowered.api.item.inventory.ItemStack> {
                        /**
                         * Creates a new builder to build an {@link ItemStackGenerator}.
                         * @return The builder to create an itemstack generator
                         */
                        // @ts-ignore
                        builder(): org.spongepowered.api.item.inventory.ItemStackGenerator.Builder
                    }
                }
            }
        }
    }
}
