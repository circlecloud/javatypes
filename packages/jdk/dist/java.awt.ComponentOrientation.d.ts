declare namespace java {
    namespace awt {
        /**
         * The ComponentOrientation class encapsulates the language-sensitive
         * orientation that is to be used to order the elements of a component
         * or of text. It is used to reflect the differences in this ordering
         * between Western alphabets, Middle Eastern (such as Hebrew), and Far
         * Eastern (such as Japanese).
         * <p>
         * Fundamentally, this governs items (such as characters) which are laid out
         * in lines, with the lines then laid out in a block. This also applies
         * to items in a widget: for example, in a check box where the box is
         * positioned relative to the text.
         * <p>
         * There are four different orientations used in modern languages
         * as in the following table.<br>
         * <pre>
         * LT          RT          TL          TR
         * A B C       C B A       A D G       G D A
         * D E F       F E D       B E H       H E B
         * G H I       I H G       C F I       I F C
         * </pre><br>
         * (In the header, the two-letter abbreviation represents the item direction
         * in the first letter, and the line direction in the second. For example,
         * LT means "items left-to-right, lines top-to-bottom",
         * TL means "items top-to-bottom, lines left-to-right", and so on.)
         * <p>
         * The orientations are:
         * <ul>
         * <li>LT - Western Europe (optional for Japanese, Chinese, Korean)
         * <li>RT - Middle East (Arabic, Hebrew)
         * <li>TR - Japanese, Chinese, Korean
         * <li>TL - Mongolian
         * </ul>
         * Components whose view and controller code depends on orientation
         * should use the <code>isLeftToRight()</code> and
         * <code>isHorizontal()</code> methods to
         * determine their behavior. They should not include switch-like
         * code that keys off of the constants, such as:
         * <pre>
         * if (orientation == LEFT_TO_RIGHT) {
         * ...
         * } else if (orientation == RIGHT_TO_LEFT) {
         * ...
         * } else {
         * // Oops
         * }
         * </pre>
         * This is unsafe, since more constants may be added in the future and
         * since it is not guaranteed that orientation objects will be unique.
         */
        // @ts-ignore
        class ComponentOrientation extends java.lang.Object implements java.io.Serializable {
            /**
             * Items run left to right and lines flow top to bottom
             * Examples: English, French.
             */
            // @ts-ignore
            readonly LEFT_TO_RIGHT: java.awt.ComponentOrientation
            /**
             * Items run right to left and lines flow top to bottom
             * Examples: Arabic, Hebrew.
             */
            // @ts-ignore
            readonly RIGHT_TO_LEFT: java.awt.ComponentOrientation
            /**
             * Indicates that a component's orientation has not been set.
             * To preserve the behavior of existing applications,
             * isLeftToRight will return true for this value.
             */
            // @ts-ignore
            readonly UNKNOWN: java.awt.ComponentOrientation
            /**
             * Are lines horizontal?
             * This will return true for horizontal, left-to-right writing
             * systems such as Roman.
             */
            // @ts-ignore
            isHorizontal(): boolean
            /**
             * HorizontalLines: Do items run left-to-right?<br>
             * Vertical Lines:  Do lines run left-to-right?<br>
             * This will return true for horizontal, left-to-right writing
             * systems such as Roman.
             */
            // @ts-ignore
            isLeftToRight(): boolean
            /**
             * Returns the orientation that is appropriate for the given locale.
             * @param locale the specified locale
             */
            // @ts-ignore
            getOrientation(locale: java.util.Locale): java.awt.ComponentOrientation
            /**
             * Returns the orientation appropriate for the given ResourceBundle's
             * localization.  Three approaches are tried, in the following order:
             * <ol>
             * <li>Retrieve a ComponentOrientation object from the ResourceBundle
             * using the string "Orientation" as the key.
             * <li>Use the ResourceBundle.getLocale to determine the bundle's
             * locale, then return the orientation for that locale.
             * <li>Return the default locale's orientation.
             * </ol>
             * @deprecated As of J2SE 1.4, use {#link #getOrientation(java.util.Locale)}.
             */
            // @ts-ignore
            getOrientation(bdl: java.util.ResourceBundle): java.awt.ComponentOrientation
        }
    }
}
