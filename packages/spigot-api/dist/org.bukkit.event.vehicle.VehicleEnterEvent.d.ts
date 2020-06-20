declare namespace org {
    namespace bukkit {
        namespace event {
            namespace vehicle {
                /**
                 * Raised when an entity enters a vehicle.
                 */
                // @ts-ignore
                class VehicleEnterEvent extends org.bukkit.event.vehicle.VehicleEvent implements org.bukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(vehicle: org.bukkit.entity.Vehicle, entered: org.bukkit.entity.Entity)
                    /**
                     * Gets the Entity that entered the vehicle.
                     * @return the Entity that entered the vehicle
                     */
                    // @ts-ignore
                    getEntered(): org.bukkit.entity.Entity
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
