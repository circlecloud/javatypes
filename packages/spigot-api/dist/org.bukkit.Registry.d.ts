declare namespace org {
    namespace bukkit {
        /**
         * Represents a registry of Bukkit objects that may be retrieved by
         * {@link NamespacedKey}.
         * @param <T> type of item in the registry
         */
        // @ts-ignore
        interface Registry<T extends org.bukkit.Keyed> extends java.lang.Iterable<T> {
            /**
             * Server advancements.
             * @see Bukkit#getAdvancement(org.bukkit.NamespacedKey)
             * @see Bukkit#advancementIterator()
             */
            // @ts-ignore
            
            /**
             * Server art.
             * @see Art
             */
            // @ts-ignore
            
            /**
             * Server biomes.
             * @see Biome
             */
            // @ts-ignore
            
            /**
             * Custom boss bars.
             * @see Bukkit#getBossBar(org.bukkit.NamespacedKey)
             * @see Bukkit#getBossBars()
             */
            // @ts-ignore
            
            /**
             * Server enchantments.
             * @see Enchantment#getByKey(org.bukkit.NamespacedKey)
             */
            // @ts-ignore
            
            /**
             * Server entity types.
             * @see EntityType
             */
            // @ts-ignore
            
            /**
             * Default server loot tables.
             * @see LootTables
             */
            // @ts-ignore
            
            /**
             * Server materials.
             * @see Material
             */
            // @ts-ignore
            
            /**
             * Server statistics.
             * @see Statistic
             */
            // @ts-ignore
            
            /**
             * Villager profession.
             * @see Villager.Profession
             */
            // @ts-ignore
            
            /**
             * Villager type.
             * @see Villager.Type
             */
            // @ts-ignore
            
            /**
             * Memory Keys.
             * @see MemoryKey
             */
            // @ts-ignore
            
            /**
             * Get the object by its key.
             * @param key non-null key
             * @return item or null if does not exist
             */
            // @ts-ignore
            get(key: org.bukkit.NamespacedKey): T
        }
    }
}
