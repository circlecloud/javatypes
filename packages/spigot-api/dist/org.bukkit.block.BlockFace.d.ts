declare namespace org {
    namespace bukkit {
        namespace block {
            /**
             * Represents the face of a block
             */
            // @ts-ignore
            class BlockFace extends java.lang.Enum<org.bukkit.block.BlockFace> {
                // @ts-ignore
                readonly NORTH: org.bukkit.block.BlockFace
                // @ts-ignore
                readonly EAST: org.bukkit.block.BlockFace
                // @ts-ignore
                readonly SOUTH: org.bukkit.block.BlockFace
                // @ts-ignore
                readonly WEST: org.bukkit.block.BlockFace
                // @ts-ignore
                readonly UP: org.bukkit.block.BlockFace
                // @ts-ignore
                readonly DOWN: org.bukkit.block.BlockFace
                // @ts-ignore
                readonly NORTH_EAST: org.bukkit.block.BlockFace
                // @ts-ignore
                readonly NORTH_WEST: org.bukkit.block.BlockFace
                // @ts-ignore
                readonly SOUTH_EAST: org.bukkit.block.BlockFace
                // @ts-ignore
                readonly SOUTH_WEST: org.bukkit.block.BlockFace
                // @ts-ignore
                readonly WEST_NORTH_WEST: org.bukkit.block.BlockFace
                // @ts-ignore
                readonly NORTH_NORTH_WEST: org.bukkit.block.BlockFace
                // @ts-ignore
                readonly NORTH_NORTH_EAST: org.bukkit.block.BlockFace
                // @ts-ignore
                readonly EAST_NORTH_EAST: org.bukkit.block.BlockFace
                // @ts-ignore
                readonly EAST_SOUTH_EAST: org.bukkit.block.BlockFace
                // @ts-ignore
                readonly SOUTH_SOUTH_EAST: org.bukkit.block.BlockFace
                // @ts-ignore
                readonly SOUTH_SOUTH_WEST: org.bukkit.block.BlockFace
                // @ts-ignore
                readonly WEST_SOUTH_WEST: org.bukkit.block.BlockFace
                // @ts-ignore
                readonly SELF: org.bukkit.block.BlockFace
                // @ts-ignore
                values(): org.bukkit.block.BlockFace[]
                // @ts-ignore
                valueOf(name: java.lang.String | string): org.bukkit.block.BlockFace
                /**
                 * Get the amount of X-coordinates to modify to get the represented block
                 * @return Amount of X-coordinates to modify
                 */
                // @ts-ignore
                getModX(): number /*int*/
                /**
                 * Get the amount of Y-coordinates to modify to get the represented block
                 * @return Amount of Y-coordinates to modify
                 */
                // @ts-ignore
                getModY(): number /*int*/
                /**
                 * Get the amount of Z-coordinates to modify to get the represented block
                 * @return Amount of Z-coordinates to modify
                 */
                // @ts-ignore
                getModZ(): number /*int*/
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
