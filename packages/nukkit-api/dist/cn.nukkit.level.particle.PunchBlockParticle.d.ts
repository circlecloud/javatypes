declare namespace cn {
    namespace nukkit {
        namespace level {
            namespace particle {
                // @ts-ignore
                class PunchBlockParticle extends cn.nukkit.level.particle.Particle {
                    // @ts-ignore
                    constructor(pos: cn.nukkit.math.Vector3, block: cn.nukkit.block.Block, face: cn.nukkit.math.BlockFace)
                    // @ts-ignore
                    constructor(pos: cn.nukkit.math.Vector3, blockId: number /*int*/, blockDamage: number /*int*/, face: cn.nukkit.math.BlockFace)
                    // @ts-ignore
                    readonly data: number /*int*/
                    // @ts-ignore
                    public encode(): cn.nukkit.network.protocol.DataPacket[]
                }
            }
        }
    }
}
