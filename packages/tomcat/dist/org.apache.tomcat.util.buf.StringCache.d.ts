declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace buf {
                    /**
                     * This class implements a String cache for ByteChunk and CharChunk.
                     * @author Remy Maucherat
                     */
                    // @ts-ignore
                    class StringCache extends java.lang.Object {
                        // @ts-ignore
                        constructor()
                        /**
                         * Enabled ?
                         */
                        // @ts-ignore
                        static byteEnabled: boolean
                        // @ts-ignore
                        static charEnabled: boolean
                        // @ts-ignore
                        static trainThreshold: number /*int*/
                        // @ts-ignore
                        static cacheSize: number /*int*/
                        // @ts-ignore
                        static readonly maxStringSize: number /*int*/
                        /**
                         * Statistics hash map for byte chunk.
                         */
                        // @ts-ignore
                        static readonly bcStats: java.util.HashMap<org.apache.tomcat.util.buf.StringCache.ByteEntry, number /*int*/[]>
                        /**
                         * toString count for byte chunk.
                         */
                        // @ts-ignore
                        static bcCount: number /*int*/
                        /**
                         * Cache for byte chunk.
                         */
                        // @ts-ignore
                        static bcCache: org.apache.tomcat.util.buf.StringCache.ByteEntry[]
                        /**
                         * Statistics hash map for char chunk.
                         */
                        // @ts-ignore
                        static readonly ccStats: java.util.HashMap<org.apache.tomcat.util.buf.StringCache.CharEntry, number /*int*/[]>
                        /**
                         * toString count for char chunk.
                         */
                        // @ts-ignore
                        static ccCount: number /*int*/
                        /**
                         * Cache for char chunk.
                         */
                        // @ts-ignore
                        static ccCache: org.apache.tomcat.util.buf.StringCache.CharEntry[]
                        /**
                         * Access count.
                         */
                        // @ts-ignore
                        static accessCount: number /*int*/
                        /**
                         * Hit count.
                         */
                        // @ts-ignore
                        static hitCount: number /*int*/
                        /**
                         * @return Returns the cacheSize.
                         */
                        // @ts-ignore
                        public getCacheSize(): number /*int*/
                        /**
                         * @param cacheSize The cacheSize to set.
                         */
                        // @ts-ignore
                        public setCacheSize(cacheSize: number /*int*/): void
                        /**
                         * @return Returns the enabled.
                         */
                        // @ts-ignore
                        public getByteEnabled(): boolean
                        /**
                         * @param byteEnabled The enabled to set.
                         */
                        // @ts-ignore
                        public setByteEnabled(byteEnabled: boolean): void
                        /**
                         * @return Returns the enabled.
                         */
                        // @ts-ignore
                        public getCharEnabled(): boolean
                        /**
                         * @param charEnabled The enabled to set.
                         */
                        // @ts-ignore
                        public setCharEnabled(charEnabled: boolean): void
                        /**
                         * @return Returns the trainThreshold.
                         */
                        // @ts-ignore
                        public getTrainThreshold(): number /*int*/
                        /**
                         * @param trainThreshold The trainThreshold to set.
                         */
                        // @ts-ignore
                        public setTrainThreshold(trainThreshold: number /*int*/): void
                        /**
                         * @return Returns the accessCount.
                         */
                        // @ts-ignore
                        public getAccessCount(): number /*int*/
                        /**
                         * @return Returns the hitCount.
                         */
                        // @ts-ignore
                        public getHitCount(): number /*int*/
                        // @ts-ignore
                        public reset(): void
                        // @ts-ignore
                        public static toString(bc: org.apache.tomcat.util.buf.ByteChunk): string
                        // @ts-ignore
                        public static toString(cc: org.apache.tomcat.util.buf.CharChunk): string
                        /**
                         * Compare given byte chunk with byte array.
                         * @param name The name to compare
                         * @param compareTo The compared to data
                         * @return -1, 0 or +1 if inferior, equal, or superior to the String.
                         */
                        // @ts-ignore
                        static compare(name: org.apache.tomcat.util.buf.ByteChunk, compareTo: number /*byte*/[]): number /*int*/
                        /**
                         * Find an entry given its name in the cache and return the associated
                         * String.
                         * @param name The name to find
                         * @return the corresponding value
                         */
                        // @ts-ignore
                        static find(name: org.apache.tomcat.util.buf.ByteChunk): string
                        /**
                         * Find an entry given its name in a sorted array of map elements.
                         * This will return the index for the closest inferior or equal item in the
                         * given array.
                         * @param name The name to find
                         * @param array The array in which to look
                         * @param len The effective length of the array
                         * @return the position of the best match
                         */
                        // @ts-ignore
                        static findClosest(name: org.apache.tomcat.util.buf.ByteChunk, array: org.apache.tomcat.util.buf.StringCache.ByteEntry[], len: number /*int*/): number /*int*/
                        /**
                         * Compare given char chunk with char array.
                         * @param name The name to compare
                         * @param compareTo The compared to data
                         * @return -1, 0 or +1 if inferior, equal, or superior to the String.
                         */
                        // @ts-ignore
                        static compare(name: org.apache.tomcat.util.buf.CharChunk, compareTo: string[]): number /*int*/
                        /**
                         * Find an entry given its name in the cache and return the associated
                         * String.
                         * @param name The name to find
                         * @return the corresponding value
                         */
                        // @ts-ignore
                        static find(name: org.apache.tomcat.util.buf.CharChunk): string
                        /**
                         * Find an entry given its name in a sorted array of map elements.
                         * This will return the index for the closest inferior or equal item in the
                         * given array.
                         * @param name The name to find
                         * @param array The array in which to look
                         * @param len The effective length of the array
                         * @return the position of the best match
                         */
                        // @ts-ignore
                        static findClosest(name: org.apache.tomcat.util.buf.CharChunk, array: org.apache.tomcat.util.buf.StringCache.CharEntry[], len: number /*int*/): number /*int*/
                    }
                }
            }
        }
    }
}
