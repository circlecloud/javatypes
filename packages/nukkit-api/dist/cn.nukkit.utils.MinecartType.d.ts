declare namespace cn {
    namespace nukkit {
        namespace utils {
            /**
             * Helper class of Minecart variants
             * <p>
             * By Adam Matthew
             * Creation time: 2017/7/17 19:55.
             */
            // @ts-ignore
            class MinecartType extends java.lang.Enum<cn.nukkit.utils.MinecartType> {
                /**
                 * Represents an empty vehicle.
                 */
                // @ts-ignore
                public static readonly MINECART_EMPTY: cn.nukkit.utils.MinecartType
                /**
                 * Represents a chest holder.
                 */
                // @ts-ignore
                public static readonly MINECART_CHEST: cn.nukkit.utils.MinecartType
                /**
                 * Represents a furnace minecart.
                 */
                // @ts-ignore
                public static readonly MINECART_FURNACE: cn.nukkit.utils.MinecartType
                /**
                 * Represents a TNT minecart.
                 */
                // @ts-ignore
                public static readonly MINECART_TNT: cn.nukkit.utils.MinecartType
                /**
                 * Represents a mob spawner minecart.
                 */
                // @ts-ignore
                public static readonly MINECART_MOB_SPAWNER: cn.nukkit.utils.MinecartType
                /**
                 * Represents a hopper minecart.
                 */
                // @ts-ignore
                public static readonly MINECART_HOPPER: cn.nukkit.utils.MinecartType
                /**
                 * Represents a command block minecart.
                 */
                // @ts-ignore
                public static readonly MINECART_COMMAND_BLOCK: cn.nukkit.utils.MinecartType
                /**
                 * Represents an unknown minecart.
                 */
                // @ts-ignore
                public static readonly MINECART_UNKNOWN: cn.nukkit.utils.MinecartType
                // @ts-ignore
                public static values(): cn.nukkit.utils.MinecartType[]
                // @ts-ignore
                public static valueOf(name: java.lang.String | string): cn.nukkit.utils.MinecartType
                /**
                 * Get the variants of the current minecart
                 * @return Integer
                 */
                // @ts-ignore
                public getId(): number /*int*/
                /**
                 * Get the name of the minecart variants
                 * @return String
                 */
                // @ts-ignore
                public getName(): string
                /**
                 * Gets if the minecart contains block
                 * @return Boolean
                 */
                // @ts-ignore
                public hasBlockInside(): boolean
                /**
                 * Returns of an instance of Minecart-variants
                 * @param types The number of minecart
                 * @return Integer
                 */
                // @ts-ignore
                public static valueOf(types: number /*int*/): cn.nukkit.utils.MinecartType
            }
        }
    }
}
