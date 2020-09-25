declare namespace java {
    namespace awt {
        namespace GraphicsDevice {
            /**
             * Kinds of translucency supported by the underlying system.
             * @see #isWindowTranslucencySupported
             * @since 1.7
             */
            // @ts-ignore
            class WindowTranslucency extends java.lang.Enum<java.awt.GraphicsDevice.WindowTranslucency> {
                /**
                 * Represents support in the underlying system for windows each pixel
                 * of which is guaranteed to be either completely opaque, with
                 * an alpha value of 1.0, or completely transparent, with an alpha
                 * value of 0.0.
                 */
                // @ts-ignore
                public static readonly PERPIXEL_TRANSPARENT: java.awt.GraphicsDevice.WindowTranslucency
                /**
                 * Represents support in the underlying system for windows all of
                 * the pixels of which have the same alpha value between or including
                 * 0.0 and 1.0.
                 */
                // @ts-ignore
                public static readonly TRANSLUCENT: java.awt.GraphicsDevice.WindowTranslucency
                /**
                 * Represents support in the underlying system for windows that
                 * contain or might contain pixels with arbitrary alpha values
                 * between and including 0.0 and 1.0.
                 */
                // @ts-ignore
                public static readonly PERPIXEL_TRANSLUCENT: java.awt.GraphicsDevice.WindowTranslucency
                // @ts-ignore
                public static values(): java.awt.GraphicsDevice.WindowTranslucency[]
                // @ts-ignore
                public static valueOf(name: java.lang.String | string): java.awt.GraphicsDevice.WindowTranslucency
            }
        }
    }
}
