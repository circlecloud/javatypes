declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace gridfs {
                    /**
                     * {@link GridFsOperations} implementation to store content into MongoDB GridFS.
                     * @author Oliver Gierke
                     * @author Philipp Schneider
                     * @author Thomas Darimont
                     * @author Martin Baumgartner
                     * @author Christoph Strobl
                     * @author Mark Paluch
                     * @author Hartmut Lang
                     * @author Niklas Helge Hanft
                     */
                    // @ts-ignore
                    class GridFsTemplate extends java.lang.Object implements org.springframework.data.mongodb.gridfs.GridFsOperations {
                        /**
                         * Creates a new {@link GridFsTemplate} using the given {@link MongoDbFactory} and {@link MongoConverter}.
                         * @param dbFactory must not be {#literal null}.
                         * @param converter must not be {#literal null}.
                         */
                        // @ts-ignore
                        constructor(dbFactory: org.springframework.data.mongodb.MongoDbFactory, converter: org.springframework.data.mongodb.core.convert.MongoConverter)
                        /**
                         * Creates a new {@link GridFsTemplate} using the given {@link MongoDbFactory} and {@link MongoConverter}.
                         * @param dbFactory must not be {#literal null}.
                         * @param converter must not be {#literal null}.
                         * @param bucket
                         */
                        // @ts-ignore
                        constructor(dbFactory: org.springframework.data.mongodb.MongoDbFactory, converter: org.springframework.data.mongodb.core.convert.MongoConverter, bucket: java.lang.String | string)
                        // @ts-ignore
                        public store(content: java.io.InputStream, filename: java.lang.String | string): ObjectId
                        // @ts-ignore
                        public store(content: java.io.InputStream, metadata: java.lang.Object | any): ObjectId
                        // @ts-ignore
                        public store(content: java.io.InputStream, metadata: Document): ObjectId
                        // @ts-ignore
                        public store(content: java.io.InputStream, filename: java.lang.String | string, contentType: java.lang.String | string): ObjectId
                        // @ts-ignore
                        public store(content: java.io.InputStream, filename: java.lang.String | string, metadata: java.lang.Object | any): ObjectId
                        // @ts-ignore
                        public store(content: java.io.InputStream, filename: java.lang.String | string, contentType: java.lang.String | string, metadata: java.lang.Object | any): ObjectId
                        // @ts-ignore
                        public store(content: java.io.InputStream, filename: java.lang.String | string, metadata: Document): ObjectId
                        // @ts-ignore
                        public store(content: java.io.InputStream, filename: java.lang.String | string, contentType: java.lang.String | string, metadata: Document): ObjectId
                        // @ts-ignore
                        public find(query: org.springframework.data.mongodb.core.query.Query): GridFSFindIterable
                        // @ts-ignore
                        public findOne(query: org.springframework.data.mongodb.core.query.Query): GridFSFile
                        // @ts-ignore
                        public delete(query: org.springframework.data.mongodb.core.query.Query): void
                        // @ts-ignore
                        public getClassLoader(): java.lang.ClassLoader
                        // @ts-ignore
                        public getResource(location: java.lang.String | string): org.springframework.data.mongodb.gridfs.GridFsResource
                        // @ts-ignore
                        public getResource(file: GridFSFile): org.springframework.data.mongodb.gridfs.GridFsResource
                        // @ts-ignore
                        public getResources(locationPattern: java.lang.String | string): org.springframework.data.mongodb.gridfs.GridFsResource[]
                    }
                }
            }
        }
    }
}
