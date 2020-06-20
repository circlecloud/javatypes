declare namespace org {
    namespace bukkit {
        namespace event {
            namespace vehicle {
                /**
                 * Raised when a vehicle moves.
                 */
                // @ts-ignore
                class VehicleMoveEvent extends org.bukkit.event.vehicle.VehicleEvent {
                    // @ts-ignore
                    constructor(vehicle: org.bukkit.entity.Vehicle, from: org.bukkit.Location, to: org.bukkit.Location)
                    /**
                     * Get the previous position.
                     * @return Old position.
                     */
                    // @ts-ignore
                    getFrom(): org.bukkit.Location
                    /**
                     * Get the next position.
                     * @return New position.
                     */
                    // @ts-ignore
                    getTo(): org.bukkit.Location
                    // @ts-ignore
                    getHandlers(): org.bukkit.event.HandlerList
                    // @ts-ignore
                    getHandlerList(): org.bukkit.event.HandlerList
                }
            }
        }
    }
}
