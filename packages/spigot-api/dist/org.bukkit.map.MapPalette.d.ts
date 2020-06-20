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
                readonly TRANSPARENT: number /*byte*/
                /**
                 * @deprecated Magic value
                 */
                // @ts-ignore
                readonly LIGHT_GREEN: number /*byte*/
                /**
                 * @deprecated Magic value
                 */
                // @ts-ignore
                readonly LIGHT_BROWN: number /*byte*/
                /**
                 * @deprecated Magic value
                 */
                // @ts-ignore
                readonly GRAY_1: number /*byte*/
                /**
                 * @deprecated Magic value
                 */
                // @ts-ignore
                readonly RED: number /*byte*/
                /**
                 * @deprecated Magic value
                 */
                // @ts-ignore
                readonly PALE_BLUE: number /*byte*/
                /**
                 * @deprecated Magic value
                 */
                // @ts-ignore
                readonly GRAY_2: number /*byte*/
                /**
                 * @deprecated Magic value
                 */
                // @ts-ignore
                readonly DARK_GREEN: number /*byte*/
                /**
                 * @deprecated Magic value
                 */
                // @ts-ignore
                readonly WHITE: number /*byte*/
                /**
                 * @deprecated Magic value
                 */
                // @ts-ignore
                readonly LIGHT_GRAY: number /*byte*/
                /**
                 * @deprecated Magic value
                 */
                // @ts-ignore
                readonly BROWN: number /*byte*/
                /**
                 * @deprecated Magic value
                 */
                // @ts-ignore
                readonly DARK_GRAY: number /*byte*/
                /**
                 * @deprecated Magic value
                 */
                // @ts-ignore
                readonly BLUE: number /*byte*/
                /**
                 * @deprecated Magic value
                 */
                // @ts-ignore
                readonly DARK_BROWN: number /*byte*/
                /**
                 * Resize an image to 128x128.
                 * @param image The image to resize.
                 * @return The resized image.
                 */
                // @ts-ignore
                resizeImage(image: java.awt.Image): java.awt.image.BufferedImage
                /**
                 * Convert an Image to a byte[] using the palette.
                 * @param image The image to convert.
                 * @return A byte[] containing the pixels of the image.
                 * @deprecated Magic value
                 */
                // @ts-ignore
                imageToBytes(image: java.awt.Image): byte[]
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
                matchColor(r: number /*int*/, g: number /*int*/, b: number /*int*/): byte
                /**
                 * Get the index of the closest matching color in the palette to the given
                 * color.
                 * @param color The Color to match.
                 * @return The index in the palette.
                 * @deprecated Magic value
                 */
                // @ts-ignore
                matchColor(color: java.awt.Color): byte
                /**
                 * Get the value of the given color in the palette.
                 * @param index The index in the palette.
                 * @return The Color of the palette entry.
                 * @deprecated Magic value
                 */
                // @ts-ignore
                getColor(index: number /*byte*/): java.awt.Color
            }
        }
    }
}
