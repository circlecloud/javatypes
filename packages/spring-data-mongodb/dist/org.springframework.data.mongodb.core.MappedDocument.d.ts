declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    /**
                     * A MongoDB document in its mapped state. I.e. after a source document has been mapped using mapping information of the
                     * entity the source document was supposed to represent.
                     * @author Oliver Gierke
                     * @since 2.1
                     */
                    // @ts-ignore
                    class MappedDocument extends java.lang.Object {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        public static getIdOnlyProjection(): Document
                        // @ts-ignore
                        public static getIdIn(ids: java.util.Collection<any> | Array<any>): Document
                        // @ts-ignore
                        public static toIds(documents: java.util.Collection<Document> | Array<Document>): Array<java.lang.Object | any>
                        // @ts-ignore
                        public hasId(): boolean
                        // @ts-ignore
                        public hasNonNullId(): boolean
                        // @ts-ignore
                        public getId(): any
                        // @ts-ignore
                        public getId<T>(type: java.lang.Class<T>): T
                        // @ts-ignore
                        public isIdPresent(type: java.lang.Class<any>): boolean
                        // @ts-ignore
                        public getIdFilter(): Bson
                        // @ts-ignore
                        public updateWithoutId(): org.springframework.data.mongodb.core.query.UpdateDefinition
                    }
                }
            }
        }
    }
}
