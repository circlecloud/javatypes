declare namespace org {
    namespace bukkit {
        namespace block {
            /**
             * Represents the face of a block
             */
            // @ts-ignore
            class BlockFace extends java.lang.Enum<org.bukkit.block.BlockFace> {
                // @ts-ignore
                values(): org.bukkit.block.BlockFace[]
                // @ts-ignore
                valueOf(name: string): org.bukkit.block.BlockFace
                /**
                 * Get the amount of X-coordinates to modify to get the represented block
                 * @return Amount of X-coordinates to modify
                 */
                // @ts-ignore
                getModX(): int
                /**
                 * Get the amount of Y-coordinates to modify to get the represented block
                 * @return Amount of Y-coordinates to modify
                 */
                // @ts-ignore
                getModY(): int
                /**
                 * Get the amount of Z-coordinates to modify to get the represented block
                 * @return Amount of Z-coordinates to modify
                 */
                // @ts-ignore
                getModZ(): int
                /**
                 * Gets the normal vector corresponding to this block face.
                 * @return the normal vector
                 */
                // @ts-ignore
                getDirection(): org.bukkit.util.Vector
                // @ts-ignore
                getOppositeFace(): org.bukkit.block.BlockFace
            }
        }
    }
}
