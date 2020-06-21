declare namespace java {
    namespace awt {
        namespace MultipleGradientPaint {
            /**
             * The color space in which to perform the gradient interpolation.
             * @since 1.6
             */
            // @ts-ignore
            class ColorSpaceType extends java.lang.Enum<java.awt.MultipleGradientPaint.ColorSpaceType> {
                /**
                 * Indicates that the color interpolation should occur in sRGB space.
                 */
                // @ts-ignore
                readonly SRGB: java.awt.MultipleGradientPaint.ColorSpaceType
                /**
                 * Indicates that the color interpolation should occur in linearized
                 * RGB space.
                 */
                // @ts-ignore
                readonly LINEAR_RGB: java.awt.MultipleGradientPaint.ColorSpaceType
                // @ts-ignore
                values(): java.awt.MultipleGradientPaint.ColorSpaceType[]
                // @ts-ignore
                valueOf(name: java.lang.String | string): java.awt.MultipleGradientPaint.ColorSpaceType
            }
        }
    }
}
