declare namespace java {
    namespace lang {
        namespace invoke {
            /**
             * A MutableCallSite acts as though its target MethodHandle were a normal variable.
             * <p>
             * Because it is an ordinary variable, other threads may not immediately observe the value of a
             * {@link #setTarget(MethodHandle)} unless external synchronization is used.  If the result of
             * a {@link #setTarget(MethodHandle)} call must be observed by other threads, the {@link #syncAll(MutableCallSite[])}
             * method may be used to force it to be synchronized.
             * <p>
             * The {@link #syncAll(MutableCallSite[])} call is likely to be expensive and should be used sparingly.  Calls to
             * {@link #syncAll(MutableCallSite[])} should be batched whenever possible.
             * @since 1.7
             */
            // @ts-ignore
            class MutableCallSite extends java.lang.invoke.CallSite {
                /**
                 * Create a MutableCallSite permanently set to the same type as the <i>mutableTarget</i> and using
                 * the <i>mutableTarget</i> as the initial target value.
                 * @param mutableTarget - the initial target of the CallSite
                 * @throws NullPointerException - if the <i>mutableTarget</i> is null.
                 */
                // @ts-ignore
                constructor(mutableTarget: java.lang.invoke.MethodHandle)
                /**
                 * Create a MutableCallSite with the MethodType <i>type</i> and an
                 * initial target that throws IllegalStateException.
                 * @param type - the permanent type of this CallSite.
                 * @throws NullPointerException - if the type is null.
                 */
                // @ts-ignore
                constructor(type: java.lang.invoke.MethodType)
                // @ts-ignore
                dynamicInvoker(): java.lang.invoke.MethodHandle
                // @ts-ignore
                getTarget(): java.lang.invoke.MethodHandle
                // @ts-ignore
                setTarget(newTarget: java.lang.invoke.MethodHandle): void
                /**
                 * Forces the current target MethodHandle of each of the MutableCallSites in the <i>sites</i> array to be seen by all threads.
                 * Loads of the target from any of the CallSites that has already begun will continue to use the old value.
                 * <p>
                 * If any of the elements in the <i>sites</i> array is null, a NullPointerException will be raised.  It is undefined whether any
                 * of the sites may have been synchronized.
                 * <p>
                 * Note: it is valid for an implementation to use a volatile variable for the target value of MutableCallSite.  In that case,
                 * the {@link #syncAll(MutableCallSite[])} call becomes a no-op.
                 * @param sites - the array of MutableCallSites to force to be synchronized.
                 * @throws NullPointerException - if sites or any of its elements are null.
                 */
                // @ts-ignore
                syncAll(sites: java.lang.invoke.MutableCallSite[]): void
            }
        }
    }
}
