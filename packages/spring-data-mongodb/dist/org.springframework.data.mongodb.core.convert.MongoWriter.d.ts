declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace convert {
                        /**
                         * A MongoWriter is responsible for converting an object of type T to the native MongoDB representation Document.
                         * @param <T> the type of the object to convert to a Document
                         * @author Mark Pollack
                         * @author Thomas Risberg
                         * @author Oliver Gierke
                         * @author Christoph Strobl
                         */
                        // @ts-ignore
                        interface MongoWriter<T> {
                            /**
                             * Converts the given object into one Mongo will be able to store natively. If the given object can already be stored
                             * as is, no conversion will happen.
                             * @param obj can be {#literal null}.
                             * @return 
                             */
                            // @ts-ignore
                            convertToMongoType(obj: java.lang.Object | any): any
                            /**
                             * Converts the given object into one Mongo will be able to store natively but retains the type information in case
                             * the given {@link TypeInformation} differs from the given object type.
                             * @param obj can be {#literal null}.
                             * @param typeInformation can be {#literal null}.
                             * @return 
                             */
                            // @ts-ignore
                            convertToMongoType(obj: java.lang.Object | any, typeInformation: object): any
                            /**
                             * Creates a {@link DBRef} to refer to the given object.
                             * @param object the object to create a {#link DBRef} to link to. The object's type has to carry an id attribute.
                             * @param referingProperty the client-side property referring to the object which might carry additional metadata for
                             *           the {#link DBRef} object to create. Can be {@literal null}.
                             * @return will never be {#literal null}.
                             */
                            // @ts-ignore
                            toDBRef(object: java.lang.Object | any, referingProperty: org.springframework.data.mongodb.core.mapping.MongoPersistentProperty): DBRef
                        }
                    }
                }
            }
        }
    }
}
