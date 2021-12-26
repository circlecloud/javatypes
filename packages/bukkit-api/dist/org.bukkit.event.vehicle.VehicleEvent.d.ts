declare namespace org {
    namespace bukkit {
        namespace event {
            namespace vehicle {
                /**
                 * Represents a vehicle-related event.
                 */
                // @ts-ignore
                abstract class VehicleEvent extends org.bukkit.event.Event {
                    // @ts-ignore
                    constructor(vehicle: org.bukkit.entity.Vehicle)
                    // @ts-ignore
                    vehicle: org.bukkit.entity.Vehicle
                    /**
                     * Get the vehicle.
                     * @return the vehicle
                     */
                    // @ts-ignore
                    public getVehicle(): org.bukkit.entity.Vehicle
                }
            }
        }
    }
}
