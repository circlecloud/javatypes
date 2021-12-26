declare namespace org {
    namespace bukkit {
        /**
         * A container for a color palette. This class is immutable; the set methods
         * return a new color. The color names listed as fields are HTML4 standards,
         * but subject to change.
         */
        // @ts-ignore
        class Color extends java.lang.Object implements org.bukkit.configuration.serialization.ConfigurationSerializable {
            /**
             * White, or (0xFF,0xFF,0xFF) in (R,G,B)
             */
            // @ts-ignore
            public static readonly WHITE: org.bukkit.Color
            /**
             * Silver, or (0xC0,0xC0,0xC0) in (R,G,B)
             */
            // @ts-ignore
            public static readonly SILVER: org.bukkit.Color
            /**
             * Gray, or (0x80,0x80,0x80) in (R,G,B)
             */
            // @ts-ignore
            public static readonly GRAY: org.bukkit.Color
            /**
             * Black, or (0x00,0x00,0x00) in (R,G,B)
             */
            // @ts-ignore
            public static readonly BLACK: org.bukkit.Color
            /**
             * Red, or (0xFF,0x00,0x00) in (R,G,B)
             */
            // @ts-ignore
            public static readonly RED: org.bukkit.Color
            /**
             * Maroon, or (0x80,0x00,0x00) in (R,G,B)
             */
            // @ts-ignore
            public static readonly MAROON: org.bukkit.Color
            /**
             * Yellow, or (0xFF,0xFF,0x00) in (R,G,B)
             */
            // @ts-ignore
            public static readonly YELLOW: org.bukkit.Color
            /**
             * Olive, or (0x80,0x80,0x00) in (R,G,B)
             */
            // @ts-ignore
            public static readonly OLIVE: org.bukkit.Color
            /**
             * Lime, or (0x00,0xFF,0x00) in (R,G,B)
             */
            // @ts-ignore
            public static readonly LIME: org.bukkit.Color
            /**
             * Green, or (0x00,0x80,0x00) in (R,G,B)
             */
            // @ts-ignore
            public static readonly GREEN: org.bukkit.Color
            /**
             * Aqua, or (0x00,0xFF,0xFF) in (R,G,B)
             */
            // @ts-ignore
            public static readonly AQUA: org.bukkit.Color
            /**
             * Teal, or (0x00,0x80,0x80) in (R,G,B)
             */
            // @ts-ignore
            public static readonly TEAL: org.bukkit.Color
            /**
             * Blue, or (0x00,0x00,0xFF) in (R,G,B)
             */
            // @ts-ignore
            public static readonly BLUE: org.bukkit.Color
            /**
             * Navy, or (0x00,0x00,0x80) in (R,G,B)
             */
            // @ts-ignore
            public static readonly NAVY: org.bukkit.Color
            /**
             * Fuchsia, or (0xFF,0x00,0xFF) in (R,G,B)
             */
            // @ts-ignore
            public static readonly FUCHSIA: org.bukkit.Color
            /**
             * Purple, or (0x80,0x00,0x80) in (R,G,B)
             */
            // @ts-ignore
            public static readonly PURPLE: org.bukkit.Color
            /**
             * Orange, or (0xFF,0xA5,0x00) in (R,G,B)
             */
            // @ts-ignore
            public static readonly ORANGE: org.bukkit.Color
            /**
             * Creates a new Color object from a red, green, and blue
             * @param red integer from 0-255
             * @param green integer from 0-255
             * @param blue integer from 0-255
             * @return a new Color object for the red, green, blue
             * @throws IllegalArgumentException if any value is strictly {#literal >255 or <0}
             */
            // @ts-ignore
            public static fromRGB(red: number /*int*/, green: number /*int*/, blue: number /*int*/): org.bukkit.Color
            /**
             * Creates a new Color object from a blue, green, and red
             * @param blue integer from 0-255
             * @param green integer from 0-255
             * @param red integer from 0-255
             * @return a new Color object for the red, green, blue
             * @throws IllegalArgumentException if any value is strictly {#literal >255 or <0}
             */
            // @ts-ignore
            public static fromBGR(blue: number /*int*/, green: number /*int*/, red: number /*int*/): org.bukkit.Color
            /**
             * Creates a new color object from an integer that contains the red,
             * green, and blue bytes in the lowest order 24 bits.
             * @param rgb the integer storing the red, green, and blue values
             * @return a new color object for specified values
             * @throws IllegalArgumentException if any data is in the highest order 8
             *      bits
             */
            // @ts-ignore
            public static fromRGB(rgb: number /*int*/): org.bukkit.Color
            /**
             * Creates a new color object from an integer that contains the blue,
             * green, and red bytes in the lowest order 24 bits.
             * @param bgr the integer storing the blue, green, and red values
             * @return a new color object for specified values
             * @throws IllegalArgumentException if any data is in the highest order 8
             *      bits
             */
            // @ts-ignore
            public static fromBGR(bgr: number /*int*/): org.bukkit.Color
            /**
             * Gets the red component
             * @return red component, from 0 to 255
             */
            // @ts-ignore
            public getRed(): number /*int*/
            /**
             * Creates a new Color object with specified component
             * @param red the red component, from 0 to 255
             * @return a new color object with the red component
             */
            // @ts-ignore
            public setRed(red: number /*int*/): org.bukkit.Color
            /**
             * Gets the green component
             * @return green component, from 0 to 255
             */
            // @ts-ignore
            public getGreen(): number /*int*/
            /**
             * Creates a new Color object with specified component
             * @param green the red component, from 0 to 255
             * @return a new color object with the red component
             */
            // @ts-ignore
            public setGreen(green: number /*int*/): org.bukkit.Color
            /**
             * Gets the blue component
             * @return blue component, from 0 to 255
             */
            // @ts-ignore
            public getBlue(): number /*int*/
            /**
             * Creates a new Color object with specified component
             * @param blue the red component, from 0 to 255
             * @return a new color object with the red component
             */
            // @ts-ignore
            public setBlue(blue: number /*int*/): org.bukkit.Color
            /**
             * Gets the color as an RGB integer.
             * @return An integer representation of this color, as 0xRRGGBB
             */
            // @ts-ignore
            public asRGB(): number /*int*/
            /**
             * Gets the color as an BGR integer.
             * @return An integer representation of this color, as 0xBBGGRR
             */
            // @ts-ignore
            public asBGR(): number /*int*/
            /**
             * Creates a new color with its RGB components changed as if it was dyed
             * with the colors passed in, replicating vanilla workbench dyeing
             * @param colors The DyeColors to dye with
             * @return A new color with the changed rgb components
             */
            // @ts-ignore
            public mixDyes(...colors: org.bukkit.DyeColor[]): org.bukkit.Color
            /**
             * Creates a new color with its RGB components changed as if it was dyed
             * with the colors passed in, replicating vanilla workbench dyeing
             * @param colors The colors to dye with
             * @return A new color with the changed rgb components
             */
            // @ts-ignore
            public mixColors(...colors: org.bukkit.Color[]): org.bukkit.Color
            // @ts-ignore
            public equals(o: java.lang.Object | any): boolean
            // @ts-ignore
            public hashCode(): number /*int*/
            // @ts-ignore
            public serialize(): java.util.Map<java.lang.String | string, java.lang.Object | any>
            // @ts-ignore
            public static deserialize(map: java.util.Map<java.lang.String | string, java.lang.Object | any>): org.bukkit.Color
            // @ts-ignore
            public toString(): string
        }
    }
}
