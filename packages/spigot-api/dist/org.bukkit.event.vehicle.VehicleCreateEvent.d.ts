declare namespace org {
    namespace bukkit {
        namespace event {
            namespace vehicle {
                /**
                 * Raised when a vehicle is created.
                 */
                // @ts-ignore
                class VehicleCreateEvent extends org.bukkit.event.vehicle.VehicleEvent implements org.bukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(vehicle: org.bukkit.entity.Vehicle)
                    // @ts-ignore
                    isCancelled(): boolean
                    // @ts-ignore
                    setCancelled(cancelled: boolean): void
                    // @ts-ignore
                    getHandlers(): org.bukkit.event.HandlerList
                    // @ts-ignore
                    getHandlerList(): org.bukkit.event.HandlerList
                }
            }
        }
    }
}
