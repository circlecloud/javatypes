declare namespace javax {
    namespace accessibility {
        /**
         * <p>Base class used to maintain a strongly typed enumeration.  This is
         * the superclass of {@link AccessibleState} and {@link AccessibleRole}.
         * <p>The toDisplayString method allows you to obtain the localized string
         * for a locale independent key from a predefined ResourceBundle for the
         * keys defined in this class.  This localized string is intended to be
         * readable by humans.
         * @see AccessibleRole
         * @see AccessibleState
         * @author Willie Walker
         * @author Peter Korn
         * @author Lynn Monsanto
         */
        // @ts-ignore
        class AccessibleBundle extends java.lang.Object {
            /**
             * Construct an {@code AccessibleBundle}.
             */
            // @ts-ignore
            constructor()
            /**
             * The locale independent name of the state.  This is a programmatic
             * name that is not intended to be read by humans.
             * @see #toDisplayString
             */
            // @ts-ignore
            key: string
            /**
             * Obtains the key as a localized string.
             * If a localized string cannot be found for the key, the
             * locale independent key stored in the role will be returned.
             * This method is intended to be used only by subclasses so that they
             * can specify their own resource bundles which contain localized
             * strings for their keys.
             * @param resourceBundleName the name of the resource bundle to use for
             *  lookup
             * @param locale the locale for which to obtain a localized string
             * @return a localized String for the key.
             */
            // @ts-ignore
            toDisplayString(resourceBundleName: string, locale: java.util.Locale): java.lang.String
            /**
             * Obtains the key as a localized string.
             * If a localized string cannot be found for the key, the
             * locale independent key stored in the role will be returned.
             * @param locale the locale for which to obtain a localized string
             * @return a localized String for the key.
             */
            // @ts-ignore
            toDisplayString(locale: java.util.Locale): java.lang.String
            /**
             * Gets localized string describing the key using the default locale.
             * @return a localized String describing the key for the default locale
             */
            // @ts-ignore
            toDisplayString(): java.lang.String
            /**
             * Gets localized string describing the key using the default locale.
             * @return a localized String describing the key using the default locale
             * @see #toDisplayString
             */
            // @ts-ignore
            toString(): java.lang.String
        }
    }
}
