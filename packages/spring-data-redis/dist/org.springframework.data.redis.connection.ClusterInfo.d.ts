declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    /**
                     * {@link ClusterInfo} gives access to cluster information such as {@code cluster_state} and
                     * {@code cluster_slots_assigned} provided by the {@code CLUSTER INFO} command.
                     * @author Christoph Strobl
                     * @since 1.7
                     */
                    // @ts-ignore
                    class ClusterInfo extends java.lang.Object {
                        /**
                         * Creates new {@link ClusterInfo} for given {@link Properties}.
                         * @param clusterProperties must not be {#literal null}.
                         */
                        // @ts-ignore
                        constructor(clusterProperties: java.util.Properties)
                        /**
                         * @see Info#STATE
                         * @return {#literal null} if no entry found for requested {@link Info#STATE}.
                         */
                        // @ts-ignore
                        public getState(): string
                        /**
                         * @see Info#SLOTS_ASSIGNED
                         * @return {#literal null} if no entry found for requested {@link Info#SLOTS_ASSIGNED}.
                         */
                        // @ts-ignore
                        public getSlotsAssigned(): number
                        /**
                         * @see Info#SLOTS_OK
                         * @return {#literal null} if no entry found for requested {@link Info#SLOTS_OK}.
                         */
                        // @ts-ignore
                        public getSlotsOk(): number
                        /**
                         * @see Info#SLOTS_PFAIL
                         * @return {#literal null} if no entry found for requested {@link Info#SLOTS_PFAIL}.
                         */
                        // @ts-ignore
                        public getSlotsPfail(): number
                        /**
                         * @see Info#SLOTS_FAIL
                         * @return {#literal null} if no entry found for requested {@link Info#SLOTS_FAIL}.
                         */
                        // @ts-ignore
                        public getSlotsFail(): number
                        /**
                         * @see Info#KNOWN_NODES
                         * @return {#literal null} if no entry found for requested {@link Info#KNOWN_NODES}.
                         */
                        // @ts-ignore
                        public getKnownNodes(): number
                        /**
                         * @see Info#SIZE
                         * @return {#literal null} if no entry found for requested {@link Info#SIZE}.
                         */
                        // @ts-ignore
                        public getClusterSize(): number
                        /**
                         * @see Info#CURRENT_EPOCH
                         * @return {#literal null} if no entry found for requested {@link Info#CURRENT_EPOCH}.
                         */
                        // @ts-ignore
                        public getCurrentEpoch(): number
                        /**
                         * @see Info#MESSAGES_SENT
                         * @return {#literal null} if no entry found for requested {@link Info#MESSAGES_SENT}.
                         */
                        // @ts-ignore
                        public getMessagesSent(): number
                        /**
                         * @see Info#MESSAGES_RECEIVED
                         * @return {#literal null} if no entry found for requested {@link Info#MESSAGES_RECEIVED}.
                         */
                        // @ts-ignore
                        public getMessagesReceived(): number
                        /**
                         * @param info must not be null
                         * @return {#literal null} if no entry found for requested {@link INFO}.
                         */
                        // @ts-ignore
                        public get(info: org.springframework.data.redis.connection.ClusterInfo.Info): string
                        /**
                         * @param key must not be {#literal null} or {@literal empty}.
                         * @return {#literal null} if no entry found for requested {@code key}.
                         */
                        // @ts-ignore
                        public get(key: java.lang.String | string): string
                        // @ts-ignore
                        public toString(): string
                    }
                }
            }
        }
    }
}
