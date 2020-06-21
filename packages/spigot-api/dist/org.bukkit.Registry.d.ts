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
            readonly ADVANCEMENT: org.bukkit.Registry<org.bukkit.advancement.Advancement>
            /**
             * Server art.
             * @see Art
             */
            // @ts-ignore
            readonly ART: org.bukkit.Registry<org.bukkit.Art>
            /**
             * Server biomes.
             * @see Biome
             */
            // @ts-ignore
            readonly BIOME: org.bukkit.Registry<org.bukkit.block.Biome>
            /**
             * Custom boss bars.
             * @see Bukkit#getBossBar(org.bukkit.NamespacedKey)
             * @see Bukkit#getBossBars()
             */
            // @ts-ignore
            readonly BOSS_BARS: org.bukkit.Registry<org.bukkit.boss.KeyedBossBar>
            /**
             * Server enchantments.
             * @see Enchantment#getByKey(org.bukkit.NamespacedKey)
             */
            // @ts-ignore
            readonly ENCHANTMENT: org.bukkit.Registry<org.bukkit.enchantments.Enchantment>
            /**
             * Server entity types.
             * @see EntityType
             */
            // @ts-ignore
            readonly ENTITY_TYPE: org.bukkit.Registry<org.bukkit.entity.EntityType>
            /**
             * Default server loot tables.
             * @see LootTables
             */
            // @ts-ignore
            readonly LOOT_TABLES: org.bukkit.Registry<org.bukkit.loot.LootTables>
            /**
             * Server materials.
             * @see Material
             */
            // @ts-ignore
            readonly MATERIAL: org.bukkit.Registry<org.bukkit.Material>
            /**
             * Server statistics.
             * @see Statistic
             */
            // @ts-ignore
            readonly STATISTIC: org.bukkit.Registry<org.bukkit.Statistic>
            /**
             * Villager profession.
             * @see Villager.Profession
             */
            // @ts-ignore
            readonly VILLAGER_PROFESSION: org.bukkit.Registry<org.bukkit.entity.Villager.Profession>
            /**
             * Villager type.
             * @see Villager.Type
             */
            // @ts-ignore
            readonly VILLAGER_TYPE: org.bukkit.Registry<org.bukkit.entity.Villager.Type>
            /**
             * Memory Keys.
             * @see MemoryKey
             */
            // @ts-ignore
            readonly MEMORY_MODULE_TYPE: org.bukkit.Registry<org.bukkit.entity.memory.MemoryKey<any>>
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
