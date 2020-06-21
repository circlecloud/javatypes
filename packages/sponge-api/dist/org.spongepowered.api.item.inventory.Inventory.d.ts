declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace item {
                namespace inventory {
                    /**
                     * Base interface for queryable inventories.
                     */
                    // @ts-ignore
                    interface Inventory extends java.lang.Iterable<org.spongepowered.api.item.inventory.Inventory>, org.spongepowered.api.Nameable {
                        /**
                         * Creates a new {@link Inventory.Builder} to build an {@link Inventory}.
                         * @return The builder
                         */
                        // @ts-ignore
                        builder(): org.spongepowered.api.item.inventory.Inventory.Builder
                        /**
                         * Gets the parent {@link Inventory} of this {@link Inventory}.
                         * @return the parent inventory, returns this inventory if there is no
                         *       parent (this is a top-level inventory)
                         */
                        // @ts-ignore
                        parent(): org.spongepowered.api.item.inventory.Inventory
                        /**
                         * Gets the root {@link Inventory} of this {@link Inventory}.
                         * This is equivalent to calling {@link #parent()} until it returns itself.
                         * @return the root inventory, returns this inventory if there is no
                         *        parent (this is a top-level inventory)
                         */
                        // @ts-ignore
                        root(): org.spongepowered.api.item.inventory.Inventory
                        /**
                         * Returns an iterable view of all {@link Slot}s (leaf nodes) in this
                         * Inventory.
                         * @param <T> expected inventory type, specified as generic to allow easy
                         *       pseudo-duck-typing
                         * @return an iterable view of all Slots (leaf nodes) in this inventory
                         */
                        // @ts-ignore
                        slots<T extends org.spongepowered.api.item.inventory.Inventory>(): java.lang.Iterable<T>
                        /**
                         * Return the first child inventory, effectively the same as
                         * <code>Inventory::iterator().next()</code> but more convenient when we are
                         * expecting a result set with only a single entry. Also use type specifier
                         * to allow easy pseudo-duck-typing. If no children, then returns
                         * <code>this</code>.
                         * @param <T> expected inventory type, specified as generic to allow easy
                         *       pseudo-duck-typing
                         * @return the first child inventory, if there are no children then simply
                         *       returns <code>this</code>
                         */
                        // @ts-ignore
                        first<T extends org.spongepowered.api.item.inventory.Inventory>(): T
                        /**
                         * Return the next sibling inventory, allows traversing the inventory
                         * hierarchy without using an iterator. If no more siblings, returns an
                         * {@link EmptyInventory}.
                         * @param <T> expected inventory type, specified as generic to allow easy
                         *       pseudo-duck-typing
                         * @return the next sibling inventory, or an {#link EmptyInventory} if
                         *       there are no further siblings
                         */
                        // @ts-ignore
                        next<T extends org.spongepowered.api.item.inventory.Inventory>(): T
                        /**
                         * Gets and remove the first available stack from this Inventory.
                         * <p>'Available' has a different meaning for different inventory types. In
                         * a single-slot inventory this has a fixed implication. However larger and
                         * more complex inventories are at liberty to implement whatever logic they
                         * wish to back this method. If an inventory cannot provide a meaningful
                         * implementation of this method then it should return
                         * {@link Optional#empty()} instead.</p>
                         * <p>For consumers, this means that just because an inventory doesn't
                         * return anything here, this does not imply that the inventory is empty,
                         * just that a more specific query is required to obtain items from it.</p>
                         * @return The first available item stack, or {#link Optional#empty()} if
                         *       unavailable or unsupported
                         */
                        // @ts-ignore
                        poll(): java.util.Optional<org.spongepowered.api.item.inventory.ItemStack>
                        /**
                         * <p>Get and remove up to <code>limit</code> items of the type in the first
                         * available stack in this Inventory from all stacks in this Inventory. If
                         * no stack is available then {@link Optional#empty()} is returned (as per
                         * the usual behaviour of {@link #poll()}, otherwise a new {@link ItemStack}
                         * is returned containing the removed items, the contents of the stack in
                         * the inventory are reduced by the number of items consumed. Note that this
                         * method attempts to consume items into the output up to
                         * <code>limit</code>, which may consume items from an arbitrary number
                         * of internal slots.</p>
                         * <p>For example, assume an inventory containing 4 slots contains stacks as
                         * follows:</p>
                         * <blockquote>
                         * <pre>[Stone x10] [Dirt x3] [Arrows x9] [Stone x32]</pre>
                         * </blockquote>
                         * <p>Calling <code>poll(16)</code> on this inventory will consume <em>Stone
                         * </em> from the Inventory (because the first stack contains stone), and
                         * will then consume the remaining 6 items from the 4th slot.</p>
                         * <p>It is intended that this method is used in conjunction with a query
                         * which returns a set of slots containing a specific item type:</p>
                         * <blockquote>
                         * <pre>Optional&lt;ItemStack&gt; q = inv.query(ItemTypes.DIRT).poll(1);
                         * </pre>
                         * </blockquote>
                         * @see #poll
                         * @param limit Maximum number of items to consume from the inventory
                         * @return Matching {#link ItemStack} guaranteed to have items less than or
                         *       equal to the specified <em>limit</em>.
                         */
                        // @ts-ignore
                        poll(limit: number /*int*/): java.util.Optional<org.spongepowered.api.item.inventory.ItemStack>
                        /**
                         * Gets without removing the first available stack from this Inventory. For
                         * the definition of 'available', see {@link #poll}.
                         * @return First available itemstack, or {#link Optional#empty()} if
                         *       unavailable or unsupported
                         */
                        // @ts-ignore
                        peek(): java.util.Optional<org.spongepowered.api.item.inventory.ItemStack>
                        /**
                         * Uses the same semantics as {@link #poll(int)} but <b>does not remove the
                         * items from the inventory</b>. The {@link ItemStack} returned is thus a
                         * new ItemStack containing <b>a copy of</b> the items in inventory. Use
                         * this method only if you wish to determine whether a call to
                         * {@link #poll(int)} is likely to succeed.
                         * @see #peek
                         * @param limit Maximum number of items to consume from the inventory
                         * @return Matching {#link ItemStack} guaranteed to have items less than or
                         *       equal to the specified <em>limit</em>.
                         */
                        // @ts-ignore
                        peek(limit: number /*int*/): java.util.Optional<org.spongepowered.api.item.inventory.ItemStack>
                        /**
                         * Try to put an ItemStack into this Inventory. Just like
                         * {@link Queue}, this method returns true if the Inventory
                         * accepted the stack and false if not, the size of the supplied stack is
                         * reduced by the number of items successfully consumed by the Inventory.
                         * <p>Unlike {@link #set}, this method's general contract does not permit
                         * items in the Inventory to be replaced. However trying to insert items
                         * that an Inventory cannot accept is not an error condition, the size of
                         * the supplied stack will simply not be reduced if no items are consumed by
                         * the Inventory.</p>
                         * @param stack A stack of items to attempt to insert into the Inventory,
                         *       note that upon successful insertion the supplied ItemStack itself
                         *       will be mutated and returned with size reduced by the number of
                         *       items successfully consumed by the Inventory
                         * @return true if <em>one or more</em> (up to the total number of items in
                         *       the supplied stack) items were consumed. False if no items were
                         *       consumed by the target inventory.
                         */
                        // @ts-ignore
                        offer(stack: org.spongepowered.api.item.inventory.ItemStack): org.spongepowered.api.item.inventory.transaction.InventoryTransactionResult
                        /**
                         * Returns true if the entire stack can fit in this inventory.
                         * <p>If this returns {@code true} {@link #offer(ItemStack)} should always succeed.</p>
                         * @param stack The stack of items to check if it can fit in this inventory.
                         * @return true if the entire stack can fit in this inventory.
                         */
                        // @ts-ignore
                        canFit(stack: org.spongepowered.api.item.inventory.ItemStack): boolean
                        /**
                         * Forcibly put the supplied stack into this inventory. Overwrites existing
                         * objects in the inventory as required to accommodate the entire stack. The
                         * entire stack is always consumed.
                         * <p>The general contract of this method is to prioritise insertion of the
                         * supplied items over items already in the Inventory. However the Inventory
                         * may still reject the supplied items if they are of an unsupported type
                         * for the target (for example trying to insert non-fuel items into a fuel
                         * slot) or if the number of items is larger than the total capacity of the
                         * inventory and not all items from the supplied stack can be consumed.</p>
                         * <p>For {@link Slot}s, the supplied stack is generally consumed and the
                         * existing contents ejected (at the discretion of the target Inventory).
                         * For multi-slot inventories the insertion order is up to the target
                         * inventory to decide, and does not have to match the traversal order of
                         * the leaf nodes as supplied by {@link #slots()}, although this is
                         * generally recommended. Inventories should document their specific
                         * insertion logic where the insertion order differs from the traversal
                         * order.</p>
                         * <p>Consumers should inspect the returned
                         * {@link InventoryTransactionResult} and act accordingly. Ejected items
                         * should generally be "thrown" into the world or deposited into another
                         * Inventory (depending on the operation in question. The supplied stack is
                         * not adjusted, any rejected items are returned in the operation result
                         * struct.</p>
                         * @param stack the stack to insert into the Inventory, will be mutated by
                         *       the number of items successfully consumed
                         * @return operation result indicating the success state of the operation
                         *       and any items rejected or ejected as a result of the operation
                         */
                        // @ts-ignore
                        set(stack: org.spongepowered.api.item.inventory.ItemStack): org.spongepowered.api.item.inventory.transaction.InventoryTransactionResult
                        /**
                         * Clears this inventory if it is clearable.
                         */
                        // @ts-ignore
                        clear(): void
                        /**
                         * The number of non-empty slots in the Inventory. Either 1 or 0 for
                         * {@link Slot}s and always 0 for {@link EmptyInventory}s.
                         * @return the number non-empty in the inventory
                         */
                        // @ts-ignore
                        size(): number /*int*/
                        /**
                         * Returns the number total number of individual <em>items</em> in this
                         * inventory.
                         * <p>This equivalent to counting up the stack sizes of all slots.</p>
                         * @return the total number of items in the inventory
                         */
                        // @ts-ignore
                        totalItems(): number /*int*/
                        /**
                         * The maximum number of stacks the Inventory can hold. Always 1 for
                         * {@link Slot}s and always 0 for {@link EmptyInventory}s.
                         * @return the number of stacks the inventory can hold
                         */
                        // @ts-ignore
                        capacity(): number /*int*/
                        /**
                         * Returns true if this Inventory contains children. If false, this does not
                         * imply that the Inventory accepts no items, and an Inventory is perfectly
                         * at liberty to provide {@link #peek}, {@link #poll}, {@link #offer} and
                         * {@link #set} semantics even if it has no internal storage of its own.
                         * @return true if and only if this inventory contains child inventories
                         */
                        // @ts-ignore
                        hasChildren(): boolean
                        /**
                         * Checks whether the stacks quantity or more of given stack is
                         * contained in this Inventory. This is equivalent to calling
                         * <code>!inv.query(stack).hasChildren();</code> To check if an
                         * inventory contains any amount use {@link #containsAny(ItemStack)}.
                         * @param stack The stack to check for
                         * @return True if there are at least the given stack's amount of items
                         *       present in this inventory.
                         */
                        // @ts-ignore
                        contains(stack: org.spongepowered.api.item.inventory.ItemStack): boolean
                        /**
                         * Checks for whether there is a stack in this Inventory with the given
                         * ItemType. This is equivalent to calling <code>!inv.query(stack)
                         * .hasChildren();</code>
                         * @param type The type to search for
                         * @return True if at least one stack in this list has the given type
                         */
                        // @ts-ignore
                        contains(type: org.spongepowered.api.item.ItemType): boolean
                        /**
                         * Checks whether the given stack is contained in this Inventory.
                         * The stack size is ignored. Note this will return true if any amount
                         * of the supplied stack is found. To check if an inventory contains at
                         * least an amount use {@link #contains(ItemStack)}.
                         * @param stack The stack to check for
                         * @return True if the stack is present in this inventory
                         */
                        // @ts-ignore
                        containsAny(stack: org.spongepowered.api.item.inventory.ItemStack): boolean
                        /**
                         * Returns the maximum size of any stack in this Inventory.
                         * @return The maximum stack size of this list
                         */
                        // @ts-ignore
                        getMaxStackSize(): number /*int*/
                        /**
                         * Sets the maximum stack size of any stack in this ItemList.
                         * @param size The new maximum stack size
                         */
                        // @ts-ignore
                        setMaxStackSize(size: number /*int*/): void
                        /**
                         * Returns all properties matching the supplied type defined in
                         * <em>this</em> inventory for the specified (immediate) sub-inventory. If
                         * no matching properties are defined an empty collection is returned.
                         * @param child the child inventory to inspect
                         * @param property the type of property to query for
                         * @param <T> expected type of inventory property, generic to enable easy
                         *       pseudo-duck-typing
                         * @return collection of matching properties, may be an empty collection if
                         *       no properties match the supplied criterion
                         */
                        // @ts-ignore
                        getProperties<T extends org.spongepowered.api.item.inventory.InventoryProperty<?, ?>>(child: org.spongepowered.api.item.inventory.Inventory, property: java.lang.Class<T>): Array<T>
                        /**
                         * Gets all properties of the specified type defined directly on this
                         * Inventory. For sub-inventories this is effectively the same as
                         * <code>inv.getParent().getProperty(inv, property);</code> but for
                         * top-level inventories may include properties defined on the inventory
                         * directly.
                         * @param property the type of property to query for
                         * @param <T> expected type of inventory property, generic to enable easy
                         *       pseudo-duck-typing
                         * @return collection of matching properties, may be an empty collection if
                         *       no properties match the supplied criterion
                         */
                        // @ts-ignore
                        getProperties<T extends org.spongepowered.api.item.inventory.InventoryProperty<?, ?>>(property: java.lang.Class<T>): Array<T>
                        /**
                         * Gets the property with the specified key defined in <em>this</em>
                         * inventory for the specified (immediate) sub-inventory.
                         * @param child the child inventory to inspect
                         * @param property the type of property to query for
                         * @param key Property key to search for
                         * @param <T> expected type of inventory property, generic to enable easy
                         *       pseudo-duck-typing
                         * @return matching properties, may be absent if no property matched the
                         *       supplied criteria
                         */
                        // @ts-ignore
                        getProperty<T extends org.spongepowered.api.item.inventory.InventoryProperty<?, ?>>(child: org.spongepowered.api.item.inventory.Inventory, property: java.lang.Class<T>, key: java.lang.Object | any): java.util.Optional<T>
                        /**
                         * Gets a property with the specified key defined directly on this Inventory
                         * if one is defined. For sub-inventories this is effectively the same as
                         * <code>inv.getParent().getProperty(inv, property, key);</code> but for
                         * top-level inventories may include properties defined on the inventory
                         * directly.
                         * @param property the type of property to query for
                         * @param key Property key to search for
                         * @param <T> expected type of inventory property, generic to enable easy
                         *       pseudo-duck-typing
                         * @return matching properties, may be absent if no property matched the
                         *       supplied criteria
                         */
                        // @ts-ignore
                        getProperty<T extends org.spongepowered.api.item.inventory.InventoryProperty<?, ?>>(property: java.lang.Class<T>, key: java.lang.Object | any): java.util.Optional<T>
                        /**
                         * Gets the property with the default key defined in <em>this</em>
                         * inventory for the specified (immediate) sub-inventory.
                         * @param child the child inventory to inspect
                         * @param property the type of property to query for
                         * @param <T> expected type of inventory property, generic to enable easy
                         *       pseudo-duck-typing
                         * @return matching properties, may be absent if no property matched the
                         *       supplied criteria
                         */
                        // @ts-ignore
                        getInventoryProperty<T extends org.spongepowered.api.item.inventory.InventoryProperty<?, ?>>(child: org.spongepowered.api.item.inventory.Inventory, property: java.lang.Class<T>): java.util.Optional<T>
                        /**
                         * Gets a property with the default key defined directly on this Inventory
                         * if one is defined. For sub-inventories this is effectively the same as
                         * <code>inv.getParent().getProperty(inv, property);</code> but for
                         * top-level inventories may include properties defined on the inventory
                         * directly.
                         * @param property the type of property to query for
                         * @param <T> expected type of inventory property, generic to enable easy
                         *       pseudo-duck-typing
                         * @return matching properties, may be absent if no property matched the
                         *       supplied criteria
                         */
                        // @ts-ignore
                        getInventoryProperty<T extends org.spongepowered.api.item.inventory.InventoryProperty<?, ?>>(property: java.lang.Class<T>): java.util.Optional<T>
                        /**
                         * Query this inventory for inventories matching any of the supplied types.
                         * This is effectively an <code>instanceof</code> check against each child
                         * inventory. Logical <code>OR</code> is applied between operands.
                         * @param types inventory types (interfaces or classes) to query for
                         * @param <T> expected inventory type, specified as generic to allow easy
                         *       pseudo-duck-typing
                         * @return the query result
                         * @deprecated use {#link #query(QueryOperation...)} instead
                         */
                        // @ts-ignore
                        query<T extends org.spongepowered.api.item.inventory.Inventory>(...types: java.lang.Class<any>[]): T
                        /**
                         * Query this inventory for inventories containing any of the supplied item
                         * types. This query operates directly on {@link Slot} leaf nodes in the
                         * inventory and will always return a collection containing only
                         * {@link Slot} instances. Logical <code>OR</code> is applied between
                         * operands.
                         * @param types item types to query for
                         * @param <T> expected inventory type, specified as generic to allow easy
                         *       pseudo-duck-typing
                         * @return the query result
                         * @deprecated use {#link #query(QueryOperation...)} instead
                         */
                        // @ts-ignore
                        query<T extends org.spongepowered.api.item.inventory.Inventory>(...types: org.spongepowered.api.item.ItemType[]): T
                        /**
                         * Query this inventory for inventories containing stacks which match the
                         * supplied stack operand. This query operates directly on {@link Slot}
                         * leaf nodes in the inventory and will always return a collection
                         * containing only {@link Slot} instances.
                         * To query for stacks of any size use {@link #queryAny(ItemStack...)}.
                         * @param types items to query for, stack sizes must match the supplied
                         *      stack exactly
                         * @param <T> expected inventory type, specified as generic to allow easy
                         *      pseudo-duck-typing
                         * @return the query result
                         * @deprecated use {#link #query(QueryOperation...)} instead
                         */
                        // @ts-ignore
                        query<T extends org.spongepowered.api.item.inventory.Inventory>(...types: org.spongepowered.api.item.inventory.ItemStack[]): T
                        /**
                         * Query this inventory for inventories which match any of the supplied
                         * properties. The <code>equals</code> method of each property is called on
                         * each child inventory which has the supplied property. Logical
                         * <code>OR</code> is applied between operands. This method is effectively
                         * the same as calling {@link #query} with an
                         * {@link org.spongepowered.api.data.Property.Operator} of
                         * {@link org.spongepowered.api.data.Property.Operator#EQUAL}.
                         * @param props inventory properties to query for
                         * @param <T> expected inventory type, specified as generic to allow easy
                         *       pseudo-duck-typing
                         * @return the query result
                         * @deprecated use {#link #query(QueryOperation...)} instead
                         */
                        // @ts-ignore
                        query<T extends org.spongepowered.api.item.inventory.Inventory>(...props: org.spongepowered.api.item.inventory.InventoryProperty<any, any>[]): T
                        /**
                         * Query this inventory for inventories matching any of the supplied titles.
                         * Logical <code>OR</code> is applied between operands.
                         * @param names the names of the inventories to search for
                         * @param <T> expected inventory type, specified as generic to allow easy
                         *       pseudo-duck-typing
                         * @return the query result
                         * @deprecated use {#link #query(QueryOperation...) instead}
                         */
                        // @ts-ignore
                        query<T extends org.spongepowered.api.item.inventory.Inventory>(...names: org.spongepowered.api.text.translation.Translation[]): T
                        /**
                         * <p>Query this inventory by dynamically inspecting each operand. Each
                         * operand in turn is checked for a match against the other query methods,
                         * and if a matching method is found the query is performed using the
                         * operand. This is repeated until all operands are consumed and allows a
                         * union of multiple query types to be aggregated into a single view.</p>
                         * <p>For operands with no matching type, the behaviour is determined by the
                         * individual inventory. A naive match may be obtained by calling .equals()
                         * against the child inventory passing the unknown operand as an argument.
                         * </p>
                         * @param args search parameters
                         * @param <T> expected inventory type, specified as generic to allow easy
                         *       pseudo-duck-typing
                         * @return the query result
                         * @deprecated use {#link #query(QueryOperation...) instead}
                         */
                        // @ts-ignore
                        query<T extends org.spongepowered.api.item.inventory.Inventory>(...args: java.lang.Object[] | any[]): T
                        /**
                         * Query this inventory for inventories containing any stacks which match
                         * the supplied stack operands ignoring its quantity. This query operates
                         * directly on {@link Slot} leaf nodes in the inventory and will always
                         * return a collection containing only {@link Slot} instances. Logical
                         * <code>OR</code> is applied between operands.
                         * This ignores stack sizes. To query for stacks of a specific size use
                         * {@link #query(ItemStack...)}.
                         * @param types items to query for, the size of the stacks is always ignored
                         * @param <T> expected inventory type, specified as generic to allow easy
                         *       pseudo-duck-typing
                         * @return the query result
                         * @deprecated use {#link #query(QueryOperation...)} instead
                         */
                        // @ts-ignore
                        queryAny<T extends org.spongepowered.api.item.inventory.Inventory>(...types: org.spongepowered.api.item.inventory.ItemStack[]): T
                        /**
                         * Query this inventory for inventories matching any of the supplied
                         * queries. Logical <code>OR</code> is applied between operands.
                         * @param <T> expected inventory type, specified as generic to allow easy
                         *       pseudo-duck-typing
                         * @param operations queries to check against
                         * @return the query result
                         */
                        // @ts-ignore
                        query<T extends org.spongepowered.api.item.inventory.Inventory>(...operations: org.spongepowered.api.item.inventory.query.QueryOperation<any>[]): T
                        /**
                         * Returns the {@link PluginContainer} who built this inventory.
                         * @return The container
                         */
                        // @ts-ignore
                        getPlugin(): org.spongepowered.api.plugin.PluginContainer
                        /**
                         * Creates an {@link InventoryArchetype} based on this {@link Inventory}.
                         * @return The inventory archetype
                         */
                        // @ts-ignore
                        getArchetype(): org.spongepowered.api.item.inventory.InventoryArchetype
                        /**
                         * Intersects the slots of both inventories.
                         * The resulting inventory will only contain slots
                         * that are present in both inventories.
                         * @param inventory the other inventory
                         * @return an inventory wrapping all slots that are present in
                         *      both inventories
                         */
                        // @ts-ignore
                        intersect(inventory: org.spongepowered.api.item.inventory.Inventory): org.spongepowered.api.item.inventory.Inventory
                        /**
                         * Constructs a union of the slots in both inventories.
                         * <p>The resulting inventory will contain all slots from
                         * both inventories.</p>
                         * <p>The slots of this inventory are ordered before the slots of the
                         * given inventory.</p>
                         * <p>If the same slot is contained in both inventories the duplicate
                         * in the second one is removed.</p>
                         * @param inventory the other inventory
                         * @return an inventory wrapping all slots of both inventories.
                         */
                        // @ts-ignore
                        union(inventory: org.spongepowered.api.item.inventory.Inventory): org.spongepowered.api.item.inventory.Inventory
                        /**
                         * Returns true if the given inventory is a descendant of this one.
                         * This method will check for deeply nested inventories but
                         * will only return true if the entire inventory structure is contained.
                         * This means that e.g. for a query result of multiple slots the
                         * inventory will not return true even if all slots are contained.
                         * If you want to check if all slots of an inventory are contained in
                         * another one use {@link #intersect(Inventory)} instead.
                         * <p>
                         * You can use this if you want to check if a single Slot is contained
                         * in an inventory or an entire row is contained in a Grid.
                         * </p>
                         * @param inventory the other inventory
                         * @return whether the given inventory is contained in this one.
                         */
                        // @ts-ignore
                        containsInventory(inventory: org.spongepowered.api.item.inventory.Inventory): boolean
                        /**
                         * Transforms this inventory using the given transformation.
                         * @param transformation The transformation
                         * @return The transformed Inventory
                         */
                        // @ts-ignore
                        transform(transformation: org.spongepowered.api.item.inventory.InventoryTransformation): org.spongepowered.api.item.inventory.Inventory
                    }
                }
            }
        }
    }
}
