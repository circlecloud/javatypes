declare namespace org {
    namespace bukkit {
        /**
         * A list of all Effects that can happen to entities.
         */
        // @ts-ignore
        class EntityEffect extends java.lang.Enum<org.bukkit.EntityEffect> {
            // @ts-ignore
            values(): org.bukkit.EntityEffect[]
            // @ts-ignore
            valueOf(name: string): org.bukkit.EntityEffect
            /**
             * Gets the data value of this EntityEffect
             * @return The data value
             * @deprecated Magic value
             */
            // @ts-ignore
            getData(): byte
            /**
             * Gets entity superclass which this affect is applicable to.
             * @return applicable class
             */
            // @ts-ignore
            getApplicable(): java.lang.Class<? extends org.bukkit.entity.Entity>
            /**
             * Gets the EntityEffect with the given data value
             * @param data Data value to fetch
             * @return The {#link EntityEffect} representing the given value, or null
             *      if it doesn't exist
             * @deprecated Magic value
             */
            // @ts-ignore
            getByData(data: number /*byte*/): org.bukkit.EntityEffect
        }
    }
}
