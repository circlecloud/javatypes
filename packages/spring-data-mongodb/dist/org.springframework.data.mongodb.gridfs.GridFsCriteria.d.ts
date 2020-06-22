declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace gridfs {
                    /**
                     * GridFs-specific helper class to define {@link Criteria}s.
                     * @author Oliver Gierke
                     * @author Christoph Strobl
                     */
                    // @ts-ignore
                    class GridFsCriteria extends org.springframework.data.mongodb.core.query.Criteria {
                        /**
                         * Creates a new {@link GridFsCriteria} for the given key.
                         * @param key
                         */
                        // @ts-ignore
                        constructor(key: java.lang.String | string)
                        /**
                         * Creates a {@link GridFsCriteria} for restrictions on the file's metadata.
                         * @return 
                         */
                        // @ts-ignore
                        public static whereMetaData(): org.springframework.data.mongodb.gridfs.GridFsCriteria
                        /**
                         * Creates a {@link GridFsCriteria} for restrictions on a single file's metadata item.
                         * @param metadataKey
                         * @return 
                         */
                        // @ts-ignore
                        public static whereMetaData(metadataKey: java.lang.String | string): org.springframework.data.mongodb.gridfs.GridFsCriteria
                        /**
                         * Creates a {@link GridFsCriteria} for restrictions on the file's name.
                         * @return 
                         */
                        // @ts-ignore
                        public static whereFilename(): org.springframework.data.mongodb.gridfs.GridFsCriteria
                        /**
                         * Creates a {@link GridFsCriteria} for restrictions on the file's content type.
                         * @return 
                         */
                        // @ts-ignore
                        public static whereContentType(): org.springframework.data.mongodb.gridfs.GridFsCriteria
                    }
                }
            }
        }
    }
}
