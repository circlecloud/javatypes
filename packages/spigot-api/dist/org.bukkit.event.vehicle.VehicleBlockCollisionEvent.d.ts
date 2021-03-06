declare namespace org {
    namespace bukkit {
        namespace event {
            namespace vehicle {
                /**
                 * Raised when a vehicle collides with a block.
                 */
                // @ts-ignore
                class VehicleBlockCollisionEvent extends org.bukkit.event.vehicle.VehicleCollisionEvent {
                    // @ts-ignore
                    constructor(vehicle: org.bukkit.entity.Vehicle, block: org.bukkit.block.Block)
                    /**
                     * Gets the block the vehicle collided with
                     * @return the block the vehicle collided with
                     */
                    // @ts-ignore
                    public getBlock(): org.bukkit.block.Block
                    // @ts-ignore
                    public getHandlers(): org.bukkit.event.HandlerList
                    // @ts-ignore
                    public static getHandlerList(): org.bukkit.event.HandlerList
                }
            }
        }
    }
}
