declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace text {
                namespace channel {
                    /**
                     * Represents a channel that takes a message and transforms it for distribution
                     * to a mutable list of members.
                     */
                    // @ts-ignore
                    interface MutableMessageChannel extends org.spongepowered.api.text.channel.MessageChannel {
                        /**
                         * Adds a member to this channel.
                         * @param member The member to add
                         * @return {#code true} if this channel did not already contain the member
                         */
                        // @ts-ignore
                        addMember(member: org.spongepowered.api.text.channel.MessageReceiver): boolean
                        /**
                         * Removes a member from this channel.
                         * @param member The member to remove
                         * @return {#code true} if this channel contained the specified member
                         */
                        // @ts-ignore
                        removeMember(member: org.spongepowered.api.text.channel.MessageReceiver): boolean
                        /**
                         * Removes all of the members from this channel.
                         */
                        // @ts-ignore
                        clearMembers(): void
                        // @ts-ignore
                        asMutable(): org.spongepowered.api.text.channel.MutableMessageChannel
                    }
                }
            }
        }
    }
}
