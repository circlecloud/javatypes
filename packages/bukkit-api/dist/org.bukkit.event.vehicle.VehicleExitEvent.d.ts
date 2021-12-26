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
                    public getExited(): org.bukkit.entity.LivingEntity
                    // @ts-ignore
                    public isCancelled(): boolean
                    // @ts-ignore
                    public setCancelled(cancel: boolean): void
                    // @ts-ignore
                    public getHandlers(): org.bukkit.event.HandlerList
                    // @ts-ignore
                    public static getHandlerList(): org.bukkit.event.HandlerList
                }
            }
        }
    }
}
