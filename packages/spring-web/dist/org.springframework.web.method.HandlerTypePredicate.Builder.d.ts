declare namespace org {
    namespace springframework {
        namespace web {
            namespace method {
                namespace HandlerTypePredicate {
                    /**
                     * A {@link HandlerTypePredicate} builder.
                     */
                    // @ts-ignore
                    class Builder extends java.lang.Object {
                        // @ts-ignore
                        constructor()
                        /**
                         * Match handlers declared under a base package, e.g. "org.example".
                         * @param packages one or more base package classes
                         */
                        // @ts-ignore
                        basePackage(...packages: string[]): org.springframework.web.method.HandlerTypePredicate.Builder
                        /**
                         * Type-safe alternative to {@link #forBasePackage(String...)} to specify a
                         * base package through a class.
                         * @param packageClasses one or more base package names
                         */
                        // @ts-ignore
                        basePackageClass(...packageClasses: java.lang.Class[]): org.springframework.web.method.HandlerTypePredicate.Builder
                        /**
                         * Match handlers that are assignable to a given type.
                         * @param types one or more handler super types
                         */
                        // @ts-ignore
                        assignableType(...types: java.lang.Class[]): org.springframework.web.method.HandlerTypePredicate.Builder
                        /**
                         * Match types that are annotated with one of the given annotations.
                         * @param annotations one or more annotations to check for
                         */
                        // @ts-ignore
                        annotation(...annotations: java.lang.Class[]): org.springframework.web.method.HandlerTypePredicate.Builder
                        // @ts-ignore
                        build(): org.springframework.web.method.HandlerTypePredicate
                    }
                }
            }
        }
    }
}
