declare namespace org {
    namespace bukkit {
        namespace map {
            /**
             * Represents the palette that map items use.
             * <p>
             * These fields are hee base color ranges. Each entry corresponds to four
             * colors of varying shades with values entry to entry + 3.
             */
            // @ts-ignore
            class MapPalette extends java.lang.Object {
                /**
                 * @deprecated Magic value
                 */
                // @ts-ignore
                public static readonly TRANSPARENT: number /*byte*/
                /**
                 * @deprecated Magic value
                 */
                // @ts-ignore
                public static readonly LIGHT_GREEN: number /*byte*/
                /**
                 * @deprecated Magic value
                 */
                // @ts-ignore
                public static readonly LIGHT_BROWN: number /*byte*/
                /**
                 * @deprecated Magic value
                 */
                // @ts-ignore
                public static readonly GRAY_1: number /*byte*/
                /**
                 * @deprecated Magic value
                 */
                // @ts-ignore
                public static readonly RED: number /*byte*/
                /**
                 * @deprecated Magic value
                 */
                // @ts-ignore
                public static readonly PALE_BLUE: number /*byte*/
                /**
                 * @deprecated Magic value
                 */
                // @ts-ignore
                public static readonly GRAY_2: number /*byte*/
                /**
                 * @deprecated Magic value
                 */
                // @ts-ignore
                public static readonly DARK_GREEN: number /*byte*/
                /**
                 * @deprecated Magic value
                 */
                // @ts-ignore
                public static readonly WHITE: number /*byte*/
                /**
                 * @deprecated Magic value
                 */
                // @ts-ignore
                public static readonly LIGHT_GRAY: number /*byte*/
                /**
                 * @deprecated Magic value
                 */
                // @ts-ignore
                public static readonly BROWN: number /*byte*/
                /**
                 * @deprecated Magic value
                 */
                // @ts-ignore
                public static readonly DARK_GRAY: number /*byte*/
                /**
                 * @deprecated Magic value
                 */
                // @ts-ignore
                public static readonly BLUE: number /*byte*/
                /**
                 * @deprecated Magic value
                 */
                // @ts-ignore
                public static readonly DARK_BROWN: number /*byte*/
                /**
                 * Resize an image to 128x128.
                 * @param image The image to resize.
                 * @return The resized image.
                 */
                // @ts-ignore
                public static resizeImage(image: java.awt.Image): java.awt.image.BufferedImage
                /**
                 * Convert an Image to a byte[] using the palette.
                 * @param image The image to convert.
                 * @return A byte[] containing the pixels of the image.
                 * @deprecated Magic value
                 */
                // @ts-ignore
                public static imageToBytes(image: java.awt.Image): number /*byte*/[]
                /**
                 * Get the index of the closest matching color in the palette to the given
                 * color.
                 * @param r The red component of the color.
                 * @param b The blue component of the color.
                 * @param g The green component of the color.
                 * @return The index in the palette.
                 * @deprecated Magic value
                 */
                // @ts-ignore
                public static matchColor(r: number /*int*/, g: number /*int*/, b: number /*int*/): number /*byte*/
                /**
                 * Get the index of the closest matching color in the palette to the given
                 * color.
                 * @param color The Color to match.
                 * @return The index in the palette.
                 * @deprecated Magic value
                 */
                // @ts-ignore
                public static matchColor(color: java.awt.Color): number /*byte*/
                /**
                 * Get the value of the given color in the palette.
                 * @param index The index in the palette.
                 * @return The Color of the palette entry.
                 * @deprecated Magic value
                 */
                // @ts-ignore
                public static getColor(index: number /*byte*/): java.awt.Color
            }
        }
    }
}
