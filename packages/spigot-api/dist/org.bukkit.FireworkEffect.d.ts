declare namespace org {
    namespace bukkit {
        /**
         * Represents a single firework effect.
         */
        // @ts-ignore
        class FireworkEffect extends java.lang.Object implements org.bukkit.configuration.serialization.ConfigurationSerializable {
            /**
             * Construct a firework effect.
             * @return A utility object for building a firework effect
             */
            // @ts-ignore
            builder(): org.bukkit.FireworkEffect.Builder
            /**
             * Get whether the firework effect flickers.
             * @return true if it flickers, false if not
             */
            // @ts-ignore
            hasFlicker(): boolean
            /**
             * Get whether the firework effect has a trail.
             * @return true if it has a trail, false if not
             */
            // @ts-ignore
            hasTrail(): boolean
            /**
             * Get the primary colors of the firework effect.
             * @return An immutable list of the primary colors
             */
            // @ts-ignore
            getColors(): java.util.List<org.bukkit.Color>
            /**
             * Get the fade colors of the firework effect.
             * @return An immutable list of the fade colors
             */
            // @ts-ignore
            getFadeColors(): java.util.List<org.bukkit.Color>
            /**
             * Get the type of the firework effect.
             * @return The effect type
             */
            // @ts-ignore
            getType(): org.bukkit.FireworkEffect.Type
            /**
             * @see ConfigurationSerializable
             * @param map the map to deserialize
             * @return the resulting serializable
             */
            // @ts-ignore
            deserialize(map: java.util.Map<java.lang.String, java.lang.Object>): org.bukkit.configuration.serialization.ConfigurationSerializable
            // @ts-ignore
            serialize(): java.util.Map<java.lang.String, java.lang.Object>
            // @ts-ignore
            toString(): java.lang.String
            // @ts-ignore
            hashCode(): int
            // @ts-ignore
            equals(obj: any): boolean
        }
    }
}
