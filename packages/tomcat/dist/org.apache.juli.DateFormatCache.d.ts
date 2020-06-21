declare namespace org {
    namespace apache {
        namespace juli {
            /**
             * <p>Cache structure for SimpleDateFormat formatted timestamps based on
             * seconds.</p>
             * <p>Millisecond formatting using S is not supported. You should add the
             * millisecond information after getting back the second formatting.</p>
             * <p>The cache consists of entries for a consecutive range of
             * seconds. The length of the range is configurable. It is
             * implemented based on a cyclic buffer. New entries shift the range.</p>
             * <p>The cache is not threadsafe. It can be used without synchronization
             * via thread local instances, or with synchronization as a global cache.</p>
             * <p>The cache can be created with a parent cache to build a cache hierarchy.
             * Access to the parent cache is threadsafe.</p>
             */
            // @ts-ignore
            class DateFormatCache extends java.lang.Object {
                // @ts-ignore
                constructor(size: number /*int*/, format: java.lang.String | string, parent: org.apache.juli.DateFormatCache)
                // @ts-ignore
                public getFormat(time: number /*long*/): string
                // @ts-ignore
                public getTimeFormat(): string
            }
        }
    }
}
