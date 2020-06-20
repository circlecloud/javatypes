declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace entity {
                /**
                 * Represents an entity that has an EquipmentInventory.
                 */
                // @ts-ignore
                interface Equipable extends org.spongepowered.api.util.Identifiable, org.spongepowered.api.item.inventory.Carrier {
                    /**
                     * Gets whether this entity can equip equipment of the specified type (eg.
                     * whether calling {@link #equip} will fail because the entity doesn't
                     * have this type of slot.
                     * @param type The type of equipment slot to query
                     * @return true if this entity can equip items of the specified type
                     */
                    // @ts-ignore
                    canEquip(type: org.spongepowered.api.item.inventory.equipment.EquipmentType): boolean
                    /**
                     * Gets whether this entity can equip the supplied equipment in its slot of
                     * the specified type (eg. whether calling {@link #equip} with the specified
                     * slot type and item will succeed)
                     * @param type The type of equipment slot to query
                     * @param equipment The equipment to check for
                     * @return true if can equip the supplied equipment
                     */
                    // @ts-ignore
                    canEquip(type: org.spongepowered.api.item.inventory.equipment.EquipmentType, equipment: org.spongepowered.api.item.inventory.ItemStack): boolean
                    /**
                     * Gets the item currently equipped by this entity in the specified slot.
                     * @param type The type of equipment slot to query
                     * @return The item in the equipped slot, if available
                     */
                    // @ts-ignore
                    getEquipped(type: org.spongepowered.api.item.inventory.equipment.EquipmentType): java.util.Optional<org.spongepowered.api.item.inventory.ItemStack>
                    /**
                     * Sets the item currently equipped by the entity in the specified slot, if
                     * the entity has such a slot.
                     * <p>Supplying null will unequip any currently equipped item.</p>
                     * @param type The type of equipment slot to set
                     * @param equipment The equipment to set or null to remove any equipped item
                     * @return true if the item was successfully equipped, false if the item
                     *       could not be equipped because the entity doesn't support the
                     *       specified equipment type or because the item was incompatible with
                     *       the specified slot.
                     */
                    // @ts-ignore
                    equip(type: org.spongepowered.api.item.inventory.equipment.EquipmentType, equipment: org.spongepowered.api.item.inventory.ItemStack): boolean
                }
            }
        }
    }
}
