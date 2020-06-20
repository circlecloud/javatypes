declare namespace org {
    namespace bukkit {
        namespace loot {
            /**
             * This enum holds a list of all known {@link LootTable}s offered by Mojang.
             * This list is not guaranteed to be accurate in future versions.
             * See the
             * <a href="https://minecraft.gamepedia.com/Loot_table#List_of_loot_tables">
             * Minecraft Wiki</a> for more information on loot tables.
             */
            // @ts-ignore
            class LootTables extends java.lang.Enum<org.bukkit.loot.LootTables> implements org.bukkit.Keyed {
                // @ts-ignore
                values(): org.bukkit.loot.LootTables[]
                // @ts-ignore
                valueOf(name: string): org.bukkit.loot.LootTables
                // @ts-ignore
                getKey(): org.bukkit.NamespacedKey
                /**
                 * Get the {@link LootTable} corresponding to this constant. This is
                 * equivalent to calling {@code Bukkit.getLootTable(this.getKey());}.
                 * @return the associated LootTable
                 */
                // @ts-ignore
                getLootTable(): org.bukkit.loot.LootTable
            }
        }
    }
}
