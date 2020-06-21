declare namespace java {
    namespace net {
        /**
         * Utility class for HTML form decoding. This class contains static methods
         * for decoding a String from the <CODE>application/x-www-form-urlencoded</CODE>
         * MIME format.
         * <p>
         * The conversion process is the reverse of that used by the URLEncoder class. It is assumed
         * that all characters in the encoded string are one of the following:
         * &quot;{@code a}&quot; through &quot;{@code z}&quot;,
         * &quot;{@code A}&quot; through &quot;{@code Z}&quot;,
         * &quot;{@code 0}&quot; through &quot;{@code 9}&quot;, and
         * &quot;{@code -}&quot;, &quot;{@code _}&quot;,
         * &quot;{@code .}&quot;, and &quot;{@code *}&quot;. The
         * character &quot;{@code %}&quot; is allowed but is interpreted
         * as the start of a special escaped sequence.
         * <p>
         * The following rules are applied in the conversion:
         * <ul>
         * <li>The alphanumeric characters &quot;{@code a}&quot; through
         * &quot;{@code z}&quot;, &quot;{@code A}&quot; through
         * &quot;{@code Z}&quot; and &quot;{@code 0}&quot;
         * through &quot;{@code 9}&quot; remain the same.
         * <li>The special characters &quot;{@code .}&quot;,
         * &quot;{@code -}&quot;, &quot;{@code *}&quot;, and
         * &quot;{@code _}&quot; remain the same.
         * <li>The plus sign &quot;{@code +}&quot; is converted into a
         * space character &quot; &nbsp; &quot; .
         * <li>A sequence of the form "<i>{@code %xy}</i>" will be
         * treated as representing a byte where <i>xy</i> is the two-digit
         * hexadecimal representation of the 8 bits. Then, all substrings
         * that contain one or more of these byte sequences consecutively
         * will be replaced by the character(s) whose encoding would result
         * in those consecutive bytes.
         * The encoding scheme used to decode these characters may be specified,
         * or if unspecified, the default encoding of the platform will be used.
         * </ul>
         * <p>
         * There are two possible ways in which this decoder could deal with
         * illegal strings.  It could either leave illegal characters alone or
         * it could throw an {@link java.lang.IllegalArgumentException}.
         * Which approach the decoder takes is left to the
         * implementation.
         * @author Mark Chamness
         * @author Michael McCloskey
         * @since 1.2
         */
        // @ts-ignore
        class URLDecoder extends java.lang.Object {
            // @ts-ignore
            constructor()
            /**
             * Decodes a {@code x-www-form-urlencoded} string.
             * The platform's default encoding is used to determine what characters
             * are represented by any consecutive sequences of the form
             * "<i>{@code %xy}</i>".
             * @param s the {#code String} to decode
             * @deprecated The resulting string may vary depending on the platform's
             *           default encoding. Instead, use the decode(String,String) method
             *           to specify the encoding.
             * @return the newly decoded {#code String}
             */
            // @ts-ignore
            public static decode(s: java.lang.String | string): string
            /**
             * Decodes a {@code application/x-www-form-urlencoded} string using a specific
             * encoding scheme.
             * The supplied encoding is used to determine
             * what characters are represented by any consecutive sequences of the
             * form "<i>{@code %xy}</i>".
             * <p>
             * <em><strong>Note:</strong> The <a href=
             * "http://www.w3.org/TR/html40/appendix/notes.html#non-ascii-chars">
             * World Wide Web Consortium Recommendation</a> states that
             * UTF-8 should be used. Not doing so may introduce
             * incompatibilities.</em>
             * @param s the {#code String} to decode
             * @param enc   The name of a supported
             *     <a href="../lang/package-summary.html#charenc">character
             *     encoding</a>.
             * @return the newly decoded {#code String}
             * @exception UnsupportedEncodingException
             *              If character encoding needs to be consulted, but
             *              named character encoding is not supported
             * @see URLEncoder#encode(java.lang.String, java.lang.String)
             * @since 1.4
             */
            // @ts-ignore
            public static decode(s: java.lang.String | string, enc: java.lang.String | string): string
        }
    }
}
