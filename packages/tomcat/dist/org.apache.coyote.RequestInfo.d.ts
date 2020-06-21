declare namespace org {
    namespace apache {
        namespace coyote {
            /**
             * Structure holding the Request and Response objects. It also holds statistical
             * informations about request processing and provide management informations
             * about the requests being processed.
             * Each thread uses a Request/Response pair that is recycled on each request.
             * This object provides a place to collect global low-level statistics - without
             * having to deal with synchronization ( since each thread will have it's own
             * RequestProcessorMX ).
             * @author Costin Manolache
             */
            // @ts-ignore
            class RequestInfo extends java.lang.Object {
                // @ts-ignore
                constructor(req: org.apache.coyote.Request)
                // @ts-ignore
                public getGlobalProcessor(): org.apache.coyote.RequestGroupInfo
                // @ts-ignore
                public setGlobalProcessor(global: org.apache.coyote.RequestGroupInfo): void
                // @ts-ignore
                public getMethod(): string
                // @ts-ignore
                public getCurrentUri(): string
                // @ts-ignore
                public getCurrentQueryString(): string
                // @ts-ignore
                public getProtocol(): string
                // @ts-ignore
                public getVirtualHost(): string
                // @ts-ignore
                public getServerPort(): number /*int*/
                // @ts-ignore
                public getRemoteAddr(): string
                /**
                 * Obtain the remote address for this connection as reported by an
                 * intermediate proxy (if any).
                 * @return The remote address for the this connection
                 */
                // @ts-ignore
                public getRemoteAddrForwarded(): string
                // @ts-ignore
                public getContentLength(): number /*int*/
                // @ts-ignore
                public getRequestBytesReceived(): number /*long*/
                // @ts-ignore
                public getRequestBytesSent(): number /*long*/
                // @ts-ignore
                public getRequestProcessingTime(): number /*long*/
                // @ts-ignore
                public getStage(): number /*int*/
                // @ts-ignore
                public setStage(stage: number /*int*/): void
                // @ts-ignore
                public getBytesSent(): number /*long*/
                // @ts-ignore
                public setBytesSent(bytesSent: number /*long*/): void
                // @ts-ignore
                public getBytesReceived(): number /*long*/
                // @ts-ignore
                public setBytesReceived(bytesReceived: number /*long*/): void
                // @ts-ignore
                public getProcessingTime(): number /*long*/
                // @ts-ignore
                public setProcessingTime(processingTime: number /*long*/): void
                // @ts-ignore
                public getMaxTime(): number /*long*/
                // @ts-ignore
                public setMaxTime(maxTime: number /*long*/): void
                // @ts-ignore
                public getMaxRequestUri(): string
                // @ts-ignore
                public setMaxRequestUri(maxRequestUri: java.lang.String | string): void
                // @ts-ignore
                public getRequestCount(): number /*int*/
                // @ts-ignore
                public setRequestCount(requestCount: number /*int*/): void
                // @ts-ignore
                public getErrorCount(): number /*int*/
                // @ts-ignore
                public setErrorCount(errorCount: number /*int*/): void
                // @ts-ignore
                public getWorkerThreadName(): string
                // @ts-ignore
                public getRpName(): javax.management.ObjectName
                // @ts-ignore
                public getLastRequestProcessingTime(): number /*long*/
                // @ts-ignore
                public setWorkerThreadName(workerThreadName: java.lang.String | string): void
                // @ts-ignore
                public setRpName(rpName: javax.management.ObjectName): void
                // @ts-ignore
                public setLastRequestProcessingTime(lastRequestProcessingTime: number /*long*/): void
            }
        }
    }
}
