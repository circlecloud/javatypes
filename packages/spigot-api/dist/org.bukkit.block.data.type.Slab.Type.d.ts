declare namespace org {
    namespace bukkit {
        namespace block {
            namespace data {
                namespace type {
                    namespace Slab {
                        /**
                         * The type of the slab.
                         */
                        // @ts-ignore
                        class Type extends java.lang.Enum<org.bukkit.block.data.type.Slab.Type> {
                            /**
                             * The slab occupies the upper y half of the block.
                             */
                            // @ts-ignore
                            readonly TOP: org.bukkit.block.data.type.Slab.Type
                            /**
                             * The slab occupies the lower y half of the block.
                             */
                            // @ts-ignore
                            readonly BOTTOM: org.bukkit.block.data.type.Slab.Type
                            /**
                             * The slab occupies the entire block.
                             */
                            // @ts-ignore
                            readonly DOUBLE: org.bukkit.block.data.type.Slab.Type
                            // @ts-ignore
                            values(): org.bukkit.block.data.type.Slab.Type[]
                            // @ts-ignore
                            valueOf(name: java.lang.String | string): org.bukkit.block.data.type.Slab.Type
                        }
                    }
                }
            }
        }
    }
}
