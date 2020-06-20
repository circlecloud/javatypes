declare namespace org {
    namespace bukkit {
        namespace event {
            namespace vehicle {
                /**
                 * Raised when a vehicle is destroyed, which could be caused by either a
                 * player or the environment. This is not raised if the boat is simply
                 * 'removed' due to other means.
                 */
                // @ts-ignore
                class VehicleDestroyEvent extends org.bukkit.event.vehicle.VehicleEvent implements org.bukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(vehicle: org.bukkit.entity.Vehicle, attacker: org.bukkit.entity.Entity)
                    /**
                     * Gets the Entity that has destroyed the vehicle, potentially null
                     * @return the Entity that has destroyed the vehicle, potentially null
                     */
                    // @ts-ignore
                    getAttacker(): org.bukkit.entity.Entity
                    // @ts-ignore
                    isCancelled(): boolean
                    // @ts-ignore
                    setCancelled(cancel: boolean): void
                    // @ts-ignore
                    getHandlers(): org.bukkit.event.HandlerList
                    // @ts-ignore
                    getHandlerList(): org.bukkit.event.HandlerList
                }
            }
        }
    }
}
