declare namespace java {
    namespace lang {
        namespace invoke {
            /**
             * A ConstantCallSite is permanently bound to its initial target MethodHandle.
             * Any call to {@link #setTarget(MethodHandle)} will result in an UnsupportedOperationException.
             * @since 1.7
             */
            // @ts-ignore
            class ConstantCallSite extends java.lang.invoke.CallSite {
                /**
                 * Create a ConstantCallSite with a target MethodHandle that cannot change.
                 * @param permanentTarget - the target MethodHandle to permanently associate with this CallSite.
                 */
                // @ts-ignore
                constructor(permanentTarget: java.lang.invoke.MethodHandle)
                /**
                 * Create a ConstantCallSite and assign the hook MethodHandle's result to its permanent target.
                 * The hook MethodHandle is invoked as though by (@link MethodHandle#invoke(this)) and must return a MethodHandle that will be installed
                 * as the ConstantCallSite's target.
                 * <p>
                 * The hook MethodHandle is required if the ConstantCallSite's target needs to have access to the ConstantCallSite instance.  This is an
                 * action that user code cannot perform on its own.
                 * <p>
                 * The hook must return a MethodHandle that is exactly of type <i>targetType</i>.
                 * <p>
                 * Until the result of the hook has been installed in the ConstantCallSite, any call to getTarget() or dynamicInvoker() will throw an
                 * IllegalStateException.  It is always valid to call type().
                 * @param targetType - the type of the ConstantCallSite's target
                 * @param hook - the hook handle, with signature (ConstantCallSite)MethodHandle
                 * @throws Throwable anything thrown by the hook.
                 * @throws WrongMethodTypeException if the hook has the wrong signature or returns a MethodHandle with the wrong signature
                 * @throws NullPointerException if the hook is null or returns null
                 * @throws ClassCastException if the result of the hook is not a MethodHandle
                 */
                // @ts-ignore
                constructor(targetType: java.lang.invoke.MethodType, hook: java.lang.invoke.MethodHandle)
                /**
                 * Return the target MethodHandle of this CallSite.
                 * @throws IllegalStateException - if the target has not yet been assigned in the ConstantCallSite constructor
                 */
                // @ts-ignore
                public dynamicInvoker(): java.lang.invoke.MethodHandle
                /**
                 * Return the target MethodHandle of this CallSite.
                 * The target is defined as though it where a final field.
                 * @throws IllegalStateException - if the target has not yet been assigned in the ConstantCallSite constructor
                 */
                // @ts-ignore
                public getTarget(): java.lang.invoke.MethodHandle
                /**
                 * Throws UnsupportedOperationException as a ConstantCallSite is permanently
                 * bound to its initial target MethodHandle.
                 */
                // @ts-ignore
                public setTarget(newTarget: java.lang.invoke.MethodHandle): void
            }
        }
    }
}
