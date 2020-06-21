declare namespace cn {
    namespace nukkit {
        namespace event {
            namespace vehicle {
                /**
                 * Created by larryTheCoder at 7/5/2017.
                 * <p>
                 * Nukkit Project
                 */
                // @ts-ignore
                abstract class VehicleEvent extends cn.nukkit.event.Event {
                    // @ts-ignore
                    constructor(vehicle: cn.nukkit.entity.Entity)
                    // @ts-ignore
                    public getVehicle(): cn.nukkit.entity.Entity
                }
            }
        }
    }
}
