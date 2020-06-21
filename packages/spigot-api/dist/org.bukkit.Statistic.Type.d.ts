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
                readonly UNTYPED: org.bukkit.Statistic.Type
                /**
                 * Statistics of this type require an Item Material qualifier.
                 */
                // @ts-ignore
                readonly ITEM: org.bukkit.Statistic.Type
                /**
                 * Statistics of this type require a Block Material qualifier.
                 */
                // @ts-ignore
                readonly BLOCK: org.bukkit.Statistic.Type
                /**
                 * Statistics of this type require an EntityType qualifier.
                 */
                // @ts-ignore
                readonly ENTITY: org.bukkit.Statistic.Type
                // @ts-ignore
                values(): org.bukkit.Statistic.Type[]
                // @ts-ignore
                valueOf(name: java.lang.String | string): org.bukkit.Statistic.Type
            }
        }
    }
}
