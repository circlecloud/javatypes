declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace util {
                namespace weighted {
                    /**
                     * Represents a pool of tables which are rolled sequentially when retrieving
                     * entries.
                     * @param <T> The entry type
                     */
                    // @ts-ignore
                    class LootTable<T> extends java.lang.Object {
                        /**
                         * Creates a new {@link LootTable}.
                         */
                        // @ts-ignore
                        constructor()
                        /**
                         * Adds a table to the pool.
                         * @param table The new table
                         */
                        // @ts-ignore
                        addTable(table: org.spongepowered.api.util.weighted.RandomObjectTable<T>): void
                        /**
                         * Adds all tables from the given {@link LootTable} to this LootTable's pool.
                         * @param other The other loot table
                         */
                        // @ts-ignore
                        addAll(other: org.spongepowered.api.util.weighted.LootTable<T>): void
                        /**
                         * Removes a table from the pool.
                         * @param table The table to remove
                         * @return If the pool contained the table
                         */
                        // @ts-ignore
                        removeTable(table: org.spongepowered.api.util.weighted.RandomObjectTable<T>): boolean
                        /**
                         * Gets all tables in the pool.
                         * @return The tables
                         */
                        // @ts-ignore
                        getTables(): java.util.List<org.spongepowered.api.util.weighted.RandomObjectTable<T>>
                        /**
                         * Clears all tables from the pool.
                         */
                        // @ts-ignore
                        clearPool(): void
                        /**
                         * Gets a List of objects as retrieved from all pools.
                         * @param rand The random object to use
                         * @return The retrieved entries
                         */
                        // @ts-ignore
                        get(rand: java.util.Random): java.util.List<T>
                        // @ts-ignore
                        equals(o: any): boolean
                        // @ts-ignore
                        hashCode(): int
                        // @ts-ignore
                        toString(): java.lang.String
                    }
                }
            }
        }
    }
}
