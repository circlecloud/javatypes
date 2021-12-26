declare namespace org {
    namespace bukkit {
        namespace advancement {
            /**
             * Represents an advancement that may be awarded to a player. This class is not
             * reference safe as the underlying advancement may be reloaded.
             */
            // @ts-ignore
            interface Advancement extends org.bukkit.Keyed {
                /**
                 * Get all the criteria present in this advancement.
                 * @return a unmodifiable copy of all criteria
                 */
                // @ts-ignore
                getCriteria(): Array<java.lang.String | string>
            }
        }
    }
}
