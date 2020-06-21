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
                            /**
                             * The chest is not linked to any others and contains only one 27 slot
                             * inventory.
                             */
                            // @ts-ignore
                            readonly SINGLE: org.bukkit.block.data.type.Chest.Type
                            /**
                             * The chest is the left hand side of a double chest and shares a 54
                             * block inventory with the chest to its right.
                             */
                            // @ts-ignore
                            readonly LEFT: org.bukkit.block.data.type.Chest.Type
                            /**
                             * The chest is the right hand side of a double chest and shares a 54
                             * block inventory with the chest to its left.
                             */
                            // @ts-ignore
                            readonly RIGHT: org.bukkit.block.data.type.Chest.Type
                            // @ts-ignore
                            values(): org.bukkit.block.data.type.Chest.Type[]
                            // @ts-ignore
                            valueOf(name: java.lang.String | string): org.bukkit.block.data.type.Chest.Type
                        }
                    }
                }
            }
        }
    }
}
