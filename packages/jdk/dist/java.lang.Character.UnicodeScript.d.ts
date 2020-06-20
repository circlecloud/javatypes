declare namespace java {
    namespace lang {
        namespace Character {
            /**
             * A family of character subsets representing the character scripts
             * defined in the <a href="http://www.unicode.org/reports/tr24/">
             * <i>Unicode Standard Annex #24: Script Names</i></a>. Every Unicode
             * character is assigned to a single Unicode script, either a specific
             * script, such as {@link Character.UnicodeScript#LATIN Latin}, or
             * one of the following three special values,
             * {@link Character.UnicodeScript#INHERITED Inherited},
             * {@link Character.UnicodeScript#COMMON Common} or
             * {@link Character.UnicodeScript#UNKNOWN Unknown}.
             * @since 1.7
             */
            // @ts-ignore
            class UnicodeScript extends java.lang.Enum<java.lang.Character.UnicodeScript> {
                // @ts-ignore
                values(): java.lang.Character.UnicodeScript[]
                // @ts-ignore
                valueOf(name: string): java.lang.Character.UnicodeScript
                /**
                 * Returns the enum constant representing the Unicode script of which
                 * the given character (Unicode code point) is assigned to.
                 * @param codePoint the character (Unicode code point) in question.
                 * @return The {#code UnicodeScript} constant representing the
                 *           Unicode script of which this character is assigned to.
                 * @exception IllegalArgumentException if the specified
                 *  {#code codePoint} is an invalid Unicode code point.
                 * @see Character#isValidCodePoint(int)
                 */
                // @ts-ignore
                of(codePoint: number /*int*/): java.lang.Character.UnicodeScript
                /**
                 * Returns the UnicodeScript constant with the given Unicode script
                 * name or the script name alias. Script names and their aliases are
                 * determined by The Unicode Standard. The files Scripts&lt;version&gt;.txt
                 * and PropertyValueAliases&lt;version&gt;.txt define script names
                 * and the script name aliases for a particular version of the
                 * standard. The {@link Character} class specifies the version of
                 * the standard that it supports.
                 * <p>
                 * Character case is ignored for all of the valid script names.
                 * The en_US locale's case mapping rules are used to provide
                 * case-insensitive string comparisons for script name validation.
                 * <p>
                 * @param scriptName A {#code UnicodeScript} name.
                 * @return The {#code UnicodeScript} constant identified
                 *          by {@code scriptName}
                 * @throws IllegalArgumentException if {#code scriptName} is an
                 *          invalid name
                 * @throws NullPointerException if {#code scriptName} is null
                 */
                // @ts-ignore
                forName(scriptName: string): java.lang.Character.UnicodeScript
            }
        }
    }
}
