declare namespace org {
    namespace springframework {
        namespace web {
            namespace util {
                /**
                 * Utility class for JavaScript escaping.
                 * Escapes based on the JavaScript 1.5 recommendation.
                 * <p>Reference:
                 * <a href="https://developer.mozilla.org/en-US/docs/JavaScript/Guide/Values,_variables,_and_literals#String_literals">
                 * JavaScript Guide</a> on Mozilla Developer Network.
                 * @author Juergen Hoeller
                 * @author Rob Harrop
                 * @author Rossen Stoyanchev
                 * @since 1.1.1
                 */
                // @ts-ignore
                class JavaScriptUtils extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    /**
                     * Turn JavaScript special characters into escaped characters.
                     * @param input the input string
                     * @return the string with escaped characters
                     */
                    // @ts-ignore
                    javaScriptEscape(input: string): java.lang.String
                }
            }
        }
    }
}
