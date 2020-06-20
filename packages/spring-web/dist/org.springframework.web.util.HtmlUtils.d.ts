declare namespace org {
    namespace springframework {
        namespace web {
            namespace util {
                /**
                 * Utility class for HTML escaping.
                 * <p>Escapes and unescapes based on the W3C HTML 4.01 recommendation, handling
                 * character entity references.
                 * <p>Reference:
                 * <a href="https://www.w3.org/TR/html4/charset.html">https://www.w3.org/TR/html4/charset.html</a>
                 * <p>For a comprehensive set of String escaping utilities, consider
                 * <a href="https://commons.apache.org/proper/commons-text/">Apache Commons Text</a>
                 * and its {@code StringEscapeUtils} class. We do not use that class here in order
                 * to avoid a runtime dependency on Commons Text just for HTML escaping. Furthermore,
                 * Spring's HTML escaping is more flexible and 100% HTML 4.0 compliant.
                 * @author Juergen Hoeller
                 * @author Martin Kersten
                 * @author Craig Andrews
                 * @since 01.03.2003
                 */
                // @ts-ignore
                class HtmlUtils extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    /**
                     * Turn special characters into HTML character references.
                     * <p>Handles complete character set defined in HTML 4.01 recommendation.
                     * <p>Escapes all special characters to their corresponding
                     * entity reference (e.g. {@code &lt;}).
                     * <p>Reference:
                     * <a href="https://www.w3.org/TR/html4/sgml/entities.html">
                     * https://www.w3.org/TR/html4/sgml/entities.html
                     * </a>
                     * @param input the (unescaped) input string
                     * @return the escaped string
                     */
                    // @ts-ignore
                    htmlEscape(input: string): java.lang.String
                    /**
                     * Turn special characters into HTML character references.
                     * <p>Handles complete character set defined in HTML 4.01 recommendation.
                     * <p>Escapes all special characters to their corresponding
                     * entity reference (e.g. {@code &lt;}) at least as required by the
                     * specified encoding. In other words, if a special character does
                     * not have to be escaped for the given encoding, it may not be.
                     * <p>Reference:
                     * <a href="https://www.w3.org/TR/html4/sgml/entities.html">
                     * https://www.w3.org/TR/html4/sgml/entities.html
                     * </a>
                     * @param input the (unescaped) input string
                     * @param encoding the name of a supported {#link java.nio.charset.Charset charset}
                     * @return the escaped string
                     * @since 4.1.2
                     */
                    // @ts-ignore
                    htmlEscape(input: string, encoding: string): java.lang.String
                    /**
                     * Turn special characters into HTML character references.
                     * <p>Handles complete character set defined in HTML 4.01 recommendation.
                     * <p>Escapes all special characters to their corresponding numeric
                     * reference in decimal format (&#<i>Decimal</i>;).
                     * <p>Reference:
                     * <a href="https://www.w3.org/TR/html4/sgml/entities.html">
                     * https://www.w3.org/TR/html4/sgml/entities.html
                     * </a>
                     * @param input the (unescaped) input string
                     * @return the escaped string
                     */
                    // @ts-ignore
                    htmlEscapeDecimal(input: string): java.lang.String
                    /**
                     * Turn special characters into HTML character references.
                     * <p>Handles complete character set defined in HTML 4.01 recommendation.
                     * <p>Escapes all special characters to their corresponding numeric
                     * reference in decimal format (&#<i>Decimal</i>;) at least as required by the
                     * specified encoding. In other words, if a special character does
                     * not have to be escaped for the given encoding, it may not be.
                     * <p>Reference:
                     * <a href="https://www.w3.org/TR/html4/sgml/entities.html">
                     * https://www.w3.org/TR/html4/sgml/entities.html
                     * </a>
                     * @param input the (unescaped) input string
                     * @param encoding the name of a supported {#link java.nio.charset.Charset charset}
                     * @return the escaped string
                     * @since 4.1.2
                     */
                    // @ts-ignore
                    htmlEscapeDecimal(input: string, encoding: string): java.lang.String
                    /**
                     * Turn special characters into HTML character references.
                     * <p>Handles complete character set defined in HTML 4.01 recommendation.
                     * <p>Escapes all special characters to their corresponding numeric
                     * reference in hex format (&#x<i>Hex</i>;).
                     * <p>Reference:
                     * <a href="https://www.w3.org/TR/html4/sgml/entities.html">
                     * https://www.w3.org/TR/html4/sgml/entities.html
                     * </a>
                     * @param input the (unescaped) input string
                     * @return the escaped string
                     */
                    // @ts-ignore
                    htmlEscapeHex(input: string): java.lang.String
                    /**
                     * Turn special characters into HTML character references.
                     * <p>Handles complete character set defined in HTML 4.01 recommendation.
                     * <p>Escapes all special characters to their corresponding numeric
                     * reference in hex format (&#x<i>Hex</i>;) at least as required by the
                     * specified encoding. In other words, if a special character does
                     * not have to be escaped for the given encoding, it may not be.
                     * <p>Reference:
                     * <a href="https://www.w3.org/TR/html4/sgml/entities.html">
                     * https://www.w3.org/TR/html4/sgml/entities.html
                     * </a>
                     * @param input the (unescaped) input string
                     * @param encoding the name of a supported {#link java.nio.charset.Charset charset}
                     * @return the escaped string
                     * @since 4.1.2
                     */
                    // @ts-ignore
                    htmlEscapeHex(input: string, encoding: string): java.lang.String
                    /**
                     * Turn HTML character references into their plain text UNICODE equivalent.
                     * <p>Handles complete character set defined in HTML 4.01 recommendation
                     * and all reference types (decimal, hex, and entity).
                     * <p>Correctly converts the following formats:
                     * <blockquote>
                     * &amp;#<i>Entity</i>; - <i>(Example: &amp;amp;) case sensitive</i>
                     * &amp;#<i>Decimal</i>; - <i>(Example: &amp;#68;)</i><br>
                     * &amp;#x<i>Hex</i>; - <i>(Example: &amp;#xE5;) case insensitive</i><br>
                     * </blockquote>
                     * <p>Gracefully handles malformed character references by copying original
                     * characters as is when encountered.
                     * <p>Reference:
                     * <a href="https://www.w3.org/TR/html4/sgml/entities.html">
                     * https://www.w3.org/TR/html4/sgml/entities.html
                     * </a>
                     * @param input the (escaped) input string
                     * @return the unescaped string
                     */
                    // @ts-ignore
                    htmlUnescape(input: string): java.lang.String
                }
            }
        }
    }
}
