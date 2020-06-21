declare namespace javax {
    namespace servlet {
        /**
         * @since Servlet 3.0
         *  TODO SERVLET3 - Add comments
         */
        // @ts-ignore
        class ServletSecurityElement extends javax.servlet.HttpConstraintElement {
            /**
             * Use default HttpConstraint.
             */
            // @ts-ignore
            constructor()
            /**
             * Use specified HttpConstraintElement.
             * @param httpConstraintElement The constraint
             */
            // @ts-ignore
            constructor(httpConstraintElement: javax.servlet.HttpConstraintElement)
            /**
             * Use specific constraints for specified methods and default
             * HttpConstraintElement for all other methods.
             * @param httpMethodConstraints Method constraints
             * @throws IllegalArgumentException if a method name is specified more than
             *  once
             */
            // @ts-ignore
            constructor(httpMethodConstraints: java.util.Collection<javax.servlet.HttpMethodConstraintElement> | Array<javax.servlet.HttpMethodConstraintElement>)
            /**
             * Use specified HttpConstraintElement as default and specific constraints
             * for specified methods.
             * @param httpConstraintElement Default constraint
             * @param httpMethodConstraints Method constraints
             * @throws IllegalArgumentException if a method name is specified more than
             */
            // @ts-ignore
            constructor(httpConstraintElement: javax.servlet.HttpConstraintElement, httpMethodConstraints: java.util.Collection<javax.servlet.HttpMethodConstraintElement> | Array<javax.servlet.HttpMethodConstraintElement>)
            /**
             * Create from an annotation.
             * @param annotation Annotation to use as the basis for the new instance
             * @throws IllegalArgumentException if a method name is specified more than
             */
            // @ts-ignore
            constructor(annotation: javax.servlet.annotation.ServletSecurity)
            // @ts-ignore
            public getHttpMethodConstraints(): Array<javax.servlet.HttpMethodConstraintElement>
            // @ts-ignore
            public getMethodNames(): Array<java.lang.String | string>
        }
    }
}
