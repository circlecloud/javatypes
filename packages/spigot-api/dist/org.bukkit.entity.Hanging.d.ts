declare namespace org {
    namespace bukkit {
        namespace entity {
            /**
             * Represents a Hanging entity
             */
            // @ts-ignore
            interface Hanging extends org.bukkit.entity.Entity, org.bukkit.material.Attachable {
                /**
                 * Sets the direction of the hanging entity, potentially overriding rules
                 * of placement. Note that if the result is not valid the object would
                 * normally drop as an item.
                 * @param face The new direction.
                 * @param force Whether to force it.
                 * @return False if force was false and there was no block for it to
                 *      attach to in order to face the given direction.
                 */
                // @ts-ignore
                setFacingDirection(face: org.bukkit.block.BlockFace, force: boolean): boolean
            }
        }
    }
}
