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
                            readonly STRAIGHT: org.bukkit.block.data.type.Stairs.Shape
                            /**
                             * Inner corner stair block with higher left side.
                             */
                            // @ts-ignore
                            readonly INNER_LEFT: org.bukkit.block.data.type.Stairs.Shape
                            /**
                             * Inner corner stair block with higher right side.
                             */
                            // @ts-ignore
                            readonly INNER_RIGHT: org.bukkit.block.data.type.Stairs.Shape
                            /**
                             * Outer corner stair block with higher left side.
                             */
                            // @ts-ignore
                            readonly OUTER_LEFT: org.bukkit.block.data.type.Stairs.Shape
                            /**
                             * Outer corner stair block with higher right side.
                             */
                            // @ts-ignore
                            readonly OUTER_RIGHT: org.bukkit.block.data.type.Stairs.Shape
                            // @ts-ignore
                            values(): org.bukkit.block.data.type.Stairs.Shape[]
                            // @ts-ignore
                            valueOf(name: java.lang.String | string): org.bukkit.block.data.type.Stairs.Shape
                        }
                    }
                }
            }
        }
    }
}
