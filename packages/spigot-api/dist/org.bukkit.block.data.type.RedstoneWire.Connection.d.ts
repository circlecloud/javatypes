declare namespace org {
    namespace bukkit {
        namespace block {
            namespace data {
                namespace type {
                    namespace RedstoneWire {
                        /**
                         * The way in which a redstone wire can connect to an adjacent block face.
                         */
                        // @ts-ignore
                        class Connection extends java.lang.Enum<org.bukkit.block.data.type.RedstoneWire.Connection> {
                            /**
                             * The wire travels up the side of the block adjacent to this face.
                             */
                            // @ts-ignore
                            readonly UP: org.bukkit.block.data.type.RedstoneWire.Connection
                            /**
                             * The wire travels flat from this face and into the adjacent block.
                             */
                            // @ts-ignore
                            readonly SIDE: org.bukkit.block.data.type.RedstoneWire.Connection
                            /**
                             * The wire does not connect in this direction.
                             */
                            // @ts-ignore
                            readonly NONE: org.bukkit.block.data.type.RedstoneWire.Connection
                            // @ts-ignore
                            values(): org.bukkit.block.data.type.RedstoneWire.Connection[]
                            // @ts-ignore
                            valueOf(name: java.lang.String | string): org.bukkit.block.data.type.RedstoneWire.Connection
                        }
                    }
                }
            }
        }
    }
}
