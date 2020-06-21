declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace item {
                namespace inventory {
                    /**
                     * A factory for generating {@link BiConsumer}s to apply to an
                     * {@link ItemStack.Builder}, usually through an {@link ItemStackGenerator}.
                     * <p>Note that the {@link BiConsumer}s are expected to utilize the passed in
                     * {@link Random} and use the builder as necessary.</p>
                     */
                    // @ts-ignore
                    class ItemStackBuilderPopulators extends java.lang.Object {
                        /**
                         * Creates a new {@link BiConsumer} to set the {@link ItemStack.Builder}
                         * to use the provided {@link ItemStackSnapshot} as a "default". Note
                         * that the normal behavior of the builder is to reset according to
                         * the snapshot.
                         * @param snapshot The snapshot to set the builder to use
                         * @return The new biconsumer to apply to an itemstack builder
                         */
                        // @ts-ignore
                        public static itemStack(snapshot: org.spongepowered.api.item.inventory.ItemStackSnapshot): java.util.function$.BiConsumer<org.spongepowered.api.item.inventory.ItemStack.Builder, java.util.Random>
                        /**
                         * Creates a new {@link BiConsumer} that uses a randomized selection
                         * of the provided {@link ItemStackSnapshot}s. The builder, when called will
                         * only use one at random selection to default to.
                         * @param snapshot The first snapshot
                         * @param snapshots The additional snapshots
                         * @return The new biconsumer to apply to an itemstack builder
                         */
                        // @ts-ignore
                        public static itemStacks(snapshot: org.spongepowered.api.item.inventory.ItemStackSnapshot, ...snapshots: org.spongepowered.api.item.inventory.ItemStackSnapshot[]): java.util.function$.BiConsumer<org.spongepowered.api.item.inventory.ItemStack.Builder, java.util.Random>
                        /**
                         * Creates a new {@link BiConsumer} that defines the provided
                         * {@link ItemType}.
                         * @param itemType The given item type
                         * @return The new biconsumer to apply to an itemstack builder
                         */
                        // @ts-ignore
                        public static item(itemType: org.spongepowered.api.item.ItemType): java.util.function$.BiConsumer<org.spongepowered.api.item.inventory.ItemStack.Builder, java.util.Random>
                        /**
                         * Creates a new {@link BiConsumer} that defines the provided
                         * {@link ItemType}, provided that the {@link Supplier} does not
                         * return null.
                         * <p>Note that the {@link Supplier} is not queried for an
                         * {@link ItemType} until the generated {@link BiConsumer} is
                         * called.</p>
                         * @param supplier The supplier of the item type
                         * @return The new biconsumer to apply to an itemstack builder
                         */
                        // @ts-ignore
                        public static item(supplier: java.util.function$.Supplier<org.spongepowered.api.item.ItemType>): java.util.function$.BiConsumer<org.spongepowered.api.item.inventory.ItemStack.Builder, java.util.Random>
                        /**
                         * Creates a new {@link BiConsumer} that provides a random
                         * {@link ItemType} of the provided item types.
                         * <p>Note that the desired {@link ItemType} given to the builder is only
                         * defined at the time of calling {@link BiConsumer#accept(Object, Object)}.
                         * </p>
                         * @param itemType The first item type
                         * @param itemTypes The additional item types
                         * @return The new biconsumer to apply to an item stack builder
                         */
                        // @ts-ignore
                        public static items(itemType: org.spongepowered.api.item.ItemType, ...itemTypes: org.spongepowered.api.item.ItemType[]): java.util.function$.BiConsumer<org.spongepowered.api.item.inventory.ItemStack.Builder, java.util.Random>
                        /**
                         * Creates a new {@link BiConsumer} that provides a random
                         * {@link ItemType} from the provided collection of item types.
                         * @param itemTypes The item types to use
                         * @return The new biconsumer to apply to an itemstack builder
                         */
                        // @ts-ignore
                        public static items(itemTypes: java.util.Collection<org.spongepowered.api.item.ItemType> | Array<org.spongepowered.api.item.ItemType>): java.util.function$.BiConsumer<org.spongepowered.api.item.inventory.ItemStack.Builder, java.util.Random>
                        /**
                         * Creates a new {@link BiConsumer} that sets the desired quantity
                         * for creating an {@link ItemStack}.
                         * <p>Note that the default behavior of the item stack builder is still
                         * expected to take place. Negative values are not allowed.</p>
                         * @param amount The variable amount
                         * @return The new biconsumer to apply to an itemstack builder
                         */
                        // @ts-ignore
                        public static quantity(amount: org.spongepowered.api.util.weighted.VariableAmount): java.util.function$.BiConsumer<org.spongepowered.api.item.inventory.ItemStack.Builder, java.util.Random>
                        /**
                         * Creates a new {@link BiConsumer} that sets the desired quantity
                         * for creating an {@link ItemStack}. The supplier is not queried for
                         * a {@link VariableAmount} until the generated bi consumer is
                         * called on.
                         * <p>Note that the default behavior of an item stack builder is still
                         * expected to take place. Negative values are not allowed.</p>
                         * @param supplier The supplier of the variable amount
                         * @return The new biconsumer to apply to an itemstack builder
                         */
                        // @ts-ignore
                        public static quantity(supplier: java.util.function$.Supplier<org.spongepowered.api.util.weighted.VariableAmount>): java.util.function$.BiConsumer<org.spongepowered.api.item.inventory.ItemStack.Builder, java.util.Random>
                        /**
                         * Creates a new {@link BiConsumer} that sets the provided {@link Key}'ed
                         * object where the value is possibly ignored or not supported. No checks
                         * on whether the key or object is supported until called upon.
                         * <p>Note that custom data is not supported through this method, use
                         * {@link #data(Collection)} or any variant thereof for applying custom data.</p>
                         * @param key The key to use
                         * @param value The value to use
                         * @param <E> The type of value
                         * @return The new biconsumer to apply to an itemstack builder
                         */
                        // @ts-ignore
                        public static keyValue<E>(key: org.spongepowered.api.data.key.Key<any>, value: E): java.util.function$.BiConsumer<org.spongepowered.api.item.inventory.ItemStack.Builder, java.util.Random>
                        /**
                         * Creates a new {@link BiConsumer} that sets a single provided
                         * value with the provided {@link Key}. Only a single value is chosen
                         * to provide to the itemstack builder.
                         * <p>Note that custom data is not supported through this method, use
                         * {@link #data(Collection)} or any variant thereof for applying custom data.</p>
                         * @param key The key to use
                         * @param values The pool of possible values
                         * @param <E> The type of value
                         * @return The new biconsumer to apply to an itemstack builder
                         */
                        // @ts-ignore
                        public static keyValues<E>(key: org.spongepowered.api.data.key.Key<any>, values: java.lang.Iterable<E>): java.util.function$.BiConsumer<org.spongepowered.api.item.inventory.ItemStack.Builder, java.util.Random>
                        /**
                         * Creates a new {@link BiConsumer} where the {@link Key} is responsible
                         * for a {@link List} based {@link Value}. Given that the provided elements
                         * are chosen with a {@link Random}, it's not clear that the elements will
                         * be added in bundles or in the same iteration order.
                         * <p>Note that custom data is not supported through this method, use
                         * {@link #data(Collection)} or any variant thereof for applying custom data.</p>
                         * @param key The key to use
                         * @param elementPool The pool of possible values
                         * @param amount The variable amount of elements to add
                         * @param <E> The type of elements
                         * @return The new biconsumer to apply to an itemstack builder
                         */
                        // @ts-ignore
                        public static listValues<E>(key: org.spongepowered.api.data.key.Key<any>, elementPool: java.util.List<E> | Array<E>, amount: org.spongepowered.api.util.weighted.VariableAmount): java.util.function$.BiConsumer<org.spongepowered.api.item.inventory.ItemStack.Builder, java.util.Random>
                        /**
                         * Creates a new {@link BiConsumer} where the {@link Key} is responsible
                         * for a {@link List} based {@link Value}. Given that the provided elements
                         * are chosen with a {@link Random}, it's not clear that the elements will
                         * be added in bundles or in the same iteration order. The default variance
                         * is provided as {@link VariableAmount#baseWithRandomAddition(double, double)}
                         * where at the least, a single element is chosen, and at most the entire
                         * collection is chosen.
                         * <p>Note that custom data is not supported through this method, use
                         * {@link #data(Collection)} or any variant thereof for applying custom data.</p>
                         * @param key The key to use
                         * @param elementPool The pool of possible values
                         * @param <E> The type of elements
                         * @return The new biconsumer to apply to an itemstack builder
                         */
                        // @ts-ignore
                        public static listValues<E>(key: org.spongepowered.api.data.key.Key<any>, elementPool: java.util.List<E> | Array<E>): java.util.function$.BiConsumer<org.spongepowered.api.item.inventory.ItemStack.Builder, java.util.Random>
                        /**
                         * Creates a new {@link BiConsumer} where the {@link Key} is responsible
                         * for a {@link List} based {@link Value}. Given the {@link WeightedTable}
                         * is already generated, the values requested are only retrieved when
                         * the generated biconsumer is called upon.
                         * <p>Note that custom data is not supported through this method, use
                         * {@link #data(Collection)} or any variant thereof for applying custom data.</p>
                         * @param key The key to use
                         * @param weightedTable The weighted table
                         * @param <E> The type of elements
                         * @return The new biconsumer to apply to an itemstack builder
                         */
                        // @ts-ignore
                        public static listValues<E>(key: org.spongepowered.api.data.key.Key<any>, weightedTable: org.spongepowered.api.util.weighted.WeightedTable<E>): java.util.function$.BiConsumer<org.spongepowered.api.item.inventory.ItemStack.Builder, java.util.Random>
                        /**
                         * Creates a new {@link BiConsumer} where the {@link Key} is responsible
                         * for a {@link List} based {@link Value}. Given the
                         * {@link WeightedTable} is exclusively used with {@link Function}s,
                         * the {@link Function}s themselves are queried with a {@link Random}
                         * and expected to present a singular element of the defined type. It's
                         * expected that there are multiple functions to provide additional
                         * elements for a particular key'ed {@link ListValue}.
                         * <p>An example usage of this can be for generating a randomized list
                         * of {@link Enchantment}s with varying enchantment levels.</p>
                         * <p>Note that custom data is not supported through this method, use
                         * {@link #data(Collection)} or any variant thereof for applying custom data.</p>
                         * @param key The key to use
                         * @param weightedTable The weighted table containing all the desired
                         *      functions producing the randomized elements
                         * @param <E> The type of element
                         * @return The new biconsumer to apply to an itemstack builder
                         */
                        // @ts-ignore
                        public static listValueSuppliers<E>(key: org.spongepowered.api.data.key.Key<any>, weightedTable: org.spongepowered.api.util.weighted.WeightedTable<java.util.function$.Function<java.util.Random, E>> | org.spongepowered.api.util.weighted.WeightedTable<java.util.function$$.Function<java.util.Random, E>>): java.util.function$.BiConsumer<org.spongepowered.api.item.inventory.ItemStack.Builder, java.util.Random>
                        /**
                         * Creates a new {@link BiConsumer} where the {@link Key} is responsible
                         * for a {@link Set} based {@link Value}. Given the {@link Set} of element
                         * to act as a pool, the consumer will pull a random amount of the
                         * given pool and apply it as a new {@link Set}.
                         * <p>Note that custom data is not supported through this method, use
                         * {@link #data(Collection)} or any variant thereof for applying custom data.</p>
                         * @param key The key to use
                         * @param elementPool The set of elements to use as a pool
                         * @param <E> The type of element
                         * @return The new biconsumer to apply to an itemstack builder
                         */
                        // @ts-ignore
                        public static setValues<E>(key: org.spongepowered.api.data.key.Key<any>, elementPool: java.util.Set<E> | Array<E>): java.util.function$.BiConsumer<org.spongepowered.api.item.inventory.ItemStack.Builder, java.util.Random>
                        /**
                         * Creates a new {@link BiConsumer} where the {@link Key} is responsible
                         * for a {@link Set} based {@link Value}. Given the {@link Set} of
                         * elements to act as a pool, the consumer will pull a variable amount
                         * based on the provided {@link VariableAmount}, and apply it as a new
                         * {@link Set}.
                         * <p>Note that custom data is not supported through this method, use
                         * {@link #data(Collection)} or any variant thereof for applying custom data.</p>
                         * @param key The key to use
                         * @param elementPool The set of elements to use as a pool
                         * @param amount The variable amount of elements to get
                         * @param <E> The type of element
                         * @return The new biconsumer to apply to an itemstack builder
                         */
                        // @ts-ignore
                        public static setValues<E>(key: org.spongepowered.api.data.key.Key<any>, elementPool: java.util.Set<E> | Array<E>, amount: org.spongepowered.api.util.weighted.VariableAmount): java.util.function$.BiConsumer<org.spongepowered.api.item.inventory.ItemStack.Builder, java.util.Random>
                        /**
                         * Creates a new {@link BiConsumer} where the {@link Key} is
                         * responsible for a {@link Set} based {@link Value}. Given
                         * the provided {@link WeightedTable}, the consumer will retrieve
                         * a {@link List} of values and add them as a new {@link Set}.
                         * <p>Note that custom data is not supported through this method, use
                         * {@link #data(Collection)} or any variant thereof for applying custom data.</p>
                         * @param key The key to use
                         * @param weightedTable The weighted table acting as an element pool
                         * @param <E> The type of element
                         * @return The new biconsumer to apply to an itemstack builder
                         */
                        // @ts-ignore
                        public static setValues<E>(key: org.spongepowered.api.data.key.Key<any>, weightedTable: org.spongepowered.api.util.weighted.WeightedTable<E>): java.util.function$.BiConsumer<org.spongepowered.api.item.inventory.ItemStack.Builder, java.util.Random>
                        /**
                         * Creates a new {@link BiConsumer} that applies the provided {@link Value}
                         * to the generated {@link ItemStack}.
                         * <p>Note that custom data is not supported through this method, use
                         * {@link #data(Collection)} or any variant thereof for applying custom data.</p>
                         * @param value The value to use
                         * @param <E> The type of element
                         * @param <V> The type of value
                         * @return The new biconsumer to apply to an itemstack builder
                         */
                        // @ts-ignore
                        public static value<E, V extends org.spongepowered.api.data.value.BaseValue<E>>(value: V): java.util.function$.BiConsumer<org.spongepowered.api.item.inventory.ItemStack.Builder, java.util.Random>
                        /**
                         * Creates a new {@link BiConsumer} that applies a random selection of the
                         * provided {@link BaseValue}s.
                         * <p>Note that custom data is not supported through this method, use
                         * {@link #data(Collection)} or any variant thereof for applying custom data.</p>
                         * @param values The iterable collection of values to choose from
                         * @param <E> The type of element
                         * @param <V> The type of value
                         * @return The new biconsumer to apply to an itemstack builder
                         */
                        // @ts-ignore
                        public static values<E, V extends org.spongepowered.api.data.value.BaseValue<E>>(values: java.lang.Iterable<V>): java.util.function$.BiConsumer<org.spongepowered.api.item.inventory.ItemStack.Builder, java.util.Random>
                        /**
                         * Creates a new {@link BiConsumer} that sets a particular
                         * {@link DataManipulator} onto an {@link ItemStack}. Note
                         * that no validation can be performed, however the builder
                         * will ignore unsupported data. This can be used to provide
                         * custom data manipulators.
                         * @param manipulator The manipulator to apply to an itemstack
                         * @return The new biconsumer to apply to an itemstack builder
                         */
                        // @ts-ignore
                        public static data(manipulator: org.spongepowered.api.data.manipulator.DataManipulator<any, any>): java.util.function$.BiConsumer<org.spongepowered.api.item.inventory.ItemStack.Builder, java.util.Random>
                        /**
                         * Creates a new {@link BiConsumer} that sets a single
                         * {@link DataManipulator} form the provided collection of manipulators.
                         * Note that no validation can be performed, however the builder will
                         * ignore unsupported data. This can be used to provide custom data
                         * manipulators. To apply multiple manipulators, use
                         * {@link #data(Collection, VariableAmount)}.
                         * @param manipulators The pool of manipulators to use
                         * @return The new biconsumer to apply to an itemstack builder
                         */
                        // @ts-ignore
                        public static data(manipulators: java.util.Collection<org.spongepowered.api.data.manipulator.DataManipulator<any, any>> | Array<org.spongepowered.api.data.manipulator.DataManipulator<any, any>>): java.util.function$.BiConsumer<org.spongepowered.api.item.inventory.ItemStack.Builder, java.util.Random>
                        /**
                         * Creates a new {@link BiConsumer} that provides a {@link VariableAmount}
                         * of {@link DataManipulator}s from the provided pool. Note that no
                         * validation can be performed, however the builder will ignore unsupported
                         * data. This can be used to provide custom data manipulators.
                         * @param manipulators The manipulator pool to use
                         * @param rolls The variable amount of manipulators to apply
                         * @return The new biconsumer to apply to an itemstack builder
                         */
                        // @ts-ignore
                        public static data(manipulators: java.util.Collection<org.spongepowered.api.data.manipulator.DataManipulator<any, any>> | Array<org.spongepowered.api.data.manipulator.DataManipulator<any, any>>, rolls: org.spongepowered.api.util.weighted.VariableAmount): java.util.function$.BiConsumer<org.spongepowered.api.item.inventory.ItemStack.Builder, java.util.Random>
                        /**
                         * Creates a new {@link BiConsumer} that provides a variable
                         * amount of {@link DataManipulator}s from the provided
                         * {@link WeightedTable}. Note that no validation can be performed, however
                         * the builder will ignore unsupported data. This can be used to provide
                         * custom data manipulators.
                         * @param weightedTable The weighted table containing manipulators
                         * @return The new biconsumer to apply to an itemstack builder
                         */
                        // @ts-ignore
                        public static data(weightedTable: org.spongepowered.api.util.weighted.WeightedTable<org.spongepowered.api.data.manipulator.DataManipulator<any, any>>): java.util.function$.BiConsumer<org.spongepowered.api.item.inventory.ItemStack.Builder, java.util.Random>
                        /**
                         * Creates a new {@link BiConsumer} that takes the provided
                         * {@link EnchantmentType} and applies it to the generated {@link ItemStack}.
                         * The enchantmentType level is varied based on vanilla mechanics.
                         * @param enchantmentType The singular enchantmentType to add
                         * @return The new biconsumer to apply to an itemstack builder
                         */
                        // @ts-ignore
                        public static enchantment(enchantmentType: org.spongepowered.api.item.enchantment.EnchantmentType): java.util.function$.BiConsumer<org.spongepowered.api.item.inventory.ItemStack.Builder, java.util.Random>
                        /**
                         * Creates a new {@link BiConsumer} that takes the provided
                         * {@link EnchantmentType} and applies it to the generated {@link ItemStack}.
                         * The enchantmentType level is defined by the variable amount provided.
                         * @param level The variance in enchantmentType level
                         * @param enchantmentType The enchantmentType to add
                         * @return The new biconsumer to apply to an itemstack builder
                         */
                        // @ts-ignore
                        public static enchantment(level: org.spongepowered.api.util.weighted.VariableAmount, enchantmentType: org.spongepowered.api.item.enchantment.EnchantmentType): java.util.function$.BiConsumer<org.spongepowered.api.item.inventory.ItemStack.Builder, java.util.Random>
                        /**
                         * Creates a new {@link BiConsumer} that takes the provided
                         * {@link Collection} of {@link EnchantmentType}s and applies a
                         * singular {@link EnchantmentType} with varying levels to the generated
                         * {@link ItemStack}.
                         * @param enchantmentTypes The enchantment pool to choose from
                         * @return The new biconsumer to apply to an itemstack builder
                         */
                        // @ts-ignore
                        public static enchantmentsWithVanillaLevelVariance(enchantmentTypes: java.util.Collection<org.spongepowered.api.item.enchantment.EnchantmentType> | Array<org.spongepowered.api.item.enchantment.EnchantmentType>): java.util.function$.BiConsumer<org.spongepowered.api.item.inventory.ItemStack.Builder, java.util.Random>
                        /**
                         * Creates a new {@link BiConsumer} that takes the provided
                         * {@link EnchantmentType}s and applies a variable amount of enchantmentTypes
                         * with varying levels to the generated {@link ItemStack}.
                         * @param amount The variable amount of enchantmentTypes to use
                         * @param enchantmentType The first enchantmentType to add
                         * @param enchantmentTypes The additional enchantmentTypes to use
                         * @return The new biconsumer to apply to an itemstack builder
                         */
                        // @ts-ignore
                        public static enchantmentsWithVanillaLevelVariance(amount: org.spongepowered.api.util.weighted.VariableAmount, enchantmentType: org.spongepowered.api.item.enchantment.EnchantmentType, ...enchantmentTypes: org.spongepowered.api.item.enchantment.EnchantmentType[]): java.util.function$.BiConsumer<org.spongepowered.api.item.inventory.ItemStack.Builder, java.util.Random>
                        /**
                         * Creates a new {@link BiConsumer} that takes the provided
                         * {@link Collection} of {@link EnchantmentType}s and applies a varying amount
                         * of generated enchantments to the generated {@link ItemStack}.
                         * @param amount The varying amount of enchantments to use
                         * @param itemEnchantmentTypes The enchantment pool to use
                         * @return The new biconsumer to apply to an itemstack builder
                         */
                        // @ts-ignore
                        public static enchantmentsWithVanillaLevelVariance(amount: org.spongepowered.api.util.weighted.VariableAmount, itemEnchantmentTypes: java.util.Collection<org.spongepowered.api.item.enchantment.EnchantmentType> | Array<org.spongepowered.api.item.enchantment.EnchantmentType>): java.util.function$.BiConsumer<org.spongepowered.api.item.inventory.ItemStack.Builder, java.util.Random>
                        /**
                         * Creates a new {@link BiConsumer} that takes the provided
                         * {@link Collection} of coupled {@link EnchantmentType} and
                         * {@link VariableAmount} to apply varying enchantments of varying amounts
                         * to the generated {@link ItemStack}.
                         * @param amount The varying amount of enchantments
                         * @param enchantments The collection of enchantment tuples combining the
                         *      enchantment and the variable amount of level to apply
                         * @return The new biconsumer to apply to an itemstack builder
                         */
                        // @ts-ignore
                        public static enchantments(amount: org.spongepowered.api.util.weighted.VariableAmount, enchantments: java.util.Collection<org.spongepowered.api.util.Tuple<org.spongepowered.api.item.enchantment.EnchantmentType, org.spongepowered.api.util.weighted.VariableAmount>> | Array<org.spongepowered.api.util.Tuple<org.spongepowered.api.item.enchantment.EnchantmentType, org.spongepowered.api.util.weighted.VariableAmount>>): java.util.function$.BiConsumer<org.spongepowered.api.item.inventory.ItemStack.Builder, java.util.Random>
                    }
                }
            }
        }
    }
}
