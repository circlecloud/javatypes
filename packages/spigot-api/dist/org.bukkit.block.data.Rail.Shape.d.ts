declare namespace org {
    namespace bukkit {
        namespace block {
            namespace data {
                namespace Rail {
                    /**
                     * The different types of shapes a rail block can occupy.
                     */
                    // @ts-ignore
                    class Shape extends java.lang.Enum<org.bukkit.block.data.Rail.Shape> {
                        /**
                         * The rail runs flat along the north/south (Z) axis.
                         */
                        // @ts-ignore
                        public static readonly NORTH_SOUTH: org.bukkit.block.data.Rail.Shape
                        /**
                         * The rail runs flat along the east/west (X) axis.
                         */
                        // @ts-ignore
                        public static readonly EAST_WEST: org.bukkit.block.data.Rail.Shape
                        /**
                         * The rail ascends in the east (positive X) direction.
                         */
                        // @ts-ignore
                        public static readonly ASCENDING_EAST: org.bukkit.block.data.Rail.Shape
                        /**
                         * The rail ascends in the west (negative X) direction.
                         */
                        // @ts-ignore
                        public static readonly ASCENDING_WEST: org.bukkit.block.data.Rail.Shape
                        /**
                         * The rail ascends in the north (negative Z) direction.
                         */
                        // @ts-ignore
                        public static readonly ASCENDING_NORTH: org.bukkit.block.data.Rail.Shape
                        /**
                         * The rail ascends in the south (positive Z) direction.
                         */
                        // @ts-ignore
                        public static readonly ASCENDING_SOUTH: org.bukkit.block.data.Rail.Shape
                        /**
                         * The rail forms a curve connecting the south and east faces of the
                         * block.
                         */
                        // @ts-ignore
                        public static readonly SOUTH_EAST: org.bukkit.block.data.Rail.Shape
                        /**
                         * The rail forms a curve connecting the south and west faces of the
                         * block.
                         */
                        // @ts-ignore
                        public static readonly SOUTH_WEST: org.bukkit.block.data.Rail.Shape
                        /**
                         * The rail forms a curve connecting the north and west faces of the
                         * block.
                         */
                        // @ts-ignore
                        public static readonly NORTH_WEST: org.bukkit.block.data.Rail.Shape
                        /**
                         * The rail forms a curve connecting the north and east faces of the
                         * block.
                         */
                        // @ts-ignore
                        public static readonly NORTH_EAST: org.bukkit.block.data.Rail.Shape
                        // @ts-ignore
                        public static values(): org.bukkit.block.data.Rail.Shape[]
                        // @ts-ignore
                        public static valueOf(name: java.lang.String | string): org.bukkit.block.data.Rail.Shape
                    }
                }
            }
        }
    }
}
