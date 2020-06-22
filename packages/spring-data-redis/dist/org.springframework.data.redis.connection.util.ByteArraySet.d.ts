declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    namespace util {
                        // @ts-ignore
                        class ByteArraySet extends java.lang.Object implements java.util.Set<org.springframework.data.redis.connection.util.ByteArrayWrapper> {
                            // @ts-ignore
                            constructor()
                            // @ts-ignore
                            constructor(values: java.util.Collection<number /*byte*/[]> | Array<number /*byte*/[]>)
                            // @ts-ignore
                            public size(): number /*int*/
                            // @ts-ignore
                            public contains(o: java.lang.Object | any): boolean
                            // @ts-ignore
                            public add(e: org.springframework.data.redis.connection.util.ByteArrayWrapper): boolean
                            // @ts-ignore
                            public add(e: number /*byte*/[]): boolean
                            // @ts-ignore
                            public containsAll(c: java.util.Collection<any> | Array<any>): boolean
                            // @ts-ignore
                            public addAll(c: java.util.Collection<any> | Array<any>): boolean
                            // @ts-ignore
                            public addAll(c: java.lang.Iterable<number /*byte*/[]>): boolean
                            // @ts-ignore
                            public isEmpty(): boolean
                            // @ts-ignore
                            public iterator(): java.util.Iterator<org.springframework.data.redis.connection.util.ByteArrayWrapper>
                            // @ts-ignore
                            public toArray(): any[]
                            // @ts-ignore
                            public toArray<T>(a: T[]): T
                            // @ts-ignore
                            public remove(o: java.lang.Object | any): boolean
                            // @ts-ignore
                            public retainAll(c: java.util.Collection<any> | Array<any>): boolean
                            // @ts-ignore
                            public removeAll(c: java.util.Collection<any> | Array<any>): boolean
                            // @ts-ignore
                            public clear(): void
                            // @ts-ignore
                            public asRawSet(): Array<number /*byte*/[]>
                        }
                    }
                }
            }
        }
    }
}
