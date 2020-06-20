declare namespace org {
    namespace bukkit {
        /**
         * All supported color values for dyes and cloth
         */
        // @ts-ignore
        class DyeColor extends java.lang.Enum<org.bukkit.DyeColor> {
            // @ts-ignore
            values(): org.bukkit.DyeColor[]
            // @ts-ignore
            valueOf(name: string): org.bukkit.DyeColor
            /**
             * Gets the associated wool data value representing this color.
             * @return A byte containing the wool data value of this color
             * @see #getDyeData()
             * @deprecated Magic value
             */
            // @ts-ignore
            getWoolData(): byte
            /**
             * Gets the associated dye data value representing this color.
             * @return A byte containing the dye data value of this color
             * @see #getWoolData()
             * @deprecated Magic value
             */
            // @ts-ignore
            getDyeData(): byte
            /**
             * Gets the color that this dye represents.
             * @return The {#link Color} that this dye represents
             */
            // @ts-ignore
            getColor(): org.bukkit.Color
            /**
             * Gets the firework color that this dye represents.
             * @return The {#link Color} that this dye represents
             */
            // @ts-ignore
            getFireworkColor(): org.bukkit.Color
            /**
             * Gets the DyeColor with the given wool data value.
             * @param data Wool data value to fetch
             * @return The {#link DyeColor} representing the given value, or null if
             *      it doesn't exist
             * @see #getByDyeData(byte)
             * @deprecated Magic value
             */
            // @ts-ignore
            getByWoolData(data: number /*byte*/): org.bukkit.DyeColor
            /**
             * Gets the DyeColor with the given dye data value.
             * @param data Dye data value to fetch
             * @return The {#link DyeColor} representing the given value, or null if
             *      it doesn't exist
             * @see #getByWoolData(byte)
             * @deprecated Magic value
             */
            // @ts-ignore
            getByDyeData(data: number /*byte*/): org.bukkit.DyeColor
            /**
             * Gets the DyeColor with the given color value.
             * @param color Color value to get the dye by
             * @return The {#link DyeColor} representing the given value, or null if
             *      it doesn't exist
             */
            // @ts-ignore
            getByColor(color: org.bukkit.Color): org.bukkit.DyeColor
            /**
             * Gets the DyeColor with the given firework color value.
             * @param color Color value to get dye by
             * @return The {#link DyeColor} representing the given value, or null if
             *      it doesn't exist
             */
            // @ts-ignore
            getByFireworkColor(color: org.bukkit.Color): org.bukkit.DyeColor
            /**
             * Gets the DyeColor for the given name, possibly doing legacy transformations.
             * @param name dye name
             * @return dye color
             * @deprecated legacy use only
             */
            // @ts-ignore
            legacyValueOf(name: string): org.bukkit.DyeColor
        }
    }
}
