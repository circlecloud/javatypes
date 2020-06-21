declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace net {
                    /**
                     * Properties that can be set in the &lt;Connector&gt; element
                     * in server.xml. All properties are prefixed with &quot;socket.&quot;
                     * and are currently only working for the Nio connector
                     */
                    // @ts-ignore
                    class SocketProperties extends java.lang.Object {
                        // @ts-ignore
                        constructor()
                        /**
                         * Enable/disable socket processor cache, this bounded cache stores
                         * SocketProcessor objects to reduce GC
                         * Default is 500
                         * -1 is unlimited
                         * 0 is disabled
                         */
                        // @ts-ignore
                        processorCache: number /*int*/
                        /**
                         * Enable/disable poller event cache, this bounded cache stores
                         * PollerEvent objects to reduce GC for the poller
                         * Default is 500
                         * -1 is unlimited
                         * 0 is disabled
                         * &gt;0 the max number of objects to keep in cache.
                         */
                        // @ts-ignore
                        eventCache: number /*int*/
                        /**
                         * Enable/disable direct buffers for the network buffers
                         * Default value is disabled
                         */
                        // @ts-ignore
                        directBuffer: boolean
                        /**
                         * Enable/disable direct buffers for the network buffers for SSL
                         * Default value is disabled
                         */
                        // @ts-ignore
                        directSslBuffer: boolean
                        /**
                         * Socket receive buffer size in bytes (SO_RCVBUF).
                         * JVM default used if not set.
                         */
                        // @ts-ignore
                        rxBufSize: java.lang.Integer | number
                        /**
                         * Socket send buffer size in bytes (SO_SNDBUF).
                         * JVM default used if not set.
                         */
                        // @ts-ignore
                        txBufSize: java.lang.Integer | number
                        /**
                         * The application read buffer size in bytes.
                         * Default value is rxBufSize
                         */
                        // @ts-ignore
                        appReadBufSize: number /*int*/
                        /**
                         * The application write buffer size in bytes
                         * Default value is txBufSize
                         */
                        // @ts-ignore
                        appWriteBufSize: number /*int*/
                        /**
                         * NioChannel pool size for the endpoint,
                         * this value is how many channels
                         * -1 means unlimited cached, 0 means no cache
                         * Default value is 500
                         */
                        // @ts-ignore
                        bufferPool: number /*int*/
                        /**
                         * Buffer pool size in bytes to be cached
                         * -1 means unlimited, 0 means no cache
                         * Default value is 100MB (1024*1024*100 bytes)
                         */
                        // @ts-ignore
                        bufferPoolSize: number /*int*/
                        /**
                         * TCP_NO_DELAY option. JVM default used if not set.
                         */
                        // @ts-ignore
                        tcpNoDelay: java.lang.Boolean
                        /**
                         * SO_KEEPALIVE option. JVM default used if not set.
                         */
                        // @ts-ignore
                        soKeepAlive: java.lang.Boolean
                        /**
                         * OOBINLINE option. JVM default used if not set.
                         */
                        // @ts-ignore
                        ooBInline: java.lang.Boolean
                        /**
                         * SO_REUSEADDR option. JVM default used if not set.
                         */
                        // @ts-ignore
                        soReuseAddress: java.lang.Boolean
                        /**
                         * SO_LINGER option, paired with the <code>soLingerTime</code> value.
                         * JVM defaults used unless both attributes are set.
                         */
                        // @ts-ignore
                        soLingerOn: java.lang.Boolean
                        /**
                         * SO_LINGER option, paired with the <code>soLingerOn</code> value.
                         * JVM defaults used unless both attributes are set.
                         */
                        // @ts-ignore
                        soLingerTime: java.lang.Integer | number
                        /**
                         * SO_TIMEOUT option. default is 20000.
                         */
                        // @ts-ignore
                        soTimeout: java.lang.Integer | number
                        /**
                         * Performance preferences according to
                         * http://docs.oracle.com/javase/1.5.0/docs/api/java/net/Socket.html#setPerformancePreferences(int,%20int,%20int)
                         * All three performance attributes must be set or the JVM defaults will be
                         * used.
                         */
                        // @ts-ignore
                        performanceConnectionTime: java.lang.Integer | number
                        /**
                         * Performance preferences according to
                         * http://docs.oracle.com/javase/1.5.0/docs/api/java/net/Socket.html#setPerformancePreferences(int,%20int,%20int)
                         * All three performance attributes must be set or the JVM defaults will be
                         * used.
                         */
                        // @ts-ignore
                        performanceLatency: java.lang.Integer | number
                        /**
                         * Performance preferences according to
                         * http://docs.oracle.com/javase/1.5.0/docs/api/java/net/Socket.html#setPerformancePreferences(int,%20int,%20int)
                         * All three performance attributes must be set or the JVM defaults will be
                         * used.
                         */
                        // @ts-ignore
                        performanceBandwidth: java.lang.Integer | number
                        /**
                         * The minimum frequency of the timeout interval to avoid excess load from
                         * the poller during high traffic
                         */
                        // @ts-ignore
                        timeoutInterval: number /*long*/
                        /**
                         * Timeout in milliseconds for an unlock to take place.
                         */
                        // @ts-ignore
                        unlockTimeout: number /*int*/
                        // @ts-ignore
                        public setProperties(socket: java.net.Socket): void
                        // @ts-ignore
                        public setProperties(socket: java.net.ServerSocket): void
                        // @ts-ignore
                        public setProperties(socket: java.nio.channels.AsynchronousSocketChannel): void
                        // @ts-ignore
                        public setProperties(socket: java.nio.channels.AsynchronousServerSocketChannel): void
                        // @ts-ignore
                        public getDirectBuffer(): boolean
                        // @ts-ignore
                        public getDirectSslBuffer(): boolean
                        // @ts-ignore
                        public getOoBInline(): boolean
                        // @ts-ignore
                        public getPerformanceBandwidth(): number /*int*/
                        // @ts-ignore
                        public getPerformanceConnectionTime(): number /*int*/
                        // @ts-ignore
                        public getPerformanceLatency(): number /*int*/
                        // @ts-ignore
                        public getRxBufSize(): number /*int*/
                        // @ts-ignore
                        public getSoKeepAlive(): boolean
                        // @ts-ignore
                        public getSoLingerOn(): boolean
                        // @ts-ignore
                        public getSoLingerTime(): number /*int*/
                        // @ts-ignore
                        public getSoReuseAddress(): boolean
                        // @ts-ignore
                        public getSoTimeout(): number /*int*/
                        // @ts-ignore
                        public getTcpNoDelay(): boolean
                        // @ts-ignore
                        public getTxBufSize(): number /*int*/
                        // @ts-ignore
                        public getBufferPool(): number /*int*/
                        // @ts-ignore
                        public getBufferPoolSize(): number /*int*/
                        // @ts-ignore
                        public getEventCache(): number /*int*/
                        // @ts-ignore
                        public getAppReadBufSize(): number /*int*/
                        // @ts-ignore
                        public getAppWriteBufSize(): number /*int*/
                        // @ts-ignore
                        public getProcessorCache(): number /*int*/
                        // @ts-ignore
                        public getTimeoutInterval(): number /*long*/
                        // @ts-ignore
                        public getDirectBufferPool(): number /*int*/
                        // @ts-ignore
                        public setPerformanceConnectionTime(performanceConnectionTime: number /*int*/): void
                        // @ts-ignore
                        public setTxBufSize(txBufSize: number /*int*/): void
                        // @ts-ignore
                        public setTcpNoDelay(tcpNoDelay: boolean): void
                        // @ts-ignore
                        public setSoTimeout(soTimeout: number /*int*/): void
                        // @ts-ignore
                        public setSoReuseAddress(soReuseAddress: boolean): void
                        // @ts-ignore
                        public setSoLingerTime(soLingerTime: number /*int*/): void
                        // @ts-ignore
                        public setSoKeepAlive(soKeepAlive: boolean): void
                        // @ts-ignore
                        public setRxBufSize(rxBufSize: number /*int*/): void
                        // @ts-ignore
                        public setPerformanceLatency(performanceLatency: number /*int*/): void
                        // @ts-ignore
                        public setPerformanceBandwidth(performanceBandwidth: number /*int*/): void
                        // @ts-ignore
                        public setOoBInline(ooBInline: boolean): void
                        // @ts-ignore
                        public setDirectBuffer(directBuffer: boolean): void
                        // @ts-ignore
                        public setDirectSslBuffer(directSslBuffer: boolean): void
                        // @ts-ignore
                        public setSoLingerOn(soLingerOn: boolean): void
                        // @ts-ignore
                        public setBufferPool(bufferPool: number /*int*/): void
                        // @ts-ignore
                        public setBufferPoolSize(bufferPoolSize: number /*int*/): void
                        // @ts-ignore
                        public setEventCache(eventCache: number /*int*/): void
                        // @ts-ignore
                        public setAppReadBufSize(appReadBufSize: number /*int*/): void
                        // @ts-ignore
                        public setAppWriteBufSize(appWriteBufSize: number /*int*/): void
                        // @ts-ignore
                        public setProcessorCache(processorCache: number /*int*/): void
                        // @ts-ignore
                        public setTimeoutInterval(timeoutInterval: number /*long*/): void
                        // @ts-ignore
                        public setDirectBufferPool(directBufferPool: number /*int*/): void
                        // @ts-ignore
                        public getUnlockTimeout(): number /*int*/
                        // @ts-ignore
                        public setUnlockTimeout(unlockTimeout: number /*int*/): void
                    }
                }
            }
        }
    }
}
