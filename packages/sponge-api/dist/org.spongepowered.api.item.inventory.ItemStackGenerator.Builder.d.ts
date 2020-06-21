declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace item {
                namespace inventory {
                    namespace ItemStackGenerator {
                        /**
                         * A builder to add various {@link BiConsumer}s that will be applied in order
                         * to an {@link ItemStackGenerator}. Normally, most all biconsumers can be
                         * created from {@link ItemStackBuilderPopulators}.
                         */
                        // @ts-ignore
                        interface Builder extends org.spongepowered.api.util.ResettableBuilder<org.spongepowered.api.item.inventory.ItemStackGenerator, org.spongepowered.api.item.inventory.ItemStackGenerator.Builder> {
                            /**
                             * Adds a new biconsumer in the current order.
                             * @param consumer The consumer that mutates an itemstack builder
                             * @return This builder, for chaining
                             */
                            // @ts-ignore
                            add(consumer: java.util.function$.BiConsumer<org.spongepowered.api.item.inventory.ItemStack.Builder, java.util.Random>): org.spongepowered.api.item.inventory.ItemStackGenerator.Builder
                            /**
                             * Adds all the provided biconsumers from the provided collection.
                             * @param collection The collection of consumer to add
                             * @return This builder, for chaining
                             */
                            // @ts-ignore
                            addAll(collection: java.util.Collection<java.util.function$.BiConsumer<org.spongepowered.api.item.inventory.ItemStack.Builder, java.util.Random>> | Array<java.util.function$$.BiConsumer<org.spongepowered.api.item.inventory.ItemStack.Builder, java.util.Random>>): org.spongepowered.api.item.inventory.ItemStackGenerator.Builder
                            /**
                             * Sets the base {@link ItemType} for the {@link ItemStackGenerator}. A
                             * base type must be set to avoid issues.
                             * @param itemType The base item type
                             * @return This builder, for chaining
                             */
                            // @ts-ignore
                            baseItem(itemType: org.spongepowered.api.item.ItemType): org.spongepowered.api.item.inventory.ItemStackGenerator.Builder
                            /**
                             * Creates a new {@link ItemStackGenerator} with all of the added
                             * {@link BiConsumer}s.
                             * @return The newly created itemstack generator
                             */
                            // @ts-ignore
                            build(): org.spongepowered.api.item.inventory.ItemStackGenerator
                        }
                    }
                }
            }
        }
    }
}
