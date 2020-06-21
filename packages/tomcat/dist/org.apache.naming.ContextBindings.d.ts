declare namespace org {
    namespace apache {
        namespace naming {
            /**
             * Handles the associations :
             * <ul>
             * <li>Object with a NamingContext</li>
             * <li>Calling thread with a NamingContext</li>
             * <li>Calling thread with object bound to the same naming context</li>
             * <li>Thread context class loader with a NamingContext</li>
             * <li>Thread context class loader with object bound to the same
             * NamingContext</li>
             * </ul>
             * The objects are typically Catalina Server or Context objects.
             * @author Remy Maucherat
             */
            // @ts-ignore
            class ContextBindings extends java.lang.Object {
                // @ts-ignore
                constructor()
                /**
                 * The string manager for this package.
                 */
                // @ts-ignore
                static readonly sm: org.apache.naming.StringManager
                /**
                 * Binds an object and a naming context.
                 * @param obj       Object to bind with naming context
                 * @param context   Associated naming context instance
                 */
                // @ts-ignore
                public static bindContext(obj: java.lang.Object | any, context: javax.naming.Context): void
                /**
                 * Binds an object and a naming context.
                 * @param obj       Object to bind with naming context
                 * @param context   Associated naming context instance
                 * @param token     Security token
                 */
                // @ts-ignore
                public static bindContext(obj: java.lang.Object | any, context: javax.naming.Context, token: java.lang.Object | any): void
                /**
                 * Unbinds an object and a naming context.
                 * @param obj   Object to unbind
                 * @param token Security token
                 */
                // @ts-ignore
                public static unbindContext(obj: java.lang.Object | any, token: java.lang.Object | any): void
                /**
                 * Binds a naming context to a thread.
                 * @param obj   Object bound to the required naming context
                 * @param token Security token
                 * @throws NamingException If no naming context is bound to the provided
                 *          object
                 */
                // @ts-ignore
                public static bindThread(obj: java.lang.Object | any, token: java.lang.Object | any): void
                /**
                 * Unbinds a thread and a naming context.
                 * @param obj   Object bound to the required naming context
                 * @param token Security token
                 */
                // @ts-ignore
                public static unbindThread(obj: java.lang.Object | any, token: java.lang.Object | any): void
                /**
                 * Retrieves the naming context bound to the current thread.
                 * @return The naming context bound to the current thread.
                 * @throws NamingException If no naming context is bound to the current
                 *          thread
                 */
                // @ts-ignore
                public static getThread(): javax.naming.Context
                /**
                 * Tests if current thread is bound to a naming context.
                 * @return <code>true</code> if the current thread is bound to a naming
                 *          context, otherwise <code>false</code>
                 */
                // @ts-ignore
                public static isThreadBound(): boolean
                /**
                 * Binds a naming context to a class loader.
                 * @param obj           Object bound to the required naming context
                 * @param token         Security token
                 * @param classLoader   The class loader to bind to the naming context
                 * @throws NamingException If no naming context is bound to the provided
                 *          object
                 */
                // @ts-ignore
                public static bindClassLoader(obj: java.lang.Object | any, token: java.lang.Object | any, classLoader: java.lang.ClassLoader): void
                /**
                 * Unbinds a naming context and a class loader.
                 * @param obj           Object bound to the required naming context
                 * @param token         Security token
                 * @param classLoader   The class loader bound to the naming context
                 */
                // @ts-ignore
                public static unbindClassLoader(obj: java.lang.Object | any, token: java.lang.Object | any, classLoader: java.lang.ClassLoader): void
                /**
                 * Retrieves the naming context bound to a class loader.
                 * @return the naming context bound to current class loader or one of its
                 *          parents
                 * @throws NamingException If no naming context was bound
                 */
                // @ts-ignore
                public static getClassLoader(): javax.naming.Context
                /**
                 * Tests if the thread context class loader is bound to a context.
                 * @return <code>true</code> if the thread context class loader or one of
                 *          its parents is bound to a naming context, otherwise
                 *          <code>false</code>
                 */
                // @ts-ignore
                public static isClassLoaderBound(): boolean
            }
        }
    }
}
