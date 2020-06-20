declare namespace org {
    namespace bukkit {
        namespace inventory {
            namespace meta {
                /**
                 * This type represents the storage mechanism for auxiliary item data.
                 * <p>
                 * An implementation will handle the creation and application for ItemMeta.
                 * This class should not be implemented by a plugin in a live environment.
                 */
                // @ts-ignore
                interface ItemMeta extends java.lang.Cloneable, org.bukkit.configuration.serialization.ConfigurationSerializable, org.bukkit.persistence.PersistentDataHolder {
                    /**
                     * Checks for existence of a display name.
                     * @return true if this has a display name
                     */
                    // @ts-ignore
                    hasDisplayName(): boolean
                    /**
                     * Gets the display name that is set.
                     * <p>
                     * Plugins should check that hasDisplayName() returns <code>true</code>
                     * before calling this method.
                     * @return the display name that is set
                     */
                    // @ts-ignore
                    getDisplayName(): java.lang.String
                    /**
                     * Sets the display name.
                     * @param name the name to set
                     */
                    // @ts-ignore
                    setDisplayName(name: string): void
                    /**
                     * Checks for existence of a localized name.
                     * @return true if this has a localized name
                     */
                    // @ts-ignore
                    hasLocalizedName(): boolean
                    /**
                     * Gets the localized display name that is set.
                     * <p>
                     * Plugins should check that hasLocalizedName() returns <code>true</code>
                     * before calling this method.
                     * @return the localized name that is set
                     */
                    // @ts-ignore
                    getLocalizedName(): java.lang.String
                    /**
                     * Sets the localized name.
                     * @param name the name to set
                     */
                    // @ts-ignore
                    setLocalizedName(name: string): void
                    /**
                     * Checks for existence of lore.
                     * @return true if this has lore
                     */
                    // @ts-ignore
                    hasLore(): boolean
                    /**
                     * Gets the lore that is set.
                     * <p>
                     * Plugins should check if hasLore() returns <code>true</code> before
                     * calling this method.
                     * @return a list of lore that is set
                     */
                    // @ts-ignore
                    getLore(): java.util.List<java.lang.String>
                    /**
                     * Sets the lore for this item.
                     * Removes lore when given null.
                     * @param lore the lore that will be set
                     */
                    // @ts-ignore
                    setLore(lore: Array<java.lang.String>): void
                    /**
                     * Checks for existence of custom model data.
                     * <p>
                     * CustomModelData is an integer that may be associated client side with a
                     * custom item model.
                     * @return true if this has custom model data
                     */
                    // @ts-ignore
                    hasCustomModelData(): boolean
                    /**
                     * Gets the custom model data that is set.
                     * <p>
                     * CustomModelData is an integer that may be associated client side with a
                     * custom item model.
                     * <p>
                     * Plugins should check that hasCustomModelData() returns <code>true</code>
                     * before calling this method.
                     * @return the localized name that is set
                     */
                    // @ts-ignore
                    getCustomModelData(): int
                    /**
                     * Sets the custom model data.
                     * <p>
                     * CustomModelData is an integer that may be associated client side with a
                     * custom item model.
                     * @param data the data to set, or null to clear
                     */
                    // @ts-ignore
                    setCustomModelData(data: number): void
                    /**
                     * Checks for the existence of any enchantments.
                     * @return true if an enchantment exists on this meta
                     */
                    // @ts-ignore
                    hasEnchants(): boolean
                    /**
                     * Checks for existence of the specified enchantment.
                     * @param ench enchantment to check
                     * @return true if this enchantment exists for this meta
                     */
                    // @ts-ignore
                    hasEnchant(ench: org.bukkit.enchantments.Enchantment): boolean
                    /**
                     * Checks for the level of the specified enchantment.
                     * @param ench enchantment to check
                     * @return The level that the specified enchantment has, or 0 if none
                     */
                    // @ts-ignore
                    getEnchantLevel(ench: org.bukkit.enchantments.Enchantment): int
                    /**
                     * Returns a copy the enchantments in this ItemMeta. <br>
                     * Returns an empty map if none.
                     * @return An immutable copy of the enchantments
                     */
                    // @ts-ignore
                    getEnchants(): java.util.Map<org.bukkit.enchantments.Enchantment, java.lang.Integer>
                    /**
                     * Adds the specified enchantment to this item meta.
                     * @param ench Enchantment to add
                     * @param level Level for the enchantment
                     * @param ignoreLevelRestriction this indicates the enchantment should be
                     *      applied, ignoring the level limit
                     * @return true if the item meta changed as a result of this call, false
                     *      otherwise
                     */
                    // @ts-ignore
                    addEnchant(ench: org.bukkit.enchantments.Enchantment, level: number /*int*/, ignoreLevelRestriction: boolean): boolean
                    /**
                     * Removes the specified enchantment from this item meta.
                     * @param ench Enchantment to remove
                     * @return true if the item meta changed as a result of this call, false
                     *      otherwise
                     */
                    // @ts-ignore
                    removeEnchant(ench: org.bukkit.enchantments.Enchantment): boolean
                    /**
                     * Checks if the specified enchantment conflicts with any enchantments in
                     * this ItemMeta.
                     * @param ench enchantment to test
                     * @return true if the enchantment conflicts, false otherwise
                     */
                    // @ts-ignore
                    hasConflictingEnchant(ench: org.bukkit.enchantments.Enchantment): boolean
                    /**
                     * Set itemflags which should be ignored when rendering a ItemStack in the Client. This Method does silently ignore double set itemFlags.
                     * @param itemFlags The hideflags which shouldn't be rendered
                     */
                    // @ts-ignore
                    addItemFlags(...itemFlags: org.bukkit.inventory.ItemFlag[]): void
                    /**
                     * Remove specific set of itemFlags. This tells the Client it should render it again. This Method does silently ignore double removed itemFlags.
                     * @param itemFlags Hideflags which should be removed
                     */
                    // @ts-ignore
                    removeItemFlags(...itemFlags: org.bukkit.inventory.ItemFlag[]): void
                    /**
                     * Get current set itemFlags. The collection returned is unmodifiable.
                     * @return A set of all itemFlags set
                     */
                    // @ts-ignore
                    getItemFlags(): java.util.Set<org.bukkit.inventory.ItemFlag>
                    /**
                     * Check if the specified flag is present on this item.
                     * @param flag the flag to check
                     * @return if it is present
                     */
                    // @ts-ignore
                    hasItemFlag(flag: org.bukkit.inventory.ItemFlag): boolean
                    /**
                     * Return if the unbreakable tag is true. An unbreakable item will not lose
                     * durability.
                     * @return true if the unbreakable tag is true
                     */
                    // @ts-ignore
                    isUnbreakable(): boolean
                    /**
                     * Sets the unbreakable tag. An unbreakable item will not lose durability.
                     * @param unbreakable true if set unbreakable
                     */
                    // @ts-ignore
                    setUnbreakable(unbreakable: boolean): void
                    /**
                     * Checks for the existence of any AttributeModifiers.
                     * @return true if any AttributeModifiers exist
                     */
                    // @ts-ignore
                    hasAttributeModifiers(): boolean
                    /**
                     * Return an immutable copy of all Attributes and
                     * their modifiers in this ItemMeta.<br>
                     * Returns null if none exist.
                     * @return an immutable {#link Multimap} of Attributes
                     *          and their AttributeModifiers, or null if none exist
                     */
                    // @ts-ignore
                    getAttributeModifiers(): <any>
                    /**
                     * Return an immutable copy of all {@link Attribute}s and their
                     * {@link AttributeModifier}s for a given {@link EquipmentSlot}.<br>
                     * Any {@link AttributeModifier} that does have have a given
                     * {@link EquipmentSlot} will be returned. This is because
                     * AttributeModifiers without a slot are active in any slot.<br>
                     * If there are no attributes set for the given slot, an empty map
                     * will be returned.
                     * @param slot the {#link EquipmentSlot} to check
                     * @return the immutable {#link Multimap} with the
                     *          respective Attributes and modifiers, or an empty map
                     *          if no attributes are set.
                     */
                    // @ts-ignore
                    getAttributeModifiers(slot: org.bukkit.inventory.EquipmentSlot): <any>
                    /**
                     * Return an immutable copy of all {@link AttributeModifier}s
                     * for a given {@link Attribute}
                     * @param attribute the {#link Attribute}
                     * @return an immutable collection of {#link AttributeModifier}s
                     *           or null if no AttributeModifiers exist for the Attribute.
                     * @throws NullPointerException if Attribute is null
                     */
                    // @ts-ignore
                    getAttributeModifiers(attribute: org.bukkit.attribute.Attribute): java.util.Collection<org.bukkit.attribute.AttributeModifier>
                    /**
                     * Add an Attribute and it's Modifier.
                     * AttributeModifiers can now support {@link EquipmentSlot}s.
                     * If not set, the {@link AttributeModifier} will be active in ALL slots.
                     * <br>
                     * Two {@link AttributeModifier}s that have the same {@link java.util.UUID}
                     * cannot exist on the same Attribute.
                     * @param attribute the {#link Attribute} to modify
                     * @param modifier the {#link AttributeModifier} specifying the modification
                     * @return true if the Attribute and AttributeModifier were
                     *          successfully added
                     * @throws NullPointerException if Attribute is null
                     * @throws NullPointerException if AttributeModifier is null
                     * @throws IllegalArgumentException if AttributeModifier already exists
                     */
                    // @ts-ignore
                    addAttributeModifier(attribute: org.bukkit.attribute.Attribute, modifier: org.bukkit.attribute.AttributeModifier): boolean
                    /**
                     * Set all {@link Attribute}s and their {@link AttributeModifier}s.
                     * To clear all currently set Attributes and AttributeModifiers use
                     * null or an empty Multimap.
                     * If not null nor empty, this will filter all entries that are not-null
                     * and add them to the ItemStack.
                     * @param attributeModifiers the new Multimap containing the Attributes
                     *                            and their AttributeModifiers
                     */
                    // @ts-ignore
                    setAttributeModifiers(attributeModifiers: object): void
                    /**
                     * Remove all {@link AttributeModifier}s associated with the given
                     * {@link Attribute}.
                     * This will return false if nothing was removed.
                     * @param attribute attribute to remove
                     * @return true if all modifiers were removed from a given
                     *                   Attribute. Returns false if no attributes were
                     *                   removed.
                     * @throws NullPointerException if Attribute is null
                     */
                    // @ts-ignore
                    removeAttributeModifier(attribute: org.bukkit.attribute.Attribute): boolean
                    /**
                     * Remove all {@link Attribute}s and {@link AttributeModifier}s for a
                     * given {@link EquipmentSlot}.<br>
                     * If the given {@link EquipmentSlot} is null, this will remove all
                     * {@link AttributeModifier}s that do not have an EquipmentSlot set.
                     * @param slot the {#link EquipmentSlot} to clear all Attributes and
                     *              their modifiers for
                     * @return true if all modifiers were removed that match the given
                     *          EquipmentSlot.
                     */
                    // @ts-ignore
                    removeAttributeModifier(slot: org.bukkit.inventory.EquipmentSlot): boolean
                    /**
                     * Remove a specific {@link Attribute} and {@link AttributeModifier}.
                     * AttributeModifiers are matched according to their {@link java.util.UUID}.
                     * @param attribute the {#link Attribute} to remove
                     * @param modifier the {#link AttributeModifier} to remove
                     * @return if any attribute modifiers were remove
                     * @throws NullPointerException if the Attribute is null
                     * @throws NullPointerException if the AttributeModifier is null
                     * @see AttributeModifier#getUniqueId()
                     */
                    // @ts-ignore
                    removeAttributeModifier(attribute: org.bukkit.attribute.Attribute, modifier: org.bukkit.attribute.AttributeModifier): boolean
                    /**
                     * Returns a public custom tag container capable of storing tags on the
                     * item.
                     * Those tags will be sent to the client with all of their content, so the
                     * client is capable of reading them. This will result in the player seeing
                     * a NBT Tag notification on the item.
                     * These tags can also be modified by the client once in creative mode
                     * @return the custom tag container
                     * @deprecated this API part has been replaced by the {#link PersistentDataHolder} API.
                     *  Please use {@link PersistentDataHolder#getPersistentDataContainer()} instead of this.
                     */
                    // @ts-ignore
                    getCustomTagContainer(): org.bukkit.inventory.meta.tags.CustomItemTagContainer
                    /**
                     * Internal use only! Do not use under any circumstances!
                     * @param version version
                     * @deprecated internal use only
                     */
                    // @ts-ignore
                    setVersion(version: number /*int*/): void
                    // @ts-ignore
                    clone(): org.bukkit.inventory.meta.ItemMeta
                }
            }
        }
    }
}
