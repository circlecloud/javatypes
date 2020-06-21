declare namespace cn {
    namespace nukkit {
        namespace level {
            namespace particle {
                /**
                 * Created on 2015/11/21 by xtypr.
                 * Package cn.nukkit.level.particle in project Nukkit .
                 */
                // @ts-ignore
                class DestroyBlockParticle extends cn.nukkit.level.particle.Particle {
                    // @ts-ignore
                    constructor(pos: cn.nukkit.math.Vector3, block: cn.nukkit.block.Block)
                    // @ts-ignore
                    readonly data: number /*int*/
                    // @ts-ignore
                    public encode(): cn.nukkit.network.protocol.DataPacket[]
                }
            }
        }
    }
}
