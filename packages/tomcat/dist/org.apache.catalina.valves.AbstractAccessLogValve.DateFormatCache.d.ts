declare namespace org {
    namespace apache {
        namespace catalina {
            namespace valves {
                namespace AbstractAccessLogValve {
                    /**
                     * <p>Cache structure for formatted timestamps based on seconds.</p>
                     * <p>The cache consists of entries for a consecutive range of
                     * seconds. The length of the range is configurable. It is
                     * implemented based on a cyclic buffer. New entries shift the range.</p>
                     * <p>There is one cache for the CLF format (the access log standard
                     * format) and a HashMap of caches for additional formats used by
                     * SimpleDateFormat.</p>
                     * <p>Although the cache supports specifying a locale when retrieving a
                     * formatted timestamp, each format will always use the locale given
                     * when the format was first used. New locales can only be used for new formats.
                     * The CLF format will always be formatted using the locale
                     * <code>en_US</code>.</p>
                     * <p>The cache is not threadsafe. It can be used without synchronization
                     * via thread local instances, or with synchronization as a global cache.</p>
                     * <p>The cache can be created with a parent cache to build a cache hierarchy.
                     * Access to the parent cache is threadsafe.</p>
                     * <p>This class uses a small thread local first level cache and a bigger
                     * synchronized global second level cache.</p>
                     */
                    // @ts-ignore
                    class DateFormatCache extends java.lang.Object {
                        // @ts-ignore
                        constructor(size: number /*int*/, loc: java.util.Locale, parent: org.apache.catalina.valves.AbstractAccessLogValve.DateFormatCache)
                        // @ts-ignore
                        readonly cLFCache: org.apache.catalina.valves.AbstractAccessLogValve.DateFormatCache.Cache
                        // @ts-ignore
                        public getFormat(time: number /*long*/): string
                        // @ts-ignore
                        public getFormat(format: java.lang.String | string, loc: java.util.Locale, time: number /*long*/): string
                    }
                }
            }
        }
    }
}
