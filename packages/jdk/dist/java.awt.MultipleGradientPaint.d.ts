declare namespace java {
    namespace awt {
        /**
         * This is the superclass for Paints which use a multiple color
         * gradient to fill in their raster.  It provides storage for variables and
         * enumerated values common to
         * {@code LinearGradientPaint} and {@code RadialGradientPaint}.
         * @author Nicholas Talian, Vincent Hardy, Jim Graham, Jerry Evans
         * @since 1.6
         */
        // @ts-ignore
        class MultipleGradientPaint extends java.lang.Object implements java.awt.Paint {
            /**
             * Returns a copy of the array of floats used by this gradient
             * to calculate color distribution.
             * The returned array always has 0 as its first value and 1 as its
             * last value, with increasing values in between.
             * @return a copy of the array of floats used by this gradient to
             *  calculate color distribution
             */
            // @ts-ignore
            getFractions(): float[]
            /**
             * Returns a copy of the array of colors used by this gradient.
             * The first color maps to the first value in the fractions array,
             * and the last color maps to the last value in the fractions array.
             * @return a copy of the array of colors used by this gradient
             */
            // @ts-ignore
            getColors(): java.awt.Color[]
            /**
             * Returns the enumerated type which specifies cycling behavior.
             * @return the enumerated type which specifies cycling behavior
             */
            // @ts-ignore
            getCycleMethod(): java.awt.MultipleGradientPaint.CycleMethod
            /**
             * Returns the enumerated type which specifies color space for
             * interpolation.
             * @return the enumerated type which specifies color space for
             *  interpolation
             */
            // @ts-ignore
            getColorSpace(): java.awt.MultipleGradientPaint.ColorSpaceType
            /**
             * Returns a copy of the transform applied to the gradient.
             * <p>
             * Note that if no transform is applied to the gradient
             * when it is created, the identity transform is used.
             * @return a copy of the transform applied to the gradient
             */
            // @ts-ignore
            getTransform(): java.awt.geom.AffineTransform
            /**
             * Returns the transparency mode for this {@code Paint} object.
             * @return {#code OPAQUE} if all colors used by this
             *          {@code Paint} object are opaque,
             *          {@code TRANSLUCENT} if at least one of the
             *          colors used by this {@code Paint} object is not opaque.
             * @see java.awt.Transparency
             */
            // @ts-ignore
            getTransparency(): int
        }
    }
}
