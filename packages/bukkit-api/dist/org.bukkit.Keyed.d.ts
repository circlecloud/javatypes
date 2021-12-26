declare namespace org {
    namespace bukkit {
        /**
         * Represents an object which has a {@link NamespacedKey} attached to it.
         */
        // @ts-ignore
        interface Keyed {
            /**
             * Return the namespaced identifier for this object.
             * @return this object's key
             */
            // @ts-ignore
            getKey(): org.bukkit.NamespacedKey
        }
    }
}
