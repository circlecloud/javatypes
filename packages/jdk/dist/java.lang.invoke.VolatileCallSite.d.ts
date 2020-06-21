declare namespace java {
    namespace lang {
        namespace invoke {
            /**
             * A VolatileCallSite acts as though its target MethodHandle were a volatile variable.
             * This CallSite sub-class should be used if the changes to the target are frequent or if
             * changes must be immediately observed by all threads, even if the {@link #setTarget(MethodHandle)}
             * occurs in a different thread.
             * <p>
             * Since VolatileCallSite's target is defined as though it were a volatile variable, there is no need
             * for a method like {@link MutableCallSite#syncAll(MutableCallSite[])} because every thread will always
             * see a consistent view of the MethodHandle target.
             * @since 1.7
             */
            // @ts-ignore
            class VolatileCallSite extends java.lang.invoke.CallSite {
                /**
                 * Create a VolatileCallSite with the same type as the volatileTarget
                 * and the initial target set to volatileTarget.
                 * @param volatileTarget - the target MethodHandle of the CallSite
                 * @throws NullPointerException - if the <i>volatileTarget</i> is null.
                 */
                // @ts-ignore
                constructor(volatileTarget: java.lang.invoke.MethodHandle)
                /**
                 * Create a VolatileCallSite with the MethodType <i>type</i> and an
                 * initial target that throws IllegalStateException.
                 * @param type - the permanent type of this CallSite.
                 * @throws NullPointerException - if the type is null.
                 */
                // @ts-ignore
                constructor(type: java.lang.invoke.MethodType)
                // @ts-ignore
                public dynamicInvoker(): java.lang.invoke.MethodHandle
                /**
                 * The target MethodHandle is returned as though by a read of a volatile variable.
                 */
                // @ts-ignore
                public getTarget(): java.lang.invoke.MethodHandle
                /**
                 * Set the CallSite's target to be <i>nextTarget</i>.
                 * The <i>nextTarget</i> MethodHandle must have the same type as the CallSite.
                 * This occurs as though by a write to a volatile variable.
                 */
                // @ts-ignore
                public setTarget(nextTarget: java.lang.invoke.MethodHandle): void
            }
        }
    }
}
