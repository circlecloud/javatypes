declare namespace javax {
    namespace lang {
        namespace model {
            /**
             * Source versions of the Java&trade; programming language.
             * See the appropriate edition of
             * <cite>The Java&trade; Language Specification</cite>
             * for information about a particular source version.
             * <p>Note that additional source version constants will be added to
             * model future releases of the language.
             * @author Joseph D. Darcy
             * @author Scott Seligman
             * @author Peter von der Ah&eacute;
             * @since 1.6
             */
            // @ts-ignore
            class SourceVersion extends java.lang.Enum<javax.lang.model.SourceVersion> {
                // @ts-ignore
                values(): javax.lang.model.SourceVersion[]
                // @ts-ignore
                valueOf(name: string): javax.lang.model.SourceVersion
                /**
                 * Returns the latest source version that can be modeled.
                 * @return the latest source version that can be modeled
                 */
                // @ts-ignore
                latest(): javax.lang.model.SourceVersion
                /**
                 * Returns the latest source version fully supported by the
                 * current execution environment.  {@code RELEASE_5} or later must
                 * be returned.
                 * @return the latest source version that is fully supported
                 */
                // @ts-ignore
                latestSupported(): javax.lang.model.SourceVersion
                /**
                 * Returns whether or not {@code name} is a syntactically valid
                 * identifier (simple name) or keyword in the latest source
                 * version.  The method returns {@code true} if the name consists
                 * of an initial character for which {@link
                 * Character#isJavaIdentifierStart(int)} returns {@code true},
                 * followed only by characters for which {@link
                 * Character#isJavaIdentifierPart(int)} returns {@code true}.
                 * This pattern matches regular identifiers, keywords, and the
                 * literals {@code "true"}, {@code "false"}, and {@code "null"}.
                 * The method returns {@code false} for all other strings.
                 * @param name the string to check
                 * @return {#code true} if this string is a
                 *  syntactically valid identifier or keyword, {@code false}
                 *  otherwise.
                 */
                // @ts-ignore
                isIdentifier(name: java.lang.CharSequence): boolean
                /**
                 * Returns whether or not {@code name} is a syntactically valid
                 * qualified name in the latest source version.  Unlike {@link
                 * #isIdentifier isIdentifier}, this method returns {@code false}
                 * for keywords and literals.
                 * @param name the string to check
                 * @return {#code true} if this string is a
                 *  syntactically valid name, {@code false} otherwise.
                 * @jls 6.2 Names and Identifiers
                 */
                // @ts-ignore
                isName(name: java.lang.CharSequence): boolean
                /**
                 * Returns whether or not {@code s} is a keyword or literal in the
                 * latest source version.
                 * @param s the string to check
                 * @return {#code true} if {@code s} is a keyword or literal, {@code false} otherwise.
                 */
                // @ts-ignore
                isKeyword(s: java.lang.CharSequence): boolean
            }
        }
    }
}
