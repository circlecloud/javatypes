declare namespace org {
    namespace apache {
        namespace naming {
            /**
             * Handles the access control on the JNDI contexts.
             * @author Remy Maucherat
             */
            // @ts-ignore
            class ContextAccessController extends java.lang.Object {
                // @ts-ignore
                constructor()
                /**
                 * Set a security token for a Catalina context. Can be set only once.
                 * @param name Name of the Catalina context
                 * @param token Security token
                 */
                // @ts-ignore
                public static setSecurityToken(name: java.lang.Object | any, token: java.lang.Object | any): void
                /**
                 * Remove a security token for a context.
                 * @param name Name of the Catalina context
                 * @param token Security token
                 */
                // @ts-ignore
                public static unsetSecurityToken(name: java.lang.Object | any, token: java.lang.Object | any): void
                /**
                 * Check a submitted security token.
                 * @param name Name of the Catalina context
                 * @param token Submitted security token
                 * @return <code>true</code> if the submitted token is equal to the token
                 *          in the repository or if no token is present in the repository.
                 *          Otherwise, <code>false</code>
                 */
                // @ts-ignore
                public static checkSecurityToken(name: java.lang.Object | any, token: java.lang.Object | any): boolean
                /**
                 * Allow writing to a context.
                 * @param name Name of the Catalina context
                 * @param token Security token
                 */
                // @ts-ignore
                public static setWritable(name: java.lang.Object | any, token: java.lang.Object | any): void
                /**
                 * Set whether or not a Catalina context is writable.
                 * @param name Name of the Catalina context
                 */
                // @ts-ignore
                public static setReadOnly(name: java.lang.Object | any): void
                /**
                 * Is the context is writable?
                 * @param name Name of the Catalina context
                 * @return <code>true</code> if it is writable, otherwise <code>false</code>
                 */
                // @ts-ignore
                public static isWritable(name: java.lang.Object | any): boolean
            }
        }
    }
}
