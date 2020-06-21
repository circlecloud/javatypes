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
                        public addTable(table: org.spongepowered.api.util.weighted.RandomObjectTable<T>): void
                        /**
                         * Adds all tables from the given {@link LootTable} to this LootTable's pool.
                         * @param other The other loot table
                         */
                        // @ts-ignore
                        public addAll(other: org.spongepowered.api.util.weighted.LootTable<T>): void
                        /**
                         * Removes a table from the pool.
                         * @param table The table to remove
                         * @return If the pool contained the table
                         */
                        // @ts-ignore
                        public removeTable(table: org.spongepowered.api.util.weighted.RandomObjectTable<T>): boolean
                        /**
                         * Gets all tables in the pool.
                         * @return The tables
                         */
                        // @ts-ignore
                        public getTables(): Array<org.spongepowered.api.util.weighted.RandomObjectTable<T>>
                        /**
                         * Clears all tables from the pool.
                         */
                        // @ts-ignore
                        public clearPool(): void
                        /**
                         * Gets a List of objects as retrieved from all pools.
                         * @param rand The random object to use
                         * @return The retrieved entries
                         */
                        // @ts-ignore
                        public get(rand: java.util.Random): Array<T>
                        // @ts-ignore
                        public equals(o: java.lang.Object | any): boolean
                        // @ts-ignore
                        public hashCode(): number /*int*/
                        // @ts-ignore
                        public toString(): string
                    }
                }
            }
        }
    }
}
