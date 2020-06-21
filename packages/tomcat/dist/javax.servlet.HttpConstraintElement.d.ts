declare namespace javax {
    namespace servlet {
        /**
         * Equivalent of {@link javax.servlet.annotation.HttpConstraint} for
         * programmatic configuration of security constraints.
         * @since Servlet 3.0
         */
        // @ts-ignore
        class HttpConstraintElement extends java.lang.Object {
            /**
             * Default constraint is permit with no transport guarantee.
             */
            // @ts-ignore
            constructor()
            /**
             * Construct a constraint with an empty role semantic. Typically used with
             * {@link EmptyRoleSemantic#DENY}.
             * @param emptyRoleSemantic The empty role semantic to apply to the newly
             *                           created constraint
             */
            // @ts-ignore
            constructor(emptyRoleSemantic: javax.servlet.annotation.ServletSecurity.EmptyRoleSemantic)
            /**
             * Construct a constraint with a transport guarantee and roles.
             * @param transportGuarantee The transport guarantee to apply to the newly
             *                            created constraint
             * @param rolesAllowed       The roles to associate with the newly created
             *                            constraint
             */
            // @ts-ignore
            constructor(transportGuarantee: javax.servlet.annotation.ServletSecurity.TransportGuarantee, ...rolesAllowed: java.lang.String[] | string[])
            /**
             * Construct a constraint with an empty role semantic, a transport guarantee
             * and roles.
             * @param emptyRoleSemantic The empty role semantic to apply to the newly
             *                           created constraint
             * @param transportGuarantee The transport guarantee to apply to the newly
             *                            created constraint
             * @param rolesAllowed       The roles to associate with the newly created
             *                            constraint
             * @throws IllegalArgumentException if roles are specified when DENY is used
             */
            // @ts-ignore
            constructor(emptyRoleSemantic: javax.servlet.annotation.ServletSecurity.EmptyRoleSemantic, transportGuarantee: javax.servlet.annotation.ServletSecurity.TransportGuarantee, ...rolesAllowed: java.lang.String[] | string[])
            /**
             * TODO
             * @return TODO
             */
            // @ts-ignore
            public getEmptyRoleSemantic(): javax.servlet.annotation.ServletSecurity.EmptyRoleSemantic
            /**
             * TODO
             * @return TODO
             */
            // @ts-ignore
            public getTransportGuarantee(): javax.servlet.annotation.ServletSecurity.TransportGuarantee
            /**
             * TODO
             * @return TODO
             */
            // @ts-ignore
            public getRolesAllowed(): string[]
        }
    }
}
