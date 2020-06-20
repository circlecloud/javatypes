declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace item {
                namespace inventory {
                    namespace ItemStack {
                        // @ts-ignore
                        interface Builder extends org.spongepowered.api.data.persistence.DataBuilder<org.spongepowered.api.item.inventory.ItemStack> {
                            // @ts-ignore
                            from(value: org.spongepowered.api.item.inventory.ItemStack): org.spongepowered.api.item.inventory.ItemStack.Builder
                            /**
                             * Sets the {@link ItemType} of the item stack.
                             * @param itemType The type of item
                             * @return This builder, for chaining
                             */
                            // @ts-ignore
                            itemType(itemType: org.spongepowered.api.item.ItemType): org.spongepowered.api.item.inventory.ItemStack.Builder
                            // @ts-ignore
                            getCurrentItem(): org.spongepowered.api.item.ItemType
                            /**
                             * Sets the quantity of the item stack.
                             * @param quantity The quantity of the item stack
                             * @return This builder, for chaining
                             * @throws IllegalArgumentException If the quantity is outside the
                             *       allowed bounds
                             */
                            // @ts-ignore
                            quantity(quantity: number /*int*/): org.spongepowered.api.item.inventory.ItemStack.Builder
                            /**
                             * Adds a {@link Key} and related {@link Object} value to apply to the
                             * resulting {@link ItemStack}. Note that the resulting
                             * {@link ItemStack} may not actually accept the provided {@code Key}
                             * for various reasons due to support or simply that the value itself
                             * is not supported. Offering custom data is not supported through this,
                             * use {@link #itemData(DataManipulator)} instead.
                             * @param key The key to identify the value with
                             * @param value The value to apply
                             * @param <E> The type of value
                             * @return This builder, for chaining
                             * @deprecated As of API 7 due to being a duplicate method.
                             *      Accomplishes the same thing as {#link #add(Key, Object)}, so is
                             *      not needed alongside that, expected for removal in API 8 or 9.
                             *      Use {@link #add(Key, Object)} instead
                             */
                            // @ts-ignore
                            keyValue<E>(key: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.BaseValue<E>>, value: E): org.spongepowered.api.item.inventory.ItemStack.Builder
                            /**
                             * Sets the {@link DataManipulator} to add to the {@link ItemStack}.
                             * @param itemData The item data to set
                             * @return This builder, for chaining
                             * @throws IllegalArgumentException If the item data is incompatible
                             *       with the item
                             */
                            // @ts-ignore
                            itemData(itemData: org.spongepowered.api.data.manipulator.DataManipulator<any, ?>): org.spongepowered.api.item.inventory.ItemStack.Builder
                            /**
                             * Sets the {@link ImmutableDataManipulator} to add to the
                             * {@link ItemStack}.
                             * @param itemData The item data to set
                             * @return This builder, for chaining
                             * @throws IllegalArgumentException If the item data is incompatible
                             */
                            // @ts-ignore
                            itemData(itemData: org.spongepowered.api.data.manipulator.ImmutableDataManipulator<any, ?>): org.spongepowered.api.item.inventory.ItemStack.Builder
                            /**
                             * Adds a {@link Key} and related {@link Object} value to apply to the
                             * resulting {@link ItemStack}. Note that the resulting
                             * {@link ItemStack} may not actually accept the provided {@code Key}
                             * for various reasons due to support or simply that the value itself
                             * is not supported. Offering custom data is not supported through this,
                             * use {@link #itemData(DataManipulator)} instead.
                             * @param key The key to assign the value with
                             * @param value The value to assign with the key
                             * @param <V> The type of the value
                             * @return This builder, for chaining
                             * @throws IllegalArgumentException If the item data is incompatible
                             */
                            // @ts-ignore
                            add<V>(key: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.BaseValue<V>>, value: V): org.spongepowered.api.item.inventory.ItemStack.Builder
                            /**
                             * Sets all the settings in this builder from the item stack blueprint.
                             * @param itemStack The item stack to copy
                             * @return This builder, for chaining
                             */
                            // @ts-ignore
                            fromItemStack(itemStack: org.spongepowered.api.item.inventory.ItemStack): org.spongepowered.api.item.inventory.ItemStack.Builder
                            /**
                             * Sets the data to recreate a {@link BlockState} in a held {@link ItemStack}
                             * state.
                             * @param blockState The block state to use
                             * @return This builder, for chaining
                             */
                            // @ts-ignore
                            fromBlockState(blockState: org.spongepowered.api.block.BlockState): org.spongepowered.api.item.inventory.ItemStack.Builder
                            /**
                             * Attempts to reconstruct the builder with all of the data from
                             * {@link ItemStack#toContainer()} including all custom data.
                             * @param container The container to translate
                             * @return This builder, for chaining
                             */
                            // @ts-ignore
                            fromContainer(container: org.spongepowered.api.data.DataView): org.spongepowered.api.item.inventory.ItemStack.Builder
                            /**
                             * Reconstructs this builder to use the {@link ItemStackSnapshot}
                             * for all the values and data it may contain.
                             * @param snapshot The snapshot
                             * @return This builder, for chaining
                             */
                            // @ts-ignore
                            fromSnapshot(snapshot: org.spongepowered.api.item.inventory.ItemStackSnapshot): org.spongepowered.api.item.inventory.ItemStack.Builder
                            /**
                             * Attempts to reconstruct a {@link BlockSnapshot} including all data
                             * and {@link TileEntity} related data if necessary for creating an
                             * {@link ItemStack} representation.
                             * @param blockSnapshot The snapshot to use
                             * @return This builder, for chaining
                             */
                            // @ts-ignore
                            fromBlockSnapshot(blockSnapshot: org.spongepowered.api.block.BlockSnapshot): org.spongepowered.api.item.inventory.ItemStack.Builder
                            // @ts-ignore
                            remove(manipulatorClass: java.lang.Class<org.spongepowered.api.data.manipulator.DataManipulator<any, ?>>): org.spongepowered.api.item.inventory.ItemStack.Builder
                            // @ts-ignore
                            apply(predicate: java.util.function.Predicate<org.spongepowered.api.item.inventory.ItemStack.Builder> | java.util.function$.Predicate<org.spongepowered.api.item.inventory.ItemStack.Builder>, consumer: java.util.function.Consumer<org.spongepowered.api.item.inventory.ItemStack.Builder> | java.util.function$.Consumer<org.spongepowered.api.item.inventory.ItemStack.Builder>): org.spongepowered.api.item.inventory.ItemStack.Builder
                            /**
                             * Builds an instance of an ItemStack.
                             * @return A new instance of an ItemStack
                             * @throws IllegalStateException If the item stack is not completed
                             */
                            // @ts-ignore
                            build(): org.spongepowered.api.item.inventory.ItemStack
                        }
                    }
                }
            }
        }
    }
}
