declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace gridfs {
                    /**
                     * Collection of operations to store and read files from MongoDB GridFS.
                     * @author Oliver Gierke
                     * @author Philipp Schneider
                     * @author Thomas Darimont
                     * @author Martin Baumgartner
                     * @author Christoph Strobl
                     * @author Hartmut Lang
                     */
                    // @ts-ignore
                    interface GridFsOperations {
                        /**
                         * Stores the given content into a file with the given name.
                         * @param content must not be {#literal null}.
                         * @param filename must not be {#literal null} or empty.
                         * @return the {#link ObjectId} of the {@link com.mongodb.client.gridfs.model.GridFSFile} just created.
                         */
                        // @ts-ignore
                        store(content: java.io.InputStream, filename: java.lang.String | string): ObjectId
                        /**
                         * Stores the given content into a file with the given name.
                         * @param content must not be {#literal null}.
                         * @param metadata can be {#literal null}.
                         * @return the {#link ObjectId} of the {@link com.mongodb.client.gridfs.model.GridFSFile} just created.
                         */
                        // @ts-ignore
                        store(content: java.io.InputStream, metadata: java.lang.Object | any): ObjectId
                        /**
                         * Stores the given content into a file with the given name.
                         * @param content must not be {#literal null}.
                         * @param metadata can be {#literal null}.
                         * @return the {#link ObjectId} of the {@link com.mongodb.client.gridfs.model.GridFSFile} just created.
                         */
                        // @ts-ignore
                        store(content: java.io.InputStream, metadata: Document): ObjectId
                        /**
                         * Stores the given content into a file with the given name and content type.
                         * @param content must not be {#literal null}.
                         * @param filename must not be {#literal null} or empty.
                         * @param contentType can be {#literal null}.
                         * @return the {#link ObjectId} of the {@link com.mongodb.client.gridfs.model.GridFSFile} just created.
                         */
                        // @ts-ignore
                        store(content: java.io.InputStream, filename: java.lang.String | string, contentType: java.lang.String | string): ObjectId
                        /**
                         * Stores the given content into a file with the given name using the given metadata. The metadata object will be
                         * marshalled before writing.
                         * @param content must not be {#literal null}.
                         * @param filename can be {#literal null} or empty.
                         * @param metadata can be {#literal null}.
                         * @return the {#link ObjectId} of the {@link com.mongodb.client.gridfs.model.GridFSFile} just created.
                         */
                        // @ts-ignore
                        store(content: java.io.InputStream, filename: java.lang.String | string, metadata: java.lang.Object | any): ObjectId
                        /**
                         * Stores the given content into a file with the given name and content type using the given metadata. The metadata
                         * object will be marshalled before writing.
                         * @param content must not be {#literal null}.
                         * @param filename must not be {#literal null} or empty.
                         * @param contentType can be {#literal null}.
                         * @param metadata can be {#literal null}
                         * @return the {#link ObjectId} of the {@link com.mongodb.client.gridfs.model.GridFSFile} just created.
                         */
                        // @ts-ignore
                        store(content: java.io.InputStream, filename: java.lang.String | string, contentType: java.lang.String | string, metadata: java.lang.Object | any): ObjectId
                        /**
                         * Stores the given content into a file with the given name using the given metadata.
                         * @param content must not be {#literal null}.
                         * @param filename must not be {#literal null} or empty.
                         * @param metadata can be {#literal null}.
                         * @return the {#link ObjectId} of the {@link com.mongodb.client.gridfs.model.GridFSFile} just created.
                         */
                        // @ts-ignore
                        store(content: java.io.InputStream, filename: java.lang.String | string, metadata: Document): ObjectId
                        /**
                         * Stores the given content into a file with the given name and content type using the given metadata.
                         * @param content must not be {#literal null}.
                         * @param filename must not be {#literal null} or empty.
                         * @param contentType can be {#literal null}.
                         * @param metadata can be {#literal null}.
                         * @return the {#link ObjectId} of the {@link com.mongodb.client.gridfs.model.GridFSFile} just created.
                         */
                        // @ts-ignore
                        store(content: java.io.InputStream, filename: java.lang.String | string, contentType: java.lang.String | string, metadata: Document): ObjectId
                        /**
                         * Returns all files matching the given query. Note, that currently {@link Sort} criterias defined at the
                         * {@link Query} will not be regarded as MongoDB does not support ordering for GridFS file access.
                         * @see <a href="https://jira.mongodb.org/browse/JAVA-431">MongoDB Jira: JAVA-431</a>
                         * @param query must not be {#literal null}.
                         * @return {#link GridFSFindIterable} to obtain results from. Eg. by calling
                         *          {@link GridFSFindIterable#into(java.util.Collection)}.
                         */
                        // @ts-ignore
                        find(query: org.springframework.data.mongodb.core.query.Query): GridFSFindIterable
                        /**
                         * Returns a single {@link com.mongodb.client.gridfs.model.GridFSFile} matching the given query or {@literal null} in
                         * case no file matches.
                         * @param query must not be {#literal null}.
                         * @return 
                         */
                        // @ts-ignore
                        findOne(query: org.springframework.data.mongodb.core.query.Query): com.mongodb.client.gridfs.model.GridFSFile
                        /**
                         * Deletes all files matching the given {@link Query}.
                         * @param query must not be {#literal null}.
                         */
                        // @ts-ignore
                        delete(query: org.springframework.data.mongodb.core.query.Query): void
                        /**
                         * Returns the {@link GridFsResource} with the given file name.
                         * @param filename must not be {#literal null}.
                         * @return the resource. Use {#link org.springframework.core.io.Resource#exists()} to check if the returned
                         *          {@link GridFsResource} is actually present.
                         * @see ResourcePatternResolver#getResource(String)
                         */
                        // @ts-ignore
                        getResource(filename: java.lang.String | string): org.springframework.data.mongodb.gridfs.GridFsResource
                        /**
                         * Returns the {@link GridFsResource} for a {@link com.mongodb.client.gridfs.model.GridFSFile}.
                         * @param file must not be {#literal null}.
                         * @return the resource for the file.
                         * @since 2.1
                         */
                        // @ts-ignore
                        getResource(file: com.mongodb.client.gridfs.model.GridFSFile): org.springframework.data.mongodb.gridfs.GridFsResource
                        /**
                         * Returns all {@link GridFsResource}s matching the given file name pattern.
                         * @param filenamePattern must not be {#literal null}.
                         * @return 
                         * @see ResourcePatternResolver#getResources(String)
                         */
                        // @ts-ignore
                        getResources(filenamePattern: java.lang.String | string): org.springframework.data.mongodb.gridfs.GridFsResource[]
                    }
                }
            }
        }
    }
}
