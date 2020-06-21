declare namespace cn {
    namespace nukkit {
        namespace level {
            namespace particle {
                /**
                 * Created on 2015/11/21 by xtypr.
                 * Package cn.nukkit.level.particle in project Nukkit .
                 */
                // @ts-ignore
                class MobSpawnParticle extends cn.nukkit.level.particle.Particle {
                    // @ts-ignore
                    constructor(pos: cn.nukkit.math.Vector3, width: number /*float*/, height: number /*float*/)
                    // @ts-ignore
                    readonly width: number /*int*/
                    // @ts-ignore
                    readonly height: number /*int*/
                    // @ts-ignore
                    public encode(): cn.nukkit.network.protocol.DataPacket[]
                }
            }
        }
    }
}
