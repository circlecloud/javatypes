declare namespace org {
    namespace springframework {
        namespace context {
            namespace support {
                /**
                 * A simple thread-backed {@link Scope} implementation.
                 * <p><b>NOTE:</b> This thread scope is not registered by default in common contexts.
                 * Instead, you need to explicitly assign it to a scope key in your setup, either through
                 * {@link org.springframework.beans.factory.config.ConfigurableBeanFactory#registerScope}
                 * or through a {@link org.springframework.beans.factory.config.CustomScopeConfigurer} bean.
                 * <p>{@code SimpleThreadScope} <em>does not clean up any objects</em> associated with it.
                 * It is therefore typically preferable to use a request-bound scope implementation such
                 * as {@code org.springframework.web.context.request.RequestScope} in web environments,
                 * implementing the full lifecycle for scoped attributes (including reliable destruction).
                 * <p>For an implementation of a thread-based {@code Scope} with support for destruction
                 * callbacks, refer to
                 * <a href="https://www.springbyexample.org/examples/custom-thread-scope-module.html">Spring by Example</a>.
                 * <p>Thanks to Eugene Kuleshov for submitting the original prototype for a thread scope!
                 * @author Arjen Poutsma
                 * @author Juergen Hoeller
                 * @since 3.0
                 * @see org.springframework.web.context.request.RequestScope
                 */
                // @ts-ignore
                class SimpleThreadScope extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    get(name: string, objectFactory: object): java.lang.Object
                    // @ts-ignore
                    remove(name: string): java.lang.Object
                    // @ts-ignore
                    registerDestructionCallback(name: string, callback: java.lang.Runnable): void
                    // @ts-ignore
                    resolveContextualObject(key: string): java.lang.Object
                    // @ts-ignore
                    getConversationId(): java.lang.String
                }
            }
        }
    }
}
