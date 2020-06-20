declare namespace org {
    namespace bukkit {
        namespace event {
            namespace player {
                /**
                 * Represents an event that is called when a player right clicks an entity that
                 * also contains the location where the entity was clicked.
                 * <br>
                 * Note that the client may sometimes spuriously send this packet in addition to {@link PlayerInteractEntityEvent}.
                 * Users are advised to listen to this (parent) class unless specifically required.
                 */
                // @ts-ignore
                class PlayerInteractAtEntityEvent extends org.bukkit.event.player.PlayerInteractEntityEvent {
                    // @ts-ignore
                    constructor(who: org.bukkit.entity.Player, clickedEntity: org.bukkit.entity.Entity, position: org.bukkit.util.Vector)
                    // @ts-ignore
                    constructor(who: org.bukkit.entity.Player, clickedEntity: org.bukkit.entity.Entity, position: org.bukkit.util.Vector, hand: org.bukkit.inventory.EquipmentSlot)
                    // @ts-ignore
                    getClickedPosition(): org.bukkit.util.Vector
                    // @ts-ignore
                    getHandlers(): org.bukkit.event.HandlerList
                    // @ts-ignore
                    getHandlerList(): org.bukkit.event.HandlerList
                }
            }
        }
    }
}
