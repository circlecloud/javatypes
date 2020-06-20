declare namespace org {
    namespace bukkit {
        namespace enchantments {
            /**
             * The various type of enchantments that may be added to armour or weapons
             */
            // @ts-ignore
            class Enchantment extends java.lang.Object implements org.bukkit.Keyed {
                // @ts-ignore
                constructor(key: org.bukkit.NamespacedKey)
                /**
                 * Provides protection against environmental damage
                 */
                // @ts-ignore
                readonly PROTECTION_ENVIRONMENTAL: org.bukkit.enchantments.Enchantment
                /**
                 * Provides protection against fire damage
                 */
                // @ts-ignore
                readonly PROTECTION_FIRE: org.bukkit.enchantments.Enchantment
                /**
                 * Provides protection against fall damage
                 */
                // @ts-ignore
                readonly PROTECTION_FALL: org.bukkit.enchantments.Enchantment
                /**
                 * Provides protection against explosive damage
                 */
                // @ts-ignore
                readonly PROTECTION_EXPLOSIONS: org.bukkit.enchantments.Enchantment
                /**
                 * Provides protection against projectile damage
                 */
                // @ts-ignore
                readonly PROTECTION_PROJECTILE: org.bukkit.enchantments.Enchantment
                /**
                 * Decreases the rate of air loss whilst underwater
                 */
                // @ts-ignore
                readonly OXYGEN: org.bukkit.enchantments.Enchantment
                /**
                 * Increases the speed at which a player may mine underwater
                 */
                // @ts-ignore
                readonly WATER_WORKER: org.bukkit.enchantments.Enchantment
                /**
                 * Damages the attacker
                 */
                // @ts-ignore
                readonly THORNS: org.bukkit.enchantments.Enchantment
                /**
                 * Increases walking speed while in water
                 */
                // @ts-ignore
                readonly DEPTH_STRIDER: org.bukkit.enchantments.Enchantment
                /**
                 * Freezes any still water adjacent to ice / frost which player is walking on
                 */
                // @ts-ignore
                readonly FROST_WALKER: org.bukkit.enchantments.Enchantment
                /**
                 * Item cannot be removed
                 */
                // @ts-ignore
                readonly BINDING_CURSE: org.bukkit.enchantments.Enchantment
                /**
                 * Increases damage against all targets
                 */
                // @ts-ignore
                readonly DAMAGE_ALL: org.bukkit.enchantments.Enchantment
                /**
                 * Increases damage against undead targets
                 */
                // @ts-ignore
                readonly DAMAGE_UNDEAD: org.bukkit.enchantments.Enchantment
                /**
                 * Increases damage against arthropod targets
                 */
                // @ts-ignore
                readonly DAMAGE_ARTHROPODS: org.bukkit.enchantments.Enchantment
                /**
                 * All damage to other targets will knock them back when hit
                 */
                // @ts-ignore
                readonly KNOCKBACK: org.bukkit.enchantments.Enchantment
                /**
                 * When attacking a target, has a chance to set them on fire
                 */
                // @ts-ignore
                readonly FIRE_ASPECT: org.bukkit.enchantments.Enchantment
                /**
                 * Provides a chance of gaining extra loot when killing monsters
                 */
                // @ts-ignore
                readonly LOOT_BONUS_MOBS: org.bukkit.enchantments.Enchantment
                /**
                 * Increases damage against targets when using a sweep attack
                 */
                // @ts-ignore
                readonly SWEEPING_EDGE: org.bukkit.enchantments.Enchantment
                /**
                 * Increases the rate at which you mine/dig
                 */
                // @ts-ignore
                readonly DIG_SPEED: org.bukkit.enchantments.Enchantment
                /**
                 * Allows blocks to drop themselves instead of fragments (for example,
                 * stone instead of cobblestone)
                 */
                // @ts-ignore
                readonly SILK_TOUCH: org.bukkit.enchantments.Enchantment
                /**
                 * Decreases the rate at which a tool looses durability
                 */
                // @ts-ignore
                readonly DURABILITY: org.bukkit.enchantments.Enchantment
                /**
                 * Provides a chance of gaining extra loot when destroying blocks
                 */
                // @ts-ignore
                readonly LOOT_BONUS_BLOCKS: org.bukkit.enchantments.Enchantment
                /**
                 * Provides extra damage when shooting arrows from bows
                 */
                // @ts-ignore
                readonly ARROW_DAMAGE: org.bukkit.enchantments.Enchantment
                /**
                 * Provides a knockback when an entity is hit by an arrow from a bow
                 */
                // @ts-ignore
                readonly ARROW_KNOCKBACK: org.bukkit.enchantments.Enchantment
                /**
                 * Sets entities on fire when hit by arrows shot from a bow
                 */
                // @ts-ignore
                readonly ARROW_FIRE: org.bukkit.enchantments.Enchantment
                /**
                 * Provides infinite arrows when shooting a bow
                 */
                // @ts-ignore
                readonly ARROW_INFINITE: org.bukkit.enchantments.Enchantment
                /**
                 * Decreases odds of catching worthless junk
                 */
                // @ts-ignore
                readonly LUCK: org.bukkit.enchantments.Enchantment
                /**
                 * Increases rate of fish biting your hook
                 */
                // @ts-ignore
                readonly LURE: org.bukkit.enchantments.Enchantment
                /**
                 * Causes a thrown trident to return to the player who threw it
                 */
                // @ts-ignore
                readonly LOYALTY: org.bukkit.enchantments.Enchantment
                /**
                 * Deals more damage to mobs that live in the ocean
                 */
                // @ts-ignore
                readonly IMPALING: org.bukkit.enchantments.Enchantment
                /**
                 * When it is rainy, launches the player in the direction their trident is thrown
                 */
                // @ts-ignore
                readonly RIPTIDE: org.bukkit.enchantments.Enchantment
                /**
                 * Strikes lightning when a mob is hit with a trident if conditions are
                 * stormy
                 */
                // @ts-ignore
                readonly CHANNELING: org.bukkit.enchantments.Enchantment
                /**
                 * Shoot multiple arrows from crossbows
                 */
                // @ts-ignore
                readonly MULTISHOT: org.bukkit.enchantments.Enchantment
                /**
                 * Charges crossbows quickly
                 */
                // @ts-ignore
                readonly QUICK_CHARGE: org.bukkit.enchantments.Enchantment
                /**
                 * Crossbow projectiles pierce entities
                 */
                // @ts-ignore
                readonly PIERCING: org.bukkit.enchantments.Enchantment
                /**
                 * Allows mending the item using experience orbs
                 */
                // @ts-ignore
                readonly MENDING: org.bukkit.enchantments.Enchantment
                /**
                 * Item disappears instead of dropping
                 */
                // @ts-ignore
                readonly VANISHING_CURSE: org.bukkit.enchantments.Enchantment
                // @ts-ignore
                getKey(): org.bukkit.NamespacedKey
                /**
                 * Gets the unique name of this enchantment
                 * @return Unique name
                 * @deprecated enchantments are badly named, use {#link #getKey()}.
                 */
                // @ts-ignore
                abstract getName(): java.lang.String
                /**
                 * Gets the maximum level that this Enchantment may become.
                 * @return Maximum level of the Enchantment
                 */
                // @ts-ignore
                abstract getMaxLevel(): int
                /**
                 * Gets the level that this Enchantment should start at
                 * @return Starting level of the Enchantment
                 */
                // @ts-ignore
                abstract getStartLevel(): int
                /**
                 * Gets the type of {@link ItemStack} that may fit this Enchantment.
                 * @return Target type of the Enchantment
                 */
                // @ts-ignore
                abstract getItemTarget(): org.bukkit.enchantments.EnchantmentTarget
                /**
                 * Checks if this enchantment is a treasure enchantment.
                 * <br>
                 * Treasure enchantments can only be received via looting, trading, or
                 * fishing.
                 * @return true if the enchantment is a treasure enchantment
                 */
                // @ts-ignore
                abstract isTreasure(): boolean
                /**
                 * Checks if this enchantment is a cursed enchantment
                 * <br>
                 * Cursed enchantments are found the same way treasure enchantments are
                 * @return true if the enchantment is cursed
                 * @deprecated cursed enchantments are no longer special. Will return true
                 *  only for {#link Enchantment#BINDING_CURSE} and
                 *  {@link Enchantment#VANISHING_CURSE}.
                 */
                // @ts-ignore
                abstract isCursed(): boolean
                /**
                 * Check if this enchantment conflicts with another enchantment.
                 * @param other The enchantment to check against
                 * @return True if there is a conflict.
                 */
                // @ts-ignore
                abstract conflictsWith(other: org.bukkit.enchantments.Enchantment): boolean
                /**
                 * Checks if this Enchantment may be applied to the given {@link
                 * ItemStack}.
                 * <p>
                 * This does not check if it conflicts with any enchantments already
                 * applied to the item.
                 * @param item Item to test
                 * @return True if the enchantment may be applied, otherwise False
                 */
                // @ts-ignore
                abstract canEnchantItem(item: org.bukkit.inventory.ItemStack): boolean
                // @ts-ignore
                equals(obj: any): boolean
                // @ts-ignore
                hashCode(): int
                // @ts-ignore
                toString(): java.lang.String
                /**
                 * Registers an enchantment with the given ID and object.
                 * <p>
                 * Generally not to be used from within a plugin.
                 * @param enchantment Enchantment to register
                 */
                // @ts-ignore
                registerEnchantment(enchantment: org.bukkit.enchantments.Enchantment): void
                /**
                 * Checks if this is accepting Enchantment registrations.
                 * @return True if the server Implementation may add enchantments
                 */
                // @ts-ignore
                isAcceptingRegistrations(): boolean
                /**
                 * Stops accepting any enchantment registrations
                 */
                // @ts-ignore
                stopAcceptingRegistrations(): void
                /**
                 * Gets the Enchantment at the specified key
                 * @param key key to fetch
                 * @return Resulting Enchantment, or null if not found
                 */
                // @ts-ignore
                getByKey(key: org.bukkit.NamespacedKey): org.bukkit.enchantments.Enchantment
                /**
                 * Gets the Enchantment at the specified name
                 * @param name Name to fetch
                 * @return Resulting Enchantment, or null if not found
                 * @deprecated enchantments are badly named, use {#link #getByKey(org.bukkit.NamespacedKey)}.
                 */
                // @ts-ignore
                getByName(name: string): org.bukkit.enchantments.Enchantment
                /**
                 * Gets an array of all the registered {@link Enchantment}s
                 * @return Array of enchantments
                 */
                // @ts-ignore
                values(): org.bukkit.enchantments.Enchantment[]
            }
        }
    }
}
