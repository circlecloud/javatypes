declare namespace java {
    namespace security {
        /**
         * An AccessControlContext encapsulates the information which is needed
         * by class AccessController to detect if a Permission would be granted
         * at a particular point in a programs execution.
         * @author OTI
         * @version initial
         */
        // @ts-ignore
        class AccessControlContext extends java.lang.Object {
            /**
             * Constructs a new instance of this class given an array of
             * protection domains.
             * @param fromContext the array of ProtectionDomain
             * @exception NullPointerException if fromContext is null
             */
            // @ts-ignore
            constructor(fromContext: java.security.ProtectionDomain[])
            /**
             * Constructs a new instance of this class given a context
             * and a DomainCombiner
             * @param acc the AccessControlContext
             * @param combiner the DomainCombiner
             * @exception java.security.AccessControlException thrown
             *  when the caller doesn't have the  "createAccessControlContext" SecurityPermission
             * @exception NullPointerException if the provided context is null.
             */
            // @ts-ignore
            constructor(acc: java.security.AccessControlContext, combiner: java.security.DomainCombiner)
            /**
             * Checks if the permission <code>perm</code> is allowed in this context.
             * All ProtectionDomains must grant the permission for it to be granted.
             * @param perm java.security.Permission
             *                   the permission to check
             * @exception java.security.AccessControlException
             *                   thrown when perm is not granted.
             * @exception NullPointerException 
             *                   if perm is null
             */
            // @ts-ignore
            public checkPermission(perm: java.security.Permission): void
            /**
             * Compares the argument to the receiver, and answers true
             * if they represent the <em>same</em> object using a class
             * specific comparison. In this case, they must both be
             * AccessControlContexts and contain the same protection domains.
             * @param o       the object to compare with this object
             * @return <code>true</code>
             *                   if the object is the same as this object
             *               <code>false</code>
             *                   if it is different from this object
             * @see #hashCode
             */
            // @ts-ignore
            public equals(o: java.lang.Object | any): boolean
            /**
             * Answers an integer hash code for the receiver. Any two
             * objects which answer <code>true</code> when passed to
             * <code>equals</code> must answer the same value for this
             * method.
             * @return the receiver's hash
             * @see #equals
             */
            // @ts-ignore
            public hashCode(): number /*int*/
            /**
             * Answers the DomainCombiner for the receiver.
             * @return the DomainCombiner or null
             * @exception java.security.AccessControlException thrown
             *       when the caller doesn't have the  "getDomainCombiner" SecurityPermission
             */
            // @ts-ignore
            public getDomainCombiner(): java.security.DomainCombiner
        }
    }
}
