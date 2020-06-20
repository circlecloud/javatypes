declare namespace org {
    namespace bukkit {
        namespace event {
            namespace player {
                /**
                 * Called when a player interacts with an armor stand and will either swap, retrieve or place an item.
                 */
                // @ts-ignore
                class PlayerArmorStandManipulateEvent extends org.bukkit.event.player.PlayerInteractEntityEvent {
                    // @ts-ignore
                    constructor(who: org.bukkit.entity.Player, clickedEntity: org.bukkit.entity.ArmorStand, playerItem: org.bukkit.inventory.ItemStack, armorStandItem: org.bukkit.inventory.ItemStack, slot: org.bukkit.inventory.EquipmentSlot)
                    /**
                     * Returns the item held by the player. If this Item is null and the armor stand Item is also null,
                     * there will be no transaction between the player and the armor stand.
                     * If the Player's item is null, but the armor stand item is not then the player will obtain the armor stand item.
                     * In the case that the Player's item is not null, but the armor stand item is null, the players item will be placed on the armor stand.
                     * If both items are not null, the items will be swapped.
                     * In the case that the event is cancelled the original items will remain the same.
                     * @return the item held by the player.
                     */
                    // @ts-ignore
                    getPlayerItem(): org.bukkit.inventory.ItemStack
                    /**
                     * Returns the item held by the armor stand.
                     * If this Item is null and the player's Item is also null, there will be no transaction between the player and the armor stand.
                     * If the Player's item is null, but the armor stand item is not then the player will obtain the armor stand item.
                     * In the case that the Player's item is not null, but the armor stand item is null, the players item will be placed on the armor stand.
                     * If both items are not null, the items will be swapped.
                     * In the case that the event is cancelled the original items will remain the same.
                     * @return the item held by the armor stand.
                     */
                    // @ts-ignore
                    getArmorStandItem(): org.bukkit.inventory.ItemStack
                    /**
                     * Returns the raw item slot of the armor stand in this event.
                     * @return the index of the item obtained or placed of the armor stand.
                     */
                    // @ts-ignore
                    getSlot(): org.bukkit.inventory.EquipmentSlot
                    // @ts-ignore
                    getRightClicked(): org.bukkit.entity.ArmorStand
                    // @ts-ignore
                    getHandlers(): org.bukkit.event.HandlerList
                    // @ts-ignore
                    getHandlerList(): org.bukkit.event.HandlerList
                }
            }
        }
    }
}
