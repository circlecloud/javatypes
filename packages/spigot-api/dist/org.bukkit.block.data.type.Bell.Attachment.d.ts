declare namespace org {
    namespace bukkit {
        namespace block {
            namespace data {
                namespace type {
                    namespace Bell {
                        /**
                         * What the bell is attached to.
                         */
                        // @ts-ignore
                        class Attachment extends java.lang.Enum<org.bukkit.block.data.type.Bell.Attachment> {
                            /**
                             * Placed on floor.
                             */
                            // @ts-ignore
                            readonly FLOOR: org.bukkit.block.data.type.Bell.Attachment
                            /**
                             * Placed on ceiling.
                             */
                            // @ts-ignore
                            readonly CEILING: org.bukkit.block.data.type.Bell.Attachment
                            /**
                             * Placed on one wall.
                             */
                            // @ts-ignore
                            readonly SINGLE_WALL: org.bukkit.block.data.type.Bell.Attachment
                            /**
                             * Placed between two walls.
                             */
                            // @ts-ignore
                            readonly DOUBLE_WALL: org.bukkit.block.data.type.Bell.Attachment
                            // @ts-ignore
                            values(): org.bukkit.block.data.type.Bell.Attachment[]
                            // @ts-ignore
                            valueOf(name: java.lang.String | string): org.bukkit.block.data.type.Bell.Attachment
                        }
                    }
                }
            }
        }
    }
}
