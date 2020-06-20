declare namespace java {
    namespace security {
        /**
         * A GuardedObject is an object that is used to protect access to
         * another object.
         * <p>A GuardedObject encapsulates a target object and a Guard object,
         * such that access to the target object is possible
         * only if the Guard object allows it.
         * Once an object is encapsulated by a GuardedObject,
         * access to that object is controlled by the {@code getObject}
         * method, which invokes the
         * {@code checkGuard} method on the Guard object that is
         * guarding access. If access is not allowed,
         * an exception is thrown.
         * @see Guard
         * @see Permission
         * @author Roland Schemers
         * @author Li Gong
         */
        // @ts-ignore
        class GuardedObject extends java.lang.Object implements java.io.Serializable {
            /**
             * Constructs a GuardedObject using the specified object and guard.
             * If the Guard object is null, then no restrictions will
             * be placed on who can access the object.
             * @param object the object to be guarded.
             * @param guard the Guard object that guards access to the object.
             */
            // @ts-ignore
            constructor(object: any, guard: java.security.Guard)
            /**
             * Retrieves the guarded object, or throws an exception if access
             * to the guarded object is denied by the guard.
             * @return the guarded object.
             * @exception SecurityException if access to the guarded object is
             *  denied.
             */
            // @ts-ignore
            getObject(): java.lang.Object
        }
    }
}