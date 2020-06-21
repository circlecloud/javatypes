declare namespace java {
    namespace util {
        namespace Locale {
            /**
             * Enum for locale categories.  These locale categories are used to get/set
             * the default locale for the specific functionality represented by the
             * category.
             * @see #getDefault(Locale.Category)
             * @see #setDefault(Locale.Category, Locale)
             * @since 1.7
             */
            // @ts-ignore
            class Category extends java.lang.Enum<java.util.Locale.Category> {
                /**
                 * Category used to represent the default locale for
                 * displaying user interfaces.
                 */
                // @ts-ignore
                readonly DISPLAY: java.util.Locale.Category
                /**
                 * Category used to represent the default locale for
                 * formatting dates, numbers, and/or currencies.
                 */
                // @ts-ignore
                readonly FORMAT: java.util.Locale.Category
                // @ts-ignore
                values(): java.util.Locale.Category[]
                // @ts-ignore
                valueOf(name: java.lang.String | string): java.util.Locale.Category
            }
        }
    }
}
