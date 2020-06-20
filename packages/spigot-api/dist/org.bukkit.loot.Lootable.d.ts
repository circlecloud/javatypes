declare namespace org {
    namespace bukkit {
        namespace loot {
            /**
             * Represents a {@link org.bukkit.block.Container} or a
             * {@link org.bukkit.entity.Mob} that can have a loot table.
             * <br>
             * Container loot will only generate upon opening, and only when the container
             * is <i>first</i> opened.
             * <br>
             * Entities will only generate loot upon death.
             */
            // @ts-ignore
            interface Lootable {
                /**
                 * Set the loot table for a container or entity.
                 * <br>
                 * To remove a loot table use null. Do not use {@link LootTables#EMPTY} to
                 * clear a LootTable.
                 * @param table the Loot Table this {#link org.bukkit.block.Container} or
                 *  {@link org.bukkit.entity.Mob} will have.
                 */
                // @ts-ignore
                setLootTable(table: org.bukkit.loot.LootTable): void
                /**
                 * Gets the Loot Table attached to this block or entity.
                 * <br>
                 * If an block/entity does not have a loot table, this will return null, NOT
                 * an empty loot table.
                 * @return the Loot Table attached to this block or entity.
                 */
                // @ts-ignore
                getLootTable(): org.bukkit.loot.LootTable
                /**
                 * Set the seed used when this Loot Table generates loot.
                 * @param seed the seed to used to generate loot. Default is 0.
                 */
                // @ts-ignore
                setSeed(seed: number /*long*/): void
                /**
                 * Get the Loot Table's seed.
                 * <br>
                 * The seed is used when generating loot.
                 * @return the seed
                 */
                // @ts-ignore
                getSeed(): long
            }
        }
    }
}
