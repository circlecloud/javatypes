declare namespace org {
    namespace bukkit {
        namespace material {
            /**
             * Represents stairs.
             * @deprecated all usage of MaterialData is deprecated and subject to removal.
             *  Use {#link org.bukkit.block.data.BlockData}.
             */
            // @ts-ignore
            class Stairs extends org.bukkit.material.MaterialData implements org.bukkit.material.Directional {
                // @ts-ignore
                constructor(type: org.bukkit.Material)
                /**
                 * @param type the type
                 * @param data the raw data value
                 * @deprecated Magic value
                 */
                // @ts-ignore
                constructor(type: org.bukkit.Material, data: number /*byte*/)
                /**
                 * @return the direction the stairs ascend towards
                 */
                // @ts-ignore
                getAscendingDirection(): org.bukkit.block.BlockFace
                /**
                 * @return the direction the stairs descend towards
                 */
                // @ts-ignore
                getDescendingDirection(): org.bukkit.block.BlockFace
                /**
                 * Set the direction the stair part of the block is facing
                 */
                // @ts-ignore
                setFacingDirection(face: org.bukkit.block.BlockFace): void
                /**
                 * @return the direction the stair part of the block is facing
                 */
                // @ts-ignore
                getFacing(): org.bukkit.block.BlockFace
                /**
                 * Test if step is inverted
                 * @return true if inverted (top half), false if normal (bottom half)
                 */
                // @ts-ignore
                isInverted(): boolean
                /**
                 * Set step inverted state
                 * @param inv - true if step is inverted (top half), false if step is
                 *      normal (bottom half)
                 */
                // @ts-ignore
                setInverted(inv: boolean): void
                // @ts-ignore
                toString(): java.lang.String
                // @ts-ignore
                clone(): org.bukkit.material.Stairs
            }
        }
    }
}
