declare namespace javax {
    namespace xml {
        namespace xpath {
            /**
             * <p><code>XPathVariableResolver</code> provides access to the set of user defined XPath variables.</p>
             * <p>The <code>XPathVariableResolver</code> and the XPath evaluator must adhere to a contract that
             * cannot be directly enforced by the API.  Although variables may be mutable,
             * that is, an application may wish to evaluate the same XPath expression more
             * than once with different variable values, in the course of evaluating any
             * single XPath expression, a variable's value <strong><em>must</em></strong>
             * not change.</p>
             * @author <a href="mailto:Norman.Walsh#Sun.com">Norman Walsh</a>
             * @author <a href="mailto:Jeff.Suttor#Sun.com">Jeff Suttor</a>
             * @since 1.5
             */
            // @ts-ignore
            interface XPathVariableResolver {
                /**
                 * <p>Find a variable in the set of available variables.</p>
                 * <p>If <code>variableName</code> is <code>null</code>, then a <code>NullPointerException</code> is thrown.</p>
                 * @param variableName The <code>QName</code> of the variable name.
                 * @return The variables value, or <code>null</code> if no variable named <code>variableName</code>
                 *    exists.  The value returned must be of a type appropriate for the underlying object model.
                 * @throws NullPointerException If <code>variableName</code> is <code>null</code>.
                 */
                // @ts-ignore
                resolveVariable(variableName: javax.xml.namespace.QName): any
            }
        }
    }
}
