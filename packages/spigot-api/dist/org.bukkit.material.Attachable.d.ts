declare namespace org {
    namespace bukkit {
        namespace material {
            /**
             * Indicates that a block can be attached to another block
             */
            // @ts-ignore
            interface Attachable extends org.bukkit.material.Directional {
                /**
                 * Gets the face that this block is attached on
                 * @return BlockFace attached to
                 */
                // @ts-ignore
                getAttachedFace(): org.bukkit.block.BlockFace
            }
        }
    }
}
