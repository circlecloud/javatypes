declare namespace org {
    namespace springframework {
        namespace util {
            namespace xml {
                /**
                 * Contains common behavior relating to {@link javax.xml.transform.Transformer Transformers}
                 * and the {@code javax.xml.transform} package in general.
                 * @author Rick Evans
                 * @author Juergen Hoeller
                 * @since 2.5.5
                 */
                // @ts-ignore
                class TransformerUtils extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    /**
                     * The indent amount of characters if {@link #enableIndenting indenting is enabled}.
                     * <p>Defaults to "2".
                     */
                    // @ts-ignore
                    readonly DEFAULT_INDENT_AMOUNT: number /*int*/
                    /**
                     * Enable indenting for the supplied {@link javax.xml.transform.Transformer}.
                     * <p>If the underlying XSLT engine is Xalan, then the special output key {@code indent-amount}
                     * will be also be set to a value of {@link #DEFAULT_INDENT_AMOUNT} characters.
                     * @param transformer the target transformer
                     * @see javax.xml.transform.Transformer#setOutputProperty(String, String)
                     * @see javax.xml.transform.OutputKeys#INDENT
                     */
                    // @ts-ignore
                    enableIndenting(transformer: javax.xml.transform.Transformer): void
                    /**
                     * Enable indenting for the supplied {@link javax.xml.transform.Transformer}.
                     * <p>If the underlying XSLT engine is Xalan, then the special output key {@code indent-amount}
                     * will be also be set to a value of {@link #DEFAULT_INDENT_AMOUNT} characters.
                     * @param transformer the target transformer
                     * @param indentAmount the size of the indent (2 characters, 3 characters, etc)
                     * @see javax.xml.transform.Transformer#setOutputProperty(String, String)
                     * @see javax.xml.transform.OutputKeys#INDENT
                     */
                    // @ts-ignore
                    enableIndenting(transformer: javax.xml.transform.Transformer, indentAmount: number /*int*/): void
                    /**
                     * Disable indenting for the supplied {@link javax.xml.transform.Transformer}.
                     * @param transformer the target transformer
                     * @see javax.xml.transform.OutputKeys#INDENT
                     */
                    // @ts-ignore
                    disableIndenting(transformer: javax.xml.transform.Transformer): void
                }
            }
        }
    }
}
