declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace websocket {
                /**
                 * The internal representation of the transformation that a WebSocket extension
                 * performs on a message.
                 */
                // @ts-ignore
                interface Transformation {
                    /**
                     * Sets the next transformation in the pipeline.
                     * @param t The next transformation
                     */
                    // @ts-ignore
                    setNext(t: org.apache.tomcat.websocket.Transformation): void
                    /**
                     * Validate that the RSV bit(s) required by this transformation are not
                     * being used by another extension. The implementation is expected to set
                     * any bits it requires before passing the set of in-use bits to the next
                     * transformation.
                     * @param i         The RSV bits marked as in use so far as an int in the
                     *                   range zero to seven with RSV1 as the MSB and RSV3 as the
                     *                   LSB
                     * @return <code>true</code> if the combination of RSV bits used by the
                     *          transformations in the pipeline do not conflict otherwise
                     *          <code>false</code>
                     */
                    // @ts-ignore
                    validateRsvBits(i: number /*int*/): boolean
                    /**
                     * Obtain the extension that describes the information to be returned to the
                     * client.
                     * @return The extension information that describes the parameters that have
                     *          been agreed for this transformation
                     */
                    // @ts-ignore
                    getExtensionResponse(): Extension
                    /**
                     * Obtain more input data.
                     * @param opCode    The opcode for the frame currently being processed
                     * @param fin       Is this the final frame in this WebSocket message?
                     * @param rsv       The reserved bits for the frame currently being
                     *                       processed
                     * @param dest      The buffer in which the data is to be written
                     * @return The result of trying to read more data from the transform
                     * @throws IOException If an I/O error occurs while reading data from the
                     *          transform
                     */
                    // @ts-ignore
                    getMoreData(opCode: number /*byte*/, fin: boolean, rsv: number /*int*/, dest: java.nio.ByteBuffer): org.apache.tomcat.websocket.TransformationResult
                    /**
                     * Validates the RSV and opcode combination (assumed to have been extracted
                     * from a WebSocket Frame) for this extension. The implementation is
                     * expected to unset any RSV bits it has validated before passing the
                     * remaining RSV bits to the next transformation in the pipeline.
                     * @param rsv       The RSV bits received as an int in the range zero to
                     *                   seven with RSV1 as the MSB and RSV3 as the LSB
                     * @param opCode    The opCode received
                     * @return <code>true</code> if the RSV is valid otherwise
                     *          <code>false</code>
                     */
                    // @ts-ignore
                    validateRsv(rsv: number /*int*/, opCode: number /*byte*/): boolean
                    /**
                     * Takes the provided list of messages, transforms them, passes the
                     * transformed list on to the next transformation (if any) and then returns
                     * the resulting list of message parts after all of the transformations have
                     * been applied.
                     * @param messageParts  The list of messages to be transformed
                     * @return The list of messages after this any any subsequent
                     *           transformations have been applied. The size of the returned list
                     *           may be bigger or smaller than the size of the input list
                     * @throws IOException If an error occurs during the transformation of the
                     *                      message parts
                     */
                    // @ts-ignore
                    sendMessagePart(messageParts: java.util.List<org.apache.tomcat.websocket.MessagePart> | Array<org.apache.tomcat.websocket.MessagePart>): Array<org.apache.tomcat.websocket.MessagePart>
                    /**
                     * Clean-up any resources that were used by the transformation.
                     */
                    // @ts-ignore
                    close(): void
                }
            }
        }
    }
}
