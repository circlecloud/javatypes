declare namespace org {
    namespace bukkit {
        namespace potion {
            /**
             * Potion Adapter for pre-1.9 data values
             * see @PotionMeta for 1.9+
             */
            // @ts-ignore
            class Potion extends java.lang.Object {
                /**
                 * Construct a new potion of the given type. Unless the type is {@link
                 * PotionType#WATER}, it will be level one, without extended duration.
                 * Don't use this constructor to create a no-effect potion other than
                 * water bottle.
                 * @param type The potion type
                 */
                // @ts-ignore
                constructor(type: org.bukkit.potion.PotionType)
                /**
                 * Create a new potion of the given type and level.
                 * @param type The type of potion.
                 * @param level The potion's level.
                 */
                // @ts-ignore
                constructor(type: org.bukkit.potion.PotionType, level: number /*int*/)
                /**
                 * Create a new potion of the given type and level.
                 * @param type The type of potion.
                 * @param level The potion's level.
                 * @param splash Whether it is a splash potion.
                 * @deprecated In favour of using {#link #Potion(PotionType)} with {@link
                 *      #splash()}.
                 */
                // @ts-ignore
                constructor(type: org.bukkit.potion.PotionType, level: number /*int*/, splash: boolean)
                /**
                 * Create a new potion of the given type and level.
                 * @param type The type of potion.
                 * @param level The potion's level.
                 * @param splash Whether it is a splash potion.
                 * @param extended Whether it has an extended duration.
                 * @deprecated In favour of using {#link #Potion(PotionType)} with {@link
                 *      #extend()} and possibly {@link #splash()}.
                 */
                // @ts-ignore
                constructor(type: org.bukkit.potion.PotionType, level: number /*int*/, splash: boolean, extended: boolean)
                /**
                 * Chain this to the constructor to make the potion a splash potion.
                 * @return The potion.
                 */
                // @ts-ignore
                splash(): org.bukkit.potion.Potion
                /**
                 * Chain this to the constructor to extend the potion's duration.
                 * @return The potion.
                 */
                // @ts-ignore
                extend(): org.bukkit.potion.Potion
                /**
                 * Applies the effects of this potion to the given {@link ItemStack}. The
                 * ItemStack must be a potion.
                 * @param to The itemstack to apply to
                 */
                // @ts-ignore
                apply(to: org.bukkit.inventory.ItemStack): void
                /**
                 * Applies the effects that would be applied by this potion to the given
                 * {@link LivingEntity}.
                 * @param to The entity to apply the effects to
                 * @see LivingEntity#addPotionEffects(Collection)
                 */
                // @ts-ignore
                apply(to: org.bukkit.entity.LivingEntity): void
                // @ts-ignore
                equals(obj: any): boolean
                /**
                 * Returns a collection of {@link PotionEffect}s that this {@link Potion}
                 * would confer upon a {@link LivingEntity}.
                 * @see PotionBrewer#getEffectsFromDamage(int)
                 * @see Potion#toDamageValue()
                 * @return The effects that this potion applies
                 */
                // @ts-ignore
                getEffects(): java.util.Collection<org.bukkit.potion.PotionEffect>
                /**
                 * Returns the level of this potion.
                 * @return The level of this potion
                 */
                // @ts-ignore
                getLevel(): int
                /**
                 * Returns the {@link PotionType} of this potion.
                 * @return The type of this potion
                 */
                // @ts-ignore
                getType(): org.bukkit.potion.PotionType
                /**
                 * Returns whether this potion has an extended duration.
                 * @return Whether this potion has extended duration
                 */
                // @ts-ignore
                hasExtendedDuration(): boolean
                // @ts-ignore
                hashCode(): int
                /**
                 * Returns whether this potion is a splash potion.
                 * @return Whether this is a splash potion
                 */
                // @ts-ignore
                isSplash(): boolean
                /**
                 * Set whether this potion has extended duration. This will cause the
                 * potion to have roughly 8/3 more duration than a regular potion.
                 * @param isExtended Whether the potion should have extended duration
                 */
                // @ts-ignore
                setHasExtendedDuration(isExtended: boolean): void
                /**
                 * Sets whether this potion is a splash potion. Splash potions can be
                 * thrown for a radius effect.
                 * @param isSplash Whether this is a splash potion
                 */
                // @ts-ignore
                setSplash(isSplash: boolean): void
                /**
                 * Sets the {@link PotionType} of this potion.
                 * @param type The new type of this potion
                 */
                // @ts-ignore
                setType(type: org.bukkit.potion.PotionType): void
                /**
                 * Sets the level of this potion.
                 * @param level The new level of this potion
                 */
                // @ts-ignore
                setLevel(level: number /*int*/): void
                /**
                 * Converts this potion to a valid potion damage short, usable for potion
                 * item stacks.
                 * @return The damage value of this potion
                 * @deprecated Non-functional
                 */
                // @ts-ignore
                toDamageValue(): short
                /**
                 * Converts this potion to an {@link ItemStack} with the specified amount
                 * and a correct damage value.
                 * @param amount The amount of the ItemStack
                 * @return The created ItemStack
                 */
                // @ts-ignore
                toItemStack(amount: number /*int*/): org.bukkit.inventory.ItemStack
                /**
                 * Gets the potion from its damage value.
                 * @param damage the damage value
                 * @return the produced potion
                 */
                // @ts-ignore
                fromDamage(damage: number /*int*/): org.bukkit.potion.Potion
                // @ts-ignore
                fromItemStack(item: org.bukkit.inventory.ItemStack): org.bukkit.potion.Potion
                /**
                 * Returns an instance of {@link PotionBrewer}.
                 * @return An instance of PotionBrewer
                 */
                // @ts-ignore
                getBrewer(): org.bukkit.potion.PotionBrewer
                /**
                 * Sets the current instance of {@link PotionBrewer}. Generally not to be
                 * used from within a plugin.
                 * @param other The new PotionBrewer
                 */
                // @ts-ignore
                setPotionBrewer(other: org.bukkit.potion.PotionBrewer): void
                /**
                 * Gets the potion from its name id.
                 * @return the name id
                 * @deprecated Non-functional
                 */
                // @ts-ignore
                getNameId(): int
            }
        }
    }
}
