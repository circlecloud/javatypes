declare namespace cn {
    namespace nukkit {
        namespace level {
            namespace particle {
                /**
                 * Created on 2015/12/27 by xtypr.
                 * Package cn.nukkit.level.particle in project Nukkit .
                 * The name "spell" comes from minecraft wiki.
                 */
                // @ts-ignore
                class SpellParticle extends cn.nukkit.level.particle.Particle {
                    // @ts-ignore
                    constructor(pos: cn.nukkit.math.Vector3)
                    // @ts-ignore
                    constructor(pos: cn.nukkit.math.Vector3, data: number /*int*/)
                    // @ts-ignore
                    constructor(pos: cn.nukkit.math.Vector3, blockColor: cn.nukkit.utils.BlockColor)
                    // @ts-ignore
                    constructor(pos: cn.nukkit.math.Vector3, r: number /*int*/, g: number /*int*/, b: number /*int*/)
                    // @ts-ignore
                    constructor(pos: cn.nukkit.math.Vector3, r: number /*int*/, g: number /*int*/, b: number /*int*/, a: number /*int*/)
                    // @ts-ignore
                    readonly data: number /*int*/
                    // @ts-ignore
                    public encode(): cn.nukkit.network.protocol.DataPacket[]
                }
            }
        }
    }
}
