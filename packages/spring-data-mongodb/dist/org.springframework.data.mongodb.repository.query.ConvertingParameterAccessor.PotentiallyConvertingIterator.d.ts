declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace repository {
                    namespace query {
                        namespace ConvertingParameterAccessor {
                            /**
                             * Custom {@link Iterator} that adds a method to access elements in a converted manner.
                             * @author Oliver Gierke
                             */
                            // @ts-ignore
                            interface PotentiallyConvertingIterator extends java.util.Iterator<java.lang.Object | any> {
                                /**
                                 * Returns the next element which has already been converted.
                                 * @return 
                                 */
                                // @ts-ignore
                                nextConverted(property: org.springframework.data.mongodb.core.mapping.MongoPersistentProperty): any
                            }
                        }
                    }
                }
            }
        }
    }
}
