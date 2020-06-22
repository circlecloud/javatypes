declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace repository {
                    namespace support {
                        /**
                         * Annotation processor to create Querydsl query types for QueryDsl annotated classes.
                         * @author Oliver Gierke
                         * @author Owen Q
                         */
                        // @ts-ignore
                        class MongoAnnotationProcessor extends AbstractQuerydslProcessor {
                            // @ts-ignore
                            constructor()
                            // @ts-ignore
                            createConfiguration(roundEnv: javax.annotation.processing.RoundEnvironment): Configuration
                        }
                    }
                }
            }
        }
    }
}
