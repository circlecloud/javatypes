declare namespace cn {
    namespace nukkit {
        namespace network {
            namespace protocol {
                /**
                 * @author Nukkit Project Team
                 */
                // @ts-ignore
                class SetSpawnPositionPacket extends cn.nukkit.network.protocol.DataPacket {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public static readonly NETWORK_ID: number /*byte*/
                    // @ts-ignore
                    public static readonly TYPE_PLAYER_SPAWN: number /*int*/
                    // @ts-ignore
                    public static readonly TYPE_WORLD_SPAWN: number /*int*/
                    // @ts-ignore
                    public spawnType: number /*int*/
                    // @ts-ignore
                    public y: number /*int*/
                    // @ts-ignore
                    public z: number /*int*/
                    // @ts-ignore
                    public x: number /*int*/
                    // @ts-ignore
                    public spawnForced: boolean
                    // @ts-ignore
                    public decode(): void
                    // @ts-ignore
                    public encode(): void
                    // @ts-ignore
                    public pid(): number /*byte*/
                }
            }
        }
    }
}
