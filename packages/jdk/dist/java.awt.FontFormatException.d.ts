declare namespace java {
    namespace awt {
        /**
         * Thrown by method createFont in the <code>Font</code> class to indicate
         * that the specified font is bad.
         * @author Parry Kejriwal
         * @see java.awt.Font
         * @since 1.3
         */
        // @ts-ignore
        class FontFormatException extends java.lang.Exception {
            /**
             * Report a FontFormatException for the reason specified.
             * @param reason a <code>String</code> message indicating why
             *         the font is not accepted.
             */
            // @ts-ignore
            constructor(reason: java.lang.String | string)
        }
    }
}
