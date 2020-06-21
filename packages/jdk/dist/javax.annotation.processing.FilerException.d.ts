declare namespace javax {
    namespace annotation {
        namespace processing {
            /**
             * Indicates a {@link Filer} detected an attempt to open a file that
             * would violate the guarantees provided by the {@code Filer}.  Those
             * guarantees include not creating the same file more than once, not
             * creating multiple files corresponding to the same type, and not
             * creating files for types with invalid names.
             * @author Joseph D. Darcy
             * @author Scott Seligman
             * @author Peter von der Ah&eacute;
             * @since 1.6
             */
            // @ts-ignore
            class FilerException extends java.io.IOException {
                /**
                 * Constructs an exception with the specified detail message.
                 * @param s the detail message, which should include the name of
                 *  the file attempting to be opened; may be {#code null}
                 */
                // @ts-ignore
                constructor(s: java.lang.String | string)
            }
        }
    }
}
