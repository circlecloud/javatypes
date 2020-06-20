declare namespace org {
    namespace bukkit {
        namespace event {
            namespace vehicle {
                /**
                 * Raised when a vehicle collides with an entity.
                 */
                // @ts-ignore
                class VehicleEntityCollisionEvent extends org.bukkit.event.vehicle.VehicleCollisionEvent implements org.bukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(vehicle: org.bukkit.entity.Vehicle, entity: org.bukkit.entity.Entity)
                    // @ts-ignore
                    getEntity(): org.bukkit.entity.Entity
                    // @ts-ignore
                    isCancelled(): boolean
                    // @ts-ignore
                    setCancelled(cancel: boolean): void
                    // @ts-ignore
                    isPickupCancelled(): boolean
                    // @ts-ignore
                    setPickupCancelled(cancel: boolean): void
                    // @ts-ignore
                    isCollisionCancelled(): boolean
                    // @ts-ignore
                    setCollisionCancelled(cancel: boolean): void
                    // @ts-ignore
                    getHandlers(): org.bukkit.event.HandlerList
                    // @ts-ignore
                    getHandlerList(): org.bukkit.event.HandlerList
                }
            }
        }
    }
}
