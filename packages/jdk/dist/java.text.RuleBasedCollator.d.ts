declare namespace java {
    namespace text {
        /**
         * The <code>RuleBasedCollator</code> class is a concrete subclass of
         * <code>Collator</code> that provides a simple, data-driven, table
         * collator.  With this class you can create a customized table-based
         * <code>Collator</code>.  <code>RuleBasedCollator</code> maps
         * characters to sort keys.
         * <p>
         * <code>RuleBasedCollator</code> has the following restrictions
         * for efficiency (other subclasses may be used for more complex languages) :
         * <ol>
         * <li>If a special collation rule controlled by a &lt;modifier&gt; is
         * specified it applies to the whole collator object.
         * <li>All non-mentioned characters are at the end of the
         * collation order.
         * </ol>
         * <p>
         * The collation table is composed of a list of collation rules, where each
         * rule is of one of three forms:
         * <pre>
         * &lt;modifier&gt;
         * &lt;relation&gt; &lt;text-argument&gt;
         * &lt;reset&gt; &lt;text-argument&gt;
         * </pre>
         * The definitions of the rule elements is as follows:
         * <UL>
         * <LI><strong>Text-Argument</strong>: A text-argument is any sequence of
         * characters, excluding special characters (that is, common
         * whitespace characters [0009-000D, 0020] and rule syntax characters
         * [0021-002F, 003A-0040, 005B-0060, 007B-007E]). If those
         * characters are desired, you can put them in single quotes
         * (e.g. ampersand =&gt; '&amp;'). Note that unquoted white space characters
         * are ignored; e.g. <code>b c</code> is treated as <code>bc</code>.
         * <LI><strong>Modifier</strong>: There are currently two modifiers that
         * turn on special collation rules.
         * <UL>
         * <LI>'@' : Turns on backwards sorting of accents (secondary
         * differences), as in French.
         * <LI>'!' : Turns on Thai/Lao vowel-consonant swapping.  If this
         * rule is in force when a Thai vowel of the range
         * &#92;U0E40-&#92;U0E44 precedes a Thai consonant of the range
         * &#92;U0E01-&#92;U0E2E OR a Lao vowel of the range &#92;U0EC0-&#92;U0EC4
         * precedes a Lao consonant of the range &#92;U0E81-&#92;U0EAE then
         * the vowel is placed after the consonant for collation
         * purposes.
         * </UL>
         * <p>'@' : Indicates that accents are sorted backwards, as in French.
         * <LI><strong>Relation</strong>: The relations are the following:
         * <UL>
         * <LI>'&lt;' : Greater, as a letter difference (primary)
         * <LI>';' : Greater, as an accent difference (secondary)
         * <LI>',' : Greater, as a case difference (tertiary)
         * <LI>'=' : Equal
         * </UL>
         * <LI><strong>Reset</strong>: There is a single reset
         * which is used primarily for contractions and expansions, but which
         * can also be used to add a modification at the end of a set of rules.
         * <p>'&amp;' : Indicates that the next rule follows the position to where
         * the reset text-argument would be sorted.
         * </UL>
         * <p>
         * This sounds more complicated than it is in practice. For example, the
         * following are equivalent ways of expressing the same thing:
         * <blockquote>
         * <pre>
         * a &lt; b &lt; c
         * a &lt; b &amp; b &lt; c
         * a &lt; c &amp; a &lt; b
         * </pre>
         * </blockquote>
         * Notice that the order is important, as the subsequent item goes immediately
         * after the text-argument. The following are not equivalent:
         * <blockquote>
         * <pre>
         * a &lt; b &amp; a &lt; c
         * a &lt; c &amp; a &lt; b
         * </pre>
         * </blockquote>
         * Either the text-argument must already be present in the sequence, or some
         * initial substring of the text-argument must be present. (e.g. "a &lt; b &amp; ae &lt;
         * e" is valid since "a" is present in the sequence before "ae" is reset). In
         * this latter case, "ae" is not entered and treated as a single character;
         * instead, "e" is sorted as if it were expanded to two characters: "a"
         * followed by an "e". This difference appears in natural languages: in
         * traditional Spanish "ch" is treated as though it contracts to a single
         * character (expressed as "c &lt; ch &lt; d"), while in traditional German
         * a-umlaut is treated as though it expanded to two characters
         * (expressed as "a,A &lt; b,B ... &amp;ae;&#92;u00e3&amp;AE;&#92;u00c3").
         * [&#92;u00e3 and &#92;u00c3 are, of course, the escape sequences for a-umlaut.]
         * <p>
         * <strong>Ignorable Characters</strong>
         * <p>
         * For ignorable characters, the first rule must start with a relation (the
         * examples we have used above are really fragments; "a &lt; b" really should be
         * "&lt; a &lt; b"). If, however, the first relation is not "&lt;", then all the all
         * text-arguments up to the first "&lt;" are ignorable. For example, ", - &lt; a &lt; b"
         * makes "-" an ignorable character, as we saw earlier in the word
         * "black-birds". In the samples for different languages, you see that most
         * accents are ignorable.
         * <p><strong>Normalization and Accents</strong>
         * <p>
         * <code>RuleBasedCollator</code> automatically processes its rule table to
         * include both pre-composed and combining-character versions of
         * accented characters.  Even if the provided rule string contains only
         * base characters and separate combining accent characters, the pre-composed
         * accented characters matching all canonical combinations of characters from
         * the rule string will be entered in the table.
         * <p>
         * This allows you to use a RuleBasedCollator to compare accented strings
         * even when the collator is set to NO_DECOMPOSITION.  There are two caveats,
         * however.  First, if the strings to be collated contain combining
         * sequences that may not be in canonical order, you should set the collator to
         * CANONICAL_DECOMPOSITION or FULL_DECOMPOSITION to enable sorting of
         * combining sequences.  Second, if the strings contain characters with
         * compatibility decompositions (such as full-width and half-width forms),
         * you must use FULL_DECOMPOSITION, since the rule tables only include
         * canonical mappings.
         * <p><strong>Errors</strong>
         * <p>
         * The following are errors:
         * <UL>
         * <LI>A text-argument contains unquoted punctuation symbols
         * (e.g. "a &lt; b-c &lt; d").
         * <LI>A relation or reset character not followed by a text-argument
         * (e.g. "a &lt; ,b").
         * <LI>A reset where the text-argument (or an initial substring of the
         * text-argument) is not already in the sequence.
         * (e.g. "a &lt; b &amp; e &lt; f")
         * </UL>
         * If you produce one of these errors, a <code>RuleBasedCollator</code> throws
         * a <code>ParseException</code>.
         * <p><strong>Examples</strong>
         * <p>Simple:     "&lt; a &lt; b &lt; c &lt; d"
         * <p>Norwegian:  "&lt; a, A &lt; b, B &lt; c, C &lt; d, D &lt; e, E &lt; f, F
         * &lt; g, G &lt; h, H &lt; i, I &lt; j, J &lt; k, K &lt; l, L
         * &lt; m, M &lt; n, N &lt; o, O &lt; p, P &lt; q, Q &lt; r, R
         * &lt; s, S &lt; t, T &lt; u, U &lt; v, V &lt; w, W &lt; x, X
         * &lt; y, Y &lt; z, Z
         * &lt; &#92;u00E6, &#92;u00C6
         * &lt; &#92;u00F8, &#92;u00D8
         * &lt; &#92;u00E5 = a&#92;u030A, &#92;u00C5 = A&#92;u030A;
         * aa, AA"
         * <p>
         * To create a <code>RuleBasedCollator</code> object with specialized
         * rules tailored to your needs, you construct the <code>RuleBasedCollator</code>
         * with the rules contained in a <code>String</code> object. For example:
         * <blockquote>
         * <pre>
         * String simple = "&lt; a&lt; b&lt; c&lt; d";
         * RuleBasedCollator mySimple = new RuleBasedCollator(simple);
         * </pre>
         * </blockquote>
         * Or:
         * <blockquote>
         * <pre>
         * String Norwegian = "&lt; a, A &lt; b, B &lt; c, C &lt; d, D &lt; e, E &lt; f, F &lt; g, G &lt; h, H &lt; i, I" +
         * "&lt; j, J &lt; k, K &lt; l, L &lt; m, M &lt; n, N &lt; o, O &lt; p, P &lt; q, Q &lt; r, R" +
         * "&lt; s, S &lt; t, T &lt; u, U &lt; v, V &lt; w, W &lt; x, X &lt; y, Y &lt; z, Z" +
         * "&lt; &#92;u00E6, &#92;u00C6" +     // Latin letter ae &amp; AE
         * "&lt; &#92;u00F8, &#92;u00D8" +     // Latin letter o &amp; O with stroke
         * "&lt; &#92;u00E5 = a&#92;u030A," +  // Latin letter a with ring above
         * "  &#92;u00C5 = A&#92;u030A;" +  // Latin letter A with ring above
         * "  aa, AA";
         * RuleBasedCollator myNorwegian = new RuleBasedCollator(Norwegian);
         * </pre>
         * </blockquote>
         * <p>
         * A new collation rules string can be created by concatenating rules
         * strings. For example, the rules returned by {@link #getRules()} could
         * be concatenated to combine multiple <code>RuleBasedCollator</code>s.
         * <p>
         * The following example demonstrates how to change the order of
         * non-spacing accents,
         * <blockquote>
         * <pre>
         * // old rule
         * String oldRules = "=&#92;u0301;&#92;u0300;&#92;u0302;&#92;u0308"    // main accents
         * + ";&#92;u0327;&#92;u0303;&#92;u0304;&#92;u0305"    // main accents
         * + ";&#92;u0306;&#92;u0307;&#92;u0309;&#92;u030A"    // main accents
         * + ";&#92;u030B;&#92;u030C;&#92;u030D;&#92;u030E"    // main accents
         * + ";&#92;u030F;&#92;u0310;&#92;u0311;&#92;u0312"    // main accents
         * + "&lt; a , A ; ae, AE ; &#92;u00e6 , &#92;u00c6"
         * + "&lt; b , B &lt; c, C &lt; e, E &amp; C &lt; d, D";
         * // change the order of accent characters
         * String addOn = "&amp; &#92;u0300 ; &#92;u0308 ; &#92;u0302";
         * RuleBasedCollator myCollator = new RuleBasedCollator(oldRules + addOn);
         * </pre>
         * </blockquote>
         * @see Collator
         * @see CollationElementIterator
         * @author Helena Shih, Laura Werner, Richard Gillam
         */
        // @ts-ignore
        class RuleBasedCollator extends java.text.Collator {
            /**
             * RuleBasedCollator constructor.  This takes the table rules and builds
             * a collation table out of them.  Please see RuleBasedCollator class
             * description for more details on the collation rule syntax.
             * @see java.util.Locale
             * @param rules the collation rules to build the collation table from.
             * @exception ParseException A format exception
             *  will be thrown if the build process of the rules fails. For
             *  example, build rule "a &lt; ? &lt; d" will cause the constructor to
             *  throw the ParseException because the '?' is not quoted.
             */
            // @ts-ignore
            constructor(rules: java.lang.String | string)
            /**
             * Gets the table-based rules for the collation object.
             * @return returns the collation rules that the table collation object
             *  was created from.
             */
            // @ts-ignore
            public getRules(): string
            /**
             * Returns a CollationElementIterator for the given String.
             * @param source the string to be collated
             * @return a {#code CollationElementIterator} object
             * @see java.text.CollationElementIterator
             */
            // @ts-ignore
            public getCollationElementIterator(source: java.lang.String | string): java.text.CollationElementIterator
            /**
             * Returns a CollationElementIterator for the given CharacterIterator.
             * @param source the character iterator to be collated
             * @return a {#code CollationElementIterator} object
             * @see java.text.CollationElementIterator
             * @since 1.2
             */
            // @ts-ignore
            public getCollationElementIterator(source: java.text.CharacterIterator): java.text.CollationElementIterator
            /**
             * Compares the character data stored in two different strings based on the
             * collation rules.  Returns information about whether a string is less
             * than, greater than or equal to another string in a language.
             * This can be overriden in a subclass.
             * @exception NullPointerException if <code>source</code> or <code>target</code> is null.
             */
            // @ts-ignore
            public compare(source: java.lang.String | string, target: java.lang.String | string): number /*int*/
            /**
             * Transforms the string into a series of characters that can be compared
             * with CollationKey.compareTo. This overrides java.text.Collator.getCollationKey.
             * It can be overriden in a subclass.
             */
            // @ts-ignore
            public getCollationKey(source: java.lang.String | string): java.text.CollationKey
            /**
             * Standard override; no change in semantics.
             */
            // @ts-ignore
            public clone(): any
            /**
             * Compares the equality of two collation objects.
             * @param obj the table-based collation object to be compared with this.
             * @return true if the current table-based collation object is the same
             *  as the table-based collation object obj; false otherwise.
             */
            // @ts-ignore
            public equals(obj: java.lang.Object | any): boolean
            /**
             * Generates the hash code for the table-based collation object
             */
            // @ts-ignore
            public hashCode(): number /*int*/
        }
    }
}
