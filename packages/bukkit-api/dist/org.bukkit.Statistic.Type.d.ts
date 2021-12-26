declare namespace org {
    namespace bukkit {
        namespace Statistic {
            /**
             * The type of statistic.
             */
            // @ts-ignore
            class Type extends java.lang.Enum<org.bukkit.Statistic.Type> {
                /**
                 * Statistics of this type do not require a qualifier.
                 */
                // @ts-ignore
                public static readonly UNTYPED: org.bukkit.Statistic.Type
                /**
                 * Statistics of this type require an Item Material qualifier.
                 */
                // @ts-ignore
                public static readonly ITEM: org.bukkit.Statistic.Type
                /**
                 * Statistics of this type require a Block Material qualifier.
                 */
                // @ts-ignore
                public static readonly BLOCK: org.bukkit.Statistic.Type
                /**
                 * Statistics of this type require an EntityType qualifier.
                 */
                // @ts-ignore
                public static readonly ENTITY: org.bukkit.Statistic.Type
                // @ts-ignore
                public static values(): org.bukkit.Statistic.Type[]
                // @ts-ignore
                public static valueOf(name: java.lang.String | string): org.bukkit.Statistic.Type
            }
        }
    }
}
