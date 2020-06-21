declare namespace java {
    namespace awt {
        /**
         * The <code>Transparency</code> interface defines the common transparency
         * modes for implementing classes.
         */
        // @ts-ignore
        interface Transparency {
            /**
             * Represents image data that is guaranteed to be completely opaque,
             * meaning that all pixels have an alpha value of 1.0.
             */
            // @ts-ignore
            readonly OPAQUE: number /*int*/
            /**
             * Represents image data that is guaranteed to be either completely
             * opaque, with an alpha value of 1.0, or completely transparent,
             * with an alpha value of 0.0.
             */
            // @ts-ignore
            readonly BITMASK: number /*int*/
            /**
             * Represents image data that contains or might contain arbitrary
             * alpha values between and including 0.0 and 1.0.
             */
            // @ts-ignore
            readonly TRANSLUCENT: number /*int*/
            /**
             * Returns the type of this <code>Transparency</code>.
             * @return the field type of this <code>Transparency</code>, which is
             *           either OPAQUE, BITMASK or TRANSLUCENT.
             */
            // @ts-ignore
            getTransparency(): number /*int*/
        }
    }
}
