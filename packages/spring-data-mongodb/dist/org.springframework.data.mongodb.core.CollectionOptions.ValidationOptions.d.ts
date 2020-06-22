declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace CollectionOptions {
                        /**
                         * Encapsulation of ValidationOptions options.
                         * @author Christoph Strobl
                         * @author Andreas Zink
                         * @since 2.1
                         */
                        // @ts-ignore
                        class ValidationOptions extends java.lang.Object {
                            // @ts-ignore
                            constructor()
                            /**
                             * Create an empty {@link ValidationOptions}.
                             * @return never {#literal null}.
                             */
                            // @ts-ignore
                            public static none(): org.springframework.data.mongodb.core.CollectionOptions.ValidationOptions
                            /**
                             * Define the {@link Validator} to be used for document validation.
                             * @param validator can be {#literal null}.
                             * @return new instance of {#link ValidationOptions}.
                             */
                            // @ts-ignore
                            public validator(validator: org.springframework.data.mongodb.core.validation.Validator): org.springframework.data.mongodb.core.CollectionOptions.ValidationOptions
                            /**
                             * Define the validation level to apply.
                             * @param validationLevel can be {#literal null}.
                             * @return new instance of {#link ValidationOptions}.
                             */
                            // @ts-ignore
                            public validationLevel(validationLevel: ValidationLevel): org.springframework.data.mongodb.core.CollectionOptions.ValidationOptions
                            /**
                             * Define the validation action to take.
                             * @param validationAction can be {#literal null}.
                             * @return new instance of {#link ValidationOptions}.
                             */
                            // @ts-ignore
                            public validationAction(validationAction: ValidationAction): org.springframework.data.mongodb.core.CollectionOptions.ValidationOptions
                            /**
                             * Get the {@link Validator} to use.
                             * @return never {#literal null}.
                             */
                            // @ts-ignore
                            public getValidator(): java.util.Optional<org.springframework.data.mongodb.core.validation.Validator>
                            /**
                             * Get the {@code validationLevel} to apply.
                             * @return {#link Optional#empty()} if not set.
                             */
                            // @ts-ignore
                            public getValidationLevel(): java.util.Optional<ValidationLevel>
                            /**
                             * Get the {@code validationAction} to perform.
                             * @return #return {@link Optional#empty()} if not set.
                             */
                            // @ts-ignore
                            public getValidationAction(): java.util.Optional<ValidationAction>
                        }
                    }
                }
            }
        }
    }
}
