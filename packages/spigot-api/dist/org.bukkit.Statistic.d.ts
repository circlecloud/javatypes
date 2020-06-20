declare namespace org {
    namespace bukkit {
        /**
         * Represents a countable statistic, which is tracked by the server.
         */
        // @ts-ignore
        class Statistic extends java.lang.Enum<org.bukkit.Statistic> implements org.bukkit.Keyed {
            // @ts-ignore
            values(): org.bukkit.Statistic[]
            // @ts-ignore
            valueOf(name: string): org.bukkit.Statistic
            /**
             * Gets the type of this statistic.
             * @return the type of this statistic
             */
            // @ts-ignore
            getType(): org.bukkit.Statistic.Type
            /**
             * Checks if this is a substatistic.
             * <p>
             * A substatistic exists en masse for each block, item, or entitytype, depending on
             * {@link #getType()}.
             * <p>
             * This is a redundant method and equivalent to checking
             * <code>getType() != Type.UNTYPED</code>
             * @return true if this is a substatistic
             */
            // @ts-ignore
            isSubstatistic(): boolean
            /**
             * Checks if this is a substatistic dealing with blocks.
             * <p>
             * This is a redundant method and equivalent to checking
             * <code>getType() == Type.BLOCK</code>
             * @return true if this deals with blocks
             */
            // @ts-ignore
            isBlock(): boolean
            // @ts-ignore
            getKey(): org.bukkit.NamespacedKey
        }
    }
}
