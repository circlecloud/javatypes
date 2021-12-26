declare namespace org {
    namespace bukkit {
        namespace material {
            // @ts-ignore
            interface Directional {
                /**
                 * Sets the direction that this block is facing in
                 * @param face The facing direction
                 */
                // @ts-ignore
                setFacingDirection(face: org.bukkit.block.BlockFace): void
                /**
                 * Gets the direction this block is facing
                 * @return the direction this block is facing
                 */
                // @ts-ignore
                getFacing(): org.bukkit.block.BlockFace
            }
        }
    }
}
