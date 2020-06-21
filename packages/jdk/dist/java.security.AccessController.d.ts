declare namespace java {
    namespace security {
        /**
         * Checks access to system resources. Supports marking of code
         * as privileged. Makes context snapshots to allow checking from
         * other contexts.
         * @author OTI
         * @version initial
         */
        // @ts-ignore
        class AccessController extends java.lang.Object {
            /**
             * Checks whether the running program is allowed to
             * access the resource being guarded by the given
             * Permission argument.
             * @param perm                    the permission to check
             * @exception AccessControlException  if access is not allowed.
             *               NullPointerException if perm is null
             */
            // @ts-ignore
            public static checkPermission(perm: java.security.Permission): void
            /**
             * Answers the access controller context of the current thread,
             * including the inherited ones. It basically retrieves all the
             * protection domains from the calling stack and creates an
             * <code>AccessControlContext</code> with them.
             * @return an AccessControlContext which captures the current state
             * @see AccessControlContext
             */
            // @ts-ignore
            public static getContext(): java.security.AccessControlContext
            /**
             * Performs the privileged action specified by <code>action</code>.
             * <p>
             * When permission checks are made, if the permission has been granted by all
             * frames below and including the one representing the call to this method,
             * then the permission is granted. In other words, the check stops here.
             * Any unchecked exception generated by this method will propagate up the chain.
             * @param <T> the type of value returned by PrivilegedAction.run
             * @param action The PrivilegedAction to performed
             * @return the result of the PrivilegedAction
             * @exception NullPointerException if action is null
             * @see #doPrivileged(PrivilegedAction)
             */
            // @ts-ignore
            public static doPrivileged<T>(action: java.security.PrivilegedAction<T>): T
            /**
             * Performs the privileged action specified by <code>action</code>.
             * <p>
             * When permission checks are made, if the permission has been granted by all
             * frames below and including the one representing the call to this method,
             * then the permission is granted iff it is granted by the AccessControlContext
             * <code>context</code>. In other words, no more checking of the current stack
             * is performed. Instead, the passed in context is checked.
             * Any unchecked exception generated by this method will propagate up the chain.
             * @param <T> the type of value returned by PrivilegedAction.run
             * @param action The PrivilegedAction to performed
             * @param context The AccessControlContext to check
             * @return the result of the PrivilegedAction
             * @exception NullPointerException if action is null
             * @see #doPrivileged(PrivilegedAction)
             */
            // @ts-ignore
            public static doPrivileged<T>(action: java.security.PrivilegedAction<T>, context: java.security.AccessControlContext): T
            /**
             * Performs the privileged action specified by <code>action</code>.
             * <p>
             * When permission checks are made, if the permission has been granted by all
             * frames below and including the one representing the call to this method,
             * then the permission is granted. In other words, the check stops here.
             * Any unchecked exception generated by this method will propagate up the chain.
             * However, checked exceptions will be caught an re-thrown as PrivilegedActionExceptions
             * @param <T> the type of value returned by PrivilegedExceptionAction.run
             * @param action The PrivilegedExceptionAction to performed
             * @return the result of the PrivilegedExceptionAction
             * @throws PrivilegedActionException when a checked exception occurs when performing the action
             *           NullPointerException if action is null
             * @see #doPrivileged(PrivilegedAction)
             */
            // @ts-ignore
            public static doPrivileged<T>(action: java.security.PrivilegedExceptionAction<T>): T
            /**
             * Performs the privileged action specified by <code>action</code>.
             * <p>
             * When permission checks are made, if the permission has been granted by all
             * frames below and including the one representing the call to this method,
             * then the permission is granted iff it is granted by the AccessControlContext
             * <code>context</code>. In other words, no more checking of the current stack
             * is performed. Instead, the passed in context is checked.
             * Any unchecked exception generated by this method will propagate up the chain.
             * However, checked exceptions will be caught an re-thrown as PrivilegedActionExceptions
             * @param <T> the type of value returned by PrivilegedExceptionAction.run
             * @param action The PrivilegedExceptionAction to performed
             * @param context The AccessControlContext to check
             * @return the result of the PrivilegedExceptionAction
             * @throws PrivilegedActionException when a checked exception occurs when performing the action
             *           NullPointerException if action is null
             * @see #doPrivileged(PrivilegedAction)
             */
            // @ts-ignore
            public static doPrivileged<T>(action: java.security.PrivilegedExceptionAction<T>, context: java.security.AccessControlContext): T
            /**
             * Performs the privileged action specified by <code>action</code>, retaining
             * any current DomainCombiner.
             * <p>
             * When permission checks are made, if the permission has been granted by all
             * frames below and including the one representing the call to this method,
             * then the permission is granted. In other words, the check stops here.
             * Any unchecked exception generated by this method will propagate up the chain.
             * @param <T> the type of value returned by PrivilegedAction.run
             * @param action The PrivilegedAction to performed
             * @return the result of the PrivilegedAction
             * @see #doPrivileged(PrivilegedAction)
             */
            // @ts-ignore
            public static doPrivilegedWithCombiner<T>(action: java.security.PrivilegedAction<T>): T
            /**
             * Performs the privileged action specified by <code>action</code>, retaining
             * any current DomainCombiner.
             * <p>
             * When permission checks are made, if the permission has been granted by all
             * frames below and including the one representing the call to this method,
             * then the permission is granted. In other words, the check stops here.
             * Any unchecked exception generated by this method will propagate up the chain.
             * However, checked exceptions will be caught an re-thrown as PrivilegedActionExceptions
             * @param <T> the type of value returned by PrivilegedExceptionAction.run
             * @param action The PrivilegedExceptionAction to performed
             * @return the result of the PrivilegedExceptionAction
             * @throws PrivilegedActionException when a checked exception occurs when performing the action
             * @see #doPrivileged(PrivilegedAction)
             */
            // @ts-ignore
            public static doPrivilegedWithCombiner<T>(action: java.security.PrivilegedExceptionAction<T>): T
            /**
             * Performs the privileged action specified by <code>action</code>.
             * <p>
             * When permission checks are made, if the permission has been granted by all
             * frames below and including the one representing the call to this method,
             * then the permission is granted iff it is granted by the AccessControlContext
             * <code>context</code> and also granted by one of the permissions arguments.
             * Any unchecked exception generated by this method will propagate up the chain.
             * @param <T> the type of value returned by PrivilegedAction.run
             * @param action The PrivilegedAction to performed
             * @param context The AccessControlContext to check
             * @param perms The Permission arguments to limit the scope of the caller's privileges.
             * @return the result of the PrivilegedAction
             * @since 1.8
             * @exception NullPointerException if action is null
             * @see #doPrivileged(PrivilegedAction)
             * @see #doPrivileged(PrivilegedAction, AccessControlContext)
             */
            // @ts-ignore
            public static doPrivileged<T>(action: java.security.PrivilegedAction<T>, context: java.security.AccessControlContext, ...perms: java.security.Permission[]): T
            /**
             * Performs the privileged action specified by <code>action</code>, retaining
             * any current DomainCombiner.
             * <p>
             * When permission checks are made, if the permission has been granted by all
             * frames below and including the one representing the call to this method,
             * then the permission is granted iff it is granted by one of the permissions arguments.
             * Any unchecked exception generated by this method will propagate up the chain.
             * @param <T> the type of value returned by PrivilegedAction.run
             * @param action The PrivilegedAction to performed
             * @param context The AccessControlContext to check
             * @param perms The Permission arguments to limit the scope of the caller's privileges.
             * @return the result of the PrivilegedAction
             * @since 1.8
             * @see #doPrivileged(PrivilegedAction)
             * @see #doPrivileged(PrivilegedAction, AccessControlContext)
             */
            // @ts-ignore
            public static doPrivilegedWithCombiner<T>(action: java.security.PrivilegedAction<T>, context: java.security.AccessControlContext, ...perms: java.security.Permission[]): T
            /**
             * Performs the privileged action specified by <code>action</code>.
             * <p>
             * When permission checks are made, if the permission has been granted by all
             * frames below and including the one representing the call to this method,
             * then the permission is granted iff it is granted by the AccessControlContext
             * <code>context</code> and also granted by one of the permissions arguments.
             * Any unchecked exception generated by this method will propagate up the chain.
             * However, checked exceptions will be caught an re-thrown as PrivilegedActionExceptions
             * @param <T> the type of value returned by PrivilegedExceptionAction.run
             * @param action The PrivilegedExceptionAction to performed
             * @param context The AccessControlContext to check
             * @param perms The Permission arguments to limit the scope of the caller's privileges.
             * @return the result of the PrivilegedExceptionAction
             * @since 1.8
             * @throws PrivilegedActionException when a checked exception occurs when performing the action
             *           NullPointerException if action is null
             * @see #doPrivileged(PrivilegedAction)
             * @see #doPrivileged(PrivilegedAction, AccessControlContext)
             */
            // @ts-ignore
            public static doPrivileged<T>(action: java.security.PrivilegedExceptionAction<T>, context: java.security.AccessControlContext, ...perms: java.security.Permission[]): T
            /**
             * Performs the privileged action specified by <code>action</code>, retaining
             * any current DomainCombiner.
             * <p>
             * When permission checks are made, if the permission has been granted by all
             * frames below and including the one representing the call to this method,
             * then the permission is granted and also granted by one of the permissions arguments.
             * Any unchecked exception generated by this method will propagate up the chain.
             * However, checked exceptions will be caught an re-thrown as PrivilegedActionExceptions
             * @param <T> the type of value returned by PrivilegedExceptionAction.run
             * @param action The PrivilegedExceptionAction to performed
             * @param context The AccessControlContext to check
             * @param perms The Permission arguments to limit the scope of the caller's privileges.
             * @return the result of the PrivilegedExceptionAction
             * @since 1.8
             * @throws PrivilegedActionException when a checked exception occurs when performing the action
             * @see #doPrivileged(PrivilegedAction)
             * @see #doPrivileged(PrivilegedAction, AccessControlContext)
             */
            // @ts-ignore
            public static doPrivilegedWithCombiner<T>(action: java.security.PrivilegedExceptionAction<T>, context: java.security.AccessControlContext, ...perms: java.security.Permission[]): T
        }
    }
}
