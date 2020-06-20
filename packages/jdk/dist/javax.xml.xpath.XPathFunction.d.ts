declare namespace javax {
    namespace xml {
        namespace xpath {
            /**
             * <p><code>XPathFunction</code> provides access to XPath functions.</p>
             * <p>Functions are identified by QName and arity in XPath.</p>
             * @author <a href="mailto:Norman.Walsh#Sun.com">Norman Walsh</a>
             * @author <a href="mailto:Jeff.Suttor#Sun.com">Jeff Suttor</a>
             * @since 1.5
             */
            // @ts-ignore
            interface XPathFunction {
                /**
                 * <p>Evaluate the function with the specified arguments.</p>
                 * <p>To the greatest extent possible, side-effects should be avoided in the
                 * definition of extension functions. The implementation evaluating an
                 * XPath expression is under no obligation to call extension functions in
                 * any particular order or any particular number of times.</p>
                 * @param args The arguments, <code>null</code> is a valid value.
                 * @return The result of evaluating the <code>XPath</code> function as an <code>Object</code>.
                 * @throws XPathFunctionException If <code>args</code> cannot be evaluated with this <code>XPath</code> function.
                 */
                // @ts-ignore
                evaluate(args: Array): java.lang.Object
            }
        }
    }
}
