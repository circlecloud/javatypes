declare namespace cn {
    namespace nukkit {
        namespace level {
            /**
             * author: MagicDroidX
             * Nukkit Project
             */
            // @ts-ignore
            class MovingObjectPosition extends java.lang.Object {
                // @ts-ignore
                constructor()
                /**
                 * 0 = block, 1 = entity
                 */
                // @ts-ignore
                public typeOfHit: number /*int*/
                // @ts-ignore
                public blockX: number /*int*/
                // @ts-ignore
                public blockY: number /*int*/
                // @ts-ignore
                public blockZ: number /*int*/
                /**
                 * Which side was hit. If its -1 then it went the full length of the ray trace.
                 * Bottom = 0, Top = 1, East = 2, West = 3, North = 4, South = 5.
                 */
                // @ts-ignore
                public sideHit: number /*int*/
                // @ts-ignore
                public hitVector: cn.nukkit.math.Vector3
                // @ts-ignore
                public entityHit: cn.nukkit.entity.Entity
                // @ts-ignore
                public static fromBlock(x: number /*int*/, y: number /*int*/, z: number /*int*/, side: number /*int*/, hitVector: cn.nukkit.math.Vector3): cn.nukkit.level.MovingObjectPosition
                // @ts-ignore
                public static fromEntity(entity: cn.nukkit.entity.Entity): cn.nukkit.level.MovingObjectPosition
            }
        }
    }
}
