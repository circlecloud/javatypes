declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace websocket {
                // @ts-ignore
                class TransformationResult extends java.lang.Enum<org.apache.tomcat.websocket.TransformationResult> {
                    /**
                     * The end of the available data was reached before the WebSocket frame was
                     * completely read.
                     */
                    // @ts-ignore
                    readonly UNDERFLOW: org.apache.tomcat.websocket.TransformationResult
                    /**
                     * The provided destination buffer was filled before all of the available
                     * data from the WebSocket frame could be processed.
                     */
                    // @ts-ignore
                    readonly OVERFLOW: org.apache.tomcat.websocket.TransformationResult
                    /**
                     * The end of the WebSocket frame was reached and all the data from that
                     * frame processed into the provided destination buffer.
                     */
                    // @ts-ignore
                    readonly END_OF_FRAME: org.apache.tomcat.websocket.TransformationResult
                    // @ts-ignore
                    values(): org.apache.tomcat.websocket.TransformationResult[]
                    // @ts-ignore
                    valueOf(name: java.lang.String | string): org.apache.tomcat.websocket.TransformationResult
                }
            }
        }
    }
}
