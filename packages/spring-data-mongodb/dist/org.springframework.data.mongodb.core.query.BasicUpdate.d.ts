declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace query {
                        /**
                         * @author Thomas Risberg
                         * @author John Brisbin
                         * @author Oliver Gierke
                         * @author Christoph Strobl
                         * @author Mark Paluch
                         */
                        // @ts-ignore
                        class BasicUpdate extends org.springframework.data.mongodb.core.query.Update {
                            // @ts-ignore
                            constructor(updateString: java.lang.String | string)
                            // @ts-ignore
                            constructor(updateObject: Document)
                            // @ts-ignore
                            public set(key: java.lang.String | string, value: java.lang.Object | any): org.springframework.data.mongodb.core.query.Update
                            // @ts-ignore
                            public unset(key: java.lang.String | string): org.springframework.data.mongodb.core.query.Update
                            // @ts-ignore
                            public inc(key: java.lang.String | string, inc: java.lang.Number): org.springframework.data.mongodb.core.query.Update
                            // @ts-ignore
                            public push(key: java.lang.String | string, value: java.lang.Object | any): org.springframework.data.mongodb.core.query.Update
                            // @ts-ignore
                            public pushAll(key: java.lang.String | string, values: java.lang.Object[] | any[]): org.springframework.data.mongodb.core.query.Update
                            // @ts-ignore
                            public addToSet(key: java.lang.String | string, value: java.lang.Object | any): org.springframework.data.mongodb.core.query.Update
                            // @ts-ignore
                            public pop(key: java.lang.String | string, pos: org.springframework.data.mongodb.core.query.Update.Position): org.springframework.data.mongodb.core.query.Update
                            // @ts-ignore
                            public pull(key: java.lang.String | string, value: java.lang.Object | any): org.springframework.data.mongodb.core.query.Update
                            // @ts-ignore
                            public pullAll(key: java.lang.String | string, values: java.lang.Object[] | any[]): org.springframework.data.mongodb.core.query.Update
                            // @ts-ignore
                            public rename(oldName: java.lang.String | string, newName: java.lang.String | string): org.springframework.data.mongodb.core.query.Update
                            // @ts-ignore
                            public getUpdateObject(): Document
                        }
                    }
                }
            }
        }
    }
}
