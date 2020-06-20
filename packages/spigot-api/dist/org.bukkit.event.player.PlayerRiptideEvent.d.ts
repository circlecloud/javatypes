declare namespace org {
    namespace bukkit {
        namespace event {
            namespace player {
                /**
                 * This event is fired when the player activates the riptide enchantment, using
                 * their trident to propel them through the air.
                 * <br>
                 * N.B. the riptide action is currently performed client side, so manipulating
                 * the player in this event may have undesired effects.
                 */
                // @ts-ignore
                class PlayerRiptideEvent extends org.bukkit.event.player.PlayerEvent {
                    // @ts-ignore
                    constructor(who: org.bukkit.entity.Player, item: org.bukkit.inventory.ItemStack)
                    /**
                     * Gets the item containing the used enchantment.
                     * @return held enchanted item
                     */
                    // @ts-ignore
                    getItem(): org.bukkit.inventory.ItemStack
                    // @ts-ignore
                    getHandlers(): org.bukkit.event.HandlerList
                    // @ts-ignore
                    getHandlerList(): org.bukkit.event.HandlerList
                }
            }
        }
    }
}
