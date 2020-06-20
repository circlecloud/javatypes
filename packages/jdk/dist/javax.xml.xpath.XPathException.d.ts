declare namespace javax {
    namespace xml {
        namespace xpath {
            /**
             * <code>XPathException</code> represents a generic XPath exception.</p>
             * @author <a href="Norman.Walsh#Sun.com">Norman Walsh</a>
             * @author <a href="mailto:Jeff.Suttor#Sun.COM">Jeff Suttor</a>
             * @since 1.5
             */
            // @ts-ignore
            class XPathException extends java.lang.Exception {
                /**
                 * <p>Constructs a new <code>XPathException</code>
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
                 * <p>Constructs a new <code>XPathException</code>
                 * with the specified <code>cause</code>.</p>
                 * <p>If <code>cause</code> is <code>null</code>,
                 * then a <code>NullPointerException</code> is thrown.</p>
                 * @param cause The cause.
                 * @throws NullPointerException if <code>cause</code> is <code>null</code>.
                 */
                // @ts-ignore
                constructor(cause: Error)
                /**
                 * <p>Get the cause of this XPathException.</p>
                 * @return Cause of this XPathException.
                 */
                // @ts-ignore
                getCause(): java.lang.Throwable
                /**
                 * <p>Print stack trace to specified <code>PrintStream</code>.</p>
                 * @param s Print stack trace to this <code>PrintStream</code>.
                 */
                // @ts-ignore
                printStackTrace(s: java.io.PrintStream): void
                /**
                 * <p>Print stack trace to <code>System.err</code>.</p>
                 */
                // @ts-ignore
                printStackTrace(): void
                /**
                 * <p>Print stack trace to specified <code>PrintWriter</code>.</p>
                 * @param s Print stack trace to this <code>PrintWriter</code>.
                 */
                // @ts-ignore
                printStackTrace(s: java.io.PrintWriter): void
            }
        }
    }
}
