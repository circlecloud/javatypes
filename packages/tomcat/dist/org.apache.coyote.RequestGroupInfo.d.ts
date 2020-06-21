declare namespace org {
    namespace apache {
        namespace coyote {
            /**
             * This can be moved to top level ( eventually with a better name ).
             * It is currently used only as a JMX artifact, to aggregate the data
             * collected from each RequestProcessor thread.
             */
            // @ts-ignore
            class RequestGroupInfo extends org.apache.tomcat.util.modeler.BaseModelMBean {
                // @ts-ignore
                constructor()
                // @ts-ignore
                public addRequestProcessor(rp: org.apache.coyote.RequestInfo): void
                // @ts-ignore
                public removeRequestProcessor(rp: org.apache.coyote.RequestInfo): void
                // @ts-ignore
                public getMaxTime(): number /*long*/
                // @ts-ignore
                public setMaxTime(maxTime: number /*long*/): void
                // @ts-ignore
                public getProcessingTime(): number /*long*/
                // @ts-ignore
                public setProcessingTime(totalTime: number /*long*/): void
                // @ts-ignore
                public getRequestCount(): number /*int*/
                // @ts-ignore
                public setRequestCount(requestCount: number /*int*/): void
                // @ts-ignore
                public getErrorCount(): number /*int*/
                // @ts-ignore
                public setErrorCount(errorCount: number /*int*/): void
                // @ts-ignore
                public getBytesReceived(): number /*long*/
                // @ts-ignore
                public setBytesReceived(bytesReceived: number /*long*/): void
                // @ts-ignore
                public getBytesSent(): number /*long*/
                // @ts-ignore
                public setBytesSent(bytesSent: number /*long*/): void
                // @ts-ignore
                public resetCounters(): void
            }
        }
    }
}
