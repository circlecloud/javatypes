declare namespace org {
    namespace bukkit {
        namespace block {
            namespace data {
                namespace type {
                    namespace TechnicalPiston {
                        /**
                         * Different piston variants.
                         */
                        // @ts-ignore
                        class Type extends java.lang.Enum<org.bukkit.block.data.type.TechnicalPiston.Type> {
                            /**
                             * A normal piston which does not pull connected blocks backwards on
                             * retraction.
                             */
                            // @ts-ignore
                            readonly NORMAL: org.bukkit.block.data.type.TechnicalPiston.Type
                            /**
                             * A sticky piston which will also retract connected blocks.
                             */
                            // @ts-ignore
                            readonly STICKY: org.bukkit.block.data.type.TechnicalPiston.Type
                            // @ts-ignore
                            values(): org.bukkit.block.data.type.TechnicalPiston.Type[]
                            // @ts-ignore
                            valueOf(name: java.lang.String | string): org.bukkit.block.data.type.TechnicalPiston.Type
                        }
                    }
                }
            }
        }
    }
}
