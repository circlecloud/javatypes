declare namespace org {
    namespace bukkit {
        namespace event {
            namespace world {
                /**
                 * Called when a {@link LootTable} is generated in the world for an
                 * {@link InventoryHolder}.
                 * This event is NOT currently called when an entity's loot table has been
                 * generated (use {@link EntityDeathEvent#getDrops()}, but WILL be called by
                 * plugins invoking
                 * {@link LootTable#fillInventory(org.bukkit.inventory.Inventory, java.util.Random, LootContext)}.
                 */
                // @ts-ignore
                class LootGenerateEvent extends org.bukkit.event.world.WorldEvent implements org.bukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(world: org.bukkit.World, entity: org.bukkit.entity.Entity, inventoryHolder: org.bukkit.inventory.InventoryHolder, lootTable: org.bukkit.loot.LootTable, lootContext: org.bukkit.loot.LootContext, items: Array<org.bukkit.inventory.ItemStack>, plugin: boolean)
                    /**
                     * Get the entity used as context for loot generation (if applicable).
                     * For inventories where entities are not required to generate loot, such as
                     * hoppers, null will be returned.
                     * This is a convenience method for
                     * {@code getLootContext().getLootedEntity()}.
                     * @return the entity
                     */
                    // @ts-ignore
                    getEntity(): org.bukkit.entity.Entity
                    /**
                     * Get the inventory holder in which the loot was generated.
                     * If the loot was generated as a result of the block being broken, the
                     * inventory holder will be null as this event is called post block break.
                     * @return the inventory holder
                     */
                    // @ts-ignore
                    getInventoryHolder(): org.bukkit.inventory.InventoryHolder
                    /**
                     * Get the loot table used to generate loot.
                     * @return the loot table
                     */
                    // @ts-ignore
                    getLootTable(): org.bukkit.loot.LootTable
                    /**
                     * Get the loot context used to provide context to the loot table's loot
                     * generation.
                     * @return the loot context
                     */
                    // @ts-ignore
                    getLootContext(): org.bukkit.loot.LootContext
                    /**
                     * Set the loot to be generated. Null items will be treated as air.
                     * Note: the set collection is not the one which will be returned by
                     * {@link #getLoot()}.
                     * @param loot the loot to generate, null to clear all loot
                     */
                    // @ts-ignore
                    setLoot(loot: Array<org.bukkit.inventory.ItemStack>): void
                    /**
                     * Get a mutable list of all loot to be generated.
                     * Any items added or removed from the returned list will be reflected in
                     * the loot generation. Null items will be treated as air.
                     * @return the loot to generate
                     */
                    // @ts-ignore
                    getLoot(): java.util.List<org.bukkit.inventory.ItemStack>
                    /**
                     * Check whether or not this event was called as a result of a plugin
                     * invoking
                     * {@link LootTable#fillInventory(org.bukkit.inventory.Inventory, java.util.Random, LootContext)}.
                     * @return true if plugin caused, false otherwise
                     */
                    // @ts-ignore
                    isPlugin(): boolean
                    // @ts-ignore
                    setCancelled(cancel: boolean): void
                    // @ts-ignore
                    isCancelled(): boolean
                    // @ts-ignore
                    getHandlers(): org.bukkit.event.HandlerList
                    // @ts-ignore
                    getHandlerList(): org.bukkit.event.HandlerList
                }
            }
        }
    }
}
