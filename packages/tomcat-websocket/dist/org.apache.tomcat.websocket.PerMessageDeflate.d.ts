declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace websocket {
                // @ts-ignore
                class PerMessageDeflate extends java.lang.Object implements org.apache.tomcat.websocket.Transformation {
                    // @ts-ignore
                    public static readonly NAME: java.lang.String | string
                    // @ts-ignore
                    public getMoreData(opCode: number /*byte*/, fin: boolean, rsv: number /*int*/, dest: java.nio.ByteBuffer): org.apache.tomcat.websocket.TransformationResult
                    // @ts-ignore
                    public validateRsv(rsv: number /*int*/, opCode: number /*byte*/): boolean
                    // @ts-ignore
                    public getExtensionResponse(): Extension
                    // @ts-ignore
                    public setNext(t: org.apache.tomcat.websocket.Transformation): void
                    // @ts-ignore
                    public validateRsvBits(i: number /*int*/): boolean
                    // @ts-ignore
                    public sendMessagePart(uncompressedParts: java.util.List<org.apache.tomcat.websocket.MessagePart> | Array<org.apache.tomcat.websocket.MessagePart>): Array<org.apache.tomcat.websocket.MessagePart>
                    // @ts-ignore
                    public close(): void
                }
            }
        }
    }
}
