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
                /**
                 * The original version.
                 * The language described in
                 * <cite>The Java&trade; Language Specification, First Edition</cite>.
                 */
                // @ts-ignore
                public static readonly RELEASE_0: javax.lang.model.SourceVersion
                /**
                 * The version recognized by the Java Platform 1.1.
                 * The language is {@code RELEASE_0} augmented with nested classes as described in the 1.1 update to
                 * <cite>The Java&trade; Language Specification, First Edition</cite>.
                 */
                // @ts-ignore
                public static readonly RELEASE_1: javax.lang.model.SourceVersion
                /**
                 * The version recognized by the Java 2 Platform, Standard Edition,
                 * v 1.2.
                 * The language described in
                 * <cite>The Java&trade; Language Specification,
                 * Second Edition</cite>, which includes the {@code
                 * strictfp} modifier.
                 */
                // @ts-ignore
                public static readonly RELEASE_2: javax.lang.model.SourceVersion
                /**
                 * The version recognized by the Java 2 Platform, Standard Edition,
                 * v 1.3.
                 * No major changes from {@code RELEASE_2}.
                 */
                // @ts-ignore
                public static readonly RELEASE_3: javax.lang.model.SourceVersion
                /**
                 * The version recognized by the Java 2 Platform, Standard Edition,
                 * v 1.4.
                 * Added a simple assertion facility.
                 */
                // @ts-ignore
                public static readonly RELEASE_4: javax.lang.model.SourceVersion
                /**
                 * The version recognized by the Java 2 Platform, Standard
                 * Edition 5.0.
                 * The language described in
                 * <cite>The Java&trade; Language Specification,
                 * Third Edition</cite>.  First release to support
                 * generics, annotations, autoboxing, var-args, enhanced {@code
                 * for} loop, and hexadecimal floating-point literals.
                 */
                // @ts-ignore
                public static readonly RELEASE_5: javax.lang.model.SourceVersion
                /**
                 * The version recognized by the Java Platform, Standard Edition
                 * 6.
                 * No major changes from {@code RELEASE_5}.
                 */
                // @ts-ignore
                public static readonly RELEASE_6: javax.lang.model.SourceVersion
                /**
                 * The version recognized by the Java Platform, Standard Edition
                 * 7.
                 * Additions in this release include, diamond syntax for
                 * constructors, {@code try}-with-resources, strings in switch,
                 * binary literals, and multi-catch.
                 * @since 1.7
                 */
                // @ts-ignore
                public static readonly RELEASE_7: javax.lang.model.SourceVersion
                /**
                 * The version recognized by the Java Platform, Standard Edition
                 * 8.
                 * Additions in this release include lambda expressions and default methods.
                 * @since 1.8
                 */
                // @ts-ignore
                public static readonly RELEASE_8: javax.lang.model.SourceVersion
                // @ts-ignore
                public static values(): javax.lang.model.SourceVersion[]
                // @ts-ignore
                public static valueOf(name: java.lang.String | string): javax.lang.model.SourceVersion
                /**
                 * Returns the latest source version that can be modeled.
                 * @return the latest source version that can be modeled
                 */
                // @ts-ignore
                public static latest(): javax.lang.model.SourceVersion
                /**
                 * Returns the latest source version fully supported by the
                 * current execution environment.  {@code RELEASE_5} or later must
                 * be returned.
                 * @return the latest source version that is fully supported
                 */
                // @ts-ignore
                public static latestSupported(): javax.lang.model.SourceVersion
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
                public static isIdentifier(name: java.lang.CharSequence): boolean
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
                public static isName(name: java.lang.CharSequence): boolean
                /**
                 * Returns whether or not {@code s} is a keyword or literal in the
                 * latest source version.
                 * @param s the string to check
                 * @return {#code true} if {@code s} is a keyword or literal, {@code false} otherwise.
                 */
                // @ts-ignore
                public static isKeyword(s: java.lang.CharSequence): boolean
            }
        }
    }
}
