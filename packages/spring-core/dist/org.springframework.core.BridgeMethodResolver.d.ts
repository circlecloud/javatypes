declare namespace org {
    namespace springframework {
        namespace core {
            /**
             * Helper for resolving synthetic {@link Method#isBridge bridge Methods} to the
             * {@link Method} being bridged.
             * <p>Given a synthetic {@link Method#isBridge bridge Method} returns the {@link Method}
             * being bridged. A bridge method may be created by the compiler when extending a
             * parameterized type whose methods have parameterized arguments. During runtime
             * invocation the bridge {@link Method} may be invoked and/or used via reflection.
             * When attempting to locate annotations on {@link Method Methods}, it is wise to check
             * for bridge {@link Method Methods} as appropriate and find the bridged {@link Method}.
             * <p>See <a href="https://java.sun.com/docs/books/jls/third_edition/html/expressions.html#15.12.4.5">
             * The Java Language Specification</a> for more details on the use of bridge methods.
             * @author Rob Harrop
             * @author Juergen Hoeller
             * @author Phillip Webb
             * @since 2.0
             */
            // @ts-ignore
            class BridgeMethodResolver extends java.lang.Object {
                /**
                 * Find the original method for the supplied {@link Method bridge Method}.
                 * <p>It is safe to call this method passing in a non-bridge {@link Method} instance.
                 * In such a case, the supplied {@link Method} instance is returned directly to the caller.
                 * Callers are <strong>not</strong> required to check for bridging before calling this method.
                 * @param bridgeMethod the method to introspect
                 * @return the original method (either the bridged method or the passed-in method
                 *  if no more specific one could be found)
                 */
                // @ts-ignore
                findBridgedMethod(bridgeMethod: java.lang.reflect.Method): java.lang.reflect.Method
                /**
                 * Compare the signatures of the bridge method and the method which it bridges. If
                 * the parameter and return types are the same, it is a 'visibility' bridge method
                 * introduced in Java 6 to fix https://bugs.java.com/view_bug.do?bug_id=6342411.
                 * See also https://stas-blogspot.blogspot.com/2010/03/java-bridge-methods-explained.html
                 * @return whether signatures match as described
                 */
                // @ts-ignore
                isVisibilityBridgeMethodPair(bridgeMethod: java.lang.reflect.Method, bridgedMethod: java.lang.reflect.Method): boolean
            }
        }
    }
}
