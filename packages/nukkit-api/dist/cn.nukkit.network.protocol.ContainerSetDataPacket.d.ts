declare namespace cn {
    namespace nukkit {
        namespace network {
            namespace protocol {
                /**
                 * author: MagicDroidX
                 * Nukkit Project
                 */
                // @ts-ignore
                class ContainerSetDataPacket extends cn.nukkit.network.protocol.DataPacket {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public static readonly NETWORK_ID: number /*byte*/
                    // @ts-ignore
                    public static readonly PROPERTY_FURNACE_TICK_COUNT: number /*int*/
                    // @ts-ignore
                    public static readonly PROPERTY_FURNACE_LIT_TIME: number /*int*/
                    // @ts-ignore
                    public static readonly PROPERTY_FURNACE_LIT_DURATION: number /*int*/
                    // @ts-ignore
                    public static readonly PROPERTY_FURNACE_FUEL_AUX: number /*int*/
                    // @ts-ignore
                    public static readonly PROPERTY_BREWING_STAND_BREW_TIME: number /*int*/
                    // @ts-ignore
                    public static readonly PROPERTY_BREWING_STAND_FUEL_AMOUNT: number /*int*/
                    // @ts-ignore
                    public static readonly PROPERTY_BREWING_STAND_FUEL_TOTAL: number /*int*/
                    // @ts-ignore
                    public windowId: number /*int*/
                    // @ts-ignore
                    public property: number /*int*/
                    // @ts-ignore
                    public value: number /*int*/
                    // @ts-ignore
                    public pid(): number /*byte*/
                    // @ts-ignore
                    public decode(): void
                    // @ts-ignore
                    public encode(): void
                }
            }
        }
    }
}
