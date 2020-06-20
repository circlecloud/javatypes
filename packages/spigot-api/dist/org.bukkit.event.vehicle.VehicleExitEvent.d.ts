declare namespace org {
    namespace bukkit {
        namespace event {
            namespace vehicle {
                /**
                 * Raised when a living entity exits a vehicle.
                 */
                // @ts-ignore
                class VehicleExitEvent extends org.bukkit.event.vehicle.VehicleEvent implements org.bukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(vehicle: org.bukkit.entity.Vehicle, exited: org.bukkit.entity.LivingEntity)
                    /**
                     * Get the living entity that exited the vehicle.
                     * @return The entity.
                     */
                    // @ts-ignore
                    getExited(): org.bukkit.entity.LivingEntity
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
