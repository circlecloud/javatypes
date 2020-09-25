declare namespace org {
    namespace bukkit {
        /**
         * All supported color values for dyes and cloth
         */
        // @ts-ignore
        class DyeColor extends java.lang.Enum<org.bukkit.DyeColor> {
            /**
             * Represents white dye.
             */
            // @ts-ignore
            public static readonly WHITE: org.bukkit.DyeColor
            /**
             * Represents orange dye.
             */
            // @ts-ignore
            public static readonly ORANGE: org.bukkit.DyeColor
            /**
             * Represents magenta dye.
             */
            // @ts-ignore
            public static readonly MAGENTA: org.bukkit.DyeColor
            /**
             * Represents light blue dye.
             */
            // @ts-ignore
            public static readonly LIGHT_BLUE: org.bukkit.DyeColor
            /**
             * Represents yellow dye.
             */
            // @ts-ignore
            public static readonly YELLOW: org.bukkit.DyeColor
            /**
             * Represents lime dye.
             */
            // @ts-ignore
            public static readonly LIME: org.bukkit.DyeColor
            /**
             * Represents pink dye.
             */
            // @ts-ignore
            public static readonly PINK: org.bukkit.DyeColor
            /**
             * Represents gray dye.
             */
            // @ts-ignore
            public static readonly GRAY: org.bukkit.DyeColor
            /**
             * Represents light gray dye.
             */
            // @ts-ignore
            public static readonly LIGHT_GRAY: org.bukkit.DyeColor
            /**
             * Represents cyan dye.
             */
            // @ts-ignore
            public static readonly CYAN: org.bukkit.DyeColor
            /**
             * Represents purple dye.
             */
            // @ts-ignore
            public static readonly PURPLE: org.bukkit.DyeColor
            /**
             * Represents blue dye.
             */
            // @ts-ignore
            public static readonly BLUE: org.bukkit.DyeColor
            /**
             * Represents brown dye.
             */
            // @ts-ignore
            public static readonly BROWN: org.bukkit.DyeColor
            /**
             * Represents green dye.
             */
            // @ts-ignore
            public static readonly GREEN: org.bukkit.DyeColor
            /**
             * Represents red dye.
             */
            // @ts-ignore
            public static readonly RED: org.bukkit.DyeColor
            /**
             * Represents black dye.
             */
            // @ts-ignore
            public static readonly BLACK: org.bukkit.DyeColor
            // @ts-ignore
            public static values(): org.bukkit.DyeColor[]
            // @ts-ignore
            public static valueOf(name: java.lang.String | string): org.bukkit.DyeColor
            /**
             * Gets the associated wool data value representing this color.
             * @return A byte containing the wool data value of this color
             * @see #getDyeData()
             * @deprecated Magic value
             */
            // @ts-ignore
            public getWoolData(): number /*byte*/
            /**
             * Gets the associated dye data value representing this color.
             * @return A byte containing the dye data value of this color
             * @see #getWoolData()
             * @deprecated Magic value
             */
            // @ts-ignore
            public getDyeData(): number /*byte*/
            /**
             * Gets the color that this dye represents.
             * @return The {#link Color} that this dye represents
             */
            // @ts-ignore
            public getColor(): org.bukkit.Color
            /**
             * Gets the firework color that this dye represents.
             * @return The {#link Color} that this dye represents
             */
            // @ts-ignore
            public getFireworkColor(): org.bukkit.Color
            /**
             * Gets the DyeColor with the given wool data value.
             * @param data Wool data value to fetch
             * @return The {#link DyeColor} representing the given value, or null if
             *      it doesn't exist
             * @see #getByDyeData(byte)
             * @deprecated Magic value
             */
            // @ts-ignore
            public static getByWoolData(data: number /*byte*/): org.bukkit.DyeColor
            /**
             * Gets the DyeColor with the given dye data value.
             * @param data Dye data value to fetch
             * @return The {#link DyeColor} representing the given value, or null if
             *      it doesn't exist
             * @see #getByWoolData(byte)
             * @deprecated Magic value
             */
            // @ts-ignore
            public static getByDyeData(data: number /*byte*/): org.bukkit.DyeColor
            /**
             * Gets the DyeColor with the given color value.
             * @param color Color value to get the dye by
             * @return The {#link DyeColor} representing the given value, or null if
             *      it doesn't exist
             */
            // @ts-ignore
            public static getByColor(color: org.bukkit.Color): org.bukkit.DyeColor
            /**
             * Gets the DyeColor with the given firework color value.
             * @param color Color value to get dye by
             * @return The {#link DyeColor} representing the given value, or null if
             *      it doesn't exist
             */
            // @ts-ignore
            public static getByFireworkColor(color: org.bukkit.Color): org.bukkit.DyeColor
            /**
             * Gets the DyeColor for the given name, possibly doing legacy transformations.
             * @param name dye name
             * @return dye color
             * @deprecated legacy use only
             */
            // @ts-ignore
            public static legacyValueOf(name: java.lang.String | string): org.bukkit.DyeColor
        }
    }
}
