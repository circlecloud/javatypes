declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace entity {
                /**
                 * <p>Represents an entity that can be equipped with armor and a held item. Each
                 * method here is a shorthand for the appropriate {@link #getEquipped} or
                 * {@link #equip} method call.</p>
                 * <p>Classes implementing this interface should provide <b>all</b> of the
                 * supplied equipment slot types. Classes which do not support all slot types in
                 * this interface should instead implement {@link Equipable}.</p>
                 */
                // @ts-ignore
                interface ArmorEquipable extends org.spongepowered.api.entity.Equipable {
                    /**
                     * Gets the helmet currently being worn by this entity.
                     * <p>Having the helmet as null will result in having nothing equipped in
                     * the helmet slot.</p>
                     * @return The helmet, if available
                     */
                    // @ts-ignore
                    getHelmet(): java.util.Optional<org.spongepowered.api.item.inventory.ItemStack>
                    /**
                     * Sets the helmet currently being worn by this entity.
                     * <p>Having the helmet as null will result in having nothing equipped in
                     * the helmet slot.</p>
                     * @param helmet The helmet to put on the entity
                     */
                    // @ts-ignore
                    setHelmet(helmet: org.spongepowered.api.item.inventory.ItemStack): void
                    /**
                     * Gets the chestplate currently being worn by this entity.
                     * <p>Having the chestplate as null will result in having nothing equipped
                     * in the chestplate slot.</p>
                     * @return The chestplate, if available
                     */
                    // @ts-ignore
                    getChestplate(): java.util.Optional<org.spongepowered.api.item.inventory.ItemStack>
                    /**
                     * Sets the chestplate currently being worn by this entity.
                     * <p>Having the chestplate as null will result in having nothing equipped
                     * in the chestplate slot.</p>
                     * @param chestplate The chestplate to put on the entity
                     */
                    // @ts-ignore
                    setChestplate(chestplate: org.spongepowered.api.item.inventory.ItemStack): void
                    /**
                     * Gets the leggings currently being worn by this entity.
                     * <p>Having the leggings as null will result in having nothing equipped in
                     * the leggings slot.</p>
                     * @return The leggings, if available
                     */
                    // @ts-ignore
                    getLeggings(): java.util.Optional<org.spongepowered.api.item.inventory.ItemStack>
                    /**
                     * Sets the leggings currently being worn by this entity.
                     * <p>Having the leggings as null will result in having nothing equipped in
                     * the leggings slot.</p>
                     * @param leggings The leggings to put on the entity
                     */
                    // @ts-ignore
                    setLeggings(leggings: org.spongepowered.api.item.inventory.ItemStack): void
                    /**
                     * Gets the boots currently being worn by this entity.
                     * <p>Having the boots as null will result in having nothing equipped in the
                     * boots slot.</p>
                     * @return The boots, if available
                     */
                    // @ts-ignore
                    getBoots(): java.util.Optional<org.spongepowered.api.item.inventory.ItemStack>
                    /**
                     * Sets the boots currently being worn by this entity.
                     * <p>Having the boots as null will result in having nothing equipped in the
                     * boots slot.</p>
                     * @param boots The boots to put on the entity
                     */
                    // @ts-ignore
                    setBoots(boots: org.spongepowered.api.item.inventory.ItemStack): void
                    /**
                     * Gets the current equipped item in hand if available.
                     * <p>Having the item in hand as null will result in having nothing equipped
                     * in the item in hand slot.</p>
                     * @param handType The hand type to retrieve from
                     * @return The current item in hand, if available
                     */
                    // @ts-ignore
                    getItemInHand(handType: org.spongepowered.api.data.type.HandType): java.util.Optional<org.spongepowered.api.item.inventory.ItemStack>
                    /**
                     * Sets the item in hand for this entity.
                     * <p>Having the item in hand as null will result in having nothing equipped
                     * in the item in hand slot.</p>
                     * @param hand The hand type to set to
                     * @param itemInHand The item in hand
                     */
                    // @ts-ignore
                    setItemInHand(hand: org.spongepowered.api.data.type.HandType, itemInHand: org.spongepowered.api.item.inventory.ItemStack): void
                }
            }
        }
    }
}
