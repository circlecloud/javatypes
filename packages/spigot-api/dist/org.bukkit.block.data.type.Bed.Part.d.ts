declare namespace org {
    namespace bukkit {
        namespace block {
            namespace data {
                namespace type {
                    namespace Bed {
                        /**
                         * Horizontal half of a bed.
                         */
                        // @ts-ignore
                        class Part extends java.lang.Enum<org.bukkit.block.data.type.Bed.Part> {
                            /**
                             * The head is the upper part of the bed containing the pillow.
                             */
                            // @ts-ignore
                            readonly HEAD: org.bukkit.block.data.type.Bed.Part
                            /**
                             * The foot is the lower half of the bed.
                             */
                            // @ts-ignore
                            readonly FOOT: org.bukkit.block.data.type.Bed.Part
                            // @ts-ignore
                            values(): org.bukkit.block.data.type.Bed.Part[]
                            // @ts-ignore
                            valueOf(name: java.lang.String | string): org.bukkit.block.data.type.Bed.Part
                        }
                    }
                }
            }
        }
    }
}
