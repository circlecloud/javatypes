declare namespace org {
    namespace bukkit {
        namespace event {
            namespace vehicle {
                /**
                 * Raised when a vehicle receives damage.
                 */
                // @ts-ignore
                class VehicleDamageEvent extends org.bukkit.event.vehicle.VehicleEvent implements org.bukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(vehicle: org.bukkit.entity.Vehicle, attacker: org.bukkit.entity.Entity, damage: number /*double*/)
                    /**
                     * Gets the Entity that is attacking the vehicle
                     * @return the Entity that is attacking the vehicle
                     */
                    // @ts-ignore
                    getAttacker(): org.bukkit.entity.Entity
                    /**
                     * Gets the damage done to the vehicle
                     * @return the damage done to the vehicle
                     */
                    // @ts-ignore
                    getDamage(): double
                    /**
                     * Sets the damage done to the vehicle
                     * @param damage The damage
                     */
                    // @ts-ignore
                    setDamage(damage: number /*double*/): void
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
