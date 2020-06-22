declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace aggregation {
                        /**
                         * Value object to capture a list of {@link Field} instances.
                         * @author Oliver Gierke
                         * @author Thomas Darimont
                         * @since 1.3
                         */
                        // @ts-ignore
                        class Fields extends java.lang.Object implements java.lang.Iterable<org.springframework.data.mongodb.core.aggregation.Field> {
                            // @ts-ignore
                            public static readonly UNDERSCORE_ID: java.lang.String | string
                            // @ts-ignore
                            public static readonly UNDERSCORE_ID_REF: java.lang.String | string
                            /**
                             * Creates a new {@link Fields} instance from the given {@link Fields}.
                             * @param fields must not be {#literal null} or empty.
                             * @return 
                             */
                            // @ts-ignore
                            public static from(...fields: org.springframework.data.mongodb.core.aggregation.Field[]): org.springframework.data.mongodb.core.aggregation.Fields
                            /**
                             * Creates a new {@link Fields} instance for {@link Field}s with the given names.
                             * @param names must not be {#literal null}.
                             * @return 
                             */
                            // @ts-ignore
                            public static fields(...names: java.lang.String[] | string[]): org.springframework.data.mongodb.core.aggregation.Fields
                            /**
                             * Creates a {@link Field} with the given name.
                             * @param name must not be {#literal null} or empty.
                             * @return 
                             */
                            // @ts-ignore
                            public static field(name: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.Field
                            /**
                             * Creates a {@link Field} with the given {@code name} and {@code target}.
                             * <p>
                             * The {@code target} is the name of the backing document field that will be aliased with {@code name}.
                             * @param name
                             * @param target must not be {#literal null} or empty
                             * @return 
                             */
                            // @ts-ignore
                            public static field(name: java.lang.String | string, target: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.Field
                            /**
                             * Creates a new {@link Fields} instance with a new {@link Field} of the given name added.
                             * @param name must not be {#literal null}.
                             * @return 
                             */
                            // @ts-ignore
                            public and(name: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.Fields
                            // @ts-ignore
                            public and(name: java.lang.String | string, target: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.Fields
                            // @ts-ignore
                            public and(field: org.springframework.data.mongodb.core.aggregation.Field): org.springframework.data.mongodb.core.aggregation.Fields
                            // @ts-ignore
                            public and(fields: org.springframework.data.mongodb.core.aggregation.Fields): org.springframework.data.mongodb.core.aggregation.Fields
                            // @ts-ignore
                            public getField(name: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.Field
                            // @ts-ignore
                            public iterator(): java.util.Iterator<org.springframework.data.mongodb.core.aggregation.Field>
                            /**
                             * @return 
                             * @since 1.10
                             */
                            // @ts-ignore
                            public asList(): Array<org.springframework.data.mongodb.core.aggregation.Field>
                        }
                    }
                }
            }
        }
    }
}
