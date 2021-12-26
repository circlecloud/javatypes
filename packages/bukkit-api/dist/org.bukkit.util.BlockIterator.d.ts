declare namespace org {
    namespace bukkit {
        namespace util {
            /**
             * This class performs ray tracing and iterates along blocks on a line
             */
            // @ts-ignore
            class BlockIterator extends java.lang.Object implements java.util.Iterator<org.bukkit.block.Block> {
                /**
                 * Constructs the BlockIterator.
                 * <p>
                 * This considers all blocks as 1x1x1 in size.
                 * @param world The world to use for tracing
                 * @param start A Vector giving the initial location for the trace
                 * @param direction A Vector pointing in the direction for the trace
                 * @param yOffset The trace begins vertically offset from the start vector
                 *      by this value
                 * @param maxDistance This is the maximum distance in blocks for the
                 *      trace. Setting this value above 140 may lead to problems with
                 *      unloaded chunks. A value of 0 indicates no limit
                 */
                // @ts-ignore
                constructor(world: org.bukkit.World, start: org.bukkit.util.Vector, direction: org.bukkit.util.Vector, yOffset: number /*double*/, maxDistance: number /*int*/)
                /**
                 * Constructs the BlockIterator.
                 * <p>
                 * This considers all blocks as 1x1x1 in size.
                 * @param loc The location for the start of the ray trace
                 * @param yOffset The trace begins vertically offset from the start vector
                 *      by this value
                 * @param maxDistance This is the maximum distance in blocks for the
                 *      trace. Setting this value above 140 may lead to problems with
                 *      unloaded chunks. A value of 0 indicates no limit
                 */
                // @ts-ignore
                constructor(loc: org.bukkit.Location, yOffset: number /*double*/, maxDistance: number /*int*/)
                /**
                 * Constructs the BlockIterator.
                 * <p>
                 * This considers all blocks as 1x1x1 in size.
                 * @param loc The location for the start of the ray trace
                 * @param yOffset The trace begins vertically offset from the start vector
                 *      by this value
                 */
                // @ts-ignore
                constructor(loc: org.bukkit.Location, yOffset: number /*double*/)
                /**
                 * Constructs the BlockIterator.
                 * <p>
                 * This considers all blocks as 1x1x1 in size.
                 * @param loc The location for the start of the ray trace
                 */
                // @ts-ignore
                constructor(loc: org.bukkit.Location)
                /**
                 * Constructs the BlockIterator.
                 * <p>
                 * This considers all blocks as 1x1x1 in size.
                 * @param entity Information from the entity is used to set up the trace
                 * @param maxDistance This is the maximum distance in blocks for the
                 *      trace. Setting this value above 140 may lead to problems with
                 *      unloaded chunks. A value of 0 indicates no limit
                 */
                // @ts-ignore
                constructor(entity: org.bukkit.entity.LivingEntity, maxDistance: number /*int*/)
                /**
                 * Constructs the BlockIterator.
                 * <p>
                 * This considers all blocks as 1x1x1 in size.
                 * @param entity Information from the entity is used to set up the trace
                 */
                // @ts-ignore
                constructor(entity: org.bukkit.entity.LivingEntity)
                /**
                 * Returns true if the iteration has more elements
                 */
                // @ts-ignore
                public hasNext(): boolean
                /**
                 * Returns the next Block in the trace
                 * @return the next Block in the trace
                 */
                // @ts-ignore
                public next(): org.bukkit.block.Block
                // @ts-ignore
                public remove(): void
            }
        }
    }
}
