declare namespace org {
    namespace bukkit {
        namespace block {
            namespace data {
                namespace type {
                    namespace Chest {
                        /**
                         * Type of this chest block.
                         * <br>
                         * NB: Left and right are relative to the chest itself, i.e opposite to what
                         * a player placing the appropriate block would see.
                         */
                        // @ts-ignore
                        class Type extends java.lang.Enum<org.bukkit.block.data.type.Chest.Type> {
                            // @ts-ignore
                            values(): org.bukkit.block.data.type.Chest.Type[]
                            // @ts-ignore
                            valueOf(name: string): org.bukkit.block.data.type.Chest.Type
                        }
                    }
                }
            }
        }
    }
}
