declare namespace javax {
    namespace tools {
        /**
         * Interface for diagnostics from tools.  A diagnostic usually reports
         * a problem at a specific position in a source file.  However, not
         * all diagnostics are associated with a position or a file.
         * <p>A position is a zero-based character offset from the beginning of
         * a file.  Negative values (except {@link #NOPOS}) are not valid
         * positions.
         * <p>Line and column numbers begin at 1.  Negative values (except
         * {@link #NOPOS}) and 0 are not valid line or column numbers.
         * @param <S> the type of source object used by this diagnostic
         * @author Peter von der Ah&eacute;
         * @author Jonathan Gibbons
         * @since 1.6
         */
        // @ts-ignore
        interface Diagnostic<S> {
            /**
             * Used to signal that no position is available.
             */
            // @ts-ignore
            readonly NOPOS: number /*long*/
            /**
             * Gets the kind of this diagnostic, for example, error or
             * warning.
             * @return the kind of this diagnostic
             */
            // @ts-ignore
            getKind(): javax.tools.Diagnostic.Kind
            /**
             * Gets the source object associated with this diagnostic.
             * @return the source object associated with this diagnostic.
             *  {#code null} if no source object is associated with the
             *  diagnostic.
             */
            // @ts-ignore
            getSource(): S
            /**
             * Gets a character offset from the beginning of the source object
             * associated with this diagnostic that indicates the location of
             * the problem.  In addition, the following must be true:
             * <p>{@code getStartPostion() <= getPosition()}
             * <p>{@code getPosition() <= getEndPosition()}
             * @return character offset from beginning of source; {#link
             *  #NOPOS} if {@link #getSource()} would return {@code null} or if
             *  no location is suitable
             */
            // @ts-ignore
            getPosition(): number /*long*/
            /**
             * Gets the character offset from the beginning of the file
             * associated with this diagnostic that indicates the start of the
             * problem.
             * @return offset from beginning of file; {#link #NOPOS} if and
             *  only if {@link #getPosition()} returns {@link #NOPOS}
             */
            // @ts-ignore
            getStartPosition(): number /*long*/
            /**
             * Gets the character offset from the beginning of the file
             * associated with this diagnostic that indicates the end of the
             * problem.
             * @return offset from beginning of file; {#link #NOPOS} if and
             *  only if {@link #getPosition()} returns {@link #NOPOS}
             */
            // @ts-ignore
            getEndPosition(): number /*long*/
            /**
             * Gets the line number of the character offset returned by
             * {@linkplain #getPosition()}.
             * @return a line number or {#link #NOPOS} if and only if {@link
             *  #getPosition()} returns {@link #NOPOS}
             */
            // @ts-ignore
            getLineNumber(): number /*long*/
            /**
             * Gets the column number of the character offset returned by
             * {@linkplain #getPosition()}.
             * @return a column number or {#link #NOPOS} if and only if {@link
             *  #getPosition()} returns {@link #NOPOS}
             */
            // @ts-ignore
            getColumnNumber(): number /*long*/
            /**
             * Gets a diagnostic code indicating the type of diagnostic.  The
             * code is implementation-dependent and might be {@code null}.
             * @return a diagnostic code
             */
            // @ts-ignore
            getCode(): string
            /**
             * Gets a localized message for the given locale.  The actual
             * message is implementation-dependent.  If the locale is {@code
             * null} use the default locale.
             * @param locale a locale; might be {#code null}
             * @return a localized message
             */
            // @ts-ignore
            getMessage(locale: java.util.Locale): string
        }
    }
}
