declare namespace javax {
    namespace xml {
        namespace xpath {
            /**
             * <code>XPathExpressionException</code> represents an error in an XPath expression.</p>
             * @author <a href="mailto:Norman.Walsh#Sun.com">Norman Walsh</a>
             * @author <a href="mailto:Jeff.Suttor#Sun.com">Jeff Suttor</a>
             * @since 1.5
             */
            // @ts-ignore
            class XPathExpressionException extends javax.xml.xpath.XPathException {
                /**
                 * <p>Constructs a new <code>XPathExpressionException</code>
                 * with the specified detail <code>message</code>.</p>
                 * <p>The <code>cause</code> is not initialized.</p>
                 * <p>If <code>message</code> is <code>null</code>,
                 * then a <code>NullPointerException</code> is thrown.</p>
                 * @param message The detail message.
                 * @throws NullPointerException When <code>message</code> is
                 *    <code>null</code>.
                 */
                // @ts-ignore
                constructor(message: string)
                /**
                 * <p>Constructs a new <code>XPathExpressionException</code>
                 * with the specified <code>cause</code>.</p>
                 * <p>If <code>cause</code> is <code>null</code>,
                 * then a <code>NullPointerException</code> is thrown.</p>
                 * @param cause The cause.
                 * @throws NullPointerException if <code>cause</code> is <code>null</code>.
                 */
                // @ts-ignore
                constructor(cause: Error)
            }
        }
    }
}
