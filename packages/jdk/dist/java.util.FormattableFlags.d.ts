declare namespace java {
    namespace util {
        /**
         * FomattableFlags are passed to the {@link Formattable#formatTo
         * Formattable.formatTo()} method and modify the output format for {@linkplain
         * Formattable Formattables}.  Implementations of {@link Formattable} are
         * responsible for interpreting and validating any flags.
         * @since 1.5
         */
        // @ts-ignore
        class FormattableFlags extends java.lang.Object {
            /**
             * Left-justifies the output.  Spaces (<tt>'&#92;u0020'</tt>) will be added
             * at the end of the converted value as required to fill the minimum width
             * of the field.  If this flag is not set then the output will be
             * right-justified.
             * <p> This flag corresponds to <tt>'-'</tt> (<tt>'&#92;u002d'</tt>) in
             * the format specifier.
             */
            // @ts-ignore
            readonly LEFT_JUSTIFY: number /*int*/
            /**
             * Converts the output to upper case according to the rules of the
             * {@linkplain java.util.Locale locale} given during creation of the
             * <tt>formatter</tt> argument of the {@link Formattable#formatTo
             * formatTo()} method.  The output should be equivalent the following
             * invocation of {@link String#toUpperCase(java.util.Locale)}
             * <pre>
             * out.toUpperCase() </pre>
             * <p> This flag corresponds to <tt>'S'</tt> (<tt>'&#92;u0053'</tt>) in
             * the format specifier.
             */
            // @ts-ignore
            readonly UPPERCASE: number /*int*/
            /**
             * Requires the output to use an alternate form.  The definition of the
             * form is specified by the <tt>Formattable</tt>.
             * <p> This flag corresponds to <tt>'#'</tt> (<tt>'&#92;u0023'</tt>) in
             * the format specifier.
             */
            // @ts-ignore
            readonly ALTERNATE: number /*int*/
        }
    }
}
