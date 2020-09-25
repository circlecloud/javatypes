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
                            public static readonly SINGLE: org.bukkit.block.data.type.Chest.Type
                            /**
                             * The chest is the left hand side of a double chest and shares a 54
                             * block inventory with the chest to its right.
                             */
                            // @ts-ignore
                            public static readonly LEFT: org.bukkit.block.data.type.Chest.Type
                            /**
                             * The chest is the right hand side of a double chest and shares a 54
                             * block inventory with the chest to its left.
                             */
                            // @ts-ignore
                            public static readonly RIGHT: org.bukkit.block.data.type.Chest.Type
                            // @ts-ignore
                            public static values(): org.bukkit.block.data.type.Chest.Type[]
                            // @ts-ignore
                            public static valueOf(name: java.lang.String | string): org.bukkit.block.data.type.Chest.Type
                        }
                    }
                }
            }
        }
    }
}
