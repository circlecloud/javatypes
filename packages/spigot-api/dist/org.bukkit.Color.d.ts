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
            readonly WHITE: org.bukkit.Color
            /**
             * Silver, or (0xC0,0xC0,0xC0) in (R,G,B)
             */
            // @ts-ignore
            readonly SILVER: org.bukkit.Color
            /**
             * Gray, or (0x80,0x80,0x80) in (R,G,B)
             */
            // @ts-ignore
            readonly GRAY: org.bukkit.Color
            /**
             * Black, or (0x00,0x00,0x00) in (R,G,B)
             */
            // @ts-ignore
            readonly BLACK: org.bukkit.Color
            /**
             * Red, or (0xFF,0x00,0x00) in (R,G,B)
             */
            // @ts-ignore
            readonly RED: org.bukkit.Color
            /**
             * Maroon, or (0x80,0x00,0x00) in (R,G,B)
             */
            // @ts-ignore
            readonly MAROON: org.bukkit.Color
            /**
             * Yellow, or (0xFF,0xFF,0x00) in (R,G,B)
             */
            // @ts-ignore
            readonly YELLOW: org.bukkit.Color
            /**
             * Olive, or (0x80,0x80,0x00) in (R,G,B)
             */
            // @ts-ignore
            readonly OLIVE: org.bukkit.Color
            /**
             * Lime, or (0x00,0xFF,0x00) in (R,G,B)
             */
            // @ts-ignore
            readonly LIME: org.bukkit.Color
            /**
             * Green, or (0x00,0x80,0x00) in (R,G,B)
             */
            // @ts-ignore
            readonly GREEN: org.bukkit.Color
            /**
             * Aqua, or (0x00,0xFF,0xFF) in (R,G,B)
             */
            // @ts-ignore
            readonly AQUA: org.bukkit.Color
            /**
             * Teal, or (0x00,0x80,0x80) in (R,G,B)
             */
            // @ts-ignore
            readonly TEAL: org.bukkit.Color
            /**
             * Blue, or (0x00,0x00,0xFF) in (R,G,B)
             */
            // @ts-ignore
            readonly BLUE: org.bukkit.Color
            /**
             * Navy, or (0x00,0x00,0x80) in (R,G,B)
             */
            // @ts-ignore
            readonly NAVY: org.bukkit.Color
            /**
             * Fuchsia, or (0xFF,0x00,0xFF) in (R,G,B)
             */
            // @ts-ignore
            readonly FUCHSIA: org.bukkit.Color
            /**
             * Purple, or (0x80,0x00,0x80) in (R,G,B)
             */
            // @ts-ignore
            readonly PURPLE: org.bukkit.Color
            /**
             * Orange, or (0xFF,0xA5,0x00) in (R,G,B)
             */
            // @ts-ignore
            readonly ORANGE: org.bukkit.Color
            /**
             * Creates a new Color object from a red, green, and blue
             * @param red integer from 0-255
             * @param green integer from 0-255
             * @param blue integer from 0-255
             * @return a new Color object for the red, green, blue
             * @throws IllegalArgumentException if any value is strictly {#literal >255 or <0}
             */
            // @ts-ignore
            fromRGB(red: number /*int*/, green: number /*int*/, blue: number /*int*/): org.bukkit.Color
            /**
             * Creates a new Color object from a blue, green, and red
             * @param blue integer from 0-255
             * @param green integer from 0-255
             * @param red integer from 0-255
             * @return a new Color object for the red, green, blue
             * @throws IllegalArgumentException if any value is strictly {#literal >255 or <0}
             */
            // @ts-ignore
            fromBGR(blue: number /*int*/, green: number /*int*/, red: number /*int*/): org.bukkit.Color
            /**
             * Creates a new color object from an integer that contains the red,
             * green, and blue bytes in the lowest order 24 bits.
             * @param rgb the integer storing the red, green, and blue values
             * @return a new color object for specified values
             * @throws IllegalArgumentException if any data is in the highest order 8
             *      bits
             */
            // @ts-ignore
            fromRGB(rgb: number /*int*/): org.bukkit.Color
            /**
             * Creates a new color object from an integer that contains the blue,
             * green, and red bytes in the lowest order 24 bits.
             * @param bgr the integer storing the blue, green, and red values
             * @return a new color object for specified values
             * @throws IllegalArgumentException if any data is in the highest order 8
             *      bits
             */
            // @ts-ignore
            fromBGR(bgr: number /*int*/): org.bukkit.Color
            /**
             * Gets the red component
             * @return red component, from 0 to 255
             */
            // @ts-ignore
            getRed(): int
            /**
             * Creates a new Color object with specified component
             * @param red the red component, from 0 to 255
             * @return a new color object with the red component
             */
            // @ts-ignore
            setRed(red: number /*int*/): org.bukkit.Color
            /**
             * Gets the green component
             * @return green component, from 0 to 255
             */
            // @ts-ignore
            getGreen(): int
            /**
             * Creates a new Color object with specified component
             * @param green the red component, from 0 to 255
             * @return a new color object with the red component
             */
            // @ts-ignore
            setGreen(green: number /*int*/): org.bukkit.Color
            /**
             * Gets the blue component
             * @return blue component, from 0 to 255
             */
            // @ts-ignore
            getBlue(): int
            /**
             * Creates a new Color object with specified component
             * @param blue the red component, from 0 to 255
             * @return a new color object with the red component
             */
            // @ts-ignore
            setBlue(blue: number /*int*/): org.bukkit.Color
            /**
             * Gets the color as an RGB integer.
             * @return An integer representation of this color, as 0xRRGGBB
             */
            // @ts-ignore
            asRGB(): int
            /**
             * Gets the color as an BGR integer.
             * @return An integer representation of this color, as 0xBBGGRR
             */
            // @ts-ignore
            asBGR(): int
            /**
             * Creates a new color with its RGB components changed as if it was dyed
             * with the colors passed in, replicating vanilla workbench dyeing
             * @param colors The DyeColors to dye with
             * @return A new color with the changed rgb components
             */
            // @ts-ignore
            mixDyes(...colors: org.bukkit.DyeColor[]): org.bukkit.Color
            /**
             * Creates a new color with its RGB components changed as if it was dyed
             * with the colors passed in, replicating vanilla workbench dyeing
             * @param colors The colors to dye with
             * @return A new color with the changed rgb components
             */
            // @ts-ignore
            mixColors(...colors: org.bukkit.Color[]): org.bukkit.Color
            // @ts-ignore
            equals(o: any): boolean
            // @ts-ignore
            hashCode(): int
            // @ts-ignore
            serialize(): java.util.Map<java.lang.String, java.lang.Object>
            // @ts-ignore
            deserialize(map: java.util.Map<java.lang.String, java.lang.Object>): org.bukkit.Color
            // @ts-ignore
            toString(): java.lang.String
        }
    }
}
