declare namespace cn {
    namespace nukkit {
        namespace network {
            namespace protocol {
                /**
                 * @author Nukkit Project Team
                 */
                // @ts-ignore
                class AdventureSettingsPacket extends cn.nukkit.network.protocol.DataPacket {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public static readonly NETWORK_ID: number /*byte*/
                    // @ts-ignore
                    public static readonly PERMISSION_NORMAL: number /*int*/
                    // @ts-ignore
                    public static readonly PERMISSION_OPERATOR: number /*int*/
                    // @ts-ignore
                    public static readonly PERMISSION_HOST: number /*int*/
                    // @ts-ignore
                    public static readonly PERMISSION_AUTOMATION: number /*int*/
                    // @ts-ignore
                    public static readonly PERMISSION_ADMIN: number /*int*/
                    /**
                     * This constant is used to identify flags that should be set on the second field. In a sensible world, these
                     * flags would all be set on the same packet field, but as of MCPE 1.2, the new abilities flags have for some
                     * reason been assigned a separate field.
                     */
                    // @ts-ignore
                    public static readonly BITFLAG_SECOND_SET: number /*int*/
                    // @ts-ignore
                    public static readonly WORLD_IMMUTABLE: number /*int*/
                    // @ts-ignore
                    public static readonly NO_PVP: number /*int*/
                    // @ts-ignore
                    public static readonly AUTO_JUMP: number /*int*/
                    // @ts-ignore
                    public static readonly ALLOW_FLIGHT: number /*int*/
                    // @ts-ignore
                    public static readonly NO_CLIP: number /*int*/
                    // @ts-ignore
                    public static readonly WORLD_BUILDER: number /*int*/
                    // @ts-ignore
                    public static readonly FLYING: number /*int*/
                    // @ts-ignore
                    public static readonly MUTED: number /*int*/
                    // @ts-ignore
                    public static readonly BUILD_AND_MINE: number /*int*/
                    // @ts-ignore
                    public static readonly DOORS_AND_SWITCHES: number /*int*/
                    // @ts-ignore
                    public static readonly OPEN_CONTAINERS: number /*int*/
                    // @ts-ignore
                    public static readonly ATTACK_PLAYERS: number /*int*/
                    // @ts-ignore
                    public static readonly ATTACK_MOBS: number /*int*/
                    // @ts-ignore
                    public static readonly OPERATOR: number /*int*/
                    // @ts-ignore
                    public static readonly TELEPORT: number /*int*/
                    // @ts-ignore
                    public flags: number /*long*/
                    // @ts-ignore
                    public commandPermission: number /*long*/
                    // @ts-ignore
                    public flags2: number /*long*/
                    // @ts-ignore
                    public playerPermission: number /*long*/
                    // @ts-ignore
                    public customFlags: number /*long*/
                    // @ts-ignore
                    public entityUniqueId: number /*long*/
                    // @ts-ignore
                    public decode(): void
                    // @ts-ignore
                    public encode(): void
                    // @ts-ignore
                    public getFlag(flag: number /*int*/): boolean
                    // @ts-ignore
                    public setFlag(flag: number /*int*/, value: boolean): void
                    // @ts-ignore
                    public pid(): number /*byte*/
                }
            }
        }
    }
}
