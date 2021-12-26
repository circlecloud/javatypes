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
            public static builder(): org.bukkit.FireworkEffect.Builder
            /**
             * Get whether the firework effect flickers.
             * @return true if it flickers, false if not
             */
            // @ts-ignore
            public hasFlicker(): boolean
            /**
             * Get whether the firework effect has a trail.
             * @return true if it has a trail, false if not
             */
            // @ts-ignore
            public hasTrail(): boolean
            /**
             * Get the primary colors of the firework effect.
             * @return An immutable list of the primary colors
             */
            // @ts-ignore
            public getColors(): Array<org.bukkit.Color>
            /**
             * Get the fade colors of the firework effect.
             * @return An immutable list of the fade colors
             */
            // @ts-ignore
            public getFadeColors(): Array<org.bukkit.Color>
            /**
             * Get the type of the firework effect.
             * @return The effect type
             */
            // @ts-ignore
            public getType(): org.bukkit.FireworkEffect.Type
            /**
             * @see ConfigurationSerializable
             * @param map the map to deserialize
             * @return the resulting serializable
             */
            // @ts-ignore
            public static deserialize(map: java.util.Map<java.lang.String | string, java.lang.Object | any>): org.bukkit.configuration.serialization.ConfigurationSerializable
            // @ts-ignore
            public serialize(): java.util.Map<java.lang.String | string, java.lang.Object | any>
            // @ts-ignore
            public toString(): string
            // @ts-ignore
            public hashCode(): number /*int*/
            // @ts-ignore
            public equals(obj: java.lang.Object | any): boolean
        }
    }
}
