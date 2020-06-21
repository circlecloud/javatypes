declare namespace org {
    namespace bukkit {
        namespace util {
            /**
             * The hit result of a ray trace.
             * <p>
             * Only the hit position is guaranteed to always be available. The availability
             * of the other attributes depends on what got hit and on the context in which
             * the ray trace was performed.
             */
            // @ts-ignore
            class RayTraceResult extends java.lang.Object {
                /**
                 * Creates a RayTraceResult.
                 * @param hitPosition the hit position
                 */
                // @ts-ignore
                constructor(hitPosition: org.bukkit.util.Vector)
                /**
                 * Creates a RayTraceResult.
                 * @param hitPosition the hit position
                 * @param hitBlockFace the hit block face
                 */
                // @ts-ignore
                constructor(hitPosition: org.bukkit.util.Vector, hitBlockFace: org.bukkit.block.BlockFace)
                /**
                 * Creates a RayTraceResult.
                 * @param hitPosition the hit position
                 * @param hitBlock the hit block
                 * @param hitBlockFace the hit block face
                 */
                // @ts-ignore
                constructor(hitPosition: org.bukkit.util.Vector, hitBlock: org.bukkit.block.Block, hitBlockFace: org.bukkit.block.BlockFace)
                /**
                 * Creates a RayTraceResult.
                 * @param hitPosition the hit position
                 * @param hitEntity the hit entity
                 */
                // @ts-ignore
                constructor(hitPosition: org.bukkit.util.Vector, hitEntity: org.bukkit.entity.Entity)
                /**
                 * Creates a RayTraceResult.
                 * @param hitPosition the hit position
                 * @param hitEntity the hit entity
                 * @param hitBlockFace the hit block face
                 */
                // @ts-ignore
                constructor(hitPosition: org.bukkit.util.Vector, hitEntity: org.bukkit.entity.Entity, hitBlockFace: org.bukkit.block.BlockFace)
                /**
                 * Gets the exact position of the hit.
                 * @return a copy of the exact hit position
                 */
                // @ts-ignore
                public getHitPosition(): org.bukkit.util.Vector
                /**
                 * Gets the hit block.
                 * @return the hit block, or <code>null</code> if not available
                 */
                // @ts-ignore
                public getHitBlock(): org.bukkit.block.Block
                /**
                 * Gets the hit block face.
                 * @return the hit block face, or <code>null</code> if not available
                 */
                // @ts-ignore
                public getHitBlockFace(): org.bukkit.block.BlockFace
                /**
                 * Gets the hit entity.
                 * @return the hit entity, or <code>null</code> if not available
                 */
                // @ts-ignore
                public getHitEntity(): org.bukkit.entity.Entity
                // @ts-ignore
                public hashCode(): number /*int*/
                // @ts-ignore
                public equals(obj: java.lang.Object | any): boolean
                // @ts-ignore
                public toString(): string
            }
        }
    }
}
