declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace item {
                namespace enchantment {
                    /**
                     * An enumeration of known {@link EnchantmentType}s.
                     * <p>In vanilla the minimum level of these is 1, while the max levels vary.</p>
                     */
                    // @ts-ignore
                    class EnchantmentTypes extends java.lang.Object {
                        /**
                         * Increases regular underwater mining speed.
                         * <p>In vanilla the maximum level is 1.</p>
                         */
                        // @ts-ignore
                        readonly AQUA_AFFINITY: org.spongepowered.api.item.enchantment.EnchantmentType
                        /**
                         * Increases damages and causes slowness for a variable amount of time
                         * depending on the level to "arthropod" mobs. In vanilla this includes
                         * spiders, cave spiders, silverfish, and endermites.
                         * <p>In vanilla the maximum level is 5.</p>
                         */
                        // @ts-ignore
                        readonly BANE_OF_ARTHROPODS: org.spongepowered.api.item.enchantment.EnchantmentType
                        /**
                         * Prevents removal of the cursed items that reside in the armor slots.
                         * <p>In vanilla the maximum level is 1.</p>
                         */
                        // @ts-ignore
                        readonly BINDING_CURSE: org.spongepowered.api.item.enchantment.EnchantmentType
                        /**
                         * Reduces explosion damage.
                         * <p>In vanilla the maximum level is 4.</p>
                         */
                        // @ts-ignore
                        readonly BLAST_PROTECTION: org.spongepowered.api.item.enchantment.EnchantmentType
                        /**
                         * Increases underwater movement speed.
                         * <p>In vanilla the maximum level is 3.</p>
                         */
                        // @ts-ignore
                        readonly DEPTH_STRIDER: org.spongepowered.api.item.enchantment.EnchantmentType
                        /**
                         * Increases mining speed.
                         * <p>In vanilla the maximum level is 5.</p>
                         */
                        // @ts-ignore
                        readonly EFFICIENCY: org.spongepowered.api.item.enchantment.EnchantmentType
                        /**
                         * Reduces fall damage.
                         * <p>In vanilla the maximum level is 4.</p>
                         */
                        // @ts-ignore
                        readonly FEATHER_FALLING: org.spongepowered.api.item.enchantment.EnchantmentType
                        /**
                         * Sets the target on fire.
                         * <p>In vanilla the maximum level is 2.</p>
                         */
                        // @ts-ignore
                        readonly FIRE_ASPECT: org.spongepowered.api.item.enchantment.EnchantmentType
                        /**
                         * Reduces fire damage.
                         * <p>In vanilla the maximum level is 4.</p>
                         */
                        // @ts-ignore
                        readonly FIRE_PROTECTION: org.spongepowered.api.item.enchantment.EnchantmentType
                        /**
                         * Sets your shot arrows on fire.
                         * <p>In vanilla the maximum level is 1.</p>
                         */
                        // @ts-ignore
                        readonly FLAME: org.spongepowered.api.item.enchantment.EnchantmentType
                        /**
                         * Increases block drops.
                         * <p>In vanilla the maximum level is 3.</p>
                         */
                        // @ts-ignore
                        readonly FORTUNE: org.spongepowered.api.item.enchantment.EnchantmentType
                        /**
                         * Creates frosted ice blocks when walking over water.
                         * <p>In vanilla the maximum level is 2.</p>
                         */
                        // @ts-ignore
                        readonly FROST_WALKER: org.spongepowered.api.item.enchantment.EnchantmentType
                        /**
                         * Causing shooting arrows to not consume regular arrows.
                         * <p>In vanilla the maximum level is 1.</p>
                         */
                        // @ts-ignore
                        readonly INFINITY: org.spongepowered.api.item.enchantment.EnchantmentType
                        /**
                         * Increases attack knockback.
                         * <p>In vanilla the maximum level is 2.</p>
                         */
                        // @ts-ignore
                        readonly KNOCKBACK: org.spongepowered.api.item.enchantment.EnchantmentType
                        /**
                         * Causes mobs drop more loot.
                         * <p>In vanilla the maximum level is 3.</p>
                         */
                        // @ts-ignore
                        readonly LOOTING: org.spongepowered.api.item.enchantment.EnchantmentType
                        /**
                         * Increases luck while fishing.
                         * <p>In vanilla the maximum level is 3.</p>
                         */
                        // @ts-ignore
                        readonly LUCK_OF_THE_SEA: org.spongepowered.api.item.enchantment.EnchantmentType
                        /**
                         * Increases rate of fish biting your hook while fishing.
                         * <p>In vanilla the maximum level is 3.</p>
                         */
                        // @ts-ignore
                        readonly LURE: org.spongepowered.api.item.enchantment.EnchantmentType
                        /**
                         * Repair item durability with experience.
                         * <p>In vanilla the maximum level is 1.</p>
                         */
                        // @ts-ignore
                        readonly MENDING: org.spongepowered.api.item.enchantment.EnchantmentType
                        /**
                         * Increases shot arrow damage.
                         * <p>In vanilla the maximum level is 5.</p>
                         */
                        // @ts-ignore
                        readonly POWER: org.spongepowered.api.item.enchantment.EnchantmentType
                        /**
                         * Reduces projectile damage you take, for example from arrows, ghasts,
                         * blaze fire charges, and similar in vanilla.
                         * <p>In vanilla the maximum level is 4.</p>
                         */
                        // @ts-ignore
                        readonly PROJECTILE_PROTECTION: org.spongepowered.api.item.enchantment.EnchantmentType
                        /**
                         * Reduces all damage, outside of a few sources that bypass armor, such as
                         * the void, the kill command, and hunger damage in vanilla.
                         * <p>In vanilla the maximum level is 4.</p>
                         */
                        // @ts-ignore
                        readonly PROTECTION: org.spongepowered.api.item.enchantment.EnchantmentType
                        /**
                         * Increases knockback by shot arrows.
                         * <p>In vanilla the maximum level is 2.</p>
                         */
                        // @ts-ignore
                        readonly PUNCH: org.spongepowered.api.item.enchantment.EnchantmentType
                        /**
                         * Extends underwater breathing time.
                         * <p>In vanilla the maximum level is 3.</p>
                         */
                        // @ts-ignore
                        readonly RESPIRATION: org.spongepowered.api.item.enchantment.EnchantmentType
                        /**
                         * Increases melee damage.
                         * <p>In vanilla the maximum level is 5.</p>
                         */
                        // @ts-ignore
                        readonly SHARPNESS: org.spongepowered.api.item.enchantment.EnchantmentType
                        /**
                         * Allows collection of blocks that are normally unobtainable, such as
                         * diamond ore, cocoa, mycelium, and similar in vanilla.
                         * <p>In vanilla the maximum level is 1.</p>
                         */
                        // @ts-ignore
                        readonly SILK_TOUCH: org.spongepowered.api.item.enchantment.EnchantmentType
                        /**
                         * Increases damage to "undead" mobs. In vanilla this includes skeletons,
                         * skeletons, zombies, withers, wither skeletons, zombie pigmen,
                         * skeleton horses and zombie horses.
                         * <p>In vanilla the maximum level is 5.</p>
                         */
                        // @ts-ignore
                        readonly SMITE: org.spongepowered.api.item.enchantment.EnchantmentType
                        /**
                         * Increases the damage of the sweeping attack.
                         * <p>In vanilla the maximum level is 3.</p>
                         */
                        // @ts-ignore
                        readonly SWEEPING: org.spongepowered.api.item.enchantment.EnchantmentType
                        /**
                         * Attackers are damaged when they deal damage to the wearer.
                         * <p>In vanilla the maximum level is 3.</p>
                         */
                        // @ts-ignore
                        readonly THORNS: org.spongepowered.api.item.enchantment.EnchantmentType
                        /**
                         * Increases effective durability.
                         * <p>In vanilla the maximum level is 3.</p>
                         */
                        // @ts-ignore
                        readonly UNBREAKING: org.spongepowered.api.item.enchantment.EnchantmentType
                        /**
                         * Causes the item to disappear on death.
                         * <p>In vanilla the maximum level is 1.</p>
                         */
                        // @ts-ignore
                        readonly VANISHING_CURSE: org.spongepowered.api.item.enchantment.EnchantmentType
                    }
                }
            }
        }
    }
}
