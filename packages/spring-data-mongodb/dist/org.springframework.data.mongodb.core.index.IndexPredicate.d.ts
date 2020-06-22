declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace index {
                        /**
                         * @author Jon Brisbin <jbrisbin#vmware.com>
                         */
                        // @ts-ignore
                        abstract class IndexPredicate extends java.lang.Object {
                            // @ts-ignore
                            constructor()
                            // @ts-ignore
                            public getName(): string
                            // @ts-ignore
                            public setName(name: java.lang.String | string): void
                            // @ts-ignore
                            public getDirection(): org.springframework.data.mongodb.core.index.IndexDirection
                            // @ts-ignore
                            public setDirection(direction: org.springframework.data.mongodb.core.index.IndexDirection): void
                            // @ts-ignore
                            public isUnique(): boolean
                            // @ts-ignore
                            public setUnique(unique: boolean): void
                        }
                    }
                }
            }
        }
    }
}
