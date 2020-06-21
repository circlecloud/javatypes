declare namespace org {
    namespace springframework {
        namespace format {
            /**
             * Prints objects of type T for display.
             * @author Keith Donald
             * @since 3.0
             * @param <T> the type of object this Printer prints
             */
            // @ts-ignore
            interface Printer<T> {
                /**
                 * Print the object of type T for display.
                 * @param object the instance to print
                 * @param locale the current user locale
                 * @return the printed text string
                 */
                // @ts-ignore
                print(object: T, locale: java.util.Locale): string
            }
        }
    }
}
