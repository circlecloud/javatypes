declare namespace javax {
    namespace management {
        /**
         * This permission represents "trust" in a signer or codebase.
         * <p>
         * MBeanTrustPermission contains a target name but no actions list.
         * A single target name, "register", is defined for this permission.
         * The target "*" is also allowed, permitting "register" and any future
         * targets that may be defined.
         * Only the null value or the empty string are allowed for the action
         * to allow the policy object to create the permissions specified in
         * the policy file.
         * <p>
         * If a signer, or codesource is granted this permission, then it is
         * considered a trusted source for MBeans. Only MBeans from trusted
         * sources may be registered in the MBeanServer.
         * @since 1.5
         */
        // @ts-ignore
        class MBeanTrustPermission extends java.security.BasicPermission {
            /**
             * <p>Create a new MBeanTrustPermission with the given name.</p>
             * <p>This constructor is equivalent to
             * <code>MBeanTrustPermission(name,null)</code>.</p>
             * @param name the name of the permission. It must be
             *         "register" or "*" for this permission.
             * @throws NullPointerException if <code>name</code> is <code>null</code>.
             * @throws IllegalArgumentException if <code>name</code> is neither
             *  "register" nor "*".
             */
            // @ts-ignore
            constructor(name: java.lang.String | string)
            /**
             * <p>Create a new MBeanTrustPermission with the given name.</p>
             * @param name the name of the permission. It must be
             *         "register" or "*" for this permission.
             * @param actions the actions for the permission.  It must be
             *         null or <code>""</code>.
             * @throws NullPointerException if <code>name</code> is <code>null</code>.
             * @throws IllegalArgumentException if <code>name</code> is neither
             *  "register" nor "*"; or if <code>actions</code> is a non-null
             *  non-empty string.
             */
            // @ts-ignore
            constructor(name: java.lang.String | string, actions: java.lang.String | string)
        }
    }
}
