declare namespace org {
    namespace bukkit {
        namespace block {
            namespace data {
                namespace type {
                    namespace Stairs {
                        /**
                         * The shape of a stair block - used for constructing corners.
                         */
                        // @ts-ignore
                        class Shape extends java.lang.Enum<org.bukkit.block.data.type.Stairs.Shape> {
                            /**
                             * Regular stair block.
                             */
                            // @ts-ignore
                            public static readonly STRAIGHT: org.bukkit.block.data.type.Stairs.Shape
                            /**
                             * Inner corner stair block with higher left side.
                             */
                            // @ts-ignore
                            public static readonly INNER_LEFT: org.bukkit.block.data.type.Stairs.Shape
                            /**
                             * Inner corner stair block with higher right side.
                             */
                            // @ts-ignore
                            public static readonly INNER_RIGHT: org.bukkit.block.data.type.Stairs.Shape
                            /**
                             * Outer corner stair block with higher left side.
                             */
                            // @ts-ignore
                            public static readonly OUTER_LEFT: org.bukkit.block.data.type.Stairs.Shape
                            /**
                             * Outer corner stair block with higher right side.
                             */
                            // @ts-ignore
                            public static readonly OUTER_RIGHT: org.bukkit.block.data.type.Stairs.Shape
                            // @ts-ignore
                            public static values(): org.bukkit.block.data.type.Stairs.Shape[]
                            // @ts-ignore
                            public static valueOf(name: java.lang.String | string): org.bukkit.block.data.type.Stairs.Shape
                        }
                    }
                }
            }
        }
    }
}
