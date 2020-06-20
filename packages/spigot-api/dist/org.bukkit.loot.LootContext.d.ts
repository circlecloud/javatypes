declare namespace org {
    namespace bukkit {
        namespace loot {
            /**
             * Represents additional information a {@link LootTable} can use to modify it's
             * generated loot.
             */
            // @ts-ignore
            class LootContext extends java.lang.Object {
                // @ts-ignore
                readonly DEFAULT_LOOT_MODIFIER: number /*int*/
                /**
                 * The {@link Location} to store where the loot will be generated.
                 * @return the Location of where the loot will be generated
                 */
                // @ts-ignore
                getLocation(): org.bukkit.Location
                /**
                 * Represents the {@link org.bukkit.potion.PotionEffectType#LUCK} that an
                 * entity can have. The higher the value the better chance of receiving more
                 * loot.
                 * @return luck
                 */
                // @ts-ignore
                getLuck(): float
                /**
                 * Represents the
                 * {@link org.bukkit.enchantments.Enchantment#LOOT_BONUS_MOBS} the
                 * {@link #getKiller()} entity has on their equipped item.
                 * This value is only set via
                 * {@link LootContext.Builder#lootingModifier(int)}. If not set, the
                 * {@link #getKiller()} entity's looting level will be used instead.
                 * @return the looting level
                 */
                // @ts-ignore
                getLootingModifier(): int
                /**
                 * Get the {@link Entity} that was killed. Can be null.
                 * @return the looted entity or null
                 */
                // @ts-ignore
                getLootedEntity(): org.bukkit.entity.Entity
                /**
                 * Get the {@link HumanEntity} who killed the {@link #getLootedEntity()}.
                 * Can be null.
                 * @return the killer entity, or null.
                 */
                // @ts-ignore
                getKiller(): org.bukkit.entity.HumanEntity
            }
        }
    }
}
