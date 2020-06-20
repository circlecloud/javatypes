declare namespace java {
    namespace lang {
        /**
         * The {@code Character} class wraps a value of the primitive
         * type {@code char} in an object. An object of type
         * {@code Character} contains a single field whose type is
         * {@code char}.
         * <p>
         * In addition, this class provides several methods for determining
         * a character's category (lowercase letter, digit, etc.) and for converting
         * characters from uppercase to lowercase and vice versa.
         * <p>
         * Character information is based on the Unicode Standard, version 6.2.0.
         * <p>
         * The methods and data of class {@code Character} are defined by
         * the information in the <i>UnicodeData</i> file that is part of the
         * Unicode Character Database maintained by the Unicode
         * Consortium. This file specifies various properties including name
         * and general category for every defined Unicode code point or
         * character range.
         * <p>
         * The file and its description are available from the Unicode Consortium at:
         * <ul>
         * <li><a href="http://www.unicode.org">http://www.unicode.org</a>
         * </ul>
         * <h3><a name="unicode">Unicode Character Representations</a></h3>
         * <p>The {@code char} data type (and therefore the value that a
         * {@code Character} object encapsulates) are based on the
         * original Unicode specification, which defined characters as
         * fixed-width 16-bit entities. The Unicode Standard has since been
         * changed to allow for characters whose representation requires more
         * than 16 bits.  The range of legal <em>code point</em>s is now
         * U+0000 to U+10FFFF, known as <em>Unicode scalar value</em>.
         * (Refer to the <a
         * href="http://www.unicode.org/reports/tr27/#notation"><i>
         * definition</i></a> of the U+<i>n</i> notation in the Unicode
         * Standard.)
         * <p><a name="BMP">The set of characters from U+0000 to U+FFFF</a> is
         * sometimes referred to as the <em>Basic Multilingual Plane (BMP)</em>.
         * <a name="supplementary">Characters</a> whose code points are greater
         * than U+FFFF are called <em>supplementary character</em>s.  The Java
         * platform uses the UTF-16 representation in {@code char} arrays and
         * in the {@code String} and {@code StringBuffer} classes. In
         * this representation, supplementary characters are represented as a pair
         * of {@code char} values, the first from the <em>high-surrogates</em>
         * range, (&#92;uD800-&#92;uDBFF), the second from the
         * <em>low-surrogates</em> range (&#92;uDC00-&#92;uDFFF).
         * <p>A {@code char} value, therefore, represents Basic
         * Multilingual Plane (BMP) code points, including the surrogate
         * code points, or code units of the UTF-16 encoding. An
         * {@code int} value represents all Unicode code points,
         * including supplementary code points. The lower (least significant)
         * 21 bits of {@code int} are used to represent Unicode code
         * points and the upper (most significant) 11 bits must be zero.
         * Unless otherwise specified, the behavior with respect to
         * supplementary characters and surrogate {@code char} values is
         * as follows:
         * <ul>
         * <li>The methods that only accept a {@code char} value cannot support
         * supplementary characters. They treat {@code char} values from the
         * surrogate ranges as undefined characters. For example,
         * {@code Character.isLetter('\uD840')} returns {@code false}, even though
         * this specific value if followed by any low-surrogate value in a string
         * would represent a letter.
         * <li>The methods that accept an {@code int} value support all
         * Unicode characters, including supplementary characters. For
         * example, {@code Character.isLetter(0x2F81A)} returns
         * {@code true} because the code point value represents a letter
         * (a CJK ideograph).
         * </ul>
         * <p>In the Java SE API documentation, <em>Unicode code point</em> is
         * used for character values in the range between U+0000 and U+10FFFF,
         * and <em>Unicode code unit</em> is used for 16-bit
         * {@code char} values that are code units of the <em>UTF-16</em>
         * encoding. For more information on Unicode terminology, refer to the
         * <a href="http://www.unicode.org/glossary/">Unicode Glossary</a>.
         * @author Lee Boynton
         * @author Guy Steele
         * @author Akira Tanaka
         * @author Martin Buchholz
         * @author Ulf Zibis
         * @since 1.0
         */
        // @ts-ignore
        class Character extends java.lang.Object implements java.io.Serializable, java.lang.Comparable<java.lang.Character> {
            /**
             * Constructs a newly allocated {@code Character} object that
             * represents the specified {@code char} value.
             * @param value   the value to be represented by the
             *                   {#code Character} object.
             */
            // @ts-ignore
            constructor(value: string)
            /**
             * The minimum radix available for conversion to and from strings.
             * The constant value of this field is the smallest value permitted
             * for the radix argument in radix-conversion methods such as the
             * {@code digit} method, the {@code forDigit} method, and the
             * {@code toString} method of class {@code Integer}.
             * @see Character#digit(char, int)
             * @see Character#forDigit(int, int)
             * @see Integer#toString(int, int)
             * @see Integer#valueOf(String)
             */
            // @ts-ignore
            readonly MIN_RADIX: number /*int*/
            /**
             * The maximum radix available for conversion to and from strings.
             * The constant value of this field is the largest value permitted
             * for the radix argument in radix-conversion methods such as the
             * {@code digit} method, the {@code forDigit} method, and the
             * {@code toString} method of class {@code Integer}.
             * @see Character#digit(char, int)
             * @see Character#forDigit(int, int)
             * @see Integer#toString(int, int)
             * @see Integer#valueOf(String)
             */
            // @ts-ignore
            readonly MAX_RADIX: number /*int*/
            /**
             * The constant value of this field is the smallest value of type
             * {@code char}, {@code '\u0000'}.
             * @since 1.0.2
             */
            // @ts-ignore
            readonly MIN_VALUE: string
            /**
             * The constant value of this field is the largest value of type
             * {@code char}, {@code '\uFFFF'}.
             * @since 1.0.2
             */
            // @ts-ignore
            readonly MAX_VALUE: string
            /**
             * The {@code Class} instance representing the primitive type
             * {@code char}.
             * @since 1.1
             */
            // @ts-ignore
            readonly TYPE: java.lang.Class<java.lang.Character>
            /**
             * General category "Cn" in the Unicode specification.
             * @since 1.1
             */
            // @ts-ignore
            readonly UNASSIGNED: number /*byte*/
            /**
             * General category "Lu" in the Unicode specification.
             * @since 1.1
             */
            // @ts-ignore
            readonly UPPERCASE_LETTER: number /*byte*/
            /**
             * General category "Ll" in the Unicode specification.
             * @since 1.1
             */
            // @ts-ignore
            readonly LOWERCASE_LETTER: number /*byte*/
            /**
             * General category "Lt" in the Unicode specification.
             * @since 1.1
             */
            // @ts-ignore
            readonly TITLECASE_LETTER: number /*byte*/
            /**
             * General category "Lm" in the Unicode specification.
             * @since 1.1
             */
            // @ts-ignore
            readonly MODIFIER_LETTER: number /*byte*/
            /**
             * General category "Lo" in the Unicode specification.
             * @since 1.1
             */
            // @ts-ignore
            readonly OTHER_LETTER: number /*byte*/
            /**
             * General category "Mn" in the Unicode specification.
             * @since 1.1
             */
            // @ts-ignore
            readonly NON_SPACING_MARK: number /*byte*/
            /**
             * General category "Me" in the Unicode specification.
             * @since 1.1
             */
            // @ts-ignore
            readonly ENCLOSING_MARK: number /*byte*/
            /**
             * General category "Mc" in the Unicode specification.
             * @since 1.1
             */
            // @ts-ignore
            readonly COMBINING_SPACING_MARK: number /*byte*/
            /**
             * General category "Nd" in the Unicode specification.
             * @since 1.1
             */
            // @ts-ignore
            readonly DECIMAL_DIGIT_NUMBER: number /*byte*/
            /**
             * General category "Nl" in the Unicode specification.
             * @since 1.1
             */
            // @ts-ignore
            readonly LETTER_NUMBER: number /*byte*/
            /**
             * General category "No" in the Unicode specification.
             * @since 1.1
             */
            // @ts-ignore
            readonly OTHER_NUMBER: number /*byte*/
            /**
             * General category "Zs" in the Unicode specification.
             * @since 1.1
             */
            // @ts-ignore
            readonly SPACE_SEPARATOR: number /*byte*/
            /**
             * General category "Zl" in the Unicode specification.
             * @since 1.1
             */
            // @ts-ignore
            readonly LINE_SEPARATOR: number /*byte*/
            /**
             * General category "Zp" in the Unicode specification.
             * @since 1.1
             */
            // @ts-ignore
            readonly PARAGRAPH_SEPARATOR: number /*byte*/
            /**
             * General category "Cc" in the Unicode specification.
             * @since 1.1
             */
            // @ts-ignore
            readonly CONTROL: number /*byte*/
            /**
             * General category "Cf" in the Unicode specification.
             * @since 1.1
             */
            // @ts-ignore
            readonly FORMAT: number /*byte*/
            /**
             * General category "Co" in the Unicode specification.
             * @since 1.1
             */
            // @ts-ignore
            readonly PRIVATE_USE: number /*byte*/
            /**
             * General category "Cs" in the Unicode specification.
             * @since 1.1
             */
            // @ts-ignore
            readonly SURROGATE: number /*byte*/
            /**
             * General category "Pd" in the Unicode specification.
             * @since 1.1
             */
            // @ts-ignore
            readonly DASH_PUNCTUATION: number /*byte*/
            /**
             * General category "Ps" in the Unicode specification.
             * @since 1.1
             */
            // @ts-ignore
            readonly START_PUNCTUATION: number /*byte*/
            /**
             * General category "Pe" in the Unicode specification.
             * @since 1.1
             */
            // @ts-ignore
            readonly END_PUNCTUATION: number /*byte*/
            /**
             * General category "Pc" in the Unicode specification.
             * @since 1.1
             */
            // @ts-ignore
            readonly CONNECTOR_PUNCTUATION: number /*byte*/
            /**
             * General category "Po" in the Unicode specification.
             * @since 1.1
             */
            // @ts-ignore
            readonly OTHER_PUNCTUATION: number /*byte*/
            /**
             * General category "Sm" in the Unicode specification.
             * @since 1.1
             */
            // @ts-ignore
            readonly MATH_SYMBOL: number /*byte*/
            /**
             * General category "Sc" in the Unicode specification.
             * @since 1.1
             */
            // @ts-ignore
            readonly CURRENCY_SYMBOL: number /*byte*/
            /**
             * General category "Sk" in the Unicode specification.
             * @since 1.1
             */
            // @ts-ignore
            readonly MODIFIER_SYMBOL: number /*byte*/
            /**
             * General category "So" in the Unicode specification.
             * @since 1.1
             */
            // @ts-ignore
            readonly OTHER_SYMBOL: number /*byte*/
            /**
             * General category "Pi" in the Unicode specification.
             * @since 1.4
             */
            // @ts-ignore
            readonly INITIAL_QUOTE_PUNCTUATION: number /*byte*/
            /**
             * General category "Pf" in the Unicode specification.
             * @since 1.4
             */
            // @ts-ignore
            readonly FINAL_QUOTE_PUNCTUATION: number /*byte*/
            /**
             * Undefined bidirectional character type. Undefined {@code char}
             * values have undefined directionality in the Unicode specification.
             * @since 1.4
             */
            // @ts-ignore
            readonly DIRECTIONALITY_UNDEFINED: number /*byte*/
            /**
             * Strong bidirectional character type "L" in the Unicode specification.
             * @since 1.4
             */
            // @ts-ignore
            readonly DIRECTIONALITY_LEFT_TO_RIGHT: number /*byte*/
            /**
             * Strong bidirectional character type "R" in the Unicode specification.
             * @since 1.4
             */
            // @ts-ignore
            readonly DIRECTIONALITY_RIGHT_TO_LEFT: number /*byte*/
            /**
             * Strong bidirectional character type "AL" in the Unicode specification.
             * @since 1.4
             */
            // @ts-ignore
            readonly DIRECTIONALITY_RIGHT_TO_LEFT_ARABIC: number /*byte*/
            /**
             * Weak bidirectional character type "EN" in the Unicode specification.
             * @since 1.4
             */
            // @ts-ignore
            readonly DIRECTIONALITY_EUROPEAN_NUMBER: number /*byte*/
            /**
             * Weak bidirectional character type "ES" in the Unicode specification.
             * @since 1.4
             */
            // @ts-ignore
            readonly DIRECTIONALITY_EUROPEAN_NUMBER_SEPARATOR: number /*byte*/
            /**
             * Weak bidirectional character type "ET" in the Unicode specification.
             * @since 1.4
             */
            // @ts-ignore
            readonly DIRECTIONALITY_EUROPEAN_NUMBER_TERMINATOR: number /*byte*/
            /**
             * Weak bidirectional character type "AN" in the Unicode specification.
             * @since 1.4
             */
            // @ts-ignore
            readonly DIRECTIONALITY_ARABIC_NUMBER: number /*byte*/
            /**
             * Weak bidirectional character type "CS" in the Unicode specification.
             * @since 1.4
             */
            // @ts-ignore
            readonly DIRECTIONALITY_COMMON_NUMBER_SEPARATOR: number /*byte*/
            /**
             * Weak bidirectional character type "NSM" in the Unicode specification.
             * @since 1.4
             */
            // @ts-ignore
            readonly DIRECTIONALITY_NONSPACING_MARK: number /*byte*/
            /**
             * Weak bidirectional character type "BN" in the Unicode specification.
             * @since 1.4
             */
            // @ts-ignore
            readonly DIRECTIONALITY_BOUNDARY_NEUTRAL: number /*byte*/
            /**
             * Neutral bidirectional character type "B" in the Unicode specification.
             * @since 1.4
             */
            // @ts-ignore
            readonly DIRECTIONALITY_PARAGRAPH_SEPARATOR: number /*byte*/
            /**
             * Neutral bidirectional character type "S" in the Unicode specification.
             * @since 1.4
             */
            // @ts-ignore
            readonly DIRECTIONALITY_SEGMENT_SEPARATOR: number /*byte*/
            /**
             * Neutral bidirectional character type "WS" in the Unicode specification.
             * @since 1.4
             */
            // @ts-ignore
            readonly DIRECTIONALITY_WHITESPACE: number /*byte*/
            /**
             * Neutral bidirectional character type "ON" in the Unicode specification.
             * @since 1.4
             */
            // @ts-ignore
            readonly DIRECTIONALITY_OTHER_NEUTRALS: number /*byte*/
            /**
             * Strong bidirectional character type "LRE" in the Unicode specification.
             * @since 1.4
             */
            // @ts-ignore
            readonly DIRECTIONALITY_LEFT_TO_RIGHT_EMBEDDING: number /*byte*/
            /**
             * Strong bidirectional character type "LRO" in the Unicode specification.
             * @since 1.4
             */
            // @ts-ignore
            readonly DIRECTIONALITY_LEFT_TO_RIGHT_OVERRIDE: number /*byte*/
            /**
             * Strong bidirectional character type "RLE" in the Unicode specification.
             * @since 1.4
             */
            // @ts-ignore
            readonly DIRECTIONALITY_RIGHT_TO_LEFT_EMBEDDING: number /*byte*/
            /**
             * Strong bidirectional character type "RLO" in the Unicode specification.
             * @since 1.4
             */
            // @ts-ignore
            readonly DIRECTIONALITY_RIGHT_TO_LEFT_OVERRIDE: number /*byte*/
            /**
             * Weak bidirectional character type "PDF" in the Unicode specification.
             * @since 1.4
             */
            // @ts-ignore
            readonly DIRECTIONALITY_POP_DIRECTIONAL_FORMAT: number /*byte*/
            /**
             * The minimum value of a
             * <a href="http://www.unicode.org/glossary/#high_surrogate_code_unit">
             * Unicode high-surrogate code unit</a>
             * in the UTF-16 encoding, constant {@code '\uD800'}.
             * A high-surrogate is also known as a <i>leading-surrogate</i>.
             * @since 1.5
             */
            // @ts-ignore
            readonly MIN_HIGH_SURROGATE: string
            /**
             * The maximum value of a
             * <a href="http://www.unicode.org/glossary/#high_surrogate_code_unit">
             * Unicode high-surrogate code unit</a>
             * in the UTF-16 encoding, constant {@code '\uDBFF'}.
             * A high-surrogate is also known as a <i>leading-surrogate</i>.
             * @since 1.5
             */
            // @ts-ignore
            readonly MAX_HIGH_SURROGATE: string
            /**
             * The minimum value of a
             * <a href="http://www.unicode.org/glossary/#low_surrogate_code_unit">
             * Unicode low-surrogate code unit</a>
             * in the UTF-16 encoding, constant {@code '\uDC00'}.
             * A low-surrogate is also known as a <i>trailing-surrogate</i>.
             * @since 1.5
             */
            // @ts-ignore
            readonly MIN_LOW_SURROGATE: string
            /**
             * The maximum value of a
             * <a href="http://www.unicode.org/glossary/#low_surrogate_code_unit">
             * Unicode low-surrogate code unit</a>
             * in the UTF-16 encoding, constant {@code '\uDFFF'}.
             * A low-surrogate is also known as a <i>trailing-surrogate</i>.
             * @since 1.5
             */
            // @ts-ignore
            readonly MAX_LOW_SURROGATE: string
            /**
             * The minimum value of a Unicode surrogate code unit in the
             * UTF-16 encoding, constant {@code '\uD800'}.
             * @since 1.5
             */
            // @ts-ignore
            readonly MIN_SURROGATE: string
            /**
             * The maximum value of a Unicode surrogate code unit in the
             * UTF-16 encoding, constant {@code '\uDFFF'}.
             * @since 1.5
             */
            // @ts-ignore
            readonly MAX_SURROGATE: string
            /**
             * The minimum value of a
             * <a href="http://www.unicode.org/glossary/#supplementary_code_point">
             * Unicode supplementary code point</a>, constant {@code U+10000}.
             * @since 1.5
             */
            // @ts-ignore
            readonly MIN_SUPPLEMENTARY_CODE_POINT: number /*int*/
            /**
             * The minimum value of a
             * <a href="http://www.unicode.org/glossary/#code_point">
             * Unicode code point</a>, constant {@code U+0000}.
             * @since 1.5
             */
            // @ts-ignore
            readonly MIN_CODE_POINT: number /*int*/
            /**
             * The maximum value of a
             * <a href="http://www.unicode.org/glossary/#code_point">
             * Unicode code point</a>, constant {@code U+10FFFF}.
             * @since 1.5
             */
            // @ts-ignore
            readonly MAX_CODE_POINT: number /*int*/
            /**
             * The number of bits used to represent a <tt>char</tt> value in unsigned
             * binary form, constant {@code 16}.
             * @since 1.5
             */
            // @ts-ignore
            readonly SIZE: number /*int*/
            /**
             * The number of bytes used to represent a {@code char} value in unsigned
             * binary form.
             * @since 1.8
             */
            // @ts-ignore
            readonly BYTES: number /*int*/
            /**
             * Returns a <tt>Character</tt> instance representing the specified
             * <tt>char</tt> value.
             * If a new <tt>Character</tt> instance is not required, this method
             * should generally be used in preference to the constructor
             * {@link #Character(char)}, as this method is likely to yield
             * significantly better space and time performance by caching
             * frequently requested values.
             * This method will always cache values in the range {@code
             * '\u0000'} to {@code '\u007F'}, inclusive, and may
             * cache other values outside of this range.
             * @param c a char value.
             * @return a <tt>Character</tt> instance representing <tt>c</tt>.
             * @since 1.5
             */
            // @ts-ignore
            valueOf(c: string): java.lang.Character
            /**
             * Returns the value of this {@code Character} object.
             * @return the primitive {#code char} value represented by
             *           this object.
             */
            // @ts-ignore
            charValue(): char
            /**
             * Returns a hash code for this {@code Character}; equal to the result
             * of invoking {@code charValue()}.
             * @return a hash code value for this {#code Character}
             */
            // @ts-ignore
            hashCode(): int
            /**
             * Returns a hash code for a {@code char} value; compatible with
             * {@code Character.hashCode()}.
             * @since 1.8
             * @param value The {#code char} for which to return a hash code.
             * @return a hash code value for a {#code char} value.
             */
            // @ts-ignore
            hashCode(value: string): int
            /**
             * Compares this object against the specified object.
             * The result is {@code true} if and only if the argument is not
             * {@code null} and is a {@code Character} object that
             * represents the same {@code char} value as this object.
             * @param obj   the object to compare with.
             * @return {#code true} if the objects are the same;
             *           {@code false} otherwise.
             */
            // @ts-ignore
            equals(obj: any): boolean
            /**
             * Returns a {@code String} object representing this
             * {@code Character}'s value.  The result is a string of
             * length 1 whose sole component is the primitive
             * {@code char} value represented by this
             * {@code Character} object.
             * @return a string representation of this object.
             */
            // @ts-ignore
            toString(): java.lang.String
            /**
             * Returns a {@code String} object representing the
             * specified {@code char}.  The result is a string of length
             * 1 consisting solely of the specified {@code char}.
             * @param c the {#code char} to be converted
             * @return the string representation of the specified {#code char}
             * @since 1.4
             */
            // @ts-ignore
            toString(c: string): java.lang.String
            /**
             * Determines whether the specified code point is a valid
             * <a href="http://www.unicode.org/glossary/#code_point">
             * Unicode code point value</a>.
             * @param codePoint the Unicode code point to be tested
             * @return {#code true} if the specified code point value is between
             *          {@link #MIN_CODE_POINT} and
             *          {@link #MAX_CODE_POINT} inclusive;
             *          {@code false} otherwise.
             * @since 1.5
             */
            // @ts-ignore
            isValidCodePoint(codePoint: number /*int*/): boolean
            /**
             * Determines whether the specified character (Unicode code point)
             * is in the <a href="#BMP">Basic Multilingual Plane (BMP)</a>.
             * Such code points can be represented using a single {@code char}.
             * @param codePoint the character (Unicode code point) to be tested
             * @return {#code true} if the specified code point is between
             *          {@link #MIN_VALUE} and {@link #MAX_VALUE} inclusive;
             *          {@code false} otherwise.
             * @since 1.7
             */
            // @ts-ignore
            isBmpCodePoint(codePoint: number /*int*/): boolean
            /**
             * Determines whether the specified character (Unicode code point)
             * is in the <a href="#supplementary">supplementary character</a> range.
             * @param codePoint the character (Unicode code point) to be tested
             * @return {#code true} if the specified code point is between
             *          {@link #MIN_SUPPLEMENTARY_CODE_POINT} and
             *          {@link #MAX_CODE_POINT} inclusive;
             *          {@code false} otherwise.
             * @since 1.5
             */
            // @ts-ignore
            isSupplementaryCodePoint(codePoint: number /*int*/): boolean
            /**
             * Determines if the given {@code char} value is a
             * <a href="http://www.unicode.org/glossary/#high_surrogate_code_unit">
             * Unicode high-surrogate code unit</a>
             * (also known as <i>leading-surrogate code unit</i>).
             * <p>Such values do not represent characters by themselves,
             * but are used in the representation of
             * <a href="#supplementary">supplementary characters</a>
             * in the UTF-16 encoding.
             * @param ch the {#code char} value to be tested.
             * @return {#code true} if the {@code char} value is between
             *          {@link #MIN_HIGH_SURROGATE} and
             *          {@link #MAX_HIGH_SURROGATE} inclusive;
             *          {@code false} otherwise.
             * @see Character#isLowSurrogate(char)
             * @see Character.UnicodeBlock#of(int)
             * @since 1.5
             */
            // @ts-ignore
            isHighSurrogate(ch: string): boolean
            /**
             * Determines if the given {@code char} value is a
             * <a href="http://www.unicode.org/glossary/#low_surrogate_code_unit">
             * Unicode low-surrogate code unit</a>
             * (also known as <i>trailing-surrogate code unit</i>).
             * <p>Such values do not represent characters by themselves,
             * but are used in the representation of
             * <a href="#supplementary">supplementary characters</a>
             * in the UTF-16 encoding.
             * @param ch the {#code char} value to be tested.
             * @return {#code true} if the {@code char} value is between
             *          {@link #MIN_LOW_SURROGATE} and
             *          {@link #MAX_LOW_SURROGATE} inclusive;
             *          {@code false} otherwise.
             * @see Character#isHighSurrogate(char)
             * @since 1.5
             */
            // @ts-ignore
            isLowSurrogate(ch: string): boolean
            /**
             * Determines if the given {@code char} value is a Unicode
             * <i>surrogate code unit</i>.
             * <p>Such values do not represent characters by themselves,
             * but are used in the representation of
             * <a href="#supplementary">supplementary characters</a>
             * in the UTF-16 encoding.
             * <p>A char value is a surrogate code unit if and only if it is either
             * a {@linkplain #isLowSurrogate(char) low-surrogate code unit} or
             * a {@linkplain #isHighSurrogate(char) high-surrogate code unit}.
             * @param ch the {#code char} value to be tested.
             * @return {#code true} if the {@code char} value is between
             *          {@link #MIN_SURROGATE} and
             *          {@link #MAX_SURROGATE} inclusive;
             *          {@code false} otherwise.
             * @since 1.7
             */
            // @ts-ignore
            isSurrogate(ch: string): boolean
            /**
             * Determines whether the specified pair of {@code char}
             * values is a valid
             * <a href="http://www.unicode.org/glossary/#surrogate_pair">
             * Unicode surrogate pair</a>.
             * <p>This method is equivalent to the expression:
             * <blockquote><pre>{@code
             * isHighSurrogate(high) && isLowSurrogate(low)
             * }</pre></blockquote>
             * @param high the high-surrogate code value to be tested
             * @param low the low-surrogate code value to be tested
             * @return {#code true} if the specified high and
             *  low-surrogate code values represent a valid surrogate pair;
             *  {@code false} otherwise.
             * @since 1.5
             */
            // @ts-ignore
            isSurrogatePair(high: string, low: string): boolean
            /**
             * Determines the number of {@code char} values needed to
             * represent the specified character (Unicode code point). If the
             * specified character is equal to or greater than 0x10000, then
             * the method returns 2. Otherwise, the method returns 1.
             * <p>This method doesn't validate the specified character to be a
             * valid Unicode code point. The caller must validate the
             * character value using {@link #isValidCodePoint(int) isValidCodePoint}
             * if necessary.
             * @param codePoint the character (Unicode code point) to be tested.
             * @return 2 if the character is a valid supplementary character; 1 otherwise.
             * @see Character#isSupplementaryCodePoint(int)
             * @since 1.5
             */
            // @ts-ignore
            charCount(codePoint: number /*int*/): int
            /**
             * Converts the specified surrogate pair to its supplementary code
             * point value. This method does not validate the specified
             * surrogate pair. The caller must validate it using {@link
             * #isSurrogatePair(char, char) isSurrogatePair} if necessary.
             * @param high the high-surrogate code unit
             * @param low the low-surrogate code unit
             * @return the supplementary code point composed from the
             *          specified surrogate pair.
             * @since 1.5
             */
            // @ts-ignore
            toCodePoint(high: string, low: string): int
            /**
             * Returns the code point at the given index of the
             * {@code CharSequence}. If the {@code char} value at
             * the given index in the {@code CharSequence} is in the
             * high-surrogate range, the following index is less than the
             * length of the {@code CharSequence}, and the
             * {@code char} value at the following index is in the
             * low-surrogate range, then the supplementary code point
             * corresponding to this surrogate pair is returned. Otherwise,
             * the {@code char} value at the given index is returned.
             * @param seq a sequence of {#code char} values (Unicode code
             *  units)
             * @param index the index to the {#code char} values (Unicode
             *  code units) in {@code seq} to be converted
             * @return the Unicode code point at the given index
             * @exception NullPointerException if {#code seq} is null.
             * @exception IndexOutOfBoundsException if the value
             *  {#code index} is negative or not less than
             *  {@link CharSequence#length() seq.length()}.
             * @since 1.5
             */
            // @ts-ignore
            codePointAt(seq: java.lang.CharSequence, index: number /*int*/): int
            /**
             * Returns the code point at the given index of the
             * {@code char} array. If the {@code char} value at
             * the given index in the {@code char} array is in the
             * high-surrogate range, the following index is less than the
             * length of the {@code char} array, and the
             * {@code char} value at the following index is in the
             * low-surrogate range, then the supplementary code point
             * corresponding to this surrogate pair is returned. Otherwise,
             * the {@code char} value at the given index is returned.
             * @param a the {#code char} array
             * @param index the index to the {#code char} values (Unicode
             *  code units) in the {@code char} array to be converted
             * @return the Unicode code point at the given index
             * @exception NullPointerException if {#code a} is null.
             * @exception IndexOutOfBoundsException if the value
             *  {#code index} is negative or not less than
             *  the length of the {@code char} array.
             * @since 1.5
             */
            // @ts-ignore
            codePointAt(a: string[], index: number /*int*/): int
            /**
             * Returns the code point at the given index of the
             * {@code char} array, where only array elements with
             * {@code index} less than {@code limit} can be used. If
             * the {@code char} value at the given index in the
             * {@code char} array is in the high-surrogate range, the
             * following index is less than the {@code limit}, and the
             * {@code char} value at the following index is in the
             * low-surrogate range, then the supplementary code point
             * corresponding to this surrogate pair is returned. Otherwise,
             * the {@code char} value at the given index is returned.
             * @param a the {#code char} array
             * @param index the index to the {#code char} values (Unicode
             *  code units) in the {@code char} array to be converted
             * @param limit the index after the last array element that
             *  can be used in the {#code char} array
             * @return the Unicode code point at the given index
             * @exception NullPointerException if {#code a} is null.
             * @exception IndexOutOfBoundsException if the {#code index}
             *  argument is negative or not less than the {@code limit}
             *  argument, or if the {@code limit} argument is negative or
             *  greater than the length of the {@code char} array.
             * @since 1.5
             */
            // @ts-ignore
            codePointAt(a: string[], index: number /*int*/, limit: number /*int*/): int
            /**
             * Returns the code point preceding the given index of the
             * {@code CharSequence}. If the {@code char} value at
             * {@code (index - 1)} in the {@code CharSequence} is in
             * the low-surrogate range, {@code (index - 2)} is not
             * negative, and the {@code char} value at {@code (index - 2)}
             * in the {@code CharSequence} is in the
             * high-surrogate range, then the supplementary code point
             * corresponding to this surrogate pair is returned. Otherwise,
             * the {@code char} value at {@code (index - 1)} is
             * returned.
             * @param seq the {#code CharSequence} instance
             * @param index the index following the code point that should be returned
             * @return the Unicode code point value before the given index.
             * @exception NullPointerException if {#code seq} is null.
             * @exception IndexOutOfBoundsException if the {#code index}
             *  argument is less than 1 or greater than {@link
             *  CharSequence#length() seq.length()}.
             * @since 1.5
             */
            // @ts-ignore
            codePointBefore(seq: java.lang.CharSequence, index: number /*int*/): int
            /**
             * Returns the code point preceding the given index of the
             * {@code char} array. If the {@code char} value at
             * {@code (index - 1)} in the {@code char} array is in
             * the low-surrogate range, {@code (index - 2)} is not
             * negative, and the {@code char} value at {@code (index - 2)}
             * in the {@code char} array is in the
             * high-surrogate range, then the supplementary code point
             * corresponding to this surrogate pair is returned. Otherwise,
             * the {@code char} value at {@code (index - 1)} is
             * returned.
             * @param a the {#code char} array
             * @param index the index following the code point that should be returned
             * @return the Unicode code point value before the given index.
             * @exception NullPointerException if {#code a} is null.
             * @exception IndexOutOfBoundsException if the {#code index}
             *  argument is less than 1 or greater than the length of the
             *  {@code char} array
             * @since 1.5
             */
            // @ts-ignore
            codePointBefore(a: string[], index: number /*int*/): int
            /**
             * Returns the code point preceding the given index of the
             * {@code char} array, where only array elements with
             * {@code index} greater than or equal to {@code start}
             * can be used. If the {@code char} value at {@code (index - 1)}
             * in the {@code char} array is in the
             * low-surrogate range, {@code (index - 2)} is not less than
             * {@code start}, and the {@code char} value at
             * {@code (index - 2)} in the {@code char} array is in
             * the high-surrogate range, then the supplementary code point
             * corresponding to this surrogate pair is returned. Otherwise,
             * the {@code char} value at {@code (index - 1)} is
             * returned.
             * @param a the {#code char} array
             * @param index the index following the code point that should be returned
             * @param start the index of the first array element in the
             *  {#code char} array
             * @return the Unicode code point value before the given index.
             * @exception NullPointerException if {#code a} is null.
             * @exception IndexOutOfBoundsException if the {#code index}
             *  argument is not greater than the {@code start} argument or
             *  is greater than the length of the {@code char} array, or
             *  if the {@code start} argument is negative or not less than
             *  the length of the {@code char} array.
             * @since 1.5
             */
            // @ts-ignore
            codePointBefore(a: string[], index: number /*int*/, start: number /*int*/): int
            /**
             * Returns the leading surrogate (a
             * <a href="http://www.unicode.org/glossary/#high_surrogate_code_unit">
             * high surrogate code unit</a>) of the
             * <a href="http://www.unicode.org/glossary/#surrogate_pair">
             * surrogate pair</a>
             * representing the specified supplementary character (Unicode
             * code point) in the UTF-16 encoding.  If the specified character
             * is not a
             * <a href="Character.html#supplementary">supplementary character</a>,
             * an unspecified {@code char} is returned.
             * <p>If
             * {@link #isSupplementaryCodePoint isSupplementaryCodePoint(x)}
             * is {@code true}, then
             * {@link #isHighSurrogate isHighSurrogate}{@code (highSurrogate(x))} and
             * {@link #toCodePoint toCodePoint}{@code (highSurrogate(x), }{@link #lowSurrogate lowSurrogate}{@code (x)) == x}
             * are also always {@code true}.
             * @param codePoint a supplementary character (Unicode code point)
             * @return the leading surrogate code unit used to represent the
             *           character in the UTF-16 encoding
             * @since 1.7
             */
            // @ts-ignore
            highSurrogate(codePoint: number /*int*/): char
            /**
             * Returns the trailing surrogate (a
             * <a href="http://www.unicode.org/glossary/#low_surrogate_code_unit">
             * low surrogate code unit</a>) of the
             * <a href="http://www.unicode.org/glossary/#surrogate_pair">
             * surrogate pair</a>
             * representing the specified supplementary character (Unicode
             * code point) in the UTF-16 encoding.  If the specified character
             * is not a
             * <a href="Character.html#supplementary">supplementary character</a>,
             * an unspecified {@code char} is returned.
             * <p>If
             * {@link #isSupplementaryCodePoint isSupplementaryCodePoint(x)}
             * is {@code true}, then
             * {@link #isLowSurrogate isLowSurrogate}{@code (lowSurrogate(x))} and
             * {@link #toCodePoint toCodePoint}{@code (}{@link #highSurrogate highSurrogate}{@code (x), lowSurrogate(x)) == x}
             * are also always {@code true}.
             * @param codePoint a supplementary character (Unicode code point)
             * @return the trailing surrogate code unit used to represent the
             *           character in the UTF-16 encoding
             * @since 1.7
             */
            // @ts-ignore
            lowSurrogate(codePoint: number /*int*/): char
            /**
             * Converts the specified character (Unicode code point) to its
             * UTF-16 representation. If the specified code point is a BMP
             * (Basic Multilingual Plane or Plane 0) value, the same value is
             * stored in {@code dst[dstIndex]}, and 1 is returned. If the
             * specified code point is a supplementary character, its
             * surrogate values are stored in {@code dst[dstIndex]}
             * (high-surrogate) and {@code dst[dstIndex+1]}
             * (low-surrogate), and 2 is returned.
             * @param codePoint the character (Unicode code point) to be converted.
             * @param dst an array of {#code char} in which the
             *  {@code codePoint}'s UTF-16 value is stored.
             * @param dstIndex the start index into the {#code dst}
             *  array where the converted value is stored.
             * @return 1 if the code point is a BMP code point, 2 if the
             *  code point is a supplementary code point.
             * @exception IllegalArgumentException if the specified
             *  {#code codePoint} is not a valid Unicode code point.
             * @exception NullPointerException if the specified {#code dst} is null.
             * @exception IndexOutOfBoundsException if {#code dstIndex}
             *  is negative or not less than {@code dst.length}, or if
             *  {@code dst} at {@code dstIndex} doesn't have enough
             *  array element(s) to store the resulting {@code char}
             *  value(s). (If {@code dstIndex} is equal to
             *  {@code dst.length-1} and the specified
             *  {@code codePoint} is a supplementary character, the
             *  high-surrogate value is not stored in
             *  {@code dst[dstIndex]}.)
             * @since 1.5
             */
            // @ts-ignore
            toChars(codePoint: number /*int*/, dst: string[], dstIndex: number /*int*/): int
            /**
             * Converts the specified character (Unicode code point) to its
             * UTF-16 representation stored in a {@code char} array. If
             * the specified code point is a BMP (Basic Multilingual Plane or
             * Plane 0) value, the resulting {@code char} array has
             * the same value as {@code codePoint}. If the specified code
             * point is a supplementary code point, the resulting
             * {@code char} array has the corresponding surrogate pair.
             * @param codePoint a Unicode code point
             * @return a {#code char} array having
             *          {@code codePoint}'s UTF-16 representation.
             * @exception IllegalArgumentException if the specified
             *  {#code codePoint} is not a valid Unicode code point.
             * @since 1.5
             */
            // @ts-ignore
            toChars(codePoint: number /*int*/): char[]
            /**
             * Returns the number of Unicode code points in the text range of
             * the specified char sequence. The text range begins at the
             * specified {@code beginIndex} and extends to the
             * {@code char} at index {@code endIndex - 1}. Thus the
             * length (in {@code char}s) of the text range is
             * {@code endIndex-beginIndex}. Unpaired surrogates within
             * the text range count as one code point each.
             * @param seq the char sequence
             * @param beginIndex the index to the first {#code char} of
             *  the text range.
             * @param endIndex the index after the last {#code char} of
             *  the text range.
             * @return the number of Unicode code points in the specified text
             *  range
             * @exception NullPointerException if {#code seq} is null.
             * @exception IndexOutOfBoundsException if the
             *  {#code beginIndex} is negative, or {@code endIndex}
             *  is larger than the length of the given sequence, or
             *  {@code beginIndex} is larger than {@code endIndex}.
             * @since 1.5
             */
            // @ts-ignore
            codePointCount(seq: java.lang.CharSequence, beginIndex: number /*int*/, endIndex: number /*int*/): int
            /**
             * Returns the number of Unicode code points in a subarray of the
             * {@code char} array argument. The {@code offset}
             * argument is the index of the first {@code char} of the
             * subarray and the {@code count} argument specifies the
             * length of the subarray in {@code char}s. Unpaired
             * surrogates within the subarray count as one code point each.
             * @param a the {#code char} array
             * @param offset the index of the first {#code char} in the
             *  given {@code char} array
             * @param count the length of the subarray in {#code char}s
             * @return the number of Unicode code points in the specified subarray
             * @exception NullPointerException if {#code a} is null.
             * @exception IndexOutOfBoundsException if {#code offset} or
             *  {@code count} is negative, or if {@code offset +
             *  count} is larger than the length of the given array.
             * @since 1.5
             */
            // @ts-ignore
            codePointCount(a: string[], offset: number /*int*/, count: number /*int*/): int
            /**
             * Returns the index within the given char sequence that is offset
             * from the given {@code index} by {@code codePointOffset}
             * code points. Unpaired surrogates within the text range given by
             * {@code index} and {@code codePointOffset} count as
             * one code point each.
             * @param seq the char sequence
             * @param index the index to be offset
             * @param codePointOffset the offset in code points
             * @return the index within the char sequence
             * @exception NullPointerException if {#code seq} is null.
             * @exception IndexOutOfBoundsException if {#code index}
             *    is negative or larger then the length of the char sequence,
             *    or if {@code codePointOffset} is positive and the
             *    subsequence starting with {@code index} has fewer than
             *    {@code codePointOffset} code points, or if
             *    {@code codePointOffset} is negative and the subsequence
             *    before {@code index} has fewer than the absolute value
             *    of {@code codePointOffset} code points.
             * @since 1.5
             */
            // @ts-ignore
            offsetByCodePoints(seq: java.lang.CharSequence, index: number /*int*/, codePointOffset: number /*int*/): int
            /**
             * Returns the index within the given {@code char} subarray
             * that is offset from the given {@code index} by
             * {@code codePointOffset} code points. The
             * {@code start} and {@code count} arguments specify a
             * subarray of the {@code char} array. Unpaired surrogates
             * within the text range given by {@code index} and
             * {@code codePointOffset} count as one code point each.
             * @param a the {#code char} array
             * @param start the index of the first {#code char} of the
             *  subarray
             * @param count the length of the subarray in {#code char}s
             * @param index the index to be offset
             * @param codePointOffset the offset in code points
             * @return the index within the subarray
             * @exception NullPointerException if {#code a} is null.
             * @exception IndexOutOfBoundsException
             *    if {#code start} or {@code count} is negative,
             *    or if {@code start + count} is larger than the length of
             *    the given array,
             *    or if {@code index} is less than {@code start} or
             *    larger then {@code start + count},
             *    or if {@code codePointOffset} is positive and the text range
             *    starting with {@code index} and ending with {@code start + count - 1}
             *    has fewer than {@code codePointOffset} code
             *    points,
             *    or if {@code codePointOffset} is negative and the text range
             *    starting with {@code start} and ending with {@code index - 1}
             *    has fewer than the absolute value of
             *    {@code codePointOffset} code points.
             * @since 1.5
             */
            // @ts-ignore
            offsetByCodePoints(a: string[], start: number /*int*/, count: number /*int*/, index: number /*int*/, codePointOffset: number /*int*/): int
            /**
             * Determines if the specified character is a lowercase character.
             * <p>
             * A character is lowercase if its general category type, provided
             * by {@code Character.getType(ch)}, is
             * {@code LOWERCASE_LETTER}, or it has contributory property
             * Other_Lowercase as defined by the Unicode Standard.
             * <p>
             * The following are examples of lowercase characters:
             * <blockquote><pre>
             * a b c d e f g h i j k l m n o p q r s t u v w x y z
             * '&#92;u00DF' '&#92;u00E0' '&#92;u00E1' '&#92;u00E2' '&#92;u00E3' '&#92;u00E4' '&#92;u00E5' '&#92;u00E6'
             * '&#92;u00E7' '&#92;u00E8' '&#92;u00E9' '&#92;u00EA' '&#92;u00EB' '&#92;u00EC' '&#92;u00ED' '&#92;u00EE'
             * '&#92;u00EF' '&#92;u00F0' '&#92;u00F1' '&#92;u00F2' '&#92;u00F3' '&#92;u00F4' '&#92;u00F5' '&#92;u00F6'
             * '&#92;u00F8' '&#92;u00F9' '&#92;u00FA' '&#92;u00FB' '&#92;u00FC' '&#92;u00FD' '&#92;u00FE' '&#92;u00FF'
             * </pre></blockquote>
             * <p> Many other Unicode characters are lowercase too.
             * <p><b>Note:</b> This method cannot handle <a
             * href="#supplementary"> supplementary characters</a>. To support
             * all Unicode characters, including supplementary characters, use
             * the {@link #isLowerCase(int)} method.
             * @param ch   the character to be tested.
             * @return {#code true} if the character is lowercase;
             *           {@code false} otherwise.
             * @see Character#isLowerCase(char)
             * @see Character#isTitleCase(char)
             * @see Character#toLowerCase(char)
             * @see Character#getType(char)
             */
            // @ts-ignore
            isLowerCase(ch: string): boolean
            /**
             * Determines if the specified character (Unicode code point) is a
             * lowercase character.
             * <p>
             * A character is lowercase if its general category type, provided
             * by {@link Character#getType getType(codePoint)}, is
             * {@code LOWERCASE_LETTER}, or it has contributory property
             * Other_Lowercase as defined by the Unicode Standard.
             * <p>
             * The following are examples of lowercase characters:
             * <blockquote><pre>
             * a b c d e f g h i j k l m n o p q r s t u v w x y z
             * '&#92;u00DF' '&#92;u00E0' '&#92;u00E1' '&#92;u00E2' '&#92;u00E3' '&#92;u00E4' '&#92;u00E5' '&#92;u00E6'
             * '&#92;u00E7' '&#92;u00E8' '&#92;u00E9' '&#92;u00EA' '&#92;u00EB' '&#92;u00EC' '&#92;u00ED' '&#92;u00EE'
             * '&#92;u00EF' '&#92;u00F0' '&#92;u00F1' '&#92;u00F2' '&#92;u00F3' '&#92;u00F4' '&#92;u00F5' '&#92;u00F6'
             * '&#92;u00F8' '&#92;u00F9' '&#92;u00FA' '&#92;u00FB' '&#92;u00FC' '&#92;u00FD' '&#92;u00FE' '&#92;u00FF'
             * </pre></blockquote>
             * <p> Many other Unicode characters are lowercase too.
             * @param codePoint the character (Unicode code point) to be tested.
             * @return {#code true} if the character is lowercase;
             *           {@code false} otherwise.
             * @see Character#isLowerCase(int)
             * @see Character#isTitleCase(int)
             * @see Character#toLowerCase(int)
             * @see Character#getType(int)
             * @since 1.5
             */
            // @ts-ignore
            isLowerCase(codePoint: number /*int*/): boolean
            /**
             * Determines if the specified character is an uppercase character.
             * <p>
             * A character is uppercase if its general category type, provided by
             * {@code Character.getType(ch)}, is {@code UPPERCASE_LETTER}.
             * or it has contributory property Other_Uppercase as defined by the Unicode Standard.
             * <p>
             * The following are examples of uppercase characters:
             * <blockquote><pre>
             * A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
             * '&#92;u00C0' '&#92;u00C1' '&#92;u00C2' '&#92;u00C3' '&#92;u00C4' '&#92;u00C5' '&#92;u00C6' '&#92;u00C7'
             * '&#92;u00C8' '&#92;u00C9' '&#92;u00CA' '&#92;u00CB' '&#92;u00CC' '&#92;u00CD' '&#92;u00CE' '&#92;u00CF'
             * '&#92;u00D0' '&#92;u00D1' '&#92;u00D2' '&#92;u00D3' '&#92;u00D4' '&#92;u00D5' '&#92;u00D6' '&#92;u00D8'
             * '&#92;u00D9' '&#92;u00DA' '&#92;u00DB' '&#92;u00DC' '&#92;u00DD' '&#92;u00DE'
             * </pre></blockquote>
             * <p> Many other Unicode characters are uppercase too.
             * <p><b>Note:</b> This method cannot handle <a
             * href="#supplementary"> supplementary characters</a>. To support
             * all Unicode characters, including supplementary characters, use
             * the {@link #isUpperCase(int)} method.
             * @param ch   the character to be tested.
             * @return {#code true} if the character is uppercase;
             *           {@code false} otherwise.
             * @see Character#isLowerCase(char)
             * @see Character#isTitleCase(char)
             * @see Character#toUpperCase(char)
             * @see Character#getType(char)
             * @since 1.0
             */
            // @ts-ignore
            isUpperCase(ch: string): boolean
            /**
             * Determines if the specified character (Unicode code point) is an uppercase character.
             * <p>
             * A character is uppercase if its general category type, provided by
             * {@link Character#getType(int) getType(codePoint)}, is {@code UPPERCASE_LETTER},
             * or it has contributory property Other_Uppercase as defined by the Unicode Standard.
             * <p>
             * The following are examples of uppercase characters:
             * <blockquote><pre>
             * A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
             * '&#92;u00C0' '&#92;u00C1' '&#92;u00C2' '&#92;u00C3' '&#92;u00C4' '&#92;u00C5' '&#92;u00C6' '&#92;u00C7'
             * '&#92;u00C8' '&#92;u00C9' '&#92;u00CA' '&#92;u00CB' '&#92;u00CC' '&#92;u00CD' '&#92;u00CE' '&#92;u00CF'
             * '&#92;u00D0' '&#92;u00D1' '&#92;u00D2' '&#92;u00D3' '&#92;u00D4' '&#92;u00D5' '&#92;u00D6' '&#92;u00D8'
             * '&#92;u00D9' '&#92;u00DA' '&#92;u00DB' '&#92;u00DC' '&#92;u00DD' '&#92;u00DE'
             * </pre></blockquote>
             * <p> Many other Unicode characters are uppercase too.<p>
             * @param codePoint the character (Unicode code point) to be tested.
             * @return {#code true} if the character is uppercase;
             *           {@code false} otherwise.
             * @see Character#isLowerCase(int)
             * @see Character#isTitleCase(int)
             * @see Character#toUpperCase(int)
             * @see Character#getType(int)
             * @since 1.5
             */
            // @ts-ignore
            isUpperCase(codePoint: number /*int*/): boolean
            /**
             * Determines if the specified character is a titlecase character.
             * <p>
             * A character is a titlecase character if its general
             * category type, provided by {@code Character.getType(ch)},
             * is {@code TITLECASE_LETTER}.
             * <p>
             * Some characters look like pairs of Latin letters. For example, there
             * is an uppercase letter that looks like "LJ" and has a corresponding
             * lowercase letter that looks like "lj". A third form, which looks like "Lj",
             * is the appropriate form to use when rendering a word in lowercase
             * with initial capitals, as for a book title.
             * <p>
             * These are some of the Unicode characters for which this method returns
             * {@code true}:
             * <ul>
             * <li>{@code LATIN CAPITAL LETTER D WITH SMALL LETTER Z WITH CARON}
             * <li>{@code LATIN CAPITAL LETTER L WITH SMALL LETTER J}
             * <li>{@code LATIN CAPITAL LETTER N WITH SMALL LETTER J}
             * <li>{@code LATIN CAPITAL LETTER D WITH SMALL LETTER Z}
             * </ul>
             * <p> Many other Unicode characters are titlecase too.
             * <p><b>Note:</b> This method cannot handle <a
             * href="#supplementary"> supplementary characters</a>. To support
             * all Unicode characters, including supplementary characters, use
             * the {@link #isTitleCase(int)} method.
             * @param ch   the character to be tested.
             * @return {#code true} if the character is titlecase;
             *           {@code false} otherwise.
             * @see Character#isLowerCase(char)
             * @see Character#isUpperCase(char)
             * @see Character#toTitleCase(char)
             * @see Character#getType(char)
             * @since 1.0.2
             */
            // @ts-ignore
            isTitleCase(ch: string): boolean
            /**
             * Determines if the specified character (Unicode code point) is a titlecase character.
             * <p>
             * A character is a titlecase character if its general
             * category type, provided by {@link Character#getType(int) getType(codePoint)},
             * is {@code TITLECASE_LETTER}.
             * <p>
             * Some characters look like pairs of Latin letters. For example, there
             * is an uppercase letter that looks like "LJ" and has a corresponding
             * lowercase letter that looks like "lj". A third form, which looks like "Lj",
             * is the appropriate form to use when rendering a word in lowercase
             * with initial capitals, as for a book title.
             * <p>
             * These are some of the Unicode characters for which this method returns
             * {@code true}:
             * <ul>
             * <li>{@code LATIN CAPITAL LETTER D WITH SMALL LETTER Z WITH CARON}
             * <li>{@code LATIN CAPITAL LETTER L WITH SMALL LETTER J}
             * <li>{@code LATIN CAPITAL LETTER N WITH SMALL LETTER J}
             * <li>{@code LATIN CAPITAL LETTER D WITH SMALL LETTER Z}
             * </ul>
             * <p> Many other Unicode characters are titlecase too.<p>
             * @param codePoint the character (Unicode code point) to be tested.
             * @return {#code true} if the character is titlecase;
             *           {@code false} otherwise.
             * @see Character#isLowerCase(int)
             * @see Character#isUpperCase(int)
             * @see Character#toTitleCase(int)
             * @see Character#getType(int)
             * @since 1.5
             */
            // @ts-ignore
            isTitleCase(codePoint: number /*int*/): boolean
            /**
             * Determines if the specified character is a digit.
             * <p>
             * A character is a digit if its general category type, provided
             * by {@code Character.getType(ch)}, is
             * {@code DECIMAL_DIGIT_NUMBER}.
             * <p>
             * Some Unicode character ranges that contain digits:
             * <ul>
             * <li>{@code '\u0030'} through {@code '\u0039'},
             * ISO-LATIN-1 digits ({@code '0'} through {@code '9'})
             * <li>{@code '\u0660'} through {@code '\u0669'},
             * Arabic-Indic digits
             * <li>{@code '\u06F0'} through {@code '\u06F9'},
             * Extended Arabic-Indic digits
             * <li>{@code '\u0966'} through {@code '\u096F'},
             * Devanagari digits
             * <li>{@code '\uFF10'} through {@code '\uFF19'},
             * Fullwidth digits
             * </ul>
             * Many other character ranges contain digits as well.
             * <p><b>Note:</b> This method cannot handle <a
             * href="#supplementary"> supplementary characters</a>. To support
             * all Unicode characters, including supplementary characters, use
             * the {@link #isDigit(int)} method.
             * @param ch   the character to be tested.
             * @return {#code true} if the character is a digit;
             *           {@code false} otherwise.
             * @see Character#digit(char, int)
             * @see Character#forDigit(int, int)
             * @see Character#getType(char)
             */
            // @ts-ignore
            isDigit(ch: string): boolean
            /**
             * Determines if the specified character (Unicode code point) is a digit.
             * <p>
             * A character is a digit if its general category type, provided
             * by {@link Character#getType(int) getType(codePoint)}, is
             * {@code DECIMAL_DIGIT_NUMBER}.
             * <p>
             * Some Unicode character ranges that contain digits:
             * <ul>
             * <li>{@code '\u0030'} through {@code '\u0039'},
             * ISO-LATIN-1 digits ({@code '0'} through {@code '9'})
             * <li>{@code '\u0660'} through {@code '\u0669'},
             * Arabic-Indic digits
             * <li>{@code '\u06F0'} through {@code '\u06F9'},
             * Extended Arabic-Indic digits
             * <li>{@code '\u0966'} through {@code '\u096F'},
             * Devanagari digits
             * <li>{@code '\uFF10'} through {@code '\uFF19'},
             * Fullwidth digits
             * </ul>
             * Many other character ranges contain digits as well.
             * @param codePoint the character (Unicode code point) to be tested.
             * @return {#code true} if the character is a digit;
             *           {@code false} otherwise.
             * @see Character#forDigit(int, int)
             * @see Character#getType(int)
             * @since 1.5
             */
            // @ts-ignore
            isDigit(codePoint: number /*int*/): boolean
            /**
             * Determines if a character is defined in Unicode.
             * <p>
             * A character is defined if at least one of the following is true:
             * <ul>
             * <li>It has an entry in the UnicodeData file.
             * <li>It has a value in a range defined by the UnicodeData file.
             * </ul>
             * <p><b>Note:</b> This method cannot handle <a
             * href="#supplementary"> supplementary characters</a>. To support
             * all Unicode characters, including supplementary characters, use
             * the {@link #isDefined(int)} method.
             * @param ch   the character to be tested
             * @return {#code true} if the character has a defined meaning
             *           in Unicode; {@code false} otherwise.
             * @see Character#isDigit(char)
             * @see Character#isLetter(char)
             * @see Character#isLetterOrDigit(char)
             * @see Character#isLowerCase(char)
             * @see Character#isTitleCase(char)
             * @see Character#isUpperCase(char)
             * @since 1.0.2
             */
            // @ts-ignore
            isDefined(ch: string): boolean
            /**
             * Determines if a character (Unicode code point) is defined in Unicode.
             * <p>
             * A character is defined if at least one of the following is true:
             * <ul>
             * <li>It has an entry in the UnicodeData file.
             * <li>It has a value in a range defined by the UnicodeData file.
             * </ul>
             * @param codePoint the character (Unicode code point) to be tested.
             * @return {#code true} if the character has a defined meaning
             *           in Unicode; {@code false} otherwise.
             * @see Character#isDigit(int)
             * @see Character#isLetter(int)
             * @see Character#isLetterOrDigit(int)
             * @see Character#isLowerCase(int)
             * @see Character#isTitleCase(int)
             * @see Character#isUpperCase(int)
             * @since 1.5
             */
            // @ts-ignore
            isDefined(codePoint: number /*int*/): boolean
            /**
             * Determines if the specified character is a letter.
             * <p>
             * A character is considered to be a letter if its general
             * category type, provided by {@code Character.getType(ch)},
             * is any of the following:
             * <ul>
             * <li> {@code UPPERCASE_LETTER}
             * <li> {@code LOWERCASE_LETTER}
             * <li> {@code TITLECASE_LETTER}
             * <li> {@code MODIFIER_LETTER}
             * <li> {@code OTHER_LETTER}
             * </ul>
             * Not all letters have case. Many characters are
             * letters but are neither uppercase nor lowercase nor titlecase.
             * <p><b>Note:</b> This method cannot handle <a
             * href="#supplementary"> supplementary characters</a>. To support
             * all Unicode characters, including supplementary characters, use
             * the {@link #isLetter(int)} method.
             * @param ch   the character to be tested.
             * @return {#code true} if the character is a letter;
             *           {@code false} otherwise.
             * @see Character#isDigit(char)
             * @see Character#isJavaIdentifierStart(char)
             * @see Character#isJavaLetter(char)
             * @see Character#isJavaLetterOrDigit(char)
             * @see Character#isLetterOrDigit(char)
             * @see Character#isLowerCase(char)
             * @see Character#isTitleCase(char)
             * @see Character#isUnicodeIdentifierStart(char)
             * @see Character#isUpperCase(char)
             */
            // @ts-ignore
            isLetter(ch: string): boolean
            /**
             * Determines if the specified character (Unicode code point) is a letter.
             * <p>
             * A character is considered to be a letter if its general
             * category type, provided by {@link Character#getType(int) getType(codePoint)},
             * is any of the following:
             * <ul>
             * <li> {@code UPPERCASE_LETTER}
             * <li> {@code LOWERCASE_LETTER}
             * <li> {@code TITLECASE_LETTER}
             * <li> {@code MODIFIER_LETTER}
             * <li> {@code OTHER_LETTER}
             * </ul>
             * Not all letters have case. Many characters are
             * letters but are neither uppercase nor lowercase nor titlecase.
             * @param codePoint the character (Unicode code point) to be tested.
             * @return {#code true} if the character is a letter;
             *           {@code false} otherwise.
             * @see Character#isDigit(int)
             * @see Character#isJavaIdentifierStart(int)
             * @see Character#isLetterOrDigit(int)
             * @see Character#isLowerCase(int)
             * @see Character#isTitleCase(int)
             * @see Character#isUnicodeIdentifierStart(int)
             * @see Character#isUpperCase(int)
             * @since 1.5
             */
            // @ts-ignore
            isLetter(codePoint: number /*int*/): boolean
            /**
             * Determines if the specified character is a letter or digit.
             * <p>
             * A character is considered to be a letter or digit if either
             * {@code Character.isLetter(char ch)} or
             * {@code Character.isDigit(char ch)} returns
             * {@code true} for the character.
             * <p><b>Note:</b> This method cannot handle <a
             * href="#supplementary"> supplementary characters</a>. To support
             * all Unicode characters, including supplementary characters, use
             * the {@link #isLetterOrDigit(int)} method.
             * @param ch   the character to be tested.
             * @return {#code true} if the character is a letter or digit;
             *           {@code false} otherwise.
             * @see Character#isDigit(char)
             * @see Character#isJavaIdentifierPart(char)
             * @see Character#isJavaLetter(char)
             * @see Character#isJavaLetterOrDigit(char)
             * @see Character#isLetter(char)
             * @see Character#isUnicodeIdentifierPart(char)
             * @since 1.0.2
             */
            // @ts-ignore
            isLetterOrDigit(ch: string): boolean
            /**
             * Determines if the specified character (Unicode code point) is a letter or digit.
             * <p>
             * A character is considered to be a letter or digit if either
             * {@link #isLetter(int) isLetter(codePoint)} or
             * {@link #isDigit(int) isDigit(codePoint)} returns
             * {@code true} for the character.
             * @param codePoint the character (Unicode code point) to be tested.
             * @return {#code true} if the character is a letter or digit;
             *           {@code false} otherwise.
             * @see Character#isDigit(int)
             * @see Character#isJavaIdentifierPart(int)
             * @see Character#isLetter(int)
             * @see Character#isUnicodeIdentifierPart(int)
             * @since 1.5
             */
            // @ts-ignore
            isLetterOrDigit(codePoint: number /*int*/): boolean
            /**
             * Determines if the specified character is permissible as the first
             * character in a Java identifier.
             * <p>
             * A character may start a Java identifier if and only if
             * one of the following is true:
             * <ul>
             * <li> {@link #isLetter(char) isLetter(ch)} returns {@code true}
             * <li> {@link #getType(char) getType(ch)} returns {@code LETTER_NUMBER}
             * <li> {@code ch} is a currency symbol (such as {@code '$'})
             * <li> {@code ch} is a connecting punctuation character (such as {@code '_'}).
             * </ul>
             * @param ch the character to be tested.
             * @return {#code true} if the character may start a Java
             *           identifier; {@code false} otherwise.
             * @see Character#isJavaLetterOrDigit(char)
             * @see Character#isJavaIdentifierStart(char)
             * @see Character#isJavaIdentifierPart(char)
             * @see Character#isLetter(char)
             * @see Character#isLetterOrDigit(char)
             * @see Character#isUnicodeIdentifierStart(char)
             * @since 1.02
             * @deprecated Replaced by isJavaIdentifierStart(char).
             */
            // @ts-ignore
            isJavaLetter(ch: string): boolean
            /**
             * Determines if the specified character may be part of a Java
             * identifier as other than the first character.
             * <p>
             * A character may be part of a Java identifier if and only if any
             * of the following are true:
             * <ul>
             * <li>  it is a letter
             * <li>  it is a currency symbol (such as {@code '$'})
             * <li>  it is a connecting punctuation character (such as {@code '_'})
             * <li>  it is a digit
             * <li>  it is a numeric letter (such as a Roman numeral character)
             * <li>  it is a combining mark
             * <li>  it is a non-spacing mark
             * <li> {@code isIdentifierIgnorable} returns
             * {@code true} for the character.
             * </ul>
             * @param ch the character to be tested.
             * @return {#code true} if the character may be part of a
             *           Java identifier; {@code false} otherwise.
             * @see Character#isJavaLetter(char)
             * @see Character#isJavaIdentifierStart(char)
             * @see Character#isJavaIdentifierPart(char)
             * @see Character#isLetter(char)
             * @see Character#isLetterOrDigit(char)
             * @see Character#isUnicodeIdentifierPart(char)
             * @see Character#isIdentifierIgnorable(char)
             * @since 1.02
             * @deprecated Replaced by isJavaIdentifierPart(char).
             */
            // @ts-ignore
            isJavaLetterOrDigit(ch: string): boolean
            /**
             * Determines if the specified character (Unicode code point) is an alphabet.
             * <p>
             * A character is considered to be alphabetic if its general category type,
             * provided by {@link Character#getType(int) getType(codePoint)}, is any of
             * the following:
             * <ul>
             * <li> <code>UPPERCASE_LETTER</code>
             * <li> <code>LOWERCASE_LETTER</code>
             * <li> <code>TITLECASE_LETTER</code>
             * <li> <code>MODIFIER_LETTER</code>
             * <li> <code>OTHER_LETTER</code>
             * <li> <code>LETTER_NUMBER</code>
             * </ul>
             * or it has contributory property Other_Alphabetic as defined by the
             * Unicode Standard.
             * @param codePoint the character (Unicode code point) to be tested.
             * @return <code>true</code> if the character is a Unicode alphabet
             *           character, <code>false</code> otherwise.
             * @since 1.7
             */
            // @ts-ignore
            isAlphabetic(codePoint: number /*int*/): boolean
            /**
             * Determines if the specified character (Unicode code point) is a CJKV
             * (Chinese, Japanese, Korean and Vietnamese) ideograph, as defined by
             * the Unicode Standard.
             * @param codePoint the character (Unicode code point) to be tested.
             * @return <code>true</code> if the character is a Unicode ideograph
             *           character, <code>false</code> otherwise.
             * @since 1.7
             */
            // @ts-ignore
            isIdeographic(codePoint: number /*int*/): boolean
            /**
             * Determines if the specified character is
             * permissible as the first character in a Java identifier.
             * <p>
             * A character may start a Java identifier if and only if
             * one of the following conditions is true:
             * <ul>
             * <li> {@link #isLetter(char) isLetter(ch)} returns {@code true}
             * <li> {@link #getType(char) getType(ch)} returns {@code LETTER_NUMBER}
             * <li> {@code ch} is a currency symbol (such as {@code '$'})
             * <li> {@code ch} is a connecting punctuation character (such as {@code '_'}).
             * </ul>
             * <p><b>Note:</b> This method cannot handle <a
             * href="#supplementary"> supplementary characters</a>. To support
             * all Unicode characters, including supplementary characters, use
             * the {@link #isJavaIdentifierStart(int)} method.
             * @param ch the character to be tested.
             * @return {#code true} if the character may start a Java identifier;
             *           {@code false} otherwise.
             * @see Character#isJavaIdentifierPart(char)
             * @see Character#isLetter(char)
             * @see Character#isUnicodeIdentifierStart(char)
             * @see javax.lang.model.SourceVersion#isIdentifier(CharSequence)
             * @since 1.1
             */
            // @ts-ignore
            isJavaIdentifierStart(ch: string): boolean
            /**
             * Determines if the character (Unicode code point) is
             * permissible as the first character in a Java identifier.
             * <p>
             * A character may start a Java identifier if and only if
             * one of the following conditions is true:
             * <ul>
             * <li> {@link #isLetter(int) isLetter(codePoint)}
             * returns {@code true}
             * <li> {@link #getType(int) getType(codePoint)}
             * returns {@code LETTER_NUMBER}
             * <li> the referenced character is a currency symbol (such as {@code '$'})
             * <li> the referenced character is a connecting punctuation character
             * (such as {@code '_'}).
             * </ul>
             * @param codePoint the character (Unicode code point) to be tested.
             * @return {#code true} if the character may start a Java identifier;
             *           {@code false} otherwise.
             * @see Character#isJavaIdentifierPart(int)
             * @see Character#isLetter(int)
             * @see Character#isUnicodeIdentifierStart(int)
             * @see javax.lang.model.SourceVersion#isIdentifier(CharSequence)
             * @since 1.5
             */
            // @ts-ignore
            isJavaIdentifierStart(codePoint: number /*int*/): boolean
            /**
             * Determines if the specified character may be part of a Java
             * identifier as other than the first character.
             * <p>
             * A character may be part of a Java identifier if any of the following
             * are true:
             * <ul>
             * <li>  it is a letter
             * <li>  it is a currency symbol (such as {@code '$'})
             * <li>  it is a connecting punctuation character (such as {@code '_'})
             * <li>  it is a digit
             * <li>  it is a numeric letter (such as a Roman numeral character)
             * <li>  it is a combining mark
             * <li>  it is a non-spacing mark
             * <li> {@code isIdentifierIgnorable} returns
             * {@code true} for the character
             * </ul>
             * <p><b>Note:</b> This method cannot handle <a
             * href="#supplementary"> supplementary characters</a>. To support
             * all Unicode characters, including supplementary characters, use
             * the {@link #isJavaIdentifierPart(int)} method.
             * @param ch      the character to be tested.
             * @return {#code true} if the character may be part of a
             *           Java identifier; {@code false} otherwise.
             * @see Character#isIdentifierIgnorable(char)
             * @see Character#isJavaIdentifierStart(char)
             * @see Character#isLetterOrDigit(char)
             * @see Character#isUnicodeIdentifierPart(char)
             * @see javax.lang.model.SourceVersion#isIdentifier(CharSequence)
             * @since 1.1
             */
            // @ts-ignore
            isJavaIdentifierPart(ch: string): boolean
            /**
             * Determines if the character (Unicode code point) may be part of a Java
             * identifier as other than the first character.
             * <p>
             * A character may be part of a Java identifier if any of the following
             * are true:
             * <ul>
             * <li>  it is a letter
             * <li>  it is a currency symbol (such as {@code '$'})
             * <li>  it is a connecting punctuation character (such as {@code '_'})
             * <li>  it is a digit
             * <li>  it is a numeric letter (such as a Roman numeral character)
             * <li>  it is a combining mark
             * <li>  it is a non-spacing mark
             * <li> {@link #isIdentifierIgnorable(int)
             * isIdentifierIgnorable(codePoint)} returns {@code true} for
             * the character
             * </ul>
             * @param codePoint the character (Unicode code point) to be tested.
             * @return {#code true} if the character may be part of a
             *           Java identifier; {@code false} otherwise.
             * @see Character#isIdentifierIgnorable(int)
             * @see Character#isJavaIdentifierStart(int)
             * @see Character#isLetterOrDigit(int)
             * @see Character#isUnicodeIdentifierPart(int)
             * @see javax.lang.model.SourceVersion#isIdentifier(CharSequence)
             * @since 1.5
             */
            // @ts-ignore
            isJavaIdentifierPart(codePoint: number /*int*/): boolean
            /**
             * Determines if the specified character is permissible as the
             * first character in a Unicode identifier.
             * <p>
             * A character may start a Unicode identifier if and only if
             * one of the following conditions is true:
             * <ul>
             * <li> {@link #isLetter(char) isLetter(ch)} returns {@code true}
             * <li> {@link #getType(char) getType(ch)} returns
             * {@code LETTER_NUMBER}.
             * </ul>
             * <p><b>Note:</b> This method cannot handle <a
             * href="#supplementary"> supplementary characters</a>. To support
             * all Unicode characters, including supplementary characters, use
             * the {@link #isUnicodeIdentifierStart(int)} method.
             * @param ch      the character to be tested.
             * @return {#code true} if the character may start a Unicode
             *           identifier; {@code false} otherwise.
             * @see Character#isJavaIdentifierStart(char)
             * @see Character#isLetter(char)
             * @see Character#isUnicodeIdentifierPart(char)
             * @since 1.1
             */
            // @ts-ignore
            isUnicodeIdentifierStart(ch: string): boolean
            /**
             * Determines if the specified character (Unicode code point) is permissible as the
             * first character in a Unicode identifier.
             * <p>
             * A character may start a Unicode identifier if and only if
             * one of the following conditions is true:
             * <ul>
             * <li> {@link #isLetter(int) isLetter(codePoint)}
             * returns {@code true}
             * <li> {@link #getType(int) getType(codePoint)}
             * returns {@code LETTER_NUMBER}.
             * </ul>
             * @param codePoint the character (Unicode code point) to be tested.
             * @return {#code true} if the character may start a Unicode
             *           identifier; {@code false} otherwise.
             * @see Character#isJavaIdentifierStart(int)
             * @see Character#isLetter(int)
             * @see Character#isUnicodeIdentifierPart(int)
             * @since 1.5
             */
            // @ts-ignore
            isUnicodeIdentifierStart(codePoint: number /*int*/): boolean
            /**
             * Determines if the specified character may be part of a Unicode
             * identifier as other than the first character.
             * <p>
             * A character may be part of a Unicode identifier if and only if
             * one of the following statements is true:
             * <ul>
             * <li>  it is a letter
             * <li>  it is a connecting punctuation character (such as {@code '_'})
             * <li>  it is a digit
             * <li>  it is a numeric letter (such as a Roman numeral character)
             * <li>  it is a combining mark
             * <li>  it is a non-spacing mark
             * <li> {@code isIdentifierIgnorable} returns
             * {@code true} for this character.
             * </ul>
             * <p><b>Note:</b> This method cannot handle <a
             * href="#supplementary"> supplementary characters</a>. To support
             * all Unicode characters, including supplementary characters, use
             * the {@link #isUnicodeIdentifierPart(int)} method.
             * @param ch      the character to be tested.
             * @return {#code true} if the character may be part of a
             *           Unicode identifier; {@code false} otherwise.
             * @see Character#isIdentifierIgnorable(char)
             * @see Character#isJavaIdentifierPart(char)
             * @see Character#isLetterOrDigit(char)
             * @see Character#isUnicodeIdentifierStart(char)
             * @since 1.1
             */
            // @ts-ignore
            isUnicodeIdentifierPart(ch: string): boolean
            /**
             * Determines if the specified character (Unicode code point) may be part of a Unicode
             * identifier as other than the first character.
             * <p>
             * A character may be part of a Unicode identifier if and only if
             * one of the following statements is true:
             * <ul>
             * <li>  it is a letter
             * <li>  it is a connecting punctuation character (such as {@code '_'})
             * <li>  it is a digit
             * <li>  it is a numeric letter (such as a Roman numeral character)
             * <li>  it is a combining mark
             * <li>  it is a non-spacing mark
             * <li> {@code isIdentifierIgnorable} returns
             * {@code true} for this character.
             * </ul>
             * @param codePoint the character (Unicode code point) to be tested.
             * @return {#code true} if the character may be part of a
             *           Unicode identifier; {@code false} otherwise.
             * @see Character#isIdentifierIgnorable(int)
             * @see Character#isJavaIdentifierPart(int)
             * @see Character#isLetterOrDigit(int)
             * @see Character#isUnicodeIdentifierStart(int)
             * @since 1.5
             */
            // @ts-ignore
            isUnicodeIdentifierPart(codePoint: number /*int*/): boolean
            /**
             * Determines if the specified character should be regarded as
             * an ignorable character in a Java identifier or a Unicode identifier.
             * <p>
             * The following Unicode characters are ignorable in a Java identifier
             * or a Unicode identifier:
             * <ul>
             * <li>ISO control characters that are not whitespace
             * <ul>
             * <li>{@code '\u0000'} through {@code '\u0008'}
             * <li>{@code '\u000E'} through {@code '\u001B'}
             * <li>{@code '\u007F'} through {@code '\u009F'}
             * </ul>
             * <li>all characters that have the {@code FORMAT} general
             * category value
             * </ul>
             * <p><b>Note:</b> This method cannot handle <a
             * href="#supplementary"> supplementary characters</a>. To support
             * all Unicode characters, including supplementary characters, use
             * the {@link #isIdentifierIgnorable(int)} method.
             * @param ch      the character to be tested.
             * @return {#code true} if the character is an ignorable control
             *           character that may be part of a Java or Unicode identifier;
             *            {@code false} otherwise.
             * @see Character#isJavaIdentifierPart(char)
             * @see Character#isUnicodeIdentifierPart(char)
             * @since 1.1
             */
            // @ts-ignore
            isIdentifierIgnorable(ch: string): boolean
            /**
             * Determines if the specified character (Unicode code point) should be regarded as
             * an ignorable character in a Java identifier or a Unicode identifier.
             * <p>
             * The following Unicode characters are ignorable in a Java identifier
             * or a Unicode identifier:
             * <ul>
             * <li>ISO control characters that are not whitespace
             * <ul>
             * <li>{@code '\u0000'} through {@code '\u0008'}
             * <li>{@code '\u000E'} through {@code '\u001B'}
             * <li>{@code '\u007F'} through {@code '\u009F'}
             * </ul>
             * <li>all characters that have the {@code FORMAT} general
             * category value
             * </ul>
             * @param codePoint the character (Unicode code point) to be tested.
             * @return {#code true} if the character is an ignorable control
             *           character that may be part of a Java or Unicode identifier;
             *           {@code false} otherwise.
             * @see Character#isJavaIdentifierPart(int)
             * @see Character#isUnicodeIdentifierPart(int)
             * @since 1.5
             */
            // @ts-ignore
            isIdentifierIgnorable(codePoint: number /*int*/): boolean
            /**
             * Converts the character argument to lowercase using case
             * mapping information from the UnicodeData file.
             * <p>
             * Note that
             * {@code Character.isLowerCase(Character.toLowerCase(ch))}
             * does not always return {@code true} for some ranges of
             * characters, particularly those that are symbols or ideographs.
             * <p>In general, {@link String#toLowerCase()} should be used to map
             * characters to lowercase. {@code String} case mapping methods
             * have several benefits over {@code Character} case mapping methods.
             * {@code String} case mapping methods can perform locale-sensitive
             * mappings, context-sensitive mappings, and 1:M character mappings, whereas
             * the {@code Character} case mapping methods cannot.
             * <p><b>Note:</b> This method cannot handle <a
             * href="#supplementary"> supplementary characters</a>. To support
             * all Unicode characters, including supplementary characters, use
             * the {@link #toLowerCase(int)} method.
             * @param ch   the character to be converted.
             * @return the lowercase equivalent of the character, if any;
             *           otherwise, the character itself.
             * @see Character#isLowerCase(char)
             * @see String#toLowerCase()
             */
            // @ts-ignore
            toLowerCase(ch: string): char
            /**
             * Converts the character (Unicode code point) argument to
             * lowercase using case mapping information from the UnicodeData
             * file.
             * <p> Note that
             * {@code Character.isLowerCase(Character.toLowerCase(codePoint))}
             * does not always return {@code true} for some ranges of
             * characters, particularly those that are symbols or ideographs.
             * <p>In general, {@link String#toLowerCase()} should be used to map
             * characters to lowercase. {@code String} case mapping methods
             * have several benefits over {@code Character} case mapping methods.
             * {@code String} case mapping methods can perform locale-sensitive
             * mappings, context-sensitive mappings, and 1:M character mappings, whereas
             * the {@code Character} case mapping methods cannot.
             * @param codePoint   the character (Unicode code point) to be converted.
             * @return the lowercase equivalent of the character (Unicode code
             *           point), if any; otherwise, the character itself.
             * @see Character#isLowerCase(int)
             * @see String#toLowerCase()
             * @since 1.5
             */
            // @ts-ignore
            toLowerCase(codePoint: number /*int*/): int
            /**
             * Converts the character argument to uppercase using case mapping
             * information from the UnicodeData file.
             * <p>
             * Note that
             * {@code Character.isUpperCase(Character.toUpperCase(ch))}
             * does not always return {@code true} for some ranges of
             * characters, particularly those that are symbols or ideographs.
             * <p>In general, {@link String#toUpperCase()} should be used to map
             * characters to uppercase. {@code String} case mapping methods
             * have several benefits over {@code Character} case mapping methods.
             * {@code String} case mapping methods can perform locale-sensitive
             * mappings, context-sensitive mappings, and 1:M character mappings, whereas
             * the {@code Character} case mapping methods cannot.
             * <p><b>Note:</b> This method cannot handle <a
             * href="#supplementary"> supplementary characters</a>. To support
             * all Unicode characters, including supplementary characters, use
             * the {@link #toUpperCase(int)} method.
             * @param ch   the character to be converted.
             * @return the uppercase equivalent of the character, if any;
             *           otherwise, the character itself.
             * @see Character#isUpperCase(char)
             * @see String#toUpperCase()
             */
            // @ts-ignore
            toUpperCase(ch: string): char
            /**
             * Converts the character (Unicode code point) argument to
             * uppercase using case mapping information from the UnicodeData
             * file.
             * <p>Note that
             * {@code Character.isUpperCase(Character.toUpperCase(codePoint))}
             * does not always return {@code true} for some ranges of
             * characters, particularly those that are symbols or ideographs.
             * <p>In general, {@link String#toUpperCase()} should be used to map
             * characters to uppercase. {@code String} case mapping methods
             * have several benefits over {@code Character} case mapping methods.
             * {@code String} case mapping methods can perform locale-sensitive
             * mappings, context-sensitive mappings, and 1:M character mappings, whereas
             * the {@code Character} case mapping methods cannot.
             * @param codePoint   the character (Unicode code point) to be converted.
             * @return the uppercase equivalent of the character, if any;
             *           otherwise, the character itself.
             * @see Character#isUpperCase(int)
             * @see String#toUpperCase()
             * @since 1.5
             */
            // @ts-ignore
            toUpperCase(codePoint: number /*int*/): int
            /**
             * Converts the character argument to titlecase using case mapping
             * information from the UnicodeData file. If a character has no
             * explicit titlecase mapping and is not itself a titlecase char
             * according to UnicodeData, then the uppercase mapping is
             * returned as an equivalent titlecase mapping. If the
             * {@code char} argument is already a titlecase
             * {@code char}, the same {@code char} value will be
             * returned.
             * <p>
             * Note that
             * {@code Character.isTitleCase(Character.toTitleCase(ch))}
             * does not always return {@code true} for some ranges of
             * characters.
             * <p><b>Note:</b> This method cannot handle <a
             * href="#supplementary"> supplementary characters</a>. To support
             * all Unicode characters, including supplementary characters, use
             * the {@link #toTitleCase(int)} method.
             * @param ch   the character to be converted.
             * @return the titlecase equivalent of the character, if any;
             *           otherwise, the character itself.
             * @see Character#isTitleCase(char)
             * @see Character#toLowerCase(char)
             * @see Character#toUpperCase(char)
             * @since 1.0.2
             */
            // @ts-ignore
            toTitleCase(ch: string): char
            /**
             * Converts the character (Unicode code point) argument to titlecase using case mapping
             * information from the UnicodeData file. If a character has no
             * explicit titlecase mapping and is not itself a titlecase char
             * according to UnicodeData, then the uppercase mapping is
             * returned as an equivalent titlecase mapping. If the
             * character argument is already a titlecase
             * character, the same character value will be
             * returned.
             * <p>Note that
             * {@code Character.isTitleCase(Character.toTitleCase(codePoint))}
             * does not always return {@code true} for some ranges of
             * characters.
             * @param codePoint   the character (Unicode code point) to be converted.
             * @return the titlecase equivalent of the character, if any;
             *           otherwise, the character itself.
             * @see Character#isTitleCase(int)
             * @see Character#toLowerCase(int)
             * @see Character#toUpperCase(int)
             * @since 1.5
             */
            // @ts-ignore
            toTitleCase(codePoint: number /*int*/): int
            /**
             * Returns the numeric value of the character {@code ch} in the
             * specified radix.
             * <p>
             * If the radix is not in the range {@code MIN_RADIX} &le;
             * {@code radix} &le; {@code MAX_RADIX} or if the
             * value of {@code ch} is not a valid digit in the specified
             * radix, {@code -1} is returned. A character is a valid digit
             * if at least one of the following is true:
             * <ul>
             * <li>The method {@code isDigit} is {@code true} of the character
             * and the Unicode decimal digit value of the character (or its
             * single-character decomposition) is less than the specified radix.
             * In this case the decimal digit value is returned.
             * <li>The character is one of the uppercase Latin letters
             * {@code 'A'} through {@code 'Z'} and its code is less than
             * {@code radix + 'A' - 10}.
             * In this case, {@code ch - 'A' + 10}
             * is returned.
             * <li>The character is one of the lowercase Latin letters
             * {@code 'a'} through {@code 'z'} and its code is less than
             * {@code radix + 'a' - 10}.
             * In this case, {@code ch - 'a' + 10}
             * is returned.
             * <li>The character is one of the fullwidth uppercase Latin letters A
             * ({@code '\uFF21'}) through Z ({@code '\uFF3A'})
             * and its code is less than
             * {@code radix + '\uFF21' - 10}.
             * In this case, {@code ch - '\uFF21' + 10}
             * is returned.
             * <li>The character is one of the fullwidth lowercase Latin letters a
             * ({@code '\uFF41'}) through z ({@code '\uFF5A'})
             * and its code is less than
             * {@code radix + '\uFF41' - 10}.
             * In this case, {@code ch - '\uFF41' + 10}
             * is returned.
             * </ul>
             * <p><b>Note:</b> This method cannot handle <a
             * href="#supplementary"> supplementary characters</a>. To support
             * all Unicode characters, including supplementary characters, use
             * the {@link #digit(int, int)} method.
             * @param ch      the character to be converted.
             * @param radix   the radix.
             * @return the numeric value represented by the character in the
             *           specified radix.
             * @see Character#forDigit(int, int)
             * @see Character#isDigit(char)
             */
            // @ts-ignore
            digit(ch: string, radix: number /*int*/): int
            /**
             * Returns the numeric value of the specified character (Unicode
             * code point) in the specified radix.
             * <p>If the radix is not in the range {@code MIN_RADIX} &le;
             * {@code radix} &le; {@code MAX_RADIX} or if the
             * character is not a valid digit in the specified
             * radix, {@code -1} is returned. A character is a valid digit
             * if at least one of the following is true:
             * <ul>
             * <li>The method {@link #isDigit(int) isDigit(codePoint)} is {@code true} of the character
             * and the Unicode decimal digit value of the character (or its
             * single-character decomposition) is less than the specified radix.
             * In this case the decimal digit value is returned.
             * <li>The character is one of the uppercase Latin letters
             * {@code 'A'} through {@code 'Z'} and its code is less than
             * {@code radix + 'A' - 10}.
             * In this case, {@code codePoint - 'A' + 10}
             * is returned.
             * <li>The character is one of the lowercase Latin letters
             * {@code 'a'} through {@code 'z'} and its code is less than
             * {@code radix + 'a' - 10}.
             * In this case, {@code codePoint - 'a' + 10}
             * is returned.
             * <li>The character is one of the fullwidth uppercase Latin letters A
             * ({@code '\uFF21'}) through Z ({@code '\uFF3A'})
             * and its code is less than
             * {@code radix + '\uFF21' - 10}.
             * In this case,
             * {@code codePoint - '\uFF21' + 10}
             * is returned.
             * <li>The character is one of the fullwidth lowercase Latin letters a
             * ({@code '\uFF41'}) through z ({@code '\uFF5A'})
             * and its code is less than
             * {@code radix + '\uFF41'- 10}.
             * In this case,
             * {@code codePoint - '\uFF41' + 10}
             * is returned.
             * </ul>
             * @param codePoint the character (Unicode code point) to be converted.
             * @param radix   the radix.
             * @return the numeric value represented by the character in the
             *           specified radix.
             * @see Character#forDigit(int, int)
             * @see Character#isDigit(int)
             * @since 1.5
             */
            // @ts-ignore
            digit(codePoint: number /*int*/, radix: number /*int*/): int
            /**
             * Returns the {@code int} value that the specified Unicode
             * character represents. For example, the character
             * {@code '\u216C'} (the roman numeral fifty) will return
             * an int with a value of 50.
             * <p>
             * The letters A-Z in their uppercase ({@code '\u0041'} through
             * {@code '\u005A'}), lowercase
             * ({@code '\u0061'} through {@code '\u007A'}), and
             * full width variant ({@code '\uFF21'} through
             * {@code '\uFF3A'} and {@code '\uFF41'} through
             * {@code '\uFF5A'}) forms have numeric values from 10
             * through 35. This is independent of the Unicode specification,
             * which does not assign numeric values to these {@code char}
             * values.
             * <p>
             * If the character does not have a numeric value, then -1 is returned.
             * If the character has a numeric value that cannot be represented as a
             * nonnegative integer (for example, a fractional value), then -2
             * is returned.
             * <p><b>Note:</b> This method cannot handle <a
             * href="#supplementary"> supplementary characters</a>. To support
             * all Unicode characters, including supplementary characters, use
             * the {@link #getNumericValue(int)} method.
             * @param ch      the character to be converted.
             * @return the numeric value of the character, as a nonnegative {#code int}
             *            value; -2 if the character has a numeric value that is not a
             *           nonnegative integer; -1 if the character has no numeric value.
             * @see Character#forDigit(int, int)
             * @see Character#isDigit(char)
             * @since 1.1
             */
            // @ts-ignore
            getNumericValue(ch: string): int
            /**
             * Returns the {@code int} value that the specified
             * character (Unicode code point) represents. For example, the character
             * {@code '\u216C'} (the Roman numeral fifty) will return
             * an {@code int} with a value of 50.
             * <p>
             * The letters A-Z in their uppercase ({@code '\u0041'} through
             * {@code '\u005A'}), lowercase
             * ({@code '\u0061'} through {@code '\u007A'}), and
             * full width variant ({@code '\uFF21'} through
             * {@code '\uFF3A'} and {@code '\uFF41'} through
             * {@code '\uFF5A'}) forms have numeric values from 10
             * through 35. This is independent of the Unicode specification,
             * which does not assign numeric values to these {@code char}
             * values.
             * <p>
             * If the character does not have a numeric value, then -1 is returned.
             * If the character has a numeric value that cannot be represented as a
             * nonnegative integer (for example, a fractional value), then -2
             * is returned.
             * @param codePoint the character (Unicode code point) to be converted.
             * @return the numeric value of the character, as a nonnegative {#code int}
             *           value; -2 if the character has a numeric value that is not a
             *           nonnegative integer; -1 if the character has no numeric value.
             * @see Character#forDigit(int, int)
             * @see Character#isDigit(int)
             * @since 1.5
             */
            // @ts-ignore
            getNumericValue(codePoint: number /*int*/): int
            /**
             * Determines if the specified character is ISO-LATIN-1 white space.
             * This method returns {@code true} for the following five
             * characters only:
             * <table summary="truechars">
             * <tr><td>{@code '\t'}</td>            <td>{@code U+0009}</td>
             * <td>{@code HORIZONTAL TABULATION}</td></tr>
             * <tr><td>{@code '\n'}</td>            <td>{@code U+000A}</td>
             * <td>{@code NEW LINE}</td></tr>
             * <tr><td>{@code '\f'}</td>            <td>{@code U+000C}</td>
             * <td>{@code FORM FEED}</td></tr>
             * <tr><td>{@code '\r'}</td>            <td>{@code U+000D}</td>
             * <td>{@code CARRIAGE RETURN}</td></tr>
             * <tr><td>{@code ' '}</td>             <td>{@code U+0020}</td>
             * <td>{@code SPACE}</td></tr>
             * </table>
             * @param ch   the character to be tested.
             * @return {#code true} if the character is ISO-LATIN-1 white
             *              space; {@code false} otherwise.
             * @see Character#isSpaceChar(char)
             * @see Character#isWhitespace(char)
             * @deprecated Replaced by isWhitespace(char).
             */
            // @ts-ignore
            isSpace(ch: string): boolean
            /**
             * Determines if the specified character is a Unicode space character.
             * A character is considered to be a space character if and only if
             * it is specified to be a space character by the Unicode Standard. This
             * method returns true if the character's general category type is any of
             * the following:
             * <ul>
             * <li> {@code SPACE_SEPARATOR}
             * <li> {@code LINE_SEPARATOR}
             * <li> {@code PARAGRAPH_SEPARATOR}
             * </ul>
             * <p><b>Note:</b> This method cannot handle <a
             * href="#supplementary"> supplementary characters</a>. To support
             * all Unicode characters, including supplementary characters, use
             * the {@link #isSpaceChar(int)} method.
             * @param ch      the character to be tested.
             * @return {#code true} if the character is a space character;
             *           {@code false} otherwise.
             * @see Character#isWhitespace(char)
             * @since 1.1
             */
            // @ts-ignore
            isSpaceChar(ch: string): boolean
            /**
             * Determines if the specified character (Unicode code point) is a
             * Unicode space character.  A character is considered to be a
             * space character if and only if it is specified to be a space
             * character by the Unicode Standard. This method returns true if
             * the character's general category type is any of the following:
             * <ul>
             * <li> {@link #SPACE_SEPARATOR}
             * <li> {@link #LINE_SEPARATOR}
             * <li> {@link #PARAGRAPH_SEPARATOR}
             * </ul>
             * @param codePoint the character (Unicode code point) to be tested.
             * @return {#code true} if the character is a space character;
             *           {@code false} otherwise.
             * @see Character#isWhitespace(int)
             * @since 1.5
             */
            // @ts-ignore
            isSpaceChar(codePoint: number /*int*/): boolean
            /**
             * Determines if the specified character is white space according to Java.
             * A character is a Java whitespace character if and only if it satisfies
             * one of the following criteria:
             * <ul>
             * <li> It is a Unicode space character ({@code SPACE_SEPARATOR},
             * {@code LINE_SEPARATOR}, or {@code PARAGRAPH_SEPARATOR})
             * but is not also a non-breaking space ({@code '\u00A0'},
             * {@code '\u2007'}, {@code '\u202F'}).
             * <li> It is {@code '\t'}, U+0009 HORIZONTAL TABULATION.
             * <li> It is {@code '\n'}, U+000A LINE FEED.
             * <li> It is {@code '\u000B'}, U+000B VERTICAL TABULATION.
             * <li> It is {@code '\f'}, U+000C FORM FEED.
             * <li> It is {@code '\r'}, U+000D CARRIAGE RETURN.
             * <li> It is {@code '\u001C'}, U+001C FILE SEPARATOR.
             * <li> It is {@code '\u001D'}, U+001D GROUP SEPARATOR.
             * <li> It is {@code '\u001E'}, U+001E RECORD SEPARATOR.
             * <li> It is {@code '\u001F'}, U+001F UNIT SEPARATOR.
             * </ul>
             * <p><b>Note:</b> This method cannot handle <a
             * href="#supplementary"> supplementary characters</a>. To support
             * all Unicode characters, including supplementary characters, use
             * the {@link #isWhitespace(int)} method.
             * @param ch the character to be tested.
             * @return {#code true} if the character is a Java whitespace
             *           character; {@code false} otherwise.
             * @see Character#isSpaceChar(char)
             * @since 1.1
             */
            // @ts-ignore
            isWhitespace(ch: string): boolean
            /**
             * Determines if the specified character (Unicode code point) is
             * white space according to Java.  A character is a Java
             * whitespace character if and only if it satisfies one of the
             * following criteria:
             * <ul>
             * <li> It is a Unicode space character ({@link #SPACE_SEPARATOR},
             * {@link #LINE_SEPARATOR}, or {@link #PARAGRAPH_SEPARATOR})
             * but is not also a non-breaking space ({@code '\u00A0'},
             * {@code '\u2007'}, {@code '\u202F'}).
             * <li> It is {@code '\t'}, U+0009 HORIZONTAL TABULATION.
             * <li> It is {@code '\n'}, U+000A LINE FEED.
             * <li> It is {@code '\u000B'}, U+000B VERTICAL TABULATION.
             * <li> It is {@code '\f'}, U+000C FORM FEED.
             * <li> It is {@code '\r'}, U+000D CARRIAGE RETURN.
             * <li> It is {@code '\u001C'}, U+001C FILE SEPARATOR.
             * <li> It is {@code '\u001D'}, U+001D GROUP SEPARATOR.
             * <li> It is {@code '\u001E'}, U+001E RECORD SEPARATOR.
             * <li> It is {@code '\u001F'}, U+001F UNIT SEPARATOR.
             * </ul>
             * <p>
             * @param codePoint the character (Unicode code point) to be tested.
             * @return {#code true} if the character is a Java whitespace
             *           character; {@code false} otherwise.
             * @see Character#isSpaceChar(int)
             * @since 1.5
             */
            // @ts-ignore
            isWhitespace(codePoint: number /*int*/): boolean
            /**
             * Determines if the specified character is an ISO control
             * character.  A character is considered to be an ISO control
             * character if its code is in the range {@code '\u0000'}
             * through {@code '\u001F'} or in the range
             * {@code '\u007F'} through {@code '\u009F'}.
             * <p><b>Note:</b> This method cannot handle <a
             * href="#supplementary"> supplementary characters</a>. To support
             * all Unicode characters, including supplementary characters, use
             * the {@link #isISOControl(int)} method.
             * @param ch      the character to be tested.
             * @return {#code true} if the character is an ISO control character;
             *           {@code false} otherwise.
             * @see Character#isSpaceChar(char)
             * @see Character#isWhitespace(char)
             * @since 1.1
             */
            // @ts-ignore
            isISOControl(ch: string): boolean
            /**
             * Determines if the referenced character (Unicode code point) is an ISO control
             * character.  A character is considered to be an ISO control
             * character if its code is in the range {@code '\u0000'}
             * through {@code '\u001F'} or in the range
             * {@code '\u007F'} through {@code '\u009F'}.
             * @param codePoint the character (Unicode code point) to be tested.
             * @return {#code true} if the character is an ISO control character;
             *           {@code false} otherwise.
             * @see Character#isSpaceChar(int)
             * @see Character#isWhitespace(int)
             * @since 1.5
             */
            // @ts-ignore
            isISOControl(codePoint: number /*int*/): boolean
            /**
             * Returns a value indicating a character's general category.
             * <p><b>Note:</b> This method cannot handle <a
             * href="#supplementary"> supplementary characters</a>. To support
             * all Unicode characters, including supplementary characters, use
             * the {@link #getType(int)} method.
             * @param ch      the character to be tested.
             * @return a value of type {#code int} representing the
             *           character's general category.
             * @see Character#COMBINING_SPACING_MARK
             * @see Character#CONNECTOR_PUNCTUATION
             * @see Character#CONTROL
             * @see Character#CURRENCY_SYMBOL
             * @see Character#DASH_PUNCTUATION
             * @see Character#DECIMAL_DIGIT_NUMBER
             * @see Character#ENCLOSING_MARK
             * @see Character#END_PUNCTUATION
             * @see Character#FINAL_QUOTE_PUNCTUATION
             * @see Character#FORMAT
             * @see Character#INITIAL_QUOTE_PUNCTUATION
             * @see Character#LETTER_NUMBER
             * @see Character#LINE_SEPARATOR
             * @see Character#LOWERCASE_LETTER
             * @see Character#MATH_SYMBOL
             * @see Character#MODIFIER_LETTER
             * @see Character#MODIFIER_SYMBOL
             * @see Character#NON_SPACING_MARK
             * @see Character#OTHER_LETTER
             * @see Character#OTHER_NUMBER
             * @see Character#OTHER_PUNCTUATION
             * @see Character#OTHER_SYMBOL
             * @see Character#PARAGRAPH_SEPARATOR
             * @see Character#PRIVATE_USE
             * @see Character#SPACE_SEPARATOR
             * @see Character#START_PUNCTUATION
             * @see Character#SURROGATE
             * @see Character#TITLECASE_LETTER
             * @see Character#UNASSIGNED
             * @see Character#UPPERCASE_LETTER
             * @since 1.1
             */
            // @ts-ignore
            getType(ch: string): int
            /**
             * Returns a value indicating a character's general category.
             * @param codePoint the character (Unicode code point) to be tested.
             * @return a value of type {#code int} representing the
             *           character's general category.
             * @see Character#COMBINING_SPACING_MARK COMBINING_SPACING_MARK
             * @see Character#CONNECTOR_PUNCTUATION CONNECTOR_PUNCTUATION
             * @see Character#CONTROL CONTROL
             * @see Character#CURRENCY_SYMBOL CURRENCY_SYMBOL
             * @see Character#DASH_PUNCTUATION DASH_PUNCTUATION
             * @see Character#DECIMAL_DIGIT_NUMBER DECIMAL_DIGIT_NUMBER
             * @see Character#ENCLOSING_MARK ENCLOSING_MARK
             * @see Character#END_PUNCTUATION END_PUNCTUATION
             * @see Character#FINAL_QUOTE_PUNCTUATION FINAL_QUOTE_PUNCTUATION
             * @see Character#FORMAT FORMAT
             * @see Character#INITIAL_QUOTE_PUNCTUATION INITIAL_QUOTE_PUNCTUATION
             * @see Character#LETTER_NUMBER LETTER_NUMBER
             * @see Character#LINE_SEPARATOR LINE_SEPARATOR
             * @see Character#LOWERCASE_LETTER LOWERCASE_LETTER
             * @see Character#MATH_SYMBOL MATH_SYMBOL
             * @see Character#MODIFIER_LETTER MODIFIER_LETTER
             * @see Character#MODIFIER_SYMBOL MODIFIER_SYMBOL
             * @see Character#NON_SPACING_MARK NON_SPACING_MARK
             * @see Character#OTHER_LETTER OTHER_LETTER
             * @see Character#OTHER_NUMBER OTHER_NUMBER
             * @see Character#OTHER_PUNCTUATION OTHER_PUNCTUATION
             * @see Character#OTHER_SYMBOL OTHER_SYMBOL
             * @see Character#PARAGRAPH_SEPARATOR PARAGRAPH_SEPARATOR
             * @see Character#PRIVATE_USE PRIVATE_USE
             * @see Character#SPACE_SEPARATOR SPACE_SEPARATOR
             * @see Character#START_PUNCTUATION START_PUNCTUATION
             * @see Character#SURROGATE SURROGATE
             * @see Character#TITLECASE_LETTER TITLECASE_LETTER
             * @see Character#UNASSIGNED UNASSIGNED
             * @see Character#UPPERCASE_LETTER UPPERCASE_LETTER
             * @since 1.5
             */
            // @ts-ignore
            getType(codePoint: number /*int*/): int
            /**
             * Determines the character representation for a specific digit in
             * the specified radix. If the value of {@code radix} is not a
             * valid radix, or the value of {@code digit} is not a valid
             * digit in the specified radix, the null character
             * ({@code '\u0000'}) is returned.
             * <p>
             * The {@code radix} argument is valid if it is greater than or
             * equal to {@code MIN_RADIX} and less than or equal to
             * {@code MAX_RADIX}. The {@code digit} argument is valid if
             * {@code 0 <= digit < radix}.
             * <p>
             * If the digit is less than 10, then
             * {@code '0' + digit} is returned. Otherwise, the value
             * {@code 'a' + digit - 10} is returned.
             * @param digit   the number to convert to a character.
             * @param radix   the radix.
             * @return the {#code char} representation of the specified digit
             *           in the specified radix.
             * @see Character#MIN_RADIX
             * @see Character#MAX_RADIX
             * @see Character#digit(char, int)
             */
            // @ts-ignore
            forDigit(digit: number /*int*/, radix: number /*int*/): char
            /**
             * Returns the Unicode directionality property for the given
             * character.  Character directionality is used to calculate the
             * visual ordering of text. The directionality value of undefined
             * {@code char} values is {@code DIRECTIONALITY_UNDEFINED}.
             * <p><b>Note:</b> This method cannot handle <a
             * href="#supplementary"> supplementary characters</a>. To support
             * all Unicode characters, including supplementary characters, use
             * the {@link #getDirectionality(int)} method.
             * @param ch {#code char} for which the directionality property
             *             is requested.
             * @return the directionality property of the {#code char} value.
             * @see Character#DIRECTIONALITY_UNDEFINED
             * @see Character#DIRECTIONALITY_LEFT_TO_RIGHT
             * @see Character#DIRECTIONALITY_RIGHT_TO_LEFT
             * @see Character#DIRECTIONALITY_RIGHT_TO_LEFT_ARABIC
             * @see Character#DIRECTIONALITY_EUROPEAN_NUMBER
             * @see Character#DIRECTIONALITY_EUROPEAN_NUMBER_SEPARATOR
             * @see Character#DIRECTIONALITY_EUROPEAN_NUMBER_TERMINATOR
             * @see Character#DIRECTIONALITY_ARABIC_NUMBER
             * @see Character#DIRECTIONALITY_COMMON_NUMBER_SEPARATOR
             * @see Character#DIRECTIONALITY_NONSPACING_MARK
             * @see Character#DIRECTIONALITY_BOUNDARY_NEUTRAL
             * @see Character#DIRECTIONALITY_PARAGRAPH_SEPARATOR
             * @see Character#DIRECTIONALITY_SEGMENT_SEPARATOR
             * @see Character#DIRECTIONALITY_WHITESPACE
             * @see Character#DIRECTIONALITY_OTHER_NEUTRALS
             * @see Character#DIRECTIONALITY_LEFT_TO_RIGHT_EMBEDDING
             * @see Character#DIRECTIONALITY_LEFT_TO_RIGHT_OVERRIDE
             * @see Character#DIRECTIONALITY_RIGHT_TO_LEFT_EMBEDDING
             * @see Character#DIRECTIONALITY_RIGHT_TO_LEFT_OVERRIDE
             * @see Character#DIRECTIONALITY_POP_DIRECTIONAL_FORMAT
             * @since 1.4
             */
            // @ts-ignore
            getDirectionality(ch: string): byte
            /**
             * Returns the Unicode directionality property for the given
             * character (Unicode code point).  Character directionality is
             * used to calculate the visual ordering of text. The
             * directionality value of undefined character is {@link
             * #DIRECTIONALITY_UNDEFINED}.
             * @param codePoint the character (Unicode code point) for which
             *           the directionality property is requested.
             * @return the directionality property of the character.
             * @see Character#DIRECTIONALITY_UNDEFINED DIRECTIONALITY_UNDEFINED
             * @see Character#DIRECTIONALITY_LEFT_TO_RIGHT DIRECTIONALITY_LEFT_TO_RIGHT
             * @see Character#DIRECTIONALITY_RIGHT_TO_LEFT DIRECTIONALITY_RIGHT_TO_LEFT
             * @see Character#DIRECTIONALITY_RIGHT_TO_LEFT_ARABIC DIRECTIONALITY_RIGHT_TO_LEFT_ARABIC
             * @see Character#DIRECTIONALITY_EUROPEAN_NUMBER DIRECTIONALITY_EUROPEAN_NUMBER
             * @see Character#DIRECTIONALITY_EUROPEAN_NUMBER_SEPARATOR DIRECTIONALITY_EUROPEAN_NUMBER_SEPARATOR
             * @see Character#DIRECTIONALITY_EUROPEAN_NUMBER_TERMINATOR DIRECTIONALITY_EUROPEAN_NUMBER_TERMINATOR
             * @see Character#DIRECTIONALITY_ARABIC_NUMBER DIRECTIONALITY_ARABIC_NUMBER
             * @see Character#DIRECTIONALITY_COMMON_NUMBER_SEPARATOR DIRECTIONALITY_COMMON_NUMBER_SEPARATOR
             * @see Character#DIRECTIONALITY_NONSPACING_MARK DIRECTIONALITY_NONSPACING_MARK
             * @see Character#DIRECTIONALITY_BOUNDARY_NEUTRAL DIRECTIONALITY_BOUNDARY_NEUTRAL
             * @see Character#DIRECTIONALITY_PARAGRAPH_SEPARATOR DIRECTIONALITY_PARAGRAPH_SEPARATOR
             * @see Character#DIRECTIONALITY_SEGMENT_SEPARATOR DIRECTIONALITY_SEGMENT_SEPARATOR
             * @see Character#DIRECTIONALITY_WHITESPACE DIRECTIONALITY_WHITESPACE
             * @see Character#DIRECTIONALITY_OTHER_NEUTRALS DIRECTIONALITY_OTHER_NEUTRALS
             * @see Character#DIRECTIONALITY_LEFT_TO_RIGHT_EMBEDDING DIRECTIONALITY_LEFT_TO_RIGHT_EMBEDDING
             * @see Character#DIRECTIONALITY_LEFT_TO_RIGHT_OVERRIDE DIRECTIONALITY_LEFT_TO_RIGHT_OVERRIDE
             * @see Character#DIRECTIONALITY_RIGHT_TO_LEFT_EMBEDDING DIRECTIONALITY_RIGHT_TO_LEFT_EMBEDDING
             * @see Character#DIRECTIONALITY_RIGHT_TO_LEFT_OVERRIDE DIRECTIONALITY_RIGHT_TO_LEFT_OVERRIDE
             * @see Character#DIRECTIONALITY_POP_DIRECTIONAL_FORMAT DIRECTIONALITY_POP_DIRECTIONAL_FORMAT
             * @since 1.5
             */
            // @ts-ignore
            getDirectionality(codePoint: number /*int*/): byte
            /**
             * Determines whether the character is mirrored according to the
             * Unicode specification.  Mirrored characters should have their
             * glyphs horizontally mirrored when displayed in text that is
             * right-to-left.  For example, {@code '\u0028'} LEFT
             * PARENTHESIS is semantically defined to be an <i>opening
             * parenthesis</i>.  This will appear as a "(" in text that is
             * left-to-right but as a ")" in text that is right-to-left.
             * <p><b>Note:</b> This method cannot handle <a
             * href="#supplementary"> supplementary characters</a>. To support
             * all Unicode characters, including supplementary characters, use
             * the {@link #isMirrored(int)} method.
             * @param ch {#code char} for which the mirrored property is requested
             * @return {#code true} if the char is mirrored, {@code false}
             *          if the {@code char} is not mirrored or is not defined.
             * @since 1.4
             */
            // @ts-ignore
            isMirrored(ch: string): boolean
            /**
             * Determines whether the specified character (Unicode code point)
             * is mirrored according to the Unicode specification.  Mirrored
             * characters should have their glyphs horizontally mirrored when
             * displayed in text that is right-to-left.  For example,
             * {@code '\u0028'} LEFT PARENTHESIS is semantically
             * defined to be an <i>opening parenthesis</i>.  This will appear
             * as a "(" in text that is left-to-right but as a ")" in text
             * that is right-to-left.
             * @param codePoint the character (Unicode code point) to be tested.
             * @return {#code true} if the character is mirrored, {@code false}
             *           if the character is not mirrored or is not defined.
             * @since 1.5
             */
            // @ts-ignore
            isMirrored(codePoint: number /*int*/): boolean
            /**
             * Compares two {@code Character} objects numerically.
             * @param anotherCharacter   the {#code Character} to be compared.
             * @return the value {#code 0} if the argument {@code Character}
             *           is equal to this {@code Character}; a value less than
             *           {@code 0} if this {@code Character} is numerically less
             *           than the {@code Character} argument; and a value greater than
             *           {@code 0} if this {@code Character} is numerically greater
             *           than the {@code Character} argument (unsigned comparison).
             *           Note that this is strictly a numerical comparison; it is not
             *           locale-dependent.
             * @since 1.2
             */
            // @ts-ignore
            compareTo(anotherCharacter: java.lang.Character): int
            /**
             * Compares two {@code char} values numerically.
             * The value returned is identical to what would be returned by:
             * <pre>
             * Character.valueOf(x).compareTo(Character.valueOf(y))
             * </pre>
             * @param x the first {#code char} to compare
             * @param y the second {#code char} to compare
             * @return the value {#code 0} if {@code x == y};
             *          a value less than {@code 0} if {@code x < y}; and
             *          a value greater than {@code 0} if {@code x > y}
             * @since 1.7
             */
            // @ts-ignore
            compare(x: string, y: string): int
            /**
             * Returns the value obtained by reversing the order of the bytes in the
             * specified <tt>char</tt> value.
             * @param ch The {#code char} of which to reverse the byte order.
             * @return the value obtained by reversing (or, equivalently, swapping)
             *      the bytes in the specified <tt>char</tt> value.
             * @since 1.5
             */
            // @ts-ignore
            reverseBytes(ch: string): char
            /**
             * Returns the Unicode name of the specified character
             * {@code codePoint}, or null if the code point is
             * {@link #UNASSIGNED unassigned}.
             * <p>
             * Note: if the specified character is not assigned a name by
             * the <i>UnicodeData</i> file (part of the Unicode Character
             * Database maintained by the Unicode Consortium), the returned
             * name is the same as the result of expression.
             * <blockquote>{@code
             * Character.UnicodeBlock.of(codePoint).toString().replace('_', ' ')
             * + " "
             * + Integer.toHexString(codePoint).toUpperCase(Locale.ENGLISH);
             * }</blockquote>
             * @param codePoint the character (Unicode code point)
             * @return the Unicode name of the specified character, or null if
             *          the code point is unassigned.
             * @exception IllegalArgumentException if the specified
             *             {#code codePoint} is not a valid Unicode
             *             code point.
             * @since 1.7
             */
            // @ts-ignore
            getName(codePoint: number /*int*/): java.lang.String
        }
    }
}
