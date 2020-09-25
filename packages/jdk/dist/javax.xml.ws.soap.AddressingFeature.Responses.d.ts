declare namespace javax {
    namespace xml {
        namespace ws {
            namespace soap {
                namespace AddressingFeature {
                    /**
                     * If addressing is enabled, this property determines if endpoint requires
                     * the use of only anonymous responses, or only non-anonymous responses, or all.
                     * <p>
                     * {@link Responses#ALL} supports all response types and this is the default
                     * value.
                     * <p>
                     * {@link Responses#ANONYMOUS} requires the use of only anonymous
                     * responses. It will result into wsam:AnonymousResponses nested assertion
                     * as specified in
                     * <a href="http://www.w3.org/TR/ws-addr-metadata/#wspolicyanonresponses">
                     * 3.1.2 AnonymousResponses Assertion</a> in the generated WSDL.
                     * <p>
                     * {@link Responses#NON_ANONYMOUS} requires the use of only non-anonymous
                     * responses. It will result into
                     * wsam:NonAnonymousResponses nested assertion as specified in
                     * <a href="http://www.w3.org/TR/ws-addr-metadata/#wspolicynonanonresponses">
                     * 3.1.3 NonAnonymousResponses Assertion</a> in the generated WSDL.
                     * @since JAX-WS 2.2
                     */
                    // @ts-ignore
                    class Responses extends java.lang.Enum<javax.xml.ws.soap.AddressingFeature.Responses> {
                        /**
                         * Specifies the use of only anonymous
                         * responses. It will result into wsam:AnonymousResponses nested assertion
                         * as specified in
                         * <a href="http://www.w3.org/TR/ws-addr-metadata/#wspolicyanonresponses">
                         * 3.1.2 AnonymousResponses Assertion</a> in the generated WSDL.
                         */
                        // @ts-ignore
                        public static readonly ANONYMOUS: javax.xml.ws.soap.AddressingFeature.Responses
                        /**
                         * Specifies the use of only non-anonymous
                         * responses. It will result into
                         * wsam:NonAnonymousResponses nested assertion as specified in
                         * <a href="http://www.w3.org/TR/ws-addr-metadata/#wspolicynonanonresponses">
                         * 3.1.3 NonAnonymousResponses Assertion</a> in the generated WSDL.
                         */
                        // @ts-ignore
                        public static readonly NON_ANONYMOUS: javax.xml.ws.soap.AddressingFeature.Responses
                        /**
                         * Supports all response types and this is the default
                         */
                        // @ts-ignore
                        public static readonly ALL: javax.xml.ws.soap.AddressingFeature.Responses
                        // @ts-ignore
                        public static values(): javax.xml.ws.soap.AddressingFeature.Responses[]
                        // @ts-ignore
                        public static valueOf(name: java.lang.String | string): javax.xml.ws.soap.AddressingFeature.Responses
                    }
                }
            }
        }
    }
}
