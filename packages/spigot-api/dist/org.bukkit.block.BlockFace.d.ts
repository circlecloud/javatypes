declare namespace org {
    namespace bukkit {
        namespace block {
            /**
             * Represents the face of a block
             */
            // @ts-ignore
            class BlockFace extends java.lang.Enum<org.bukkit.block.BlockFace> {
                // @ts-ignore
                public static readonly NORTH: org.bukkit.block.BlockFace
                // @ts-ignore
                public static readonly EAST: org.bukkit.block.BlockFace
                // @ts-ignore
                public static readonly SOUTH: org.bukkit.block.BlockFace
                // @ts-ignore
                public static readonly WEST: org.bukkit.block.BlockFace
                // @ts-ignore
                public static readonly UP: org.bukkit.block.BlockFace
                // @ts-ignore
                public static readonly DOWN: org.bukkit.block.BlockFace
                // @ts-ignore
                public static readonly NORTH_EAST: org.bukkit.block.BlockFace
                // @ts-ignore
                public static readonly NORTH_WEST: org.bukkit.block.BlockFace
                // @ts-ignore
                public static readonly SOUTH_EAST: org.bukkit.block.BlockFace
                // @ts-ignore
                public static readonly SOUTH_WEST: org.bukkit.block.BlockFace
                // @ts-ignore
                public static readonly WEST_NORTH_WEST: org.bukkit.block.BlockFace
                // @ts-ignore
                public static readonly NORTH_NORTH_WEST: org.bukkit.block.BlockFace
                // @ts-ignore
                public static readonly NORTH_NORTH_EAST: org.bukkit.block.BlockFace
                // @ts-ignore
                public static readonly EAST_NORTH_EAST: org.bukkit.block.BlockFace
                // @ts-ignore
                public static readonly EAST_SOUTH_EAST: org.bukkit.block.BlockFace
                // @ts-ignore
                public static readonly SOUTH_SOUTH_EAST: org.bukkit.block.BlockFace
                // @ts-ignore
                public static readonly SOUTH_SOUTH_WEST: org.bukkit.block.BlockFace
                // @ts-ignore
                public static readonly WEST_SOUTH_WEST: org.bukkit.block.BlockFace
                // @ts-ignore
                public static readonly SELF: org.bukkit.block.BlockFace
                // @ts-ignore
                public static values(): org.bukkit.block.BlockFace[]
                // @ts-ignore
                public static valueOf(name: java.lang.String | string): org.bukkit.block.BlockFace
                /**
                 * Get the amount of X-coordinates to modify to get the represented block
                 * @return Amount of X-coordinates to modify
                 */
                // @ts-ignore
                public getModX(): number /*int*/
                /**
                 * Get the amount of Y-coordinates to modify to get the represented block
                 * @return Amount of Y-coordinates to modify
                 */
                // @ts-ignore
                public getModY(): number /*int*/
                /**
                 * Get the amount of Z-coordinates to modify to get the represented block
                 * @return Amount of Z-coordinates to modify
                 */
                // @ts-ignore
                public getModZ(): number /*int*/
                /**
                 * Gets the normal vector corresponding to this block face.
                 * @return the normal vector
                 */
                // @ts-ignore
                public getDirection(): org.bukkit.util.Vector
                // @ts-ignore
                public getOppositeFace(): org.bukkit.block.BlockFace
            }
        }
    }
}
