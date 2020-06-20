declare namespace java {
    namespace net {
        /**
         * Provides methods to convert internationalized domain names (IDNs) between
         * a normal Unicode representation and an ASCII Compatible Encoding (ACE) representation.
         * Internationalized domain names can use characters from the entire range of
         * Unicode, while traditional domain names are restricted to ASCII characters.
         * ACE is an encoding of Unicode strings that uses only ASCII characters and
         * can be used with software (such as the Domain Name System) that only
         * understands traditional domain names.
         * <p>Internationalized domain names are defined in <a href="http://www.ietf.org/rfc/rfc3490.txt">RFC 3490</a>.
         * RFC 3490 defines two operations: ToASCII and ToUnicode. These 2 operations employ
         * <a href="http://www.ietf.org/rfc/rfc3491.txt">Nameprep</a> algorithm, which is a
         * profile of <a href="http://www.ietf.org/rfc/rfc3454.txt">Stringprep</a>, and
         * <a href="http://www.ietf.org/rfc/rfc3492.txt">Punycode</a> algorithm to convert
         * domain name string back and forth.
         * <p>The behavior of aforementioned conversion process can be adjusted by various flags:
         * <ul>
         * <li>If the ALLOW_UNASSIGNED flag is used, the domain name string to be converted
         * can contain code points that are unassigned in Unicode 3.2, which is the
         * Unicode version on which IDN conversion is based. If the flag is not used,
         * the presence of such unassigned code points is treated as an error.
         * <li>If the USE_STD3_ASCII_RULES flag is used, ASCII strings are checked against <a href="http://www.ietf.org/rfc/rfc1122.txt">RFC 1122</a> and <a href="http://www.ietf.org/rfc/rfc1123.txt">RFC 1123</a>.
         * It is an error if they don't meet the requirements.
         * </ul>
         * These flags can be logically OR'ed together.
         * <p>The security consideration is important with respect to internationalization
         * domain name support. For example, English domain names may be <i>homographed</i>
         * - maliciously misspelled by substitution of non-Latin letters.
         * <a href="http://www.unicode.org/reports/tr36/">Unicode Technical Report #36</a>
         * discusses security issues of IDN support as well as possible solutions.
         * Applications are responsible for taking adequate security measures when using
         * international domain names.
         * @author Edward Wang
         * @since 1.6
         */
        // @ts-ignore
        class IDN extends java.lang.Object {
            /**
             * Flag to allow processing of unassigned code points
             */
            // @ts-ignore
            readonly ALLOW_UNASSIGNED: number /*int*/
            /**
             * Flag to turn on the check against STD-3 ASCII rules
             */
            // @ts-ignore
            readonly USE_STD3_ASCII_RULES: number /*int*/
            /**
             * Translates a string from Unicode to ASCII Compatible Encoding (ACE),
             * as defined by the ToASCII operation of <a href="http://www.ietf.org/rfc/rfc3490.txt">RFC 3490</a>.
             * <p>ToASCII operation can fail. ToASCII fails if any step of it fails.
             * If ToASCII operation fails, an IllegalArgumentException will be thrown.
             * In this case, the input string should not be used in an internationalized domain name.
             * <p> A label is an individual part of a domain name. The original ToASCII operation,
             * as defined in RFC 3490, only operates on a single label. This method can handle
             * both label and entire domain name, by assuming that labels in a domain name are
             * always separated by dots. The following characters are recognized as dots:
             * &#0092;u002E (full stop), &#0092;u3002 (ideographic full stop), &#0092;uFF0E (fullwidth full stop),
             * and &#0092;uFF61 (halfwidth ideographic full stop). if dots are
             * used as label separators, this method also changes all of them to &#0092;u002E (full stop)
             * in output translated string.
             * @param input     the string to be processed
             * @param flag      process flag; can be 0 or any logical OR of possible flags
             * @return the translated {#code String}
             * @throws IllegalArgumentException   if the input string doesn't conform to RFC 3490 specification
             */
            // @ts-ignore
            toASCII(input: string, flag: number /*int*/): java.lang.String
            /**
             * Translates a string from Unicode to ASCII Compatible Encoding (ACE),
             * as defined by the ToASCII operation of <a href="http://www.ietf.org/rfc/rfc3490.txt">RFC 3490</a>.
             * <p> This convenience method works as if by invoking the
             * two-argument counterpart as follows:
             * <blockquote>
             * {@link #toASCII(String, int) toASCII}(input,&nbsp;0);
             * </blockquote>
             * @param input     the string to be processed
             * @return the translated {#code String}
             * @throws IllegalArgumentException   if the input string doesn't conform to RFC 3490 specification
             */
            // @ts-ignore
            toASCII(input: string): java.lang.String
            /**
             * Translates a string from ASCII Compatible Encoding (ACE) to Unicode,
             * as defined by the ToUnicode operation of <a href="http://www.ietf.org/rfc/rfc3490.txt">RFC 3490</a>.
             * <p>ToUnicode never fails. In case of any error, the input string is returned unmodified.
             * <p> A label is an individual part of a domain name. The original ToUnicode operation,
             * as defined in RFC 3490, only operates on a single label. This method can handle
             * both label and entire domain name, by assuming that labels in a domain name are
             * always separated by dots. The following characters are recognized as dots:
             * &#0092;u002E (full stop), &#0092;u3002 (ideographic full stop), &#0092;uFF0E (fullwidth full stop),
             * and &#0092;uFF61 (halfwidth ideographic full stop).
             * @param input     the string to be processed
             * @param flag      process flag; can be 0 or any logical OR of possible flags
             * @return the translated {#code String}
             */
            // @ts-ignore
            toUnicode(input: string, flag: number /*int*/): java.lang.String
            /**
             * Translates a string from ASCII Compatible Encoding (ACE) to Unicode,
             * as defined by the ToUnicode operation of <a href="http://www.ietf.org/rfc/rfc3490.txt">RFC 3490</a>.
             * <p> This convenience method works as if by invoking the
             * two-argument counterpart as follows:
             * <blockquote>
             * {@link #toUnicode(String, int) toUnicode}(input,&nbsp;0);
             * </blockquote>
             * @param input     the string to be processed
             * @return the translated {#code String}
             */
            // @ts-ignore
            toUnicode(input: string): java.lang.String
        }
    }
}
